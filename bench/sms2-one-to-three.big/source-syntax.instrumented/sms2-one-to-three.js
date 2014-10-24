function v6() {
  var v553 = document.forms;
  introspect(JAM.policy.p26) {
    var v478 = v553[0]
  }
  var v293 = v478.elements;
  introspect(JAM.policy.p26) {
    var v7 = v293[0]
  }
  v7.value = " ";
  return;
}
function v5() {
  try {
    introspect(JAM.policy.p38) {
      oneToThree(document);
    }
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    introspect(JAM.policy.p38) {
      alert(v8);
    }
  }
  return;
}
function v4() {
  var v294 = document.main_form;
  var v9 = v294.main_submit;
  introspect(JAM.policy.p39) {
    v9.focus();
  }
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p40) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v10 = arrayOfSequences[0]
  }
  var lengthOfAlign = v10.length;
  var v295 = arrayOfSequences.length;
  var v11 = v295 < 2;
  if (v11) {
    introspect(JAM.policy.p22) {
      alert("Please enter an alignment consisting of at least two sequences.");
    }
    return false;
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v13 = i$$1 < v296;
  for (;v13;) {
    introspect(JAM.policy.p26) {
      var v602 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p38) {
      var v554 = v602.search(/\S/)
    }
    var v479 = v554 == -1;
    var v556 = !v479;
    if (v556) {
      introspect(JAM.policy.p26) {
        var v603 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p38) {
        var v555 = v603.search(/\S/)
      }
      v479 = v555 == -1;
    }
    var v297 = v479;
    var v481 = !v297;
    if (v481) {
      introspect(JAM.policy.p26) {
        var v557 = arrayOfSequences[i$$1]
      }
      var v480 = v557.length;
      v297 = v480 != lengthOfAlign;
    }
    var v12 = v297;
    if (v12) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$1 = i$$1 + 1;
    var v298 = arrayOfTitles.length;
    v13 = i$$1 < v298;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p38) {
    var v633 = codonTable.search(/AmAcid/)
  }
  var v604 = v633 == -1;
  var v635 = !v604;
  if (v635) {
    introspect(JAM.policy.p38) {
      var v634 = codonTable.search(/Codon/)
    }
    v604 = v634 == -1;
  }
  var v558 = v604;
  var v606 = !v558;
  if (v606) {
    introspect(JAM.policy.p38) {
      var v605 = codonTable.search(/Number/)
    }
    v558 = v605 == -1;
  }
  var v482 = v558;
  var v560 = !v482;
  if (v560) {
    introspect(JAM.policy.p38) {
      var v559 = codonTable.search(/\/1000/)
    }
    v482 = v559 == -1;
  }
  var v299 = v482;
  var v484 = !v299;
  if (v484) {
    introspect(JAM.policy.p38) {
      var v483 = codonTable.search(/Fraction\s*\.\./)
    }
    v299 = v483 == -1;
  }
  var v14 = v299;
  if (v14) {
    introspect(JAM.policy.p22) {
      alert("The codon table has been entered incorrectly.");
    }
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v485 = formElement.value;
  introspect(JAM.policy.p38) {
    var v300 = v485.search(/\S/)
  }
  var v15 = v300 == -1;
  if (v15) {
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
  var v301 = arrayOfPatterns.length;
  var v18 = z$$2 < v301;
  for (;v18;) {
    introspect(JAM.policy.p26) {
      var v486 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v302 = v486.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v16 = v302 == -1;
    if (v16) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v487 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v303 = moreExpressionCheck(v487)
    }
    var v17 = v303 == false;
    if (v17) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v18 = z$$2 < v304;
  }
  var v19 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult = new Array(v19)
  }
  var v20 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp = new Array(v20)
  }
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v27 = j < v305;
  for (;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v561 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v488 = v561.match(/\/.+\//)
    }
    var v306 = v488 + "gi";
    introspect(JAM.policy.p38) {
      var v718 = eval(v306)
    }
    introspect(JAM.policy.p27) {
      v21[v22] = v718;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v489 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v307 = v489.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v719 = v307.toString()
    }
    introspect(JAM.policy.p27) {
      v23[v24] = v719;
    }
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p26) {
      var v308 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p41) {
      var v720 = v308.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v25[v26] = v720;
    }
    j = j + 1;
    var v309 = arrayOfPatterns.length;
    v27 = j < v309;
  }
  var i$$2 = 0;
  var v490 = testSequence.length;
  var v310 = v490 - 3;
  var v34 = i$$2 <= v310;
  for (;v34;) {
    var v28 = i$$2 + 3;
    introspect(JAM.policy.p40) {
      codon = testSequence.substring(i$$2, v28);
    }
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v32 = j < v311;
    for (;v32;) {
      introspect(JAM.policy.p26) {
        var v491 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p38) {
        var v312 = codon.search(v491)
      }
      var v31 = v312 != -1;
      if (v31) {
        var v30 = oneMatch == true;
        if (v30) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v313 + ".";
          introspect(JAM.policy.p38) {
            alert(v29);
          }
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v314 = geneticCodeMatchExp.length;
      v32 = j < v314;
    }
    var v33 = oneMatch == false;
    if (v33) {
      introspect(JAM.policy.p22) {
        alert("The genetic code expressions are missing a codon.");
      }
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v492 = testSequence.length;
    var v315 = v492 - 3;
    v34 = i$$2 <= v315;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v316;
  for (;v36;) {
    introspect(JAM.policy.p26) {
      var v493 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p38) {
      var v317 = v493.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v35 = v317 != -1;
    if (v35) {
      introspect(JAM.policy.p22) {
        alert("One or more groups have been entered incorrectly.");
      }
      return false;
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v318;
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v319;
  for (;v40;) {
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns$$1[i$$3]
    }
    var v320 = "[" + v494;
    var v37 = v320 + "]";
    introspect(JAM.policy.p41) {
      var re = new RegExp(v37, "gi")
    }
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v321;
    for (;v39;) {
      introspect(JAM.policy.p26) {
        var v495 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p38) {
        var v322 = v495.search(re)
      }
      var v38 = v322 != -1;
      if (v38) {
        introspect(JAM.policy.p22) {
          alert("The same amino acid is in more than one similarity group.");
        }
        return false;
      }
      j$$1 = j$$1 + 1;
      var v323 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v323;
    }
    i$$3 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v324;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v325;
  for (;v43;) {
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v326 = v496.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v41 = v326 == -1;
    if (v41) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v497 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v327 = moreExpressionCheck(v497)
    }
    var v42 = v327 == false;
    if (v42) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v328;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  introspect(JAM.policy.p38) {
    var v562 = getSequenceFromFasta(text$$7)
  }
  introspect(JAM.policy.p41) {
    var v498 = v562.replace(/[^A-Za-z]/g, "")
  }
  var v329 = v498.length;
  var v45 = v329 > maxInput;
  if (v45) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v330 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v44);
    }
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v47 = v331 > maxInput$$1;
  if (v47) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v332 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v46);
    }
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p41) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v48.write("</form>");
  }
  return true;
}
function closePre() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v49.write("</div>");
  }
  var v50 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v50.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v51 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v51.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v52 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v52.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  introspect(JAM.policy.p39) {
    v53.close();
  }
  return true;
}
function convertDegenerates(sequence$$1) {
  introspect(JAM.policy.p39) {
    sequence$$1 = sequence$$1.toLowerCase();
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p41) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v333 = alignArray.length;
  var v54 = v333 < 3;
  if (v54) {
    introspect(JAM.policy.p22) {
      alert("There is a problem with the alignment format.");
    }
    return false;
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v56 = i$$4 < v334;
  for (;v56;) {
    introspect(JAM.policy.p26) {
      var v499 = alignArray[i$$4]
    }
    introspect(JAM.policy.p38) {
      var v335 = v499.search(/[^\s]+\s/)
    }
    var v55 = v335 == -1;
    if (v55) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$4 = i$$4 + 1;
    var v336 = alignArray.length;
    v56 = i$$4 < v336;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p41) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p41) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p41) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p41) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p41) {
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
    var v337 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v59 = v337 != -1;
  if (v59) {
    introspect(JAM.policy.p38) {
      var v58 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v58;) {
      introspect(JAM.policy.p26) {
        var v57 = matchArray[0]
      }
      introspect(JAM.policy.p38) {
        arrayOfFasta.push(v57);
      }
      introspect(JAM.policy.p38) {
        v58 = matchArray = re$$1.exec(sequenceData);
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
  var v338 = sequence$$2.length;
  var v60 = "&gt;results for " + v338;
  var stringToReturn = v60 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v339 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v62 = v339 != -1;
  if (v62) {
    var v340 = stringToReturn + '"';
    var v61 = v340 + fastaSequenceTitle;
    stringToReturn = v61 + '"';
  }
  var v341 = stringToReturn + ' starting "';
  introspect(JAM.policy.p24) {
    var v342 = sequence$$2.substring(0, 10)
  }
  var v63 = v341 + v342;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v64 = "Search results for " + v343;
  var stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v344 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v66 = v344 != -1;
  if (v66) {
    var v345 = stringToReturn$$1 + '"';
    var v65 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v347 = sequenceOne.substring(0, 10)
  }
  var v67 = v346 + v347;
  stringToReturn$$1 = v67 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v68 = v348 + v349;
  stringToReturn$$1 = v68 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v350 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v70 = v350 != -1;
  if (v70) {
    var v351 = stringToReturn$$1 + '"';
    var v69 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"';
  }
  var v352 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v353 = sequenceTwo.substring(0, 10)
  }
  var v71 = v352 + v353;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp$$1 = new Array(v73)
  }
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v354;
  for (;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAM.policy.p26) {
      var v563 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p38) {
      var v500 = v563.match(/\/.+\//)
    }
    var v355 = v500 + "gi";
    introspect(JAM.policy.p38) {
      var v721 = eval(v355)
    }
    introspect(JAM.policy.p27) {
      v74[v75] = v721;
    }
    j$$2 = j$$2 + 1;
    var v356 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v356;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult$$1 = new Array(v77)
  }
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v357;
  for (;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v501 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p38) {
      var v358 = v501.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v722 = v358.toString()
    }
    introspect(JAM.policy.p27) {
      v78[v79] = v722;
    }
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p26) {
      var v359 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p41) {
      var v723 = v359.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v80[v81] = v723;
    }
    j$$3 = j$$3 + 1;
    var v360 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v360;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v361 = sequence$$3.length;
  var v83 = "Results for " + v361;
  var stringToReturn$$2 = v83 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v362 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v85 = v362 != -1;
  if (v85) {
    var v363 = stringToReturn$$2 + '"';
    var v84 = v363 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"';
  }
  var v364 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p24) {
    var v365 = sequence$$3.substring(0, 10)
  }
  var v86 = v364 + v365;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v502 = "Results for " + topology;
  var v366 = v502 + " ";
  var v367 = sequence$$4.length;
  var v88 = v366 + v367;
  var stringToReturn$$3 = v88 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v368 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v90 = v368 != -1;
  if (v90) {
    var v369 = stringToReturn$$3 + '"';
    var v89 = v369 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"';
  }
  var v370 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p24) {
    var v371 = sequence$$4.substring(0, 10)
  }
  var v91 = v370 + v371;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v372 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v372;
  var stringToReturn$$4 = v93 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v373 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v95 = v373 != -1;
  if (v95) {
    var v374 = stringToReturn$$4 + '"';
    var v94 = v374 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v375 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v376 = sequenceOne$$1.substring(0, 10)
  }
  var v96 = v375 + v376;
  stringToReturn$$4 = v96 + '"\n';
  var v377 = stringToReturn$$4 + "and ";
  var v378 = sequenceTwo$$1.length;
  var v97 = v377 + v378;
  stringToReturn$$4 = v97 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v379 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v99 = v379 != -1;
  if (v99) {
    var v380 = stringToReturn$$4 + '"';
    var v98 = v380 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"';
  }
  var v381 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v382 = sequenceTwo$$1.substring(0, 10)
  }
  var v100 = v381 + v382;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  introspect(JAM.policy.p39) {
    var sequenceArray = new Array
  }
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    introspect(JAM.policy.p39) {
      var v383 = Math.random()
    }
    var v384 = components.length;
    var v102 = v383 * v384;
    introspect(JAM.policy.p38) {
      tempNum = Math.floor(v102);
    }
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    introspect(JAM.policy.p38) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p22) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p38) {
    var v385 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v385 != -1;
  if (v104) {
    introspect(JAM.policy.p41) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p38) {
    var v386 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v106 = v386 != -1;
  if (v106) {
    introspect(JAM.policy.p41) {
      var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    introspect(JAM.policy.p39) {
      fastaTitle = v105.toString();
    }
    introspect(JAM.policy.p41) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p41) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p41) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p38) {
    var v696 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v689 = v696 != -1;
  var v698 = !v689;
  if (v698) {
    introspect(JAM.policy.p38) {
      var v697 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v689 = v697 != -1;
  }
  var v680 = v689;
  var v691 = !v680;
  if (v691) {
    introspect(JAM.policy.p38) {
      var v690 = expressionToCheck.search(/\[\]/)
    }
    v680 = v690 != -1;
  }
  var v671 = v680;
  var v682 = !v671;
  if (v682) {
    introspect(JAM.policy.p38) {
      var v681 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v671 = v681 != -1;
  }
  var v660 = v671;
  var v673 = !v660;
  if (v673) {
    introspect(JAM.policy.p38) {
      var v672 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v660 = v672 != -1;
  }
  var v648 = v660;
  var v662 = !v648;
  if (v662) {
    introspect(JAM.policy.p38) {
      var v661 = expressionToCheck.search(/\|\|/)
    }
    v648 = v661 != -1;
  }
  var v636 = v648;
  var v650 = !v636;
  if (v650) {
    introspect(JAM.policy.p38) {
      var v649 = expressionToCheck.search(/\/\|/)
    }
    v636 = v649 != -1;
  }
  var v607 = v636;
  var v638 = !v607;
  if (v638) {
    introspect(JAM.policy.p38) {
      var v637 = expressionToCheck.search(/\|\//)
    }
    v607 = v637 != -1;
  }
  var v564 = v607;
  var v609 = !v564;
  if (v609) {
    introspect(JAM.policy.p38) {
      var v608 = expressionToCheck.search(/\[.\]/)
    }
    v564 = v608 != -1;
  }
  var v503 = v564;
  var v566 = !v503;
  if (v566) {
    introspect(JAM.policy.p38) {
      var v565 = expressionToCheck.search(/\</)
    }
    v503 = v565 != -1;
  }
  var v387 = v503;
  var v505 = !v387;
  if (v505) {
    introspect(JAM.policy.p38) {
      var v504 = expressionToCheck.search(/\>/)
    }
    v387 = v504 != -1;
  }
  var v107 = v387;
  if (v107) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v108.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v109.write("<pre>");
  }
  var v110 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v110.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v111.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$6) {
  introspect(JAM.policy.p41) {
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
  var v112 = outputWindow.document;
  var v567 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v567 + "<head>\n";
  var v388 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v112.write(v113);
  }
  if (isColor) {
    var v114 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v692 = v699 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v692 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v674 = v683 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v663 = v674 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v663 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v639 = v651 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v610 = v639 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v568 = v610 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v507 = v568 + "td.many {color: #000000}\n";
    var v389 = v507 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v389 + "</style>\n";
    introspect(JAM.policy.p38) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v715 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v712 = v715 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v712 + "div.title {display: none}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v700 = v704 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v700 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v684 = v693 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v675 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v664 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v640 = v652 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v611 = v640 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v569 = v611 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v508 = v569 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v390 = v508 + "img {display: none}\n";
    var v117 = v390 + "</style>\n";
    introspect(JAM.policy.p38) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v570 = "</head>\n" + '<body class="main">\n';
  var v509 = v570 + '<div class="title">';
  var v391 = v509 + title$$7;
  var v119 = v391 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  introspect(JAM.policy.p41) {
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
  var v120 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v510 = v571 + "<head>\n";
  var v392 = v510 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v120.write(v121);
  }
  if (isBackground) {
    var v122 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v709 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v694 = v701 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v685 = v694 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v676 = v685 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v665 = v676 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v653 = v665 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v641 = v653 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v612 = v641 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v572 = v612 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v511 = v572 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v393 = v511 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v393 + "</style>\n";
    introspect(JAM.policy.p38) {
      v122.write(v123);
    }
  } else {
    var v124 = outputWindow.document;
    var v717 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v716 = v717 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v714 = v716 + "div.title {display: none}\n";
    var v710 = v714 + "div.info {font-weight: bold}\n";
    var v706 = v710 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v702 = v706 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v695 = v702 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v666 = v677 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v654 = v666 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v613 = v642 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v573 = v613 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v512 = v573 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v394 = v512 + "img {display: none}\n";
    var v125 = v394 + "</style>\n";
    introspect(JAM.policy.p38) {
      v124.write(v125);
    }
  }
  var v126 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v513 = v574 + '<div class="title">';
  var v395 = v513 + title$$9;
  var v127 = v395 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v126.write(v127);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p41) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p41) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p41) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p41) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p41) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p41) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p41) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p41) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p41) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  introspect(JAM.policy.p39) {
    var tempDnaArray = new Array
  }
  introspect(JAM.policy.p38) {
    var v396 = dnaSequence$$1.search(/./)
  }
  var v128 = v396 != -1;
  if (v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for (;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn;
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
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
    var v397 = testArray[0]
  }
  var v132 = v397 != testString;
  if (v132) {
    introspect(JAM.policy.p22) {
      alert("Array object push method not supported. See browser compatibility page.");
    }
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p38) {
    var v398 = testString.search(re$$2)
  }
  var v133 = v398 == -1;
  if (v133) {
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
  var v134 = !caughtException;
  if (v134) {
    introspect(JAM.policy.p22) {
      alert("Exception handling not supported. See browser compatibility page.");
    }
  }
  testString = "123";
  introspect(JAM.policy.p40) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v135 = testString != "1X2X3X";
  if (v135) {
    introspect(JAM.policy.p22) {
      alert("Nested function in String replace method not supported. See browser compatibility page.");
    }
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p25) {
    var v399 = testNum.toFixed(3)
  }
  var v136 = v399 != 2489.824;
  if (v136) {
    introspect(JAM.policy.p22) {
      alert("Number toFixed() method not supported. See browser compatibility page.");
    }
    return false;
  }
  introspect(JAM.policy.p25) {
    var v400 = testNum.toPrecision(5)
  }
  var v137 = v400 != 2489.8;
  if (v137) {
    introspect(JAM.policy.p22) {
      alert("Number toPrecision() method not supported. See browser compatibility page.");
    }
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p38) {
    var v401 = theNumber$$1.search(/\d/)
  }
  var v138 = v401 == -1;
  if (v138) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number");
    }
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p38) {
    var v614 = emblFile.search(/ID/)
  }
  var v575 = v614 == -1;
  var v616 = !v575;
  if (v616) {
    introspect(JAM.policy.p38) {
      var v615 = emblFile.search(/AC/)
    }
    v575 = v615 == -1;
  }
  var v514 = v575;
  var v577 = !v514;
  if (v577) {
    introspect(JAM.policy.p38) {
      var v576 = emblFile.search(/DE/)
    }
    v514 = v576 == -1;
  }
  var v402 = v514;
  var v516 = !v402;
  if (v516) {
    introspect(JAM.policy.p38) {
      var v515 = emblFile.search(/SQ/)
    }
    v402 = v515 == -1;
  }
  var v139 = v402;
  if (v139) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p38) {
    var v403 = theNumber$$2.search(/\d/)
  }
  var v140 = v403 == -1;
  if (v140) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number.");
    }
    return false;
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if (v142) {
    var v404 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v404 + ".";
    introspect(JAM.policy.p38) {
      alert(v141);
    }
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p38) {
    var v405 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v143 = v405 != -1;
  if (v143) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-DNA characters, which will be omitted.");
    }
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p38) {
    var v406 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v144 = v406 != -1;
  if (v144) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-protein characters, which will be omitted.");
    }
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p38) {
    var v617 = genBankFile.search(/LOCUS/)
  }
  var v578 = v617 == -1;
  var v619 = !v578;
  if (v619) {
    introspect(JAM.policy.p38) {
      var v618 = genBankFile.search(/DEFINITION/)
    }
    v578 = v618 == -1;
  }
  var v517 = v578;
  var v580 = !v517;
  if (v580) {
    introspect(JAM.policy.p38) {
      var v579 = genBankFile.search(/ACCESSION/)
    }
    v517 = v579 == -1;
  }
  var v407 = v517;
  var v519 = !v407;
  if (v519) {
    introspect(JAM.policy.p38) {
      var v518 = genBankFile.search(/ORIGIN/)
    }
    v407 = v518 == -1;
  }
  var v145 = v407;
  if (v145) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p38) {
    var v620 = genBankFile$$1.search(/LOCUS/)
  }
  var v581 = v620 == -1;
  var v622 = !v581;
  if (v622) {
    introspect(JAM.policy.p38) {
      var v621 = genBankFile$$1.search(/DEFINITION/)
    }
    v581 = v621 == -1;
  }
  var v520 = v581;
  var v583 = !v520;
  if (v583) {
    introspect(JAM.policy.p38) {
      var v582 = genBankFile$$1.search(/ACCESSION/)
    }
    v520 = v582 == -1;
  }
  var v408 = v520;
  var v522 = !v408;
  if (v522) {
    introspect(JAM.policy.p38) {
      var v521 = genBankFile$$1.search(/ORIGIN/)
    }
    v408 = v521 == -1;
  }
  var v146 = v408;
  if (v146) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v409 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v147 = v409 == -1;
  if (v147) {
    introspect(JAM.policy.p22) {
      alert("The file has no defined features.");
    }
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p38) {
    var v623 = emblFile$$1.search(/ID/)
  }
  var v584 = v623 == -1;
  var v625 = !v584;
  if (v625) {
    introspect(JAM.policy.p38) {
      var v624 = emblFile$$1.search(/AC/)
    }
    v584 = v624 == -1;
  }
  var v523 = v584;
  var v586 = !v523;
  if (v586) {
    introspect(JAM.policy.p38) {
      var v585 = emblFile$$1.search(/DE/)
    }
    v523 = v585 == -1;
  }
  var v410 = v523;
  var v525 = !v410;
  if (v525) {
    introspect(JAM.policy.p38) {
      var v524 = emblFile$$1.search(/SQ/)
    }
    v410 = v524 == -1;
  }
  var v148 = v410;
  if (v148) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v411 = emblFile$$1.search(/^FT/m)
  }
  var v149 = v411 == -1;
  if (v149) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    var v150 = i$$5 + 1;
    introspect(JAM.policy.p40) {
      lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    }
    var j$$6 = 1;
    var v412 = basePerLine / groupSize;
    var v154 = j$$6 <= v412;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        var v151 = lineOfText;
        var v413 = k + i$$5;
        introspect(JAM.policy.p38) {
          var v152 = text$$10.charAt(v413)
        }
        lineOfText = v151 + v152;
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v414 = basePerLine / groupSize;
      v154 = j$$6 <= v414;
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    introspect(JAM.policy.p38) {
      v155.write(v156);
    }
    lineOfText = "";
    v157 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  introspect(JAM.policy.p40) {
    writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  }
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v415 = adjustment < 0;
    if (v415) {
      v415 = adjusted >= 0;
    }
    var v158 = v415;
    if (v158) {
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
  var v191 = i$$6 < stopBase$$2;
  for (;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v416 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v416;
    for (;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for (;v162;) {
        var v417 = i$$6 + k$$1;
        var v159 = v417 >= stopBase$$2;
        if (v159) {
          break;
        }
        var v160 = lineOfText$$1;
        var v418 = k$$1 + i$$6;
        introspect(JAM.policy.p38) {
          var v161 = text$$12.charAt(v418)
        }
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if (v165) {
        var v163 = aboveNum;
        introspect(JAM.policy.p40) {
          var v419 = adjustNumbering(i$$6, numberingAdjustment)
        }
        introspect(JAM.policy.p41) {
          var v164 = rightNum(v419, "", groupSize$$2, tabIn$$3)
        }
        aboveNum = v163 + v164;
      }
      var v166 = i$$6 >= stopBase$$2;
      if (v166) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v420 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v420;
    }
    var v190 = numberPosition$$1 == "left";
    if (v190) {
      var v168 = outputWindow.document;
      introspect(JAM.policy.p40) {
        var v587 = adjustNumbering(lineNum, numberingAdjustment)
      }
      introspect(JAM.policy.p41) {
        var v526 = rightNum(v587, "", 8, tabIn$$3)
      }
      var v421 = v526 + lineOfText$$1;
      var v169 = v421 + "\n";
      introspect(JAM.policy.p38) {
        v168.write(v169);
      }
      var v173 = strands$$1 == "two";
      if (v173) {
        var v170 = outputWindow.document;
        introspect(JAM.policy.p40) {
          var v588 = adjustNumbering(lineNum, numberingAdjustment)
        }
        introspect(JAM.policy.p41) {
          var v527 = rightNum(v588, "", 8, tabIn$$3)
        }
        introspect(JAM.policy.p38) {
          var v528 = complement(lineOfText$$1)
        }
        var v422 = v527 + v528;
        var v171 = v422 + "\n";
        introspect(JAM.policy.p38) {
          v170.write(v171);
        }
        var v172 = outputWindow.document;
        introspect(JAM.policy.p22) {
          v172.write("\n");
        }
      }
    } else {
      var v189 = numberPosition$$1 == "right";
      if (v189) {
        var v174 = outputWindow.document;
        var v529 = lineOfText$$1;
        introspect(JAM.policy.p40) {
          var v530 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v423 = v529 + v530;
        var v175 = v423 + "\n";
        introspect(JAM.policy.p38) {
          v174.write(v175);
        }
        var v179 = strands$$1 == "two";
        if (v179) {
          var v176 = outputWindow.document;
          introspect(JAM.policy.p38) {
            var v531 = complement(lineOfText$$1)
          }
          introspect(JAM.policy.p40) {
            var v532 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v424 = v531 + v532;
          var v177 = v424 + "\n";
          introspect(JAM.policy.p38) {
            v176.write(v177);
          }
          var v178 = outputWindow.document;
          introspect(JAM.policy.p22) {
            v178.write("\n");
          }
        }
      } else {
        var v188 = numberPosition$$1 == "above";
        if (v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          introspect(JAM.policy.p38) {
            v180.write(v181);
          }
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p38) {
            v182.write(v183);
          }
          var v187 = strands$$1 == "two";
          if (v187) {
            var v184 = outputWindow.document;
            introspect(JAM.policy.p38) {
              var v425 = complement(lineOfText$$1)
            }
            var v185 = v425 + "\n";
            introspect(JAM.policy.p38) {
              v184.write(v185);
            }
            var v186 = outputWindow.document;
            introspect(JAM.policy.p22) {
              v186.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2;
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
  var v212 = i$$7 < stopBase$$3;
  for (;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v426 = basePerLine$$3 / groupSize$$3;
    var v200 = j$$8 <= v426;
    for (;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for (;v195;) {
        var v427 = i$$7 + k$$2;
        var v192 = v427 >= stopBase$$3;
        if (v192) {
          break;
        }
        var v193 = lineOfText$$2;
        var v428 = k$$2 + i$$7;
        introspect(JAM.policy.p38) {
          var v194 = text$$13.charAt(v428)
        }
        lineOfText$$2 = v193 + v194;
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v198 = numberPosition$$2 == "above";
      if (v198) {
        var v196 = aboveNum$$1;
        introspect(JAM.policy.p41) {
          var v197 = rightNum(i$$7, "", groupSize$$3, tabIn$$4)
        }
        aboveNum$$1 = v196 + v197;
      }
      var v199 = i$$7 >= stopBase$$3;
      if (v199) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v429 = basePerLine$$3 / groupSize$$3;
      v200 = j$$8 <= v429;
    }
    var v211 = numberPosition$$2 == "left";
    if (v211) {
      var v201 = outputWindow.document;
      introspect(JAM.policy.p41) {
        var v533 = rightNum(lineNum$$1, "", 8, tabIn$$4)
      }
      var v430 = v533 + lineOfText$$2;
      var v202 = v430 + "\n";
      introspect(JAM.policy.p38) {
        v201.write(v202);
      }
    } else {
      var v210 = numberPosition$$2 == "right";
      if (v210) {
        var v203 = outputWindow.document;
        var v431 = lineOfText$$2 + i$$7;
        var v204 = v431 + "\n";
        introspect(JAM.policy.p38) {
          v203.write(v204);
        }
      } else {
        var v209 = numberPosition$$2 == "above";
        if (v209) {
          var v205 = outputWindow.document;
          var v206 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p38) {
            v205.write(v206);
          }
          var v207 = outputWindow.document;
          var v208 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p38) {
            v207.write(v208);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3;
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
  var v589 = sequence$$13.length;
  var v534 = v589 <= firstIndexToMutate;
  var v590 = !v534;
  if (v590) {
    v534 = lastIndexToMutate < 0;
  }
  var v432 = v534;
  var v535 = !v432;
  if (v535) {
    v432 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v213 = v432;
  if (v213) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for (;v221;) {
    maxNum = sequence$$13.length;
    introspect(JAM.policy.p39) {
      var v433 = Math.random()
    }
    var v214 = v433 * maxNum;
    introspect(JAM.policy.p38) {
      randNum = Math.floor(v214);
    }
    var v434 = randNum < firstIndexToMutate;
    var v536 = !v434;
    if (v536) {
      v434 = randNum > lastIndexToMutate;
    }
    var v215 = v434;
    if (v215) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p38) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      introspect(JAM.policy.p39) {
        var v435 = Math.random()
      }
      var v436 = components$$1.length;
      var v216 = v435 * v436;
      introspect(JAM.policy.p38) {
        componentsIndex = Math.round(v216);
      }
      var v437 = components$$1.length;
      var v217 = componentsIndex == v437;
      if (v217) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v438 = components$$1[componentsIndex]
      }
      var v218 = v438 != currentChar;
      if (v218) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p24) {
      var v439 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v440 = components$$1[componentsIndex]
    }
    var v219 = v439 + v440;
    var v441 = randNum + 1;
    var v442 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v220 = sequence$$13.substring(v441, v442)
    }
    sequence$$13 = v219 + v220;
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut;
  }
  var v222 = outputWindow.document;
  introspect(JAM.policy.p38) {
    var v223 = addReturns(sequence$$13)
  }
  introspect(JAM.policy.p38) {
    v222.write(v223);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for (;v228;) {
    introspect(JAM.policy.p39) {
      var v443 = Math.random()
    }
    var v444 = components$$2.length;
    var v224 = v443 * v444;
    introspect(JAM.policy.p38) {
      tempNum$$1 = Math.floor(v224);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v445 = sequence$$14.length;
    var v227 = v445 == 60;
    if (v227) {
      var v225 = outputWindow.document;
      var v226 = sequence$$14 + "\n";
      introspect(JAM.policy.p38) {
        v225.write(v226);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1;
  }
  var v229 = outputWindow.document;
  var v230 = sequence$$14 + "\n";
  introspect(JAM.policy.p38) {
    v229.write(v230);
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
  var v234 = dnaConformation == "circular";
  if (v234) {
    introspect(JAM.policy.p24) {
      var v231 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v231.length;
    var v591 = sequence$$15.length;
    var v537 = v591 - lookAhead;
    var v538 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v446 = sequence$$15.substring(v537, v538)
    }
    var v232 = v446 + sequence$$15;
    introspect(JAM.policy.p24) {
      var v233 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v232 + v233;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v235 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v235.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v236 = outputWindow.document;
  var v592 = '<tr><td class="title" width="200px">' + "Site:";
  var v539 = v592 + '</td><td class="title">';
  var v447 = v539 + "Positions:";
  var v237 = v447 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v236.write(v237);
  }
  var i$$9 = 0;
  var v448 = arrayOfItems.length;
  var v253 = i$$9 < v448;
  for (;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v449 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v238 = v449.match(/\/.+\//)
    }
    matchExp = v238 + "gi";
    matchPosition = 0;
    introspect(JAM.policy.p38) {
      matchExp = eval(matchExp);
    }
    introspect(JAM.policy.p26) {
      var v593 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v540 = v593.match(/\)\D*\d+/)
    }
    introspect(JAM.policy.p39) {
      var v450 = v540.toString()
    }
    introspect(JAM.policy.p41) {
      var v239 = v450.replace(/\)\D*/, "")
    }
    introspect(JAM.policy.p38) {
      cutDistance = parseFloat(v239);
    }
    introspect(JAM.policy.p38) {
      var v245 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v245;) {
      var v240 = matchExp.lastIndex;
      matchPosition = v240 - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if (v451) {
        v451 = matchPosition < upperLimit;
      }
      var v243 = v451;
      if (v243) {
        timesFound = timesFound + 1;
        var v241 = tempString$$1 + ", ";
        var v452 = matchPosition - shiftValue;
        var v242 = v452 + 1;
        tempString$$1 = v241 + v242;
      }
      var v453 = matchExp.lastIndex;
      var v541 = RegExp.lastMatch;
      var v454 = v541.length;
      var v244 = v453 - v454;
      matchExp.lastIndex = v244 + 1;
      introspect(JAM.policy.p38) {
        v245 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p38) {
      var v455 = tempString$$1.search(/\d/)
    }
    var v246 = v455 != -1;
    if (v246) {
      introspect(JAM.policy.p41) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v250 = timesFound == 0;
    if (v250) {
      backGroundClass = "none";
    } else {
      var v249 = timesFound == 1;
      if (v249) {
        backGroundClass = "one";
      } else {
        var v248 = timesFound == 2;
        if (v248) {
          backGroundClass = "two";
        } else {
          var v247 = timesFound == 3;
          if (v247) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v251 = outputWindow.document;
    var v667 = '<tr><td class="' + backGroundClass;
    var v655 = v667 + '">';
    introspect(JAM.policy.p26) {
      var v687 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v678 = v687.match(/\([^\(]+\)/)
    }
    introspect(JAM.policy.p39) {
      var v668 = v678.toString()
    }
    introspect(JAM.policy.p41) {
      var v656 = v668.replace(/\(|\)/g, "")
    }
    var v643 = v655 + v656;
    var v626 = v643 + '</td><td class="';
    var v594 = v626 + backGroundClass;
    var v542 = v594 + '">';
    var v456 = v542 + tempString$$1;
    var v252 = v456 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v251.write(v252);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v457 = arrayOfItems.length;
    v253 = i$$9 < v457;
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v254.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v255.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v256 = outputWindow.document;
  var v644 = '<tr><td class="title">' + "Pattern:";
  var v627 = v644 + '</td><td class="title">';
  var v595 = v627 + "Times found:";
  var v543 = v595 + '</td><td class="title">';
  var v458 = v543 + "Percentage:";
  var v257 = v458 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v256.write(v257);
  }
  var i$$10 = 0;
  var v459 = arrayOfItems$$1.length;
  var v266 = i$$10 < v459;
  for (;v266;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v460 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v258 = v460.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v258 + "gi";
    introspect(JAM.policy.p38) {
      matchExp$$1 = eval(matchExp$$1);
    }
    introspect(JAM.policy.p38) {
      var v461 = sequence$$16.search(matchExp$$1)
    }
    var v260 = v461 != -1;
    if (v260) {
      introspect(JAM.policy.p38) {
        var v259 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v259.length;
    }
    var percentage = 0;
    var v544 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v628 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v596 = v628.match(/\d+/)
    }
    introspect(JAM.policy.p38) {
      var v545 = parseFloat(v596)
    }
    var v462 = v544 - v545;
    var v263 = v462 > 0;
    if (v263) {
      var v261 = 100 * tempNumber;
      var v463 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v597 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p38) {
        var v546 = v597.match(/\d+/)
      }
      introspect(JAM.policy.p38) {
        var v464 = parseFloat(v546)
      }
      var v262 = v463 - v464;
      percentage = v261 / v262;
    }
    var v264 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v688 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v679 = v688.match(/\([^\(]+\)\b/)
    }
    introspect(JAM.policy.p39) {
      var v669 = v679.toString()
    }
    introspect(JAM.policy.p41) {
      var v657 = v669.replace(/\(|\)/g, "")
    }
    var v645 = "<tr><td>" + v657;
    var v629 = v645 + "</td><td>";
    var v598 = v629 + tempNumber;
    var v547 = v598 + "</td><td>";
    introspect(JAM.policy.p25) {
      var v548 = percentage.toFixed(2)
    }
    var v465 = v547 + v548;
    var v265 = v465 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v264.write(v265);
    }
    i$$10 = i$$10 + 1;
    var v466 = arrayOfItems$$1.length;
    v266 = i$$10 < v466;
  }
  var v267 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v267.write("</tbody></table>\n");
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
  var v467 = sequence$$17.length;
  var v274 = v467 > 0;
  for (;v274;) {
    maxNum$$1 = sequence$$17.length;
    introspect(JAM.policy.p39) {
      var v468 = Math.random()
    }
    var v268 = v468 * maxNum$$1;
    introspect(JAM.policy.p38) {
      randNum$$1 = Math.floor(v268);
    }
    introspect(JAM.policy.p38) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p24) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v269 = randNum$$1 + 1;
    var v270 = sequence$$17.length;
    introspect(JAM.policy.p40) {
      tempString2 = sequence$$17.substring(v269, v270);
    }
    sequence$$17 = tempString1 + tempString2;
    var v469 = tempSeq.length;
    var v273 = v469 == 60;
    if (v273) {
      var v271 = outputWindow.document;
      var v272 = tempSeq + "\n";
      introspect(JAM.policy.p38) {
        v271.write(v272);
      }
      tempSeq = "";
    }
    var v470 = sequence$$17.length;
    v274 = v470 > 0;
  }
  var v275 = outputWindow.document;
  var v276 = tempSeq + "\n";
  introspect(JAM.policy.p38) {
    v275.write(v276);
  }
  return true;
}
function oneToThree(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 1E5;
  introspect(JAM.policy.p39) {
    var v471 = testScript()
  }
  var v277 = v471 == false;
  if (v277) {
    return false;
  }
  var v658 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v646 = v658[0]
  }
  var v630 = v646.elements;
  introspect(JAM.policy.p26) {
    var v599 = v630[0]
  }
  introspect(JAM.policy.p38) {
    var v549 = checkFormElement(v599)
  }
  var v472 = v549 == false;
  var v551 = !v472;
  if (v551) {
    var v670 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v659 = v670[0]
    }
    var v647 = v659.elements;
    introspect(JAM.policy.p26) {
      var v631 = v647[0]
    }
    var v600 = v631.value;
    introspect(JAM.policy.p40) {
      var v550 = checkTextLength(v600, maxInput$$3)
    }
    v472 = v550 == false;
  }
  var v278 = v472;
  if (v278) {
    return false;
  }
  introspect(JAM.policy.p22) {
    openWindow("One to Three");
  }
  introspect(JAM.policy.p39) {
    openPre();
  }
  var v632 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v601 = v632[0]
  }
  var v552 = v601.elements;
  introspect(JAM.policy.p26) {
    var v473 = v552[0]
  }
  var v279 = v473.value;
  introspect(JAM.policy.p38) {
    var arrayOfFasta$$1 = getArrayOfFasta(v279)
  }
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v474;
  for (;v285;) {
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      newProtein = getSequenceFromFasta(v280);
    }
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      title = getTitleFromFasta(v281);
    }
    introspect(JAM.policy.p38) {
      newProtein = removeNonProteinAllowDegen(newProtein);
    }
    var v282 = outputWindow.document;
    introspect(JAM.policy.p40) {
      var v283 = getFastaTitleFromTitleAndSequence(title, newProtein)
    }
    introspect(JAM.policy.p38) {
      v282.write(v283);
    }
    introspect(JAM.policy.p38) {
      writeOneToThree(newProtein);
    }
    var v284 = outputWindow.document;
    introspect(JAM.policy.p22) {
      v284.write("\n\n");
    }
    i$$11 = i$$11 + 1;
    var v475 = arrayOfFasta$$1.length;
    v285 = i$$11 < v475;
  }
  introspect(JAM.policy.p39) {
    closePre();
  }
  introspect(JAM.policy.p39) {
    closeWindow();
  }
  return true;
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$9, p1$$3, p2, p3, offset$$11, s$$5) {
    var v476 = p1$$3;
    introspect(JAM.policy.p39) {
      var v477 = p2.toLowerCase()
    }
    var v286 = v476 + v477;
    introspect(JAM.policy.p39) {
      var v287 = p3.toLowerCase()
    }
    return v286 + v287;
  }
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v288 = " " + p1$$2;
    return v288 + " ";
  }
  introspect(JAM.policy.p39) {
    proteinSequence$$1 = proteinSequence$$1.toLowerCase();
  }
  introspect(JAM.policy.p40) {
    proteinSequence$$1 = proteinSequence$$1.replace(/(.)/g, v2);
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/a/g, "ALA");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/b/g, "ASX");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/c/g, "CYS");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/d/g, "ASP");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/e/g, "GLU");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/f/g, "PHE");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/g/g, "GLY");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/h/g, "HIS");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/i/g, "ILE");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/k/g, "LYS");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/l/g, "LEU");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/m/g, "MET");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/n/g, "ASN");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/p/g, "PRO");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/q/g, "GLN");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/r/g, "ARG");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/s/g, "SER");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/t/g, "THR");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/v/g, "VAL");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/w/g, "TRP");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/x/g, "XAA");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/y/g, "TYR");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/z/g, "GLX");
  }
  introspect(JAM.policy.p41) {
    proteinSequence$$1 = proteinSequence$$1.replace(/\*/g, "***");
  }
  introspect(JAM.policy.p40) {
    proteinSequence$$1 = proteinSequence$$1.replace(/\s*(.)(.)(.)\s*/g, v3);
  }
  var v289 = outputWindow.document;
  introspect(JAM.policy.p38) {
    var v290 = addReturns(proteinSequence$$1)
  }
  introspect(JAM.policy.p38) {
    v289.write(v290);
  }
  return true;
}
document.onload = v4;
introspect(JAM.policy.p22) {
  var v291 = document.getElementById("submitbtn")
}
v291.onclick = v5;
introspect(JAM.policy.p22) {
  var v292 = document.getElementById("clearbtn")
}
v292.onclick = v6
