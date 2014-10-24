
JAM.startProfile('load');
function v4() {
  var v728 = document.forms;
  var v614 = v728[0];
  var v363 = v614.elements;
  var v5 = v363[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignProp(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v364 = document.main_form;
  var v7 = v364.main_submit;
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
  var v365 = arrayOfSequences.length;
  var v9 = v365 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v366 = arrayOfTitles.length;
  var v11 = i$$1 < v366;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v800 = arrayOfTitles[i$$1]
    }
    var v729 = JAM.call(v800.search, v800, [/\S/], JAM.policy.p28);
    var v615 = v729 == -1;
    var v731 = !v615;
    if (v731) {
      introspect(JAM.policy.p26) {
        var v801 = arrayOfSequences[i$$1]
      }
      var v730 = JAM.call(v801.search, v801, [/\S/], JAM.policy.p28);
      v615 = v730 == -1;
    }
    var v367 = v615;
    var v617 = !v367;
    if (v617) {
      introspect(JAM.policy.p26) {
        var v732 = arrayOfSequences[i$$1]
      }
      var v616 = v732.length;
      v367 = v616 != lengthOfAlign;
    }
    var v10 = v367;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v368 = arrayOfTitles.length;
    v11 = i$$1 < v368;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v843 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p28);
  var v802 = v843 == -1;
  var v845 = !v802;
  if (v845) {
    var v844 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p28);
    v802 = v844 == -1;
  }
  var v733 = v802;
  var v804 = !v733;
  if (v804) {
    var v803 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p28);
    v733 = v803 == -1;
  }
  var v618 = v733;
  var v735 = !v618;
  if (v735) {
    var v734 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p28);
    v618 = v734 == -1;
  }
  var v369 = v618;
  var v620 = !v369;
  if (v620) {
    var v619 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p28);
    v369 = v619 == -1;
  }
  var v12 = v369;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v621 = formElement.value;
  var v370 = JAM.call(v621.search, v621, [/\S/], JAM.policy.p28);
  var v13 = v370 == -1;
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
  var v371 = arrayOfPatterns.length;
  var v16 = z$$2 < v371;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v622 = arrayOfPatterns[z$$2]
    }
    var v372 = JAM.call(v622.search, v622, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p28);
    var v14 = v372 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v623 = arrayOfPatterns[z$$2]
    }
    var v373 = moreExpressionCheck(v623);
    var v15 = v373 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v374 = arrayOfPatterns.length;
    v16 = z$$2 < v374;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v375 = arrayOfPatterns.length;
  var v25 = j < v375;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v736 = arrayOfPatterns[j]
    }
    var v624 = JAM.call(v736.match, v736, [/\/.+\//], JAM.policy.p28);
    var v376 = v624 + "gi";
    if (JAM.isEval(eval)) {
      var v946 = eval("introspect(JAM.policy.pFull) { " + v376 + " }")
    } else {
      var v946 = JAM.call(eval, null, [v376])
    }
    introspect(JAM.policy.p13) {
      v19[v20] = v946;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v625 = arrayOfPatterns[j]
    }
    var v377 = JAM.call(v625.match, v625, [/=[a-zA-Z\*]/], JAM.policy.p28);
    var v947 = v377.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v947;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v378 = geneticCodeMatchResult[j]
    }
    var v948 = JAM.call(v378.replace, v378, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v23[v24] = v948;
    }
    j = j + 1;
    var v379 = arrayOfPatterns.length;
    v25 = j < v379;
  }
  var i$$2 = 0;
  var v626 = testSequence.length;
  var v380 = v626 - 3;
  var v32 = i$$2 <= v380;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p27);
    j = 0;
    var v381 = geneticCodeMatchExp.length;
    var v30 = j < v381;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v627 = geneticCodeMatchExp[j]
      }
      var v382 = JAM.call(codon.search, codon, [v627], JAM.policy.p39);
      var v29 = v382 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v383 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v383 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v384 = geneticCodeMatchExp.length;
      v30 = j < v384;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v628 = testSequence.length;
    var v385 = v628 - 3;
    v32 = i$$2 <= v385;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v386 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v386;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v629 = arrayOfPatterns$$1[z$$3]
    }
    var v387 = JAM.call(v629.search, v629, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p28);
    var v33 = v387 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v388 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v388;
  }
  var i$$3 = 0;
  var v389 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v389;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v630 = arrayOfPatterns$$1[i$$3]
    }
    var v390 = "[" + v630;
    var v35 = v390 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v391 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v391;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v631 = arrayOfPatterns$$1[j$$1]
      }
      var v392 = JAM.call(v631.search, v631, [re], JAM.policy.p39);
      var v36 = v392 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v393 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v393;
    }
    i$$3 = i$$3 + 1;
    var v394 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v394;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v395 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v395;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v632 = arrayOfPatterns$$2[z$$4]
    }
    var v396 = JAM.call(v632.search, v632, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p28);
    var v39 = v396 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v633 = arrayOfPatterns$$2[z$$4]
    }
    var v397 = moreExpressionCheck(v633);
    var v40 = v397 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v398 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v398;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v737 = getSequenceFromFasta(text$$7);
  var v634 = JAM.call(v737.replace, v737, [/[^A-Za-z]/g, ""], JAM.policy.p27);
  var v399 = v634.length;
  var v43 = v399 > maxInput;
  if (v43) {
    var v400 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v400 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v401 = text$$8.length;
  var v45 = v401 > maxInput$$1;
  if (v45) {
    var v402 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v402 + " characters.";
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
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p24);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p24);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p24);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p24);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p24);
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
  var v403 = alignArray.length;
  var v52 = v403 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v404 = alignArray.length;
  var v54 = i$$4 < v404;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v635 = alignArray[i$$4]
    }
    var v405 = JAM.call(v635.search, v635, [/[^\s]+\s/], JAM.policy.p28);
    var v53 = v405 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v406 = alignArray.length;
    v54 = i$$4 < v406;
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
  var v407 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v57 = v407 != -1;
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
  var v408 = sequence$$2.length;
  var v58 = "&gt;results for " + v408;
  var stringToReturn = v58 + " residue sequence ";
  var v409 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p28);
  var v60 = v409 != -1;
  if (v60) {
    var v410 = stringToReturn + '"';
    var v59 = v410 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v411 = stringToReturn + ' starting "';
  var v412 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p23);
  var v61 = v411 + v412;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v413 = sequenceOne.length;
  var v62 = "Search results for " + v413;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v414 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p28);
  var v64 = v414 != -1;
  if (v64) {
    var v415 = stringToReturn$$1 + '"';
    var v63 = v415 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v416 = stringToReturn$$1 + ' starting "';
  var v417 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p23);
  var v65 = v416 + v417;
  stringToReturn$$1 = v65 + '"\n';
  var v418 = stringToReturn$$1 + "and ";
  var v419 = sequenceTwo.length;
  var v66 = v418 + v419;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v420 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p28);
  var v68 = v420 != -1;
  if (v68) {
    var v421 = stringToReturn$$1 + '"';
    var v67 = v421 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v422 = stringToReturn$$1 + ' starting "';
  var v423 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p23);
  var v69 = v422 + v423;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v424 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v424;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v738 = arrayOfPatterns$$3[j$$2]
    }
    var v636 = JAM.call(v738.match, v738, [/\/.+\//], JAM.policy.p28);
    var v425 = v636 + "gi";
    if (JAM.isEval(eval)) {
      var v949 = eval("introspect(JAM.policy.pFull) { " + v425 + " }")
    } else {
      var v949 = JAM.call(eval, null, [v425])
    }
    introspect(JAM.policy.p13) {
      v72[v73] = v949;
    }
    j$$2 = j$$2 + 1;
    var v426 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v426;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v427 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v427;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v637 = arrayOfPatterns$$4[j$$3]
    }
    var v428 = JAM.call(v637.match, v637, [/=[a-zA-Z\*]/], JAM.policy.p28);
    var v950 = v428.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v950;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v429 = geneticCodeMatchResult$$1[j$$3]
    }
    var v951 = JAM.call(v429.replace, v429, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v78[v79] = v951;
    }
    j$$3 = j$$3 + 1;
    var v430 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v430;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v431 = sequence$$3.length;
  var v81 = "Results for " + v431;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v432 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p28);
  var v83 = v432 != -1;
  if (v83) {
    var v433 = stringToReturn$$2 + '"';
    var v82 = v433 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v434 = stringToReturn$$2 + ' starting "';
  var v435 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p23);
  var v84 = v434 + v435;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v638 = "Results for " + topology;
  var v436 = v638 + " ";
  var v437 = sequence$$4.length;
  var v86 = v436 + v437;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v438 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p28);
  var v88 = v438 != -1;
  if (v88) {
    var v439 = stringToReturn$$3 + '"';
    var v87 = v439 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v440 = stringToReturn$$3 + ' starting "';
  var v441 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p23);
  var v89 = v440 + v441;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v442 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v442;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v443 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p28);
  var v93 = v443 != -1;
  if (v93) {
    var v444 = stringToReturn$$4 + '"';
    var v92 = v444 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v445 = stringToReturn$$4 + ' starting "';
  var v446 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p23);
  var v94 = v445 + v446;
  stringToReturn$$4 = v94 + '"\n';
  var v447 = stringToReturn$$4 + "and ";
  var v448 = sequenceTwo$$1.length;
  var v95 = v447 + v448;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v449 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p28);
  var v97 = v449 != -1;
  if (v97) {
    var v450 = stringToReturn$$4 + '"';
    var v96 = v450 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v451 = stringToReturn$$4 + ' starting "';
  var v452 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p23);
  var v98 = v451 + v452;
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
    var v453 = Math.random();
    var v454 = components.length;
    var v100 = v453 * v454;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p28);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p39);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p24);
}
function getSequenceFromFasta(sequenceRecord) {
  var v455 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v102 = v455 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v456 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
  var v104 = v456 != -1;
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
  var v924 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p28);
  var v917 = v924 != -1;
  var v926 = !v917;
  if (v926) {
    var v925 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p28);
    v917 = v925 != -1;
  }
  var v908 = v917;
  var v919 = !v908;
  if (v919) {
    var v918 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p28);
    v908 = v918 != -1;
  }
  var v899 = v908;
  var v910 = !v899;
  if (v910) {
    var v909 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p28);
    v899 = v909 != -1;
  }
  var v886 = v899;
  var v901 = !v886;
  if (v901) {
    var v900 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p28);
    v886 = v900 != -1;
  }
  var v866 = v886;
  var v888 = !v866;
  if (v888) {
    var v887 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p28);
    v866 = v887 != -1;
  }
  var v846 = v866;
  var v868 = !v846;
  if (v868) {
    var v867 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p28);
    v846 = v867 != -1;
  }
  var v805 = v846;
  var v848 = !v805;
  if (v848) {
    var v847 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p28);
    v805 = v847 != -1;
  }
  var v739 = v805;
  var v807 = !v739;
  if (v807) {
    var v806 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p28);
    v739 = v806 != -1;
  }
  var v639 = v739;
  var v741 = !v639;
  if (v741) {
    var v740 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p28);
    v639 = v740 != -1;
  }
  var v457 = v639;
  var v641 = !v457;
  if (v641) {
    var v640 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p28);
    v457 = v640 != -1;
  }
  var v105 = v457;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p24);
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p24);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p24);
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p24);
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
  var v742 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v642 = v742 + "<head>\n";
  var v458 = v642 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v458 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p39);
  if (isColor) {
    var v112 = outputWindow.document;
    var v939 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v935 = v939 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v931 = v935 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v927 = v931 + "div.info {font-weight: bold}\n";
    var v920 = v927 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v911 = v920 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v902 = v911 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v889 = v902 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v869 = v889 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v849 = v869 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v808 = v849 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v808 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v643 = v743 + "td.many {color: #000000}\n";
    var v459 = v643 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v459 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p39);
  } else {
    var v114 = outputWindow.document;
    var v943 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v940 = v943 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v936 = v940 + "div.title {display: none}\n";
    var v932 = v936 + "div.info {font-weight: bold}\n";
    var v928 = v932 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v921 = v928 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v912 = v921 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v903 = v912 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v890 = v903 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v870 = v890 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v850 = v870 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v809 = v850 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v744 = v809 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v744 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v460 = v644 + "img {display: none}\n";
    var v115 = v460 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p39);
  }
  var v116 = outputWindow.document;
  var v745 = "</head>\n" + '<body class="main">\n';
  var v645 = v745 + '<div class="title">';
  var v461 = v645 + title$$6;
  var v117 = v461 + " results</div>\n";
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
  var v746 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v646 = v746 + "<head>\n";
  var v462 = v646 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v462 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p39);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v941 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v937 = v941 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v933 = v937 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v929 = v933 + "div.info {font-weight: bold}\n";
    var v922 = v929 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v913 = v922 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v904 = v913 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v891 = v904 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v871 = v891 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v851 = v871 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v810 = v851 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v747 = v810 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v647 = v747 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v463 = v647 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v463 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p39);
  } else {
    var v122 = outputWindow.document;
    var v945 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v944 = v945 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v942 = v944 + "div.title {display: none}\n";
    var v938 = v942 + "div.info {font-weight: bold}\n";
    var v934 = v938 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v930 = v934 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v923 = v930 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v914 = v923 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v905 = v914 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v892 = v905 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v872 = v892 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v852 = v872 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v811 = v852 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v748 = v811 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v648 = v748 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v464 = v648 + "img {display: none}\n";
    var v123 = v464 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p39);
  }
  var v124 = outputWindow.document;
  var v749 = "</head>\n" + '<body class="main">\n';
  var v649 = v749 + '<div class="title">';
  var v465 = v649 + title$$8;
  var v125 = v465 + " results</div>\n";
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
  var v466 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p28);
  var v126 = v466 != -1;
  if (v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p28);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p24);
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
  var v467 = testArray[0];
  var v130 = v467 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v468 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p39);
  var v131 = v468 == -1;
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
  var v469 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p22);
  var v134 = v469 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v470 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p22);
  var v135 = v470 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v471 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p28);
  var v136 = v471 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v812 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p28);
  var v750 = v812 == -1;
  var v814 = !v750;
  if (v814) {
    var v813 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p28);
    v750 = v813 == -1;
  }
  var v650 = v750;
  var v752 = !v650;
  if (v752) {
    var v751 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p28);
    v650 = v751 == -1;
  }
  var v472 = v650;
  var v652 = !v472;
  if (v652) {
    var v651 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p28);
    v472 = v651 == -1;
  }
  var v137 = v472;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v473 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p28);
  var v138 = v473 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v474 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v474 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v475 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p28);
  var v141 = v475 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v476 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p28);
  var v142 = v476 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v815 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p28);
  var v753 = v815 == -1;
  var v817 = !v753;
  if (v817) {
    var v816 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p28);
    v753 = v816 == -1;
  }
  var v653 = v753;
  var v755 = !v653;
  if (v755) {
    var v754 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p28);
    v653 = v754 == -1;
  }
  var v477 = v653;
  var v655 = !v477;
  if (v655) {
    var v654 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p28);
    v477 = v654 == -1;
  }
  var v143 = v477;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v818 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p28);
  var v756 = v818 == -1;
  var v820 = !v756;
  if (v820) {
    var v819 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p28);
    v756 = v819 == -1;
  }
  var v656 = v756;
  var v758 = !v656;
  if (v758) {
    var v757 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p28);
    v656 = v757 == -1;
  }
  var v478 = v656;
  var v658 = !v478;
  if (v658) {
    var v657 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p28);
    v478 = v657 == -1;
  }
  var v144 = v478;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v479 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p28);
  var v145 = v479 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v821 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p28);
  var v759 = v821 == -1;
  var v823 = !v759;
  if (v823) {
    var v822 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p28);
    v759 = v822 == -1;
  }
  var v659 = v759;
  var v761 = !v659;
  if (v761) {
    var v760 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p28);
    v659 = v760 == -1;
  }
  var v480 = v659;
  var v661 = !v480;
  if (v661) {
    var v660 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p28);
    v480 = v660 == -1;
  }
  var v146 = v480;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v481 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p28);
  var v147 = v481 == -1;
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
    var v482 = basePerLine / groupSize;
    var v152 = j$$6 <= v482;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v483 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v483], JAM.policy.p39);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v484 = basePerLine / groupSize;
      v152 = j$$6 <= v484;
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
    var v485 = adjustment < 0;
    if (v485) {
      v485 = adjusted >= 0;
    }
    var v156 = v485;
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
    var v486 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v486;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v487 = i$$6 + k$$1;
        var v157 = v487 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v488 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v488], JAM.policy.p39);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v489 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v489, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v490 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v490;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v762 = adjustNumbering(lineNum, numberingAdjustment);
      var v662 = rightNum(v762, "", 8, tabIn$$3);
      var v491 = v662 + lineOfText$$1;
      var v167 = v491 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p39);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v763 = adjustNumbering(lineNum, numberingAdjustment);
        var v663 = rightNum(v763, "", 8, tabIn$$3);
        var v664 = complement(lineOfText$$1);
        var v492 = v663 + v664;
        var v169 = v492 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p39);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p24);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v665 = lineOfText$$1;
        var v666 = adjustNumbering(i$$6, numberingAdjustment);
        var v493 = v665 + v666;
        var v173 = v493 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p39);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v667 = complement(lineOfText$$1);
          var v668 = adjustNumbering(i$$6, numberingAdjustment);
          var v494 = v667 + v668;
          var v175 = v494 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p39);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p24);
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
            var v495 = complement(lineOfText$$1);
            var v183 = v495 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p39);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p24);
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
    var v496 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v496;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v497 = i$$7 + k$$2;
        var v190 = v497 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v498 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v498], JAM.policy.p39);
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
      var v499 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v499;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v669 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v500 = v669 + lineOfText$$2;
      var v200 = v500 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p39);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v501 = lineOfText$$2 + i$$7;
        var v202 = v501 + "\n";
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
  var v764 = sequence$$13.length;
  var v670 = v764 <= firstIndexToMutate;
  var v765 = !v670;
  if (v765) {
    v670 = lastIndexToMutate < 0;
  }
  var v502 = v670;
  var v671 = !v502;
  if (v671) {
    v502 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v502;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v503 = Math.random();
    var v212 = v503 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p28);
    var v504 = randNum < firstIndexToMutate;
    var v672 = !v504;
    if (v672) {
      v504 = randNum > lastIndexToMutate;
    }
    var v213 = v504;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p28);
    needNewChar = true;
    for (;needNewChar;) {
      var v505 = Math.random();
      var v506 = components$$1.length;
      var v214 = v505 * v506;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p28);
      var v507 = components$$1.length;
      var v215 = componentsIndex == v507;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v508 = components$$1[componentsIndex]
      }
      var v216 = v508 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v509 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p23);
    introspect(JAM.policy.p26) {
      var v510 = components$$1[componentsIndex]
    }
    var v217 = v509 + v510;
    var v511 = randNum + 1;
    var v512 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v511, v512], JAM.policy.p40);
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
    var v513 = Math.random();
    var v514 = components$$2.length;
    var v222 = v513 * v514;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p28);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v515 = sequence$$14.length;
    var v225 = v515 == 60;
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
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23);
    shiftValue = v229.length;
    var v766 = sequence$$15.length;
    var v673 = v766 - lookAhead;
    var v674 = sequence$$15.length;
    var v516 = JAM.call(sequence$$15.substring, sequence$$15, [v673, v674], JAM.policy.p40);
    var v230 = v516 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p24);
  var v234 = outputWindow.document;
  var v767 = '<tr><td class="title" width="200px">' + "Site:";
  var v675 = v767 + '</td><td class="title">';
  var v517 = v675 + "Positions:";
  var v235 = v517 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p39);
  var i$$9 = 0;
  var v518 = arrayOfItems.length;
  var v251 = i$$9 < v518;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v519 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v519.match, v519, [/\/.+\//], JAM.policy.p28);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v768 = arrayOfItems[i$$9]
    }
    var v676 = JAM.call(v768.match, v768, [/\)\D*\d+/], JAM.policy.p28);
    var v520 = v676.toString();
    var v237 = JAM.call(v520.replace, v520, [/\)\D*/, ""], JAM.policy.p27);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v521 = matchPosition >= lowerLimit;
      if (v521) {
        v521 = matchPosition < upperLimit;
      }
      var v241 = v521;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v522 = matchPosition - shiftValue;
        var v240 = v522 + 1;
        tempString$$1 = v239 + v240;
      }
      var v523 = matchExp.lastIndex;
      var v677 = RegExp.lastMatch;
      var v524 = v677.length;
      var v242 = v523 - v524;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p39);
    }
    var v525 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p28);
    var v244 = v525 != -1;
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
    var v893 = '<tr><td class="' + backGroundClass;
    var v873 = v893 + '">';
    introspect(JAM.policy.p26) {
      var v915 = arrayOfItems[i$$9]
    }
    var v906 = JAM.call(v915.match, v915, [/\([^\(]+\)/], JAM.policy.p28);
    var v894 = v906.toString();
    var v874 = JAM.call(v894.replace, v894, [/\(|\)/g, ""], JAM.policy.p27);
    var v853 = v873 + v874;
    var v824 = v853 + '</td><td class="';
    var v769 = v824 + backGroundClass;
    var v678 = v769 + '">';
    var v526 = v678 + tempString$$1;
    var v250 = v526 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p39);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v527 = arrayOfItems.length;
    v251 = i$$9 < v527;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p24);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p24);
  var v254 = outputWindow.document;
  var v854 = '<tr><td class="title">' + "Pattern:";
  var v825 = v854 + '</td><td class="title">';
  var v770 = v825 + "Times found:";
  var v679 = v770 + '</td><td class="title">';
  var v528 = v679 + "Percentage:";
  var v255 = v528 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p39);
  var i$$10 = 0;
  var v529 = arrayOfItems$$1.length;
  var v264 = i$$10 < v529;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v530 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v530.match, v530, [/\/[^\/]+\//], JAM.policy.p28);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v531 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p39);
    var v258 = v531 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p39);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v680 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v826 = arrayOfItems$$1[i$$10]
    }
    var v771 = JAM.call(v826.match, v826, [/\d+/], JAM.policy.p28);
    var v681 = parseFloat(v771);
    var v532 = v680 - v681;
    var v261 = v532 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v533 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v772 = arrayOfItems$$1[i$$10]
      }
      var v682 = JAM.call(v772.match, v772, [/\d+/], JAM.policy.p28);
      var v534 = parseFloat(v682);
      var v260 = v533 - v534;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v916 = arrayOfItems$$1[i$$10]
    }
    var v907 = JAM.call(v916.match, v916, [/\([^\(]+\)\b/], JAM.policy.p28);
    var v895 = v907.toString();
    var v875 = JAM.call(v895.replace, v895, [/\(|\)/g, ""], JAM.policy.p27);
    var v855 = "<tr><td>" + v875;
    var v827 = v855 + "</td><td>";
    var v773 = v827 + tempNumber;
    var v683 = v773 + "</td><td>";
    var v684 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p22);
    var v535 = v683 + v684;
    var v263 = v535 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p39);
    i$$10 = i$$10 + 1;
    var v536 = arrayOfItems$$1.length;
    v264 = i$$10 < v536;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p24);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v537 = sequence$$17.length;
  var v272 = v537 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v538 = Math.random();
    var v266 = v538 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p28);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p28);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p23);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p27);
    sequence$$17 = tempString1 + tempString2;
    var v539 = tempSeq.length;
    var v271 = v539 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p39);
      tempSeq = "";
    }
    var v540 = sequence$$17.length;
    v272 = v540 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p39);
  return true;
}
function colorAlignProp(theDocument) {
  var maxInput$$3 = 2E4;
  var v541 = testScript();
  var v275 = v541 == false;
  if (v275) {
    return false;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v876 = theDocument.forms;
  var v856 = v876[0];
  var v828 = v856.elements;
  var v774 = v828[0];
  var v685 = checkFormElement(v774);
  var v542 = v685 == false;
  var v687 = !v542;
  if (v687) {
    var v896 = theDocument.forms;
    var v877 = v896[0];
    var v857 = v877.elements;
    var v829 = v857[0];
    var v775 = v829.value;
    var v686 = checkTextLength(v775, maxInput$$3);
    v542 = v686 == false;
  }
  var v276 = v542;
  if (v276) {
    return false;
  }
  var v830 = theDocument.forms;
  var v776 = v830[0];
  var v688 = v776.elements;
  var v543 = v688[0];
  var v277 = v543.value;
  theAlignment = "X" + v277;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p28);
  var v544 = earlyCheckAlign(alignArray$$1);
  var v278 = v544 == false;
  if (v278) {
    return false;
  }
  var i$$11 = 1;
  var v545 = alignArray$$1.length;
  var v293 = i$$11 < v545;
  for (;v293;) {
    var v279 = titleArray;
    var v280 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v546 = alignArray$$1[i$$11]
    }
    var v952 = JAM.call(v546.match, v546, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v279[v280] = v952;
    }
    var v281 = titleArray;
    var v282 = i$$11 - 1;
    var v831 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v777 = titleArray[v831]
    }
    var v689 = v777.toString();
    var v547 = filterFastaTitle(v689);
    var v953 = JAM.call(v547.replace, v547, [/[\f\n\r]/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v281[v282] = v953;
    }
    var v283 = titleArray;
    var v284 = i$$11 - 1;
    var v690 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v548 = titleArray[v690]
    }
    var v954 = JAM.call(v548.substring, v548, [0, 20], JAM.policy.p23);
    introspect(JAM.policy.p13) {
      v283[v284] = v954;
    }
    var v288 = i$$11 == 1;
    if (v288) {
      var v549 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v285 = titleArray[v549]
      }
      longestTitle = v285.length;
    } else {
      var v778 = i$$11 - 1;
      introspect(JAM.policy.p26) {
        var v691 = titleArray[v778]
      }
      var v550 = v691.length;
      var v287 = v550 > longestTitle;
      if (v287) {
        var v551 = i$$11 - 1;
        introspect(JAM.policy.p26) {
          var v286 = titleArray[v551]
        }
        longestTitle = v286.length;
      }
    }
    var v289 = sequenceArray$$1;
    var v290 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v552 = alignArray$$1[i$$11]
    }
    var v955 = JAM.call(v552.replace, v552, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v289[v290] = v955;
    }
    var v291 = sequenceArray$$1;
    var v292 = i$$11 - 1;
    var v692 = i$$11 - 1;
    introspect(JAM.policy.p26) {
      var v553 = sequenceArray$$1[v692]
    }
    var v956 = filterAlignSeq(v553);
    introspect(JAM.policy.p13) {
      v291[v292] = v956;
    }
    i$$11 = i$$11 + 1;
    var v554 = alignArray$$1.length;
    v293 = i$$11 < v554;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v555 = titleArray.length;
  var v297 = i$$11 < v555;
  for (;v297;) {
    introspect(JAM.policy.p26) {
      var v693 = titleArray[i$$11]
    }
    var v556 = v693.length;
    var v296 = v556 < longestTitle;
    if (v296) {
      var v294 = titleArray;
      var v295 = i$$11;
      introspect(JAM.policy.p26) {
        var v557 = titleArray[i$$11]
      }
      introspect(JAM.policy.p26) {
        var v832 = titleArray[i$$11]
      }
      var v779 = v832.length;
      var v694 = longestTitle - v779;
      var v558 = JAM.call(spaceString.substring, spaceString, [0, v694], JAM.policy.p23);
      introspect(JAM.policy.p13) {
        v294[v295] = v557 + v558;
      }
    }
    i$$11 = i$$11 + 1;
    var v559 = titleArray.length;
    v297 = i$$11 < v559;
  }
  var v560 = checkAlign(titleArray, sequenceArray$$1);
  var v298 = v560 == false;
  if (v298) {
    return false;
  }
  var v299 = JAM.call("GAVLI, FYW, CM, ST, KRH, DE, NQ, P".replace, "GAVLI, FYW, CM, ST, KRH, DE, NQ, P", [/\s/g, ""], JAM.policy.p27);
  groupString = v299.toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p28);
  var v561 = checkGroupInput(arrayOfGroups);
  var v300 = v561 == false;
  if (v300) {
    return false;
  }
  var isBackground$$1;
  var v897 = theDocument.forms;
  var v878 = v897[0];
  var v858 = v878.elements;
  var v833 = v858[6];
  var v780 = v833.options;
  var v898 = theDocument.forms;
  var v879 = v898[0];
  var v859 = v879.elements;
  var v834 = v859[6];
  var v781 = v834.selectedIndex;
  introspect(JAM.policy.p26) {
    var v695 = v780[v781]
  }
  var v562 = v695.value;
  var v301 = v562 == "background";
  if (v301) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Properties", isBackground$$1);
  openPre();
  var v302 = outputWindow.document;
  var v563 = '<span class="g">' + "G, A, V, L, I";
  var v303 = v563 + "</span>\n";
  JAM.call(v302.write, v302, [v303], JAM.policy.p39);
  var v304 = outputWindow.document;
  var v564 = '<span class="f">' + "F, Y, W";
  var v305 = v564 + "</span>\n";
  JAM.call(v304.write, v304, [v305], JAM.policy.p39);
  var v306 = outputWindow.document;
  var v565 = '<span class="c">' + "C, M";
  var v307 = v565 + "</span>\n";
  JAM.call(v306.write, v306, [v307], JAM.policy.p39);
  var v308 = outputWindow.document;
  var v566 = '<span class="s">' + "S, T";
  var v309 = v566 + "</span>\n";
  JAM.call(v308.write, v308, [v309], JAM.policy.p39);
  var v310 = outputWindow.document;
  var v567 = '<span class="k">' + "K, R, H";
  var v311 = v567 + "</span>\n";
  JAM.call(v310.write, v310, [v311], JAM.policy.p39);
  var v312 = outputWindow.document;
  var v568 = '<span class="d">' + "D, E";
  var v313 = v568 + "</span>\n";
  JAM.call(v312.write, v312, [v313], JAM.policy.p39);
  var v314 = outputWindow.document;
  var v569 = '<span class="q">' + "N, Q";
  var v315 = v569 + "</span>\n";
  JAM.call(v314.write, v314, [v315], JAM.policy.p39);
  var v316 = outputWindow.document;
  var v570 = '<span class="p">' + "P";
  var v317 = v570 + "</span>\n";
  JAM.call(v316.write, v316, [v317], JAM.policy.p39);
  var v318 = outputWindow.document;
  JAM.call(v318.write, v318, ["\n"], JAM.policy.p24);
  var v880 = theDocument.forms;
  var v860 = v880[0];
  var v835 = v860.elements;
  var v782 = v835[4];
  var v696 = v782.options;
  var v881 = theDocument.forms;
  var v861 = v881[0];
  var v836 = v861.elements;
  var v783 = v836[4];
  var v697 = v783.selectedIndex;
  introspect(JAM.policy.p26) {
    var v571 = v696[v697]
  }
  var v319 = v571.value;
  var v882 = theDocument.forms;
  var v862 = v882[0];
  var v837 = v862.elements;
  var v784 = v837[5];
  var v698 = v784.options;
  var v883 = theDocument.forms;
  var v863 = v883[0];
  var v838 = v863.elements;
  var v785 = v838[5];
  var v699 = v785.selectedIndex;
  introspect(JAM.policy.p26) {
    var v572 = v698[v699]
  }
  var v320 = v572.value;
  var v839 = theDocument.forms;
  var v786 = v839[0];
  var v700 = v786.elements;
  var v573 = v700[7];
  var v321 = v573.value;
  colorAlign(titleArray, sequenceArray$$1, v319, v320, arrayOfGroups, v321, longestTitle);
  closePre();
  closeWindow();
  return true;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v322 = arrayOfSequences$$1.length;
  var positions = new Array(v322);
  var v574 = JAM.call(definedStarts.search, definedStarts, [/\S/], JAM.policy.p28);
  var v323 = v574 == -1;
  if (v323) {
    definedStarts = "0,0";
  }
  var definedStartsArray = JAM.call(definedStarts.split, definedStarts, [/,/], JAM.policy.p28);
  var i$$12 = 0;
  var v575 = positions.length;
  var v328 = i$$12 < v575;
  for (;v328;) {
    var v576 = definedStartsArray.length;
    var v327 = i$$12 >= v576;
    if (v327) {
      introspect(JAM.policy.p13) {
        positions[i$$12] = 0;
      }
    } else {
      introspect(JAM.policy.p26) {
        var v701 = definedStartsArray[i$$12]
      }
      var v577 = JAM.call(v701.search, v701, [/\d/], JAM.policy.p28);
      var v326 = v577 != -1;
      if (v326) {
        var v324 = positions;
        var v325 = i$$12;
        introspect(JAM.policy.p26) {
          var v702 = definedStartsArray[i$$12]
        }
        var v578 = JAM.call(v702.replace, v702, [/[^\d\-]/g, ""], JAM.policy.p27);
        var v957 = parseInt(v578);
        introspect(JAM.policy.p13) {
          v324[v325] = v957;
        }
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        introspect(JAM.policy.p13) {
          positions[i$$12] = 0;
        }
      }
    }
    i$$12 = i$$12 + 1;
    var v579 = positions.length;
    v328 = i$$12 < v579;
  }
  var totalBasesShown = 0;
  var v329 = parseInt(consensus);
  consensus = v329 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v580 = arrayOfColumns.length;
  var v332 = i$$12 < v580;
  for (;v332;) {
    var v330 = arrayOfColumns;
    var v331 = i$$12;
    var v581 = arrayOfSequences$$1.length;
    var v958 = new Array(v581);
    introspect(JAM.policy.p13) {
      v330[v331] = v958;
    }
    i$$12 = i$$12 + 1;
    var v582 = arrayOfColumns.length;
    v332 = i$$12 < v582;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v703 = arrayOfSequences$$1[0];
  var v583 = v703.length;
  var v360 = totalBasesShown < v583;
  for (;v360;) {
    var jj = 0;
    var v584 = arrayOfSequences$$1.length;
    var v358 = jj < v584;
    for (;v358;) {
      introspect(JAM.policy.p26) {
        var v585 = arrayOfTitles$$1[jj]
      }
      var v333 = output + v585;
      output = v333 + " ";
      var v704 = totalBasesShown + basePerLine$$4;
      var v586 = i$$12 < v704;
      if (v586) {
        var v787 = arrayOfSequences$$1[0];
        var v705 = v787.length;
        v586 = i$$12 < v705;
      }
      var v353 = v586;
      for (;v353;) {
        var v337 = jj == 0;
        if (v337) {
          var k$$3 = 0;
          var v587 = arrayOfSequences$$1.length;
          var v336 = k$$3 < v587;
          for (;v336;) {
            introspect(JAM.policy.p26) {
              var v334 = arrayOfColumns[columnCount]
            }
            var v335 = k$$3;
            introspect(JAM.policy.p26) {
              var v588 = arrayOfSequences$$1[k$$3]
            }
            var v959 = JAM.call(v588.charAt, v588, [i$$12], JAM.policy.p39);
            introspect(JAM.policy.p13) {
              v334[v335] = v959;
            }
            k$$3 = k$$3 + 1;
            var v589 = arrayOfSequences$$1.length;
            v336 = k$$3 < v589;
          }
        }
        introspect(JAM.policy.p26) {
          var v788 = arrayOfSequences$$1[jj]
        }
        var v706 = JAM.call(v788.charAt, v788, [i$$12], JAM.policy.p39);
        var v590 = v706 == ".";
        var v708 = !v590;
        if (v708) {
          introspect(JAM.policy.p26) {
            var v789 = arrayOfSequences$$1[jj]
          }
          var v707 = JAM.call(v789.charAt, v789, [i$$12], JAM.policy.p39);
          v590 = v707 == "-";
        }
        var v340 = v590;
        if (v340) {
          var v338 = output;
          introspect(JAM.policy.p26) {
            var v591 = arrayOfSequences$$1[jj]
          }
          var v339 = JAM.call(v591.charAt, v591, [i$$12], JAM.policy.p39);
          output = v338 + v339;
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v709 = totalBasesShown + basePerLine$$4;
          var v592 = i$$12 < v709;
          if (v592) {
            var v790 = arrayOfSequences$$1[0];
            var v710 = v790.length;
            v592 = i$$12 < v710;
          }
          v353 = v592;
          continue;
        }
        introspect(JAM.policy.p26) {
          var v341 = arrayOfColumns[columnCount]
        }
        columnSeq = JAM.call(v341.join, v341, [","], JAM.policy.p24);
        introspect(JAM.policy.p26) {
          var v593 = arrayOfSequences$$1[jj]
        }
        var v342 = JAM.call(v593.charAt, v593, [i$$12], JAM.policy.p39);
        re$$3 = new RegExp(v342, "gi");
        var v791 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p39);
        var v711 = v791.length;
        var v712 = arrayOfSequences$$1.length;
        var v594 = v711 / v712;
        var v344 = v594 >= consensus;
        if (v344) {
          var v792 = output + '<span class="';
          introspect(JAM.policy.p26) {
            var v884 = arrayOfSequences$$1[jj]
          }
          var v864 = JAM.call(v884.charAt, v884, [i$$12], JAM.policy.p39);
          var v840 = v864.toString();
          var v793 = v840.toLowerCase();
          var v713 = v792 + v793;
          var v595 = v713 + '">';
          introspect(JAM.policy.p26) {
            var v714 = arrayOfSequences$$1[jj]
          }
          var v596 = JAM.call(v714.charAt, v714, [i$$12], JAM.policy.p39);
          var v343 = v595 + v596;
          output = v343 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v715 = totalBasesShown + basePerLine$$4;
          var v597 = i$$12 < v715;
          if (v597) {
            var v794 = arrayOfSequences$$1[0];
            var v716 = v794.length;
            v597 = i$$12 < v716;
          }
          v353 = v597;
          continue;
        }
        result = 1;
        var m = 0;
        var v598 = arrayOfGroups$$1.length;
        var v348 = m < v598;
        for (;v348;) {
          introspect(JAM.policy.p26) {
            var v717 = arrayOfGroups$$1[m]
          }
          var v599 = JAM.call(v717.search, v717, [re$$3], JAM.policy.p39);
          var v347 = v599 != -1;
          if (v347) {
            introspect(JAM.policy.p26) {
              var v718 = arrayOfGroups$$1[m]
            }
            var v600 = "[" + v718;
            var v345 = v600 + "]";
            re$$3 = new RegExp(v345, "gi");
            var v346 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p39);
            result = v346.length;
            break;
          }
          m = m + 1;
          var v601 = arrayOfGroups$$1.length;
          v348 = m < v601;
        }
        var v719 = arrayOfSequences$$1.length;
        var v602 = result / v719;
        var v350 = v602 >= consensus;
        if (v350) {
          var v795 = output + '<span class="';
          introspect(JAM.policy.p26) {
            var v885 = arrayOfSequences$$1[jj]
          }
          var v865 = JAM.call(v885.charAt, v885, [i$$12], JAM.policy.p39);
          var v841 = v865.toString();
          var v796 = v841.toLowerCase();
          var v720 = v795 + v796;
          var v603 = v720 + '">';
          introspect(JAM.policy.p26) {
            var v721 = arrayOfSequences$$1[jj]
          }
          var v604 = JAM.call(v721.charAt, v721, [i$$12], JAM.policy.p39);
          var v349 = v603 + v604;
          output = v349 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v722 = totalBasesShown + basePerLine$$4;
          var v605 = i$$12 < v722;
          if (v605) {
            var v797 = arrayOfSequences$$1[0];
            var v723 = v797.length;
            v605 = i$$12 < v723;
          }
          v353 = v605;
          continue;
        }
        var v351 = output;
        introspect(JAM.policy.p26) {
          var v606 = arrayOfSequences$$1[jj]
        }
        var v352 = JAM.call(v606.charAt, v606, [i$$12], JAM.policy.p39);
        output = v351 + v352;
        i$$12 = i$$12 + 1;
        columnCount = columnCount + 1;
        var v724 = totalBasesShown + basePerLine$$4;
        var v607 = i$$12 < v724;
        if (v607) {
          var v798 = arrayOfSequences$$1[0];
          var v725 = v798.length;
          v607 = i$$12 < v725;
        }
        v353 = v607;
      }
      var v354 = positions;
      var v355 = jj;
      introspect(JAM.policy.p26) {
        var v608 = positions[jj]
      }
      introspect(JAM.policy.p26) {
        var v842 = arrayOfSequences$$1[jj]
      }
      var v799 = JAM.call(v842.substring, v842, [totalBasesShown, i$$12], JAM.policy.p40);
      var v726 = JAM.call(v799.replace, v799, [/\.|\-/g, ""], JAM.policy.p27);
      var v609 = v726.length;
      introspect(JAM.policy.p13) {
        v354[v355] = v608 + v609;
      }
      var v610 = output + " ";
      introspect(JAM.policy.p26) {
        var v611 = positions[jj]
      }
      var v356 = v610 + v611;
      output = v356 + "\n";
      var v357 = outputWindow.document;
      JAM.call(v357.write, v357, [output], JAM.policy.p39);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj = jj + 1;
      var v612 = arrayOfSequences$$1.length;
      v358 = jj < v612;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v359 = outputWindow.document;
    JAM.call(v359.write, v359, ["\n"], JAM.policy.p24);
    var v727 = arrayOfSequences$$1[0];
    var v613 = v727.length;
    v360 = totalBasesShown < v613;
  }
  return true;
}
JAM.set(document, "onload", v2);
var v361 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p24);
JAM.set(v361, "onclick", v3);
var v362 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p24);
JAM.set(v362, "onclick", v4)

JAM.stopProfile('load');
