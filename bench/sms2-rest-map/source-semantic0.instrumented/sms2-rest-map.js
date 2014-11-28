function v13() {
  var v870 = document.forms;
  var v731 = v870[0];
  var v444 = v731.elements;
  var v14 = v444[0];
  v14.value = " ";
  return;
}
function v12() {
  try {
    restMap(document);
  } catch (e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15);
  }
  return;
}
function v11() {
  var v445 = document.main_form;
  var v16 = v445.main_submit;
  v16.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    introspect(JAM.policy.p15) {
      return p1$$5.replace(/./g, " ");
    }
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    introspect(JAM.policy.p15) {
      return p1$$4.replace(/./g, " ");
    }
  }
  var v17 = outputWindow.document;
  var v446 = this.positionLabel;
  var v18 = rightNum(v446, "", 8, "");
  introspect(JAM.policy.p17) {
    v17.write(v18);
  }
  var v447 = this.characters;
  introspect(JAM.policy.p27) {
    var v19 = v447.slice(start$$10, stop$$6)
  }
  introspect(JAM.policy.p10) {
    var text$$15 = v19.join("")
  }
  introspect(JAM.policy.p15) {
    text$$15 = text$$15.replace(/^(\d+)/g, v8);
  }
  introspect(JAM.policy.p15) {
    text$$15 = text$$15.replace(/(\d+)$/g, v9);
  }
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  introspect(JAM.policy.p17) {
    v20.write(v21);
  }
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return;
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v448 = this.positionLabel;
  var v25 = rightNum(v448, "", 8, "");
  introspect(JAM.policy.p17) {
    v24.write(v25);
  }
  var v26 = outputWindow.document;
  var v871 = this.characters;
  introspect(JAM.policy.p27) {
    var v732 = v871.slice(start$$9, stop$$5)
  }
  introspect(JAM.policy.p10) {
    var v449 = v732.join("")
  }
  var v27 = v449 + "\n";
  introspect(JAM.policy.p17) {
    v26.write(v27);
  }
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return;
}
function v6(start$$8, stop$$4) {
  var v733 = this.characters;
  introspect(JAM.policy.p27) {
    var v450 = v733.slice(start$$8, stop$$4)
  }
  introspect(JAM.policy.p10) {
    var v30 = v450.join("")
  }
  var textToWrite = v30 + "\n";
  introspect(JAM.policy.p16) {
    var v451 = textToWrite.search(/\w/)
  }
  var v36 = v451 != -1;
  if (v36) {
    var v31 = outputWindow.document;
    var v452 = this.positionLabel;
    var v32 = rightNum(v452, "", 8, "");
    introspect(JAM.policy.p17) {
      v31.write(v32);
    }
    var v33 = this.positionLabel;
    introspect(JAM.policy.p16) {
      var v453 = textToWrite.match(/[A-Z]/g)
    }
    var v34 = v453.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    introspect(JAM.policy.p17) {
      v35.write(textToWrite);
    }
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v454 = this.positionLabel;
  var v38 = rightNum(v454, "", 8, "");
  introspect(JAM.policy.p17) {
    v37.write(v38);
  }
  var v39 = outputWindow.document;
  var v872 = this.characters;
  introspect(JAM.policy.p27) {
    var v734 = v872.slice(start$$7, stop$$3)
  }
  introspect(JAM.policy.p10) {
    var v455 = v734.join("")
  }
  var v40 = v455 + "\n";
  introspect(JAM.policy.p17) {
    v39.write(v40);
  }
  var v41 = this.positionLabel;
  var v456 = stop$$3 - start$$7;
  var v42 = v456 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v457 = arrayOfSequences.length;
  var v44 = v457 < 2;
  if (v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v458 = arrayOfTitles.length;
  var v46 = i$$1 < v458;
  for (;v46;) {
    var v967 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v873 = v967.search(/\S/)
    }
    var v735 = v873 == -1;
    var v875 = !v735;
    if (v875) {
      var v968 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v874 = v968.search(/\S/)
      }
      v735 = v874 == -1;
    }
    var v459 = v735;
    var v737 = !v459;
    if (v737) {
      var v876 = arrayOfSequences[i$$1];
      var v736 = v876.length;
      v459 = v736 != lengthOfAlign;
    }
    var v45 = v459;
    if (v45) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v460 = arrayOfTitles.length;
    v46 = i$$1 < v460;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v1037 = codonTable.search(/AmAcid/)
  }
  var v969 = v1037 == -1;
  var v1039 = !v969;
  if (v1039) {
    introspect(JAM.policy.p16) {
      var v1038 = codonTable.search(/Codon/)
    }
    v969 = v1038 == -1;
  }
  var v877 = v969;
  var v971 = !v877;
  if (v971) {
    introspect(JAM.policy.p16) {
      var v970 = codonTable.search(/Number/)
    }
    v877 = v970 == -1;
  }
  var v738 = v877;
  var v879 = !v738;
  if (v879) {
    introspect(JAM.policy.p16) {
      var v878 = codonTable.search(/\/1000/)
    }
    v738 = v878 == -1;
  }
  var v461 = v738;
  var v740 = !v461;
  if (v740) {
    introspect(JAM.policy.p16) {
      var v739 = codonTable.search(/Fraction\s*\.\./)
    }
    v461 = v739 == -1;
  }
  var v47 = v461;
  if (v47) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v741 = formElement.value;
  introspect(JAM.policy.p16) {
    var v462 = v741.search(/\S/)
  }
  var v48 = v462 == -1;
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
  var v463 = arrayOfPatterns.length;
  var v51 = z$$2 < v463;
  for (;v51;) {
    var v742 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v464 = v742.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v49 = v464 == -1;
    if (v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v743 = arrayOfPatterns[z$$2];
    var v465 = moreExpressionCheck(v743);
    var v50 = v465 == false;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v466 = arrayOfPatterns.length;
    v51 = z$$2 < v466;
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v467 = arrayOfPatterns.length;
  var v57 = j < v467;
  for (;v57;) {
    var v744 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v468 = v744.match(/\/.+\//)
    }
    var v54 = v468 + "gi";
    var v1510 = eval(v54);
    geneticCodeMatchExp[j] = v1510;
    var v469 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v55 = v469.match(/=[a-zA-Z\*]/)
    }
    var v1511 = v55.toString();
    geneticCodeMatchResult[j] = v1511;
    var v56 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v1512 = v56.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1512;
    j++;
    var v470 = arrayOfPatterns.length;
    v57 = j < v470;
  }
  var i$$2 = 0;
  var v745 = testSequence.length;
  var v471 = v745 - 3;
  var v64 = i$$2 <= v471;
  for (;v64;) {
    var v58 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v58);
    }
    j = 0;
    var v472 = geneticCodeMatchExp.length;
    var v62 = j < v472;
    for (;v62;) {
      var v746 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v473 = codon.search(v746)
      }
      var v61 = v473 != -1;
      if (v61) {
        var v60 = oneMatch == true;
        if (v60) {
          var v474 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v59 = v474 + ".";
          alert(v59);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v475 = geneticCodeMatchExp.length;
      v62 = j < v475;
    }
    var v63 = oneMatch == false;
    if (v63) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v747 = testSequence.length;
    var v476 = v747 - 3;
    v64 = i$$2 <= v476;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v477 = arrayOfPatterns$$1.length;
  var v66 = z$$3 < v477;
  for (;v66;) {
    var v748 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v478 = v748.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v65 = v478 != -1;
    if (v65) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v479 = arrayOfPatterns$$1.length;
    v66 = z$$3 < v479;
  }
  var i$$3 = 0;
  var v480 = arrayOfPatterns$$1.length;
  var v70 = i$$3 < v480;
  for (;v70;) {
    var v749 = arrayOfPatterns$$1[i$$3];
    var v481 = "[" + v749;
    var v67 = v481 + "]";
    var re = new RegExp(v67, "gi");
    var j$$1 = i$$3 + 1;
    var v482 = arrayOfPatterns$$1.length;
    var v69 = j$$1 < v482;
    for (;v69;) {
      var v750 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v483 = v750.search(re)
      }
      var v68 = v483 != -1;
      if (v68) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v484 = arrayOfPatterns$$1.length;
      v69 = j$$1 < v484;
    }
    i$$3++;
    var v485 = arrayOfPatterns$$1.length;
    v70 = i$$3 < v485;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v486 = arrayOfPatterns$$2.length;
  var v73 = z$$4 < v486;
  for (;v73;) {
    var v751 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v487 = v751.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v71 = v487 == -1;
    if (v71) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v752 = arrayOfPatterns$$2[z$$4];
    var v488 = moreExpressionCheck(v752);
    var v72 = v488 == false;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v489 = arrayOfPatterns$$2.length;
    v73 = z$$4 < v489;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v880 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v753 = v880.replace(/[^A-Za-z]/g, "")
  }
  var v490 = v753.length;
  var v75 = v490 > maxInput;
  if (v75) {
    var v491 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v74 = v491 + " characters.";
    alert(v74);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v492 = text$$8.length;
  var v77 = v492 > maxInput$$1;
  if (v77) {
    var v493 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v76 = v493 + " characters.";
    alert(v76);
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
  var v78 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v78.write("</form>");
  }
  return true;
}
function closePre() {
  var v79 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v79.write("</div>");
  }
  var v80 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v80.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v81 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v81.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v82 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v82.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v83 = outputWindow.document;
  v83.close();
  return true;
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
  var v494 = alignArray.length;
  var v84 = v494 < 3;
  if (v84) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v495 = alignArray.length;
  var v86 = i$$4 < v495;
  for (;v86;) {
    var v754 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v496 = v754.search(/[^\s]+\s/)
    }
    var v85 = v496 == -1;
    if (v85) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v497 = alignArray.length;
    v86 = i$$4 < v497;
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
  introspect(JAM.policy.p16) {
    var v498 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v89 = v498 != -1;
  if (v89) {
    introspect(JAM.policy.p17) {
      var v88 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v88;) {
      var v87 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v87);
      }
      introspect(JAM.policy.p17) {
        v88 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v499 = sequence$$2.length;
  var v90 = "&gt;results for " + v499;
  var stringToReturn = v90 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v500 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v92 = v500 != -1;
  if (v92) {
    var v501 = stringToReturn + '"';
    var v91 = v501 + fastaSequenceTitle;
    stringToReturn = v91 + '"';
  }
  var v502 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v503 = sequence$$2.substring(0, 10)
  }
  var v93 = v502 + v503;
  stringToReturn = v93 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v504 = sequenceOne.length;
  var v94 = "Search results for " + v504;
  var stringToReturn$$1 = v94 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v505 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v96 = v505 != -1;
  if (v96) {
    var v506 = stringToReturn$$1 + '"';
    var v95 = v506 + fastaSequenceTitleOne;
    stringToReturn$$1 = v95 + '"';
  }
  var v507 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v508 = sequenceOne.substring(0, 10)
  }
  var v97 = v507 + v508;
  stringToReturn$$1 = v97 + '"\n';
  var v509 = stringToReturn$$1 + "and ";
  var v510 = sequenceTwo.length;
  var v98 = v509 + v510;
  stringToReturn$$1 = v98 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v511 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v100 = v511 != -1;
  if (v100) {
    var v512 = stringToReturn$$1 + '"';
    var v99 = v512 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v99 + '"';
  }
  var v513 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v514 = sequenceTwo.substring(0, 10)
  }
  var v101 = v513 + v514;
  stringToReturn$$1 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$1;
  return v102 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v103 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v103);
  var j$$2 = 0;
  var v515 = arrayOfPatterns$$3.length;
  var v105 = j$$2 < v515;
  for (;v105;) {
    var v755 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v516 = v755.match(/\/.+\//)
    }
    var v104 = v516 + "gi";
    var v1513 = eval(v104);
    geneticCodeMatchExp$$1[j$$2] = v1513;
    j$$2++;
    var v517 = arrayOfPatterns$$3.length;
    v105 = j$$2 < v517;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v106 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v106);
  var j$$3 = 0;
  var v518 = arrayOfPatterns$$4.length;
  var v109 = j$$3 < v518;
  for (;v109;) {
    var v519 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v107 = v519.match(/=[a-zA-Z\*]/)
    }
    var v1514 = v107.toString();
    geneticCodeMatchResult$$1[j$$3] = v1514;
    var v108 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v1515 = v108.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1515;
    j$$3++;
    var v520 = arrayOfPatterns$$4.length;
    v109 = j$$3 < v520;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v521 = sequence$$3.length;
  var v110 = "Results for " + v521;
  var stringToReturn$$2 = v110 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v522 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v112 = v522 != -1;
  if (v112) {
    var v523 = stringToReturn$$2 + '"';
    var v111 = v523 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v111 + '"';
  }
  var v524 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v525 = sequence$$3.substring(0, 10)
  }
  var v113 = v524 + v525;
  stringToReturn$$2 = v113 + '"';
  var v114 = '<div class="info">' + stringToReturn$$2;
  return v114 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v756 = "Results for " + topology;
  var v526 = v756 + " ";
  var v527 = sequence$$4.length;
  var v115 = v526 + v527;
  var stringToReturn$$3 = v115 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v528 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v117 = v528 != -1;
  if (v117) {
    var v529 = stringToReturn$$3 + '"';
    var v116 = v529 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v116 + '"';
  }
  var v530 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v531 = sequence$$4.substring(0, 10)
  }
  var v118 = v530 + v531;
  stringToReturn$$3 = v118 + '"';
  var v119 = '<div class="info">' + stringToReturn$$3;
  return v119 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v532 = sequenceOne$$1.length;
  var v120 = "Alignment results for " + v532;
  var stringToReturn$$4 = v120 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v533 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v122 = v533 != -1;
  if (v122) {
    var v534 = stringToReturn$$4 + '"';
    var v121 = v534 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v121 + '"';
  }
  var v535 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v536 = sequenceOne$$1.substring(0, 10)
  }
  var v123 = v535 + v536;
  stringToReturn$$4 = v123 + '"\n';
  var v537 = stringToReturn$$4 + "and ";
  var v538 = sequenceTwo$$1.length;
  var v124 = v537 + v538;
  stringToReturn$$4 = v124 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v539 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v126 = v539 != -1;
  if (v126) {
    var v540 = stringToReturn$$4 + '"';
    var v125 = v540 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v125 + '"';
  }
  var v541 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v542 = sequenceTwo$$1.substring(0, 10)
  }
  var v127 = v541 + v542;
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
    var v543 = Math.random();
    var v544 = components.length;
    var v129 = v543 * v544;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v129);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v130 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p10) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v545 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v131 = v545 != -1;
  if (v131) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v546 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v133 = v546 != -1;
  if (v133) {
    introspect(JAM.policy.p15) {
      var v132 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v132.toString();
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
  introspect(JAM.policy.p16) {
    var v1252 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1227 = v1252 != -1;
  var v1254 = !v1227;
  if (v1254) {
    introspect(JAM.policy.p16) {
      var v1253 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1227 = v1253 != -1;
  }
  var v1200 = v1227;
  var v1229 = !v1200;
  if (v1229) {
    introspect(JAM.policy.p16) {
      var v1228 = expressionToCheck.search(/\[\]/)
    }
    v1200 = v1228 != -1;
  }
  var v1173 = v1200;
  var v1202 = !v1173;
  if (v1202) {
    introspect(JAM.policy.p16) {
      var v1201 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1173 = v1201 != -1;
  }
  var v1137 = v1173;
  var v1175 = !v1137;
  if (v1175) {
    introspect(JAM.policy.p16) {
      var v1174 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1137 = v1174 != -1;
  }
  var v1089 = v1137;
  var v1139 = !v1089;
  if (v1139) {
    introspect(JAM.policy.p16) {
      var v1138 = expressionToCheck.search(/\|\|/)
    }
    v1089 = v1138 != -1;
  }
  var v1040 = v1089;
  var v1091 = !v1040;
  if (v1091) {
    introspect(JAM.policy.p16) {
      var v1090 = expressionToCheck.search(/\/\|/)
    }
    v1040 = v1090 != -1;
  }
  var v972 = v1040;
  var v1042 = !v972;
  if (v1042) {
    introspect(JAM.policy.p16) {
      var v1041 = expressionToCheck.search(/\|\//)
    }
    v972 = v1041 != -1;
  }
  var v881 = v972;
  var v974 = !v881;
  if (v974) {
    introspect(JAM.policy.p16) {
      var v973 = expressionToCheck.search(/\[.\]/)
    }
    v881 = v973 != -1;
  }
  var v757 = v881;
  var v883 = !v757;
  if (v883) {
    introspect(JAM.policy.p16) {
      var v882 = expressionToCheck.search(/\</)
    }
    v757 = v882 != -1;
  }
  var v547 = v757;
  var v759 = !v547;
  if (v759) {
    introspect(JAM.policy.p16) {
      var v758 = expressionToCheck.search(/\>/)
    }
    v547 = v758 != -1;
  }
  var v134 = v547;
  if (v134) {
    return false;
  }
  return true;
}
function openForm() {
  var v135 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v135.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v136 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v136.write("<pre>");
  }
  var v137 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v137.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v138 = outputWindow.document;
  introspect(JAM.policy.p10) {
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
  var v884 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v760 = v884 + "<head>\n";
  var v548 = v760 + "<title>Sequence Manipulation Suite</title>\n";
  var v140 = v548 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v139.write(v140);
  }
  if (isColor) {
    var v141 = outputWindow.document;
    var v1321 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1299 = v1321 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1277 = v1299 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1255 = v1277 + "div.info {font-weight: bold}\n";
    var v1230 = v1255 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1230 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1176 = v1203 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1140 = v1176 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1092 = v1140 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1043 = v1092 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v975 = v1043 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v885 = v975 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v761 = v885 + "td.many {color: #000000}\n";
    var v549 = v761 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v142 = v549 + "</style>\n";
    introspect(JAM.policy.p17) {
      v141.write(v142);
    }
  } else {
    var v143 = outputWindow.document;
    var v1343 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1322 = v1343 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1300 = v1322 + "div.title {display: none}\n";
    var v1278 = v1300 + "div.info {font-weight: bold}\n";
    var v1256 = v1278 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1231 = v1256 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1204 = v1231 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1177 = v1204 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1141 = v1177 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1093 = v1141 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1044 = v1093 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v976 = v1044 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v886 = v976 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v762 = v886 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v550 = v762 + "img {display: none}\n";
    var v144 = v550 + "</style>\n";
    introspect(JAM.policy.p17) {
      v143.write(v144);
    }
  }
  var v145 = outputWindow.document;
  var v887 = "</head>\n" + '<body class="main">\n';
  var v763 = v887 + '<div class="title">';
  var v551 = v763 + title$$6;
  var v146 = v551 + " results</div>\n";
  introspect(JAM.policy.p17) {
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
  var v888 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v764 = v888 + "<head>\n";
  var v552 = v764 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v552 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v147.write(v148);
  }
  if (isBackground) {
    var v149 = outputWindow.document;
    var v1323 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1301 = v1323 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1279 = v1301 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1257 = v1279 + "div.info {font-weight: bold}\n";
    var v1232 = v1257 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1205 = v1232 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1178 = v1205 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1142 = v1178 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1094 = v1142 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1045 = v1094 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v977 = v1045 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v889 = v977 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v765 = v889 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v553 = v765 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v150 = v553 + "</style>\n";
    introspect(JAM.policy.p17) {
      v149.write(v150);
    }
  } else {
    var v151 = outputWindow.document;
    var v1363 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1344 = v1363 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1324 = v1344 + "div.title {display: none}\n";
    var v1302 = v1324 + "div.info {font-weight: bold}\n";
    var v1280 = v1302 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1258 = v1280 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1233 = v1258 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1206 = v1233 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1179 = v1206 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1143 = v1179 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1095 = v1143 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1046 = v1095 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v978 = v1046 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v890 = v978 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v766 = v890 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v554 = v766 + "img {display: none}\n";
    var v152 = v554 + "</style>\n";
    introspect(JAM.policy.p17) {
      v151.write(v152);
    }
  }
  var v153 = outputWindow.document;
  var v891 = "</head>\n" + '<body class="main">\n';
  var v767 = v891 + '<div class="title">';
  var v555 = v767 + title$$8;
  var v154 = v555 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v153.write(v154);
  }
  outputWindow.status = "Please Wait.";
  return true;
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
function removeNonProteinAllowDegen(sequence$$10) {
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
  introspect(JAM.policy.p16) {
    var v556 = dnaSequence$$1.search(/./)
  }
  var v155 = v556 != -1;
  if (v155) {
    introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v557 = testArray[0];
  var v159 = v557 != testString;
  if (v159) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v558 = testString.search(re$$2)
  }
  var v160 = v558 == -1;
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
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v162 = testString != "1X2X3X";
  if (v162) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p12) {
    var v559 = testNum.toFixed(3)
  }
  var v163 = v559 != 2489.824;
  if (v163) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p12) {
    var v560 = testNum.toPrecision(5)
  }
  var v164 = v560 != 2489.8;
  if (v164) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v561 = theNumber$$1.search(/\d/)
  }
  var v165 = v561 == -1;
  if (v165) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v979 = emblFile.search(/ID/)
  }
  var v892 = v979 == -1;
  var v981 = !v892;
  if (v981) {
    introspect(JAM.policy.p16) {
      var v980 = emblFile.search(/AC/)
    }
    v892 = v980 == -1;
  }
  var v768 = v892;
  var v894 = !v768;
  if (v894) {
    introspect(JAM.policy.p16) {
      var v893 = emblFile.search(/DE/)
    }
    v768 = v893 == -1;
  }
  var v562 = v768;
  var v770 = !v562;
  if (v770) {
    introspect(JAM.policy.p16) {
      var v769 = emblFile.search(/SQ/)
    }
    v562 = v769 == -1;
  }
  var v166 = v562;
  if (v166) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v563 = theNumber$$2.search(/\d/)
  }
  var v167 = v563 == -1;
  if (v167) {
    alert("Please enter a number.");
    return false;
  }
  var v169 = theNumber$$2 > maxInput$$2;
  if (v169) {
    var v564 = "Please enter a number less than or equal to " + maxInput$$2;
    var v168 = v564 + ".";
    alert(v168);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v565 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v170 = v565 != -1;
  if (v170) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v566 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v171 = v566 != -1;
  if (v171) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v982 = genBankFile.search(/LOCUS/)
  }
  var v895 = v982 == -1;
  var v984 = !v895;
  if (v984) {
    introspect(JAM.policy.p16) {
      var v983 = genBankFile.search(/DEFINITION/)
    }
    v895 = v983 == -1;
  }
  var v771 = v895;
  var v897 = !v771;
  if (v897) {
    introspect(JAM.policy.p16) {
      var v896 = genBankFile.search(/ACCESSION/)
    }
    v771 = v896 == -1;
  }
  var v567 = v771;
  var v773 = !v567;
  if (v773) {
    introspect(JAM.policy.p16) {
      var v772 = genBankFile.search(/ORIGIN/)
    }
    v567 = v772 == -1;
  }
  var v172 = v567;
  if (v172) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v985 = genBankFile$$1.search(/LOCUS/)
  }
  var v898 = v985 == -1;
  var v987 = !v898;
  if (v987) {
    introspect(JAM.policy.p16) {
      var v986 = genBankFile$$1.search(/DEFINITION/)
    }
    v898 = v986 == -1;
  }
  var v774 = v898;
  var v900 = !v774;
  if (v900) {
    introspect(JAM.policy.p16) {
      var v899 = genBankFile$$1.search(/ACCESSION/)
    }
    v774 = v899 == -1;
  }
  var v568 = v774;
  var v776 = !v568;
  if (v776) {
    introspect(JAM.policy.p16) {
      var v775 = genBankFile$$1.search(/ORIGIN/)
    }
    v568 = v775 == -1;
  }
  var v173 = v568;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v569 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v174 = v569 == -1;
  if (v174) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v988 = emblFile$$1.search(/ID/)
  }
  var v901 = v988 == -1;
  var v990 = !v901;
  if (v990) {
    introspect(JAM.policy.p16) {
      var v989 = emblFile$$1.search(/AC/)
    }
    v901 = v989 == -1;
  }
  var v777 = v901;
  var v903 = !v777;
  if (v903) {
    introspect(JAM.policy.p16) {
      var v902 = emblFile$$1.search(/DE/)
    }
    v777 = v902 == -1;
  }
  var v570 = v777;
  var v779 = !v570;
  if (v779) {
    introspect(JAM.policy.p16) {
      var v778 = emblFile$$1.search(/SQ/)
    }
    v570 = v778 == -1;
  }
  var v175 = v570;
  if (v175) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v571 = emblFile$$1.search(/^FT/m)
  }
  var v176 = v571 == -1;
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
    var v572 = basePerLine / groupSize;
    var v180 = j$$6 <= v572;
    for (;v180;) {
      var v179 = k < groupSize;
      for (;v179;) {
        var v573 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v178 = text$$10.charAt(v573)
        }
        lineOfText = lineOfText + v178;
        k = k + 1;
        v179 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v574 = basePerLine / groupSize;
      v180 = j$$6 <= v574;
    }
    var v181 = outputWindow.document;
    var v182 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
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
    var v575 = adjustment < 0;
    if (v575) {
      v575 = adjusted >= 0;
    }
    var v184 = v575;
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
    var v576 = basePerLine$$2 / groupSize$$2;
    var v193 = j$$7 <= v576;
    for (;v193;) {
      var v188 = k$$1 < groupSize$$2;
      for (;v188;) {
        var v577 = i$$6 + k$$1;
        var v185 = v577 >= stopBase$$2;
        if (v185) {
          break;
        }
        var v186 = lineOfText$$1;
        var v578 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v187 = text$$12.charAt(v578)
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
        var v579 = adjustNumbering(i$$6, numberingAdjustment);
        var v190 = rightNum(v579, "", groupSize$$2, tabIn$$3);
        aboveNum = v189 + v190;
      }
      var v192 = i$$6 >= stopBase$$2;
      if (v192) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v580 = basePerLine$$2 / groupSize$$2;
      v193 = j$$7 <= v580;
    }
    var v216 = numberPosition$$1 == "left";
    if (v216) {
      var v194 = outputWindow.document;
      var v904 = adjustNumbering(lineNum, numberingAdjustment);
      var v780 = rightNum(v904, "", 8, tabIn$$3);
      var v581 = v780 + lineOfText$$1;
      var v195 = v581 + "\n";
      introspect(JAM.policy.p17) {
        v194.write(v195);
      }
      var v199 = strands$$1 == "two";
      if (v199) {
        var v196 = outputWindow.document;
        var v905 = adjustNumbering(lineNum, numberingAdjustment);
        var v781 = rightNum(v905, "", 8, tabIn$$3);
        var v782 = complement(lineOfText$$1);
        var v582 = v781 + v782;
        var v197 = v582 + "\n";
        introspect(JAM.policy.p17) {
          v196.write(v197);
        }
        var v198 = outputWindow.document;
        introspect(JAM.policy.p10) {
          v198.write("\n");
        }
      }
    } else {
      var v215 = numberPosition$$1 == "right";
      if (v215) {
        var v200 = outputWindow.document;
        var v783 = lineOfText$$1;
        var v784 = adjustNumbering(i$$6, numberingAdjustment);
        var v583 = v783 + v784;
        var v201 = v583 + "\n";
        introspect(JAM.policy.p17) {
          v200.write(v201);
        }
        var v205 = strands$$1 == "two";
        if (v205) {
          var v202 = outputWindow.document;
          var v785 = complement(lineOfText$$1);
          var v786 = adjustNumbering(i$$6, numberingAdjustment);
          var v584 = v785 + v786;
          var v203 = v584 + "\n";
          introspect(JAM.policy.p17) {
            v202.write(v203);
          }
          var v204 = outputWindow.document;
          introspect(JAM.policy.p10) {
            v204.write("\n");
          }
        }
      } else {
        var v214 = numberPosition$$1 == "above";
        if (v214) {
          var v206 = outputWindow.document;
          var v207 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v206.write(v207);
          }
          var v208 = outputWindow.document;
          var v209 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v208.write(v209);
          }
          var v213 = strands$$1 == "two";
          if (v213) {
            var v210 = outputWindow.document;
            var v585 = complement(lineOfText$$1);
            var v211 = v585 + "\n";
            introspect(JAM.policy.p17) {
              v210.write(v211);
            }
            var v212 = outputWindow.document;
            introspect(JAM.policy.p10) {
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
    var v586 = basePerLine$$3 / groupSize$$3;
    var v224 = j$$8 <= v586;
    for (;v224;) {
      var v220 = k$$2 < groupSize$$3;
      for (;v220;) {
        var v587 = i$$7 + k$$2;
        var v218 = v587 >= stopBase$$3;
        if (v218) {
          break;
        }
        var v588 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v219 = text$$13.charAt(v588)
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
      var v589 = basePerLine$$3 / groupSize$$3;
      v224 = j$$8 <= v589;
    }
    var v235 = numberPosition$$2 == "left";
    if (v235) {
      var v225 = outputWindow.document;
      var v787 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v590 = v787 + lineOfText$$2;
      var v226 = v590 + "\n";
      introspect(JAM.policy.p17) {
        v225.write(v226);
      }
    } else {
      var v234 = numberPosition$$2 == "right";
      if (v234) {
        var v227 = outputWindow.document;
        var v591 = lineOfText$$2 + i$$7;
        var v228 = v591 + "\n";
        introspect(JAM.policy.p17) {
          v227.write(v228);
        }
      } else {
        var v233 = numberPosition$$2 == "above";
        if (v233) {
          var v229 = outputWindow.document;
          var v230 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v229.write(v230);
          }
          var v231 = outputWindow.document;
          var v232 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
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
  var v906 = sequence$$13.length;
  var v788 = v906 <= firstIndexToMutate;
  var v907 = !v788;
  if (v907) {
    v788 = lastIndexToMutate < 0;
  }
  var v592 = v788;
  var v789 = !v592;
  if (v789) {
    v592 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v237 = v592;
  if (v237) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v245 = i$$8 < numMut;
  for (;v245;) {
    maxNum = sequence$$13.length;
    var v593 = Math.random();
    var v238 = v593 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v238);
    }
    var v594 = randNum < firstIndexToMutate;
    var v790 = !v594;
    if (v790) {
      v594 = randNum > lastIndexToMutate;
    }
    var v239 = v594;
    if (v239) {
      numMut++;
      i$$8++;
      v245 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v595 = Math.random();
      var v596 = components$$1.length;
      var v240 = v595 * v596;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v240);
      }
      var v597 = components$$1.length;
      var v241 = componentsIndex == v597;
      if (v241) {
        componentsIndex = 0;
      }
      var v598 = components$$1[componentsIndex];
      var v242 = v598 != currentChar;
      if (v242) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v599 = sequence$$13.substring(0, randNum)
    }
    var v600 = components$$1[componentsIndex];
    var v243 = v599 + v600;
    var v601 = randNum + 1;
    var v602 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v244 = sequence$$13.substring(v601, v602)
    }
    sequence$$13 = v243 + v244;
    i$$8++;
    v245 = i$$8 < numMut;
  }
  var v246 = outputWindow.document;
  var v247 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
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
    var v603 = Math.random();
    var v604 = components$$2.length;
    var v248 = v603 * v604;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v248);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v605 = sequence$$14.length;
    var v251 = v605 == 60;
    if (v251) {
      var v249 = outputWindow.document;
      var v250 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v249.write(v250);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v252 = j$$9 < lengthOut$$1;
  }
  var v253 = outputWindow.document;
  var v254 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
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
    var v908 = sequence$$15.length;
    var v791 = v908 - lookAhead;
    var v792 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v606 = sequence$$15.substring(v791, v792)
    }
    var v256 = v606 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v257 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v256 + v257;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v259 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v259.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v260 = outputWindow.document;
  var v909 = '<tr><td class="title" width="200px">' + "Site:";
  var v793 = v909 + '</td><td class="title">';
  var v607 = v793 + "Positions:";
  var v261 = v607 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v260.write(v261);
  }
  var i$$9 = 0;
  var v608 = arrayOfItems.length;
  var v277 = i$$9 < v608;
  for (;v277;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v609 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v262 = v609.match(/\/.+\//)
    }
    matchExp = v262 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v910 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v794 = v910.match(/\)\D*\d+/)
    }
    var v610 = v794.toString();
    introspect(JAM.policy.p15) {
      var v263 = v610.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v263);
    introspect(JAM.policy.p17) {
      var v269 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v269;) {
      var v264 = matchExp.lastIndex;
      matchPosition = v264 - cutDistance;
      var v611 = matchPosition >= lowerLimit;
      if (v611) {
        v611 = matchPosition < upperLimit;
      }
      var v267 = v611;
      if (v267) {
        timesFound++;
        var v265 = tempString$$1 + ", ";
        var v612 = matchPosition - shiftValue;
        var v266 = v612 + 1;
        tempString$$1 = v265 + v266;
      }
      var v613 = matchExp.lastIndex;
      var v795 = RegExp.lastMatch;
      var v614 = v795.length;
      var v268 = v613 - v614;
      matchExp.lastIndex = v268 + 1;
      introspect(JAM.policy.p17) {
        v269 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v615 = tempString$$1.search(/\d/)
    }
    var v270 = v615 != -1;
    if (v270) {
      introspect(JAM.policy.p15) {
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
    var v1144 = '<tr><td class="' + backGroundClass;
    var v1096 = v1144 + '">';
    var v1207 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v1180 = v1207.match(/\([^\(]+\)/)
    }
    var v1145 = v1180.toString();
    introspect(JAM.policy.p15) {
      var v1097 = v1145.replace(/\(|\)/g, "")
    }
    var v1047 = v1096 + v1097;
    var v991 = v1047 + '</td><td class="';
    var v911 = v991 + backGroundClass;
    var v796 = v911 + '">';
    var v616 = v796 + tempString$$1;
    var v276 = v616 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v275.write(v276);
    }
    timesFound = 0;
    i$$9++;
    var v617 = arrayOfItems.length;
    v277 = i$$9 < v617;
  }
  var v278 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v278.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v279 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v279.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v280 = outputWindow.document;
  var v1048 = '<tr><td class="title">' + "Pattern:";
  var v992 = v1048 + '</td><td class="title">';
  var v912 = v992 + "Times found:";
  var v797 = v912 + '</td><td class="title">';
  var v618 = v797 + "Percentage:";
  var v281 = v618 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v280.write(v281);
  }
  var i$$10 = 0;
  var v619 = arrayOfItems$$1.length;
  var v290 = i$$10 < v619;
  for (;v290;) {
    var tempNumber = 0;
    var v620 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v282 = v620.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v282 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v621 = sequence$$16.search(matchExp$$1)
    }
    var v284 = v621 != -1;
    if (v284) {
      introspect(JAM.policy.p17) {
        var v283 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v283.length;
    }
    var percentage = 0;
    var v798 = originalLength + 1;
    var v993 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v913 = v993.match(/\d+/)
    }
    var v799 = parseFloat(v913);
    var v622 = v798 - v799;
    var v287 = v622 > 0;
    if (v287) {
      var v285 = 100 * tempNumber;
      var v623 = originalLength + 1;
      var v914 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v800 = v914.match(/\d+/)
      }
      var v624 = parseFloat(v800);
      var v286 = v623 - v624;
      percentage = v285 / v286;
    }
    var v288 = outputWindow.document;
    var v1208 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v1181 = v1208.match(/\([^\(]+\)\b/)
    }
    var v1146 = v1181.toString();
    introspect(JAM.policy.p15) {
      var v1098 = v1146.replace(/\(|\)/g, "")
    }
    var v1049 = "<tr><td>" + v1098;
    var v994 = v1049 + "</td><td>";
    var v915 = v994 + tempNumber;
    var v801 = v915 + "</td><td>";
    introspect(JAM.policy.p12) {
      var v802 = percentage.toFixed(2)
    }
    var v625 = v801 + v802;
    var v289 = v625 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v288.write(v289);
    }
    i$$10++;
    var v626 = arrayOfItems$$1.length;
    v290 = i$$10 < v626;
  }
  var v291 = outputWindow.document;
  introspect(JAM.policy.p10) {
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
  var v627 = sequence$$17.length;
  var v298 = v627 > 0;
  for (;v298;) {
    maxNum$$1 = sequence$$17.length;
    var v628 = Math.random();
    var v292 = v628 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v292);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v293 = randNum$$1 + 1;
    var v294 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v293, v294);
    }
    sequence$$17 = tempString1 + tempString2;
    var v629 = tempSeq.length;
    var v297 = v629 == 60;
    if (v297) {
      var v295 = outputWindow.document;
      var v296 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v295.write(v296);
      }
      tempSeq = "";
    }
    var v630 = sequence$$17.length;
    v298 = v630 > 0;
  }
  var v299 = outputWindow.document;
  var v300 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v299.write(v300);
  }
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v631 = type$$25.toLowerCase();
  var v302 = v631 == "standard";
  if (v302) {
    var v1509 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1508 = v1509 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1507 = v1508 + "/cgcg/ (AccII cg|cg)2,";
    var v1506 = v1507 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1505 = v1506 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1504 = v1505 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1503 = v1504 + "/gtac/ (AfaI gt|ac)2,";
    var v1502 = v1503 + "/agcgct/ (AfeI agc|gct)3,";
    var v1501 = v1502 + "/cttaag/ (AflII c|ttaag)5,";
    var v1500 = v1501 + "/accggt/ (AgeI a|ccggt)5,";
    var v1499 = v1500 + "/actagt/ (AhlI a|ctagt)5,";
    var v1498 = v1499 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1497 = v1498 + "/agct/ (AluI ag|ct)2,";
    var v1496 = v1497 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1495 = v1496 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1494 = v1495 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1493 = v1494 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1492 = v1493 + "/attaat/ (AseI at|taat)4,";
    var v1491 = v1492 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1490 = v1491 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1489 = v1490 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1488 = v1489 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1487 = v1488 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1486 = v1487 + "/tggcca/ (BalI tgg|cca)3,";
    var v1485 = v1486 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1484 = v1485 + "/atcgat/ (BanIII at|cgat)4,";
    var v1483 = v1484 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1482 = v1483 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1481 = v1482 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1480 = v1481 + "/actagt/ (BcuI a|ctagt)5,";
    var v1479 = v1480 + "/tgatca/ (BclI t|gatca)5,";
    var v1478 = v1479 + "/ctag/ (BfaI c|tag)3,";
    var v1477 = v1478 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1476 = v1477 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1475 = v1476 + "/agatct/ (BglII a|gatct)5,";
    var v1474 = v1475 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1473 = v1474 + "/atcgat/ (BseCI at|cgat)4,";
    var v1472 = v1473 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1471 = v1472 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1470 = v1471 + "/accggt/ (BshTI a|ccggt)5,";
    var v1469 = v1470 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1468 = v1469 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1467 = v1468 + "/atcgat/ (BspDI at|cgat)4,";
    var v1466 = v1467 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1465 = v1466 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1464 = v1465 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1463 = v1464 + "/cgcg/ (BstUI cg|cg)2,";
    var v1462 = v1463 + "/atcgat/ (ClaI at|cgat)4,";
    var v1461 = v1462 + "/gatc/ (DpnII |gatc)4,";
    var v1460 = v1461 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1459 = v1460 + "/cggccg/ (EagI c|ggccg)5,";
    var v1458 = v1459 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1457 = v1458 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1456 = v1457 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1455 = v1456 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1454 = v1455 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1453 = v1454 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1452 = v1453 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1451 = v1452 + "/aagctt/ (HindIII a|agctt)5,";
    var v1450 = v1451 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1449 = v1450 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1448 = v1449 + "/ccgg/ (HpaII c|cgg)3,";
    var v1447 = v1448 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1446 = v1447 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1445 = v1446 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1444 = v1445 + "/caattg/ (MfeI c|aattg)5,";
    var v1443 = v1444 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1442 = v1443 + "/tggcca/ (MscI tgg|cca)3,";
    var v1441 = v1442 + "/ttaa/ (MseI t|taa)3,";
    var v1440 = v1441 + "/ccgg/ (MspI c|cgg)3,";
    var v1439 = v1440 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1438 = v1439 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1437 = v1438 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1436 = v1437 + "/catatg/ (NdeI ca|tatg)4,";
    var v1435 = v1436 + "/gatc/ (NdeII |gatc)4,";
    var v1434 = v1435 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1433 = v1434 + "/gctagc/ (NheI g|ctagc)5,";
    var v1432 = v1433 + "/catg/ (NlaIII catg|)0,";
    var v1431 = v1432 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1430 = v1431 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1429 = v1430 + "/atgcat/ (NsiI atgca|t)1,";
    var v1428 = v1429 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1427 = v1428 + "/acatgt/ (PciI a|catgt)5,";
    var v1426 = v1427 + "/ggcc/ (PhoI gg|cc)2,";
    var v1425 = v1426 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1424 = v1425 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1423 = v1424 + "/ttataa/ (PsiI tta|taa)3,";
    var v1422 = v1423 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1421 = v1422 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1420 = v1421 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1419 = v1420 + "/gtac/ (RsaI gt|ac)2,";
    var v1418 = v1419 + "/gagctc/ (SacI gagct|c)1,";
    var v1400 = v1418 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1382 = v1400 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1364 = v1382 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1345 = v1364 + "/agtact/ (ScaI agt|act)3,";
    var v1325 = v1345 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1303 = v1325 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1281 = v1303 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1259 = v1281 + "/actagt/ (SpeI a|ctagt)5,";
    var v1234 = v1259 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1209 = v1234 + "/aatatt/ (SspI aat|att)3,";
    var v1182 = v1209 + "/gagctc/ (SstI gagct|c)1,";
    var v1147 = v1182 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1099 = v1147 + "/aggcct/ (StuI agg|cct)3,";
    var v1050 = v1099 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v995 = v1050 + "/tcga/ (TaqI t|cga)3,";
    var v916 = v995 + "/ctcgag/ (TliI c|tcgag)5,";
    var v803 = v916 + "/attaat/ (VspI at|taat)4,";
    var v632 = v803 + "/tctaga/ (XbaI t|ctaga)5,";
    var v301 = v632 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v301 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v804 = type$$26.toLowerCase();
  var v633 = v804 == "standard";
  var v806 = !v633;
  if (v806) {
    var v805 = type$$26.toLowerCase();
    v633 = v805 == "transl_table=1";
  }
  var v304 = v633;
  if (v304) {
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
    var v634 = v807 + "/[tu]gg/=W,";
    var v303 = v634 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v635 = type$$26.toLowerCase();
  var v306 = v635 == "transl_table=2";
  if (v306) {
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
    var v997 = v1052 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v918 = v997 + "/ac[acgturyswkmbdhvn]/=T,";
    var v808 = v918 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v636 = v808 + "/[tu]g[agr]/=W,";
    var v305 = v636 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v637 = type$$26.toLowerCase();
  var v308 = v637 == "transl_table=3";
  if (v308) {
    var v1403 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1385 = v1403 + "/ga[tcuy]/=D,";
    var v1367 = v1385 + "/ga[agr]/=E,";
    var v1348 = v1367 + "/[tu][tu][tcuy]/=F,";
    var v1328 = v1348 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1306 = v1328 + "/ca[tcuy]/=H,";
    var v1284 = v1306 + "/a[tu][tcuy]/=I,";
    var v1262 = v1284 + "/aa[agr]/=K,";
    var v1237 = v1262 + "/[tu][tu][agr]/=L,";
    var v1212 = v1237 + "/a[tu][agr]/=M,";
    var v1185 = v1212 + "/aa[tucy]/=N,";
    var v1150 = v1185 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1102 = v1150 + "/ca[agr]/=Q,";
    var v1053 = v1102 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v998 = v1053 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v919 = v998 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v809 = v919 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v638 = v809 + "/[tu]g[agr]/=W,";
    var v307 = v638 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v639 = type$$26.toLowerCase();
  var v310 = v639 == "transl_table=4";
  if (v310) {
    var v1404 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1386 = v1404 + "/ga[tcuy]/=D,";
    var v1368 = v1386 + "/ga[agr]/=E,";
    var v1349 = v1368 + "/[tu][tu][tcuy]/=F,";
    var v1329 = v1349 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1307 = v1329 + "/ca[tcuy]/=H,";
    var v1285 = v1307 + "/a[tu][atcuwmhy]/=I,";
    var v1263 = v1285 + "/aa[agr]/=K,";
    var v1238 = v1263 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1213 = v1238 + "/a[tu]g/=M,";
    var v1186 = v1213 + "/aa[tucy]/=N,";
    var v1151 = v1186 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1103 = v1151 + "/ca[agr]/=Q,";
    var v1054 = v1103 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v999 = v1054 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v920 = v999 + "/ac[acgturyswkmbdhvn]/=T,";
    var v810 = v920 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v640 = v810 + "/[tu]g[agr]/=W,";
    var v309 = v640 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v641 = type$$26.toLowerCase();
  var v312 = v641 == "transl_table=5";
  if (v312) {
    var v1405 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1387 = v1405 + "/ga[tcuy]/=D,";
    var v1369 = v1387 + "/ga[agr]/=E,";
    var v1350 = v1369 + "/[tu][tu][tcuy]/=F,";
    var v1330 = v1350 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1308 = v1330 + "/ca[tcuy]/=H,";
    var v1286 = v1308 + "/a[tu][tcuy]/=I,";
    var v1264 = v1286 + "/aa[agr]/=K,";
    var v1239 = v1264 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1214 = v1239 + "/a[tu][agr]/=M,";
    var v1187 = v1214 + "/aa[tucy]/=N,";
    var v1152 = v1187 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1104 = v1152 + "/ca[agr]/=Q,";
    var v1055 = v1104 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1000 = v1055 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v921 = v1000 + "/ac[acgturyswkmbdhvn]/=T,";
    var v811 = v921 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v642 = v811 + "/[tu]g[agr]/=W,";
    var v311 = v642 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*";
  }
  var v643 = type$$26.toLowerCase();
  var v314 = v643 == "transl_table=6";
  if (v314) {
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
    var v1105 = v1153 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1056 = v1105 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1001 = v1056 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v922 = v1001 + "/ac[acgturyswkmbdhvn]/=T,";
    var v812 = v922 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v644 = v812 + "/[tu]gg/=W,";
    var v313 = v644 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]ga/=*";
  }
  var v645 = type$$26.toLowerCase();
  var v316 = v645 == "transl_table=9";
  if (v316) {
    var v1407 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1389 = v1407 + "/ga[tcuy]/=D,";
    var v1371 = v1389 + "/ga[agr]/=E,";
    var v1352 = v1371 + "/[tu][tu][tcuy]/=F,";
    var v1332 = v1352 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1310 = v1332 + "/ca[tcuy]/=H,";
    var v1288 = v1310 + "/a[tu][atcuwmhy]/=I,";
    var v1266 = v1288 + "/aag/=K,";
    var v1241 = v1266 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1216 = v1241 + "/a[tu]g/=M,";
    var v1189 = v1216 + "/aa[atcuwmhy]/=N,";
    var v1154 = v1189 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1106 = v1154 + "/ca[agr]/=Q,";
    var v1057 = v1106 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1002 = v1057 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v923 = v1002 + "/ac[acgturyswkmbdhvn]/=T,";
    var v813 = v923 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v646 = v813 + "/[tu]g[agr]/=W,";
    var v315 = v646 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v647 = type$$26.toLowerCase();
  var v318 = v647 == "transl_table=10";
  if (v318) {
    var v1408 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1390 = v1408 + "/ga[tcuy]/=D,";
    var v1372 = v1390 + "/ga[agr]/=E,";
    var v1353 = v1372 + "/[tu][tu][tcuy]/=F,";
    var v1333 = v1353 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1311 = v1333 + "/ca[tcuy]/=H,";
    var v1289 = v1311 + "/a[tu][atcuwmhy]/=I,";
    var v1267 = v1289 + "/aa[agr]/=K,";
    var v1242 = v1267 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1217 = v1242 + "/a[tu]g/=M,";
    var v1190 = v1217 + "/aa[tucy]/=N,";
    var v1155 = v1190 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1107 = v1155 + "/ca[agr]/=Q,";
    var v1058 = v1107 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1003 = v1058 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v924 = v1003 + "/ac[acgturyswkmbdhvn]/=T,";
    var v814 = v924 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v648 = v814 + "/[tu]gg/=W,";
    var v317 = v648 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]/=*";
  }
  var v649 = type$$26.toLowerCase();
  var v320 = v649 == "transl_table=11";
  if (v320) {
    var v1409 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1391 = v1409 + "/ga[tcuy]/=D,";
    var v1373 = v1391 + "/ga[agr]/=E,";
    var v1354 = v1373 + "/[tu][tu][tcuy]/=F,";
    var v1334 = v1354 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1312 = v1334 + "/ca[tcuy]/=H,";
    var v1290 = v1312 + "/a[tu][atcuwmhy]/=I,";
    var v1268 = v1290 + "/aa[agr]/=K,";
    var v1243 = v1268 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1218 = v1243 + "/a[tu]g/=M,";
    var v1191 = v1218 + "/aa[tucy]/=N,";
    var v1156 = v1191 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1108 = v1156 + "/ca[agr]/=Q,";
    var v1059 = v1108 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1004 = v1059 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v925 = v1004 + "/ac[acgturyswkmbdhvn]/=T,";
    var v815 = v925 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v650 = v815 + "/[tu]gg/=W,";
    var v319 = v650 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v651 = type$$26.toLowerCase();
  var v322 = v651 == "transl_table=12";
  if (v322) {
    var v1410 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1392 = v1410 + "/ga[tcuy]/=D,";
    var v1374 = v1392 + "/ga[agr]/=E,";
    var v1355 = v1374 + "/[tu][tu][tcuy]/=F,";
    var v1335 = v1355 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1313 = v1335 + "/ca[tcuy]/=H,";
    var v1291 = v1313 + "/a[tu][atcuwmhy]/=I,";
    var v1269 = v1291 + "/aa[agr]/=K,";
    var v1244 = v1269 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1219 = v1244 + "/a[tu]g/=M,";
    var v1192 = v1219 + "/aa[tucy]/=N,";
    var v1157 = v1192 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1109 = v1157 + "/ca[agr]/=Q,";
    var v1060 = v1109 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1005 = v1060 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v926 = v1005 + "/ac[acgturyswkmbdhvn]/=T,";
    var v816 = v926 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v652 = v816 + "/[tu]gg/=W,";
    var v321 = v652 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v653 = type$$26.toLowerCase();
  var v324 = v653 == "transl_table=13";
  if (v324) {
    var v1411 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1393 = v1411 + "/ga[tcuy]/=D,";
    var v1375 = v1393 + "/ga[agr]/=E,";
    var v1356 = v1375 + "/[tu][tu][tcuy]/=F,";
    var v1336 = v1356 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1314 = v1336 + "/ca[tcuy]/=H,";
    var v1292 = v1314 + "/a[tu][tcuy]/=I,";
    var v1270 = v1292 + "/aa[agr]/=K,";
    var v1245 = v1270 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1220 = v1245 + "/a[tu][agr]/=M,";
    var v1193 = v1220 + "/aa[tucy]/=N,";
    var v1158 = v1193 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1110 = v1158 + "/ca[agr]/=Q,";
    var v1061 = v1110 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1006 = v1061 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v927 = v1006 + "/ac[acgturyswkmbdhvn]/=T,";
    var v817 = v927 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v654 = v817 + "/[tu]g[agr]/=W,";
    var v323 = v654 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]/=*";
  }
  var v655 = type$$26.toLowerCase();
  var v326 = v655 == "transl_table=14";
  if (v326) {
    var v1412 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1394 = v1412 + "/ga[tcuy]/=D,";
    var v1376 = v1394 + "/ga[agr]/=E,";
    var v1357 = v1376 + "/[tu][tu][tcuy]/=F,";
    var v1337 = v1357 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1315 = v1337 + "/ca[tcuy]/=H,";
    var v1293 = v1315 + "/a[tu][atcuwmhy]/=I,";
    var v1271 = v1293 + "/aag/=K,";
    var v1246 = v1271 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1221 = v1246 + "/a[tu]g/=M,";
    var v1194 = v1221 + "/aa[atcuwmhy]/=N,";
    var v1159 = v1194 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1111 = v1159 + "/ca[agr]/=Q,";
    var v1062 = v1111 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1007 = v1062 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v928 = v1007 + "/ac[acgturyswkmbdhvn]/=T,";
    var v818 = v928 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v656 = v818 + "/[tu]g[agr]/=W,";
    var v325 = v656 + "/[tu]a[atcuwmhy]/=Y,";
    return v325 + "/[tu]ag/=*";
  }
  var v657 = type$$26.toLowerCase();
  var v328 = v657 == "transl_table=15";
  if (v328) {
    var v1413 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1395 = v1413 + "/ga[tcuy]/=D,";
    var v1377 = v1395 + "/ga[agr]/=E,";
    var v1358 = v1377 + "/[tu][tu][tcuy]/=F,";
    var v1338 = v1358 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1316 = v1338 + "/ca[tcuy]/=H,";
    var v1294 = v1316 + "/a[tu][atcuwmhy]/=I,";
    var v1272 = v1294 + "/aa[agr]/=K,";
    var v1247 = v1272 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1222 = v1247 + "/a[tu]g/=M,";
    var v1195 = v1222 + "/aa[tucy]/=N,";
    var v1160 = v1195 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1112 = v1160 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1063 = v1112 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1008 = v1063 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v929 = v1008 + "/ac[acgturyswkmbdhvn]/=T,";
    var v819 = v929 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v658 = v819 + "/[tu]gg/=W,";
    var v327 = v658 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v659 = type$$26.toLowerCase();
  var v330 = v659 == "transl_table=16";
  if (v330) {
    var v1414 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1396 = v1414 + "/ga[tcuy]/=D,";
    var v1378 = v1396 + "/ga[agr]/=E,";
    var v1359 = v1378 + "/[tu][tu][tcuy]/=F,";
    var v1339 = v1359 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1317 = v1339 + "/ca[tcuy]/=H,";
    var v1295 = v1317 + "/a[tu][atcuwmhy]/=I,";
    var v1273 = v1295 + "/aa[agr]/=K,";
    var v1248 = v1273 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1223 = v1248 + "/a[tu]g/=M,";
    var v1196 = v1223 + "/aa[tucy]/=N,";
    var v1161 = v1196 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1113 = v1161 + "/ca[agr]/=Q,";
    var v1064 = v1113 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1009 = v1064 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v930 = v1009 + "/ac[acgturyswkmbdhvn]/=T,";
    var v820 = v930 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v660 = v820 + "/[tu]gg/=W,";
    var v329 = v660 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu][agr]a/=*";
  }
  var v661 = type$$26.toLowerCase();
  var v332 = v661 == "transl_table=21";
  if (v332) {
    var v1415 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1397 = v1415 + "/ga[tcuy]/=D,";
    var v1379 = v1397 + "/ga[agr]/=E,";
    var v1360 = v1379 + "/[tu][tu][tcuy]/=F,";
    var v1340 = v1360 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1318 = v1340 + "/ca[tcuy]/=H,";
    var v1296 = v1318 + "/a[tu][tcuy]/=I,";
    var v1274 = v1296 + "/aag/=K,";
    var v1249 = v1274 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1224 = v1249 + "/a[tu][agr]/=M,";
    var v1197 = v1224 + "/aa[atcuwmhy]/=N,";
    var v1162 = v1197 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1114 = v1162 + "/ca[agr]/=Q,";
    var v1065 = v1114 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1010 = v1065 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v931 = v1010 + "/ac[acgturyswkmbdhvn]/=T,";
    var v821 = v931 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v662 = v821 + "/[tu]g[agr]/=W,";
    var v331 = v662 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu]a[agr]/=*";
  }
  var v663 = type$$26.toLowerCase();
  var v334 = v663 == "transl_table=22";
  if (v334) {
    var v1416 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1398 = v1416 + "/ga[tcuy]/=D,";
    var v1380 = v1398 + "/ga[agr]/=E,";
    var v1361 = v1380 + "/[tu][tu][tcuy]/=F,";
    var v1341 = v1361 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1319 = v1341 + "/ca[tcuy]/=H,";
    var v1297 = v1319 + "/a[tu][atcuwmhy]/=I,";
    var v1275 = v1297 + "/aa[agr]/=K,";
    var v1250 = v1275 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1225 = v1250 + "/a[tu]g/=M,";
    var v1198 = v1225 + "/aa[tucy]/=N,";
    var v1163 = v1198 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1115 = v1163 + "/ca[agr]/=Q,";
    var v1066 = v1115 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1011 = v1066 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v932 = v1011 + "/ac[acgturyswkmbdhvn]/=T,";
    var v822 = v932 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v664 = v822 + "/[tu]gg/=W,";
    var v333 = v664 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agcrsmv]a/=*";
  }
  var v665 = type$$26.toLowerCase();
  var v336 = v665 == "transl_table=23";
  if (v336) {
    var v1417 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1399 = v1417 + "/ga[tcuy]/=D,";
    var v1381 = v1399 + "/ga[agr]/=E,";
    var v1362 = v1381 + "/[tu][tu][tcuy]/=F,";
    var v1342 = v1362 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1320 = v1342 + "/ca[tcuy]/=H,";
    var v1298 = v1320 + "/a[tu][atcuwmhy]/=I,";
    var v1276 = v1298 + "/aa[agr]/=K,";
    var v1251 = v1276 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1226 = v1251 + "/a[tu]g/=M,";
    var v1199 = v1226 + "/aa[tucy]/=N,";
    var v1164 = v1199 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1116 = v1164 + "/ca[agr]/=Q,";
    var v1067 = v1116 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1012 = v1067 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v933 = v1012 + "/ac[acgturyswkmbdhvn]/=T,";
    var v823 = v933 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v666 = v823 + "/[tu]gg/=W,";
    var v335 = v666 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function restMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v667 = testScript();
  var v337 = v667 == false;
  if (v337) {
    return false;
  }
  var restrictionSiteCollection;
  var v1117 = theDocument.forms;
  var v1068 = v1117[0];
  var v1013 = v1068.elements;
  var v934 = v1013[6];
  var v824 = v934.options;
  var v1118 = theDocument.forms;
  var v1069 = v1118[0];
  var v1014 = v1069.elements;
  var v935 = v1014[6];
  var v825 = v935.selectedIndex;
  var v668 = v824[v825];
  var v338 = v668.value;
  var geneticCode = getGeneticCodeString(v338);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1119 = theDocument.forms;
  var v1070 = v1119[0];
  var v1015 = v1070.elements;
  var v936 = v1015[0];
  var v826 = checkFormElement(v936);
  var v669 = v826 == false;
  var v828 = !v669;
  if (v828) {
    var v1165 = theDocument.forms;
    var v1120 = v1165[0];
    var v1071 = v1120.elements;
    var v1016 = v1071[0];
    var v937 = v1016.value;
    var v827 = checkSequenceLength(v937, maxInput$$3);
    v669 = v827 == false;
  }
  var v339 = v669;
  if (v339) {
    return false;
  }
  introspect(JAM.policy.p16) {
    geneticCode = geneticCode.split(/,/);
  }
  var v670 = checkGeneticCode(geneticCode);
  var v340 = v670 == false;
  if (v340) {
    return false;
  }
  introspect(JAM.policy.p16) {
    restrictionSites = restrictionSites.split(/,/);
  }
  var v671 = checkRestPatterns(restrictionSites);
  var v341 = v671 == false;
  if (v341) {
    return false;
  }
  var isColor$$1;
  var v1166 = theDocument.forms;
  var v1121 = v1166[0];
  var v1072 = v1121.elements;
  var v1017 = v1072[8];
  var v938 = v1017.options;
  var v1167 = theDocument.forms;
  var v1122 = v1167[0];
  var v1073 = v1122.elements;
  var v1018 = v1073[8];
  var v939 = v1018.selectedIndex;
  var v829 = v938[v939];
  var v672 = v829.value;
  var v342 = v672 == "color";
  if (v342) {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  _openWindow("Restriction Map", isColor$$1);
  var v343 = outputWindow.document;
  var v673 = '<span class="one">' + "cuts once";
  var v344 = v673 + "</span><br />\n";
  introspect(JAM.policy.p17) {
    v343.write(v344);
  }
  var v345 = outputWindow.document;
  var v674 = '<span class="two">' + "cuts twice";
  var v346 = v674 + "</span><br />\n";
  introspect(JAM.policy.p17) {
    v345.write(v346);
  }
  var v347 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v347.write("\n");
  }
  var v1019 = theDocument.forms;
  var v940 = v1019[0];
  var v830 = v940.elements;
  var v675 = v830[0];
  var v348 = v675.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v348);
  var i$$11 = 0;
  var v676 = arrayOfFasta$$1.length;
  var v359 = i$$11 < v676;
  for (;v359;) {
    var v349 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v349);
    var v350 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v350);
    newDna = removeNonDna(newDna);
    openPre();
    var v351 = outputWindow.document;
    var v1168 = theDocument.forms;
    var v1123 = v1168[0];
    var v1074 = v1123.elements;
    var v1020 = v1074[7];
    var v941 = v1020.options;
    var v1169 = theDocument.forms;
    var v1124 = v1169[0];
    var v1075 = v1124.elements;
    var v1021 = v1075[7];
    var v942 = v1021.selectedIndex;
    var v831 = v941[v942];
    var v677 = v831.value;
    var v352 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v677);
    introspect(JAM.policy.p17) {
      v351.write(v352);
    }
    var v1125 = theDocument.forms;
    var v1076 = v1125[0];
    var v1022 = v1076.elements;
    var v943 = v1022[7];
    var v832 = v943.options;
    var v1126 = theDocument.forms;
    var v1077 = v1126[0];
    var v1023 = v1077.elements;
    var v944 = v1023[7];
    var v833 = v944.selectedIndex;
    var v678 = v832[v833];
    var v353 = v678.value;
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v353);
    restrictionSiteCollection.sortRestrictionSites();
    var v1127 = theDocument.forms;
    var v1078 = v1127[0];
    var v1024 = v1078.elements;
    var v945 = v1024[4];
    var v834 = v945.options;
    var v1128 = theDocument.forms;
    var v1079 = v1128[0];
    var v1025 = v1079.elements;
    var v946 = v1025[4];
    var v835 = v946.selectedIndex;
    var v679 = v834[v835];
    var v354 = v679.value;
    var v1129 = theDocument.forms;
    var v1080 = v1129[0];
    var v1026 = v1080.elements;
    var v947 = v1026[5];
    var v836 = v947.options;
    var v1130 = theDocument.forms;
    var v1081 = v1130[0];
    var v1027 = v1081.elements;
    var v948 = v1027[5];
    var v837 = v948.selectedIndex;
    var v680 = v836[v837];
    var v355 = v680.value;
    layoutRestTrans(newDna, geneticCode, restrictionSiteCollection, v354, v355);
    var v356 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v356.write("\n");
    }
    closePre();
    var v1131 = theDocument.forms;
    var v1082 = v1131[0];
    var v1028 = v1082.elements;
    var v949 = v1028[7];
    var v838 = v949.options;
    var v1132 = theDocument.forms;
    var v1083 = v1132[0];
    var v1029 = v1083.elements;
    var v950 = v1029[7];
    var v839 = v950.selectedIndex;
    var v681 = v838[v839];
    var v357 = v681.value;
    writeRestrictionSites(newDna, restrictionSites, v357);
    var v358 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v358.write("<br />\n<br />\n");
    }
    i$$11++;
    var v682 = arrayOfFasta$$1.length;
    v359 = i$$11 < v682;
  }
  closeWindow();
  return true;
}
function layoutRestTrans(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v683 = readingFrame == "3";
  var v840 = !v683;
  if (v840) {
    v683 = readingFrame == "all_three";
  }
  var v361 = v683;
  if (v361) {
    var translation = new TranslationComponent;
    var v951 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v841 = dnaSequence$$3.substring(2, v951)
    }
    var v684 = translate(v841, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v360 = "  " + v684;
    introspect(JAM.policy.p17) {
      translation.setCharacters(v360);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v685 = readingFrame == "2";
  var v842 = !v685;
  if (v842) {
    v685 = readingFrame == "all_three";
  }
  var v363 = v685;
  if (v363) {
    translation = new TranslationComponent;
    var v952 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v843 = dnaSequence$$3.substring(1, v952)
    }
    var v686 = translate(v843, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v362 = " " + v686;
    introspect(JAM.policy.p17) {
      translation.setCharacters(v362);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v687 = readingFrame == "1";
  var v844 = !v687;
  if (v844) {
    v687 = readingFrame == "all_three";
  }
  var v365 = v687;
  if (v365) {
    translation = new TranslationComponent;
    var v364 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p17) {
      translation.setCharacters(v364);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v367 = readingFrame == "uppercase";
  if (v367) {
    translation = new UppercaseTranslationComponent;
    var v366 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p17) {
      translation.setCharacters(v366);
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
  var v368 = complement(dnaSequence$$3);
  introspect(JAM.policy.p17) {
    dna.setCharacters(v368);
  }
  introspect(JAM.policy.p17) {
    textLayout.addComponent(dna);
  }
  var sitesInRange = new Array;
  var i$$12 = 0;
  var v688 = dnaSequence$$3.length;
  var v383 = i$$12 < v688;
  for (;v383;) {
    var v369 = i$$12 + basesPerLine;
    introspect(JAM.policy.p15) {
      sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$12, v369);
    }
    sitesInRange.reverse();
    var j$$10 = 0;
    var v689 = sitesInRange.length;
    var v381 = j$$10 < v689;
    for (;v381;) {
      var v845 = sitesInRange[j$$10];
      var v690 = v845.numberOfCuts;
      var v380 = v690 == 1;
      if (v380) {
        var v370 = outputWindow.document;
        var v1170 = sitesInRange[j$$10];
        var v1133 = v1170.position;
        var v1084 = v1133 - i$$12;
        var v1030 = v1084 + 9;
        introspect(JAM.policy.p13) {
          var v953 = spaceString.substring(0, v1030)
        }
        var v846 = v953 + '<span class="one">';
        var v954 = sitesInRange[j$$10];
        var v847 = v954.label;
        var v691 = v846 + v847;
        var v371 = v691 + "</span>\n";
        introspect(JAM.policy.p17) {
          v370.write(v371);
        }
      } else {
        var v848 = sitesInRange[j$$10];
        var v692 = v848.numberOfCuts;
        var v379 = v692 == 2;
        if (v379) {
          var v372 = outputWindow.document;
          var v1171 = sitesInRange[j$$10];
          var v1134 = v1171.position;
          var v1085 = v1134 - i$$12;
          var v1031 = v1085 + 9;
          introspect(JAM.policy.p13) {
            var v955 = spaceString.substring(0, v1031)
          }
          var v849 = v955 + '<span class="two">';
          var v956 = sitesInRange[j$$10];
          var v850 = v956.label;
          var v693 = v849 + v850;
          var v373 = v693 + "</span>\n";
          introspect(JAM.policy.p17) {
            v372.write(v373);
          }
        } else {
          var v851 = sitesInRange[j$$10];
          var v694 = v851.numberOfCuts;
          var v378 = v694 == 3;
          if (v378) {
            var v374 = outputWindow.document;
            var v1172 = sitesInRange[j$$10];
            var v1135 = v1172.position;
            var v1086 = v1135 - i$$12;
            var v1032 = v1086 + 9;
            introspect(JAM.policy.p13) {
              var v957 = spaceString.substring(0, v1032)
            }
            var v852 = v957 + '<span class="three">';
            var v958 = sitesInRange[j$$10];
            var v853 = v958.label;
            var v695 = v852 + v853;
            var v375 = v695 + "</span>\n";
            introspect(JAM.policy.p17) {
              v374.write(v375);
            }
          } else {
            var v376 = outputWindow.document;
            var v1136 = sitesInRange[j$$10];
            var v1087 = v1136.position;
            var v1033 = v1087 - i$$12;
            var v959 = v1033 + 9;
            introspect(JAM.policy.p13) {
              var v854 = spaceString.substring(0, v959)
            }
            var v960 = sitesInRange[j$$10];
            var v855 = v960.label;
            var v696 = v854 + v855;
            var v377 = v696 + "\n";
            introspect(JAM.policy.p17) {
              v376.write(v377);
            }
          }
        }
      }
      j$$10++;
      var v697 = sitesInRange.length;
      v381 = j$$10 < v697;
    }
    var v382 = i$$12 + basesPerLine;
    introspect(JAM.policy.p15) {
      textLayout.writeLayout(i$$12, v382);
    }
    i$$12 = i$$12 + basesPerLine;
    var v698 = dnaSequence$$3.length;
    v383 = i$$12 < v698;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v384 = " " + p1$$2;
    return v384 + " ";
  }
  introspect(JAM.policy.p15) {
    var v856 = dnaSequence$$4.replace(/[^A-Za-z]/g, "")
  }
  var v699 = v856.length;
  var v385 = v699 < 3;
  if (v385) {
    return "";
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  }
  var i$$13 = 0;
  var v700 = geneticCodeMatchExp$$3.length;
  var v388 = i$$13 < v700;
  for (;v388;) {
    var v386 = geneticCodeMatchExp$$3[i$$13];
    var v387 = geneticCodeMatchResult$$3[i$$13];
    introspect(JAM.policy.p27) {
      dnaSequence$$4 = dnaSequence$$4.replace(v386, v387);
    }
    i$$13++;
    var v701 = geneticCodeMatchExp$$3.length;
    v388 = i$$13 < v701;
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  }
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1088 = " " + p1$$3;
    var v1034 = v1088 + p3;
    var v961 = v1034 + p5;
    var v857 = v961 + " ";
    var v702 = v857 + p2;
    var v389 = v702 + p4;
    return v389 + p6;
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  }
  introspect(JAM.policy.p15) {
    var v858 = dnaSequence$$5.replace(/[^A-Za-z]/g, "")
  }
  var v703 = v858.length;
  var v390 = v703 < 3;
  if (v390) {
    return "";
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  }
  var i$$14 = 0;
  var v704 = geneticCodeMatchExp$$4.length;
  var v393 = i$$14 < v704;
  for (;v393;) {
    var v391 = geneticCodeMatchExp$$4[i$$14];
    var v392 = geneticCodeMatchResult$$4[i$$14];
    introspect(JAM.policy.p27) {
      dnaSequence$$5 = dnaSequence$$5.replace(v391, v392);
    }
    i$$14++;
    var v705 = geneticCodeMatchExp$$4.length;
    v393 = i$$14 < v705;
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p15) {
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
  var matchArray$$2;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v397 = dnaConformation$$1 == "circular";
  if (v397) {
    introspect(JAM.policy.p13) {
      var v394 = sequence$$18.substring(0, lookAhead$$1)
    }
    shiftValue$$1 = v394.length;
    var v962 = sequence$$18.length;
    var v859 = v962 - lookAhead$$1;
    var v860 = sequence$$18.length;
    introspect(JAM.policy.p27) {
      var v706 = sequence$$18.substring(v859, v860)
    }
    var v395 = v706 + sequence$$18;
    introspect(JAM.policy.p13) {
      var v396 = sequence$$18.substring(0, lookAhead$$1)
    }
    sequence$$18 = v395 + v396;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$15 = 0;
  var v707 = arrayOfItems$$2.length;
  var v408 = i$$15 < v707;
  for (;v408;) {
    var v708 = arrayOfItems$$2[i$$15];
    introspect(JAM.policy.p16) {
      var v398 = v708.match(/\/.+\//)
    }
    matchExp$$2 = v398 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v963 = arrayOfItems$$2[i$$15];
    introspect(JAM.policy.p16) {
      var v861 = v963.match(/\)\D*\d+/)
    }
    var v709 = v861.toString();
    introspect(JAM.policy.p15) {
      var v399 = v709.replace(/\)\D*/, "")
    }
    cutDistance$$1 = parseFloat(v399);
    var v862 = arrayOfItems$$2[i$$15];
    introspect(JAM.policy.p16) {
      var v710 = v862.match(/\([^\(]+\)/)
    }
    var v400 = v710.toString();
    introspect(JAM.policy.p15) {
      label = v400.replace(/\(|\)/g, "");
    }
    introspect(JAM.policy.p17) {
      var v404 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    for (;v404;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v711 = matchPosition$$1 >= lowerLimit$$1;
      if (v711) {
        v711 = matchPosition$$1 < upperLimit$$1;
      }
      var v402 = v711;
      if (v402) {
        var v863 = label + " ";
        var v964 = matchPosition$$1 - shiftValue$$1;
        var v864 = v964 + 1;
        var v712 = v863 + v864;
        var v713 = matchPosition$$1 - shiftValue$$1;
        var v401 = new RestrictionSite(v712, v713);
        introspect(JAM.policy.p17) {
          tempArray.push(v401);
        }
        timesFound$$1++;
      }
      var v714 = matchExp$$2.lastIndex;
      var v865 = RegExp.lastMatch;
      var v715 = v865.length;
      var v403 = v714 - v715;
      matchExp$$2.lastIndex = v403 + 1;
      introspect(JAM.policy.p17) {
        v404 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
      }
    }
    var j$$11 = 0;
    var v716 = tempArray.length;
    var v407 = j$$11 < v716;
    for (;v407;) {
      var v405 = tempArray[j$$11];
      v405.numberOfCuts = timesFound$$1;
      var v406 = tempArray[j$$11];
      introspect(JAM.policy.p17) {
        restrictionSiteCollection$$2.addRestrictionSite(v406);
      }
      j$$11++;
      var v717 = tempArray.length;
      v407 = j$$11 < v717;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$15++;
    var v718 = arrayOfItems$$2.length;
    v408 = i$$15 < v718;
  }
  return restrictionSiteCollection$$2;
}
function writeLayout(start$$4, stop) {
  var i$$16 = 0;
  var v866 = this.components;
  var v719 = v866.length;
  var v410 = i$$16 < v719;
  for (;v410;) {
    var v720 = this.components;
    var v409 = v720[i$$16];
    introspect(JAM.policy.p27) {
      v409.writeLayoutComponent(start$$4, stop);
    }
    i$$16++;
    var v867 = this.components;
    var v721 = v867.length;
    v410 = i$$16 < v721;
  }
  return;
}
function addComponent(component) {
  var v411 = this.components;
  introspect(JAM.policy.p17) {
    v411.push(component);
  }
  return;
}
function TextLayout() {
  var v1516 = new Array;
  this.components = v1516;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  introspect(JAM.policy.p16) {
    var v722 = text$$14.search(/./)
  }
  var v412 = v722 != -1;
  if (v412) {
    introspect(JAM.policy.p16) {
      var v1517 = text$$14.match(/./g)
    }
    this.characters = v1517;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v413 = this.characters;
  introspect(JAM.policy.p27) {
    var rangeToCheck = v413.slice(start$$6, stop$$2)
  }
  introspect(JAM.policy.p10) {
    rangeToCheck = rangeToCheck.join("");
  }
  introspect(JAM.policy.p16) {
    var v723 = rangeToCheck.search(/\w/)
  }
  var v414 = v723 == -1;
  if (v414) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1518 = new Array;
  this.characters = v1518;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1519 = new Array;
  this.characters = v1519;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1520 = new Array;
  this.characters = v1520;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1521 = new Array;
  this.characters = v1521;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1522 = new Array;
  this.characters = v1522;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v415 = count$$3 == 0;
    if (v415) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    introspect(JAM.policy.p13) {
      return ruler$$1.substring(0, 10);
    }
  }
  var v416 = this.characters;
  introspect(JAM.policy.p10) {
    var sequence$$19 = v416.join("")
  }
  var count$$3 = 0;
  var spacing = "         ";
  introspect(JAM.policy.p15) {
    sequence$$19 = sequence$$19.replace(/(.{1,10})/g, v4);
  }
  introspect(JAM.policy.p16) {
    var v1523 = sequence$$19.match(/./g)
  }
  this.characters = v1523;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v417 = this.restrictionSites;
  introspect(JAM.policy.p17) {
    v417.push(restrictionSite);
  }
  return;
}
function sortRestrictionSites() {
  var v418 = this.restrictionSites;
  introspect(JAM.policy.p17) {
    v418.sort(restrictionSiteSorter);
  }
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v724 = this.restrictionSites;
  var v419 = v724.length;
  var i$$17 = v419 - 1;
  var v422 = i$$17 >= 0;
  for (;v422;) {
    var v1035 = this.restrictionSites;
    var v965 = v1035[i$$17];
    var v868 = v965.position;
    var v725 = v868 >= start$$11;
    if (v725) {
      var v1036 = this.restrictionSites;
      var v966 = v1036[i$$17];
      var v869 = v966.position;
      v725 = v869 < stop$$7;
    }
    var v421 = v725;
    if (v421) {
      var v726 = this.restrictionSites;
      var v420 = v726.pop();
      introspect(JAM.policy.p17) {
        arrayToReturn.push(v420);
      }
    } else {
      break;
    }
    i$$17--;
    v422 = i$$17 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1524 = new Array;
  this.restrictionSites = v1524;
  return;
}
function restrictionSiteSorter(a, b) {
  var v727 = a.position;
  var v728 = b.position;
  var v423 = v727 < v728;
  if (v423) {
    return 1;
  }
  var v729 = a.position;
  var v730 = b.position;
  var v424 = v729 > v730;
  if (v424) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v425 = TextLayout.prototype;
v425.writeLayout = writeLayout;
var v426 = TextLayout.prototype;
v426.addComponent = addComponent;
new LayoutComponent;
var v427 = LayoutComponent.prototype;
v427.writeLayoutComponent = writeLayoutComponent;
var v428 = LayoutComponent.prototype;
v428.setCharacters = setCharacters;
var v429 = LayoutComponent.prototype;
v429.isRoom = isRoom;
var v430 = TranslationComponent;
var v1525 = new LayoutComponent;
v430.prototype = v1525;
var v431 = TranslationComponent.prototype;
v431.writeLayoutComponent = v5;
var v432 = UppercaseTranslationComponent;
var v1526 = new LayoutComponent;
v432.prototype = v1526;
var v433 = UppercaseTranslationComponent.prototype;
v433.writeLayoutComponent = v6;
var v434 = DnaComponent;
var v1527 = new LayoutComponent;
v434.prototype = v1527;
var v435 = DnaComponent.prototype;
v435.writeLayoutComponent = v7;
var v436 = RulerComponent;
var v1528 = new LayoutComponent;
v436.prototype = v1528;
var v437 = RulerComponent.prototype;
v437.writeLayoutComponent = v10;
new RulerComponent;
var v438 = RulerComponent.prototype;
v438.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v439 = RestrictionSiteCollection.prototype;
v439.addRestrictionSite = addRestrictionSite;
var v440 = RestrictionSiteCollection.prototype;
v440.sortRestrictionSites = sortRestrictionSites;
var v441 = RestrictionSiteCollection.prototype;
v441.getSitesInRange = getSitesInRange;
document.onload = v11;
introspect(JAM.policy.p10) {
  var v442 = document.getElementById("submitbtn")
}
v442.onclick = v12;
introspect(JAM.policy.p10) {
  var v443 = document.getElementById("clearbtn")
}
v443.onclick = v13
