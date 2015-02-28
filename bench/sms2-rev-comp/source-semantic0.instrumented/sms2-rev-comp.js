function v4() {
  var v547 = document.forms;
  var v472 = v547[0];
  var v284 = v472.elements;
  var v5 = v284[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    revComp();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v285 = document.main_form;
  var v7 = v285.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v286 = arrayOfSequences.length;
  var v9 = v286 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v287 = arrayOfTitles.length;
  var v11 = i$$1 < v287;
  for (;v11;) {
    var v600 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v548 = v600.search(/\S/)
    }
    var v473 = v548 == -1;
    var v550 = !v473;
    if (v550) {
      var v601 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v549 = v601.search(/\S/)
      }
      v473 = v549 == -1;
    }
    var v288 = v473;
    var v475 = !v288;
    if (v475) {
      var v551 = arrayOfSequences[i$$1];
      var v474 = v551.length;
      v288 = v474 != lengthOfAlign;
    }
    var v10 = v288;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v289 = arrayOfTitles.length;
    v11 = i$$1 < v289;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v637 = codonTable.search(/AmAcid/)
  }
  var v602 = v637 == -1;
  var v639 = !v602;
  if (v639) {
    introspect(JAM.policy.p17) {
      var v638 = codonTable.search(/Codon/)
    }
    v602 = v638 == -1;
  }
  var v552 = v602;
  var v604 = !v552;
  if (v604) {
    introspect(JAM.policy.p17) {
      var v603 = codonTable.search(/Number/)
    }
    v552 = v603 == -1;
  }
  var v476 = v552;
  var v554 = !v476;
  if (v554) {
    introspect(JAM.policy.p17) {
      var v553 = codonTable.search(/\/1000/)
    }
    v476 = v553 == -1;
  }
  var v290 = v476;
  var v478 = !v290;
  if (v478) {
    introspect(JAM.policy.p17) {
      var v477 = codonTable.search(/Fraction\s*\.\./)
    }
    v290 = v477 == -1;
  }
  var v12 = v290;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v479 = formElement.value;
  introspect(JAM.policy.p17) {
    var v291 = v479.search(/\S/)
  }
  var v13 = v291 == -1;
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
  var v292 = arrayOfPatterns.length;
  var v16 = z$$2 < v292;
  for (;v16;) {
    var v480 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v293 = v480.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v293 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v481 = arrayOfPatterns[z$$2];
    var v294 = moreExpressionCheck(v481);
    var v15 = v294 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v295 = arrayOfPatterns.length;
    v16 = z$$2 < v295;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v296 = arrayOfPatterns.length;
  var v22 = j < v296;
  for (;v22;) {
    var v482 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v297 = v482.match(/\/.+\//)
    }
    var v19 = v297 + "gi";
    var v740 = eval(v19);
    geneticCodeMatchExp[j] = v740;
    var v298 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v20 = v298.match(/=[a-zA-Z\*]/)
    }
    var v741 = v20.toString();
    geneticCodeMatchResult[j] = v741;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v742 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v742;
    j++;
    var v299 = arrayOfPatterns.length;
    v22 = j < v299;
  }
  var i$$2 = 0;
  var v483 = testSequence.length;
  var v300 = v483 - 3;
  var v29 = i$$2 <= v300;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v301 = geneticCodeMatchExp.length;
    var v27 = j < v301;
    for (;v27;) {
      var v484 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p16) {
        var v302 = codon.search(v484)
      }
      var v26 = v302 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v303 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v303 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v304 = geneticCodeMatchExp.length;
      v27 = j < v304;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v485 = testSequence.length;
    var v305 = v485 - 3;
    v29 = i$$2 <= v305;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v306;
  for (;v31;) {
    var v486 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v307 = v486.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v307 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v308;
  }
  var i$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v309;
  for (;v35;) {
    var v487 = arrayOfPatterns$$1[i$$3];
    var v310 = "[" + v487;
    var v32 = v310 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v311;
    for (;v34;) {
      var v488 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p16) {
        var v312 = v488.search(re)
      }
      var v33 = v312 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v313 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v313;
    }
    i$$3++;
    var v314 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v314;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v315 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v315;
  for (;v38;) {
    var v489 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v316 = v489.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v316 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v490 = arrayOfPatterns$$2[z$$4];
    var v317 = moreExpressionCheck(v490);
    var v37 = v317 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v318 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v318;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v555 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v491 = v555.replace(/[^A-Za-z]/g, "")
  }
  var v319 = v491.length;
  var v40 = v319 > maxInput;
  if (v40) {
    var v320 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v320 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v321 = text$$8.length;
  var v42 = v321 > maxInput$$1;
  if (v42) {
    var v322 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v322 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return;
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
  var v323 = alignArray.length;
  var v49 = v323 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v324 = alignArray.length;
  var v51 = i$$4 < v324;
  for (;v51;) {
    var v492 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v325 = v492.search(/[^\s]+\s/)
    }
    var v50 = v325 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v326 = alignArray.length;
    v51 = i$$4 < v326;
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
  introspect(JAM.policy.p17) {
    var v327 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v327 != -1;
  if (v54) {
    introspect(JAM.policy.p16) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p16) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p16) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v328 = sequence$$2.length;
  var v55 = "&gt;results for " + v328;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v329 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v329 != -1;
  if (v57) {
    var v330 = stringToReturn + '"';
    var v56 = v330 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v331 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v332 = sequence$$2.substring(0, 10)
  }
  var v58 = v331 + v332;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v333 = sequenceOne.length;
  var v59 = "Search results for " + v333;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v334 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v334 != -1;
  if (v61) {
    var v335 = stringToReturn$$1 + '"';
    var v60 = v335 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v336 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v337 = sequenceOne.substring(0, 10)
  }
  var v62 = v336 + v337;
  stringToReturn$$1 = v62 + '"\n';
  var v338 = stringToReturn$$1 + "and ";
  var v339 = sequenceTwo.length;
  var v63 = v338 + v339;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v340 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v340 != -1;
  if (v65) {
    var v341 = stringToReturn$$1 + '"';
    var v64 = v341 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v342 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v343 = sequenceTwo.substring(0, 10)
  }
  var v66 = v342 + v343;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v344 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v344;
  for (;v70;) {
    var v493 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v345 = v493.match(/\/.+\//)
    }
    var v69 = v345 + "gi";
    var v743 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v743;
    j$$2++;
    var v346 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v346;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v347 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v347;
  for (;v74;) {
    var v348 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v72 = v348.match(/=[a-zA-Z\*]/)
    }
    var v744 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v744;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v745 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v745;
    j$$3++;
    var v349 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v349;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v350 = sequence$$3.length;
  var v75 = "Results for " + v350;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v351 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v351 != -1;
  if (v77) {
    var v352 = stringToReturn$$2 + '"';
    var v76 = v352 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v353 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v354 = sequence$$3.substring(0, 10)
  }
  var v78 = v353 + v354;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v494 = "Results for " + topology;
  var v355 = v494 + " ";
  var v356 = sequence$$4.length;
  var v80 = v355 + v356;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v357 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v357 != -1;
  if (v82) {
    var v358 = stringToReturn$$3 + '"';
    var v81 = v358 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v359 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v360 = sequence$$4.substring(0, 10)
  }
  var v83 = v359 + v360;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v361 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v361;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v362 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v362 != -1;
  if (v87) {
    var v363 = stringToReturn$$4 + '"';
    var v86 = v363 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v364 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v365 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v364 + v365;
  stringToReturn$$4 = v88 + '"\n';
  var v366 = stringToReturn$$4 + "and ";
  var v367 = sequenceTwo$$1.length;
  var v89 = v366 + v367;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v368 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v368 != -1;
  if (v91) {
    var v369 = stringToReturn$$4 + '"';
    var v90 = v369 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v370 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v371 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v370 + v371;
  stringToReturn$$4 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$4;
  return v93 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    var v372 = Math.random();
    var v373 = components.length;
    var v94 = v372 * v373;
    introspect(JAM.policy.p17) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p16) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p17) {
    var v374 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v374 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p17) {
    var v375 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v375 != -1;
  if (v98) {
    introspect(JAM.policy.p15) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
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
  introspect(JAM.policy.p17) {
    var v718 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v711 = v718 != -1;
  var v720 = !v711;
  if (v720) {
    introspect(JAM.policy.p17) {
      var v719 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v711 = v719 != -1;
  }
  var v702 = v711;
  var v713 = !v702;
  if (v713) {
    introspect(JAM.policy.p17) {
      var v712 = expressionToCheck.search(/\[\]/)
    }
    v702 = v712 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    introspect(JAM.policy.p17) {
      var v703 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v693 = v703 != -1;
  }
  var v676 = v693;
  var v695 = !v676;
  if (v695) {
    introspect(JAM.policy.p17) {
      var v694 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v676 = v694 != -1;
  }
  var v658 = v676;
  var v678 = !v658;
  if (v678) {
    introspect(JAM.policy.p17) {
      var v677 = expressionToCheck.search(/\|\|/)
    }
    v658 = v677 != -1;
  }
  var v640 = v658;
  var v660 = !v640;
  if (v660) {
    introspect(JAM.policy.p17) {
      var v659 = expressionToCheck.search(/\/\|/)
    }
    v640 = v659 != -1;
  }
  var v605 = v640;
  var v642 = !v605;
  if (v642) {
    introspect(JAM.policy.p17) {
      var v641 = expressionToCheck.search(/\|\//)
    }
    v605 = v641 != -1;
  }
  var v556 = v605;
  var v607 = !v556;
  if (v607) {
    introspect(JAM.policy.p17) {
      var v606 = expressionToCheck.search(/\[.\]/)
    }
    v556 = v606 != -1;
  }
  var v495 = v556;
  var v558 = !v495;
  if (v558) {
    introspect(JAM.policy.p17) {
      var v557 = expressionToCheck.search(/\</)
    }
    v495 = v557 != -1;
  }
  var v376 = v495;
  var v497 = !v376;
  if (v497) {
    introspect(JAM.policy.p17) {
      var v496 = expressionToCheck.search(/\>/)
    }
    v376 = v496 != -1;
  }
  var v99 = v376;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$5 = "Reverse Complement";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v559 + "<head>\n";
  var v377 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v377 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v729 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v721 = v725 + "div.info {font-weight: bold}\n";
    var v714 = v721 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v714 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v696 = v705 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v679 = v696 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v679 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v643 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v608 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v608 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v499 = v560 + "td.many {color: #000000}\n";
    var v378 = v499 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v378 + "</style>\n";
    introspect(JAM.policy.p16) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v737 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v734 = v737 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v734 + "div.title {display: none}\n";
    var v726 = v730 + "div.info {font-weight: bold}\n";
    var v722 = v726 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v715 = v722 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v706 = v715 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v697 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v680 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v609 = v644 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v609 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v500 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v379 = v500 + "img {display: none}\n";
    var v109 = v379 + "</style>\n";
    introspect(JAM.policy.p16) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v501 = v562 + '<div class="title">';
  var v380 = v501 + title$$6;
  var v111 = v380 + " results</div>\n";
  introspect(JAM.policy.p16) {
    v110.write(v111);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v563 + "<head>\n";
  var v381 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v731 = v735 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v731 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v716 = v723 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v707 = v716 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v698 = v707 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v681 = v698 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v681 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v645 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v610 = v645 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v610 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v503 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v382 = v503 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v382 + "</style>\n";
    introspect(JAM.policy.p16) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v738 = v739 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v736 = v738 + "div.title {display: none}\n";
    var v732 = v736 + "div.info {font-weight: bold}\n";
    var v728 = v732 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v728 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v717 = v724 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v708 = v717 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v682 = v699 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v682 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v646 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v611 = v646 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v611 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v504 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v383 = v504 + "img {display: none}\n";
    var v117 = v383 + "</style>\n";
    introspect(JAM.policy.p16) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v505 = v566 + '<div class="title">';
  var v384 = v505 + title$$8;
  var v119 = v384 + " results</div>\n";
  introspect(JAM.policy.p16) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return;
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
  introspect(JAM.policy.p17) {
    var v385 = dnaSequence$$1.search(/./)
  }
  var v120 = v385 != -1;
  if (v120) {
    introspect(JAM.policy.p17) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p11) {
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
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
  }
  var v122 = tempString + theNumber;
  theNumber = v122 + " ";
  var v123 = sequenceToAppend + theNumber;
  sequenceToAppend = v123 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p16) {
    testArray.push(testString);
  }
  var v386 = testArray[0];
  var v124 = v386 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p16) {
    var v387 = testString.search(re$$2)
  }
  var v125 = v387 == -1;
  if (v125) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v388 = testNum.toFixed(3)
  }
  var v128 = v388 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v389 = testNum.toPrecision(5)
  }
  var v129 = v389 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v390 = theNumber$$1.search(/\d/)
  }
  var v130 = v390 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v612 = emblFile.search(/ID/)
  }
  var v567 = v612 == -1;
  var v614 = !v567;
  if (v614) {
    introspect(JAM.policy.p17) {
      var v613 = emblFile.search(/AC/)
    }
    v567 = v613 == -1;
  }
  var v506 = v567;
  var v569 = !v506;
  if (v569) {
    introspect(JAM.policy.p17) {
      var v568 = emblFile.search(/DE/)
    }
    v506 = v568 == -1;
  }
  var v391 = v506;
  var v508 = !v391;
  if (v508) {
    introspect(JAM.policy.p17) {
      var v507 = emblFile.search(/SQ/)
    }
    v391 = v507 == -1;
  }
  var v131 = v391;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v392 = theNumber$$2.search(/\d/)
  }
  var v132 = v392 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v393 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v393 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v394 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v394 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v395 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v395 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v615 = genBankFile.search(/LOCUS/)
  }
  var v570 = v615 == -1;
  var v617 = !v570;
  if (v617) {
    introspect(JAM.policy.p17) {
      var v616 = genBankFile.search(/DEFINITION/)
    }
    v570 = v616 == -1;
  }
  var v509 = v570;
  var v572 = !v509;
  if (v572) {
    introspect(JAM.policy.p17) {
      var v571 = genBankFile.search(/ACCESSION/)
    }
    v509 = v571 == -1;
  }
  var v396 = v509;
  var v511 = !v396;
  if (v511) {
    introspect(JAM.policy.p17) {
      var v510 = genBankFile.search(/ORIGIN/)
    }
    v396 = v510 == -1;
  }
  var v137 = v396;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v618 = genBankFile$$1.search(/LOCUS/)
  }
  var v573 = v618 == -1;
  var v620 = !v573;
  if (v620) {
    introspect(JAM.policy.p17) {
      var v619 = genBankFile$$1.search(/DEFINITION/)
    }
    v573 = v619 == -1;
  }
  var v512 = v573;
  var v575 = !v512;
  if (v575) {
    introspect(JAM.policy.p17) {
      var v574 = genBankFile$$1.search(/ACCESSION/)
    }
    v512 = v574 == -1;
  }
  var v397 = v512;
  var v514 = !v397;
  if (v514) {
    introspect(JAM.policy.p17) {
      var v513 = genBankFile$$1.search(/ORIGIN/)
    }
    v397 = v513 == -1;
  }
  var v138 = v397;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v398 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v398 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v621 = emblFile$$1.search(/ID/)
  }
  var v576 = v621 == -1;
  var v623 = !v576;
  if (v623) {
    introspect(JAM.policy.p17) {
      var v622 = emblFile$$1.search(/AC/)
    }
    v576 = v622 == -1;
  }
  var v515 = v576;
  var v578 = !v515;
  if (v578) {
    introspect(JAM.policy.p17) {
      var v577 = emblFile$$1.search(/DE/)
    }
    v515 = v577 == -1;
  }
  var v399 = v515;
  var v517 = !v399;
  if (v517) {
    introspect(JAM.policy.p17) {
      var v516 = emblFile$$1.search(/SQ/)
    }
    v399 = v516 == -1;
  }
  var v140 = v399;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v400 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v400 == -1;
  if (v141) {
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
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    var v142 = i$$5 + 1;
    lineOfText = rightNum(v142, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v401 = basePerLine / groupSize;
    var v145 = j$$6 <= v401;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v402 = k + i$$5;
        introspect(JAM.policy.p16) {
          var v143 = text$$10.charAt(v402)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v403 = basePerLine / groupSize;
      v145 = j$$6 <= v403;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p16) {
      v146.write(v147);
    }
    lineOfText = "";
    v148 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v404 = adjustment < 0;
    if (v404) {
      v404 = adjusted >= 0;
    }
    var v149 = v404;
    if (v149) {
      adjusted++;
    }
    return adjusted;
  }
  var numberingAdjustment = 0;
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v180 = i$$6 < stopBase$$2;
  for (;v180;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v405 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v405;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v406 = i$$6 + k$$1;
        var v150 = v406 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v407 = k$$1 + i$$6;
        introspect(JAM.policy.p16) {
          var v151 = text$$12.charAt(v407)
        }
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v408 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v408, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v409 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v409;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v579 = adjustNumbering(lineNum, numberingAdjustment);
      var v518 = rightNum(v579, "", 8, tabIn$$3);
      var v410 = v518 + lineOfText$$1;
      var v158 = v410 + "\n";
      introspect(JAM.policy.p16) {
        v157.write(v158);
      }
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v580 = adjustNumbering(lineNum, numberingAdjustment);
        var v519 = rightNum(v580, "", 8, tabIn$$3);
        var v520 = complement(lineOfText$$1);
        var v411 = v519 + v520;
        var v160 = v411 + "\n";
        introspect(JAM.policy.p16) {
          v159.write(v160);
        }
        var v161 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v161.write("\n");
        }
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v521 = adjustNumbering(i$$6, numberingAdjustment);
        var v412 = lineOfText$$1 + v521;
        var v164 = v412 + "\n";
        introspect(JAM.policy.p16) {
          v163.write(v164);
        }
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v522 = complement(lineOfText$$1);
          var v523 = adjustNumbering(i$$6, numberingAdjustment);
          var v413 = v522 + v523;
          var v166 = v413 + "\n";
          introspect(JAM.policy.p16) {
            v165.write(v166);
          }
          var v167 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v167.write("\n");
          }
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          introspect(JAM.policy.p16) {
            v169.write(v170);
          }
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p16) {
            v171.write(v172);
          }
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v414 = complement(lineOfText$$1);
            var v174 = v414 + "\n";
            introspect(JAM.policy.p16) {
              v173.write(v174);
            }
            var v175 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v175.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v180 = i$$6 < stopBase$$2;
  }
  return;
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
  var v199 = i$$7 < stopBase$$3;
  for (;v199;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v415 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v415;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v416 = i$$7 + k$$2;
        var v181 = v416 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v417 = k$$2 + i$$7;
        introspect(JAM.policy.p16) {
          var v182 = text$$13.charAt(v417)
        }
        lineOfText$$2 = lineOfText$$2 + v182;
        k$$2 = k$$2 + 1;
        v183 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v185 = numberPosition$$2 == "above";
      if (v185) {
        var v184 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v184;
      }
      var v186 = i$$7 >= stopBase$$3;
      if (v186) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v418 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v418;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v524 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v419 = v524 + lineOfText$$2;
      var v189 = v419 + "\n";
      introspect(JAM.policy.p16) {
        v188.write(v189);
      }
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v420 = lineOfText$$2 + i$$7;
        var v191 = v420 + "\n";
        introspect(JAM.policy.p16) {
          v190.write(v191);
        }
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p16) {
            v192.write(v193);
          }
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p16) {
            v194.write(v195);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v199 = i$$7 < stopBase$$3;
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
  var v581 = sequence$$13.length;
  var v525 = v581 <= firstIndexToMutate;
  var v582 = !v525;
  if (v582) {
    v525 = lastIndexToMutate < 0;
  }
  var v421 = v525;
  var v526 = !v421;
  if (v526) {
    v421 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v421;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v422 = Math.random();
    var v201 = v422 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v201);
    }
    var v423 = randNum < firstIndexToMutate;
    var v527 = !v423;
    if (v527) {
      v423 = randNum > lastIndexToMutate;
    }
    var v202 = v423;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v424 = Math.random();
      var v425 = components$$1.length;
      var v203 = v424 * v425;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v203);
      }
      var v426 = components$$1.length;
      var v204 = componentsIndex == v426;
      if (v204) {
        componentsIndex = 0;
      }
      var v427 = components$$1[componentsIndex];
      var v205 = v427 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v428 = sequence$$13.substring(0, randNum)
    }
    var v429 = components$$1[componentsIndex];
    var v206 = v428 + v429;
    var v430 = randNum + 1;
    var v431 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v207 = sequence$$13.substring(v430, v431)
    }
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  introspect(JAM.policy.p16) {
    v209.write(v210);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v432 = Math.random();
    var v433 = components$$2.length;
    var v211 = v432 * v433;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v211);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v434 = sequence$$14.length;
    var v214 = v434 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      introspect(JAM.policy.p16) {
        v212.write(v213);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  introspect(JAM.policy.p16) {
    v216.write(v217);
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
  var v221 = dnaConformation == "circular";
  if (v221) {
    introspect(JAM.policy.p13) {
      var v218 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v218.length;
    var v583 = sequence$$15.length;
    var v528 = v583 - lookAhead;
    var v529 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v435 = sequence$$15.substring(v528, v529)
    }
    var v219 = v435 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v223 = outputWindow.document;
  var v584 = '<tr><td class="title" width="200px">' + "Site:";
  var v530 = v584 + '</td><td class="title">';
  var v436 = v530 + "Positions:";
  var v224 = v436 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v223.write(v224);
  }
  var i$$9 = 0;
  var v437 = arrayOfItems.length;
  var v240 = i$$9 < v437;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v438 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v225 = v438.match(/\/.+\//)
    }
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v585 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v531 = v585.match(/\)\D*\d+/)
    }
    var v439 = v531.toString();
    introspect(JAM.policy.p15) {
      var v226 = v439.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v226);
    introspect(JAM.policy.p16) {
      var v232 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v440 = matchPosition >= lowerLimit;
      if (v440) {
        v440 = matchPosition < upperLimit;
      }
      var v230 = v440;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v441 = matchPosition - shiftValue;
        var v229 = v441 + 1;
        tempString$$1 = v228 + v229;
      }
      var v442 = matchExp.lastIndex;
      var v532 = RegExp.lastMatch;
      var v443 = v532.length;
      var v231 = v442 - v443;
      matchExp.lastIndex = v231 + 1;
      introspect(JAM.policy.p16) {
        v232 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v444 = tempString$$1.search(/\d/)
    }
    var v233 = v444 != -1;
    if (v233) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v237 = timesFound == 0;
    if (v237) {
      backGroundClass = "none";
    } else {
      var v236 = timesFound == 1;
      if (v236) {
        backGroundClass = "one";
      } else {
        var v235 = timesFound == 2;
        if (v235) {
          backGroundClass = "two";
        } else {
          var v234 = timesFound == 3;
          if (v234) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v238 = outputWindow.document;
    var v683 = '<tr><td class="' + backGroundClass;
    var v665 = v683 + '">';
    var v709 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v700 = v709.match(/\([^\(]+\)/)
    }
    var v684 = v700.toString();
    introspect(JAM.policy.p15) {
      var v666 = v684.replace(/\(|\)/g, "")
    }
    var v647 = v665 + v666;
    var v624 = v647 + '</td><td class="';
    var v586 = v624 + backGroundClass;
    var v533 = v586 + '">';
    var v445 = v533 + tempString$$1;
    var v239 = v445 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v238.write(v239);
    }
    timesFound = 0;
    i$$9++;
    var v446 = arrayOfItems.length;
    v240 = i$$9 < v446;
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v241.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v243 = outputWindow.document;
  var v648 = '<tr><td class="title">' + "Pattern:";
  var v625 = v648 + '</td><td class="title">';
  var v587 = v625 + "Times found:";
  var v534 = v587 + '</td><td class="title">';
  var v447 = v534 + "Percentage:";
  var v244 = v447 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v243.write(v244);
  }
  var i$$10 = 0;
  var v448 = arrayOfItems$$1.length;
  var v253 = i$$10 < v448;
  for (;v253;) {
    var tempNumber = 0;
    var v449 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v245 = v449.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p16) {
      var v450 = sequence$$16.search(matchExp$$1)
    }
    var v247 = v450 != -1;
    if (v247) {
      introspect(JAM.policy.p16) {
        var v246 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v535 = originalLength + 1;
    var v626 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v588 = v626.match(/\d+/)
    }
    var v536 = parseFloat(v588);
    var v451 = v535 - v536;
    var v250 = v451 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v452 = originalLength + 1;
      var v589 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v537 = v589.match(/\d+/)
      }
      var v453 = parseFloat(v537);
      var v249 = v452 - v453;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v710 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v701 = v710.match(/\([^\(]+\)\b/)
    }
    var v685 = v701.toString();
    introspect(JAM.policy.p15) {
      var v667 = v685.replace(/\(|\)/g, "")
    }
    var v649 = "<tr><td>" + v667;
    var v627 = v649 + "</td><td>";
    var v590 = v627 + tempNumber;
    var v538 = v590 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v539 = percentage.toFixed(2)
    }
    var v454 = v538 + v539;
    var v252 = v454 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v251.write(v252);
    }
    i$$10++;
    var v455 = arrayOfItems$$1.length;
    v253 = i$$10 < v455;
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v254.write("</tbody></table>\n");
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
  var v456 = sequence$$17.length;
  var v261 = v456 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v457 = Math.random();
    var v255 = v457 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v255);
    }
    introspect(JAM.policy.p17) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v256, v257);
    }
    sequence$$17 = tempString1 + tempString2;
    var v458 = tempSeq.length;
    var v260 = v458 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      introspect(JAM.policy.p16) {
        v258.write(v259);
      }
      tempSeq = "";
    }
    var v459 = sequence$$17.length;
    v261 = v459 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  introspect(JAM.policy.p16) {
    v262.write(v263);
  }
  return true;
}
function revComp() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v460 = testScript();
  var v264 = v460 == false;
  if (v264) {
    return;
  }
  var v668 = theDocument.forms;
  var v650 = v668[0];
  var v628 = v650.elements;
  var v591 = v628[0];
  var v540 = checkFormElement(v591);
  var v461 = v540 == false;
  var v542 = !v461;
  if (v542) {
    var v686 = theDocument.forms;
    var v669 = v686[0];
    var v651 = v669.elements;
    var v629 = v651[0];
    var v592 = v629.value;
    var v541 = checkSequenceLength(v592, maxInput$$3);
    v461 = v541 == false;
  }
  var v265 = v461;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v630 = theDocument.forms;
  var v593 = v630[0];
  var v543 = v593.elements;
  var v462 = v543[0];
  var v266 = v462.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v463 = arrayOfFasta$$1.length;
  var v281 = i$$11 < v463;
  for (;v281;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v268);
    newDna = removeNonDna(newDna);
    var v687 = theDocument.forms;
    var v670 = v687[0];
    var v652 = v670.elements;
    var v631 = v652[4];
    var v594 = v631.options;
    var v688 = theDocument.forms;
    var v671 = v688[0];
    var v653 = v671.elements;
    var v632 = v653[4];
    var v595 = v632.selectedIndex;
    var v544 = v594[v595];
    var v464 = v544.value;
    var v278 = v464 == "reverse-complement";
    if (v278) {
      var v269 = outputWindow.document;
      var v465 = ">" + title$$9;
      var v270 = v465 + " reverse complement\n";
      introspect(JAM.policy.p16) {
        v269.write(v270);
      }
      var v271 = complement(newDna);
      newDna = reverse(v271);
    } else {
      var v689 = theDocument.forms;
      var v672 = v689[0];
      var v654 = v672.elements;
      var v633 = v654[4];
      var v596 = v633.options;
      var v690 = theDocument.forms;
      var v673 = v690[0];
      var v655 = v673.elements;
      var v634 = v655[4];
      var v597 = v634.selectedIndex;
      var v545 = v596[v597];
      var v466 = v545.value;
      var v277 = v466 == "reverse";
      if (v277) {
        var v272 = outputWindow.document;
        var v467 = ">" + title$$9;
        var v273 = v467 + " reverse\n";
        introspect(JAM.policy.p16) {
          v272.write(v273);
        }
        newDna = reverse(newDna);
      } else {
        var v691 = theDocument.forms;
        var v674 = v691[0];
        var v656 = v674.elements;
        var v635 = v656[4];
        var v598 = v635.options;
        var v692 = theDocument.forms;
        var v675 = v692[0];
        var v657 = v675.elements;
        var v636 = v657[4];
        var v599 = v636.selectedIndex;
        var v546 = v598[v599];
        var v468 = v546.value;
        var v276 = v468 == "complement";
        if (v276) {
          var v274 = outputWindow.document;
          var v469 = ">" + title$$9;
          var v275 = v469 + " complement\n";
          introspect(JAM.policy.p16) {
            v274.write(v275);
          }
          newDna = complement(newDna);
        }
      }
    }
    var v279 = outputWindow.document;
    var v470 = addReturns(newDna);
    var v280 = v470 + "\n\n";
    introspect(JAM.policy.p16) {
      v279.write(v280);
    }
    i$$11++;
    var v471 = arrayOfFasta$$1.length;
    v281 = i$$11 < v471;
  }
  closePre();
  closeWindow();
  return;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v282 = document.getElementById("submitbtn")
}
v282.onclick = v3;
introspect(JAM.policy.p11) {
  var v283 = document.getElementById("clearbtn")
}
v283.onclick = v4
