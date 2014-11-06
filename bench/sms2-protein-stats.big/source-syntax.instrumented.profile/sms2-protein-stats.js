
JAM.startProfile('load');
function v4() {
  var v544 = document.forms;
  introspect(JAM.policy.p26) {
    var v469 = v544[0]
  }
  var v286 = v469.elements;
  introspect(JAM.policy.p26) {
    var v5 = v286[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    introspect(JAM.policy.p38) {
      proteinStats(document);
    }
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    introspect(JAM.policy.p38) {
      alert(v6);
    }
  }
  return;
}
function v2() {
  var v287 = document.main_form;
  var v7 = v287.main_submit;
  introspect(JAM.policy.p39) {
    v7.focus();
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
    var v8 = arrayOfSequences[0]
  }
  var lengthOfAlign = v8.length;
  var v288 = arrayOfSequences.length;
  var v9 = v288 < 2;
  if (v9) {
    introspect(JAM.policy.p22) {
      alert("Please enter an alignment consisting of at least two sequences.");
    }
    return false;
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v11 = i$$1 < v289;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v593 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p38) {
      var v545 = v593.search(/\S/)
    }
    var v470 = v545 == -1;
    var v547 = !v470;
    if (v547) {
      introspect(JAM.policy.p26) {
        var v594 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p38) {
        var v546 = v594.search(/\S/)
      }
      v470 = v546 == -1;
    }
    var v290 = v470;
    var v472 = !v290;
    if (v472) {
      introspect(JAM.policy.p26) {
        var v548 = arrayOfSequences[i$$1]
      }
      var v471 = v548.length;
      v290 = v471 != lengthOfAlign;
    }
    var v10 = v290;
    if (v10) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$1 = i$$1 + 1;
    var v291 = arrayOfTitles.length;
    v11 = i$$1 < v291;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p38) {
    var v624 = codonTable.search(/AmAcid/)
  }
  var v595 = v624 == -1;
  var v626 = !v595;
  if (v626) {
    introspect(JAM.policy.p38) {
      var v625 = codonTable.search(/Codon/)
    }
    v595 = v625 == -1;
  }
  var v549 = v595;
  var v597 = !v549;
  if (v597) {
    introspect(JAM.policy.p38) {
      var v596 = codonTable.search(/Number/)
    }
    v549 = v596 == -1;
  }
  var v473 = v549;
  var v551 = !v473;
  if (v551) {
    introspect(JAM.policy.p38) {
      var v550 = codonTable.search(/\/1000/)
    }
    v473 = v550 == -1;
  }
  var v292 = v473;
  var v475 = !v292;
  if (v475) {
    introspect(JAM.policy.p38) {
      var v474 = codonTable.search(/Fraction\s*\.\./)
    }
    v292 = v474 == -1;
  }
  var v12 = v292;
  if (v12) {
    introspect(JAM.policy.p22) {
      alert("The codon table has been entered incorrectly.");
    }
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  introspect(JAM.policy.p38) {
    var v293 = v476.search(/\S/)
  }
  var v13 = v293 == -1;
  if (v13) {
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
  var v294 = arrayOfPatterns.length;
  var v16 = z$$2 < v294;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v477 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v295 = v477.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v295 == -1;
    if (v14) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v478 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p38) {
      var v296 = moreExpressionCheck(v478)
    }
    var v15 = v296 == false;
    if (v15) {
      introspect(JAM.policy.p22) {
        alert("Genetic code error: one or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v16 = z$$2 < v297;
  }
  var v17 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult = new Array(v17)
  }
  var v18 = arrayOfPatterns.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp = new Array(v18)
  }
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v25 = j < v298;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v552 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v479 = v552.match(/\/.+\//)
    }
    var v299 = v479 + "gi";
    introspect(JAM.policy.p38) {
      var v709 = eval(v299)
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v709;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v480 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p38) {
      var v300 = v480.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v710 = v300.toString()
    }
    introspect(JAM.policy.p27) {
      v21[v22] = v710;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v301 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p41) {
      var v711 = v301.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v23[v24] = v711;
    }
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302;
  }
  var i$$2 = 0;
  var v481 = testSequence.length;
  var v303 = v481 - 3;
  var v32 = i$$2 <= v303;
  for (;v32;) {
    var v26 = i$$2 + 3;
    introspect(JAM.policy.p40) {
      codon = testSequence.substring(i$$2, v26);
    }
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v482 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p38) {
        var v305 = codon.search(v482)
      }
      var v29 = v305 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v306 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v306 + ".";
          introspect(JAM.policy.p38) {
            alert(v27);
          }
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v307 = geneticCodeMatchExp.length;
      v30 = j < v307;
    }
    var v31 = oneMatch == false;
    if (v31) {
      introspect(JAM.policy.p22) {
        alert("The genetic code expressions are missing a codon.");
      }
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v483 = testSequence.length;
    var v308 = v483 - 3;
    v32 = i$$2 <= v308;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v309;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v484 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p38) {
      var v310 = v484.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v33 = v310 != -1;
    if (v33) {
      introspect(JAM.policy.p22) {
        alert("One or more groups have been entered incorrectly.");
      }
      return false;
    }
    z$$3 = z$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v311;
  }
  var i$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v312;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v485 = arrayOfPatterns$$1[i$$3]
    }
    var v313 = "[" + v485;
    var v35 = v313 + "]";
    introspect(JAM.policy.p41) {
      var re = new RegExp(v35, "gi")
    }
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v486 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p38) {
        var v315 = v486.search(re)
      }
      var v36 = v315 != -1;
      if (v36) {
        introspect(JAM.policy.p22) {
          alert("The same amino acid is in more than one similarity group.");
        }
        return false;
      }
      j$$1 = j$$1 + 1;
      var v316 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v316;
    }
    i$$3 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v317;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v318 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v318;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v487 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v319 = v487.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v39 = v319 == -1;
    if (v39) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    introspect(JAM.policy.p26) {
      var v488 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p38) {
      var v320 = moreExpressionCheck(v488)
    }
    var v40 = v320 == false;
    if (v40) {
      introspect(JAM.policy.p22) {
        alert("One or more patterns have been entered incorrectly.");
      }
      return false;
    }
    z$$4 = z$$4 + 1;
    var v321 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v321;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  introspect(JAM.policy.p38) {
    var v553 = getSequenceFromFasta(text$$7)
  }
  introspect(JAM.policy.p41) {
    var v489 = v553.replace(/[^A-Za-z]/g, "")
  }
  var v322 = v489.length;
  var v43 = v322 > maxInput;
  if (v43) {
    var v323 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v323 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v42);
    }
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v324 = text$$8.length;
  var v45 = v324 > maxInput$$1;
  if (v45) {
    var v325 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v325 + " characters.";
    introspect(JAM.policy.p38) {
      alert(v44);
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
  var v46 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v46.write("</form>");
  }
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v47.write("</div>");
  }
  var v48 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v48.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v49.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v50.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  introspect(JAM.policy.p39) {
    v51.close();
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
  var v326 = alignArray.length;
  var v52 = v326 < 3;
  if (v52) {
    introspect(JAM.policy.p22) {
      alert("There is a problem with the alignment format.");
    }
    return false;
  }
  var i$$4 = 1;
  var v327 = alignArray.length;
  var v54 = i$$4 < v327;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v490 = alignArray[i$$4]
    }
    introspect(JAM.policy.p38) {
      var v328 = v490.search(/[^\s]+\s/)
    }
    var v53 = v328 == -1;
    if (v53) {
      introspect(JAM.policy.p22) {
        alert("There is a problem with the alignment format.");
      }
      return false;
    }
    i$$4 = i$$4 + 1;
    var v329 = alignArray.length;
    v54 = i$$4 < v329;
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
    var v330 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v57 = v330 != -1;
  if (v57) {
    introspect(JAM.policy.p38) {
      var v56 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v56;) {
      introspect(JAM.policy.p26) {
        var v55 = matchArray[0]
      }
      introspect(JAM.policy.p38) {
        arrayOfFasta.push(v55);
      }
      introspect(JAM.policy.p38) {
        v56 = matchArray = re$$1.exec(sequenceData);
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
  var v331 = sequence$$2.length;
  var v58 = "&gt;results for " + v331;
  var stringToReturn = v58 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v332 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v60 = v332 != -1;
  if (v60) {
    var v333 = stringToReturn + '"';
    var v59 = v333 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v334 = stringToReturn + ' starting "';
  introspect(JAM.policy.p24) {
    var v335 = sequence$$2.substring(0, 10)
  }
  var v61 = v334 + v335;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v336 = sequenceOne.length;
  var v62 = "Search results for " + v336;
  var stringToReturn$$1 = v62 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v337 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v64 = v337 != -1;
  if (v64) {
    var v338 = stringToReturn$$1 + '"';
    var v63 = v338 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v340 = sequenceOne.substring(0, 10)
  }
  var v65 = v339 + v340;
  stringToReturn$$1 = v65 + '"\n';
  var v341 = stringToReturn$$1 + "and ";
  var v342 = sequenceTwo.length;
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v343 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v68 = v343 != -1;
  if (v68) {
    var v344 = stringToReturn$$1 + '"';
    var v67 = v344 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v345 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p24) {
    var v346 = sequenceTwo.substring(0, 10)
  }
  var v69 = v345 + v346;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchExp$$1 = new Array(v71)
  }
  var j$$2 = 0;
  var v347 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v347;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v554 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p38) {
      var v491 = v554.match(/\/.+\//)
    }
    var v348 = v491 + "gi";
    introspect(JAM.policy.p38) {
      var v712 = eval(v348)
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v712;
    }
    j$$2 = j$$2 + 1;
    var v349 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v349;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  introspect(JAM.policy.p38) {
    var geneticCodeMatchResult$$1 = new Array(v75)
  }
  var j$$3 = 0;
  var v350 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v350;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p38) {
      var v351 = v492.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p39) {
      var v713 = v351.toString()
    }
    introspect(JAM.policy.p27) {
      v76[v77] = v713;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v352 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p41) {
      var v714 = v352.replace(/=/g, "")
    }
    introspect(JAM.policy.p27) {
      v78[v79] = v714;
    }
    j$$3 = j$$3 + 1;
    var v353 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v353;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v354 = sequence$$3.length;
  var v81 = "Results for " + v354;
  var stringToReturn$$2 = v81 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v355 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v83 = v355 != -1;
  if (v83) {
    var v356 = stringToReturn$$2 + '"';
    var v82 = v356 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v357 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p24) {
    var v358 = sequence$$3.substring(0, 10)
  }
  var v84 = v357 + v358;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v493 = "Results for " + topology;
  var v359 = v493 + " ";
  var v360 = sequence$$4.length;
  var v86 = v359 + v360;
  var stringToReturn$$3 = v86 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v361 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v88 = v361 != -1;
  if (v88) {
    var v362 = stringToReturn$$3 + '"';
    var v87 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v363 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p24) {
    var v364 = sequence$$4.substring(0, 10)
  }
  var v89 = v363 + v364;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v365;
  var stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v366 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v93 = v366 != -1;
  if (v93) {
    var v367 = stringToReturn$$4 + '"';
    var v92 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v369 = sequenceOne$$1.substring(0, 10)
  }
  var v94 = v368 + v369;
  stringToReturn$$4 = v94 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + " residue sequence ";
  introspect(JAM.policy.p38) {
    var v372 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v97 = v372 != -1;
  if (v97) {
    var v373 = stringToReturn$$4 + '"';
    var v96 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p24) {
    var v375 = sequenceTwo$$1.substring(0, 10)
  }
  var v98 = v374 + v375;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  introspect(JAM.policy.p39) {
    var sequenceArray = new Array
  }
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    introspect(JAM.policy.p39) {
      var v376 = Math.random()
    }
    var v377 = components.length;
    var v100 = v376 * v377;
    introspect(JAM.policy.p38) {
      tempNum = Math.floor(v100);
    }
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    introspect(JAM.policy.p38) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p22) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p38) {
    var v378 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v102 = v378 != -1;
  if (v102) {
    introspect(JAM.policy.p41) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p38) {
    var v379 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v379 != -1;
  if (v104) {
    introspect(JAM.policy.p41) {
      var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    introspect(JAM.policy.p39) {
      fastaTitle = v103.toString();
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
    var v687 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v680 = v687 != -1;
  var v689 = !v680;
  if (v689) {
    introspect(JAM.policy.p38) {
      var v688 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v680 = v688 != -1;
  }
  var v671 = v680;
  var v682 = !v671;
  if (v682) {
    introspect(JAM.policy.p38) {
      var v681 = expressionToCheck.search(/\[\]/)
    }
    v671 = v681 != -1;
  }
  var v662 = v671;
  var v673 = !v662;
  if (v673) {
    introspect(JAM.policy.p38) {
      var v672 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v662 = v672 != -1;
  }
  var v651 = v662;
  var v664 = !v651;
  if (v664) {
    introspect(JAM.policy.p38) {
      var v663 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v651 = v663 != -1;
  }
  var v639 = v651;
  var v653 = !v639;
  if (v653) {
    introspect(JAM.policy.p38) {
      var v652 = expressionToCheck.search(/\|\|/)
    }
    v639 = v652 != -1;
  }
  var v627 = v639;
  var v641 = !v627;
  if (v641) {
    introspect(JAM.policy.p38) {
      var v640 = expressionToCheck.search(/\/\|/)
    }
    v627 = v640 != -1;
  }
  var v598 = v627;
  var v629 = !v598;
  if (v629) {
    introspect(JAM.policy.p38) {
      var v628 = expressionToCheck.search(/\|\//)
    }
    v598 = v628 != -1;
  }
  var v555 = v598;
  var v600 = !v555;
  if (v600) {
    introspect(JAM.policy.p38) {
      var v599 = expressionToCheck.search(/\[.\]/)
    }
    v555 = v599 != -1;
  }
  var v494 = v555;
  var v557 = !v494;
  if (v557) {
    introspect(JAM.policy.p38) {
      var v556 = expressionToCheck.search(/\</)
    }
    v494 = v556 != -1;
  }
  var v380 = v494;
  var v496 = !v380;
  if (v496) {
    introspect(JAM.policy.p38) {
      var v495 = expressionToCheck.search(/\>/)
    }
    v380 = v495 != -1;
  }
  var v105 = v380;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v106.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v107.write("<pre>");
  }
  var v108 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v108.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v109.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  introspect(JAM.policy.p41) {
    _openWindow(title$$5, true);
  }
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p23) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  introspect(JAM.policy.p39) {
    outputWindow.focus();
  }
  var v110 = outputWindow.document;
  var v558 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v558 + "<head>\n";
  var v381 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v110.write(v111);
  }
  if (isColor) {
    var v112 = outputWindow.document;
    var v702 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v698 = v702 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v683 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v665 = v674 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v654 = v665 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v630 = v642 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v601 = v630 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v559 = v601 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v498 = v559 + "td.many {color: #000000}\n";
    var v382 = v498 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    introspect(JAM.policy.p38) {
      v112.write(v113);
    }
  } else {
    var v114 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v703 = v706 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {display: none}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v691 = v695 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v691 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v666 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v631 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v560 = v602 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v499 = v560 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v499 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    introspect(JAM.policy.p38) {
      v114.write(v115);
    }
  }
  var v116 = outputWindow.document;
  var v561 = "</head>\n" + '<body class="main">\n';
  var v500 = v561 + '<div class="title">';
  var v384 = v500 + title$$6;
  var v117 = v384 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v116.write(v117);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  introspect(JAM.policy.p41) {
    _openWindowAlign(title$$7, true);
  }
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p23) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  introspect(JAM.policy.p39) {
    outputWindow.focus();
  }
  var v118 = outputWindow.document;
  var v562 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v562 + "<head>\n";
  var v385 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p38) {
    v118.write(v119);
  }
  if (isBackground) {
    var v120 = outputWindow.document;
    var v704 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v700 = v704 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v696 = v700 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v692 = v696 + "div.info {font-weight: bold}\n";
    var v685 = v692 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v676 = v685 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v667 = v676 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v656 = v667 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v644 = v656 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v632 = v644 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v603 = v632 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v563 = v603 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v502 = v563 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v502 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    introspect(JAM.policy.p38) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v707 + "div.title {display: none}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v697 = v701 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v693 = v697 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v686 = v693 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v668 = v677 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v657 = v668 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v633 = v645 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v604 = v633 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v564 = v604 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v503 = v564 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v503 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    introspect(JAM.policy.p38) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v565 = "</head>\n" + '<body class="main">\n';
  var v504 = v565 + '<div class="title">';
  var v388 = v504 + title$$8;
  var v125 = v388 + " results</div>\n";
  introspect(JAM.policy.p38) {
    v124.write(v125);
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
    var v389 = dnaSequence$$1.search(/./)
  }
  var v126 = v389 != -1;
  if (v126) {
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
  var v127 = j$$5 < lengthOfColumn;
  for (;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn;
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
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
    var v390 = testArray[0]
  }
  var v130 = v390 != testString;
  if (v130) {
    introspect(JAM.policy.p22) {
      alert("Array object push method not supported. See browser compatibility page.");
    }
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p38) {
    var v391 = testString.search(re$$2)
  }
  var v131 = v391 == -1;
  if (v131) {
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
  var v132 = !caughtException;
  if (v132) {
    introspect(JAM.policy.p22) {
      alert("Exception handling not supported. See browser compatibility page.");
    }
  }
  testString = "123";
  introspect(JAM.policy.p40) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v133 = testString != "1X2X3X";
  if (v133) {
    introspect(JAM.policy.p22) {
      alert("Nested function in String replace method not supported. See browser compatibility page.");
    }
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p25) {
    var v392 = testNum.toFixed(3)
  }
  var v134 = v392 != 2489.824;
  if (v134) {
    introspect(JAM.policy.p22) {
      alert("Number toFixed() method not supported. See browser compatibility page.");
    }
    return false;
  }
  introspect(JAM.policy.p25) {
    var v393 = testNum.toPrecision(5)
  }
  var v135 = v393 != 2489.8;
  if (v135) {
    introspect(JAM.policy.p22) {
      alert("Number toPrecision() method not supported. See browser compatibility page.");
    }
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p38) {
    var v394 = theNumber$$1.search(/\d/)
  }
  var v136 = v394 == -1;
  if (v136) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number");
    }
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p38) {
    var v605 = emblFile.search(/ID/)
  }
  var v566 = v605 == -1;
  var v607 = !v566;
  if (v607) {
    introspect(JAM.policy.p38) {
      var v606 = emblFile.search(/AC/)
    }
    v566 = v606 == -1;
  }
  var v505 = v566;
  var v568 = !v505;
  if (v568) {
    introspect(JAM.policy.p38) {
      var v567 = emblFile.search(/DE/)
    }
    v505 = v567 == -1;
  }
  var v395 = v505;
  var v507 = !v395;
  if (v507) {
    introspect(JAM.policy.p38) {
      var v506 = emblFile.search(/SQ/)
    }
    v395 = v506 == -1;
  }
  var v137 = v395;
  if (v137) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p38) {
    var v396 = theNumber$$2.search(/\d/)
  }
  var v138 = v396 == -1;
  if (v138) {
    introspect(JAM.policy.p22) {
      alert("Please enter a number.");
    }
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v397 + ".";
    introspect(JAM.policy.p38) {
      alert(v139);
    }
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p38) {
    var v398 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v141 = v398 != -1;
  if (v141) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-DNA characters, which will be omitted.");
    }
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p38) {
    var v399 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v142 = v399 != -1;
  if (v142) {
    introspect(JAM.policy.p22) {
      alert("The sequence contains non-protein characters, which will be omitted.");
    }
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p38) {
    var v608 = genBankFile.search(/LOCUS/)
  }
  var v569 = v608 == -1;
  var v610 = !v569;
  if (v610) {
    introspect(JAM.policy.p38) {
      var v609 = genBankFile.search(/DEFINITION/)
    }
    v569 = v609 == -1;
  }
  var v508 = v569;
  var v571 = !v508;
  if (v571) {
    introspect(JAM.policy.p38) {
      var v570 = genBankFile.search(/ACCESSION/)
    }
    v508 = v570 == -1;
  }
  var v400 = v508;
  var v510 = !v400;
  if (v510) {
    introspect(JAM.policy.p38) {
      var v509 = genBankFile.search(/ORIGIN/)
    }
    v400 = v509 == -1;
  }
  var v143 = v400;
  if (v143) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p38) {
    var v611 = genBankFile$$1.search(/LOCUS/)
  }
  var v572 = v611 == -1;
  var v613 = !v572;
  if (v613) {
    introspect(JAM.policy.p38) {
      var v612 = genBankFile$$1.search(/DEFINITION/)
    }
    v572 = v612 == -1;
  }
  var v511 = v572;
  var v574 = !v511;
  if (v574) {
    introspect(JAM.policy.p38) {
      var v573 = genBankFile$$1.search(/ACCESSION/)
    }
    v511 = v573 == -1;
  }
  var v401 = v511;
  var v513 = !v401;
  if (v513) {
    introspect(JAM.policy.p38) {
      var v512 = genBankFile$$1.search(/ORIGIN/)
    }
    v401 = v512 == -1;
  }
  var v144 = v401;
  if (v144) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of a GenBank file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v402 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v145 = v402 == -1;
  if (v145) {
    introspect(JAM.policy.p22) {
      alert("The file has no defined features.");
    }
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p38) {
    var v614 = emblFile$$1.search(/ID/)
  }
  var v575 = v614 == -1;
  var v616 = !v575;
  if (v616) {
    introspect(JAM.policy.p38) {
      var v615 = emblFile$$1.search(/AC/)
    }
    v575 = v615 == -1;
  }
  var v514 = v575;
  var v577 = !v514;
  if (v577) {
    introspect(JAM.policy.p38) {
      var v576 = emblFile$$1.search(/DE/)
    }
    v514 = v576 == -1;
  }
  var v403 = v514;
  var v516 = !v403;
  if (v516) {
    introspect(JAM.policy.p38) {
      var v515 = emblFile$$1.search(/SQ/)
    }
    v403 = v515 == -1;
  }
  var v146 = v403;
  if (v146) {
    introspect(JAM.policy.p22) {
      alert("Please enter the contents of an EMBL file.");
    }
    return false;
  }
  introspect(JAM.policy.p38) {
    var v404 = emblFile$$1.search(/^FT/m)
  }
  var v147 = v404 == -1;
  if (v147) {
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    var v148 = i$$5 + 1;
    introspect(JAM.policy.p40) {
      lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    }
    var j$$6 = 1;
    var v405 = basePerLine / groupSize;
    var v152 = j$$6 <= v405;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v406 = k + i$$5;
        introspect(JAM.policy.p38) {
          var v150 = text$$10.charAt(v406)
        }
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v407 = basePerLine / groupSize;
      v152 = j$$6 <= v407;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    introspect(JAM.policy.p38) {
      v153.write(v154);
    }
    lineOfText = "";
    v155 = i$$5 < stopBase;
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
    var v408 = adjustment < 0;
    if (v408) {
      v408 = adjusted >= 0;
    }
    var v156 = v408;
    if (v156) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v409 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v409;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v410 = i$$6 + k$$1;
        var v157 = v410 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v411 = k$$1 + i$$6;
        introspect(JAM.policy.p38) {
          var v159 = text$$12.charAt(v411)
        }
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        introspect(JAM.policy.p40) {
          var v412 = adjustNumbering(i$$6, numberingAdjustment)
        }
        introspect(JAM.policy.p41) {
          var v162 = rightNum(v412, "", groupSize$$2, tabIn$$3)
        }
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v413 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v413;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      introspect(JAM.policy.p40) {
        var v578 = adjustNumbering(lineNum, numberingAdjustment)
      }
      introspect(JAM.policy.p41) {
        var v517 = rightNum(v578, "", 8, tabIn$$3)
      }
      var v414 = v517 + lineOfText$$1;
      var v167 = v414 + "\n";
      introspect(JAM.policy.p38) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        introspect(JAM.policy.p40) {
          var v579 = adjustNumbering(lineNum, numberingAdjustment)
        }
        introspect(JAM.policy.p41) {
          var v518 = rightNum(v579, "", 8, tabIn$$3)
        }
        introspect(JAM.policy.p38) {
          var v519 = complement(lineOfText$$1)
        }
        var v415 = v518 + v519;
        var v169 = v415 + "\n";
        introspect(JAM.policy.p38) {
          v168.write(v169);
        }
        var v170 = outputWindow.document;
        introspect(JAM.policy.p22) {
          v170.write("\n");
        }
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v520 = lineOfText$$1;
        introspect(JAM.policy.p40) {
          var v521 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v416 = v520 + v521;
        var v173 = v416 + "\n";
        introspect(JAM.policy.p38) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          introspect(JAM.policy.p38) {
            var v522 = complement(lineOfText$$1)
          }
          introspect(JAM.policy.p40) {
            var v523 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v417 = v522 + v523;
          var v175 = v417 + "\n";
          introspect(JAM.policy.p38) {
            v174.write(v175);
          }
          var v176 = outputWindow.document;
          introspect(JAM.policy.p22) {
            v176.write("\n");
          }
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          introspect(JAM.policy.p38) {
            v178.write(v179);
          }
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p38) {
            v180.write(v181);
          }
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            introspect(JAM.policy.p38) {
              var v418 = complement(lineOfText$$1)
            }
            var v183 = v418 + "\n";
            introspect(JAM.policy.p38) {
              v182.write(v183);
            }
            var v184 = outputWindow.document;
            introspect(JAM.policy.p22) {
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v419 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v419;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v420 = i$$7 + k$$2;
        var v190 = v420 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v421 = k$$2 + i$$7;
        introspect(JAM.policy.p38) {
          var v192 = text$$13.charAt(v421)
        }
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        introspect(JAM.policy.p41) {
          var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4)
        }
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v422 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v422;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      introspect(JAM.policy.p41) {
        var v524 = rightNum(lineNum$$1, "", 8, tabIn$$4)
      }
      var v423 = v524 + lineOfText$$2;
      var v200 = v423 + "\n";
      introspect(JAM.policy.p38) {
        v199.write(v200);
      }
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v202 = v424 + "\n";
        introspect(JAM.policy.p38) {
          v201.write(v202);
        }
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p38) {
            v203.write(v204);
          }
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p38) {
            v205.write(v206);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v580 = sequence$$13.length;
  var v525 = v580 <= firstIndexToMutate;
  var v581 = !v525;
  if (v581) {
    v525 = lastIndexToMutate < 0;
  }
  var v425 = v525;
  var v526 = !v425;
  if (v526) {
    v425 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v425;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    introspect(JAM.policy.p39) {
      var v426 = Math.random()
    }
    var v212 = v426 * maxNum;
    introspect(JAM.policy.p38) {
      randNum = Math.floor(v212);
    }
    var v427 = randNum < firstIndexToMutate;
    var v527 = !v427;
    if (v527) {
      v427 = randNum > lastIndexToMutate;
    }
    var v213 = v427;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p38) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      introspect(JAM.policy.p39) {
        var v428 = Math.random()
      }
      var v429 = components$$1.length;
      var v214 = v428 * v429;
      introspect(JAM.policy.p38) {
        componentsIndex = Math.round(v214);
      }
      var v430 = components$$1.length;
      var v215 = componentsIndex == v430;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v431 = components$$1[componentsIndex]
      }
      var v216 = v431 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p24) {
      var v432 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v433 = components$$1[componentsIndex]
    }
    var v217 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v218 = sequence$$13.substring(v434, v435)
    }
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  introspect(JAM.policy.p38) {
    var v221 = addReturns(sequence$$13)
  }
  introspect(JAM.policy.p38) {
    v220.write(v221);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    introspect(JAM.policy.p39) {
      var v436 = Math.random()
    }
    var v437 = components$$2.length;
    var v222 = v436 * v437;
    introspect(JAM.policy.p38) {
      tempNum$$1 = Math.floor(v222);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v225 = v438 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      introspect(JAM.policy.p38) {
        v223.write(v224);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  introspect(JAM.policy.p38) {
    v227.write(v228);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    introspect(JAM.policy.p24) {
      var v229 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v229.length;
    var v582 = sequence$$15.length;
    var v528 = v582 - lookAhead;
    var v529 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v439 = sequence$$15.substring(v528, v529)
    }
    var v230 = v439 + sequence$$15;
    introspect(JAM.policy.p24) {
      var v231 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v233.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v234 = outputWindow.document;
  var v583 = '<tr><td class="title" width="200px">' + "Site:";
  var v530 = v583 + '</td><td class="title">';
  var v440 = v530 + "Positions:";
  var v235 = v440 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v234.write(v235);
  }
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v251 = i$$9 < v441;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v442 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v236 = v442.match(/\/.+\//)
    }
    matchExp = v236 + "gi";
    matchPosition = 0;
    introspect(JAM.policy.p38) {
      matchExp = eval(matchExp);
    }
    introspect(JAM.policy.p26) {
      var v584 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v531 = v584.match(/\)\D*\d+/)
    }
    introspect(JAM.policy.p39) {
      var v443 = v531.toString()
    }
    introspect(JAM.policy.p41) {
      var v237 = v443.replace(/\)\D*/, "")
    }
    introspect(JAM.policy.p38) {
      cutDistance = parseFloat(v237);
    }
    introspect(JAM.policy.p38) {
      var v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if (v444) {
        v444 = matchPosition < upperLimit;
      }
      var v241 = v444;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v240 = v445 + 1;
        tempString$$1 = v239 + v240;
      }
      var v446 = matchExp.lastIndex;
      var v532 = RegExp.lastMatch;
      var v447 = v532.length;
      var v242 = v446 - v447;
      matchExp.lastIndex = v242 + 1;
      introspect(JAM.policy.p38) {
        v243 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p38) {
      var v448 = tempString$$1.search(/\d/)
    }
    var v244 = v448 != -1;
    if (v244) {
      introspect(JAM.policy.p41) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v248 = timesFound == 0;
    if (v248) {
      backGroundClass = "none";
    } else {
      var v247 = timesFound == 1;
      if (v247) {
        backGroundClass = "one";
      } else {
        var v246 = timesFound == 2;
        if (v246) {
          backGroundClass = "two";
        } else {
          var v245 = timesFound == 3;
          if (v245) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v658 = '<tr><td class="' + backGroundClass;
    var v646 = v658 + '">';
    introspect(JAM.policy.p26) {
      var v678 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p38) {
      var v669 = v678.match(/\([^\(]+\)/)
    }
    introspect(JAM.policy.p39) {
      var v659 = v669.toString()
    }
    introspect(JAM.policy.p41) {
      var v647 = v659.replace(/\(|\)/g, "")
    }
    var v634 = v646 + v647;
    var v617 = v634 + '</td><td class="';
    var v585 = v617 + backGroundClass;
    var v533 = v585 + '">';
    var v449 = v533 + tempString$$1;
    var v250 = v449 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v249.write(v250);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v450 = arrayOfItems.length;
    v251 = i$$9 < v450;
  }
  var v252 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v252.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v253.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v254 = outputWindow.document;
  var v635 = '<tr><td class="title">' + "Pattern:";
  var v618 = v635 + '</td><td class="title">';
  var v586 = v618 + "Times found:";
  var v534 = v586 + '</td><td class="title">';
  var v451 = v534 + "Percentage:";
  var v255 = v451 + "</td></tr>\n";
  introspect(JAM.policy.p38) {
    v254.write(v255);
  }
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v264 = i$$10 < v452;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v453 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v256 = v453.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v256 + "gi";
    introspect(JAM.policy.p38) {
      matchExp$$1 = eval(matchExp$$1);
    }
    introspect(JAM.policy.p38) {
      var v454 = sequence$$16.search(matchExp$$1)
    }
    var v258 = v454 != -1;
    if (v258) {
      introspect(JAM.policy.p38) {
        var v257 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v535 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v619 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v587 = v619.match(/\d+/)
    }
    introspect(JAM.policy.p38) {
      var v536 = parseFloat(v587)
    }
    var v455 = v535 - v536;
    var v261 = v455 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v456 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v588 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p38) {
        var v537 = v588.match(/\d+/)
      }
      introspect(JAM.policy.p38) {
        var v457 = parseFloat(v537)
      }
      var v260 = v456 - v457;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v679 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p38) {
      var v670 = v679.match(/\([^\(]+\)\b/)
    }
    introspect(JAM.policy.p39) {
      var v660 = v670.toString()
    }
    introspect(JAM.policy.p41) {
      var v648 = v660.replace(/\(|\)/g, "")
    }
    var v636 = "<tr><td>" + v648;
    var v620 = v636 + "</td><td>";
    var v589 = v620 + tempNumber;
    var v538 = v589 + "</td><td>";
    introspect(JAM.policy.p25) {
      var v539 = percentage.toFixed(2)
    }
    var v458 = v538 + v539;
    var v263 = v458 + "</td></tr>\n";
    introspect(JAM.policy.p38) {
      v262.write(v263);
    }
    i$$10 = i$$10 + 1;
    var v459 = arrayOfItems$$1.length;
    v264 = i$$10 < v459;
  }
  var v265 = outputWindow.document;
  introspect(JAM.policy.p22) {
    v265.write("</tbody></table>\n");
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
  var v460 = sequence$$17.length;
  var v272 = v460 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    introspect(JAM.policy.p39) {
      var v461 = Math.random()
    }
    var v266 = v461 * maxNum$$1;
    introspect(JAM.policy.p38) {
      randNum$$1 = Math.floor(v266);
    }
    introspect(JAM.policy.p38) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p24) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    introspect(JAM.policy.p40) {
      tempString2 = sequence$$17.substring(v267, v268);
    }
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v271 = v462 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      introspect(JAM.policy.p38) {
        v269.write(v270);
      }
      tempSeq = "";
    }
    var v463 = sequence$$17.length;
    v272 = v463 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  introspect(JAM.policy.p38) {
    v273.write(v274);
  }
  return true;
}
function proteinStats(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  introspect(JAM.policy.p39) {
    var v464 = testScript()
  }
  var v275 = v464 == false;
  if (v275) {
    return false;
  }
  var v649 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v637 = v649[0]
  }
  var v621 = v637.elements;
  introspect(JAM.policy.p26) {
    var v590 = v621[0]
  }
  introspect(JAM.policy.p38) {
    var v540 = checkFormElement(v590)
  }
  var v465 = v540 == false;
  var v542 = !v465;
  if (v542) {
    var v661 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v650 = v661[0]
    }
    var v638 = v650.elements;
    introspect(JAM.policy.p26) {
      var v622 = v638[0]
    }
    var v591 = v622.value;
    introspect(JAM.policy.p40) {
      var v541 = checkSequenceLength(v591, maxInput$$3)
    }
    v465 = v541 == false;
  }
  var v276 = v465;
  if (v276) {
    return false;
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  introspect(JAM.policy.p22) {
    openWindow("Protein Stats");
  }
  var v623 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v592 = v623[0]
  }
  var v543 = v592.elements;
  introspect(JAM.policy.p26) {
    var v466 = v543[0]
  }
  var v277 = v466.value;
  introspect(JAM.policy.p38) {
    var arrayOfFasta$$1 = getArrayOfFasta(v277)
  }
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v467;
  for (;v283;) {
    introspect(JAM.policy.p26) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      newProtein = getSequenceFromFasta(v278);
    }
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    introspect(JAM.policy.p38) {
      title$$9 = getTitleFromFasta(v279);
    }
    introspect(JAM.policy.p38) {
      newProtein = removeNonProteinAllowDegen(newProtein);
    }
    var v280 = outputWindow.document;
    introspect(JAM.policy.p40) {
      var v281 = getInfoFromTitleAndSequence(title$$9, newProtein)
    }
    introspect(JAM.policy.p38) {
      v280.write(v281);
    }
    introspect(JAM.policy.p40) {
      writeSequenceStats(newProtein, itemsToCheck);
    }
    var v282 = outputWindow.document;
    introspect(JAM.policy.p22) {
      v282.write("<br />\n<br />\n");
    }
    i$$11 = i$$11 + 1;
    var v468 = arrayOfFasta$$1.length;
    v283 = i$$11 < v468;
  }
  introspect(JAM.policy.p39) {
    closeWindow();

  JAM.stopProfile('compute');
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p22) {
  var v284 = document.getElementById("submitbtn")
}
v284.onclick = v3;
introspect(JAM.policy.p22) {
  var v285 = document.getElementById("clearbtn")
}
v285.onclick = v4

JAM.stopProfile('load');
