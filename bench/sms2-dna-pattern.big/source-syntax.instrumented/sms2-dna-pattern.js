function v4() {
  var v582 = document.forms;
  introspect(JAM.policy.p26) {
    var v497 = v582[0]
  }
  var v302 = v497.elements;
  introspect(JAM.policy.p26) {
    var v5 = v302[0]
  }
  v5.value = " ";
  var v583 = document.forms;
  introspect(JAM.policy.p26) {
    var v498 = v583[0]
  }
  var v303 = v498.elements;
  introspect(JAM.policy.p26) {
    var v6 = v303[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    introspect(JAM.policy.p38) {
      dnaPattern(document);
    }
  } catch (e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    introspect(JAM.policy.p38) {
      alert(v7);
    }
  }
  return;
}
function v2() {
  var v304 = document.main_form;
  var v8 = v304.main_submit;
  introspect(JAM.policy.p39) {
    v8.focus();
  }
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p41) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v9 = arrayOfSequences[0]
  }
  var lengthOfAlign = v9.length;
  var v305 = arrayOfSequences.length;
  var v10 = v305 < 2;
  if (v10) {
    introspect(JAM.policy.p22) {
      alert("Please enter an alignment consisting of at least two sequences.");
    }
    return false;
  }
  var i$$1 = 0;
  var v306 = arrayOfTitles.length;
  var v12 = i$$1 < v306;
  for (;v12;) {
    introspect(JAM.policy.p26) {
      var v639 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p38) {
      var v584 = v639.search(/\S/)
    }
    var v499 = v584 == -1;
    var v586 = !v499;
    if (v586) {
      introspect(JAM.policy.p26) {
        var v640 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p38) {
        var v585 = v640.search(/\S/)
      }
      v499 = v585 == -1;
    }
    var v307 = v499;
    var v501 = !v307;
    if (v501) {
      introspect(JAM.policy.p26) {
        var v587 = arrayOfSequences[i$$1]
      }
      var v500 = v587.length;
      v307 = v500 != lengthOfAlign;
    }
    var v11 = v307;
    if (v11) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$1 = i$$1 + 1;
    var v308 = arrayOfTitles.length;
    v12 = i$$1 < v308;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p38) {
    var v674 = codonTable.search(/AmAcid/)
  }
  var v641 = v674 == -1;
  var v676 = !v641;
  if (v676) {
    introspect(JAM.policy.p38) {
      var v675 = codonTable.search(/Codon/)
    }
    v641 = v675 == -1;
  }
  var v588 = v641;
  var v643 = !v588;
  if (v643) {
    introspect(JAM.policy.p38) {
      var v642 = codonTable.search(/Number/)
    }
    v588 = v642 == -1;
  }
  var v502 = v588;
  var v590 = !v502;
  if (v590) {
    introspect(JAM.policy.p38) {
      var v589 = codonTable.search(/\/1000/)
    }
    v502 = v589 == -1;
  }
  var v309 = v502;
  var v504 = !v309;
  if (v504) {
    introspect(JAM.policy.p38) {
      var v503 = codonTable.search(/Fraction\s*\.\./)
    }
    v309 = v503 == -1;
  }
  var v13 = v309;
  if (v13) {
    introspect(JAM.policy.p22) {
      alert("The codon table has been entered incorrectly.");
    }
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v505 = formElement.value;
  introspect(JAM.policy.p38) {
    var v310 = v505.search(/\S/)
  }
  var v14 = v310 == -1;
  if (v14) {
    introspect(JAM.policy.p22) {
      alert("Please enter some text.");
    }
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v311 = arrayOfPatterns.length;
  var v17 = z$$2 < v311;
  for (;v17;) {
    introspect(JAM.policy.p26) {
      var v506 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v312 = v506.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v312 == -1;
    if (v15) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v507 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v313 = moreExpressionCheck(v507)
    }
    var v16 = v313 == false;
    if (v16) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$2 = z$$2 + 1;
    var v314 = arrayOfPatterns.length;
    v17 = z$$2 < v314;
  }
  var v18 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult = new Array(v18)
  }
  var v19 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp = new Array(v19)
  }
  var j = 0;
  var v315 = arrayOfPatterns.length;
  var v26 = j < v315;
  for (;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAM.policy.p26) {
      var v591 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v508 = v591.match(/\/.+\//)
    }
    var v316 = v508 + "gi";
    introspect(JAM.policy.p38) {
      var v775 = eval(v316)
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v775;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v509 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v317 = v509.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v776 = v317.toString()
    }
    introspect(JAM.policy.p27) {
      v22[v23] = v776;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v318 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p40) {
      var v777 = v318.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v24[v25] = v777;
    }
    j = j + 1;
    var v319 = arrayOfPatterns.length;
    v26 = j < v319;
  }
  var i$$2 = 0;
  var v510 = testSequence.length;
  var v320 = v510 - 3;
  var v33 = i$$2 <= v320;
  for (;v33;) {
    var v27 = i$$2 + 3;
    introspect(JAM.policy.p41) {
      codon = testSequence.substring(i$$2, v27);
    }
    j = 0;
    var v321 = geneticCodeMatchExp.length;
    var v31 = j < v321;
    for (;v31;) {
      introspect(JAM.policy.p26) {
        var v511 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p38) {
        var v322 = codon.search(v511)
      }
      var v30 = v322 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v323 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v323 + ".";
          introspect(JAM.policy.p38) {
            alert(v28);
          }
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v324 = geneticCodeMatchExp.length;
      v31 = j < v324;
    }
    var v32 = oneMatch == false;
    if (v32) {
      introspect(JAM.policy.p22) {
        alert("The genetic code expressions are missing a codon.");
      }
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v512 = testSequence.length;
    var v325 = v512 - 3;
    v33 = i$$2 <= v325;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v326;
  for (;v35;) {
    introspect(JAM.policy.p26) {
      var v513 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p38) {
      var v327 = v513.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v34 = v327 != -1;
    if (v34) {
      introspect(JAM.policy.p22) {
        alert("One or more groups have been entered incorrectly.");
      }
      return false;
    }
    z$$3 = z$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v328;
  }
  var i$$3 = 0;
  var v329 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v329;
  for (;v39;) {
    introspect(JAM.policy.p26) {
      var v514 = arrayOfPatterns$$1[i$$3]
    }
    var v330 = "[" + v514;
    var v36 = v330 + "]";
    introspect(JAM.policy.p40) {
      var re = new RegExp(v36, "gi")
    }
    var j$$1 = i$$3 + 1;
    var v331 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v331;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v515 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p38) {
        var v332 = v515.search(re)
      }
      var v37 = v332 != -1;
      if (v37) {
        introspect(JAM.policy.p22) {
          alert("The same amino acid is in more than one similarity group.");
        }
        return false;
      }
      j$$1 = j$$1 + 1;
      var v333 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v333;
    }
    i$$3 = i$$3 + 1;
    var v334 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v334;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v335 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v335;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v516 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v336 = v516.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v40 = v336 == -1;
    if (v40) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v517 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v337 = moreExpressionCheck(v517)
    }
    var v41 = v337 == false;
    if (v41) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$4 = z$$4 + 1;
    var v338 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v338;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  introspect(JAM.policy.p38) {
    var v592 = getSequenceFromFasta(text$$7)
  }
  introspect(JAM.policy.p40) {
    var v518 = v592.replace(/[^A-Za-z]/g, "")
  }
  var v339 = v518.length;
  var v44 = v339 > maxInput;
  if (v44) {
    var v340 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v340 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v43);
    }
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v341 = text$$8.length;
  var v46 = v341 > maxInput$$1;
  if (v46) {
    var v342 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v342 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v45);
    }
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p40) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v47.write("</form>");
  }
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v48.write("</div>");
  }
  var v49 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v49.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v50.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v51.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  introspect(JAM.policy.p39) {
    v52.close();
  }
  return true;
}
function convertDegenerates(sequence$$1) {
  introspect(JAM.policy.p39) {
    sequence$$1 = sequence$$1.toLowerCase();
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p40) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v343 = alignArray.length;
  var v53 = v343 < 3;
  if (v53) {
    introspect(JAM.policy.p22) {
      alert("There is a problem with the alignment format.");
    }
    return false;
  }
  var i$$4 = 1;
  var v344 = alignArray.length;
  var v55 = i$$4 < v344;
  for (;v55;) {
    introspect(JAM.policy.p26) {
      var v519 = alignArray[i$$4]
    }
    introspect(JAM.policy.p38) {
      var v345 = v519.search(/[^\s]+\s/)
    }
    var v54 = v345 == -1;
    if (v54) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$4 = i$$4 + 1;
    var v346 = alignArray.length;
    v55 = i$$4 < v346;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p40) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p40) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p40) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p40) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p40) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  introspect(JAM.policy.p39) {
    var arrayOfFasta = new Array
  }
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p38) {
    var v347 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v58 = v347 != -1;
  if (v58) {
    introspect(JAM.policy.p38) {
      var v57 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v57;) {
      introspect(JAM.policy.p26) {
        var v56 = matchArray[0]
      }
      introspect(JAM.policy.p38) {
        arrayOfFasta.push(v56);
      }
      introspect(JAM.policy.p38) {
        v57 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v348 = sequence$$2.length;
  var v59 = "&gt;results for " + v348;
  var stringToReturn = v59 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v349 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v61 = v349 != -1;
  if (v61) {
    var v350 = stringToReturn + '"';
    var v60 = v350 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v351 = stringToReturn + ' starting "';
  introspect(JAM.policy.p24) {
    var v352 = sequence$$2.substring(0, 10)
  }
  var v62 = v351 + v352;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v353 = sequenceOne.length;
  var v63 = "Search results for " + v353;
  var stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v354 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v65 = v354 != -1;
  if (v65) {
    var v355 = stringToReturn$$1 + '"';
    var v64 = v355 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v356 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v357 = sequenceOne.substring(0, 10)
  }
  var v66 = v356 + v357;
  stringToReturn$$1 = v66 + '"\n';
  var v358 = stringToReturn$$1 + "and ";
  var v359 = sequenceTwo.length;
  var v67 = v358 + v359;
  stringToReturn$$1 = v67 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v360 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v69 = v360 != -1;
  if (v69) {
    var v361 = stringToReturn$$1 + '"';
    var v68 = v361 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v362 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v363 = sequenceTwo.substring(0, 10)
  }
  var v70 = v362 + v363;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp$$1 = new Array(v72)
  }
  var j$$2 = 0;
  var v364 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v364;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.p26) {
      var v593 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p38) {
      var v520 = v593.match(/\/.+\//)
    }
    var v365 = v520 + "gi";
    introspect(JAM.policy.p38) {
      var v778 = eval(v365)
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v778;
    }
    j$$2 = j$$2 + 1;
    var v366 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v366;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult$$1 = new Array(v76)
  }
  var j$$3 = 0;
  var v367 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v367;
  for (;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAM.policy.p26) {
      var v521 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p38) {
      var v368 = v521.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v779 = v368.toString()
    }
    introspect(JAM.policy.p27) {
      v77[v78] = v779;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v369 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p40) {
      var v780 = v369.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v79[v80] = v780;
    }
    j$$3 = j$$3 + 1;
    var v370 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v370;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v371 = sequence$$3.length;
  var v82 = "Results for " + v371;
  var stringToReturn$$2 = v82 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v372 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v84 = v372 != -1;
  if (v84) {
    var v373 = stringToReturn$$2 + '"';
    var v83 = v373 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"';
  }
  var v374 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p24) {
    var v375 = sequence$$3.substring(0, 10)
  }
  var v85 = v374 + v375;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v522 = "Results for " + topology;
  var v376 = v522 + " ";
  var v377 = sequence$$4.length;
  var v87 = v376 + v377;
  var stringToReturn$$3 = v87 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v378 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v89 = v378 != -1;
  if (v89) {
    var v379 = stringToReturn$$3 + '"';
    var v88 = v379 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"';
  }
  var v380 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p24) {
    var v381 = sequence$$4.substring(0, 10)
  }
  var v90 = v380 + v381;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v382 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v382;
  var stringToReturn$$4 = v92 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v383 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v94 = v383 != -1;
  if (v94) {
    var v384 = stringToReturn$$4 + '"';
    var v93 = v384 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"';
  }
  var v385 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v386 = sequenceOne$$1.substring(0, 10)
  }
  var v95 = v385 + v386;
  stringToReturn$$4 = v95 + '"\n';
  var v387 = stringToReturn$$4 + "and ";
  var v388 = sequenceTwo$$1.length;
  var v96 = v387 + v388;
  stringToReturn$$4 = v96 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v389 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v98 = v389 != -1;
  if (v98) {
    var v390 = stringToReturn$$4 + '"';
    var v97 = v390 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"';
  }
  var v391 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v392 = sequenceTwo$$1.substring(0, 10)
  }
  var v99 = v391 + v392;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  introspect(JAM.policy.p39) {
    var sequenceArray = new Array
  }
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for (;v102;) {
    introspect(JAM.policy.p39) {
      var v393 = Math.random()
    }
    var v394 = components.length;
    var v101 = v393 * v394;
    introspect(JAM.policy.p38) {
      tempNum = Math.floor(v101);
    }
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    introspect(JAM.policy.p38) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p22) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p38) {
    var v395 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v103 = v395 != -1;
  if (v103) {
    introspect(JAM.policy.p40) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p38) {
    var v396 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v105 = v396 != -1;
  if (v105) {
    introspect(JAM.policy.p40) {
      var v104 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    introspect(JAM.policy.p39) {
      fastaTitle = v104.toString();
    }
    introspect(JAM.policy.p40) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p40) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p40) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p38) {
    var v753 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v746 = v753 != -1;
  var v755 = !v746;
  if (v755) {
    introspect(JAM.policy.p38) {
      var v754 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v746 = v754 != -1;
  }
  var v735 = v746;
  var v748 = !v735;
  if (v748) {
    introspect(JAM.policy.p38) {
      var v747 = expressionToCheck.search(/\[\]/)
    }
    v735 = v747 != -1;
  }
  var v723 = v735;
  var v737 = !v723;
  if (v737) {
    introspect(JAM.policy.p38) {
      var v736 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v723 = v736 != -1;
  }
  var v709 = v723;
  var v725 = !v709;
  if (v725) {
    introspect(JAM.policy.p38) {
      var v724 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v709 = v724 != -1;
  }
  var v693 = v709;
  var v711 = !v693;
  if (v711) {
    introspect(JAM.policy.p38) {
      var v710 = expressionToCheck.search(/\|\|/)
    }
    v693 = v710 != -1;
  }
  var v677 = v693;
  var v695 = !v677;
  if (v695) {
    introspect(JAM.policy.p38) {
      var v694 = expressionToCheck.search(/\/\|/)
    }
    v677 = v694 != -1;
  }
  var v644 = v677;
  var v679 = !v644;
  if (v679) {
    introspect(JAM.policy.p38) {
      var v678 = expressionToCheck.search(/\|\//)
    }
    v644 = v678 != -1;
  }
  var v594 = v644;
  var v646 = !v594;
  if (v646) {
    introspect(JAM.policy.p38) {
      var v645 = expressionToCheck.search(/\[.\]/)
    }
    v594 = v645 != -1;
  }
  var v523 = v594;
  var v596 = !v523;
  if (v596) {
    introspect(JAM.policy.p38) {
      var v595 = expressionToCheck.search(/\</)
    }
    v523 = v595 != -1;
  }
  var v397 = v523;
  var v525 = !v397;
  if (v525) {
    introspect(JAM.policy.p38) {
      var v524 = expressionToCheck.search(/\>/)
    }
    v397 = v524 != -1;
  }
  var v106 = v397;
  if (v106) {
    return false;
  }
  return true;
}
function openForm() {
  var v107 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v107.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v108 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v108.write("<pre>");
  }
  var v109 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v109.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v110 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v110.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$6) {
  introspect(JAM.policy.p40) {
    _openWindow(title$$6, true);
  }
  return;
}
function _openWindow(title$$7, isColor) {
  introspect(JAM.policy.p23) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  introspect(JAM.policy.p39) {
    outputWindow.focus();
  }
  var v111 = outputWindow.document;
  var v597 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v526 = v597 + "<head>\n";
  var v398 = v526 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v398 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v111.write(v112);
  }
  if (isColor) {
    var v113 = outputWindow.document;
    var v768 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v760 = v764 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v756 = v760 + "div.info {font-weight: bold}\n";
    var v749 = v756 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v749 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v726 = v738 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v712 = v726 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v712 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v680 = v696 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v647 = v680 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v598 = v647 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v527 = v598 + "td.many {color: #000000}\n";
    var v399 = v527 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v399 + "</style>\n";
    introspect(JAM.policy.p38) {
      v113.write(v114);
    }
  } else {
    var v115 = outputWindow.document;
    var v772 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v769 = v772 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v765 = v769 + "div.title {display: none}\n";
    var v761 = v765 + "div.info {font-weight: bold}\n";
    var v757 = v761 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v750 = v757 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v750 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v727 = v739 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v727 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v713 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v697 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v681 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v599 = v648 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v528 = v599 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v400 = v528 + "img {display: none}\n";
    var v116 = v400 + "</style>\n";
    introspect(JAM.policy.p38) {
      v115.write(v116);
    }
  }
  var v117 = outputWindow.document;
  var v600 = "</head>\n" + '<body class="main">\n';
  var v529 = v600 + '<div class="title">';
  var v401 = v529 + title$$7;
  var v118 = v401 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v117.write(v118);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  introspect(JAM.policy.p40) {
    _openWindowAlign(title$$8, true);
  }
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAM.policy.p23) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  introspect(JAM.policy.p39) {
    outputWindow.focus();
  }
  var v119 = outputWindow.document;
  var v601 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v530 = v601 + "<head>\n";
  var v402 = v530 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v402 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v119.write(v120);
  }
  if (isBackground) {
    var v121 = outputWindow.document;
    var v770 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v766 = v770 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v762 = v766 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v758 = v762 + "div.info {font-weight: bold}\n";
    var v751 = v758 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v740 = v751 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v728 = v740 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v714 = v728 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v698 = v714 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v682 = v698 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v649 = v682 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v602 = v649 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v531 = v602 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v403 = v531 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v403 + "</style>\n";
    introspect(JAM.policy.p38) {
      v121.write(v122);
    }
  } else {
    var v123 = outputWindow.document;
    var v774 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v773 = v774 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v771 = v773 + "div.title {display: none}\n";
    var v767 = v771 + "div.info {font-weight: bold}\n";
    var v763 = v767 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v759 = v763 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v752 = v759 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v741 = v752 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v729 = v741 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v715 = v729 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v699 = v715 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v683 = v699 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v650 = v683 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v603 = v650 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v532 = v603 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v404 = v532 + "img {display: none}\n";
    var v124 = v404 + "</style>\n";
    introspect(JAM.policy.p38) {
      v123.write(v124);
    }
  }
  var v125 = outputWindow.document;
  var v604 = "</head>\n" + '<body class="main">\n';
  var v533 = v604 + '<div class="title">';
  var v405 = v533 + title$$9;
  var v126 = v405 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v125.write(v126);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p40) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p40) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p40) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p40) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p40) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p40) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p40) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p40) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p40) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  introspect(JAM.policy.p39) {
    var tempDnaArray = new Array
  }
  introspect(JAM.policy.p38) {
    var v406 = dnaSequence$$1.search(/./)
  }
  var v127 = v406 != -1;
  if (v127) {
    introspect(JAM.policy.p38) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    introspect(JAM.policy.p39) {
      tempDnaArray = tempDnaArray.reverse();
    }
    introspect(JAM.policy.p22) {
      dnaSequence$$1 = tempDnaArray.join("");
    }
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  introspect(JAM.policy.p39) {
    theNumber = theNumber.toString();
  }
  j$$5 = theNumber.length;
  var v128 = j$$5 < lengthOfColumn;
  for (;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn;
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  introspect(JAM.policy.p39) {
    var testArray = new Array
  }
  var testString = "1234567890";
  introspect(JAM.policy.p38) {
    testArray.push(testString);
  }
  introspect(JAM.policy.p26) {
    var v407 = testArray[0]
  }
  var v131 = v407 != testString;
  if (v131) {
    introspect(JAM.policy.p22) {
      alert("Array object push method not supported. See browser compatibility page.");
    }
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p38) {
    var v408 = testString.search(re$$2)
  }
  var v132 = v408 == -1;
  if (v132) {
    introspect(JAM.policy.p22) {
      alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    }
    return false;
  }
  var caughtException = false;
  try {
    introspect(JAM.policy.p22) {
      re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
    }
  } catch (e$$4) {
    caughtException = true;
  }
  var v133 = !caughtException;
  if (v133) {
    introspect(JAM.policy.p22) {
      alert("Exception handling not supported. See browser compatibility page.");
    }
  }
  testString = "123";
  introspect(JAM.policy.p41) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v134 = testString != "1X2X3X";
  if (v134) {
    introspect(JAM.policy.p22) {
      alert("Nested function in String replace method not supported. See browser compatibility page.");
    }
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p25) {
    var v409 = testNum.toFixed(3)
  }
  var v135 = v409 != 2489.824;
  if (v135) {
    introspect(JAM.policy.p22) {
      alert("Number toFixed() method not supported. See browser compatibility page.");
    }
    return false;
  }
  introspect(JAM.policy.p25) {
    var v410 = testNum.toPrecision(5)
  }
  var v136 = v410 != 2489.8;
  if (v136) {
    introspect(JAM.policy.p22) {
      alert("Number toPrecision() method not supported. See browser compatibility page.");
    }
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p38) {
    var v411 = theNumber$$1.search(/\d/)
  }
  var v137 = v411 == -1;
  if (v137) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number");
    }
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p38) {
    var v651 = emblFile.search(/ID/)
  }
  var v605 = v651 == -1;
  var v653 = !v605;
  if (v653) {
    introspect(JAM.policy.p38) {
      var v652 = emblFile.search(/AC/)
    }
    v605 = v652 == -1;
  }
  var v534 = v605;
  var v607 = !v534;
  if (v607) {
    introspect(JAM.policy.p38) {
      var v606 = emblFile.search(/DE/)
    }
    v534 = v606 == -1;
  }
  var v412 = v534;
  var v536 = !v412;
  if (v536) {
    introspect(JAM.policy.p38) {
      var v535 = emblFile.search(/SQ/)
    }
    v412 = v535 == -1;
  }
  var v138 = v412;
  if (v138) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p38) {
    var v413 = theNumber$$2.search(/\d/)
  }
  var v139 = v413 == -1;
  if (v139) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number.");
    }
    return false;
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if (v141) {
    var v414 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v414 + ".";
    introspect(JAM.policy.p38) {
      alert(v140);
    }
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p38) {
    var v415 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v142 = v415 != -1;
  if (v142) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-DNA characters, which will be omitted.");
    }
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p38) {
    var v416 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v143 = v416 != -1;
  if (v143) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-protein characters, which will be omitted.");
    }
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p38) {
    var v654 = genBankFile.search(/LOCUS/)
  }
  var v608 = v654 == -1;
  var v656 = !v608;
  if (v656) {
    introspect(JAM.policy.p38) {
      var v655 = genBankFile.search(/DEFINITION/)
    }
    v608 = v655 == -1;
  }
  var v537 = v608;
  var v610 = !v537;
  if (v610) {
    introspect(JAM.policy.p38) {
      var v609 = genBankFile.search(/ACCESSION/)
    }
    v537 = v609 == -1;
  }
  var v417 = v537;
  var v539 = !v417;
  if (v539) {
    introspect(JAM.policy.p38) {
      var v538 = genBankFile.search(/ORIGIN/)
    }
    v417 = v538 == -1;
  }
  var v144 = v417;
  if (v144) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p38) {
    var v657 = genBankFile$$1.search(/LOCUS/)
  }
  var v611 = v657 == -1;
  var v659 = !v611;
  if (v659) {
    introspect(JAM.policy.p38) {
      var v658 = genBankFile$$1.search(/DEFINITION/)
    }
    v611 = v658 == -1;
  }
  var v540 = v611;
  var v613 = !v540;
  if (v613) {
    introspect(JAM.policy.p38) {
      var v612 = genBankFile$$1.search(/ACCESSION/)
    }
    v540 = v612 == -1;
  }
  var v418 = v540;
  var v542 = !v418;
  if (v542) {
    introspect(JAM.policy.p38) {
      var v541 = genBankFile$$1.search(/ORIGIN/)
    }
    v418 = v541 == -1;
  }
  var v145 = v418;
  if (v145) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v419 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v146 = v419 == -1;
  if (v146) {
    introspect(JAM.policy.p22) {
      alert("The file has no defined features.");
    }
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p38) {
    var v660 = emblFile$$1.search(/ID/)
  }
  var v614 = v660 == -1;
  var v662 = !v614;
  if (v662) {
    introspect(JAM.policy.p38) {
      var v661 = emblFile$$1.search(/AC/)
    }
    v614 = v661 == -1;
  }
  var v543 = v614;
  var v616 = !v543;
  if (v616) {
    introspect(JAM.policy.p38) {
      var v615 = emblFile$$1.search(/DE/)
    }
    v543 = v615 == -1;
  }
  var v420 = v543;
  var v545 = !v420;
  if (v545) {
    introspect(JAM.policy.p38) {
      var v544 = emblFile$$1.search(/SQ/)
    }
    v420 = v544 == -1;
  }
  var v147 = v420;
  if (v147) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v421 = emblFile$$1.search(/^FT/m)
  }
  var v148 = v421 == -1;
  if (v148) {
    introspect(JAM.policy.p22) {
      alert("The file has no defined features.");
    }
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  introspect(JAM.policy.p38) {
    var i$$5 = parseInt(startBase)
  }
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  introspect(JAM.policy.p38) {
    groupSize = parseInt(groupSize);
  }
  introspect(JAM.policy.p38) {
    basePerLine = parseInt(basePerLine);
  }
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    var v149 = i$$5 + 1;
    introspect(JAM.policy.p41) {
      lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    }
    var j$$6 = 1;
    var v422 = basePerLine / groupSize;
    var v153 = j$$6 <= v422;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v150 = lineOfText;
        var v423 = k + i$$5;
        introspect(JAM.policy.p38) {
          var v151 = text$$10.charAt(v423)
        }
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v424 = basePerLine / groupSize;
      v153 = j$$6 <= v424;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    introspect(JAM.policy.p38) {
      v154.write(v155);
    }
    lineOfText = "";
    v156 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  introspect(JAM.policy.p41) {
    writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  }
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v425 = adjustment < 0;
    if (v425) {
      v425 = adjusted >= 0;
    }
    var v157 = v425;
    if (v157) {
      adjusted = adjusted + 1;
    }
    return adjusted;
  }
  introspect(JAM.policy.p38) {
    var i$$6 = parseInt(startBase$$2)
  }
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  introspect(JAM.policy.p38) {
    groupSize$$2 = parseInt(groupSize$$2);
  }
  introspect(JAM.policy.p38) {
    basePerLine$$2 = parseInt(basePerLine$$2);
  }
  introspect(JAM.policy.p38) {
    numberingAdjustment = parseInt(numberingAdjustment);
  }
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v426 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v426;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v427 = i$$6 + k$$1;
        var v158 = v427 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v159 = lineOfText$$1;
        var v428 = k$$1 + i$$6;
        introspect(JAM.policy.p38) {
          var v160 = text$$12.charAt(v428)
        }
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if (v164) {
        var v162 = aboveNum;
        introspect(JAM.policy.p41) {
          var v429 = adjustNumbering(i$$6, numberingAdjustment)
        }
        introspect(JAM.policy.p40) {
          var v163 = rightNum(v429, "", groupSize$$2, tabIn$$3)
        }
        aboveNum = v162 + v163;
      }
      var v165 = i$$6 >= stopBase$$2;
      if (v165) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v430 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v430;
    }
    var v189 = numberPosition$$1 == "left";
    if (v189) {
      var v167 = outputWindow.document;
      introspect(JAM.policy.p41) {
        var v617 = adjustNumbering(lineNum, numberingAdjustment)
      }
      introspect(JAM.policy.p40) {
        var v546 = rightNum(v617, "", 8, tabIn$$3)
      }
      var v431 = v546 + lineOfText$$1;
      var v168 = v431 + "\n";
      introspect(JAM.policy.p38) {
        v167.write(v168);
      }
      var v172 = strands$$1 == "two";
      if (v172) {
        var v169 = outputWindow.document;
        introspect(JAM.policy.p41) {
          var v618 = adjustNumbering(lineNum, numberingAdjustment)
        }
        introspect(JAM.policy.p40) {
          var v547 = rightNum(v618, "", 8, tabIn$$3)
        }
        introspect(JAM.policy.p38) {
          var v548 = complement(lineOfText$$1)
        }
        var v432 = v547 + v548;
        var v170 = v432 + "\n";
        introspect(JAM.policy.p38) {
          v169.write(v170);
        }
        var v171 = outputWindow.document;
        introspect(JAM.policy.p22) {
          v171.write("\n");
        }
      }
    } else {
      var v188 = numberPosition$$1 == "right";
      if (v188) {
        var v173 = outputWindow.document;
        var v549 = lineOfText$$1;
        introspect(JAM.policy.p41) {
          var v550 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v433 = v549 + v550;
        var v174 = v433 + "\n";
        introspect(JAM.policy.p38) {
          v173.write(v174);
        }
        var v178 = strands$$1 == "two";
        if (v178) {
          var v175 = outputWindow.document;
          introspect(JAM.policy.p38) {
            var v551 = complement(lineOfText$$1)
          }
          introspect(JAM.policy.p41) {
            var v552 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v434 = v551 + v552;
          var v176 = v434 + "\n";
          introspect(JAM.policy.p38) {
            v175.write(v176);
          }
          var v177 = outputWindow.document;
          introspect(JAM.policy.p22) {
            v177.write("\n");
          }
        }
      } else {
        var v187 = numberPosition$$1 == "above";
        if (v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          introspect(JAM.policy.p38) {
            v179.write(v180);
          }
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p38) {
            v181.write(v182);
          }
          var v186 = strands$$1 == "two";
          if (v186) {
            var v183 = outputWindow.document;
            introspect(JAM.policy.p38) {
              var v435 = complement(lineOfText$$1)
            }
            var v184 = v435 + "\n";
            introspect(JAM.policy.p38) {
              v183.write(v184);
            }
            var v185 = outputWindow.document;
            introspect(JAM.policy.p22) {
              v185.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
  }
  return true;
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  introspect(JAM.policy.p38) {
    var i$$7 = parseInt(startBase$$3)
  }
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  introspect(JAM.policy.p38) {
    groupSize$$3 = parseInt(groupSize$$3);
  }
  introspect(JAM.policy.p38) {
    basePerLine$$3 = parseInt(basePerLine$$3);
  }
  var v211 = i$$7 < stopBase$$3;
  for (;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v436 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v436;
    for (;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        var v437 = i$$7 + k$$2;
        var v191 = v437 >= stopBase$$3;
        if (v191) {
          break;
        }
        var v192 = lineOfText$$2;
        var v438 = k$$2 + i$$7;
        introspect(JAM.policy.p38) {
          var v193 = text$$13.charAt(v438)
        }
        lineOfText$$2 = v192 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v197 = numberPosition$$2 == "above";
      if (v197) {
        var v195 = aboveNum$$1;
        introspect(JAM.policy.p40) {
          var v196 = rightNum(i$$7, "", groupSize$$3, tabIn$$4)
        }
        aboveNum$$1 = v195 + v196;
      }
      var v198 = i$$7 >= stopBase$$3;
      if (v198) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v439 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v439;
    }
    var v210 = numberPosition$$2 == "left";
    if (v210) {
      var v200 = outputWindow.document;
      introspect(JAM.policy.p40) {
        var v553 = rightNum(lineNum$$1, "", 8, tabIn$$4)
      }
      var v440 = v553 + lineOfText$$2;
      var v201 = v440 + "\n";
      introspect(JAM.policy.p38) {
        v200.write(v201);
      }
    } else {
      var v209 = numberPosition$$2 == "right";
      if (v209) {
        var v202 = outputWindow.document;
        var v441 = lineOfText$$2 + i$$7;
        var v203 = v441 + "\n";
        introspect(JAM.policy.p38) {
          v202.write(v203);
        }
      } else {
        var v208 = numberPosition$$2 == "above";
        if (v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p38) {
            v204.write(v205);
          }
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p38) {
            v206.write(v207);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3;
  }
  return true;
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  introspect(JAM.policy.p38) {
    numMut = parseInt(numMut);
  }
  introspect(JAM.policy.p38) {
    firstIndexToMutate = parseInt(firstIndexToMutate);
  }
  introspect(JAM.policy.p38) {
    lastIndexToMutate = parseInt(lastIndexToMutate);
  }
  var v619 = sequence$$13.length;
  var v554 = v619 <= firstIndexToMutate;
  var v620 = !v554;
  if (v620) {
    v554 = lastIndexToMutate < 0;
  }
  var v442 = v554;
  var v555 = !v442;
  if (v555) {
    v442 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v212 = v442;
  if (v212) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    introspect(JAM.policy.p39) {
      var v443 = Math.random()
    }
    var v213 = v443 * maxNum;
    introspect(JAM.policy.p38) {
      randNum = Math.floor(v213);
    }
    var v444 = randNum < firstIndexToMutate;
    var v556 = !v444;
    if (v556) {
      v444 = randNum > lastIndexToMutate;
    }
    var v214 = v444;
    if (v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p38) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      introspect(JAM.policy.p39) {
        var v445 = Math.random()
      }
      var v446 = components$$1.length;
      var v215 = v445 * v446;
      introspect(JAM.policy.p38) {
        componentsIndex = Math.round(v215);
      }
      var v447 = components$$1.length;
      var v216 = componentsIndex == v447;
      if (v216) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v448 = components$$1[componentsIndex]
      }
      var v217 = v448 != currentChar;
      if (v217) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p24) {
      var v449 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v450 = components$$1[componentsIndex]
    }
    var v218 = v449 + v450;
    var v451 = randNum + 1;
    var v452 = sequence$$13.length;
    introspect(JAM.policy.p41) {
      var v219 = sequence$$13.substring(v451, v452)
    }
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut;
  }
  var v221 = outputWindow.document;
  introspect(JAM.policy.p38) {
    var v222 = addReturns(sequence$$13)
  }
  introspect(JAM.policy.p38) {
    v221.write(v222);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for (;v227;) {
    introspect(JAM.policy.p39) {
      var v453 = Math.random()
    }
    var v454 = components$$2.length;
    var v223 = v453 * v454;
    introspect(JAM.policy.p38) {
      tempNum$$1 = Math.floor(v223);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v455 = sequence$$14.length;
    var v226 = v455 == 60;
    if (v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      introspect(JAM.policy.p38) {
        v224.write(v225);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1;
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  introspect(JAM.policy.p38) {
    v228.write(v229);
  }
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  introspect(JAM.policy.p39) {
    var resultArray = new Array
  }
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
  var v233 = dnaConformation == "circular";
  if (v233) {
    introspect(JAM.policy.p24) {
      var v230 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v230.length;
    var v621 = sequence$$15.length;
    var v557 = v621 - lookAhead;
    var v558 = sequence$$15.length;
    introspect(JAM.policy.p41) {
      var v456 = sequence$$15.substring(v557, v558)
    }
    var v231 = v456 + sequence$$15;
    introspect(JAM.policy.p24) {
      var v232 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v234 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v234.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v235 = outputWindow.document;
  var v622 = '<tr><td class="title" width="200px">' + "Site:";
  var v559 = v622 + '</td><td class="title">';
  var v457 = v559 + "Positions:";
  var v236 = v457 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v235.write(v236);
  }
  var i$$9 = 0;
  var v458 = arrayOfItems.length;
  var v252 = i$$9 < v458;
  for (;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v459 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v237 = v459.match(/\/.+\//)
    }
    matchExp = v237 + "gi";
    matchPosition = 0;
    introspect(JAM.policy.p38) {
      matchExp = eval(matchExp);
    }
    introspect(JAM.policy.p26) {
      var v623 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v560 = v623.match(/\)\D*\d+/)
    }
    introspect(JAM.policy.p39) {
      var v460 = v560.toString()
    }
    introspect(JAM.policy.p40) {
      var v238 = v460.replace(/\)\D*/, "")
    }
    introspect(JAM.policy.p38) {
      cutDistance = parseFloat(v238);
    }
    introspect(JAM.policy.p38) {
      var v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v461 = matchPosition >= lowerLimit;
      if (v461) {
        v461 = matchPosition < upperLimit;
      }
      var v242 = v461;
      if (v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v462 = matchPosition - shiftValue;
        var v241 = v462 + 1;
        tempString$$1 = v240 + v241;
      }
      var v463 = matchExp.lastIndex;
      var v561 = RegExp.lastMatch;
      var v464 = v561.length;
      var v243 = v463 - v464;
      matchExp.lastIndex = v243 + 1;
      introspect(JAM.policy.p38) {
        v244 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p38) {
      var v465 = tempString$$1.search(/\d/)
    }
    var v245 = v465 != -1;
    if (v245) {
      introspect(JAM.policy.p40) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v249 = timesFound == 0;
    if (v249) {
      backGroundClass = "none";
    } else {
      var v248 = timesFound == 1;
      if (v248) {
        backGroundClass = "one";
      } else {
        var v247 = timesFound == 2;
        if (v247) {
          backGroundClass = "two";
        } else {
          var v246 = timesFound == 3;
          if (v246) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v716 = '<tr><td class="' + backGroundClass;
    var v700 = v716 + '">';
    introspect(JAM.policy.p26) {
      var v742 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v730 = v742.match(/\([^\(]+\)/)
    }
    introspect(JAM.policy.p39) {
      var v717 = v730.toString()
    }
    introspect(JAM.policy.p40) {
      var v701 = v717.replace(/\(|\)/g, "")
    }
    var v684 = v700 + v701;
    var v663 = v684 + '</td><td class="';
    var v624 = v663 + backGroundClass;
    var v562 = v624 + '">';
    var v466 = v562 + tempString$$1;
    var v251 = v466 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v250.write(v251);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v467 = arrayOfItems.length;
    v252 = i$$9 < v467;
  }
  var v253 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v253.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v254.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v255 = outputWindow.document;
  var v685 = '<tr><td class="title">' + "Pattern:";
  var v664 = v685 + '</td><td class="title">';
  var v625 = v664 + "Times found:";
  var v563 = v625 + '</td><td class="title">';
  var v468 = v563 + "Percentage:";
  var v256 = v468 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v255.write(v256);
  }
  var i$$10 = 0;
  var v469 = arrayOfItems$$1.length;
  var v265 = i$$10 < v469;
  for (;v265;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v470 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v257 = v470.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v257 + "gi";
    introspect(JAM.policy.p38) {
      matchExp$$1 = eval(matchExp$$1);
    }
    introspect(JAM.policy.p38) {
      var v471 = sequence$$16.search(matchExp$$1)
    }
    var v259 = v471 != -1;
    if (v259) {
      introspect(JAM.policy.p38) {
        var v258 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v258.length;
    }
    var percentage = 0;
    var v564 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v665 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v626 = v665.match(/\d+/)
    }
    introspect(JAM.policy.p38) {
      var v565 = parseFloat(v626)
    }
    var v472 = v564 - v565;
    var v262 = v472 > 0;
    if (v262) {
      var v260 = 100 * tempNumber;
      var v473 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v627 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p38) {
        var v566 = v627.match(/\d+/)
      }
      introspect(JAM.policy.p38) {
        var v474 = parseFloat(v566)
      }
      var v261 = v473 - v474;
      percentage = v260 / v261;
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v743 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v731 = v743.match(/\([^\(]+\)\b/)
    }
    introspect(JAM.policy.p39) {
      var v718 = v731.toString()
    }
    introspect(JAM.policy.p40) {
      var v702 = v718.replace(/\(|\)/g, "")
    }
    var v686 = "<tr><td>" + v702;
    var v666 = v686 + "</td><td>";
    var v628 = v666 + tempNumber;
    var v567 = v628 + "</td><td>";
    introspect(JAM.policy.p25) {
      var v568 = percentage.toFixed(2)
    }
    var v475 = v567 + v568;
    var v264 = v475 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v263.write(v264);
    }
    i$$10 = i$$10 + 1;
    var v476 = arrayOfItems$$1.length;
    v265 = i$$10 < v476;
  }
  var v266 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v266.write("</tbody></table>\n");
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
  var v477 = sequence$$17.length;
  var v273 = v477 > 0;
  for (;v273;) {
    maxNum$$1 = sequence$$17.length;
    introspect(JAM.policy.p39) {
      var v478 = Math.random()
    }
    var v267 = v478 * maxNum$$1;
    introspect(JAM.policy.p38) {
      randNum$$1 = Math.floor(v267);
    }
    introspect(JAM.policy.p38) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p24) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    introspect(JAM.policy.p41) {
      tempString2 = sequence$$17.substring(v268, v269);
    }
    sequence$$17 = tempString1 + tempString2;
    var v479 = tempSeq.length;
    var v272 = v479 == 60;
    if (v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      introspect(JAM.policy.p38) {
        v270.write(v271);
      }
      tempSeq = "";
    }
    var v480 = sequence$$17.length;
    v273 = v480 > 0;
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  introspect(JAM.policy.p38) {
    v274.write(v275);
  }
  return true;
}
function dnaPattern(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  introspect(JAM.policy.p39) {
    var matches = new Array
  }
  introspect(JAM.policy.p39) {
    var v481 = testScript()
  }
  var v276 = v481 == false;
  if (v276) {
    return false;
  }
  var v719 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v703 = v719[0]
  }
  var v687 = v703.elements;
  introspect(JAM.policy.p26) {
    var v667 = v687[0]
  }
  introspect(JAM.policy.p38) {
    var v629 = checkFormElement(v667)
  }
  var v569 = v629 == false;
  var v631 = !v569;
  if (v631) {
    var v732 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v720 = v732[0]
    }
    var v704 = v720.elements;
    introspect(JAM.policy.p26) {
      var v688 = v704[0]
    }
    var v668 = v688.value;
    introspect(JAM.policy.p41) {
      var v630 = checkSequenceLength(v668, maxInput$$3)
    }
    v569 = v630 == false;
  }
  var v482 = v569;
  var v571 = !v482;
  if (v571) {
    var v705 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v689 = v705[0]
    }
    var v669 = v689.elements;
    introspect(JAM.policy.p26) {
      var v632 = v669[1]
    }
    introspect(JAM.policy.p38) {
      var v570 = checkFormElement(v632)
    }
    v482 = v570 == false;
  }
  var v277 = v482;
  if (v277) {
    return false;
  }
  var v706 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v690 = v706[0]
  }
  var v670 = v690.elements;
  introspect(JAM.policy.p26) {
    var v633 = v670[1]
  }
  var v572 = v633.value;
  introspect(JAM.policy.p40) {
    var v483 = v572.replace(/\//g, "")
  }
  var v278 = "/" + v483;
  var re$$3 = v278 + "/gi";
  introspect(JAM.policy.p38) {
    re$$3 = removeWhiteSpace(re$$3);
  }
  try {
    introspect(JAM.policy.p38) {
      re$$3 = eval(re$$3);
    }
    var testString$$1 = "teststring";
    introspect(JAM.policy.p40) {
      testString$$1 = testString$$1.replace(re$$3, "");
    }
  } catch (e$$5) {
    introspect(JAM.policy.p22) {
      alert("The regular expression is not formatted correctly.");
    }
    return false;
  }
  introspect(JAM.policy.p22) {
    openWindow("DNA Pattern Find");
  }
  introspect(JAM.policy.p39) {
    openPre();
  }
  var v671 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v634 = v671[0]
  }
  var v573 = v634.elements;
  introspect(JAM.policy.p26) {
    var v484 = v573[0]
  }
  var v279 = v484.value;
  introspect(JAM.policy.p38) {
    var arrayOfFasta$$1 = getArrayOfFasta(v279)
  }
  var i$$11 = 0;
  var v485 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v485;
  for (;v285;) {
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      newDna = getSequenceFromFasta(v280);
    }
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      title = getTitleFromFasta(v281);
    }
    introspect(JAM.policy.p38) {
      newDna = removeNonDna(newDna);
    }
    var v282 = outputWindow.document;
    introspect(JAM.policy.p41) {
      var v283 = getInfoFromTitleAndSequence(title, newDna)
    }
    introspect(JAM.policy.p38) {
      v282.write(v283);
    }
    introspect(JAM.policy.p41) {
      writeDnaPattern(newDna, re$$3);
    }
    var v284 = outputWindow.document;
    introspect(JAM.policy.p22) {
      v284.write("\n\n");
    }
    i$$11 = i$$11 + 1;
    var v486 = arrayOfFasta$$1.length;
    v285 = i$$11 < v486;
  }
  introspect(JAM.policy.p39) {
    closePre();
  }
  introspect(JAM.policy.p39) {
    closeWindow();
  }
  return true;
}
function writeDnaPattern(dnaSequence$$3, re$$4) {
  var matchArray$$2;
  var matchCount = 0;
  var length$$11 = dnaSequence$$3.length;
  introspect(JAM.policy.p39) {
    var simplePattern = re$$4.toString()
  }
  introspect(JAM.policy.p40) {
    simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  }
  introspect(JAM.policy.p38) {
    var v290 = matchArray$$2 = re$$4.exec(dnaSequence$$3)
  }
  for (;v290;) {
    matchCount = matchCount + 1;
    var match_end = re$$4.lastIndex;
    var v574 = RegExp.lastMatch;
    var v487 = v574.length;
    var v286 = match_end - v487;
    var match_start = v286 + 1;
    var v287 = outputWindow.document;
    var v744 = "&gt;match number " + matchCount;
    var v733 = v744 + ' to "';
    var v721 = v733 + simplePattern;
    var v707 = v721 + '" start=';
    var v691 = v707 + match_start;
    var v672 = v691 + " end=";
    var v635 = v672 + match_end;
    var v575 = v635 + " on the direct strand\n";
    introspect(JAM.policy.p26) {
      var v636 = matchArray$$2[0]
    }
    introspect(JAM.policy.p38) {
      var v576 = addReturns(v636)
    }
    var v488 = v575 + v576;
    var v288 = v488 + "\n\n";
    introspect(JAM.policy.p38) {
      v287.write(v288);
    }
    var v489 = re$$4.lastIndex;
    var v577 = RegExp.lastMatch;
    var v490 = v577.length;
    var v289 = v489 - v490;
    re$$4.lastIndex = v289 + 1;
    introspect(JAM.policy.p38) {
      v290 = matchArray$$2 = re$$4.exec(dnaSequence$$3);
    }
  }
  re$$4.lastIndex = 0;
  introspect(JAM.policy.p38) {
    var v291 = complement(dnaSequence$$3)
  }
  introspect(JAM.policy.p38) {
    dnaSequence$$3 = reverse(v291);
  }
  introspect(JAM.policy.p38) {
    var v297 = matchArray$$2 = re$$4.exec(dnaSequence$$3)
  }
  for (;v297;) {
    matchCount = matchCount + 1;
    var v491 = re$$4.lastIndex;
    var v292 = length$$11 - v491;
    match_start = v292 + 1;
    var v578 = RegExp.lastMatch;
    var v492 = v578.length;
    var v293 = match_start + v492;
    match_end = v293 - 1;
    var v294 = outputWindow.document;
    var v745 = "&gt;match number " + matchCount;
    var v734 = v745 + ' to "';
    var v722 = v734 + simplePattern;
    var v708 = v722 + '" start=';
    var v692 = v708 + match_start;
    var v673 = v692 + " end=";
    var v637 = v673 + match_end;
    var v579 = v637 + " on the reverse strand\n";
    introspect(JAM.policy.p26) {
      var v638 = matchArray$$2[0]
    }
    introspect(JAM.policy.p38) {
      var v580 = addReturns(v638)
    }
    var v493 = v579 + v580;
    var v295 = v493 + "\n\n";
    introspect(JAM.policy.p38) {
      v294.write(v295);
    }
    var v494 = re$$4.lastIndex;
    var v581 = RegExp.lastMatch;
    var v495 = v581.length;
    var v296 = v494 - v495;
    re$$4.lastIndex = v296 + 1;
    introspect(JAM.policy.p38) {
      v297 = matchArray$$2 = re$$4.exec(dnaSequence$$3);
    }
  }
  var v496 = matchCount > 0;
  var v299 = !v496;
  if (v299) {
    var v298 = outputWindow.document;
    introspect(JAM.policy.p22) {
      v298.write("no matches found for this sequence.\n\n");
    }
  }
  return;
}
document.onload = v2;
introspect(JAM.policy.p22) {
  var v300 = document.getElementById("submitbtn")
}
v300.onclick = v3;
introspect(JAM.policy.p22) {
  var v301 = document.getElementById("clearbtn")
}
v301.onclick = v4
