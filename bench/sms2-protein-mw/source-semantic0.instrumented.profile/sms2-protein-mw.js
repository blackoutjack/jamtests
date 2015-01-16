
JAM.startProfile('load');
function v4() {
  var v556 = document.forms;
  var v478 = v556[0];
  var v290 = v478.elements;
  var v5 = v290[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinMw(document);
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
  introspect(JAM.policy.p15) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
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
    var v608 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v557 = v608.search(/\S/)
    }
    var v479 = v557 == -1;
    var v559 = !v479;
    if (v559) {
      var v609 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v558 = v609.search(/\S/)
      }
      v479 = v558 == -1;
    }
    var v294 = v479;
    var v481 = !v294;
    if (v481) {
      var v560 = arrayOfSequences[i$$1];
      var v480 = v560.length;
      v294 = v480 != lengthOfAlign;
    }
    var v10 = v294;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v295 = arrayOfTitles.length;
    v11 = i$$1 < v295;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v644 = codonTable.search(/AmAcid/)
  }
  var v610 = v644 == -1;
  var v646 = !v610;
  if (v646) {
    introspect(JAM.policy.p16) {
      var v645 = codonTable.search(/Codon/)
    }
    v610 = v645 == -1;
  }
  var v561 = v610;
  var v612 = !v561;
  if (v612) {
    introspect(JAM.policy.p16) {
      var v611 = codonTable.search(/Number/)
    }
    v561 = v611 == -1;
  }
  var v482 = v561;
  var v563 = !v482;
  if (v563) {
    introspect(JAM.policy.p16) {
      var v562 = codonTable.search(/\/1000/)
    }
    v482 = v562 == -1;
  }
  var v296 = v482;
  var v484 = !v296;
  if (v484) {
    introspect(JAM.policy.p16) {
      var v483 = codonTable.search(/Fraction\s*\.\./)
    }
    v296 = v483 == -1;
  }
  var v12 = v296;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v485 = formElement.value;
  introspect(JAM.policy.p16) {
    var v297 = v485.search(/\S/)
  }
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
    var v486 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v299 = v486.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v299 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v487 = arrayOfPatterns[z$$2];
    var v300 = moreExpressionCheck(v487);
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
  var v22 = j < v302;
  for (;v22;) {
    var v488 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v303 = v488.match(/\/.+\//)
    }
    var v19 = v303 + "gi";
    var v737 = eval(v19);
    geneticCodeMatchExp[j] = v737;
    var v304 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v304.match(/=[a-zA-Z\*]/)
    }
    var v738 = v20.toString();
    geneticCodeMatchResult[j] = v738;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v739 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v739;
    j++;
    var v305 = arrayOfPatterns.length;
    v22 = j < v305;
  }
  var i$$2 = 0;
  var v489 = testSequence.length;
  var v306 = v489 - 3;
  var v29 = i$$2 <= v306;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v307 = geneticCodeMatchExp.length;
    var v27 = j < v307;
    for (;v27;) {
      var v490 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v308 = codon.search(v490)
      }
      var v26 = v308 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v309 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v309 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v310 = geneticCodeMatchExp.length;
      v27 = j < v310;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v491 = testSequence.length;
    var v311 = v491 - 3;
    v29 = i$$2 <= v311;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v312;
  for (;v31;) {
    var v492 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v313 = v492.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v313 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v314;
  }
  var i$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v315;
  for (;v35;) {
    var v493 = arrayOfPatterns$$1[i$$3];
    var v316 = "[" + v493;
    var v32 = v316 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v317;
    for (;v34;) {
      var v494 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v318 = v494.search(re)
      }
      var v33 = v318 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v319 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v319;
    }
    i$$3++;
    var v320 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v320;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v321 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v321;
  for (;v38;) {
    var v495 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v322 = v495.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v322 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v496 = arrayOfPatterns$$2[z$$4];
    var v323 = moreExpressionCheck(v496);
    var v37 = v323 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v324 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v324;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v564 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v497 = v564.replace(/[^A-Za-z]/g, "")
  }
  var v325 = v497.length;
  var v40 = v325 > maxInput;
  if (v40) {
    var v326 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v326 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v327 = text$$8.length;
  var v42 = v327 > maxInput$$1;
  if (v42) {
    var v328 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v328 + " characters.";
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
  var v329 = alignArray.length;
  var v49 = v329 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v330 = alignArray.length;
  var v51 = i$$4 < v330;
  for (;v51;) {
    var v498 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v331 = v498.search(/[^\s]+\s/)
    }
    var v50 = v331 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v332 = alignArray.length;
    v51 = i$$4 < v332;
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
    var v333 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v333 != -1;
  if (v54) {
    introspect(JAM.policy.p17) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p17) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v334 = sequence$$2.length;
  var v55 = "&gt;results for " + v334;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v335 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v335 != -1;
  if (v57) {
    var v336 = stringToReturn + '"';
    var v56 = v336 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v337 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v338 = sequence$$2.substring(0, 10)
  }
  var v58 = v337 + v338;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v339 = sequenceOne.length;
  var v59 = "Search results for " + v339;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v340 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v340 != -1;
  if (v61) {
    var v341 = stringToReturn$$1 + '"';
    var v60 = v341 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v342 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v343 = sequenceOne.substring(0, 10)
  }
  var v62 = v342 + v343;
  stringToReturn$$1 = v62 + '"\n';
  var v344 = stringToReturn$$1 + "and ";
  var v345 = sequenceTwo.length;
  var v63 = v344 + v345;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v346 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v346 != -1;
  if (v65) {
    var v347 = stringToReturn$$1 + '"';
    var v64 = v347 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v348 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v349 = sequenceTwo.substring(0, 10)
  }
  var v66 = v348 + v349;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v350 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v350;
  for (;v70;) {
    var v499 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v351 = v499.match(/\/.+\//)
    }
    var v69 = v351 + "gi";
    var v740 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v740;
    j$$2++;
    var v352 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v352;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v353 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v353;
  for (;v74;) {
    var v354 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v354.match(/=[a-zA-Z\*]/)
    }
    var v741 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v741;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v742 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v742;
    j$$3++;
    var v355 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v355;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v356 = sequence$$3.length;
  var v75 = "Results for " + v356;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v357 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v357 != -1;
  if (v77) {
    var v358 = stringToReturn$$2 + '"';
    var v76 = v358 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v359 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v360 = sequence$$3.substring(0, 10)
  }
  var v78 = v359 + v360;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v500 = "Results for " + topology;
  var v361 = v500 + " ";
  var v362 = sequence$$4.length;
  var v80 = v361 + v362;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v363 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v363 != -1;
  if (v82) {
    var v364 = stringToReturn$$3 + '"';
    var v81 = v364 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v365 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v366 = sequence$$4.substring(0, 10)
  }
  var v83 = v365 + v366;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v367 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v367;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v368 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v368 != -1;
  if (v87) {
    var v369 = stringToReturn$$4 + '"';
    var v86 = v369 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v370 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v371 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v370 + v371;
  stringToReturn$$4 = v88 + '"\n';
  var v372 = stringToReturn$$4 + "and ";
  var v373 = sequenceTwo$$1.length;
  var v89 = v372 + v373;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v374 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v374 != -1;
  if (v91) {
    var v375 = stringToReturn$$4 + '"';
    var v90 = v375 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v376 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v377 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v376 + v377;
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
    var v378 = Math.random();
    var v379 = components.length;
    var v94 = v378 * v379;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p16) {
    var v380 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v380 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v381 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v381 != -1;
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
  introspect(JAM.policy.p16) {
    var v715 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v708 = v715 != -1;
  var v717 = !v708;
  if (v717) {
    introspect(JAM.policy.p16) {
      var v716 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v708 = v716 != -1;
  }
  var v699 = v708;
  var v710 = !v699;
  if (v710) {
    introspect(JAM.policy.p16) {
      var v709 = expressionToCheck.search(/\[\]/)
    }
    v699 = v709 != -1;
  }
  var v690 = v699;
  var v701 = !v690;
  if (v701) {
    introspect(JAM.policy.p16) {
      var v700 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v690 = v700 != -1;
  }
  var v679 = v690;
  var v692 = !v679;
  if (v692) {
    introspect(JAM.policy.p16) {
      var v691 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v679 = v691 != -1;
  }
  var v663 = v679;
  var v681 = !v663;
  if (v681) {
    introspect(JAM.policy.p16) {
      var v680 = expressionToCheck.search(/\|\|/)
    }
    v663 = v680 != -1;
  }
  var v647 = v663;
  var v665 = !v647;
  if (v665) {
    introspect(JAM.policy.p16) {
      var v664 = expressionToCheck.search(/\/\|/)
    }
    v647 = v664 != -1;
  }
  var v613 = v647;
  var v649 = !v613;
  if (v649) {
    introspect(JAM.policy.p16) {
      var v648 = expressionToCheck.search(/\|\//)
    }
    v613 = v648 != -1;
  }
  var v565 = v613;
  var v615 = !v565;
  if (v615) {
    introspect(JAM.policy.p16) {
      var v614 = expressionToCheck.search(/\[.\]/)
    }
    v565 = v614 != -1;
  }
  var v501 = v565;
  var v567 = !v501;
  if (v567) {
    introspect(JAM.policy.p16) {
      var v566 = expressionToCheck.search(/\</)
    }
    v501 = v566 != -1;
  }
  var v382 = v501;
  var v503 = !v382;
  if (v503) {
    introspect(JAM.policy.p16) {
      var v502 = expressionToCheck.search(/\>/)
    }
    v382 = v502 != -1;
  }
  var v99 = v382;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v568 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v504 = v568 + "<head>\n";
  var v383 = v504 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v726 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v711 = v718 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v702 = v711 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v693 = v702 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v682 = v693 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v682 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v650 = v666 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v616 = v650 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v569 = v616 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v505 = v569 + "td.many {color: #000000}\n";
    var v384 = v505 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v384 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v731 = v734 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v731 + "div.title {display: none}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v719 = v723 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v712 = v719 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v703 = v712 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v694 = v703 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v694 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v667 = v683 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v667 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v617 = v651 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v570 = v617 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v506 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v385 = v506 + "img {display: none}\n";
    var v109 = v385 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v571 = "</head>\n" + '<body class="main">\n';
  var v507 = v571 + '<div class="title">';
  var v386 = v507 + title$$7;
  var v111 = v386 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v110.write(v111);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v508 = v572 + "<head>\n";
  var v387 = v508 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v732 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v728 = v732 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v724 = v728 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.info {font-weight: bold}\n";
    var v713 = v720 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v704 = v713 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v695 = v704 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v684 = v695 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v668 = v684 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v652 = v668 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v618 = v652 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v573 = v618 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v509 = v573 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v388 = v509 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v388 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v735 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v735 + "div.title {display: none}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v725 = v729 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v721 = v725 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v714 = v721 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v705 = v714 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v685 = v696 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v669 = v685 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v653 = v669 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v619 = v653 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v574 = v619 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v510 = v574 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v389 = v510 + "img {display: none}\n";
    var v117 = v389 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v511 = v575 + '<div class="title">';
  var v390 = v511 + title$$9;
  var v119 = v390 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v118.write(v119);
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
    var v391 = dnaSequence$$1.search(/./)
  }
  var v120 = v391 != -1;
  if (v120) {
    introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v392 = testArray[0];
  var v124 = v392 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v393 = testString.search(re$$2)
  }
  var v125 = v393 == -1;
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
    var v394 = testNum.toFixed(3)
  }
  var v128 = v394 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v395 = testNum.toPrecision(5)
  }
  var v129 = v395 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v396 = theNumber$$1.search(/\d/)
  }
  var v130 = v396 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v620 = emblFile.search(/ID/)
  }
  var v576 = v620 == -1;
  var v622 = !v576;
  if (v622) {
    introspect(JAM.policy.p16) {
      var v621 = emblFile.search(/AC/)
    }
    v576 = v621 == -1;
  }
  var v512 = v576;
  var v578 = !v512;
  if (v578) {
    introspect(JAM.policy.p16) {
      var v577 = emblFile.search(/DE/)
    }
    v512 = v577 == -1;
  }
  var v397 = v512;
  var v514 = !v397;
  if (v514) {
    introspect(JAM.policy.p16) {
      var v513 = emblFile.search(/SQ/)
    }
    v397 = v513 == -1;
  }
  var v131 = v397;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v398 = theNumber$$2.search(/\d/)
  }
  var v132 = v398 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v399 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v399 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v400 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v400 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v401 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v401 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v623 = genBankFile.search(/LOCUS/)
  }
  var v579 = v623 == -1;
  var v625 = !v579;
  if (v625) {
    introspect(JAM.policy.p16) {
      var v624 = genBankFile.search(/DEFINITION/)
    }
    v579 = v624 == -1;
  }
  var v515 = v579;
  var v581 = !v515;
  if (v581) {
    introspect(JAM.policy.p16) {
      var v580 = genBankFile.search(/ACCESSION/)
    }
    v515 = v580 == -1;
  }
  var v402 = v515;
  var v517 = !v402;
  if (v517) {
    introspect(JAM.policy.p16) {
      var v516 = genBankFile.search(/ORIGIN/)
    }
    v402 = v516 == -1;
  }
  var v137 = v402;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v626 = genBankFile$$1.search(/LOCUS/)
  }
  var v582 = v626 == -1;
  var v628 = !v582;
  if (v628) {
    introspect(JAM.policy.p16) {
      var v627 = genBankFile$$1.search(/DEFINITION/)
    }
    v582 = v627 == -1;
  }
  var v518 = v582;
  var v584 = !v518;
  if (v584) {
    introspect(JAM.policy.p16) {
      var v583 = genBankFile$$1.search(/ACCESSION/)
    }
    v518 = v583 == -1;
  }
  var v403 = v518;
  var v520 = !v403;
  if (v520) {
    introspect(JAM.policy.p16) {
      var v519 = genBankFile$$1.search(/ORIGIN/)
    }
    v403 = v519 == -1;
  }
  var v138 = v403;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v404 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v404 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v629 = emblFile$$1.search(/ID/)
  }
  var v585 = v629 == -1;
  var v631 = !v585;
  if (v631) {
    introspect(JAM.policy.p16) {
      var v630 = emblFile$$1.search(/AC/)
    }
    v585 = v630 == -1;
  }
  var v521 = v585;
  var v587 = !v521;
  if (v587) {
    introspect(JAM.policy.p16) {
      var v586 = emblFile$$1.search(/DE/)
    }
    v521 = v586 == -1;
  }
  var v405 = v521;
  var v523 = !v405;
  if (v523) {
    introspect(JAM.policy.p16) {
      var v522 = emblFile$$1.search(/SQ/)
    }
    v405 = v522 == -1;
  }
  var v140 = v405;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v406 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v406 == -1;
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
    var v407 = basePerLine / groupSize;
    var v145 = j$$6 <= v407;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v408 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v408)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v409 = basePerLine / groupSize;
      v145 = j$$6 <= v409;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
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
    var v410 = adjustment < 0;
    if (v410) {
      v410 = adjusted >= 0;
    }
    var v149 = v410;
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
    var v411 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v411;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v412 = i$$6 + k$$1;
        var v150 = v412 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v413 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v413)
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
        var v414 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v414, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v415 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v415;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v588 = adjustNumbering(lineNum, numberingAdjustment);
      var v524 = rightNum(v588, "", 8, tabIn$$3);
      var v416 = v524 + lineOfText$$1;
      var v160 = v416 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v589 = adjustNumbering(lineNum, numberingAdjustment);
        var v525 = rightNum(v589, "", 8, tabIn$$3);
        var v526 = complement(lineOfText$$1);
        var v417 = v525 + v526;
        var v162 = v417 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v527 = lineOfText$$1;
        var v528 = adjustNumbering(i$$6, numberingAdjustment);
        var v418 = v527 + v528;
        var v166 = v418 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v529 = complement(lineOfText$$1);
          var v530 = adjustNumbering(i$$6, numberingAdjustment);
          var v419 = v529 + v530;
          var v168 = v419 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v420 = complement(lineOfText$$1);
            var v176 = v420 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p11) {
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
    var v421 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v421;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v422 = i$$7 + k$$2;
        var v183 = v422 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v423 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v423)
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
      var v424 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v424;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v531 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v425 = v531 + lineOfText$$2;
      var v191 = v425 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v426 = lineOfText$$2 + i$$7;
        var v193 = v426 + "\n";
        introspect(JAM.policy.p17) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
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
  var v590 = sequence$$13.length;
  var v532 = v590 <= firstIndexToMutate;
  var v591 = !v532;
  if (v591) {
    v532 = lastIndexToMutate < 0;
  }
  var v427 = v532;
  var v533 = !v427;
  if (v533) {
    v427 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v427;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v428 = Math.random();
    var v203 = v428 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v429 = randNum < firstIndexToMutate;
    var v534 = !v429;
    if (v534) {
      v429 = randNum > lastIndexToMutate;
    }
    var v204 = v429;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v430 = Math.random();
      var v431 = components$$1.length;
      var v205 = v430 * v431;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v432 = components$$1.length;
      var v206 = componentsIndex == v432;
      if (v206) {
        componentsIndex = 0;
      }
      var v433 = components$$1[componentsIndex];
      var v207 = v433 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v434 = sequence$$13.substring(0, randNum)
    }
    var v435 = components$$1[componentsIndex];
    var v208 = v434 + v435;
    var v436 = randNum + 1;
    var v437 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v436, v437)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
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
    var v438 = Math.random();
    var v439 = components$$2.length;
    var v213 = v438 * v439;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v440 = sequence$$14.length;
    var v216 = v440 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
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
    var v592 = sequence$$15.length;
    var v535 = v592 - lookAhead;
    var v536 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v441 = sequence$$15.substring(v535, v536)
    }
    var v221 = v441 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v593 = '<tr><td class="title" width="200px">' + "Site:";
  var v537 = v593 + '</td><td class="title">';
  var v442 = v537 + "Positions:";
  var v226 = v442 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v443 = arrayOfItems.length;
  var v242 = i$$9 < v443;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v444 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v444.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v594 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v538 = v594.match(/\)\D*\d+/)
    }
    var v445 = v538.toString();
    introspect(JAM.policy.p15) {
      var v228 = v445.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v446 = matchPosition >= lowerLimit;
      if (v446) {
        v446 = matchPosition < upperLimit;
      }
      var v232 = v446;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v447 = matchPosition - shiftValue;
        var v231 = v447 + 1;
        tempString$$1 = v230 + v231;
      }
      var v448 = matchExp.lastIndex;
      var v539 = RegExp.lastMatch;
      var v449 = v539.length;
      var v233 = v448 - v449;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v450 = tempString$$1.search(/\d/)
    }
    var v235 = v450 != -1;
    if (v235) {
      introspect(JAM.policy.p15) {
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
    var v670 = v686 + '">';
    var v706 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v697 = v706.match(/\([^\(]+\)/)
    }
    var v687 = v697.toString();
    introspect(JAM.policy.p15) {
      var v671 = v687.replace(/\(|\)/g, "")
    }
    var v654 = v670 + v671;
    var v632 = v654 + '</td><td class="';
    var v595 = v632 + backGroundClass;
    var v540 = v595 + '">';
    var v451 = v540 + tempString$$1;
    var v241 = v451 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v452 = arrayOfItems.length;
    v242 = i$$9 < v452;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v655 = '<tr><td class="title">' + "Pattern:";
  var v633 = v655 + '</td><td class="title">';
  var v596 = v633 + "Times found:";
  var v541 = v596 + '</td><td class="title">';
  var v453 = v541 + "Percentage:";
  var v246 = v453 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v454 = arrayOfItems$$1.length;
  var v255 = i$$10 < v454;
  for (;v255;) {
    var tempNumber = 0;
    var v455 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v455.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v456 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v456 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v542 = originalLength + 1;
    var v634 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v597 = v634.match(/\d+/)
    }
    var v543 = parseFloat(v597);
    var v457 = v542 - v543;
    var v252 = v457 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v458 = originalLength + 1;
      var v598 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v544 = v598.match(/\d+/)
      }
      var v459 = parseFloat(v544);
      var v251 = v458 - v459;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v707 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v698 = v707.match(/\([^\(]+\)\b/)
    }
    var v688 = v698.toString();
    introspect(JAM.policy.p15) {
      var v672 = v688.replace(/\(|\)/g, "")
    }
    var v656 = "<tr><td>" + v672;
    var v635 = v656 + "</td><td>";
    var v599 = v635 + tempNumber;
    var v545 = v599 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v546 = percentage.toFixed(2)
    }
    var v460 = v545 + v546;
    var v254 = v460 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v461 = arrayOfItems$$1.length;
    v255 = i$$10 < v461;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p11) {
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
  var v462 = sequence$$17.length;
  var v263 = v462 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v463 = Math.random();
    var v257 = v463 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v464 = tempSeq.length;
    var v262 = v464 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v465 = sequence$$17.length;
    v263 = v465 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function proteinMw(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v466 = testScript();
  var v266 = v466 == false;
  if (v266) {
    return false;
  }
  var v673 = theDocument.forms;
  var v657 = v673[0];
  var v636 = v657.elements;
  var v600 = v636[0];
  var v547 = checkFormElement(v600);
  var v467 = v547 == false;
  var v549 = !v467;
  if (v549) {
    var v689 = theDocument.forms;
    var v674 = v689[0];
    var v658 = v674.elements;
    var v637 = v658[0];
    var v601 = v637.value;
    var v548 = checkSequenceLength(v601, maxInput$$3);
    v467 = v548 == false;
  }
  var v267 = v467;
  if (v267) {
    return false;
  }
  var arrayOfMw = ["/A/ (A)71.08", "/C/ (C)103.14", "/D/ (D)115.09", "/E/ (E)129.12", " /F/ (F)147.18", "/G/ (G)57.06", "/H/ (H)137.15", "/I/ (I)113.17", "/K/ (K)128.18", "/L/ (L)113.17", "/M/ (M)131.21", "/N/ (N)114.11", "/P/ (P)97.12", "/Q/ (Q)128.41", "/R/ (R)156.20", "/S/ (S)87.08", "/T/ (T)101.11", "/V/ (V)99.14", "/W/ (W)186.21", "/Y/ (Y)163.18"];
  openWindow("Protein Molecular Weight");
  var v638 = theDocument.forms;
  var v602 = v638[0];
  var v550 = v602.elements;
  var v468 = v550[0];
  var v268 = v468.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v469 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v469;
  for (;v276;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newProtein = removeNonProteinStrict(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title, newProtein);
    introspect(JAM.policy.p17) {
      v271.write(v272);
    }
    var v675 = theDocument.forms;
    var v659 = v675[0];
    var v639 = v659.elements;
    var v603 = v639[4];
    var v551 = v603.options;
    var v676 = theDocument.forms;
    var v660 = v676[0];
    var v640 = v660.elements;
    var v604 = v640[4];
    var v552 = v604.selectedIndex;
    var v470 = v551[v552];
    var v273 = v470.value;
    var v677 = theDocument.forms;
    var v661 = v677[0];
    var v641 = v661.elements;
    var v605 = v641[5];
    var v553 = v605.options;
    var v678 = theDocument.forms;
    var v662 = v678[0];
    var v642 = v662.elements;
    var v606 = v642[5];
    var v554 = v606.selectedIndex;
    var v471 = v553[v554];
    var v274 = v471.value;
    writeProtMw(newProtein, arrayOfMw, v273, v274);
    var v275 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v275.write("<br />\n<br />\n");
    }
    i$$11++;
    var v472 = arrayOfFasta$$1.length;
    v276 = i$$11 < v472;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeProtMw(proteinSequence$$1, arrayOfMw$$1, copies, fusion) {
  var water = 18.015;
  var result = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v277 = j$$10 < copies;
  for (;v277;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10++;
    v277 = j$$10 < copies;
  }
  j$$10 = 0;
  var v473 = arrayOfMw$$1.length;
  var v282 = j$$10 < v473;
  for (;v282;) {
    var tempNumber$$1 = 0;
    var v474 = arrayOfMw$$1[j$$10];
    introspect(JAM.policy.p16) {
      var v278 = v474.match(/\/[^\/]+\//)
    }
    var matchExp$$2 = v278 + "gi";
    matchExp$$2 = eval(matchExp$$2);
    introspect(JAM.policy.p17) {
      var v475 = proteinSequence$$1.search(matchExp$$2)
    }
    var v280 = v475 != -1;
    if (v280) {
      introspect(JAM.policy.p17) {
        var v279 = proteinSequence$$1.match(matchExp$$2)
      }
      tempNumber$$1 = v279.length;
    }
    var v643 = arrayOfMw$$1[j$$10];
    introspect(JAM.policy.p16) {
      var v607 = v643.match(/[\d\.]+/)
    }
    var v555 = v607.toString();
    var v476 = parseFloat(v555);
    var v281 = tempNumber$$1 * v476;
    result = result + v281;
    j$$10++;
    var v477 = arrayOfMw$$1.length;
    v282 = j$$10 < v477;
  }
  var v287 = result == 0;
  if (v287) {
    var v283 = outputWindow.document;
    var v284 = result + " kDa";
    introspect(JAM.policy.p17) {
      v283.write(v284);
    }
  } else {
    result = result + water;
    result = result / 1E3;
    introspect(JAM.policy.p9) {
      result = result.toFixed(2);
    }
    var v285 = outputWindow.document;
    var v286 = result + " kDa";
    introspect(JAM.policy.p17) {
      v285.write(v286);
    }
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v288 = document.getElementById("submitbtn")
}
v288.onclick = v3;
introspect(JAM.policy.p11) {
  var v289 = document.getElementById("clearbtn")
}
v289.onclick = v4

JAM.stopProfile('load');
