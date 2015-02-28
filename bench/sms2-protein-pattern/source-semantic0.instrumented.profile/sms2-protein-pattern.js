
JAM.startProfile('load');
function v4() {
  var v550 = document.forms;
  var v472 = v550[0];
  var v284 = v472.elements;
  var v5 = v284[0];
  v5.value = " ";
  var v551 = document.forms;
  var v473 = v551[0];
  var v285 = v473.elements;
  var v6 = v285[1];
  v6.value = " ";
  return;
}
function v3() {
  try {
    proteinPattern();
  } catch (e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7);
  }
  return;
}
function v2() {
  var v286 = document.main_form;
  var v8 = v286.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v287 = arrayOfSequences.length;
  var v10 = v287 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v288 = arrayOfTitles.length;
  var v12 = i$$1 < v288;
  for (;v12;) {
    var v603 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p18) {
      var v552 = v603.search(/\S/)
    }
    var v474 = v552 == -1;
    var v554 = !v474;
    if (v554) {
      var v604 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p18) {
        var v553 = v604.search(/\S/)
      }
      v474 = v553 == -1;
    }
    var v289 = v474;
    var v476 = !v289;
    if (v476) {
      var v555 = arrayOfSequences[i$$1];
      var v475 = v555.length;
      v289 = v475 != lengthOfAlign;
    }
    var v11 = v289;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v290 = arrayOfTitles.length;
    v12 = i$$1 < v290;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p18) {
    var v637 = codonTable.search(/AmAcid/)
  }
  var v605 = v637 == -1;
  var v639 = !v605;
  if (v639) {
    introspect(JAM.policy.p18) {
      var v638 = codonTable.search(/Codon/)
    }
    v605 = v638 == -1;
  }
  var v556 = v605;
  var v607 = !v556;
  if (v607) {
    introspect(JAM.policy.p18) {
      var v606 = codonTable.search(/Number/)
    }
    v556 = v606 == -1;
  }
  var v477 = v556;
  var v558 = !v477;
  if (v558) {
    introspect(JAM.policy.p18) {
      var v557 = codonTable.search(/\/1000/)
    }
    v477 = v557 == -1;
  }
  var v291 = v477;
  var v479 = !v291;
  if (v479) {
    introspect(JAM.policy.p18) {
      var v478 = codonTable.search(/Fraction\s*\.\./)
    }
    v291 = v478 == -1;
  }
  var v13 = v291;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v480 = formElement.value;
  introspect(JAM.policy.p18) {
    var v292 = v480.search(/\S/)
  }
  var v14 = v292 == -1;
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
  var v293 = arrayOfPatterns.length;
  var v17 = z$$2 < v293;
  for (;v17;) {
    var v481 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p18) {
      var v294 = v481.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v294 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v482 = arrayOfPatterns[z$$2];
    var v295 = moreExpressionCheck(v482);
    var v16 = v295 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v296 = arrayOfPatterns.length;
    v17 = z$$2 < v296;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v297 = arrayOfPatterns.length;
  var v23 = j < v297;
  for (;v23;) {
    var v483 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v298 = v483.match(/\/.+\//)
    }
    var v20 = v298 + "gi";
    var v733 = eval(v20);
    geneticCodeMatchExp[j] = v733;
    var v299 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v21 = v299.match(/=[a-zA-Z\*]/)
    }
    var v734 = v21.toString();
    geneticCodeMatchResult[j] = v734;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v735 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v735;
    j++;
    var v300 = arrayOfPatterns.length;
    v23 = j < v300;
  }
  var i$$2 = 0;
  var v484 = testSequence.length;
  var v301 = v484 - 3;
  var v30 = i$$2 <= v301;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v302 = geneticCodeMatchExp.length;
    var v28 = j < v302;
    for (;v28;) {
      var v485 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v303 = codon.search(v485)
      }
      var v27 = v303 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v304 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v304 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v305 = geneticCodeMatchExp.length;
      v28 = j < v305;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v486 = testSequence.length;
    var v306 = v486 - 3;
    v30 = i$$2 <= v306;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v307;
  for (;v32;) {
    var v487 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p18) {
      var v308 = v487.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v308 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v309;
  }
  var i$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v310;
  for (;v36;) {
    var v488 = arrayOfPatterns$$1[i$$3];
    var v311 = "[" + v488;
    var v33 = v311 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v312;
    for (;v35;) {
      var v489 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v313 = v489.search(re)
      }
      var v34 = v313 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v314 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v314;
    }
    i$$3++;
    var v315 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v315;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v316 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v316;
  for (;v39;) {
    var v490 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p18) {
      var v317 = v490.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v317 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v491 = arrayOfPatterns$$2[z$$4];
    var v318 = moreExpressionCheck(v491);
    var v38 = v318 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v319 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v319;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v559 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v492 = v559.replace(/[^A-Za-z]/g, "")
  }
  var v320 = v492.length;
  var v41 = v320 > maxInput;
  if (v41) {
    var v321 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v321 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v322 = text$$8.length;
  var v43 = v322 > maxInput$$1;
  if (v43) {
    var v323 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v323 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v324 = alignArray.length;
  var v50 = v324 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v325 = alignArray.length;
  var v52 = i$$4 < v325;
  for (;v52;) {
    var v493 = alignArray[i$$4];
    introspect(JAM.policy.p18) {
      var v326 = v493.search(/[^\s]+\s/)
    }
    var v51 = v326 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v327 = alignArray.length;
    v52 = i$$4 < v327;
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
  introspect(JAM.policy.p18) {
    var v328 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v328 != -1;
  if (v55) {
    introspect(JAM.policy.p17) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p17) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v329 = sequence$$2.length;
  var v56 = "&gt;results for " + v329;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v330 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v330 != -1;
  if (v58) {
    var v331 = stringToReturn + '"';
    var v57 = v331 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v332 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v333 = sequence$$2.substring(0, 10)
  }
  var v59 = v332 + v333;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v334 = sequenceOne.length;
  var v60 = "Search results for " + v334;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v335 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v335 != -1;
  if (v62) {
    var v336 = stringToReturn$$1 + '"';
    var v61 = v336 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v338 = sequenceOne.substring(0, 10)
  }
  var v63 = v337 + v338;
  stringToReturn$$1 = v63 + '"\n';
  var v339 = stringToReturn$$1 + "and ";
  var v340 = sequenceTwo.length;
  var v64 = v339 + v340;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v341 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v341 != -1;
  if (v66) {
    var v342 = stringToReturn$$1 + '"';
    var v65 = v342 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v343 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v344 = sequenceTwo.substring(0, 10)
  }
  var v67 = v343 + v344;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v345 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v345;
  for (;v71;) {
    var v494 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p18) {
      var v346 = v494.match(/\/.+\//)
    }
    var v70 = v346 + "gi";
    var v736 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v736;
    j$$2++;
    var v347 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v347;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v348 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v348;
  for (;v75;) {
    var v349 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p18) {
      var v73 = v349.match(/=[a-zA-Z\*]/)
    }
    var v737 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v737;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v738 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v738;
    j$$3++;
    var v350 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v350;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v351 = sequence$$3.length;
  var v76 = "Results for " + v351;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v352 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v352 != -1;
  if (v78) {
    var v353 = stringToReturn$$2 + '"';
    var v77 = v353 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v354 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v355 = sequence$$3.substring(0, 10)
  }
  var v79 = v354 + v355;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v495 = "Results for " + topology;
  var v356 = v495 + " ";
  var v357 = sequence$$4.length;
  var v81 = v356 + v357;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v358 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v358 != -1;
  if (v83) {
    var v359 = stringToReturn$$3 + '"';
    var v82 = v359 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v360 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v361 = sequence$$4.substring(0, 10)
  }
  var v84 = v360 + v361;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v362 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v362;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v363 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v363 != -1;
  if (v88) {
    var v364 = stringToReturn$$4 + '"';
    var v87 = v364 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v366 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v365 + v366;
  stringToReturn$$4 = v89 + '"\n';
  var v367 = stringToReturn$$4 + "and ";
  var v368 = sequenceTwo$$1.length;
  var v90 = v367 + v368;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v369 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v369 != -1;
  if (v92) {
    var v370 = stringToReturn$$4 + '"';
    var v91 = v370 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v371 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v372 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v371 + v372;
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
    var v373 = Math.random();
    var v374 = components.length;
    var v95 = v373 * v374;
    introspect(JAM.policy.p18) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p12) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p18) {
    var v375 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v375 != -1;
  if (v97) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p18) {
    var v376 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v376 != -1;
  if (v99) {
    introspect(JAM.policy.p15) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
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
  introspect(JAM.policy.p18) {
    var v711 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v704 = v711 != -1;
  var v713 = !v704;
  if (v713) {
    introspect(JAM.policy.p18) {
      var v712 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v704 = v712 != -1;
  }
  var v694 = v704;
  var v706 = !v694;
  if (v706) {
    introspect(JAM.policy.p18) {
      var v705 = expressionToCheck.search(/\[\]/)
    }
    v694 = v705 != -1;
  }
  var v683 = v694;
  var v696 = !v683;
  if (v696) {
    introspect(JAM.policy.p18) {
      var v695 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v683 = v695 != -1;
  }
  var v670 = v683;
  var v685 = !v670;
  if (v685) {
    introspect(JAM.policy.p18) {
      var v684 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v670 = v684 != -1;
  }
  var v655 = v670;
  var v672 = !v655;
  if (v672) {
    introspect(JAM.policy.p18) {
      var v671 = expressionToCheck.search(/\|\|/)
    }
    v655 = v671 != -1;
  }
  var v640 = v655;
  var v657 = !v640;
  if (v657) {
    introspect(JAM.policy.p18) {
      var v656 = expressionToCheck.search(/\/\|/)
    }
    v640 = v656 != -1;
  }
  var v608 = v640;
  var v642 = !v608;
  if (v642) {
    introspect(JAM.policy.p18) {
      var v641 = expressionToCheck.search(/\|\//)
    }
    v608 = v641 != -1;
  }
  var v560 = v608;
  var v610 = !v560;
  if (v610) {
    introspect(JAM.policy.p18) {
      var v609 = expressionToCheck.search(/\[.\]/)
    }
    v560 = v609 != -1;
  }
  var v496 = v560;
  var v562 = !v496;
  if (v562) {
    introspect(JAM.policy.p18) {
      var v561 = expressionToCheck.search(/\</)
    }
    v496 = v561 != -1;
  }
  var v377 = v496;
  var v498 = !v377;
  if (v498) {
    introspect(JAM.policy.p18) {
      var v497 = expressionToCheck.search(/\>/)
    }
    v377 = v497 != -1;
  }
  var v100 = v377;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$6 = "Protein Pattern Find";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v499 = v563 + "<head>\n";
  var v378 = v499 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v707 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v686 = v697 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v643 = v658 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v611 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v564 = v611 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v500 = v564 + "td.many {color: #000000}\n";
    var v379 = v500 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v379 + "</style>\n";
    introspect(JAM.policy.p17) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v727 = v730 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v723 = v727 + "div.title {display: none}\n";
    var v719 = v723 + "div.info {font-weight: bold}\n";
    var v715 = v719 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v715 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v698 = v708 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v687 = v698 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v659 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v612 = v644 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v565 = v612 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v501 = v565 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v380 = v501 + "img {display: none}\n";
    var v110 = v380 + "</style>\n";
    introspect(JAM.policy.p17) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v502 = v566 + '<div class="title">';
  var v381 = v502 + title$$7;
  var v112 = v381 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v111.write(v112);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v567 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v567 + "<head>\n";
  var v382 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v382 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v720 = v724 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v716 = v720 + "div.info {font-weight: bold}\n";
    var v709 = v716 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v699 = v709 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v688 = v699 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v688 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v660 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v645 = v660 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v613 = v645 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v568 = v613 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v504 = v568 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v383 = v504 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v383 + "</style>\n";
    introspect(JAM.policy.p17) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v732 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v731 = v732 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v729 = v731 + "div.title {display: none}\n";
    var v725 = v729 + "div.info {font-weight: bold}\n";
    var v721 = v725 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v717 = v721 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v710 = v717 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v700 = v710 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v689 = v700 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v689 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v661 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v646 = v661 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v614 = v646 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v569 = v614 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v505 = v569 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v384 = v505 + "img {display: none}\n";
    var v118 = v384 + "</style>\n";
    introspect(JAM.policy.p17) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v570 = "</head>\n" + '<body class="main">\n';
  var v506 = v570 + '<div class="title">';
  var v385 = v506 + title$$9;
  var v120 = v385 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v119.write(v120);
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
  introspect(JAM.policy.p18) {
    var v386 = dnaSequence$$1.search(/./)
  }
  var v121 = v386 != -1;
  if (v121) {
    introspect(JAM.policy.p18) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p12) {
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v387 = testArray[0];
  var v125 = v387 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v388 = testString.search(re$$2)
  }
  var v126 = v388 == -1;
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
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v389 = testNum.toFixed(3)
  }
  var v129 = v389 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v390 = testNum.toPrecision(5)
  }
  var v130 = v390 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p18) {
    var v391 = theNumber$$1.search(/\d/)
  }
  var v131 = v391 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p18) {
    var v615 = emblFile.search(/ID/)
  }
  var v571 = v615 == -1;
  var v617 = !v571;
  if (v617) {
    introspect(JAM.policy.p18) {
      var v616 = emblFile.search(/AC/)
    }
    v571 = v616 == -1;
  }
  var v507 = v571;
  var v573 = !v507;
  if (v573) {
    introspect(JAM.policy.p18) {
      var v572 = emblFile.search(/DE/)
    }
    v507 = v572 == -1;
  }
  var v392 = v507;
  var v509 = !v392;
  if (v509) {
    introspect(JAM.policy.p18) {
      var v508 = emblFile.search(/SQ/)
    }
    v392 = v508 == -1;
  }
  var v132 = v392;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p18) {
    var v393 = theNumber$$2.search(/\d/)
  }
  var v133 = v393 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v394 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v394 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p18) {
    var v395 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v395 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p18) {
    var v396 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v396 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p18) {
    var v618 = genBankFile.search(/LOCUS/)
  }
  var v574 = v618 == -1;
  var v620 = !v574;
  if (v620) {
    introspect(JAM.policy.p18) {
      var v619 = genBankFile.search(/DEFINITION/)
    }
    v574 = v619 == -1;
  }
  var v510 = v574;
  var v576 = !v510;
  if (v576) {
    introspect(JAM.policy.p18) {
      var v575 = genBankFile.search(/ACCESSION/)
    }
    v510 = v575 == -1;
  }
  var v397 = v510;
  var v512 = !v397;
  if (v512) {
    introspect(JAM.policy.p18) {
      var v511 = genBankFile.search(/ORIGIN/)
    }
    v397 = v511 == -1;
  }
  var v138 = v397;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p18) {
    var v621 = genBankFile$$1.search(/LOCUS/)
  }
  var v577 = v621 == -1;
  var v623 = !v577;
  if (v623) {
    introspect(JAM.policy.p18) {
      var v622 = genBankFile$$1.search(/DEFINITION/)
    }
    v577 = v622 == -1;
  }
  var v513 = v577;
  var v579 = !v513;
  if (v579) {
    introspect(JAM.policy.p18) {
      var v578 = genBankFile$$1.search(/ACCESSION/)
    }
    v513 = v578 == -1;
  }
  var v398 = v513;
  var v515 = !v398;
  if (v515) {
    introspect(JAM.policy.p18) {
      var v514 = genBankFile$$1.search(/ORIGIN/)
    }
    v398 = v514 == -1;
  }
  var v139 = v398;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v399 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v399 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p18) {
    var v624 = emblFile$$1.search(/ID/)
  }
  var v580 = v624 == -1;
  var v626 = !v580;
  if (v626) {
    introspect(JAM.policy.p18) {
      var v625 = emblFile$$1.search(/AC/)
    }
    v580 = v625 == -1;
  }
  var v516 = v580;
  var v582 = !v516;
  if (v582) {
    introspect(JAM.policy.p18) {
      var v581 = emblFile$$1.search(/DE/)
    }
    v516 = v581 == -1;
  }
  var v400 = v516;
  var v518 = !v400;
  if (v518) {
    introspect(JAM.policy.p18) {
      var v517 = emblFile$$1.search(/SQ/)
    }
    v400 = v517 == -1;
  }
  var v141 = v400;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v401 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v401 == -1;
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
    var v402 = basePerLine / groupSize;
    var v146 = j$$6 <= v402;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v403 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v144 = text$$10.charAt(v403)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v404 = basePerLine / groupSize;
      v146 = j$$6 <= v404;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v147.write(v148);
    }
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v405 = adjustment < 0;
    if (v405) {
      v405 = adjusted >= 0;
    }
    var v150 = v405;
    if (v150) {
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v406 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v406;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v407 = i$$6 + k$$1;
        var v151 = v407 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v408 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v408)
        }
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v409 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v409, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v410 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v410;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v583 = adjustNumbering(lineNum, numberingAdjustment);
      var v519 = rightNum(v583, "", 8, tabIn$$3);
      var v411 = v519 + lineOfText$$1;
      var v159 = v411 + "\n";
      introspect(JAM.policy.p17) {
        v158.write(v159);
      }
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v584 = adjustNumbering(lineNum, numberingAdjustment);
        var v520 = rightNum(v584, "", 8, tabIn$$3);
        var v521 = complement(lineOfText$$1);
        var v412 = v520 + v521;
        var v161 = v412 + "\n";
        introspect(JAM.policy.p17) {
          v160.write(v161);
        }
        var v162 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v162.write("\n");
        }
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v522 = adjustNumbering(i$$6, numberingAdjustment);
        var v413 = lineOfText$$1 + v522;
        var v165 = v413 + "\n";
        introspect(JAM.policy.p17) {
          v164.write(v165);
        }
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v523 = complement(lineOfText$$1);
          var v524 = adjustNumbering(i$$6, numberingAdjustment);
          var v414 = v523 + v524;
          var v167 = v414 + "\n";
          introspect(JAM.policy.p17) {
            v166.write(v167);
          }
          var v168 = outputWindow.document;
          introspect(JAM.policy.p12) {
            v168.write("\n");
          }
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v170.write(v171);
          }
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v172.write(v173);
          }
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v415 = complement(lineOfText$$1);
            var v175 = v415 + "\n";
            introspect(JAM.policy.p17) {
              v174.write(v175);
            }
            var v176 = outputWindow.document;
            introspect(JAM.policy.p12) {
              v176.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v416 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v416;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v417 = i$$7 + k$$2;
        var v182 = v417 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v418 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v183 = text$$13.charAt(v418)
        }
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v419 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v419;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v525 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v420 = v525 + lineOfText$$2;
      var v190 = v420 + "\n";
      introspect(JAM.policy.p17) {
        v189.write(v190);
      }
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v421 = lineOfText$$2 + i$$7;
        var v192 = v421 + "\n";
        introspect(JAM.policy.p17) {
          v191.write(v192);
        }
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v193.write(v194);
          }
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v195.write(v196);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v585 = sequence$$13.length;
  var v526 = v585 <= firstIndexToMutate;
  var v586 = !v526;
  if (v586) {
    v526 = lastIndexToMutate < 0;
  }
  var v422 = v526;
  var v527 = !v422;
  if (v527) {
    v422 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v422;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v423 = Math.random();
    var v202 = v423 * maxNum;
    introspect(JAM.policy.p18) {
      randNum = Math.floor(v202);
    }
    var v424 = randNum < firstIndexToMutate;
    var v528 = !v424;
    if (v528) {
      v424 = randNum > lastIndexToMutate;
    }
    var v203 = v424;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p18) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v425 = Math.random();
      var v426 = components$$1.length;
      var v204 = v425 * v426;
      introspect(JAM.policy.p18) {
        componentsIndex = Math.round(v204);
      }
      var v427 = components$$1.length;
      var v205 = componentsIndex == v427;
      if (v205) {
        componentsIndex = 0;
      }
      var v428 = components$$1[componentsIndex];
      var v206 = v428 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v429 = sequence$$13.substring(0, randNum)
    }
    var v430 = components$$1[componentsIndex];
    var v207 = v429 + v430;
    var v431 = randNum + 1;
    var v432 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v208 = sequence$$13.substring(v431, v432)
    }
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v210.write(v211);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v433 = Math.random();
    var v434 = components$$2.length;
    var v212 = v433 * v434;
    introspect(JAM.policy.p18) {
      tempNum$$1 = Math.floor(v212);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v435 = sequence$$14.length;
    var v215 = v435 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v213.write(v214);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v217.write(v218);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    introspect(JAM.policy.p13) {
      var v219 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v219.length;
    var v587 = sequence$$15.length;
    var v529 = v587 - lookAhead;
    var v530 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v436 = sequence$$15.substring(v529, v530)
    }
    var v220 = v436 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v224 = outputWindow.document;
  var v588 = '<tr><td class="title" width="200px">' + "Site:";
  var v531 = v588 + '</td><td class="title">';
  var v437 = v531 + "Positions:";
  var v225 = v437 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v224.write(v225);
  }
  var i$$9 = 0;
  var v438 = arrayOfItems.length;
  var v241 = i$$9 < v438;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v439 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v226 = v439.match(/\/.+\//)
    }
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v589 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v532 = v589.match(/\)\D*\d+/)
    }
    var v440 = v532.toString();
    introspect(JAM.policy.p15) {
      var v227 = v440.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v227);
    introspect(JAM.policy.p17) {
      var v233 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v441 = matchPosition >= lowerLimit;
      if (v441) {
        v441 = matchPosition < upperLimit;
      }
      var v231 = v441;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v442 = matchPosition - shiftValue;
        var v230 = v442 + 1;
        tempString$$1 = v229 + v230;
      }
      var v443 = matchExp.lastIndex;
      var v533 = RegExp.lastMatch;
      var v444 = v533.length;
      var v232 = v443 - v444;
      matchExp.lastIndex = v232 + 1;
      introspect(JAM.policy.p17) {
        v233 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p18) {
      var v445 = tempString$$1.search(/\d/)
    }
    var v234 = v445 != -1;
    if (v234) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v677 = '<tr><td class="' + backGroundClass;
    var v662 = v677 + '">';
    var v701 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v690 = v701.match(/\([^\(]+\)/)
    }
    var v678 = v690.toString();
    introspect(JAM.policy.p15) {
      var v663 = v678.replace(/\(|\)/g, "")
    }
    var v647 = v662 + v663;
    var v627 = v647 + '</td><td class="';
    var v590 = v627 + backGroundClass;
    var v534 = v590 + '">';
    var v446 = v534 + tempString$$1;
    var v240 = v446 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v239.write(v240);
    }
    timesFound = 0;
    i$$9++;
    var v447 = arrayOfItems.length;
    v241 = i$$9 < v447;
  }
  var v242 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v242.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v243.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v244 = outputWindow.document;
  var v648 = '<tr><td class="title">' + "Pattern:";
  var v628 = v648 + '</td><td class="title">';
  var v591 = v628 + "Times found:";
  var v535 = v591 + '</td><td class="title">';
  var v448 = v535 + "Percentage:";
  var v245 = v448 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v244.write(v245);
  }
  var i$$10 = 0;
  var v449 = arrayOfItems$$1.length;
  var v254 = i$$10 < v449;
  for (;v254;) {
    var tempNumber = 0;
    var v450 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v246 = v450.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v451 = sequence$$16.search(matchExp$$1)
    }
    var v248 = v451 != -1;
    if (v248) {
      introspect(JAM.policy.p17) {
        var v247 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v536 = originalLength + 1;
    var v629 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v592 = v629.match(/\d+/)
    }
    var v537 = parseFloat(v592);
    var v452 = v536 - v537;
    var v251 = v452 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v453 = originalLength + 1;
      var v593 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p18) {
        var v538 = v593.match(/\d+/)
      }
      var v454 = parseFloat(v538);
      var v250 = v453 - v454;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v702 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v691 = v702.match(/\([^\(]+\)\b/)
    }
    var v679 = v691.toString();
    introspect(JAM.policy.p15) {
      var v664 = v679.replace(/\(|\)/g, "")
    }
    var v649 = "<tr><td>" + v664;
    var v630 = v649 + "</td><td>";
    var v594 = v630 + tempNumber;
    var v539 = v594 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v540 = percentage.toFixed(2)
    }
    var v455 = v539 + v540;
    var v253 = v455 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v252.write(v253);
    }
    i$$10++;
    var v456 = arrayOfItems$$1.length;
    v254 = i$$10 < v456;
  }
  var v255 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v255.write("</tbody></table>\n");
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
  var v457 = sequence$$17.length;
  var v262 = v457 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v458 = Math.random();
    var v256 = v458 * maxNum$$1;
    introspect(JAM.policy.p18) {
      randNum$$1 = Math.floor(v256);
    }
    introspect(JAM.policy.p18) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v257, v258);
    }
    sequence$$17 = tempString1 + tempString2;
    var v459 = tempSeq.length;
    var v261 = v459 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v259.write(v260);
      }
      tempSeq = "";
    }
    var v460 = sequence$$17.length;
    v262 = v460 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v263.write(v264);
  }
  return true;
}
function proteinPattern() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v461 = testScript();
  var v265 = v461 == false;
  if (v265) {
    return;
  }
  var re$$3;
  var matches = new Array;
  var v680 = theDocument.forms;
  var v665 = v680[0];
  var v650 = v665.elements;
  var v631 = v650[0];
  var v595 = checkFormElement(v631);
  var v541 = v595 == false;
  var v597 = !v541;
  if (v597) {
    var v692 = theDocument.forms;
    var v681 = v692[0];
    var v666 = v681.elements;
    var v651 = v666[0];
    var v632 = v651.value;
    var v596 = checkSequenceLength(v632, maxInput$$3);
    v541 = v596 == false;
  }
  var v462 = v541;
  var v543 = !v462;
  if (v543) {
    var v667 = theDocument.forms;
    var v652 = v667[0];
    var v633 = v652.elements;
    var v598 = v633[1];
    var v542 = checkFormElement(v598);
    v462 = v542 == false;
  }
  var v266 = v462;
  if (v266) {
    return;
  }
  var v668 = theDocument.forms;
  var v653 = v668[0];
  var v634 = v653.elements;
  var v599 = v634[1];
  var v544 = v599.value;
  introspect(JAM.policy.p15) {
    var v463 = v544.replace(/\//g, "")
  }
  var v267 = "/" + v463;
  re$$3 = v267 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    re$$3 = eval(re$$3);
    var testString$$1 = "teststring";
    introspect(JAM.policy.p19) {
      testString$$1 = testString$$1.replace(re$$3, "");
    }
  } catch (e$$5) {
    alert("The regular expression is not formatted correctly.");
    return;
  }
  openWindow();
  openPre();
  var v635 = theDocument.forms;
  var v600 = v635[0];
  var v545 = v600.elements;
  var v464 = v545[0];
  var v268 = v464.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v465 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v465;
  for (;v274;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newProtein = removeNonProteinStrict(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(newProtein);
    introspect(JAM.policy.p17) {
      v271.write(v272);
    }
    writeProteinPattern(newProtein, re$$3);
    var v273 = outputWindow.document;
    introspect(JAM.policy.p12) {
      v273.write("\n\n");
    }
    i$$11++;
    var v466 = arrayOfFasta$$1.length;
    v274 = i$$11 < v466;
  }
  closePre();
  closeWindow();
  return;
}
function writeProteinPattern(proteinSequence$$1, re$$4) {
  var matchArray$$2;
  var matchPosition$$1;
  var matchCount = 0;
  var simplePattern = re$$4.toString();
  introspect(JAM.policy.p15) {
    simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  }
  introspect(JAM.policy.p17) {
    var v279 = matchArray$$2 = re$$4.exec(proteinSequence$$1)
  }
  for (;v279;) {
    matchCount++;
    var match_end = re$$4.lastIndex;
    var v546 = RegExp.lastMatch;
    var v467 = v546.length;
    var v275 = match_end - v467;
    var match_start = v275 + 1;
    var v276 = outputWindow.document;
    var v703 = "&gt;match number " + matchCount;
    var v693 = v703 + ' to "';
    var v682 = v693 + simplePattern;
    var v669 = v682 + '" start=';
    var v654 = v669 + match_start;
    var v636 = v654 + " end=";
    var v601 = v636 + match_end;
    var v547 = v601 + "\n";
    var v602 = matchArray$$2[0];
    var v548 = addReturns(v602);
    var v468 = v547 + v548;
    var v277 = v468 + "\n\n";
    introspect(JAM.policy.p17) {
      v276.write(v277);
    }
    var v469 = re$$4.lastIndex;
    var v549 = RegExp.lastMatch;
    var v470 = v549.length;
    var v278 = v469 - v470;
    re$$4.lastIndex = v278 + 1;
    introspect(JAM.policy.p17) {
      v279 = matchArray$$2 = re$$4.exec(proteinSequence$$1);
    }
  }
  var v471 = matchCount > 0;
  var v281 = !v471;
  if (v281) {
    var v280 = outputWindow.document;
    introspect(JAM.policy.p12) {
      v280.write("no matches found for this sequence.\n\n");
    }
  }
  return;
}
document.onload = v2;
introspect(JAM.policy.p12) {
  var v282 = document.getElementById("submitbtn")
}
v282.onclick = v3;
introspect(JAM.policy.p12) {
  var v283 = document.getElementById("clearbtn")
}
v283.onclick = v4

JAM.stopProfile('load');
