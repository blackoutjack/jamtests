function v4() {
  var v557 = document.forms;
  var v476 = v557[0];
  var v290 = v476.elements;
  var v5 = v290[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    groupProtein(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v291 = document.main_form;
  var v7 = v291.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p27);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v292 = arrayOfSequences.length;
  var v9 = v292 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v293 = arrayOfTitles.length;
  var v11 = i$$1 < v293;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v612 = arrayOfTitles[i$$1]
    }
    var v558 = JAM.call(v612.search, v612, [/\S/], JAM.policy.p28);
    var v477 = v558 == -1;
    var v560 = !v477;
    if (v560) {
      introspect(JAM.policy.p26) {
        var v613 = arrayOfSequences[i$$1]
      }
      var v559 = JAM.call(v613.search, v613, [/\S/], JAM.policy.p28);
      v477 = v559 == -1;
    }
    var v294 = v477;
    var v479 = !v294;
    if (v479) {
      introspect(JAM.policy.p26) {
        var v561 = arrayOfSequences[i$$1]
      }
      var v478 = v561.length;
      v294 = v478 != lengthOfAlign;
    }
    var v10 = v294;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v295 = arrayOfTitles.length;
    v11 = i$$1 < v295;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v649 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p28);
  var v614 = v649 == -1;
  var v651 = !v614;
  if (v651) {
    var v650 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p28);
    v614 = v650 == -1;
  }
  var v562 = v614;
  var v616 = !v562;
  if (v616) {
    var v615 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p28);
    v562 = v615 == -1;
  }
  var v480 = v562;
  var v564 = !v480;
  if (v564) {
    var v563 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p28);
    v480 = v563 == -1;
  }
  var v296 = v480;
  var v482 = !v296;
  if (v482) {
    var v481 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p28);
    v296 = v481 == -1;
  }
  var v12 = v296;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v483 = formElement.value;
  var v297 = JAM.call(v483.search, v483, [/\S/], JAM.policy.p28);
  var v13 = v297 == -1;
  if (v13) {
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
  var v298 = arrayOfPatterns.length;
  var v16 = z$$2 < v298;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v484 = arrayOfPatterns[z$$2]
    }
    var v299 = JAM.call(v484.search, v484, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p28);
    var v14 = v299 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v485 = arrayOfPatterns[z$$2]
    }
    var v300 = moreExpressionCheck(v485);
    var v15 = v300 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v301 = arrayOfPatterns.length;
    v16 = z$$2 < v301;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v302 = arrayOfPatterns.length;
  var v25 = j < v302;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v565 = arrayOfPatterns[j]
    }
    var v486 = JAM.call(v565.match, v565, [/\/.+\//], JAM.policy.p28);
    var v303 = v486 + "gi";
    if (JAM.isEval(eval)) {
      var v746 = eval("introspect(JAM.policy.pFull) { " + v303 + " }")
    } else {
      var v746 = JAM.call(eval, null, [v303])
    }
    introspect(JAM.policy.p13) {
      v19[v20] = v746;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v487 = arrayOfPatterns[j]
    }
    var v304 = JAM.call(v487.match, v487, [/=[a-zA-Z\*]/], JAM.policy.p28);
    var v747 = v304.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v747;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v305 = geneticCodeMatchResult[j]
    }
    var v748 = JAM.call(v305.replace, v305, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v23[v24] = v748;
    }
    j = j + 1;
    var v306 = arrayOfPatterns.length;
    v25 = j < v306;
  }
  var i$$2 = 0;
  var v488 = testSequence.length;
  var v307 = v488 - 3;
  var v32 = i$$2 <= v307;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p27);
    j = 0;
    var v308 = geneticCodeMatchExp.length;
    var v30 = j < v308;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v489 = geneticCodeMatchExp[j]
      }
      var v309 = JAM.call(codon.search, codon, [v489], JAM.policy.p39);
      var v29 = v309 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v310 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v310 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v311 = geneticCodeMatchExp.length;
      v30 = j < v311;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v490 = testSequence.length;
    var v312 = v490 - 3;
    v32 = i$$2 <= v312;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v313;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v491 = arrayOfPatterns$$1[z$$3]
    }
    var v314 = JAM.call(v491.search, v491, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p28);
    var v33 = v314 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v315;
  }
  var i$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v316;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns$$1[i$$3]
    }
    var v317 = "[" + v492;
    var v35 = v317 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v318;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v493 = arrayOfPatterns$$1[j$$1]
      }
      var v319 = JAM.call(v493.search, v493, [re], JAM.policy.p39);
      var v36 = v319 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v320 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v320;
    }
    i$$3 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v321;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v322 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v322;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns$$2[z$$4]
    }
    var v323 = JAM.call(v494.search, v494, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p28);
    var v39 = v323 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v495 = arrayOfPatterns$$2[z$$4]
    }
    var v324 = moreExpressionCheck(v495);
    var v40 = v324 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v325 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v325;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v566 = getSequenceFromFasta(text$$7);
  var v496 = JAM.call(v566.replace, v566, [/[^A-Za-z]/g, ""], JAM.policy.p27);
  var v326 = v496.length;
  var v43 = v326 > maxInput;
  if (v43) {
    var v327 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v327 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v328 = text$$8.length;
  var v45 = v328 > maxInput$$1;
  if (v45) {
    var v329 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v329 + " characters.";
    alert(v44);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p27);
  return dnaSequence;
}
function closeForm() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p23);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p23);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p23);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p23);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p23);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p27);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v330 = alignArray.length;
  var v52 = v330 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v331 = alignArray.length;
  var v54 = i$$4 < v331;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v497 = alignArray[i$$4]
    }
    var v332 = JAM.call(v497.search, v497, [/[^\s]+\s/], JAM.policy.p28);
    var v53 = v332 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v333 = alignArray.length;
    v54 = i$$4 < v333;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p27);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p27);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p27);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v334 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v57 = v334 != -1;
  if (v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    for (;v56;) {
      var v55 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p39);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p39);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v335 = sequence$$2.length;
  var v58 = "&gt;results for " + v335;
  var stringToReturn = v58 + " residue sequence ";
  var v336 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p28);
  var v60 = v336 != -1;
  if (v60) {
    var v337 = stringToReturn + '"';
    var v59 = v337 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v338 = stringToReturn + ' starting "';
  var v339 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p22);
  var v61 = v338 + v339;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v340 = sequenceOne.length;
  var v62 = "Search results for " + v340;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v341 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p28);
  var v64 = v341 != -1;
  if (v64) {
    var v342 = stringToReturn$$1 + '"';
    var v63 = v342 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v343 = stringToReturn$$1 + ' starting "';
  var v344 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p22);
  var v65 = v343 + v344;
  stringToReturn$$1 = v65 + '"\n';
  var v345 = stringToReturn$$1 + "and ";
  var v346 = sequenceTwo.length;
  var v66 = v345 + v346;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v347 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p28);
  var v68 = v347 != -1;
  if (v68) {
    var v348 = stringToReturn$$1 + '"';
    var v67 = v348 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v349 = stringToReturn$$1 + ' starting "';
  var v350 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p22);
  var v69 = v349 + v350;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v351 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v351;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v567 = arrayOfPatterns$$3[j$$2]
    }
    var v498 = JAM.call(v567.match, v567, [/\/.+\//], JAM.policy.p28);
    var v352 = v498 + "gi";
    if (JAM.isEval(eval)) {
      var v749 = eval("introspect(JAM.policy.pFull) { " + v352 + " }")
    } else {
      var v749 = JAM.call(eval, null, [v352])
    }
    introspect(JAM.policy.p13) {
      v72[v73] = v749;
    }
    j$$2 = j$$2 + 1;
    var v353 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v353;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v354 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v354;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v499 = arrayOfPatterns$$4[j$$3]
    }
    var v355 = JAM.call(v499.match, v499, [/=[a-zA-Z\*]/], JAM.policy.p28);
    var v750 = v355.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v750;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v356 = geneticCodeMatchResult$$1[j$$3]
    }
    var v751 = JAM.call(v356.replace, v356, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v78[v79] = v751;
    }
    j$$3 = j$$3 + 1;
    var v357 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v357;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v358 = sequence$$3.length;
  var v81 = "Results for " + v358;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p28);
  var v83 = v359 != -1;
  if (v83) {
    var v360 = stringToReturn$$2 + '"';
    var v82 = v360 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v361 = stringToReturn$$2 + ' starting "';
  var v362 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p22);
  var v84 = v361 + v362;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v500 = "Results for " + topology;
  var v363 = v500 + " ";
  var v364 = sequence$$4.length;
  var v86 = v363 + v364;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v365 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p28);
  var v88 = v365 != -1;
  if (v88) {
    var v366 = stringToReturn$$3 + '"';
    var v87 = v366 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v367 = stringToReturn$$3 + ' starting "';
  var v368 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p22);
  var v89 = v367 + v368;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v369 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v369;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p28);
  var v93 = v370 != -1;
  if (v93) {
    var v371 = stringToReturn$$4 + '"';
    var v92 = v371 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p22);
  var v94 = v372 + v373;
  stringToReturn$$4 = v94 + '"\n';
  var v374 = stringToReturn$$4 + "and ";
  var v375 = sequenceTwo$$1.length;
  var v95 = v374 + v375;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v376 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p28);
  var v97 = v376 != -1;
  if (v97) {
    var v377 = stringToReturn$$4 + '"';
    var v96 = v377 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v378 = stringToReturn$$4 + ' starting "';
  var v379 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p22);
  var v98 = v378 + v379;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    var v380 = Math.random();
    var v381 = components.length;
    var v100 = v380 * v381;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p28);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p39);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p23);
}
function getSequenceFromFasta(sequenceRecord) {
  var v382 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v102 = v382 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v383 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v104 = v383 != -1;
  if (v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
    fastaTitle = v103.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p27);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v724 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p28);
  var v717 = v724 != -1;
  var v726 = !v717;
  if (v726) {
    var v725 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p28);
    v717 = v725 != -1;
  }
  var v708 = v717;
  var v719 = !v708;
  if (v719) {
    var v718 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p28);
    v708 = v718 != -1;
  }
  var v699 = v708;
  var v710 = !v699;
  if (v710) {
    var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p28);
    v699 = v709 != -1;
  }
  var v688 = v699;
  var v701 = !v688;
  if (v701) {
    var v700 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p28);
    v688 = v700 != -1;
  }
  var v670 = v688;
  var v690 = !v670;
  if (v690) {
    var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p28);
    v670 = v689 != -1;
  }
  var v652 = v670;
  var v672 = !v652;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p28);
    v652 = v671 != -1;
  }
  var v617 = v652;
  var v654 = !v617;
  if (v654) {
    var v653 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p28);
    v617 = v653 != -1;
  }
  var v568 = v617;
  var v619 = !v568;
  if (v619) {
    var v618 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p28);
    v568 = v618 != -1;
  }
  var v501 = v568;
  var v570 = !v501;
  if (v570) {
    var v569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p28);
    v501 = v569 != -1;
  }
  var v384 = v501;
  var v503 = !v384;
  if (v503) {
    var v502 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p28);
    v384 = v502 != -1;
  }
  var v105 = v384;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p23);
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p23);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p23);
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p23);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v504 = v571 + "<head>\n";
  var v385 = v504 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p39);
  if (isColor) {
    var v112 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v735 = v739 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v735 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v727 = v731 + "div.info {font-weight: bold}\n";
    var v720 = v727 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v720 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v702 = v711 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v691 = v702 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v691 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v655 = v673 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v620 = v655 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v620 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v505 = v572 + "td.many {color: #000000}\n";
    var v386 = v505 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v386 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p39);
  } else {
    var v114 = outputWindow.document;
    var v743 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v740 = v743 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v736 = v740 + "div.title {display: none}\n";
    var v732 = v736 + "div.info {font-weight: bold}\n";
    var v728 = v732 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v721 = v728 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v703 = v712 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v692 = v703 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v692 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v674 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v621 = v656 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v621 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v506 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v387 = v506 + "img {display: none}\n";
    var v115 = v387 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p39);
  }
  var v116 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v507 = v574 + '<div class="title">';
  var v388 = v507 + title$$6;
  var v117 = v388 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v508 = v575 + "<head>\n";
  var v389 = v508 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p39);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v741 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v737 = v741 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v737 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v722 = v729 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v713 = v722 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v704 = v713 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v693 = v704 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v675 = v693 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v657 = v675 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v622 = v657 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v622 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v509 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v390 = v509 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v390 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p39);
  } else {
    var v122 = outputWindow.document;
    var v745 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v745 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v742 = v744 + "div.title {display: none}\n";
    var v738 = v742 + "div.info {font-weight: bold}\n";
    var v734 = v738 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v730 = v734 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v723 = v730 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v714 = v723 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v705 = v714 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v694 = v705 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v676 = v694 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v658 = v676 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v623 = v658 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v623 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v510 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v391 = v510 + "img {display: none}\n";
    var v123 = v391 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p39);
  }
  var v124 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v511 = v578 + '<div class="title">';
  var v392 = v511 + title$$8;
  var v125 = v392 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p39);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p27);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p27);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p27);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p27);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p27);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p27);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v393 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p28);
  var v126 = v393 != -1;
  if (v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p28);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p23);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
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
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p39);
  var v394 = testArray[0];
  var v130 = v394 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v395 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p39);
  var v131 = v395 == -1;
  if (v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    if (JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }");
    } else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."]);
    }
  } catch (e$$4) {
    caughtException = true;
  }
  var v132 = !caughtException;
  if (v132) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p27);
  var v133 = testString != "1X2X3X";
  if (v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v396 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p24);
  var v134 = v396 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v397 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p24);
  var v135 = v397 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v398 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p28);
  var v136 = v398 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v624 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p28);
  var v579 = v624 == -1;
  var v626 = !v579;
  if (v626) {
    var v625 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p28);
    v579 = v625 == -1;
  }
  var v512 = v579;
  var v581 = !v512;
  if (v581) {
    var v580 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p28);
    v512 = v580 == -1;
  }
  var v399 = v512;
  var v514 = !v399;
  if (v514) {
    var v513 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p28);
    v399 = v513 == -1;
  }
  var v137 = v399;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v400 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p28);
  var v138 = v400 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v401 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v401 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v402 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p28);
  var v141 = v402 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v403 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p28);
  var v142 = v403 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v627 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p28);
  var v582 = v627 == -1;
  var v629 = !v582;
  if (v629) {
    var v628 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p28);
    v582 = v628 == -1;
  }
  var v515 = v582;
  var v584 = !v515;
  if (v584) {
    var v583 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p28);
    v515 = v583 == -1;
  }
  var v404 = v515;
  var v517 = !v404;
  if (v517) {
    var v516 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p28);
    v404 = v516 == -1;
  }
  var v143 = v404;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v630 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p28);
  var v585 = v630 == -1;
  var v632 = !v585;
  if (v632) {
    var v631 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p28);
    v585 = v631 == -1;
  }
  var v518 = v585;
  var v587 = !v518;
  if (v587) {
    var v586 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p28);
    v518 = v586 == -1;
  }
  var v405 = v518;
  var v520 = !v405;
  if (v520) {
    var v519 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p28);
    v405 = v519 == -1;
  }
  var v144 = v405;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v406 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p28);
  var v145 = v406 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v633 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p28);
  var v588 = v633 == -1;
  var v635 = !v588;
  if (v635) {
    var v634 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p28);
    v588 = v634 == -1;
  }
  var v521 = v588;
  var v590 = !v521;
  if (v590) {
    var v589 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p28);
    v521 = v589 == -1;
  }
  var v407 = v521;
  var v523 = !v407;
  if (v523) {
    var v522 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p28);
    v407 = v522 == -1;
  }
  var v146 = v407;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v408 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p28);
  var v147 = v408 == -1;
  if (v147) {
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v409 = basePerLine / groupSize;
    var v152 = j$$6 <= v409;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v410 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v410], JAM.policy.p39);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v411 = basePerLine / groupSize;
      v152 = j$$6 <= v411;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p39);
    lineOfText = "";
    v155 = i$$5 < stopBase;
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
    var v412 = adjustment < 0;
    if (v412) {
      v412 = adjusted >= 0;
    }
    var v156 = v412;
    if (v156) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v413 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v413;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v414 = i$$6 + k$$1;
        var v157 = v414 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v415 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v415], JAM.policy.p39);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v416 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v416, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v417 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v417;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v591 = adjustNumbering(lineNum, numberingAdjustment);
      var v524 = rightNum(v591, "", 8, tabIn$$3);
      var v418 = v524 + lineOfText$$1;
      var v167 = v418 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p39);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v592 = adjustNumbering(lineNum, numberingAdjustment);
        var v525 = rightNum(v592, "", 8, tabIn$$3);
        var v526 = complement(lineOfText$$1);
        var v419 = v525 + v526;
        var v169 = v419 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p39);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p23);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v527 = lineOfText$$1;
        var v528 = adjustNumbering(i$$6, numberingAdjustment);
        var v420 = v527 + v528;
        var v173 = v420 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p39);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v529 = complement(lineOfText$$1);
          var v530 = adjustNumbering(i$$6, numberingAdjustment);
          var v421 = v529 + v530;
          var v175 = v421 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p39);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p23);
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p39);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p39);
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v422 = complement(lineOfText$$1);
            var v183 = v422 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p39);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p23);
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
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v423 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v423;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v424 = i$$7 + k$$2;
        var v190 = v424 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v425 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v425], JAM.policy.p39);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v426 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v426;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v531 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v427 = v531 + lineOfText$$2;
      var v200 = v427 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p39);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v428 = lineOfText$$2 + i$$7;
        var v202 = v428 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p39);
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p39);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p39);
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
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v593 = sequence$$13.length;
  var v532 = v593 <= firstIndexToMutate;
  var v594 = !v532;
  if (v594) {
    v532 = lastIndexToMutate < 0;
  }
  var v429 = v532;
  var v533 = !v429;
  if (v533) {
    v429 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v429;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v430 = Math.random();
    var v212 = v430 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p28);
    var v431 = randNum < firstIndexToMutate;
    var v534 = !v431;
    if (v534) {
      v431 = randNum > lastIndexToMutate;
    }
    var v213 = v431;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p28);
    needNewChar = true;
    for (;needNewChar;) {
      var v432 = Math.random();
      var v433 = components$$1.length;
      var v214 = v432 * v433;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p28);
      var v434 = components$$1.length;
      var v215 = componentsIndex == v434;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v435 = components$$1[componentsIndex]
      }
      var v216 = v435 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v436 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p22);
    introspect(JAM.policy.p26) {
      var v437 = components$$1[componentsIndex]
    }
    var v217 = v436 + v437;
    var v438 = randNum + 1;
    var v439 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v438, v439], JAM.policy.p40);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221], JAM.policy.p39);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v440 = Math.random();
    var v441 = components$$2.length;
    var v222 = v440 * v441;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p28);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v442 = sequence$$14.length;
    var v225 = v442 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p39);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p39);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22);
    shiftValue = v229.length;
    var v595 = sequence$$15.length;
    var v535 = v595 - lookAhead;
    var v536 = sequence$$15.length;
    var v443 = JAM.call(sequence$$15.substring, sequence$$15, [v535, v536], JAM.policy.p40);
    var v230 = v443 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p22);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v234 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v537 = v596 + '</td><td class="title">';
  var v444 = v537 + "Positions:";
  var v235 = v444 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p39);
  var i$$9 = 0;
  var v445 = arrayOfItems.length;
  var v251 = i$$9 < v445;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v446 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v446.match, v446, [/\/.+\//], JAM.policy.p28);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v597 = arrayOfItems[i$$9]
    }
    var v538 = JAM.call(v597.match, v597, [/\)\D*\d+/], JAM.policy.p28);
    var v447 = v538.toString();
    var v237 = JAM.call(v447.replace, v447, [/\)\D*/, ""], JAM.policy.p27);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v448 = matchPosition >= lowerLimit;
      if (v448) {
        v448 = matchPosition < upperLimit;
      }
      var v241 = v448;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v449 = matchPosition - shiftValue;
        var v240 = v449 + 1;
        tempString$$1 = v239 + v240;
      }
      var v450 = matchExp.lastIndex;
      var v539 = RegExp.lastMatch;
      var v451 = v539.length;
      var v242 = v450 - v451;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    }
    var v452 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p28);
    var v244 = v452 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p27);
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
    var v695 = '<tr><td class="' + backGroundClass;
    var v677 = v695 + '">';
    introspect(JAM.policy.p26) {
      var v715 = arrayOfItems[i$$9]
    }
    var v706 = JAM.call(v715.match, v715, [/\([^\(]+\)/], JAM.policy.p28);
    var v696 = v706.toString();
    var v678 = JAM.call(v696.replace, v696, [/\(|\)/g, ""], JAM.policy.p27);
    var v659 = v677 + v678;
    var v636 = v659 + '</td><td class="';
    var v598 = v636 + backGroundClass;
    var v540 = v598 + '">';
    var v453 = v540 + tempString$$1;
    var v250 = v453 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p39);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v454 = arrayOfItems.length;
    v251 = i$$9 < v454;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p23);
  var v254 = outputWindow.document;
  var v660 = '<tr><td class="title">' + "Pattern:";
  var v637 = v660 + '</td><td class="title">';
  var v599 = v637 + "Times found:";
  var v541 = v599 + '</td><td class="title">';
  var v455 = v541 + "Percentage:";
  var v255 = v455 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p39);
  var i$$10 = 0;
  var v456 = arrayOfItems$$1.length;
  var v264 = i$$10 < v456;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v457 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v457.match, v457, [/\/[^\/]+\//], JAM.policy.p28);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v458 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p39);
    var v258 = v458 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p39);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v542 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v638 = arrayOfItems$$1[i$$10]
    }
    var v600 = JAM.call(v638.match, v638, [/\d+/], JAM.policy.p28);
    var v543 = parseFloat(v600);
    var v459 = v542 - v543;
    var v261 = v459 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v460 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v601 = arrayOfItems$$1[i$$10]
      }
      var v544 = JAM.call(v601.match, v601, [/\d+/], JAM.policy.p28);
      var v461 = parseFloat(v544);
      var v260 = v460 - v461;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v716 = arrayOfItems$$1[i$$10]
    }
    var v707 = JAM.call(v716.match, v716, [/\([^\(]+\)\b/], JAM.policy.p28);
    var v697 = v707.toString();
    var v679 = JAM.call(v697.replace, v697, [/\(|\)/g, ""], JAM.policy.p27);
    var v661 = "<tr><td>" + v679;
    var v639 = v661 + "</td><td>";
    var v602 = v639 + tempNumber;
    var v545 = v602 + "</td><td>";
    var v546 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p24);
    var v462 = v545 + v546;
    var v263 = v462 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p39);
    i$$10 = i$$10 + 1;
    var v463 = arrayOfItems$$1.length;
    v264 = i$$10 < v463;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p23);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v464 = sequence$$17.length;
  var v272 = v464 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v465 = Math.random();
    var v266 = v465 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p28);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p28);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p22);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p27);
    sequence$$17 = tempString1 + tempString2;
    var v466 = tempSeq.length;
    var v271 = v466 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p39);
      tempSeq = "";
    }
    var v467 = sequence$$17.length;
    v272 = v467 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p39);
  return true;
}
function groupProtein(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v468 = testScript();
  var v275 = v468 == false;
  if (v275) {
    return false;
  }
  var v680 = theDocument.forms;
  var v662 = v680[0];
  var v640 = v662.elements;
  var v603 = v640[0];
  var v547 = checkFormElement(v603);
  var v469 = v547 == false;
  var v549 = !v469;
  if (v549) {
    var v698 = theDocument.forms;
    var v681 = v698[0];
    var v663 = v681.elements;
    var v641 = v663[0];
    var v604 = v641.value;
    var v548 = checkSequenceLength(v604, maxInput$$3);
    v469 = v548 == false;
  }
  var v276 = v469;
  if (v276) {
    return false;
  }
  openWindow("Group Protein");
  openPre();
  var v642 = theDocument.forms;
  var v605 = v642[0];
  var v550 = v605.elements;
  var v470 = v550[0];
  var v277 = v470.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v471 = arrayOfFasta$$1.length;
  var v287 = i$$11 < v471;
  for (;v287;) {
    introspect(JAM.policy.p26) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v278);
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v279);
    newProtein = removeNonProtein(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v280.write, v280, [v281], JAM.policy.p39);
    var v682 = theDocument.forms;
    var v664 = v682[0];
    var v643 = v664.elements;
    var v606 = v643[4];
    var v551 = v606.options;
    var v683 = theDocument.forms;
    var v665 = v683[0];
    var v644 = v665.elements;
    var v607 = v644[4];
    var v552 = v607.selectedIndex;
    introspect(JAM.policy.p26) {
      var v472 = v551[v552]
    }
    var v282 = v472.value;
    var v684 = theDocument.forms;
    var v666 = v684[0];
    var v645 = v666.elements;
    var v608 = v645[5];
    var v553 = v608.options;
    var v685 = theDocument.forms;
    var v667 = v685[0];
    var v646 = v667.elements;
    var v609 = v646[5];
    var v554 = v609.selectedIndex;
    introspect(JAM.policy.p26) {
      var v473 = v553[v554]
    }
    var v283 = v473.value;
    var v284 = newProtein.length;
    var v686 = theDocument.forms;
    var v668 = v686[0];
    var v647 = v668.elements;
    var v610 = v647[6];
    var v555 = v610.options;
    var v687 = theDocument.forms;
    var v669 = v687[0];
    var v648 = v669.elements;
    var v611 = v648[6];
    var v556 = v611.selectedIndex;
    introspect(JAM.policy.p26) {
      var v474 = v555[v556]
    }
    var v285 = v474.value;
    writeGroupNumProtein(newProtein, "", v282, v283, 0, v284, v285);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, ["\n\n"], JAM.policy.p23);
    i$$11 = i$$11 + 1;
    var v475 = arrayOfFasta$$1.length;
    v287 = i$$11 < v475;
  }
  closePre();
  closeWindow();
  return true;
}
JAM.set(document, "onload", v2);
var v288 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p23);
JAM.set(v288, "onclick", v3);
var v289 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p23);
JAM.set(v289, "onclick", v4)
