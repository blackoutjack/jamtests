
JAM.startProfile('load');
function v4() {
  var v550 = document.forms;
  var v474 = v550[0];
  var v286 = v474.elements;
  var v5 = v286[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    revComp(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v287 = document.main_form;
  var v7 = v287.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v288 = arrayOfSequences.length;
  var v9 = v288 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v11 = i$$1 < v289;
  for (;v11;) {
    var v603 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v551 = v603.search(/\S/)
    }
    var v475 = v551 == -1;
    var v553 = !v475;
    if (v553) {
      var v604 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v552 = v604.search(/\S/)
      }
      v475 = v552 == -1;
    }
    var v290 = v475;
    var v477 = !v290;
    if (v477) {
      var v554 = arrayOfSequences[i$$1];
      var v476 = v554.length;
      v290 = v476 != lengthOfAlign;
    }
    var v10 = v290;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v291 = arrayOfTitles.length;
    v11 = i$$1 < v291;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v640 = codonTable.search(/AmAcid/)
  }
  var v605 = v640 == -1;
  var v642 = !v605;
  if (v642) {
    introspect(JAM.policy.p17) {
      var v641 = codonTable.search(/Codon/)
    }
    v605 = v641 == -1;
  }
  var v555 = v605;
  var v607 = !v555;
  if (v607) {
    introspect(JAM.policy.p17) {
      var v606 = codonTable.search(/Number/)
    }
    v555 = v606 == -1;
  }
  var v478 = v555;
  var v557 = !v478;
  if (v557) {
    introspect(JAM.policy.p17) {
      var v556 = codonTable.search(/\/1000/)
    }
    v478 = v556 == -1;
  }
  var v292 = v478;
  var v480 = !v292;
  if (v480) {
    introspect(JAM.policy.p17) {
      var v479 = codonTable.search(/Fraction\s*\.\./)
    }
    v292 = v479 == -1;
  }
  var v12 = v292;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v481 = formElement.value;
  introspect(JAM.policy.p17) {
    var v293 = v481.search(/\S/)
  }
  var v13 = v293 == -1;
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
  var v294 = arrayOfPatterns.length;
  var v16 = z$$2 < v294;
  for (;v16;) {
    var v482 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v295 = v482.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v295 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v483 = arrayOfPatterns[z$$2];
    var v296 = moreExpressionCheck(v483);
    var v15 = v296 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v16 = z$$2 < v297;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v22 = j < v298;
  for (;v22;) {
    var v484 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v299 = v484.match(/\/.+\//)
    }
    var v19 = v299 + "gi";
    var v743 = eval(v19);
    geneticCodeMatchExp[j] = v743;
    var v300 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v20 = v300.match(/=[a-zA-Z\*]/)
    }
    var v744 = v20.toString();
    geneticCodeMatchResult[j] = v744;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v745 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v745;
    j++;
    var v301 = arrayOfPatterns.length;
    v22 = j < v301;
  }
  var i$$2 = 0;
  var v485 = testSequence.length;
  var v302 = v485 - 3;
  var v29 = i$$2 <= v302;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v303 = geneticCodeMatchExp.length;
    var v27 = j < v303;
    for (;v27;) {
      var v486 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p15) {
        var v304 = codon.search(v486)
      }
      var v26 = v304 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v305 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v305 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v306 = geneticCodeMatchExp.length;
      v27 = j < v306;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v487 = testSequence.length;
    var v307 = v487 - 3;
    v29 = i$$2 <= v307;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v308;
  for (;v31;) {
    var v488 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v309 = v488.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v309 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v310;
  }
  var i$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v311;
  for (;v35;) {
    var v489 = arrayOfPatterns$$1[i$$3];
    var v312 = "[" + v489;
    var v32 = v312 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v313;
    for (;v34;) {
      var v490 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p15) {
        var v314 = v490.search(re)
      }
      var v33 = v314 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v315 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v315;
    }
    i$$3++;
    var v316 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v316;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v317 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v317;
  for (;v38;) {
    var v491 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v318 = v491.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v318 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v492 = arrayOfPatterns$$2[z$$4];
    var v319 = moreExpressionCheck(v492);
    var v37 = v319 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v320 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v320;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v558 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v493 = v558.replace(/[^A-Za-z]/g, "")
  }
  var v321 = v493.length;
  var v40 = v321 > maxInput;
  if (v40) {
    var v322 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v322 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v323 = text$$8.length;
  var v42 = v323 > maxInput$$1;
  if (v42) {
    var v324 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v324 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v325 = alignArray.length;
  var v49 = v325 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v326 = alignArray.length;
  var v51 = i$$4 < v326;
  for (;v51;) {
    var v494 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v327 = v494.search(/[^\s]+\s/)
    }
    var v50 = v327 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v328 = alignArray.length;
    v51 = i$$4 < v328;
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
  introspect(JAM.policy.p17) {
    var v329 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v329 != -1;
  if (v54) {
    introspect(JAM.policy.p15) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p15) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p15) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v330 = sequence$$2.length;
  var v55 = "&gt;results for " + v330;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v331 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v331 != -1;
  if (v57) {
    var v332 = stringToReturn + '"';
    var v56 = v332 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v333 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v334 = sequence$$2.substring(0, 10)
  }
  var v58 = v333 + v334;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v335 = sequenceOne.length;
  var v59 = "Search results for " + v335;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v336 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v336 != -1;
  if (v61) {
    var v337 = stringToReturn$$1 + '"';
    var v60 = v337 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v338 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v339 = sequenceOne.substring(0, 10)
  }
  var v62 = v338 + v339;
  stringToReturn$$1 = v62 + '"\n';
  var v340 = stringToReturn$$1 + "and ";
  var v341 = sequenceTwo.length;
  var v63 = v340 + v341;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v342 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v342 != -1;
  if (v65) {
    var v343 = stringToReturn$$1 + '"';
    var v64 = v343 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v345 = sequenceTwo.substring(0, 10)
  }
  var v66 = v344 + v345;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v346 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v346;
  for (;v70;) {
    var v495 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v347 = v495.match(/\/.+\//)
    }
    var v69 = v347 + "gi";
    var v746 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v746;
    j$$2++;
    var v348 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v348;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v349 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v349;
  for (;v74;) {
    var v350 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v72 = v350.match(/=[a-zA-Z\*]/)
    }
    var v747 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v747;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v748 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v748;
    j$$3++;
    var v351 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v351;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v352 = sequence$$3.length;
  var v75 = "Results for " + v352;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v353 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v353 != -1;
  if (v77) {
    var v354 = stringToReturn$$2 + '"';
    var v76 = v354 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v355 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v356 = sequence$$3.substring(0, 10)
  }
  var v78 = v355 + v356;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v496 = "Results for " + topology;
  var v357 = v496 + " ";
  var v358 = sequence$$4.length;
  var v80 = v357 + v358;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v359 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v359 != -1;
  if (v82) {
    var v360 = stringToReturn$$3 + '"';
    var v81 = v360 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v361 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v362 = sequence$$4.substring(0, 10)
  }
  var v83 = v361 + v362;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v363 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v363;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v364 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v364 != -1;
  if (v87) {
    var v365 = stringToReturn$$4 + '"';
    var v86 = v365 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v366 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v367 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v366 + v367;
  stringToReturn$$4 = v88 + '"\n';
  var v368 = stringToReturn$$4 + "and ";
  var v369 = sequenceTwo$$1.length;
  var v89 = v368 + v369;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v370 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v370 != -1;
  if (v91) {
    var v371 = stringToReturn$$4 + '"';
    var v90 = v371 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v372 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v373 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v372 + v373;
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
    var v374 = Math.random();
    var v375 = components.length;
    var v94 = v374 * v375;
    introspect(JAM.policy.p17) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p15) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p12) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p17) {
    var v376 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v376 != -1;
  if (v96) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p17) {
    var v377 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v377 != -1;
  if (v98) {
    introspect(JAM.policy.p16) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
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
  introspect(JAM.policy.p17) {
    var v721 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v714 = v721 != -1;
  var v723 = !v714;
  if (v723) {
    introspect(JAM.policy.p17) {
      var v722 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v714 = v722 != -1;
  }
  var v705 = v714;
  var v716 = !v705;
  if (v716) {
    introspect(JAM.policy.p17) {
      var v715 = expressionToCheck.search(/\[\]/)
    }
    v705 = v715 != -1;
  }
  var v696 = v705;
  var v707 = !v696;
  if (v707) {
    introspect(JAM.policy.p17) {
      var v706 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v696 = v706 != -1;
  }
  var v679 = v696;
  var v698 = !v679;
  if (v698) {
    introspect(JAM.policy.p17) {
      var v697 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v679 = v697 != -1;
  }
  var v661 = v679;
  var v681 = !v661;
  if (v681) {
    introspect(JAM.policy.p17) {
      var v680 = expressionToCheck.search(/\|\|/)
    }
    v661 = v680 != -1;
  }
  var v643 = v661;
  var v663 = !v643;
  if (v663) {
    introspect(JAM.policy.p17) {
      var v662 = expressionToCheck.search(/\/\|/)
    }
    v643 = v662 != -1;
  }
  var v608 = v643;
  var v645 = !v608;
  if (v645) {
    introspect(JAM.policy.p17) {
      var v644 = expressionToCheck.search(/\|\//)
    }
    v608 = v644 != -1;
  }
  var v559 = v608;
  var v610 = !v559;
  if (v610) {
    introspect(JAM.policy.p17) {
      var v609 = expressionToCheck.search(/\[.\]/)
    }
    v559 = v609 != -1;
  }
  var v497 = v559;
  var v561 = !v497;
  if (v561) {
    introspect(JAM.policy.p17) {
      var v560 = expressionToCheck.search(/\</)
    }
    v497 = v560 != -1;
  }
  var v378 = v497;
  var v499 = !v378;
  if (v499) {
    introspect(JAM.policy.p17) {
      var v498 = expressionToCheck.search(/\>/)
    }
    v378 = v498 != -1;
  }
  var v99 = v378;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
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
  var v104 = outputWindow.document;
  var v562 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v500 = v562 + "<head>\n";
  var v379 = v500 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p15) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v728 = v732 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.info {font-weight: bold}\n";
    var v717 = v724 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v717 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v699 = v708 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v682 = v699 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v682 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v646 = v664 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v611 = v646 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v563 = v611 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v501 = v563 + "td.many {color: #000000}\n";
    var v380 = v501 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v380 + "</style>\n";
    introspect(JAM.policy.p15) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v737 = v740 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v737 + "div.title {display: none}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v725 = v729 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v725 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v709 = v718 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v700 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v683 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v665 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v612 = v647 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v564 = v612 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v502 = v564 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v381 = v502 + "img {display: none}\n";
    var v109 = v381 + "</style>\n";
    introspect(JAM.policy.p15) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v565 = "</head>\n" + '<body class="main">\n';
  var v503 = v565 + '<div class="title">';
  var v382 = v503 + title$$6;
  var v111 = v382 + " results</div>\n";
  introspect(JAM.policy.p15) {
    v110.write(v111);
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
  var v112 = outputWindow.document;
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v504 = v566 + "<head>\n";
  var v383 = v504 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p15) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v738 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v734 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v726 = v730 + "div.info {font-weight: bold}\n";
    var v719 = v726 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v710 = v719 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v701 = v710 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v684 = v701 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v666 = v684 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v648 = v666 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v613 = v648 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v567 = v613 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v505 = v567 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v384 = v505 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v384 + "</style>\n";
    introspect(JAM.policy.p15) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v741 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v739 = v741 + "div.title {display: none}\n";
    var v735 = v739 + "div.info {font-weight: bold}\n";
    var v731 = v735 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v727 = v731 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v720 = v727 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v711 = v720 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v702 = v711 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v685 = v702 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v667 = v685 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v649 = v667 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v614 = v649 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v568 = v614 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v506 = v568 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v385 = v506 + "img {display: none}\n";
    var v117 = v385 + "</style>\n";
    introspect(JAM.policy.p15) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v507 = v569 + '<div class="title">';
  var v386 = v507 + title$$8;
  var v119 = v386 + " results</div>\n";
  introspect(JAM.policy.p15) {
    v118.write(v119);
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
  introspect(JAM.policy.p17) {
    var v387 = dnaSequence$$1.search(/./)
  }
  var v120 = v387 != -1;
  if (v120) {
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p15) {
    testArray.push(testString);
  }
  var v388 = testArray[0];
  var v124 = v388 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p15) {
    var v389 = testString.search(re$$2)
  }
  var v125 = v389 == -1;
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
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v390 = testNum.toFixed(3)
  }
  var v128 = v390 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v391 = testNum.toPrecision(5)
  }
  var v129 = v391 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v392 = theNumber$$1.search(/\d/)
  }
  var v130 = v392 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v615 = emblFile.search(/ID/)
  }
  var v570 = v615 == -1;
  var v617 = !v570;
  if (v617) {
    introspect(JAM.policy.p17) {
      var v616 = emblFile.search(/AC/)
    }
    v570 = v616 == -1;
  }
  var v508 = v570;
  var v572 = !v508;
  if (v572) {
    introspect(JAM.policy.p17) {
      var v571 = emblFile.search(/DE/)
    }
    v508 = v571 == -1;
  }
  var v393 = v508;
  var v510 = !v393;
  if (v510) {
    introspect(JAM.policy.p17) {
      var v509 = emblFile.search(/SQ/)
    }
    v393 = v509 == -1;
  }
  var v131 = v393;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v394 = theNumber$$2.search(/\d/)
  }
  var v132 = v394 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v395 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v395 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v396 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v396 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v397 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v397 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v618 = genBankFile.search(/LOCUS/)
  }
  var v573 = v618 == -1;
  var v620 = !v573;
  if (v620) {
    introspect(JAM.policy.p17) {
      var v619 = genBankFile.search(/DEFINITION/)
    }
    v573 = v619 == -1;
  }
  var v511 = v573;
  var v575 = !v511;
  if (v575) {
    introspect(JAM.policy.p17) {
      var v574 = genBankFile.search(/ACCESSION/)
    }
    v511 = v574 == -1;
  }
  var v398 = v511;
  var v513 = !v398;
  if (v513) {
    introspect(JAM.policy.p17) {
      var v512 = genBankFile.search(/ORIGIN/)
    }
    v398 = v512 == -1;
  }
  var v137 = v398;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v621 = genBankFile$$1.search(/LOCUS/)
  }
  var v576 = v621 == -1;
  var v623 = !v576;
  if (v623) {
    introspect(JAM.policy.p17) {
      var v622 = genBankFile$$1.search(/DEFINITION/)
    }
    v576 = v622 == -1;
  }
  var v514 = v576;
  var v578 = !v514;
  if (v578) {
    introspect(JAM.policy.p17) {
      var v577 = genBankFile$$1.search(/ACCESSION/)
    }
    v514 = v577 == -1;
  }
  var v399 = v514;
  var v516 = !v399;
  if (v516) {
    introspect(JAM.policy.p17) {
      var v515 = genBankFile$$1.search(/ORIGIN/)
    }
    v399 = v515 == -1;
  }
  var v138 = v399;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v400 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v400 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v624 = emblFile$$1.search(/ID/)
  }
  var v579 = v624 == -1;
  var v626 = !v579;
  if (v626) {
    introspect(JAM.policy.p17) {
      var v625 = emblFile$$1.search(/AC/)
    }
    v579 = v625 == -1;
  }
  var v517 = v579;
  var v581 = !v517;
  if (v581) {
    introspect(JAM.policy.p17) {
      var v580 = emblFile$$1.search(/DE/)
    }
    v517 = v580 == -1;
  }
  var v401 = v517;
  var v519 = !v401;
  if (v519) {
    introspect(JAM.policy.p17) {
      var v518 = emblFile$$1.search(/SQ/)
    }
    v401 = v518 == -1;
  }
  var v140 = v401;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v402 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v402 == -1;
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
    var v403 = basePerLine / groupSize;
    var v145 = j$$6 <= v403;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v404 = k + i$$5;
        introspect(JAM.policy.p15) {
          var v143 = text$$10.charAt(v404)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v405 = basePerLine / groupSize;
      v145 = j$$6 <= v405;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p15) {
      v146.write(v147);
    }
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v406 = adjustment < 0;
    if (v406) {
      v406 = adjusted >= 0;
    }
    var v149 = v406;
    if (v149) {
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v407 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v407;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v408 = i$$6 + k$$1;
        var v150 = v408 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v409 = k$$1 + i$$6;
        introspect(JAM.policy.p15) {
          var v152 = text$$12.charAt(v409)
        }
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v410 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v410, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v411 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v411;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v582 = adjustNumbering(lineNum, numberingAdjustment);
      var v520 = rightNum(v582, "", 8, tabIn$$3);
      var v412 = v520 + lineOfText$$1;
      var v160 = v412 + "\n";
      introspect(JAM.policy.p15) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v583 = adjustNumbering(lineNum, numberingAdjustment);
        var v521 = rightNum(v583, "", 8, tabIn$$3);
        var v522 = complement(lineOfText$$1);
        var v413 = v521 + v522;
        var v162 = v413 + "\n";
        introspect(JAM.policy.p15) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v523 = lineOfText$$1;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v414 = v523 + v524;
        var v166 = v414 + "\n";
        introspect(JAM.policy.p15) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v415 = v525 + v526;
          var v168 = v415 + "\n";
          introspect(JAM.policy.p15) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p12) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p15) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p15) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v416 = complement(lineOfText$$1);
            var v176 = v416 + "\n";
            introspect(JAM.policy.p15) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p12) {
              v177.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v417 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v417;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v418 = i$$7 + k$$2;
        var v183 = v418 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v419 = k$$2 + i$$7;
        introspect(JAM.policy.p15) {
          var v184 = text$$13.charAt(v419)
        }
        lineOfText$$2 = lineOfText$$2 + v184;
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v187 = numberPosition$$2 == "above";
      if (v187) {
        var v186 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v186;
      }
      var v188 = i$$7 >= stopBase$$3;
      if (v188) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v420 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v420;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v421 = v527 + lineOfText$$2;
      var v191 = v421 + "\n";
      introspect(JAM.policy.p15) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v422 = lineOfText$$2 + i$$7;
        var v193 = v422 + "\n";
        introspect(JAM.policy.p15) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p15) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p15) {
            v196.write(v197);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
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
  var v584 = sequence$$13.length;
  var v528 = v584 <= firstIndexToMutate;
  var v585 = !v528;
  if (v585) {
    v528 = lastIndexToMutate < 0;
  }
  var v423 = v528;
  var v529 = !v423;
  if (v529) {
    v423 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v423;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v424 = Math.random();
    var v203 = v424 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v203);
    }
    var v425 = randNum < firstIndexToMutate;
    var v530 = !v425;
    if (v530) {
      v425 = randNum > lastIndexToMutate;
    }
    var v204 = v425;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v426 = Math.random();
      var v427 = components$$1.length;
      var v205 = v426 * v427;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v205);
      }
      var v428 = components$$1.length;
      var v206 = componentsIndex == v428;
      if (v206) {
        componentsIndex = 0;
      }
      var v429 = components$$1[componentsIndex];
      var v207 = v429 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v430 = sequence$$13.substring(0, randNum)
    }
    var v431 = components$$1[componentsIndex];
    var v208 = v430 + v431;
    var v432 = randNum + 1;
    var v433 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v432, v433)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p15) {
    v211.write(v212);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v434 = Math.random();
    var v435 = components$$2.length;
    var v213 = v434 * v435;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v436 = sequence$$14.length;
    var v216 = v436 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p15) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p15) {
    v218.write(v219);
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
  var v223 = dnaConformation == "circular";
  if (v223) {
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v220.length;
    var v586 = sequence$$15.length;
    var v531 = v586 - lookAhead;
    var v532 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v437 = sequence$$15.substring(v531, v532)
    }
    var v221 = v437 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v587 = '<tr><td class="title" width="200px">' + "Site:";
  var v533 = v587 + '</td><td class="title">';
  var v438 = v533 + "Positions:";
  var v226 = v438 + "</td></tr>\n";
  introspect(JAM.policy.p15) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v439 = arrayOfItems.length;
  var v242 = i$$9 < v439;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v440 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v227 = v440.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v588 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v534 = v588.match(/\)\D*\d+/)
    }
    var v441 = v534.toString();
    introspect(JAM.policy.p16) {
      var v228 = v441.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p15) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v442 = matchPosition >= lowerLimit;
      if (v442) {
        v442 = matchPosition < upperLimit;
      }
      var v232 = v442;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v443 = matchPosition - shiftValue;
        var v231 = v443 + 1;
        tempString$$1 = v230 + v231;
      }
      var v444 = matchExp.lastIndex;
      var v535 = RegExp.lastMatch;
      var v445 = v535.length;
      var v233 = v444 - v445;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p15) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v446 = tempString$$1.search(/\d/)
    }
    var v235 = v446 != -1;
    if (v235) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v239 = timesFound == 0;
    if (v239) {
      backGroundClass = "none";
    } else {
      var v238 = timesFound == 1;
      if (v238) {
        backGroundClass = "one";
      } else {
        var v237 = timesFound == 2;
        if (v237) {
          backGroundClass = "two";
        } else {
          var v236 = timesFound == 3;
          if (v236) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v240 = outputWindow.document;
    var v686 = '<tr><td class="' + backGroundClass;
    var v668 = v686 + '">';
    var v712 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v703 = v712.match(/\([^\(]+\)/)
    }
    var v687 = v703.toString();
    introspect(JAM.policy.p16) {
      var v669 = v687.replace(/\(|\)/g, "")
    }
    var v650 = v668 + v669;
    var v627 = v650 + '</td><td class="';
    var v589 = v627 + backGroundClass;
    var v536 = v589 + '">';
    var v447 = v536 + tempString$$1;
    var v241 = v447 + "</td></tr>\n";
    introspect(JAM.policy.p15) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v448 = arrayOfItems.length;
    v242 = i$$9 < v448;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v651 = '<tr><td class="title">' + "Pattern:";
  var v628 = v651 + '</td><td class="title">';
  var v590 = v628 + "Times found:";
  var v537 = v590 + '</td><td class="title">';
  var v449 = v537 + "Percentage:";
  var v246 = v449 + "</td></tr>\n";
  introspect(JAM.policy.p15) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v450 = arrayOfItems$$1.length;
  var v255 = i$$10 < v450;
  for (;v255;) {
    var tempNumber = 0;
    var v451 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v247 = v451.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p15) {
      var v452 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v452 != -1;
    if (v249) {
      introspect(JAM.policy.p15) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v538 = originalLength + 1;
    var v629 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v591 = v629.match(/\d+/)
    }
    var v539 = parseFloat(v591);
    var v453 = v538 - v539;
    var v252 = v453 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v454 = originalLength + 1;
      var v592 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v540 = v592.match(/\d+/)
      }
      var v455 = parseFloat(v540);
      var v251 = v454 - v455;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v713 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v704 = v713.match(/\([^\(]+\)\b/)
    }
    var v688 = v704.toString();
    introspect(JAM.policy.p16) {
      var v670 = v688.replace(/\(|\)/g, "")
    }
    var v652 = "<tr><td>" + v670;
    var v630 = v652 + "</td><td>";
    var v593 = v630 + tempNumber;
    var v541 = v593 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v542 = percentage.toFixed(2)
    }
    var v456 = v541 + v542;
    var v254 = v456 + "</td></tr>\n";
    introspect(JAM.policy.p15) {
      v253.write(v254);
    }
    i$$10++;
    var v457 = arrayOfItems$$1.length;
    v255 = i$$10 < v457;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v256.write("</tbody></table>\n");
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
  var v458 = sequence$$17.length;
  var v263 = v458 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v459 = Math.random();
    var v257 = v459 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p17) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v460 = tempSeq.length;
    var v262 = v460 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p15) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v461 = sequence$$17.length;
    v263 = v461 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p15) {
    v264.write(v265);
  }
  return true;
}
function revComp(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v462 = testScript();
  var v266 = v462 == false;
  if (v266) {
    return false;
  }
  var v671 = theDocument.forms;
  var v653 = v671[0];
  var v631 = v653.elements;
  var v594 = v631[0];
  var v543 = checkFormElement(v594);
  var v463 = v543 == false;
  var v545 = !v463;
  if (v545) {
    var v689 = theDocument.forms;
    var v672 = v689[0];
    var v654 = v672.elements;
    var v632 = v654[0];
    var v595 = v632.value;
    var v544 = checkSequenceLength(v595, maxInput$$3);
    v463 = v544 == false;
  }
  var v267 = v463;
  if (v267) {
    return false;
  }
  openWindow("Reverse Complement");
  openPre();
  var v633 = theDocument.forms;
  var v596 = v633[0];
  var v546 = v596.elements;
  var v464 = v546[0];
  var v268 = v464.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v465 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v465;
  for (;v283;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newDna = removeNonDna(newDna);
    var v690 = theDocument.forms;
    var v673 = v690[0];
    var v655 = v673.elements;
    var v634 = v655[4];
    var v597 = v634.options;
    var v691 = theDocument.forms;
    var v674 = v691[0];
    var v656 = v674.elements;
    var v635 = v656[4];
    var v598 = v635.selectedIndex;
    var v547 = v597[v598];
    var v466 = v547.value;
    var v280 = v466 == "reverse-complement";
    if (v280) {
      var v271 = outputWindow.document;
      var v467 = ">" + title$$9;
      var v272 = v467 + " reverse complement\n";
      introspect(JAM.policy.p15) {
        v271.write(v272);
      }
      var v273 = complement(newDna);
      newDna = reverse(v273);
    } else {
      var v692 = theDocument.forms;
      var v675 = v692[0];
      var v657 = v675.elements;
      var v636 = v657[4];
      var v599 = v636.options;
      var v693 = theDocument.forms;
      var v676 = v693[0];
      var v658 = v676.elements;
      var v637 = v658[4];
      var v600 = v637.selectedIndex;
      var v548 = v599[v600];
      var v468 = v548.value;
      var v279 = v468 == "reverse";
      if (v279) {
        var v274 = outputWindow.document;
        var v469 = ">" + title$$9;
        var v275 = v469 + " reverse\n";
        introspect(JAM.policy.p15) {
          v274.write(v275);
        }
        newDna = reverse(newDna);
      } else {
        var v694 = theDocument.forms;
        var v677 = v694[0];
        var v659 = v677.elements;
        var v638 = v659[4];
        var v601 = v638.options;
        var v695 = theDocument.forms;
        var v678 = v695[0];
        var v660 = v678.elements;
        var v639 = v660[4];
        var v602 = v639.selectedIndex;
        var v549 = v601[v602];
        var v470 = v549.value;
        var v278 = v470 == "complement";
        if (v278) {
          var v276 = outputWindow.document;
          var v471 = ">" + title$$9;
          var v277 = v471 + " complement\n";
          introspect(JAM.policy.p15) {
            v276.write(v277);
          }
          newDna = complement(newDna);
        }
      }
    }
    var v281 = outputWindow.document;
    var v472 = addReturns(newDna);
    var v282 = v472 + "\n\n";
    introspect(JAM.policy.p15) {
      v281.write(v282);
    }
    i$$11++;
    var v473 = arrayOfFasta$$1.length;
    v283 = i$$11 < v473;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
document.onload = v2;
introspect(JAM.policy.p12) {
  var v284 = document.getElementById("submitbtn")
}
v284.onclick = v3;
introspect(JAM.policy.p12) {
  var v285 = document.getElementById("clearbtn")
}
v285.onclick = v4

JAM.stopProfile('load');
