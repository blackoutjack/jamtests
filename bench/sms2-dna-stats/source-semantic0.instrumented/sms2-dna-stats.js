function v4() {
  var v534 = document.forms;
  var v460 = v534[0];
  var v278 = v460.elements;
  var v5 = v278[0];
  v5.value = " ";
  var v535 = document.forms;
  var v461 = v535[0];
  var v279 = v461.elements;
  var v6 = v279[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaStats(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v280 = document.main_form;
  var v8 = v280.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v281 = arrayOfSequences.length;
  var v10 = v281 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v282 = arrayOfTitles.length;
  var v12 = i$$1 < v282;
  for (;v12;) {
    var v582 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p15) {
      var v536 = v582.search(/\S/)
    }
    var v462 = v536 == -1;
    var v538 = !v462;
    if (v538) {
      var v583 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p15) {
        var v537 = v583.search(/\S/)
      }
      v462 = v537 == -1;
    }
    var v283 = v462;
    var v464 = !v283;
    if (v464) {
      var v539 = arrayOfSequences[i$$1];
      var v463 = v539.length;
      v283 = v463 != lengthOfAlign;
    }
    var v11 = v283;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v284 = arrayOfTitles.length;
    v12 = i$$1 < v284;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p15) {
    var v613 = codonTable.search(/AmAcid/)
  }
  var v584 = v613 == -1;
  var v615 = !v584;
  if (v615) {
    introspect(JAM.policy.p15) {
      var v614 = codonTable.search(/Codon/)
    }
    v584 = v614 == -1;
  }
  var v540 = v584;
  var v586 = !v540;
  if (v586) {
    introspect(JAM.policy.p15) {
      var v585 = codonTable.search(/Number/)
    }
    v540 = v585 == -1;
  }
  var v465 = v540;
  var v542 = !v465;
  if (v542) {
    introspect(JAM.policy.p15) {
      var v541 = codonTable.search(/\/1000/)
    }
    v465 = v541 == -1;
  }
  var v285 = v465;
  var v467 = !v285;
  if (v467) {
    introspect(JAM.policy.p15) {
      var v466 = codonTable.search(/Fraction\s*\.\./)
    }
    v285 = v466 == -1;
  }
  var v13 = v285;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v468 = formElement.value;
  introspect(JAM.policy.p15) {
    var v286 = v468.search(/\S/)
  }
  var v14 = v286 == -1;
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
  var v287 = arrayOfPatterns.length;
  var v17 = z$$2 < v287;
  for (;v17;) {
    var v469 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p15) {
      var v288 = v469.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v288 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v470 = arrayOfPatterns[z$$2];
    var v289 = moreExpressionCheck(v470);
    var v16 = v289 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v290 = arrayOfPatterns.length;
    v17 = z$$2 < v290;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v291 = arrayOfPatterns.length;
  var v23 = j < v291;
  for (;v23;) {
    var v471 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v292 = v471.match(/\/.+\//)
    }
    var v20 = v292 + "gi";
    var v698 = eval(v20);
    geneticCodeMatchExp[j] = v698;
    var v293 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v21 = v293.match(/=[a-zA-Z\*]/)
    }
    var v699 = v21.toString();
    geneticCodeMatchResult[j] = v699;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v700 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v700;
    j++;
    var v294 = arrayOfPatterns.length;
    v23 = j < v294;
  }
  var i$$2 = 0;
  var v472 = testSequence.length;
  var v295 = v472 - 3;
  var v30 = i$$2 <= v295;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v296 = geneticCodeMatchExp.length;
    var v28 = j < v296;
    for (;v28;) {
      var v473 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v297 = codon.search(v473)
      }
      var v27 = v297 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v298 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v298 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v299 = geneticCodeMatchExp.length;
      v28 = j < v299;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v474 = testSequence.length;
    var v300 = v474 - 3;
    v30 = i$$2 <= v300;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v301 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v301;
  for (;v32;) {
    var v475 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p15) {
      var v302 = v475.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v302 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v303 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v303;
  }
  var i$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v304;
  for (;v36;) {
    var v476 = arrayOfPatterns$$1[i$$3];
    var v305 = "[" + v476;
    var v33 = v305 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v306;
    for (;v35;) {
      var v477 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v307 = v477.search(re)
      }
      var v34 = v307 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v308 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v308;
    }
    i$$3++;
    var v309 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v309;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v310 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v310;
  for (;v39;) {
    var v478 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p15) {
      var v311 = v478.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v311 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v479 = arrayOfPatterns$$2[z$$4];
    var v312 = moreExpressionCheck(v479);
    var v38 = v312 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v313 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v313;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v543 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v480 = v543.replace(/[^A-Za-z]/g, "")
  }
  var v314 = v480.length;
  var v41 = v314 > maxInput;
  if (v41) {
    var v315 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v315 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v316 = text$$8.length;
  var v43 = v316 > maxInput$$1;
  if (v43) {
    var v317 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v317 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v318 = alignArray.length;
  var v50 = v318 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v319 = alignArray.length;
  var v52 = i$$4 < v319;
  for (;v52;) {
    var v481 = alignArray[i$$4];
    introspect(JAM.policy.p15) {
      var v320 = v481.search(/[^\s]+\s/)
    }
    var v51 = v320 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v321 = alignArray.length;
    v52 = i$$4 < v321;
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
  introspect(JAM.policy.p15) {
    var v322 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v322 != -1;
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
  var v323 = sequence$$2.length;
  var v56 = "&gt;results for " + v323;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v324 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v324 != -1;
  if (v58) {
    var v325 = stringToReturn + '"';
    var v57 = v325 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v326 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v327 = sequence$$2.substring(0, 10)
  }
  var v59 = v326 + v327;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v328 = sequenceOne.length;
  var v60 = "Search results for " + v328;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v329 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v329 != -1;
  if (v62) {
    var v330 = stringToReturn$$1 + '"';
    var v61 = v330 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v331 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v332 = sequenceOne.substring(0, 10)
  }
  var v63 = v331 + v332;
  stringToReturn$$1 = v63 + '"\n';
  var v333 = stringToReturn$$1 + "and ";
  var v334 = sequenceTwo.length;
  var v64 = v333 + v334;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v335 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v335 != -1;
  if (v66) {
    var v336 = stringToReturn$$1 + '"';
    var v65 = v336 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v338 = sequenceTwo.substring(0, 10)
  }
  var v67 = v337 + v338;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v339 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v339;
  for (;v71;) {
    var v482 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p15) {
      var v340 = v482.match(/\/.+\//)
    }
    var v70 = v340 + "gi";
    var v701 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v701;
    j$$2++;
    var v341 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v341;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v342 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v342;
  for (;v75;) {
    var v343 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p15) {
      var v73 = v343.match(/=[a-zA-Z\*]/)
    }
    var v702 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v702;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v703 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v703;
    j$$3++;
    var v344 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v344;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v345 = sequence$$3.length;
  var v76 = "Results for " + v345;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v346 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v346 != -1;
  if (v78) {
    var v347 = stringToReturn$$2 + '"';
    var v77 = v347 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v348 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v349 = sequence$$3.substring(0, 10)
  }
  var v79 = v348 + v349;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v483 = "Results for " + topology;
  var v350 = v483 + " ";
  var v351 = sequence$$4.length;
  var v81 = v350 + v351;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v352 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v352 != -1;
  if (v83) {
    var v353 = stringToReturn$$3 + '"';
    var v82 = v353 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v354 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v355 = sequence$$4.substring(0, 10)
  }
  var v84 = v354 + v355;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v356 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v356;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v357 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v357 != -1;
  if (v88) {
    var v358 = stringToReturn$$4 + '"';
    var v87 = v358 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v359 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v360 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v359 + v360;
  stringToReturn$$4 = v89 + '"\n';
  var v361 = stringToReturn$$4 + "and ";
  var v362 = sequenceTwo$$1.length;
  var v90 = v361 + v362;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v363 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v363 != -1;
  if (v92) {
    var v364 = stringToReturn$$4 + '"';
    var v91 = v364 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v366 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v365 + v366;
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
    var v367 = Math.random();
    var v368 = components.length;
    var v95 = v367 * v368;
    introspect(JAM.policy.p15) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p15) {
    var v369 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v369 != -1;
  if (v97) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p15) {
    var v370 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v370 != -1;
  if (v99) {
    introspect(JAM.policy.p16) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
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
  introspect(JAM.policy.p15) {
    var v676 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v669 = v676 != -1;
  var v678 = !v669;
  if (v678) {
    introspect(JAM.policy.p15) {
      var v677 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v669 = v677 != -1;
  }
  var v660 = v669;
  var v671 = !v660;
  if (v671) {
    introspect(JAM.policy.p15) {
      var v670 = expressionToCheck.search(/\[\]/)
    }
    v660 = v670 != -1;
  }
  var v651 = v660;
  var v662 = !v651;
  if (v662) {
    introspect(JAM.policy.p15) {
      var v661 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v651 = v661 != -1;
  }
  var v640 = v651;
  var v653 = !v640;
  if (v653) {
    introspect(JAM.policy.p15) {
      var v652 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v640 = v652 != -1;
  }
  var v628 = v640;
  var v642 = !v628;
  if (v642) {
    introspect(JAM.policy.p15) {
      var v641 = expressionToCheck.search(/\|\|/)
    }
    v628 = v641 != -1;
  }
  var v616 = v628;
  var v630 = !v616;
  if (v630) {
    introspect(JAM.policy.p15) {
      var v629 = expressionToCheck.search(/\/\|/)
    }
    v616 = v629 != -1;
  }
  var v587 = v616;
  var v618 = !v587;
  if (v618) {
    introspect(JAM.policy.p15) {
      var v617 = expressionToCheck.search(/\|\//)
    }
    v587 = v617 != -1;
  }
  var v544 = v587;
  var v589 = !v544;
  if (v589) {
    introspect(JAM.policy.p15) {
      var v588 = expressionToCheck.search(/\[.\]/)
    }
    v544 = v588 != -1;
  }
  var v484 = v544;
  var v546 = !v484;
  if (v546) {
    introspect(JAM.policy.p15) {
      var v545 = expressionToCheck.search(/\</)
    }
    v484 = v545 != -1;
  }
  var v371 = v484;
  var v486 = !v371;
  if (v486) {
    introspect(JAM.policy.p15) {
      var v485 = expressionToCheck.search(/\>/)
    }
    v371 = v485 != -1;
  }
  var v100 = v371;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
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
  var v105 = outputWindow.document;
  var v547 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v487 = v547 + "<head>\n";
  var v372 = v487 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v691 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v687 = v691 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v683 = v687 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v679 = v683 + "div.info {font-weight: bold}\n";
    var v672 = v679 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v654 = v663 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v643 = v654 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v619 = v631 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v590 = v619 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v548 = v590 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v488 = v548 + "td.many {color: #000000}\n";
    var v373 = v488 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v373 + "</style>\n";
    introspect(JAM.policy.p17) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v695 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v692 = v695 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v688 = v692 + "div.title {display: none}\n";
    var v684 = v688 + "div.info {font-weight: bold}\n";
    var v680 = v684 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v680 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v664 = v673 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v655 = v664 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v655 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v644 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v620 = v632 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v591 = v620 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v549 = v591 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v489 = v549 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v374 = v489 + "img {display: none}\n";
    var v110 = v374 + "</style>\n";
    introspect(JAM.policy.p17) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v550 = "</head>\n" + '<body class="main">\n';
  var v490 = v550 + '<div class="title">';
  var v375 = v490 + title$$6;
  var v112 = v375 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v111.write(v112);
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
  var v113 = outputWindow.document;
  var v551 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v551 + "<head>\n";
  var v376 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v693 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v689 = v693 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v685 = v689 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v681 = v685 + "div.info {font-weight: bold}\n";
    var v674 = v681 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v665 = v674 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v656 = v665 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v645 = v656 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v633 = v645 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v621 = v633 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v592 = v621 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v552 = v592 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v492 = v552 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v377 = v492 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v377 + "</style>\n";
    introspect(JAM.policy.p17) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v696 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v696 + "div.title {display: none}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v686 = v690 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v682 = v686 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v675 = v682 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v657 = v666 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v646 = v657 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v622 = v634 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v593 = v622 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v553 = v593 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v493 = v553 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v378 = v493 + "img {display: none}\n";
    var v118 = v378 + "</style>\n";
    introspect(JAM.policy.p17) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v554 = "</head>\n" + '<body class="main">\n';
  var v494 = v554 + '<div class="title">';
  var v379 = v494 + title$$8;
  var v120 = v379 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v119.write(v120);
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
  introspect(JAM.policy.p15) {
    var v380 = dnaSequence$$1.search(/./)
  }
  var v121 = v380 != -1;
  if (v121) {
    introspect(JAM.policy.p15) {
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
  var v381 = testArray[0];
  var v125 = v381 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v382 = testString.search(re$$2)
  }
  var v126 = v382 == -1;
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
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p11) {
    var v383 = testNum.toFixed(3)
  }
  var v129 = v383 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v384 = testNum.toPrecision(5)
  }
  var v130 = v384 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p15) {
    var v385 = theNumber$$1.search(/\d/)
  }
  var v131 = v385 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p15) {
    var v594 = emblFile.search(/ID/)
  }
  var v555 = v594 == -1;
  var v596 = !v555;
  if (v596) {
    introspect(JAM.policy.p15) {
      var v595 = emblFile.search(/AC/)
    }
    v555 = v595 == -1;
  }
  var v495 = v555;
  var v557 = !v495;
  if (v557) {
    introspect(JAM.policy.p15) {
      var v556 = emblFile.search(/DE/)
    }
    v495 = v556 == -1;
  }
  var v386 = v495;
  var v497 = !v386;
  if (v497) {
    introspect(JAM.policy.p15) {
      var v496 = emblFile.search(/SQ/)
    }
    v386 = v496 == -1;
  }
  var v132 = v386;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p15) {
    var v387 = theNumber$$2.search(/\d/)
  }
  var v133 = v387 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v388 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v388 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p15) {
    var v389 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v389 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p15) {
    var v390 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v390 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p15) {
    var v597 = genBankFile.search(/LOCUS/)
  }
  var v558 = v597 == -1;
  var v599 = !v558;
  if (v599) {
    introspect(JAM.policy.p15) {
      var v598 = genBankFile.search(/DEFINITION/)
    }
    v558 = v598 == -1;
  }
  var v498 = v558;
  var v560 = !v498;
  if (v560) {
    introspect(JAM.policy.p15) {
      var v559 = genBankFile.search(/ACCESSION/)
    }
    v498 = v559 == -1;
  }
  var v391 = v498;
  var v500 = !v391;
  if (v500) {
    introspect(JAM.policy.p15) {
      var v499 = genBankFile.search(/ORIGIN/)
    }
    v391 = v499 == -1;
  }
  var v138 = v391;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p15) {
    var v600 = genBankFile$$1.search(/LOCUS/)
  }
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    introspect(JAM.policy.p15) {
      var v601 = genBankFile$$1.search(/DEFINITION/)
    }
    v561 = v601 == -1;
  }
  var v501 = v561;
  var v563 = !v501;
  if (v563) {
    introspect(JAM.policy.p15) {
      var v562 = genBankFile$$1.search(/ACCESSION/)
    }
    v501 = v562 == -1;
  }
  var v392 = v501;
  var v503 = !v392;
  if (v503) {
    introspect(JAM.policy.p15) {
      var v502 = genBankFile$$1.search(/ORIGIN/)
    }
    v392 = v502 == -1;
  }
  var v139 = v392;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v393 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v393 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p15) {
    var v603 = emblFile$$1.search(/ID/)
  }
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    introspect(JAM.policy.p15) {
      var v604 = emblFile$$1.search(/AC/)
    }
    v564 = v604 == -1;
  }
  var v504 = v564;
  var v566 = !v504;
  if (v566) {
    introspect(JAM.policy.p15) {
      var v565 = emblFile$$1.search(/DE/)
    }
    v504 = v565 == -1;
  }
  var v394 = v504;
  var v506 = !v394;
  if (v506) {
    introspect(JAM.policy.p15) {
      var v505 = emblFile$$1.search(/SQ/)
    }
    v394 = v505 == -1;
  }
  var v141 = v394;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v395 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v395 == -1;
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
    var v396 = basePerLine / groupSize;
    var v146 = j$$6 <= v396;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v397 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v144 = text$$10.charAt(v397)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v398 = basePerLine / groupSize;
      v146 = j$$6 <= v398;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v399 = adjustment < 0;
    if (v399) {
      v399 = adjusted >= 0;
    }
    var v150 = v399;
    if (v150) {
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v400 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v400;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v401 = i$$6 + k$$1;
        var v151 = v401 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v402 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v153 = text$$12.charAt(v402)
        }
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v403 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v403, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v404 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v404;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v567 = adjustNumbering(lineNum, numberingAdjustment);
      var v507 = rightNum(v567, "", 8, tabIn$$3);
      var v405 = v507 + lineOfText$$1;
      var v161 = v405 + "\n";
      introspect(JAM.policy.p17) {
        v160.write(v161);
      }
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v568 = adjustNumbering(lineNum, numberingAdjustment);
        var v508 = rightNum(v568, "", 8, tabIn$$3);
        var v509 = complement(lineOfText$$1);
        var v406 = v508 + v509;
        var v163 = v406 + "\n";
        introspect(JAM.policy.p17) {
          v162.write(v163);
        }
        var v164 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v164.write("\n");
        }
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v510 = lineOfText$$1;
        var v511 = adjustNumbering(i$$6, numberingAdjustment);
        var v407 = v510 + v511;
        var v167 = v407 + "\n";
        introspect(JAM.policy.p17) {
          v166.write(v167);
        }
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v512 = complement(lineOfText$$1);
          var v513 = adjustNumbering(i$$6, numberingAdjustment);
          var v408 = v512 + v513;
          var v169 = v408 + "\n";
          introspect(JAM.policy.p17) {
            v168.write(v169);
          }
          var v170 = outputWindow.document;
          introspect(JAM.policy.p9) {
            v170.write("\n");
          }
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v172.write(v173);
          }
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v174.write(v175);
          }
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v409 = complement(lineOfText$$1);
            var v177 = v409 + "\n";
            introspect(JAM.policy.p17) {
              v176.write(v177);
            }
            var v178 = outputWindow.document;
            introspect(JAM.policy.p9) {
              v178.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v410 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v410;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v411 = i$$7 + k$$2;
        var v184 = v411 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v412 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v185 = text$$13.charAt(v412)
        }
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v413 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v413;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v514 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v414 = v514 + lineOfText$$2;
      var v192 = v414 + "\n";
      introspect(JAM.policy.p17) {
        v191.write(v192);
      }
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v415 = lineOfText$$2 + i$$7;
        var v194 = v415 + "\n";
        introspect(JAM.policy.p17) {
          v193.write(v194);
        }
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v195.write(v196);
          }
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v197.write(v198);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v569 = sequence$$13.length;
  var v515 = v569 <= firstIndexToMutate;
  var v570 = !v515;
  if (v570) {
    v515 = lastIndexToMutate < 0;
  }
  var v416 = v515;
  var v516 = !v416;
  if (v516) {
    v416 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v416;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v417 = Math.random();
    var v204 = v417 * maxNum;
    introspect(JAM.policy.p15) {
      randNum = Math.floor(v204);
    }
    var v418 = randNum < firstIndexToMutate;
    var v517 = !v418;
    if (v517) {
      v418 = randNum > lastIndexToMutate;
    }
    var v205 = v418;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p15) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v419 = Math.random();
      var v420 = components$$1.length;
      var v206 = v419 * v420;
      introspect(JAM.policy.p15) {
        componentsIndex = Math.round(v206);
      }
      var v421 = components$$1.length;
      var v207 = componentsIndex == v421;
      if (v207) {
        componentsIndex = 0;
      }
      var v422 = components$$1[componentsIndex];
      var v208 = v422 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v423 = sequence$$13.substring(0, randNum)
    }
    var v424 = components$$1[componentsIndex];
    var v209 = v423 + v424;
    var v425 = randNum + 1;
    var v426 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v210 = sequence$$13.substring(v425, v426)
    }
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v212.write(v213);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v427 = Math.random();
    var v428 = components$$2.length;
    var v214 = v427 * v428;
    introspect(JAM.policy.p15) {
      tempNum$$1 = Math.floor(v214);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v429 = sequence$$14.length;
    var v217 = v429 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v215.write(v216);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v219.write(v220);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    introspect(JAM.policy.p13) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v221.length;
    var v571 = sequence$$15.length;
    var v518 = v571 - lookAhead;
    var v519 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v430 = sequence$$15.substring(v518, v519)
    }
    var v222 = v430 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v223 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v226 = outputWindow.document;
  var v572 = '<tr><td class="title" width="200px">' + "Site:";
  var v520 = v572 + '</td><td class="title">';
  var v431 = v520 + "Positions:";
  var v227 = v431 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v226.write(v227);
  }
  var i$$9 = 0;
  var v432 = arrayOfItems.length;
  var v243 = i$$9 < v432;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v433 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v228 = v433.match(/\/.+\//)
    }
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v573 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v521 = v573.match(/\)\D*\d+/)
    }
    var v434 = v521.toString();
    introspect(JAM.policy.p16) {
      var v229 = v434.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v229);
    introspect(JAM.policy.p17) {
      var v235 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v435 = matchPosition >= lowerLimit;
      if (v435) {
        v435 = matchPosition < upperLimit;
      }
      var v233 = v435;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v436 = matchPosition - shiftValue;
        var v232 = v436 + 1;
        tempString$$1 = v231 + v232;
      }
      var v437 = matchExp.lastIndex;
      var v522 = RegExp.lastMatch;
      var v438 = v522.length;
      var v234 = v437 - v438;
      matchExp.lastIndex = v234 + 1;
      introspect(JAM.policy.p17) {
        v235 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p15) {
      var v439 = tempString$$1.search(/\d/)
    }
    var v236 = v439 != -1;
    if (v236) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v647 = '<tr><td class="' + backGroundClass;
    var v635 = v647 + '">';
    var v667 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v658 = v667.match(/\([^\(]+\)/)
    }
    var v648 = v658.toString();
    introspect(JAM.policy.p16) {
      var v636 = v648.replace(/\(|\)/g, "")
    }
    var v623 = v635 + v636;
    var v606 = v623 + '</td><td class="';
    var v574 = v606 + backGroundClass;
    var v523 = v574 + '">';
    var v440 = v523 + tempString$$1;
    var v242 = v440 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v241.write(v242);
    }
    timesFound = 0;
    i$$9++;
    var v441 = arrayOfItems.length;
    v243 = i$$9 < v441;
  }
  var v244 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v244.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v246 = outputWindow.document;
  var v624 = '<tr><td class="title">' + "Pattern:";
  var v607 = v624 + '</td><td class="title">';
  var v575 = v607 + "Times found:";
  var v524 = v575 + '</td><td class="title">';
  var v442 = v524 + "Percentage:";
  var v247 = v442 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v246.write(v247);
  }
  var i$$10 = 0;
  var v443 = arrayOfItems$$1.length;
  var v256 = i$$10 < v443;
  for (;v256;) {
    var tempNumber = 0;
    var v444 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v248 = v444.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v445 = sequence$$16.search(matchExp$$1)
    }
    var v250 = v445 != -1;
    if (v250) {
      introspect(JAM.policy.p17) {
        var v249 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v525 = originalLength + 1;
    var v608 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v576 = v608.match(/\d+/)
    }
    var v526 = parseFloat(v576);
    var v446 = v525 - v526;
    var v253 = v446 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v447 = originalLength + 1;
      var v577 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p15) {
        var v527 = v577.match(/\d+/)
      }
      var v448 = parseFloat(v527);
      var v252 = v447 - v448;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v668 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v659 = v668.match(/\([^\(]+\)\b/)
    }
    var v649 = v659.toString();
    introspect(JAM.policy.p16) {
      var v637 = v649.replace(/\(|\)/g, "")
    }
    var v625 = "<tr><td>" + v637;
    var v609 = v625 + "</td><td>";
    var v578 = v609 + tempNumber;
    var v528 = v578 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v529 = percentage.toFixed(2)
    }
    var v449 = v528 + v529;
    var v255 = v449 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v254.write(v255);
    }
    i$$10++;
    var v450 = arrayOfItems$$1.length;
    v256 = i$$10 < v450;
  }
  var v257 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v257.write("</tbody></table>\n");
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
  var v451 = sequence$$17.length;
  var v264 = v451 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v452 = Math.random();
    var v258 = v452 * maxNum$$1;
    introspect(JAM.policy.p15) {
      randNum$$1 = Math.floor(v258);
    }
    introspect(JAM.policy.p15) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v259, v260);
    }
    sequence$$17 = tempString1 + tempString2;
    var v453 = tempSeq.length;
    var v263 = v453 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v261.write(v262);
      }
      tempSeq = "";
    }
    var v454 = sequence$$17.length;
    v264 = v454 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v265.write(v266);
  }
  return true;
}
function dnaStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v455 = testScript();
  var v267 = v455 == false;
  if (v267) {
    return false;
  }
  var v638 = theDocument.forms;
  var v626 = v638[0];
  var v610 = v626.elements;
  var v579 = v610[0];
  var v530 = checkFormElement(v579);
  var v456 = v530 == false;
  var v532 = !v456;
  if (v532) {
    var v650 = theDocument.forms;
    var v639 = v650[0];
    var v627 = v639.elements;
    var v611 = v627[0];
    var v580 = v611.value;
    var v531 = checkSequenceLength(v580, maxInput$$3);
    v456 = v531 == false;
  }
  var v268 = v456;
  if (v268) {
    return false;
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow("DNA Stats");
  var v612 = theDocument.forms;
  var v581 = v612[0];
  var v533 = v581.elements;
  var v457 = v533[0];
  var v269 = v457.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v458 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v458;
  for (;v275;) {
    var v270 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v270);
    var v271 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v271);
    newDna = removeNonDna(newDna);
    var v272 = outputWindow.document;
    var v273 = getInfoFromTitleAndSequence(title$$9, newDna);
    introspect(JAM.policy.p17) {
      v272.write(v273);
    }
    writeSequenceStats(newDna, itemsToCheck);
    var v274 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v274.write("<br />\n<br />\n");
    }
    i$$11++;
    var v459 = arrayOfFasta$$1.length;
    v275 = i$$11 < v459;
  }
  closeWindow();
  return true;
}
document.onload = v2;
introspect(JAM.policy.p9) {
  var v276 = document.getElementById("submitbtn")
}
v276.onclick = v3;
introspect(JAM.policy.p9) {
  var v277 = document.getElementById("clearbtn")
}
v277.onclick = v4
