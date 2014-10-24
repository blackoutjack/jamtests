function v4() {
  var v570 = document.forms;
  var v483 = v570[0];
  var v294 = v483.elements;
  var v5 = v294[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    groupDna(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v295 = document.main_form;
  var v7 = v295.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p27) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v296 = arrayOfSequences.length;
  var v9 = v296 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v11 = i$$1 < v297;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v629 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p28) {
      var v571 = v629.search(/\S/)
    }
    var v484 = v571 == -1;
    var v573 = !v484;
    if (v573) {
      introspect(JAM.policy.p26) {
        var v630 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p28) {
        var v572 = v630.search(/\S/)
      }
      v484 = v572 == -1;
    }
    var v298 = v484;
    var v486 = !v298;
    if (v486) {
      introspect(JAM.policy.p26) {
        var v574 = arrayOfSequences[i$$1]
      }
      var v485 = v574.length;
      v298 = v485 != lengthOfAlign;
    }
    var v10 = v298;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v299 = arrayOfTitles.length;
    v11 = i$$1 < v299;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p28) {
    var v670 = codonTable.search(/AmAcid/)
  }
  var v631 = v670 == -1;
  var v672 = !v631;
  if (v672) {
    introspect(JAM.policy.p28) {
      var v671 = codonTable.search(/Codon/)
    }
    v631 = v671 == -1;
  }
  var v575 = v631;
  var v633 = !v575;
  if (v633) {
    introspect(JAM.policy.p28) {
      var v632 = codonTable.search(/Number/)
    }
    v575 = v632 == -1;
  }
  var v487 = v575;
  var v577 = !v487;
  if (v577) {
    introspect(JAM.policy.p28) {
      var v576 = codonTable.search(/\/1000/)
    }
    v487 = v576 == -1;
  }
  var v300 = v487;
  var v489 = !v300;
  if (v489) {
    introspect(JAM.policy.p28) {
      var v488 = codonTable.search(/Fraction\s*\.\./)
    }
    v300 = v488 == -1;
  }
  var v12 = v300;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v490 = formElement.value;
  introspect(JAM.policy.p28) {
    var v301 = v490.search(/\S/)
  }
  var v13 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v16 = z$$2 < v302;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v491 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p28) {
      var v303 = v491.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v303 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns[z$$2]
    }
    var v304 = moreExpressionCheck(v492);
    var v15 = v304 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v16 = z$$2 < v305;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v25 = j < v306;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v578 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v493 = v578.match(/\/.+\//)
    }
    var v307 = v493 + "gi";
    var v773 = eval(v307);
    introspect(JAM.policy.p13) {
      v19[v20] = v773;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v308 = v494.match(/=[a-zA-Z\*]/)
    }
    var v774 = v308.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v774;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v309 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p27) {
      var v775 = v309.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v775;
    }
    j = j + 1;
    var v310 = arrayOfPatterns.length;
    v25 = j < v310;
  }
  var i$$2 = 0;
  var v495 = testSequence.length;
  var v311 = v495 - 3;
  var v32 = i$$2 <= v311;
  for (;v32;) {
    var v26 = i$$2 + 3;
    introspect(JAM.policy.p27) {
      codon = testSequence.substring(i$$2, v26);
    }
    j = 0;
    var v312 = geneticCodeMatchExp.length;
    var v30 = j < v312;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v496 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p39) {
        var v313 = codon.search(v496)
      }
      var v29 = v313 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v314 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v314 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v315 = geneticCodeMatchExp.length;
      v30 = j < v315;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v497 = testSequence.length;
    var v316 = v497 - 3;
    v32 = i$$2 <= v316;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v317;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v498 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p28) {
      var v318 = v498.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v33 = v318 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v319;
  }
  var i$$3 = 0;
  var v320 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v320;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v499 = arrayOfPatterns$$1[i$$3]
    }
    var v321 = "[" + v499;
    var v35 = v321 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v322;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v500 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p39) {
        var v323 = v500.search(re)
      }
      var v36 = v323 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v324 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v324;
    }
    i$$3 = i$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v325;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v326 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v326;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v501 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p28) {
      var v327 = v501.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v39 = v327 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v502 = arrayOfPatterns$$2[z$$4]
    }
    var v328 = moreExpressionCheck(v502);
    var v40 = v328 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v329 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v329;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v579 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p27) {
    var v503 = v579.replace(/[^A-Za-z]/g, "")
  }
  var v330 = v503.length;
  var v43 = v330 > maxInput;
  if (v43) {
    var v331 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v331 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v332 = text$$8.length;
  var v45 = v332 > maxInput$$1;
  if (v45) {
    var v333 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v333 + " characters.";
    alert(v44);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v46.write("</form>");
  }
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v47.write("</div>");
  }
  var v48 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v48.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v49.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v50.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v334 = alignArray.length;
  var v52 = v334 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v335 = alignArray.length;
  var v54 = i$$4 < v335;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v504 = alignArray[i$$4]
    }
    introspect(JAM.policy.p28) {
      var v336 = v504.search(/[^\s]+\s/)
    }
    var v53 = v336 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v337 = alignArray.length;
    v54 = i$$4 < v337;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p27) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p27) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p28) {
    var v338 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v57 = v338 != -1;
  if (v57) {
    introspect(JAM.policy.p39) {
      var v56 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v56;) {
      var v55 = matchArray[0];
      introspect(JAM.policy.p39) {
        arrayOfFasta.push(v55);
      }
      introspect(JAM.policy.p39) {
        v56 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v339 = sequence$$2.length;
  var v58 = "&gt;results for " + v339;
  var stringToReturn = v58 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v340 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v60 = v340 != -1;
  if (v60) {
    var v341 = stringToReturn + '"';
    var v59 = v341 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v342 = stringToReturn + ' starting "';
  introspect(JAM.policy.p22) {
    var v343 = sequence$$2.substring(0, 10)
  }
  var v61 = v342 + v343;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v344 = sequenceOne.length;
  var v62 = "Search results for " + v344;
  var stringToReturn$$1 = v62 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v345 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v64 = v345 != -1;
  if (v64) {
    var v346 = stringToReturn$$1 + '"';
    var v63 = v346 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v347 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p22) {
    var v348 = sequenceOne.substring(0, 10)
  }
  var v65 = v347 + v348;
  stringToReturn$$1 = v65 + '"\n';
  var v349 = stringToReturn$$1 + "and ";
  var v350 = sequenceTwo.length;
  var v66 = v349 + v350;
  stringToReturn$$1 = v66 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v351 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v68 = v351 != -1;
  if (v68) {
    var v352 = stringToReturn$$1 + '"';
    var v67 = v352 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v353 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p22) {
    var v354 = sequenceTwo.substring(0, 10)
  }
  var v69 = v353 + v354;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v355 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v355;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v580 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p28) {
      var v505 = v580.match(/\/.+\//)
    }
    var v356 = v505 + "gi";
    var v776 = eval(v356);
    introspect(JAM.policy.p13) {
      v72[v73] = v776;
    }
    j$$2 = j$$2 + 1;
    var v357 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v357;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v358 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v358;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v506 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p28) {
      var v359 = v506.match(/=[a-zA-Z\*]/)
    }
    var v777 = v359.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v777;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v360 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p27) {
      var v778 = v360.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v78[v79] = v778;
    }
    j$$3 = j$$3 + 1;
    var v361 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v361;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v362 = sequence$$3.length;
  var v81 = "Results for " + v362;
  var stringToReturn$$2 = v81 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v363 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v83 = v363 != -1;
  if (v83) {
    var v364 = stringToReturn$$2 + '"';
    var v82 = v364 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v365 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p22) {
    var v366 = sequence$$3.substring(0, 10)
  }
  var v84 = v365 + v366;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v367 = v507 + " ";
  var v368 = sequence$$4.length;
  var v86 = v367 + v368;
  var stringToReturn$$3 = v86 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v369 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v88 = v369 != -1;
  if (v88) {
    var v370 = stringToReturn$$3 + '"';
    var v87 = v370 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v371 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p22) {
    var v372 = sequence$$4.substring(0, 10)
  }
  var v89 = v371 + v372;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v373 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v373;
  var stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v374 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v93 = v374 != -1;
  if (v93) {
    var v375 = stringToReturn$$4 + '"';
    var v92 = v375 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v376 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p22) {
    var v377 = sequenceOne$$1.substring(0, 10)
  }
  var v94 = v376 + v377;
  stringToReturn$$4 = v94 + '"\n';
  var v378 = stringToReturn$$4 + "and ";
  var v379 = sequenceTwo$$1.length;
  var v95 = v378 + v379;
  stringToReturn$$4 = v95 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v380 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v97 = v380 != -1;
  if (v97) {
    var v381 = stringToReturn$$4 + '"';
    var v96 = v381 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v382 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p22) {
    var v383 = sequenceTwo$$1.substring(0, 10)
  }
  var v98 = v382 + v383;
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
    var v384 = Math.random();
    var v385 = components.length;
    var v100 = v384 * v385;
    introspect(JAM.policy.p28) {
      tempNum = Math.floor(v100);
    }
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    introspect(JAM.policy.p39) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p24) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p28) {
    var v386 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v102 = v386 != -1;
  if (v102) {
    introspect(JAM.policy.p27) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p28) {
    var v387 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v387 != -1;
  if (v104) {
    introspect(JAM.policy.p27) {
      var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v103.toString();
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p28) {
    var v751 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v744 = v751 != -1;
  var v753 = !v744;
  if (v753) {
    introspect(JAM.policy.p28) {
      var v752 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v744 = v752 != -1;
  }
  var v735 = v744;
  var v746 = !v735;
  if (v746) {
    introspect(JAM.policy.p28) {
      var v745 = expressionToCheck.search(/\[\]/)
    }
    v735 = v745 != -1;
  }
  var v726 = v735;
  var v737 = !v726;
  if (v737) {
    introspect(JAM.policy.p28) {
      var v736 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v726 = v736 != -1;
  }
  var v715 = v726;
  var v728 = !v715;
  if (v728) {
    introspect(JAM.policy.p28) {
      var v727 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v715 = v727 != -1;
  }
  var v694 = v715;
  var v717 = !v694;
  if (v717) {
    introspect(JAM.policy.p28) {
      var v716 = expressionToCheck.search(/\|\|/)
    }
    v694 = v716 != -1;
  }
  var v673 = v694;
  var v696 = !v673;
  if (v696) {
    introspect(JAM.policy.p28) {
      var v695 = expressionToCheck.search(/\/\|/)
    }
    v673 = v695 != -1;
  }
  var v634 = v673;
  var v675 = !v634;
  if (v675) {
    introspect(JAM.policy.p28) {
      var v674 = expressionToCheck.search(/\|\//)
    }
    v634 = v674 != -1;
  }
  var v581 = v634;
  var v636 = !v581;
  if (v636) {
    introspect(JAM.policy.p28) {
      var v635 = expressionToCheck.search(/\[.\]/)
    }
    v581 = v635 != -1;
  }
  var v508 = v581;
  var v583 = !v508;
  if (v583) {
    introspect(JAM.policy.p28) {
      var v582 = expressionToCheck.search(/\</)
    }
    v508 = v582 != -1;
  }
  var v388 = v508;
  var v510 = !v388;
  if (v510) {
    introspect(JAM.policy.p28) {
      var v509 = expressionToCheck.search(/\>/)
    }
    v388 = v509 != -1;
  }
  var v105 = v388;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v106.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v107.write("<pre>");
  }
  var v108 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v108.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v109.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p25) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v584 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v584 + "<head>\n";
  var v389 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v110.write(v111);
  }
  if (isColor) {
    var v112 = outputWindow.document;
    var v766 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v762 = v766 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v758 = v762 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v754 = v758 + "div.info {font-weight: bold}\n";
    var v747 = v754 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v747 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v729 = v738 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v718 = v729 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v718 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v676 = v697 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v637 = v676 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v585 = v637 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v585 + "td.many {color: #000000}\n";
    var v390 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v390 + "</style>\n";
    introspect(JAM.policy.p39) {
      v112.write(v113);
    }
  } else {
    var v114 = outputWindow.document;
    var v770 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v767 = v770 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v763 = v767 + "div.title {display: none}\n";
    var v759 = v763 + "div.info {font-weight: bold}\n";
    var v755 = v759 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v755 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v748 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v730 = v739 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v719 = v730 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v719 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v698 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v677 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v586 = v638 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v586 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v391 = v513 + "img {display: none}\n";
    var v115 = v391 + "</style>\n";
    introspect(JAM.policy.p39) {
      v114.write(v115);
    }
  }
  var v116 = outputWindow.document;
  var v587 = "</head>\n" + '<body class="main">\n';
  var v514 = v587 + '<div class="title">';
  var v392 = v514 + title$$6;
  var v117 = v392 + " results</div>\n";
  introspect(JAM.policy.p39) {
    v116.write(v117);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p25) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v588 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v588 + "<head>\n";
  var v393 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v118.write(v119);
  }
  if (isBackground) {
    var v120 = outputWindow.document;
    var v768 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v760 = v764 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v756 = v760 + "div.info {font-weight: bold}\n";
    var v749 = v756 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v740 = v749 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v731 = v740 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v720 = v731 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v699 = v720 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v678 = v699 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v639 = v678 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v589 = v639 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v589 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v394 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v394 + "</style>\n";
    introspect(JAM.policy.p39) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v772 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v771 = v772 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v769 = v771 + "div.title {display: none}\n";
    var v765 = v769 + "div.info {font-weight: bold}\n";
    var v761 = v765 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v757 = v761 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v750 = v757 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v741 = v750 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v732 = v741 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v721 = v732 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v700 = v721 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v679 = v700 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v640 = v679 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v590 = v640 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v590 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v395 = v517 + "img {display: none}\n";
    var v123 = v395 + "</style>\n";
    introspect(JAM.policy.p39) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v591 = "</head>\n" + '<body class="main">\n';
  var v518 = v591 + '<div class="title">';
  var v396 = v518 + title$$8;
  var v125 = v396 + " results</div>\n";
  introspect(JAM.policy.p39) {
    v124.write(v125);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p27) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p27) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p27) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p27) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p27) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p27) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p27) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p27) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p27) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p28) {
    var v397 = dnaSequence$$1.search(/./)
  }
  var v126 = v397 != -1;
  if (v126) {
    introspect(JAM.policy.p28) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p24) {
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
  introspect(JAM.policy.p39) {
    testArray.push(testString);
  }
  var v398 = testArray[0];
  var v130 = v398 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p39) {
    var v399 = testString.search(re$$2)
  }
  var v131 = v399 == -1;
  if (v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v132 = !caughtException;
  if (v132) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p27) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v133 = testString != "1X2X3X";
  if (v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p23) {
    var v400 = testNum.toFixed(3)
  }
  var v134 = v400 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p23) {
    var v401 = testNum.toPrecision(5)
  }
  var v135 = v401 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p28) {
    var v402 = theNumber$$1.search(/\d/)
  }
  var v136 = v402 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p28) {
    var v641 = emblFile.search(/ID/)
  }
  var v592 = v641 == -1;
  var v643 = !v592;
  if (v643) {
    introspect(JAM.policy.p28) {
      var v642 = emblFile.search(/AC/)
    }
    v592 = v642 == -1;
  }
  var v519 = v592;
  var v594 = !v519;
  if (v594) {
    introspect(JAM.policy.p28) {
      var v593 = emblFile.search(/DE/)
    }
    v519 = v593 == -1;
  }
  var v403 = v519;
  var v521 = !v403;
  if (v521) {
    introspect(JAM.policy.p28) {
      var v520 = emblFile.search(/SQ/)
    }
    v403 = v520 == -1;
  }
  var v137 = v403;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p28) {
    var v404 = theNumber$$2.search(/\d/)
  }
  var v138 = v404 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v405 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v405 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p28) {
    var v406 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v141 = v406 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p28) {
    var v407 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v142 = v407 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p28) {
    var v644 = genBankFile.search(/LOCUS/)
  }
  var v595 = v644 == -1;
  var v646 = !v595;
  if (v646) {
    introspect(JAM.policy.p28) {
      var v645 = genBankFile.search(/DEFINITION/)
    }
    v595 = v645 == -1;
  }
  var v522 = v595;
  var v597 = !v522;
  if (v597) {
    introspect(JAM.policy.p28) {
      var v596 = genBankFile.search(/ACCESSION/)
    }
    v522 = v596 == -1;
  }
  var v408 = v522;
  var v524 = !v408;
  if (v524) {
    introspect(JAM.policy.p28) {
      var v523 = genBankFile.search(/ORIGIN/)
    }
    v408 = v523 == -1;
  }
  var v143 = v408;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p28) {
    var v647 = genBankFile$$1.search(/LOCUS/)
  }
  var v598 = v647 == -1;
  var v649 = !v598;
  if (v649) {
    introspect(JAM.policy.p28) {
      var v648 = genBankFile$$1.search(/DEFINITION/)
    }
    v598 = v648 == -1;
  }
  var v525 = v598;
  var v600 = !v525;
  if (v600) {
    introspect(JAM.policy.p28) {
      var v599 = genBankFile$$1.search(/ACCESSION/)
    }
    v525 = v599 == -1;
  }
  var v409 = v525;
  var v527 = !v409;
  if (v527) {
    introspect(JAM.policy.p28) {
      var v526 = genBankFile$$1.search(/ORIGIN/)
    }
    v409 = v526 == -1;
  }
  var v144 = v409;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v410 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v145 = v410 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p28) {
    var v650 = emblFile$$1.search(/ID/)
  }
  var v601 = v650 == -1;
  var v652 = !v601;
  if (v652) {
    introspect(JAM.policy.p28) {
      var v651 = emblFile$$1.search(/AC/)
    }
    v601 = v651 == -1;
  }
  var v528 = v601;
  var v603 = !v528;
  if (v603) {
    introspect(JAM.policy.p28) {
      var v602 = emblFile$$1.search(/DE/)
    }
    v528 = v602 == -1;
  }
  var v411 = v528;
  var v530 = !v411;
  if (v530) {
    introspect(JAM.policy.p28) {
      var v529 = emblFile$$1.search(/SQ/)
    }
    v411 = v529 == -1;
  }
  var v146 = v411;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v412 = emblFile$$1.search(/^FT/m)
  }
  var v147 = v412 == -1;
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
    var v413 = basePerLine / groupSize;
    var v152 = j$$6 <= v413;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v414 = k + i$$5;
        introspect(JAM.policy.p39) {
          var v150 = text$$10.charAt(v414)
        }
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v415 = basePerLine / groupSize;
      v152 = j$$6 <= v415;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    introspect(JAM.policy.p39) {
      v153.write(v154);
    }
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
    var v416 = adjustment < 0;
    if (v416) {
      v416 = adjusted >= 0;
    }
    var v156 = v416;
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
    var v417 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v417;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v418 = i$$6 + k$$1;
        var v157 = v418 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v419 = k$$1 + i$$6;
        introspect(JAM.policy.p39) {
          var v159 = text$$12.charAt(v419)
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
        var v420 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v420, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v421 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v421;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v604 = adjustNumbering(lineNum, numberingAdjustment);
      var v531 = rightNum(v604, "", 8, tabIn$$3);
      var v422 = v531 + lineOfText$$1;
      var v167 = v422 + "\n";
      introspect(JAM.policy.p39) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v605 = adjustNumbering(lineNum, numberingAdjustment);
        var v532 = rightNum(v605, "", 8, tabIn$$3);
        var v533 = complement(lineOfText$$1);
        var v423 = v532 + v533;
        var v169 = v423 + "\n";
        introspect(JAM.policy.p39) {
          v168.write(v169);
        }
        var v170 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v170.write("\n");
        }
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v534 = lineOfText$$1;
        var v535 = adjustNumbering(i$$6, numberingAdjustment);
        var v424 = v534 + v535;
        var v173 = v424 + "\n";
        introspect(JAM.policy.p39) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v536 = complement(lineOfText$$1);
          var v537 = adjustNumbering(i$$6, numberingAdjustment);
          var v425 = v536 + v537;
          var v175 = v425 + "\n";
          introspect(JAM.policy.p39) {
            v174.write(v175);
          }
          var v176 = outputWindow.document;
          introspect(JAM.policy.p24) {
            v176.write("\n");
          }
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          introspect(JAM.policy.p39) {
            v178.write(v179);
          }
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p39) {
            v180.write(v181);
          }
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v426 = complement(lineOfText$$1);
            var v183 = v426 + "\n";
            introspect(JAM.policy.p39) {
              v182.write(v183);
            }
            var v184 = outputWindow.document;
            introspect(JAM.policy.p24) {
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
    var v427 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v427;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v428 = i$$7 + k$$2;
        var v190 = v428 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v429 = k$$2 + i$$7;
        introspect(JAM.policy.p39) {
          var v192 = text$$13.charAt(v429)
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
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v430 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v430;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v538 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v431 = v538 + lineOfText$$2;
      var v200 = v431 + "\n";
      introspect(JAM.policy.p39) {
        v199.write(v200);
      }
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v432 = lineOfText$$2 + i$$7;
        var v202 = v432 + "\n";
        introspect(JAM.policy.p39) {
          v201.write(v202);
        }
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p39) {
            v203.write(v204);
          }
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p39) {
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
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v606 = sequence$$13.length;
  var v539 = v606 <= firstIndexToMutate;
  var v607 = !v539;
  if (v607) {
    v539 = lastIndexToMutate < 0;
  }
  var v433 = v539;
  var v540 = !v433;
  if (v540) {
    v433 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v433;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v434 = Math.random();
    var v212 = v434 * maxNum;
    introspect(JAM.policy.p28) {
      randNum = Math.floor(v212);
    }
    var v435 = randNum < firstIndexToMutate;
    var v541 = !v435;
    if (v541) {
      v435 = randNum > lastIndexToMutate;
    }
    var v213 = v435;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p28) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v436 = Math.random();
      var v437 = components$$1.length;
      var v214 = v436 * v437;
      introspect(JAM.policy.p28) {
        componentsIndex = Math.round(v214);
      }
      var v438 = components$$1.length;
      var v215 = componentsIndex == v438;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v439 = components$$1[componentsIndex]
      }
      var v216 = v439 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p22) {
      var v440 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v441 = components$$1[componentsIndex]
    }
    var v217 = v440 + v441;
    var v442 = randNum + 1;
    var v443 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v218 = sequence$$13.substring(v442, v443)
    }
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  introspect(JAM.policy.p39) {
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
    var v444 = Math.random();
    var v445 = components$$2.length;
    var v222 = v444 * v445;
    introspect(JAM.policy.p28) {
      tempNum$$1 = Math.floor(v222);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v446 = sequence$$14.length;
    var v225 = v446 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      introspect(JAM.policy.p39) {
        v223.write(v224);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  introspect(JAM.policy.p39) {
    v227.write(v228);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    introspect(JAM.policy.p22) {
      var v229 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v229.length;
    var v608 = sequence$$15.length;
    var v542 = v608 - lookAhead;
    var v543 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v447 = sequence$$15.substring(v542, v543)
    }
    var v230 = v447 + sequence$$15;
    introspect(JAM.policy.p22) {
      var v231 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v233.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v234 = outputWindow.document;
  var v609 = '<tr><td class="title" width="200px">' + "Site:";
  var v544 = v609 + '</td><td class="title">';
  var v448 = v544 + "Positions:";
  var v235 = v448 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v234.write(v235);
  }
  var i$$9 = 0;
  var v449 = arrayOfItems.length;
  var v251 = i$$9 < v449;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v450 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v236 = v450.match(/\/.+\//)
    }
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAM.policy.p26) {
      var v610 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v545 = v610.match(/\)\D*\d+/)
    }
    var v451 = v545.toString();
    introspect(JAM.policy.p27) {
      var v237 = v451.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v237);
    introspect(JAM.policy.p39) {
      var v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v452 = matchPosition >= lowerLimit;
      if (v452) {
        v452 = matchPosition < upperLimit;
      }
      var v241 = v452;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v453 = matchPosition - shiftValue;
        var v240 = v453 + 1;
        tempString$$1 = v239 + v240;
      }
      var v454 = matchExp.lastIndex;
      var v546 = RegExp.lastMatch;
      var v455 = v546.length;
      var v242 = v454 - v455;
      matchExp.lastIndex = v242 + 1;
      introspect(JAM.policy.p39) {
        v243 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p28) {
      var v456 = tempString$$1.search(/\d/)
    }
    var v244 = v456 != -1;
    if (v244) {
      introspect(JAM.policy.p27) {
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
    var v722 = '<tr><td class="' + backGroundClass;
    var v701 = v722 + '">';
    introspect(JAM.policy.p26) {
      var v742 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v733 = v742.match(/\([^\(]+\)/)
    }
    var v723 = v733.toString();
    introspect(JAM.policy.p27) {
      var v702 = v723.replace(/\(|\)/g, "")
    }
    var v680 = v701 + v702;
    var v653 = v680 + '</td><td class="';
    var v611 = v653 + backGroundClass;
    var v547 = v611 + '">';
    var v457 = v547 + tempString$$1;
    var v250 = v457 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v249.write(v250);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v458 = arrayOfItems.length;
    v251 = i$$9 < v458;
  }
  var v252 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v252.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v253.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v254 = outputWindow.document;
  var v681 = '<tr><td class="title">' + "Pattern:";
  var v654 = v681 + '</td><td class="title">';
  var v612 = v654 + "Times found:";
  var v548 = v612 + '</td><td class="title">';
  var v459 = v548 + "Percentage:";
  var v255 = v459 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v254.write(v255);
  }
  var i$$10 = 0;
  var v460 = arrayOfItems$$1.length;
  var v264 = i$$10 < v460;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v461 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v256 = v461.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p39) {
      var v462 = sequence$$16.search(matchExp$$1)
    }
    var v258 = v462 != -1;
    if (v258) {
      introspect(JAM.policy.p39) {
        var v257 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v549 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v655 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v613 = v655.match(/\d+/)
    }
    var v550 = parseFloat(v613);
    var v463 = v549 - v550;
    var v261 = v463 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v464 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v614 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p28) {
        var v551 = v614.match(/\d+/)
      }
      var v465 = parseFloat(v551);
      var v260 = v464 - v465;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v743 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v734 = v743.match(/\([^\(]+\)\b/)
    }
    var v724 = v734.toString();
    introspect(JAM.policy.p27) {
      var v703 = v724.replace(/\(|\)/g, "")
    }
    var v682 = "<tr><td>" + v703;
    var v656 = v682 + "</td><td>";
    var v615 = v656 + tempNumber;
    var v552 = v615 + "</td><td>";
    introspect(JAM.policy.p23) {
      var v553 = percentage.toFixed(2)
    }
    var v466 = v552 + v553;
    var v263 = v466 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v262.write(v263);
    }
    i$$10 = i$$10 + 1;
    var v467 = arrayOfItems$$1.length;
    v264 = i$$10 < v467;
  }
  var v265 = outputWindow.document;
  introspect(JAM.policy.p24) {
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
  var v468 = sequence$$17.length;
  var v272 = v468 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v469 = Math.random();
    var v266 = v469 * maxNum$$1;
    introspect(JAM.policy.p28) {
      randNum$$1 = Math.floor(v266);
    }
    introspect(JAM.policy.p28) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p22) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    introspect(JAM.policy.p27) {
      tempString2 = sequence$$17.substring(v267, v268);
    }
    sequence$$17 = tempString1 + tempString2;
    var v470 = tempSeq.length;
    var v271 = v470 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      introspect(JAM.policy.p39) {
        v269.write(v270);
      }
      tempSeq = "";
    }
    var v471 = sequence$$17.length;
    v272 = v471 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  introspect(JAM.policy.p39) {
    v273.write(v274);
  }
  return true;
}
function groupDna(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var adjustedStart;
  var v472 = testScript();
  var v275 = v472 == false;
  if (v275) {
    return false;
  }
  var v704 = theDocument.forms;
  var v683 = v704[0];
  var v657 = v683.elements;
  var v616 = v657[0];
  var v554 = checkFormElement(v616);
  var v473 = v554 == false;
  var v556 = !v473;
  if (v556) {
    var v725 = theDocument.forms;
    var v705 = v725[0];
    var v684 = v705.elements;
    var v658 = v684[0];
    var v617 = v658.value;
    var v555 = checkSequenceLength(v617, maxInput$$3);
    v473 = v555 == false;
  }
  var v276 = v473;
  if (v276) {
    return false;
  }
  var v659 = theDocument.forms;
  var v618 = v659[0];
  var v557 = v618.elements;
  var v474 = v557[8];
  var v277 = v474.value;
  introspect(JAM.policy.p27) {
    adjustedStart = v277.replace(/[^\d\-]/g, "");
  }
  var v706 = theDocument.forms;
  var v685 = v706[0];
  var v660 = v685.elements;
  var v619 = v660[8];
  var v558 = checkFormElement(v619);
  var v475 = v558 == false;
  var v560 = !v475;
  if (v560) {
    var v559 = verifyMaxDigits(adjustedStart, 9999999999);
    v475 = v559 == false;
  }
  var v278 = v475;
  if (v278) {
    return false;
  }
  var v279 = parseInt(adjustedStart);
  adjustedStart = v279 - 1;
  openWindow("Group DNA");
  openPre();
  var v661 = theDocument.forms;
  var v620 = v661[0];
  var v561 = v620.elements;
  var v476 = v561[0];
  var v280 = v476.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v280);
  var i$$11 = 0;
  var v477 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v477;
  for (;v291;) {
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v281);
    introspect(JAM.policy.p26) {
      var v282 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v282);
    newDna = removeNonDna(newDna);
    var v283 = outputWindow.document;
    var v284 = getInfoFromTitleAndSequence(title$$9, newDna);
    introspect(JAM.policy.p39) {
      v283.write(v284);
    }
    var v707 = theDocument.forms;
    var v686 = v707[0];
    var v662 = v686.elements;
    var v621 = v662[4];
    var v562 = v621.options;
    var v708 = theDocument.forms;
    var v687 = v708[0];
    var v663 = v687.elements;
    var v622 = v663[4];
    var v563 = v622.selectedIndex;
    introspect(JAM.policy.p26) {
      var v478 = v562[v563]
    }
    var v285 = v478.value;
    var v709 = theDocument.forms;
    var v688 = v709[0];
    var v664 = v688.elements;
    var v623 = v664[5];
    var v564 = v623.options;
    var v710 = theDocument.forms;
    var v689 = v710[0];
    var v665 = v689.elements;
    var v624 = v665[5];
    var v565 = v624.selectedIndex;
    introspect(JAM.policy.p26) {
      var v479 = v564[v565]
    }
    var v286 = v479.value;
    var v287 = newDna.length;
    var v711 = theDocument.forms;
    var v690 = v711[0];
    var v666 = v690.elements;
    var v625 = v666[6];
    var v566 = v625.options;
    var v712 = theDocument.forms;
    var v691 = v712[0];
    var v667 = v691.elements;
    var v626 = v667[6];
    var v567 = v626.selectedIndex;
    introspect(JAM.policy.p26) {
      var v480 = v566[v567]
    }
    var v288 = v480.value;
    var v713 = theDocument.forms;
    var v692 = v713[0];
    var v668 = v692.elements;
    var v627 = v668[7];
    var v568 = v627.options;
    var v714 = theDocument.forms;
    var v693 = v714[0];
    var v669 = v693.elements;
    var v628 = v669[7];
    var v569 = v628.selectedIndex;
    introspect(JAM.policy.p26) {
      var v481 = v568[v569]
    }
    var v289 = v481.value;
    writeGroupNumDnaSetStart(newDna, "", v285, v286, 0, v287, v288, v289, adjustedStart);
    var v290 = outputWindow.document;
    introspect(JAM.policy.p24) {
      v290.write("\n\n");
    }
    i$$11 = i$$11 + 1;
    var v482 = arrayOfFasta$$1.length;
    v291 = i$$11 < v482;
  }
  closePre();
  closeWindow();
  return true;
}
document.onload = v2;
introspect(JAM.policy.p24) {
  var v292 = document.getElementById("submitbtn")
}
v292.onclick = v3;
introspect(JAM.policy.p24) {
  var v293 = document.getElementById("clearbtn")
}
v293.onclick = v4
