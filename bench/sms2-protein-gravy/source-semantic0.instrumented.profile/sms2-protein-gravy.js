
JAM.startProfile('load');
function v4() {
  var v541 = document.forms;
  var v468 = v541[0];
  var v283 = v468.elements;
  var v5 = v283[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinGravy(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v284 = document.main_form;
  var v7 = v284.main_submit;
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
  var v285 = arrayOfSequences.length;
  var v9 = v285 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v286 = arrayOfTitles.length;
  var v11 = i$$1 < v286;
  for (;v11;) {
    var v588 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v542 = v588.search(/\S/)
    }
    var v469 = v542 == -1;
    var v544 = !v469;
    if (v544) {
      var v589 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v543 = v589.search(/\S/)
      }
      v469 = v543 == -1;
    }
    var v287 = v469;
    var v471 = !v287;
    if (v471) {
      var v545 = arrayOfSequences[i$$1];
      var v470 = v545.length;
      v287 = v470 != lengthOfAlign;
    }
    var v10 = v287;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v288 = arrayOfTitles.length;
    v11 = i$$1 < v288;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v619 = codonTable.search(/AmAcid/)
  }
  var v590 = v619 == -1;
  var v621 = !v590;
  if (v621) {
    introspect(JAM.policy.p16) {
      var v620 = codonTable.search(/Codon/)
    }
    v590 = v620 == -1;
  }
  var v546 = v590;
  var v592 = !v546;
  if (v592) {
    introspect(JAM.policy.p16) {
      var v591 = codonTable.search(/Number/)
    }
    v546 = v591 == -1;
  }
  var v472 = v546;
  var v548 = !v472;
  if (v548) {
    introspect(JAM.policy.p16) {
      var v547 = codonTable.search(/\/1000/)
    }
    v472 = v547 == -1;
  }
  var v289 = v472;
  var v474 = !v289;
  if (v474) {
    introspect(JAM.policy.p16) {
      var v473 = codonTable.search(/Fraction\s*\.\./)
    }
    v289 = v473 == -1;
  }
  var v12 = v289;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v475 = formElement.value;
  introspect(JAM.policy.p16) {
    var v290 = v475.search(/\S/)
  }
  var v13 = v290 == -1;
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
  var v291 = arrayOfPatterns.length;
  var v16 = z$$2 < v291;
  for (;v16;) {
    var v476 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v292 = v476.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v292 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v477 = arrayOfPatterns[z$$2];
    var v293 = moreExpressionCheck(v477);
    var v15 = v293 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v294 = arrayOfPatterns.length;
    v16 = z$$2 < v294;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v295 = arrayOfPatterns.length;
  var v22 = j < v295;
  for (;v22;) {
    var v478 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v296 = v478.match(/\/.+\//)
    }
    var v19 = v296 + "gi";
    var v704 = eval(v19);
    geneticCodeMatchExp[j] = v704;
    var v297 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v297.match(/=[a-zA-Z\*]/)
    }
    var v705 = v20.toString();
    geneticCodeMatchResult[j] = v705;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v706 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v706;
    j++;
    var v298 = arrayOfPatterns.length;
    v22 = j < v298;
  }
  var i$$2 = 0;
  var v479 = testSequence.length;
  var v299 = v479 - 3;
  var v29 = i$$2 <= v299;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v300 = geneticCodeMatchExp.length;
    var v27 = j < v300;
    for (;v27;) {
      var v480 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v301 = codon.search(v480)
      }
      var v26 = v301 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v302 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v302 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v303 = geneticCodeMatchExp.length;
      v27 = j < v303;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v481 = testSequence.length;
    var v304 = v481 - 3;
    v29 = i$$2 <= v304;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v305 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v305;
  for (;v31;) {
    var v482 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v306 = v482.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v306 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v307 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v307;
  }
  var i$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v308;
  for (;v35;) {
    var v483 = arrayOfPatterns$$1[i$$3];
    var v309 = "[" + v483;
    var v32 = v309 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v310;
    for (;v34;) {
      var v484 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v311 = v484.search(re)
      }
      var v33 = v311 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v312 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v312;
    }
    i$$3++;
    var v313 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v313;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v314 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v314;
  for (;v38;) {
    var v485 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v315 = v485.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v315 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v486 = arrayOfPatterns$$2[z$$4];
    var v316 = moreExpressionCheck(v486);
    var v37 = v316 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v317 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v317;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v487 = v549.replace(/[^A-Za-z]/g, "")
  }
  var v318 = v487.length;
  var v40 = v318 > maxInput;
  if (v40) {
    var v319 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v319 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v320 = text$$8.length;
  var v42 = v320 > maxInput$$1;
  if (v42) {
    var v321 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v321 + " characters.";
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
  introspect(JAM.policy.p9) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p9) {
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
  var v322 = alignArray.length;
  var v49 = v322 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v323 = alignArray.length;
  var v51 = i$$4 < v323;
  for (;v51;) {
    var v488 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v324 = v488.search(/[^\s]+\s/)
    }
    var v50 = v324 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v325 = alignArray.length;
    v51 = i$$4 < v325;
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
    var v326 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v326 != -1;
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
  var v327 = sequence$$2.length;
  var v55 = "&gt;results for " + v327;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v328 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v328 != -1;
  if (v57) {
    var v329 = stringToReturn + '"';
    var v56 = v329 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v330 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v331 = sequence$$2.substring(0, 10)
  }
  var v58 = v330 + v331;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v332 = sequenceOne.length;
  var v59 = "Search results for " + v332;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v333 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v333 != -1;
  if (v61) {
    var v334 = stringToReturn$$1 + '"';
    var v60 = v334 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v335 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v336 = sequenceOne.substring(0, 10)
  }
  var v62 = v335 + v336;
  stringToReturn$$1 = v62 + '"\n';
  var v337 = stringToReturn$$1 + "and ";
  var v338 = sequenceTwo.length;
  var v63 = v337 + v338;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v339 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v339 != -1;
  if (v65) {
    var v340 = stringToReturn$$1 + '"';
    var v64 = v340 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v341 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v342 = sequenceTwo.substring(0, 10)
  }
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v343 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v343;
  for (;v70;) {
    var v489 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v344 = v489.match(/\/.+\//)
    }
    var v69 = v344 + "gi";
    var v707 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v707;
    j$$2++;
    var v345 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v345;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v346 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v346;
  for (;v74;) {
    var v347 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v347.match(/=[a-zA-Z\*]/)
    }
    var v708 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v708;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v709 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v709;
    j$$3++;
    var v348 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v348;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v349 = sequence$$3.length;
  var v75 = "Results for " + v349;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v350 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v350 != -1;
  if (v77) {
    var v351 = stringToReturn$$2 + '"';
    var v76 = v351 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v352 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v353 = sequence$$3.substring(0, 10)
  }
  var v78 = v352 + v353;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v490 = "Results for " + topology;
  var v354 = v490 + " ";
  var v355 = sequence$$4.length;
  var v80 = v354 + v355;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v356 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v356 != -1;
  if (v82) {
    var v357 = stringToReturn$$3 + '"';
    var v81 = v357 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v358 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v359 = sequence$$4.substring(0, 10)
  }
  var v83 = v358 + v359;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v360 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v360;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v361 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v361 != -1;
  if (v87) {
    var v362 = stringToReturn$$4 + '"';
    var v86 = v362 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v363 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v364 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v363 + v364;
  stringToReturn$$4 = v88 + '"\n';
  var v365 = stringToReturn$$4 + "and ";
  var v366 = sequenceTwo$$1.length;
  var v89 = v365 + v366;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v367 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v367 != -1;
  if (v91) {
    var v368 = stringToReturn$$4 + '"';
    var v90 = v368 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v369 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v370 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v369 + v370;
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
    var v371 = Math.random();
    var v372 = components.length;
    var v94 = v371 * v372;
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
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v373 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v373 != -1;
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
    var v374 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v374 != -1;
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
    var v682 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v675 = v682 != -1;
  var v684 = !v675;
  if (v684) {
    introspect(JAM.policy.p16) {
      var v683 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v675 = v683 != -1;
  }
  var v666 = v675;
  var v677 = !v666;
  if (v677) {
    introspect(JAM.policy.p16) {
      var v676 = expressionToCheck.search(/\[\]/)
    }
    v666 = v676 != -1;
  }
  var v657 = v666;
  var v668 = !v657;
  if (v668) {
    introspect(JAM.policy.p16) {
      var v667 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v657 = v667 != -1;
  }
  var v646 = v657;
  var v659 = !v646;
  if (v659) {
    introspect(JAM.policy.p16) {
      var v658 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v646 = v658 != -1;
  }
  var v634 = v646;
  var v648 = !v634;
  if (v648) {
    introspect(JAM.policy.p16) {
      var v647 = expressionToCheck.search(/\|\|/)
    }
    v634 = v647 != -1;
  }
  var v622 = v634;
  var v636 = !v622;
  if (v636) {
    introspect(JAM.policy.p16) {
      var v635 = expressionToCheck.search(/\/\|/)
    }
    v622 = v635 != -1;
  }
  var v593 = v622;
  var v624 = !v593;
  if (v624) {
    introspect(JAM.policy.p16) {
      var v623 = expressionToCheck.search(/\|\//)
    }
    v593 = v623 != -1;
  }
  var v550 = v593;
  var v595 = !v550;
  if (v595) {
    introspect(JAM.policy.p16) {
      var v594 = expressionToCheck.search(/\[.\]/)
    }
    v550 = v594 != -1;
  }
  var v491 = v550;
  var v552 = !v491;
  if (v552) {
    introspect(JAM.policy.p16) {
      var v551 = expressionToCheck.search(/\</)
    }
    v491 = v551 != -1;
  }
  var v375 = v491;
  var v493 = !v375;
  if (v493) {
    introspect(JAM.policy.p16) {
      var v492 = expressionToCheck.search(/\>/)
    }
    v375 = v492 != -1;
  }
  var v99 = v375;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p9) {
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
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v553 + "<head>\n";
  var v376 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v689 = v693 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v685 = v689 + "div.info {font-weight: bold}\n";
    var v678 = v685 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v660 = v669 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v649 = v660 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v625 = v637 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v596 = v625 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v596 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v495 = v554 + "td.many {color: #000000}\n";
    var v377 = v495 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v377 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v698 = v701 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {display: none}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v686 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v686 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v661 = v670 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v650 = v661 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v650 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v638 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v597 = v626 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v597 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v496 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v378 = v496 + "img {display: none}\n";
    var v109 = v378 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v497 = v556 + '<div class="title">';
  var v379 = v497 + title$$6;
  var v111 = v379 + " results</div>\n";
  introspect(JAM.policy.p17) {
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v557 + "<head>\n";
  var v380 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v699 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v695 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v680 = v687 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v671 = v680 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v662 = v671 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v651 = v662 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v639 = v651 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v627 = v639 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v598 = v627 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v598 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v499 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v381 = v499 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v381 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v702 + "div.title {display: none}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v692 = v696 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v688 = v692 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v681 = v688 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v652 = v663 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v640 = v652 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v628 = v640 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v599 = v628 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v599 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v500 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v382 = v500 + "img {display: none}\n";
    var v117 = v382 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v501 = v560 + '<div class="title">';
  var v383 = v501 + title$$8;
  var v119 = v383 + " results</div>\n";
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
    var v384 = dnaSequence$$1.search(/./)
  }
  var v120 = v384 != -1;
  if (v120) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p9) {
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
  var v385 = testArray[0];
  var v124 = v385 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v386 = testString.search(re$$2)
  }
  var v125 = v386 == -1;
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
  introspect(JAM.policy.p11) {
    var v387 = testNum.toFixed(3)
  }
  var v128 = v387 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v388 = testNum.toPrecision(5)
  }
  var v129 = v388 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v389 = theNumber$$1.search(/\d/)
  }
  var v130 = v389 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v600 = emblFile.search(/ID/)
  }
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    introspect(JAM.policy.p16) {
      var v601 = emblFile.search(/AC/)
    }
    v561 = v601 == -1;
  }
  var v502 = v561;
  var v563 = !v502;
  if (v563) {
    introspect(JAM.policy.p16) {
      var v562 = emblFile.search(/DE/)
    }
    v502 = v562 == -1;
  }
  var v390 = v502;
  var v504 = !v390;
  if (v504) {
    introspect(JAM.policy.p16) {
      var v503 = emblFile.search(/SQ/)
    }
    v390 = v503 == -1;
  }
  var v131 = v390;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v391 = theNumber$$2.search(/\d/)
  }
  var v132 = v391 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v392 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v392 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v393 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v393 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v394 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v394 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v603 = genBankFile.search(/LOCUS/)
  }
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    introspect(JAM.policy.p16) {
      var v604 = genBankFile.search(/DEFINITION/)
    }
    v564 = v604 == -1;
  }
  var v505 = v564;
  var v566 = !v505;
  if (v566) {
    introspect(JAM.policy.p16) {
      var v565 = genBankFile.search(/ACCESSION/)
    }
    v505 = v565 == -1;
  }
  var v395 = v505;
  var v507 = !v395;
  if (v507) {
    introspect(JAM.policy.p16) {
      var v506 = genBankFile.search(/ORIGIN/)
    }
    v395 = v506 == -1;
  }
  var v137 = v395;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v606 = genBankFile$$1.search(/LOCUS/)
  }
  var v567 = v606 == -1;
  var v608 = !v567;
  if (v608) {
    introspect(JAM.policy.p16) {
      var v607 = genBankFile$$1.search(/DEFINITION/)
    }
    v567 = v607 == -1;
  }
  var v508 = v567;
  var v569 = !v508;
  if (v569) {
    introspect(JAM.policy.p16) {
      var v568 = genBankFile$$1.search(/ACCESSION/)
    }
    v508 = v568 == -1;
  }
  var v396 = v508;
  var v510 = !v396;
  if (v510) {
    introspect(JAM.policy.p16) {
      var v509 = genBankFile$$1.search(/ORIGIN/)
    }
    v396 = v509 == -1;
  }
  var v138 = v396;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v397 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v397 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v609 = emblFile$$1.search(/ID/)
  }
  var v570 = v609 == -1;
  var v611 = !v570;
  if (v611) {
    introspect(JAM.policy.p16) {
      var v610 = emblFile$$1.search(/AC/)
    }
    v570 = v610 == -1;
  }
  var v511 = v570;
  var v572 = !v511;
  if (v572) {
    introspect(JAM.policy.p16) {
      var v571 = emblFile$$1.search(/DE/)
    }
    v511 = v571 == -1;
  }
  var v398 = v511;
  var v513 = !v398;
  if (v513) {
    introspect(JAM.policy.p16) {
      var v512 = emblFile$$1.search(/SQ/)
    }
    v398 = v512 == -1;
  }
  var v140 = v398;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v399 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v399 == -1;
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
    var v400 = basePerLine / groupSize;
    var v145 = j$$6 <= v400;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v401 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v401)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v402 = basePerLine / groupSize;
      v145 = j$$6 <= v402;
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
  introspect(JAM.policy.p19) {
    writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  }
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v403 = adjustment < 0;
    if (v403) {
      v403 = adjusted >= 0;
    }
    var v149 = v403;
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
    var v404 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v404;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v405 = i$$6 + k$$1;
        var v150 = v405 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v406 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v406)
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
        introspect(JAM.policy.p19) {
          var v407 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v155 = rightNum(v407, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v408 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v408;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      introspect(JAM.policy.p19) {
        var v573 = adjustNumbering(lineNum, numberingAdjustment)
      }
      var v514 = rightNum(v573, "", 8, tabIn$$3);
      var v409 = v514 + lineOfText$$1;
      var v160 = v409 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        introspect(JAM.policy.p19) {
          var v574 = adjustNumbering(lineNum, numberingAdjustment)
        }
        var v515 = rightNum(v574, "", 8, tabIn$$3);
        var v516 = complement(lineOfText$$1);
        var v410 = v515 + v516;
        var v162 = v410 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v517 = lineOfText$$1;
        introspect(JAM.policy.p19) {
          var v518 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v411 = v517 + v518;
        var v166 = v411 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v519 = complement(lineOfText$$1);
          introspect(JAM.policy.p19) {
            var v520 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v412 = v519 + v520;
          var v168 = v412 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p9) {
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
            var v413 = complement(lineOfText$$1);
            var v176 = v413 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p9) {
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
    var v414 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v414;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v415 = i$$7 + k$$2;
        var v183 = v415 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v416 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v416)
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
      var v417 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v417;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v521 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v418 = v521 + lineOfText$$2;
      var v191 = v418 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v419 = lineOfText$$2 + i$$7;
        var v193 = v419 + "\n";
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
  var v575 = sequence$$13.length;
  var v522 = v575 <= firstIndexToMutate;
  var v576 = !v522;
  if (v576) {
    v522 = lastIndexToMutate < 0;
  }
  var v420 = v522;
  var v523 = !v420;
  if (v523) {
    v420 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v420;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v421 = Math.random();
    var v203 = v421 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v422 = randNum < firstIndexToMutate;
    var v524 = !v422;
    if (v524) {
      v422 = randNum > lastIndexToMutate;
    }
    var v204 = v422;
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
      var v423 = Math.random();
      var v424 = components$$1.length;
      var v205 = v423 * v424;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v425 = components$$1.length;
      var v206 = componentsIndex == v425;
      if (v206) {
        componentsIndex = 0;
      }
      var v426 = components$$1[componentsIndex];
      var v207 = v426 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v427 = sequence$$13.substring(0, randNum)
    }
    var v428 = components$$1[componentsIndex];
    var v208 = v427 + v428;
    var v429 = randNum + 1;
    var v430 = sequence$$13.length;
    introspect(JAM.policy.p21) {
      var v209 = sequence$$13.substring(v429, v430)
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
    var v431 = Math.random();
    var v432 = components$$2.length;
    var v213 = v431 * v432;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v433 = sequence$$14.length;
    var v216 = v433 == 60;
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
    var v577 = sequence$$15.length;
    var v525 = v577 - lookAhead;
    var v526 = sequence$$15.length;
    introspect(JAM.policy.p21) {
      var v434 = sequence$$15.substring(v525, v526)
    }
    var v221 = v434 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v527 = v578 + '</td><td class="title">';
  var v435 = v527 + "Positions:";
  var v226 = v435 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v436 = arrayOfItems.length;
  var v242 = i$$9 < v436;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v437 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v437.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v579 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v528 = v579.match(/\)\D*\d+/)
    }
    var v438 = v528.toString();
    introspect(JAM.policy.p15) {
      var v228 = v438.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v439 = matchPosition >= lowerLimit;
      if (v439) {
        v439 = matchPosition < upperLimit;
      }
      var v232 = v439;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v440 = matchPosition - shiftValue;
        var v231 = v440 + 1;
        tempString$$1 = v230 + v231;
      }
      var v441 = matchExp.lastIndex;
      var v529 = RegExp.lastMatch;
      var v442 = v529.length;
      var v233 = v441 - v442;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v443 = tempString$$1.search(/\d/)
    }
    var v235 = v443 != -1;
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
    var v653 = '<tr><td class="' + backGroundClass;
    var v641 = v653 + '">';
    var v673 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v664 = v673.match(/\([^\(]+\)/)
    }
    var v654 = v664.toString();
    introspect(JAM.policy.p15) {
      var v642 = v654.replace(/\(|\)/g, "")
    }
    var v629 = v641 + v642;
    var v612 = v629 + '</td><td class="';
    var v580 = v612 + backGroundClass;
    var v530 = v580 + '">';
    var v444 = v530 + tempString$$1;
    var v241 = v444 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v445 = arrayOfItems.length;
    v242 = i$$9 < v445;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v630 = '<tr><td class="title">' + "Pattern:";
  var v613 = v630 + '</td><td class="title">';
  var v581 = v613 + "Times found:";
  var v531 = v581 + '</td><td class="title">';
  var v446 = v531 + "Percentage:";
  var v246 = v446 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v447 = arrayOfItems$$1.length;
  var v255 = i$$10 < v447;
  for (;v255;) {
    var tempNumber = 0;
    var v448 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v448.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v449 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v449 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v532 = originalLength + 1;
    var v614 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v582 = v614.match(/\d+/)
    }
    var v533 = parseFloat(v582);
    var v450 = v532 - v533;
    var v252 = v450 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v451 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v534 = v583.match(/\d+/)
      }
      var v452 = parseFloat(v534);
      var v251 = v451 - v452;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v674 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v665 = v674.match(/\([^\(]+\)\b/)
    }
    var v655 = v665.toString();
    introspect(JAM.policy.p15) {
      var v643 = v655.replace(/\(|\)/g, "")
    }
    var v631 = "<tr><td>" + v643;
    var v615 = v631 + "</td><td>";
    var v584 = v615 + tempNumber;
    var v535 = v584 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v536 = percentage.toFixed(2)
    }
    var v453 = v535 + v536;
    var v254 = v453 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v454 = arrayOfItems$$1.length;
    v255 = i$$10 < v454;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p9) {
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
  var v455 = sequence$$17.length;
  var v263 = v455 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v456 = Math.random();
    var v257 = v456 * maxNum$$1;
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
    var v457 = tempSeq.length;
    var v262 = v457 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v458 = sequence$$17.length;
    v263 = v458 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function proteinGravy(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v459 = testScript();
  var v266 = v459 == false;
  if (v266) {
    return false;
  }
  var v644 = theDocument.forms;
  var v632 = v644[0];
  var v616 = v632.elements;
  var v585 = v616[0];
  var v537 = checkFormElement(v585);
  var v460 = v537 == false;
  var v539 = !v460;
  if (v539) {
    var v656 = theDocument.forms;
    var v645 = v656[0];
    var v633 = v645.elements;
    var v617 = v633[0];
    var v586 = v617.value;
    introspect(JAM.policy.p19) {
      var v538 = checkSequenceLength(v586, maxInput$$3)
    }
    v460 = v538 == false;
  }
  var v267 = v460;
  if (v267) {
    return false;
  }
  openWindow("Protein GRAVY");
  var v618 = theDocument.forms;
  var v587 = v618[0];
  var v540 = v587.elements;
  var v461 = v540[0];
  var v268 = v461.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v462 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v462;
  for (;v276;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newProtein = removeNonProtein(newProtein);
    var v271 = outputWindow.document;
    introspect(JAM.policy.p19) {
      var v272 = getInfoFromTitleAndSequence(title$$9, newProtein)
    }
    introspect(JAM.policy.p17) {
      v271.write(v272);
    }
    var v273 = outputWindow.document;
    var v274 = getProteinGravy(newProtein);
    introspect(JAM.policy.p17) {
      v273.write(v274);
    }
    var v275 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v275.write("<br />\n<br />\n");
    }
    i$$11++;
    var v463 = arrayOfFasta$$1.length;
    v276 = i$$11 < v463;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v464 = sequence$$18.length;
  var v278 = i$$12 < v464;
  for (;v278;) {
    introspect(JAM.policy.p17) {
      var v465 = sequence$$18.charAt(i$$12)
    }
    var v277 = gravyValues[v465];
    gravyResult = gravyResult + v277;
    i$$12++;
    var v466 = sequence$$18.length;
    v278 = i$$12 < v466;
  }
  var v467 = sequence$$18.length;
  var v280 = v467 > 0;
  if (v280) {
    var v279 = sequence$$18.length;
    gravyResult = gravyResult / v279;
  } else {
    return "The sequence is too short";
  }
  introspect(JAM.policy.p11) {
    return gravyResult.toFixed(3);
  }
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -.8;
  hash["t"] = -.7;
  hash["w"] = -.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash;
}
document.onload = v2;
introspect(JAM.policy.p9) {
  var v281 = document.getElementById("submitbtn")
}
v281.onclick = v3;
introspect(JAM.policy.p9) {
  var v282 = document.getElementById("clearbtn")
}
v282.onclick = v4

JAM.stopProfile('load');
