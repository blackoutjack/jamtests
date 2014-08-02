
JAM.startProfile('load');
function v4() {
  var v554 = document.forms;
  var v475 = v554[0];
  var v289 = v475.elements;
  var v5 = v289[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    genbankFasta(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v290 = document.main_form;
  var v7 = v290.main_submit;
  v7.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v291 = arrayOfSequences.length;
  var v9 = v291 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v292 = arrayOfTitles.length;
  var v11 = i$$1 < v292;
  for(;v11;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v555 = arrayOfTitles[i$$1]
    }
    var v476 = v555.search(/\S/);
    var v293 = v476 == -1;
    var v478 = !v293;
    if(v478) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v604 = arrayOfSequences[i$$1]
      }
      var v556 = v604.search(/\S/);
      var v477 = v556 == -1;
      var v558 = !v477;
      if(v558) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v605 = arrayOfSequences[i$$1]
        }
        var v557 = v605.length;
        v477 = v557 != lengthOfAlign
      }
      v293 = v477
    }
    var v10 = v293;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v294 = arrayOfTitles.length;
    v11 = i$$1 < v294
  }
  return true
}
function checkCodonTable(codonTable) {
  var v479 = codonTable.search(/AmAcid/);
  var v295 = v479 == -1;
  var v481 = !v295;
  if(v481) {
    var v559 = codonTable.search(/Codon/);
    var v480 = v559 == -1;
    var v561 = !v480;
    if(v561) {
      var v606 = codonTable.search(/Number/);
      var v560 = v606 == -1;
      var v608 = !v560;
      if(v608) {
        var v636 = codonTable.search(/\/1000/);
        var v607 = v636 == -1;
        var v638 = !v607;
        if(v638) {
          var v637 = codonTable.search(/Fraction\s*\.\./);
          v607 = v637 == -1
        }
        v560 = v607
      }
      v480 = v560
    }
    v295 = v480
  }
  var v12 = v295;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v482 = formElement.value;
  var v296 = v482.search(/\S/);
  var v13 = v296 == -1;
  if(v13) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v297 = arrayOfPatterns.length;
  var v16 = z$$2 < v297;
  for(;v16;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v483 = arrayOfPatterns[z$$2]
    }
    var v298 = v483.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v298 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfPatterns[z$$2]
    }
    var v299 = moreExpressionCheck(v484);
    var v15 = v299 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v300 = arrayOfPatterns.length;
    v16 = z$$2 < v300
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v301 = arrayOfPatterns.length;
  var v25 = j < v301;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = arrayOfPatterns[j]
    }
    var v485 = v562.match(/\/.+\//);
    var v302 = v485 + "gi";
    var v726 = eval(v302);
    v19[v20] = v726;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v486 = arrayOfPatterns[j]
    }
    var v303 = v486.match(/=[a-zA-Z\*]/);
    var v727 = v303.toString();
    v21[v22] = v727;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v304 = geneticCodeMatchResult[j]
    }
    var v728 = v304.replace(/=/g, "");
    v23[v24] = v728;
    j = j + 1;
    var v305 = arrayOfPatterns.length;
    v25 = j < v305
  }
  var i$$2 = 0;
  var v487 = testSequence.length;
  var v306 = v487 - 3;
  var v32 = i$$2 <= v306;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v307 = geneticCodeMatchExp.length;
    var v30 = j < v307;
    for(;v30;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v488 = geneticCodeMatchExp[j]
      }
      var v308 = codon.search(v488);
      var v29 = v308 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v309 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v309 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v310 = geneticCodeMatchExp.length;
      v30 = j < v310
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v489 = testSequence.length;
    var v311 = v489 - 3;
    v32 = i$$2 <= v311
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v312;
  for(;v34;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns$$1[z$$3]
    }
    var v313 = v490.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v313 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v314
  }
  var i$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v315;
  for(;v38;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = arrayOfPatterns$$1[i$$3]
    }
    var v316 = "[" + v491;
    var v35 = v316 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v317;
    for(;v37;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v492 = arrayOfPatterns$$1[j$$1]
      }
      var v318 = v492.search(re);
      var v36 = v318 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v319 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v319
    }
    i$$3 = i$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v320
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v321 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v321;
  for(;v41;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = arrayOfPatterns$$2[z$$4]
    }
    var v322 = v493.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v322 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns$$2[z$$4]
    }
    var v323 = moreExpressionCheck(v494);
    var v40 = v323 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v324 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v324
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v563 = getSequenceFromFasta(text$$7);
  var v495 = v563.replace(/[^A-Za-z]/g, "");
  var v325 = v495.length;
  var v43 = v325 > maxInput;
  if(v43) {
    var v326 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v326 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v327 = text$$8.length;
  var v45 = v327 > maxInput$$1;
  if(v45) {
    var v328 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v328 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = dnaSequence.replace(/g/g, "1");
  dnaSequence = dnaSequence.replace(/c/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "c");
  dnaSequence = dnaSequence.replace(/2/g, "g");
  dnaSequence = dnaSequence.replace(/G/g, "1");
  dnaSequence = dnaSequence.replace(/C/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "C");
  dnaSequence = dnaSequence.replace(/2/g, "G");
  dnaSequence = dnaSequence.replace(/a/g, "1");
  dnaSequence = dnaSequence.replace(/t/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "t");
  dnaSequence = dnaSequence.replace(/2/g, "a");
  dnaSequence = dnaSequence.replace(/A/g, "1");
  dnaSequence = dnaSequence.replace(/T/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "T");
  dnaSequence = dnaSequence.replace(/2/g, "A");
  dnaSequence = dnaSequence.replace(/u/g, "a");
  dnaSequence = dnaSequence.replace(/U/g, "A");
  dnaSequence = dnaSequence.replace(/r/g, "1");
  dnaSequence = dnaSequence.replace(/y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "y");
  dnaSequence = dnaSequence.replace(/2/g, "r");
  dnaSequence = dnaSequence.replace(/R/g, "1");
  dnaSequence = dnaSequence.replace(/Y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "Y");
  dnaSequence = dnaSequence.replace(/2/g, "R");
  dnaSequence = dnaSequence.replace(/k/g, "1");
  dnaSequence = dnaSequence.replace(/m/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "m");
  dnaSequence = dnaSequence.replace(/2/g, "k");
  dnaSequence = dnaSequence.replace(/K/g, "1");
  dnaSequence = dnaSequence.replace(/M/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "M");
  dnaSequence = dnaSequence.replace(/2/g, "K");
  dnaSequence = dnaSequence.replace(/b/g, "1");
  dnaSequence = dnaSequence.replace(/v/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "v");
  dnaSequence = dnaSequence.replace(/2/g, "b");
  dnaSequence = dnaSequence.replace(/B/g, "1");
  dnaSequence = dnaSequence.replace(/V/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "V");
  dnaSequence = dnaSequence.replace(/2/g, "B");
  dnaSequence = dnaSequence.replace(/d/g, "1");
  dnaSequence = dnaSequence.replace(/h/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "h");
  dnaSequence = dnaSequence.replace(/2/g, "d");
  dnaSequence = dnaSequence.replace(/D/g, "1");
  dnaSequence = dnaSequence.replace(/H/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "H");
  dnaSequence = dnaSequence.replace(/2/g, "D");
  return dnaSequence
}
function closeForm() {
  var v46 = outputWindow.document;
  v46.write("</form>");
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  v47.write("</div>");
  var v48 = outputWindow.document;
  v48.write("</pre>\n");
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  v49.write("</textarea>");
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  v50.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v329 = alignArray.length;
  var v52 = v329 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v330 = alignArray.length;
  var v54 = i$$4 < v330;
  for(;v54;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = alignArray[i$$4]
    }
    var v331 = v496.search(/[^\s]+\s/);
    var v53 = v331 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v332 = alignArray.length;
    v54 = i$$4 < v332
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "")
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v333 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v333 != -1;
  if(v57) {
    var v56 = matchArray = re$$1.exec(sequenceData);
    for(;v56;) {
      var v55 = matchArray[0];
      arrayOfFasta.push(v55);
      v56 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v334 = sequence$$2.length;
  var v58 = "&gt;results for " + v334;
  var stringToReturn = v58 + " residue sequence ";
  var v335 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v335 != -1;
  if(v60) {
    var v336 = stringToReturn + '"';
    var v59 = v336 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v337 = stringToReturn + ' starting "';
  var v338 = sequence$$2.substring(0, 10);
  var v61 = v337 + v338;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v339 = sequenceOne.length;
  var v62 = "Search results for " + v339;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v340 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v340 != -1;
  if(v64) {
    var v341 = stringToReturn$$1 + '"';
    var v63 = v341 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v342 = stringToReturn$$1 + ' starting "';
  var v343 = sequenceOne.substring(0, 10);
  var v65 = v342 + v343;
  stringToReturn$$1 = v65 + '"\n';
  var v344 = stringToReturn$$1 + "and ";
  var v345 = sequenceTwo.length;
  var v66 = v344 + v345;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v346 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v346 != -1;
  if(v68) {
    var v347 = stringToReturn$$1 + '"';
    var v67 = v347 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v348 = stringToReturn$$1 + ' starting "';
  var v349 = sequenceTwo.substring(0, 10);
  var v69 = v348 + v349;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v350 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v350;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v564 = arrayOfPatterns$$3[j$$2]
    }
    var v497 = v564.match(/\/.+\//);
    var v351 = v497 + "gi";
    var v729 = eval(v351);
    v72[v73] = v729;
    j$$2 = j$$2 + 1;
    var v352 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v352
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v353 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v353;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns$$4[j$$3]
    }
    var v354 = v498.match(/=[a-zA-Z\*]/);
    var v730 = v354.toString();
    v76[v77] = v730;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v355 = geneticCodeMatchResult$$1[j$$3]
    }
    var v731 = v355.replace(/=/g, "");
    v78[v79] = v731;
    j$$3 = j$$3 + 1;
    var v356 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v356
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v357 = sequence$$3.length;
  var v81 = "Results for " + v357;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v358 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v358 != -1;
  if(v83) {
    var v359 = stringToReturn$$2 + '"';
    var v82 = v359 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v360 = stringToReturn$$2 + ' starting "';
  var v361 = sequence$$3.substring(0, 10);
  var v84 = v360 + v361;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v499 = "Results for " + topology;
  var v362 = v499 + " ";
  var v363 = sequence$$4.length;
  var v86 = v362 + v363;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v364 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v364 != -1;
  if(v88) {
    var v365 = stringToReturn$$3 + '"';
    var v87 = v365 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v366 = stringToReturn$$3 + ' starting "';
  var v367 = sequence$$4.substring(0, 10);
  var v89 = v366 + v367;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v368 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v368;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v369 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v369 != -1;
  if(v93) {
    var v370 = stringToReturn$$4 + '"';
    var v92 = v370 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v371 = stringToReturn$$4 + ' starting "';
  var v372 = sequenceOne$$1.substring(0, 10);
  var v94 = v371 + v372;
  stringToReturn$$4 = v94 + '"\n';
  var v373 = stringToReturn$$4 + "and ";
  var v374 = sequenceTwo$$1.length;
  var v95 = v373 + v374;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v375 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v375 != -1;
  if(v97) {
    var v376 = stringToReturn$$4 + '"';
    var v96 = v376 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v377 = stringToReturn$$4 + ' starting "';
  var v378 = sequenceTwo$$1.substring(0, 10);
  var v98 = v377 + v378;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    var v379 = Math.random();
    var v380 = components.length;
    var v100 = v379 * v380;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v381 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v381 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v382 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v382 != -1;
  if(v104) {
    var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v103.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v500 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v383 = v500 != -1;
  var v502 = !v383;
  if(v502) {
    var v565 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v501 = v565 != -1;
    var v567 = !v501;
    if(v567) {
      var v609 = expressionToCheck.search(/\[\]/);
      var v566 = v609 != -1;
      var v611 = !v566;
      if(v611) {
        var v639 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v610 = v639 != -1;
        var v641 = !v610;
        if(v641) {
          var v652 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v640 = v652 != -1;
          var v654 = !v640;
          if(v654) {
            var v665 = expressionToCheck.search(/\|\|/);
            var v653 = v665 != -1;
            var v667 = !v653;
            if(v667) {
              var v677 = expressionToCheck.search(/\/\|/);
              var v666 = v677 != -1;
              var v679 = !v666;
              if(v679) {
                var v688 = expressionToCheck.search(/\|\//);
                var v678 = v688 != -1;
                var v690 = !v678;
                if(v690) {
                  var v697 = expressionToCheck.search(/\[.\]/);
                  var v689 = v697 != -1;
                  var v699 = !v689;
                  if(v699) {
                    var v704 = expressionToCheck.search(/\</);
                    var v698 = v704 != -1;
                    var v706 = !v698;
                    if(v706) {
                      var v705 = expressionToCheck.search(/\>/);
                      v698 = v705 != -1
                    }
                    v689 = v698
                  }
                  v678 = v689
                }
                v666 = v678
              }
              v653 = v666
            }
            v640 = v653
          }
          v610 = v640
        }
        v566 = v610
      }
      v501 = v566
    }
    v383 = v501
  }
  var v105 = v383;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  v106.write('<form action="">\n');
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  v107.write("<pre>");
  var v108 = outputWindow.document;
  v108.write('<div class="pre">');
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  v109.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v568 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v568 + "<head>\n";
  var v384 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v719 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v715 = v719 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v711 = v715 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v707 = v711 + "div.info {font-weight: bold}\n";
    var v700 = v707 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v700 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v680 = v691 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v668 = v680 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v668 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v642 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v612 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v569 = v612 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v504 = v569 + "td.many {color: #000000}\n";
    var v385 = v504 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v385 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v720 = v723 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {display: none}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v708 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v708 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v692 = v701 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v681 = v692 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v681 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v669 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v656 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v613 = v643 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v570 = v613 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v505 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v386 = v505 + "img {display: none}\n";
    var v115 = v386 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v571 = "</head>\n" + '<body class="main">\n';
  var v506 = v571 + '<div class="title">';
  var v387 = v506 + title$$6;
  var v117 = v387 + " results</div>\n";
  v116.write(v117);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v572 + "<head>\n";
  var v388 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v721 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v702 = v709 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v693 = v702 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v682 = v693 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v670 = v682 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v657 = v670 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v644 = v657 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v614 = v644 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v573 = v614 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v508 = v573 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v389 = v508 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v389 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v724 = v725 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v724 + "div.title {display: none}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v714 = v718 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v710 = v714 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v703 = v710 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v694 = v703 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v683 = v694 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v671 = v683 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v658 = v671 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v645 = v658 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v615 = v645 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v574 = v615 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v509 = v574 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v390 = v509 + "img {display: none}\n";
    var v123 = v390 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v510 = v575 + '<div class="title">';
  var v391 = v510 + title$$8;
  var v125 = v391 + " results</div>\n";
  v124.write(v125);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "")
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "")
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "")
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "")
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v392 = dnaSequence$$1.search(/./);
  var v126 = v392 != -1;
  if(v126) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("")
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v393 = testArray[0];
  var v130 = v393 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v394 = testString.search(re$$2);
  var v131 = v394 == -1;
  if(v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v132 = !caughtException;
  if(v132) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v133 = testString != "1X2X3X";
  if(v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v395 = testNum.toFixed(3);
  var v134 = v395 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v396 = testNum.toPrecision(5);
  var v135 = v396 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v397 = theNumber$$1.search(/\d/);
  var v136 = v397 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v511 = emblFile.search(/ID/);
  var v398 = v511 == -1;
  var v513 = !v398;
  if(v513) {
    var v576 = emblFile.search(/AC/);
    var v512 = v576 == -1;
    var v578 = !v512;
    if(v578) {
      var v616 = emblFile.search(/DE/);
      var v577 = v616 == -1;
      var v618 = !v577;
      if(v618) {
        var v617 = emblFile.search(/SQ/);
        v577 = v617 == -1
      }
      v512 = v577
    }
    v398 = v512
  }
  var v137 = v398;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v399 = theNumber$$2.search(/\d/);
  var v138 = v399 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v400 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v400 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v401 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v401 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v402 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v402 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v514 = genBankFile.search(/LOCUS/);
  var v403 = v514 == -1;
  var v516 = !v403;
  if(v516) {
    var v579 = genBankFile.search(/DEFINITION/);
    var v515 = v579 == -1;
    var v581 = !v515;
    if(v581) {
      var v619 = genBankFile.search(/ACCESSION/);
      var v580 = v619 == -1;
      var v621 = !v580;
      if(v621) {
        var v620 = genBankFile.search(/ORIGIN/);
        v580 = v620 == -1
      }
      v515 = v580
    }
    v403 = v515
  }
  var v143 = v403;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v517 = genBankFile$$1.search(/LOCUS/);
  var v404 = v517 == -1;
  var v519 = !v404;
  if(v519) {
    var v582 = genBankFile$$1.search(/DEFINITION/);
    var v518 = v582 == -1;
    var v584 = !v518;
    if(v584) {
      var v622 = genBankFile$$1.search(/ACCESSION/);
      var v583 = v622 == -1;
      var v624 = !v583;
      if(v624) {
        var v623 = genBankFile$$1.search(/ORIGIN/);
        v583 = v623 == -1
      }
      v518 = v583
    }
    v404 = v518
  }
  var v144 = v404;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v405 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v405 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v520 = emblFile$$1.search(/ID/);
  var v406 = v520 == -1;
  var v522 = !v406;
  if(v522) {
    var v585 = emblFile$$1.search(/AC/);
    var v521 = v585 == -1;
    var v587 = !v521;
    if(v587) {
      var v625 = emblFile$$1.search(/DE/);
      var v586 = v625 == -1;
      var v627 = !v586;
      if(v627) {
        var v626 = emblFile$$1.search(/SQ/);
        v586 = v626 == -1
      }
      v521 = v586
    }
    v406 = v521
  }
  var v146 = v406;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v407 = emblFile$$1.search(/^FT/m);
  var v147 = v407 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v408 = basePerLine / groupSize;
    var v152 = j$$6 <= v408;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v409 = k + i$$5;
        var v150 = text$$10.charAt(v409);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v410 = basePerLine / groupSize;
      v152 = j$$6 <= v410
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    v153.write(v154);
    lineOfText = "";
    v155 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v411 = adjustment < 0;
    if(v411) {
      v411 = adjusted >= 0
    }
    var v156 = v411;
    if(v156) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  for(;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v412 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v412;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v413 = i$$6 + k$$1;
        var v157 = v413 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v414 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v414);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v415 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v415, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v416 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v416
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v588 = adjustNumbering(lineNum, numberingAdjustment);
      var v523 = rightNum(v588, "", 8, tabIn$$3);
      var v417 = v523 + lineOfText$$1;
      var v167 = v417 + "\n";
      v166.write(v167);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v589 = adjustNumbering(lineNum, numberingAdjustment);
        var v524 = rightNum(v589, "", 8, tabIn$$3);
        var v525 = complement(lineOfText$$1);
        var v418 = v524 + v525;
        var v169 = v418 + "\n";
        v168.write(v169);
        var v170 = outputWindow.document;
        v170.write("\n")
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v526 = lineOfText$$1;
        var v527 = adjustNumbering(i$$6, numberingAdjustment);
        var v419 = v526 + v527;
        var v173 = v419 + "\n";
        v172.write(v173);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v528 = complement(lineOfText$$1);
          var v529 = adjustNumbering(i$$6, numberingAdjustment);
          var v420 = v528 + v529;
          var v175 = v420 + "\n";
          v174.write(v175);
          var v176 = outputWindow.document;
          v176.write("\n")
        }
      }else {
        var v186 = numberPosition$$1 == "above";
        if(v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          v178.write(v179);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          v180.write(v181);
          var v185 = strands$$1 == "two";
          if(v185) {
            var v182 = outputWindow.document;
            var v421 = complement(lineOfText$$1);
            var v183 = v421 + "\n";
            v182.write(v183);
            var v184 = outputWindow.document;
            v184.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2
  }
  return true
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
  for(;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v422 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v422;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v423 = i$$7 + k$$2;
        var v190 = v423 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v424 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v424);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if(v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195
      }
      var v197 = i$$7 >= stopBase$$3;
      if(v197) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v425 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v425
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v530 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v426 = v530 + lineOfText$$2;
      var v200 = v426 + "\n";
      v199.write(v200)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v427 = lineOfText$$2 + i$$7;
        var v202 = v427 + "\n";
        v201.write(v202)
      }else {
        var v207 = numberPosition$$2 == "above";
        if(v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          v203.write(v204);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          v205.write(v206)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3
  }
  return true
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
  var v531 = sequence$$13.length;
  var v428 = v531 <= firstIndexToMutate;
  var v533 = !v428;
  if(v533) {
    var v532 = lastIndexToMutate < 0;
    var v590 = !v532;
    if(v590) {
      v532 = lastIndexToMutate <= firstIndexToMutate
    }
    v428 = v532
  }
  var v211 = v428;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v429 = Math.random();
    var v212 = v429 * maxNum;
    randNum = Math.floor(v212);
    var v430 = randNum < firstIndexToMutate;
    var v534 = !v430;
    if(v534) {
      v430 = randNum > lastIndexToMutate
    }
    var v213 = v430;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v431 = Math.random();
      var v432 = components$$1.length;
      var v214 = v431 * v432;
      componentsIndex = Math.round(v214);
      var v433 = components$$1.length;
      var v215 = componentsIndex == v433;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v434 = components$$1[componentsIndex]
      }
      var v216 = v434 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v435 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v436 = components$$1[componentsIndex]
    }
    var v217 = v435 + v436;
    var v437 = randNum + 1;
    var v438 = sequence$$13.length;
    var v218 = sequence$$13.substring(v437, v438);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  v220.write(v221);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    var v439 = Math.random();
    var v440 = components$$2.length;
    var v222 = v439 * v440;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v441 = sequence$$14.length;
    var v225 = v441 == 60;
    if(v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      v223.write(v224);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  v227.write(v228);
  return true
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
  if(v232) {
    var v229 = sequence$$15.substring(0, lookAhead);
    shiftValue = v229.length;
    var v591 = sequence$$15.length;
    var v535 = v591 - lookAhead;
    var v536 = sequence$$15.length;
    var v442 = sequence$$15.substring(v535, v536);
    var v230 = v442 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  v233.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v234 = outputWindow.document;
  var v592 = '<tr><td class="title" width="200px">' + "Site:";
  var v537 = v592 + '</td><td class="title">';
  var v443 = v537 + "Positions:";
  var v235 = v443 + "</td></tr>\n";
  v234.write(v235);
  var i$$9 = 0;
  var v444 = arrayOfItems.length;
  var v251 = i$$9 < v444;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v445 = arrayOfItems[i$$9]
    }
    var v236 = v445.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v593 = arrayOfItems[i$$9]
    }
    var v538 = v593.match(/\)\D*\d+/);
    var v446 = v538.toString();
    var v237 = v446.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v447 = matchPosition >= lowerLimit;
      if(v447) {
        v447 = matchPosition < upperLimit
      }
      var v241 = v447;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v448 = matchPosition - shiftValue;
        var v240 = v448 + 1;
        tempString$$1 = v239 + v240
      }
      var v449 = matchExp.lastIndex;
      var v539 = RegExp.lastMatch;
      var v450 = v539.length;
      var v242 = v449 - v450;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v451 = tempString$$1.search(/\d/);
    var v244 = v451 != -1;
    if(v244) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v248 = timesFound == 0;
    if(v248) {
      backGroundClass = "none"
    }else {
      var v247 = timesFound == 1;
      if(v247) {
        backGroundClass = "one"
      }else {
        var v246 = timesFound == 2;
        if(v246) {
          backGroundClass = "two"
        }else {
          var v245 = timesFound == 3;
          if(v245) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v672 = '<tr><td class="' + backGroundClass;
    var v659 = v672 + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v695 = arrayOfItems[i$$9]
    }
    var v684 = v695.match(/\([^\(]+\)/);
    var v673 = v684.toString();
    var v660 = v673.replace(/\(|\)/g, "");
    var v646 = v659 + v660;
    var v628 = v646 + '</td><td class="';
    var v594 = v628 + backGroundClass;
    var v540 = v594 + '">';
    var v452 = v540 + tempString$$1;
    var v250 = v452 + "</td></tr>\n";
    v249.write(v250);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v453 = arrayOfItems.length;
    v251 = i$$9 < v453
  }
  var v252 = outputWindow.document;
  v252.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  v253.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v254 = outputWindow.document;
  var v647 = '<tr><td class="title">' + "Pattern:";
  var v629 = v647 + '</td><td class="title">';
  var v595 = v629 + "Times found:";
  var v541 = v595 + '</td><td class="title">';
  var v454 = v541 + "Percentage:";
  var v255 = v454 + "</td></tr>\n";
  v254.write(v255);
  var i$$10 = 0;
  var v455 = arrayOfItems$$1.length;
  var v264 = i$$10 < v455;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v456 = arrayOfItems$$1[i$$10]
    }
    var v256 = v456.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v457 = sequence$$16.search(matchExp$$1);
    var v258 = v457 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v542 = originalLength + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v630 = arrayOfItems$$1[i$$10]
    }
    var v596 = v630.match(/\d+/);
    var v543 = parseFloat(v596);
    var v458 = v542 - v543;
    var v261 = v458 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v459 = originalLength + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v597 = arrayOfItems$$1[i$$10]
      }
      var v544 = v597.match(/\d+/);
      var v460 = parseFloat(v544);
      var v260 = v459 - v460;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v696 = arrayOfItems$$1[i$$10]
    }
    var v685 = v696.match(/\([^\(]+\)\b/);
    var v674 = v685.toString();
    var v661 = v674.replace(/\(|\)/g, "");
    var v648 = "<tr><td>" + v661;
    var v631 = v648 + "</td><td>";
    var v598 = v631 + tempNumber;
    var v545 = v598 + "</td><td>";
    var v546 = percentage.toFixed(2);
    var v461 = v545 + v546;
    var v263 = v461 + "</td></tr>\n";
    v262.write(v263);
    i$$10 = i$$10 + 1;
    var v462 = arrayOfItems$$1.length;
    v264 = i$$10 < v462
  }
  var v265 = outputWindow.document;
  v265.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v463 = sequence$$17.length;
  var v272 = v463 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v464 = Math.random();
    var v266 = v464 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v465 = tempSeq.length;
    var v271 = v465 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      v269.write(v270);
      tempSeq = ""
    }
    var v466 = sequence$$17.length;
    v272 = v466 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  v273.write(v274);
  return true
}
function genbankFasta(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v467 = testScript();
  var v275 = v467 == false;
  if(v275) {
    return false
  }
  var v662 = theDocument.forms;
  var v649 = v662[0];
  var v632 = v649.elements;
  var v599 = v632[0];
  var v547 = checkFormElement(v599);
  var v468 = v547 == false;
  var v549 = !v468;
  if(v549) {
    var v686 = theDocument.forms;
    var v675 = v686[0];
    var v663 = v675.elements;
    var v650 = v663[0];
    var v633 = v650.value;
    var v600 = verifyGenBank(v633);
    var v548 = v600 == false;
    var v602 = !v548;
    if(v602) {
      var v687 = theDocument.forms;
      var v676 = v687[0];
      var v664 = v676.elements;
      var v651 = v664[0];
      var v634 = v651.value;
      var v601 = checkTextLength(v634, maxInput$$3);
      v548 = v601 == false
    }
    v468 = v548
  }
  var v276 = v468;
  if(v276) {
    return false
  }
  openWindow("GenBank to FASTA");
  openPre();
  var v635 = theDocument.forms;
  var v603 = v635[0];
  var v550 = v603.elements;
  var v469 = v550[0];
  var v277 = v469.value;
  genbankToFasta(v277);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function genbankToFasta(genBankFile$$2) {
  var v278 = "_" + genBankFile$$2;
  genBankFile$$2 = v278 + "_";
  var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m);
  var i$$11 = 1;
  var v470 = recordArray.length;
  var v286 = i$$11 < v470;
  for(;v286;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = recordArray[i$$11]
    }
    var mainArray = v279.split(/DEFINITION|ACCESSION|ORIGIN[^\f\n\r]*/);
    var v551 = mainArray[1];
    var v471 = v551.replace(/[\f\n\r\t]+$/g, "");
    var v280 = filterFastaTitle(v471);
    var title$$9 = v280 + "\n";
    var v281 = mainArray[3];
    var dnaSequenceArray = v281.split(/\/{2}/);
    var v472 = dnaSequenceArray.length;
    var v282 = v472 == 1;
    if(v282) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus()
    }
    var v283 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v283);
    var v284 = outputWindow.document;
    var v552 = "&gt;" + title$$9;
    var v553 = addReturns(dnaSequence$$3);
    var v473 = v552 + v553;
    var v285 = v473 + "\n\n";
    v284.write(v285);
    i$$11 = i$$11 + 1;
    var v474 = recordArray.length;
    v286 = i$$11 < v474
  }
  return true
}
document.onload = v2;
var v287 = document.getElementById("submitbtn");
v287.onclick = v3;
var v288 = document.getElementById("clearbtn");
v288.onclick = v4;

JAM.stopProfile('load');
