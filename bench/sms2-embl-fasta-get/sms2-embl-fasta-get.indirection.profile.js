
JAM.startProfile('load');
function v4() {
  var v559 = document.forms;
  var v479 = v559[0];
  var v291 = v479.elements;
  var v5 = v291[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    emblFasta(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v292 = document.main_form;
  var v7 = v292.main_submit;
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
  var v293 = arrayOfSequences.length;
  var v9 = v293 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v11 = i$$1 < v294;
  for(;v11;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = arrayOfTitles[i$$1]
    }
    var v480 = v560.search(/\S/);
    var v295 = v480 == -1;
    var v482 = !v295;
    if(v482) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v609 = arrayOfSequences[i$$1]
      }
      var v561 = v609.search(/\S/);
      var v481 = v561 == -1;
      var v563 = !v481;
      if(v563) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v610 = arrayOfSequences[i$$1]
        }
        var v562 = v610.length;
        v481 = v562 != lengthOfAlign
      }
      v295 = v481
    }
    var v10 = v295;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v296 = arrayOfTitles.length;
    v11 = i$$1 < v296
  }
  return true
}
function checkCodonTable(codonTable) {
  var v483 = codonTable.search(/AmAcid/);
  var v297 = v483 == -1;
  var v485 = !v297;
  if(v485) {
    var v564 = codonTable.search(/Codon/);
    var v484 = v564 == -1;
    var v566 = !v484;
    if(v566) {
      var v611 = codonTable.search(/Number/);
      var v565 = v611 == -1;
      var v613 = !v565;
      if(v613) {
        var v641 = codonTable.search(/\/1000/);
        var v612 = v641 == -1;
        var v643 = !v612;
        if(v643) {
          var v642 = codonTable.search(/Fraction\s*\.\./);
          v612 = v642 == -1
        }
        v565 = v612
      }
      v484 = v565
    }
    v297 = v484
  }
  var v12 = v297;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v486 = formElement.value;
  var v298 = v486.search(/\S/);
  var v13 = v298 == -1;
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
  var v299 = arrayOfPatterns.length;
  var v16 = z$$2 < v299;
  for(;v16;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfPatterns[z$$2]
    }
    var v300 = v487.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v300 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns[z$$2]
    }
    var v301 = moreExpressionCheck(v488);
    var v15 = v301 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v16 = z$$2 < v302
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v25 = j < v303;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v567 = arrayOfPatterns[j]
    }
    var v489 = v567.match(/\/.+\//);
    var v304 = v489 + "gi";
    if(JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v304 + " }")
    }else {
      var v731 = JAM.call(eval, null, [v304])
    }
    v19[v20] = v731;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns[j]
    }
    var v305 = v490.match(/=[a-zA-Z\*]/);
    var v732 = v305.toString();
    v21[v22] = v732;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v306 = geneticCodeMatchResult[j]
    }
    var v733 = v306.replace(/=/g, "");
    v23[v24] = v733;
    j = j + 1;
    var v307 = arrayOfPatterns.length;
    v25 = j < v307
  }
  var i$$2 = 0;
  var v491 = testSequence.length;
  var v308 = v491 - 3;
  var v32 = i$$2 <= v308;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v30 = j < v309;
    for(;v30;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v492 = geneticCodeMatchExp[j]
      }
      var v310 = codon.search(v492);
      var v29 = v310 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v311 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v312 = geneticCodeMatchExp.length;
      v30 = j < v312
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v493 = testSequence.length;
    var v313 = v493 - 3;
    v32 = i$$2 <= v313
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v314;
  for(;v34;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns$$1[z$$3]
    }
    var v315 = v494.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v315 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v316
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v317;
  for(;v38;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v495 = arrayOfPatterns$$1[i$$3]
    }
    var v318 = "[" + v495;
    var v35 = v318 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v319;
    for(;v37;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v496 = arrayOfPatterns$$1[j$$1]
      }
      var v320 = v496.search(re);
      var v36 = v320 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v321 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v321
    }
    i$$3 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v322
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v323;
  for(;v41;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns$$2[z$$4]
    }
    var v324 = v497.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v324 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns$$2[z$$4]
    }
    var v325 = moreExpressionCheck(v498);
    var v40 = v325 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v326
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v568 = getSequenceFromFasta(text$$7);
  var v499 = v568.replace(/[^A-Za-z]/g, "");
  var v327 = v499.length;
  var v43 = v327 > maxInput;
  if(v43) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v328 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v45 = v329 > maxInput$$1;
  if(v45) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v330 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence$$1) {
  dnaSequence$$1 = dnaSequence$$1.replace(/g/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/c/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "c");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "g");
  dnaSequence$$1 = dnaSequence$$1.replace(/G/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/C/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "C");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "G");
  dnaSequence$$1 = dnaSequence$$1.replace(/a/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/t/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "t");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/A/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/T/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "T");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/u/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/U/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/r/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "r");
  dnaSequence$$1 = dnaSequence$$1.replace(/R/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/Y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "Y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "R");
  dnaSequence$$1 = dnaSequence$$1.replace(/k/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/m/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "m");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "k");
  dnaSequence$$1 = dnaSequence$$1.replace(/K/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/M/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "M");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "K");
  dnaSequence$$1 = dnaSequence$$1.replace(/b/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/v/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "v");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "b");
  dnaSequence$$1 = dnaSequence$$1.replace(/B/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/V/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "V");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "B");
  dnaSequence$$1 = dnaSequence$$1.replace(/d/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/h/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "h");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "d");
  dnaSequence$$1 = dnaSequence$$1.replace(/D/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/H/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "H");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "D");
  return dnaSequence$$1
}
function closeForm() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"]);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"]);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"]);
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
  var v331 = alignArray.length;
  var v52 = v331 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v54 = i$$4 < v332;
  for(;v54;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = alignArray[i$$4]
    }
    var v333 = v500.search(/[^\s]+\s/);
    var v53 = v333 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v334 = alignArray.length;
    v54 = i$$4 < v334
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
  var v335 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v58 = "&gt;results for " + v336;
  var stringToReturn = v58 + " residue sequence ";
  var v337 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v337 != -1;
  if(v60) {
    var v338 = stringToReturn + '"';
    var v59 = v338 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = sequence$$2.substring(0, 10);
  var v61 = v339 + v340;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v62 = "Search results for " + v341;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v342 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v342 != -1;
  if(v64) {
    var v343 = stringToReturn$$1 + '"';
    var v63 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = sequenceOne.substring(0, 10);
  var v65 = v344 + v345;
  stringToReturn$$1 = v65 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v348 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v348 != -1;
  if(v68) {
    var v349 = stringToReturn$$1 + '"';
    var v67 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = sequenceTwo.substring(0, 10);
  var v69 = v350 + v351;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v352;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v569 = arrayOfPatterns$$3[j$$2]
    }
    var v501 = v569.match(/\/.+\//);
    var v353 = v501 + "gi";
    if(JAM.isEval(eval)) {
      var v734 = eval("introspect(JAM.policy.pFull) { " + v353 + " }")
    }else {
      var v734 = JAM.call(eval, null, [v353])
    }
    v72[v73] = v734;
    j$$2 = j$$2 + 1;
    var v354 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v354
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v355;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = arrayOfPatterns$$4[j$$3]
    }
    var v356 = v502.match(/=[a-zA-Z\*]/);
    var v735 = v356.toString();
    v76[v77] = v735;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v357 = geneticCodeMatchResult$$1[j$$3]
    }
    var v736 = v357.replace(/=/g, "");
    v78[v79] = v736;
    j$$3 = j$$3 + 1;
    var v358 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v358
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v81 = "Results for " + v359;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v360 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v360 != -1;
  if(v83) {
    var v361 = stringToReturn$$2 + '"';
    var v82 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v362 = stringToReturn$$2 + ' starting "';
  var v363 = sequence$$3.substring(0, 10);
  var v84 = v362 + v363;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v503 = "Results for " + topology;
  var v364 = v503 + " ";
  var v365 = sequence$$4.length;
  var v86 = v364 + v365;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v366 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v366 != -1;
  if(v88) {
    var v367 = stringToReturn$$3 + '"';
    var v87 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v368 = stringToReturn$$3 + ' starting "';
  var v369 = sequence$$4.substring(0, 10);
  var v89 = v368 + v369;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v370;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v371 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v371 != -1;
  if(v93) {
    var v372 = stringToReturn$$4 + '"';
    var v92 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = sequenceOne$$1.substring(0, 10);
  var v94 = v373 + v374;
  stringToReturn$$4 = v94 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v95 = v375 + v376;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v377 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v377 != -1;
  if(v97) {
    var v378 = stringToReturn$$4 + '"';
    var v96 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = sequenceTwo$$1.substring(0, 10);
  var v98 = v379 + v380;
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
    var v381 = Math.random();
    var v382 = components.length;
    var v100 = v381 * v382;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v383 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v383 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v384 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v384 != -1;
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
  var v504 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v385 = v504 != -1;
  var v506 = !v385;
  if(v506) {
    var v570 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v505 = v570 != -1;
    var v572 = !v505;
    if(v572) {
      var v614 = expressionToCheck.search(/\[\]/);
      var v571 = v614 != -1;
      var v616 = !v571;
      if(v616) {
        var v644 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v615 = v644 != -1;
        var v646 = !v615;
        if(v646) {
          var v657 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v645 = v657 != -1;
          var v659 = !v645;
          if(v659) {
            var v670 = expressionToCheck.search(/\|\|/);
            var v658 = v670 != -1;
            var v672 = !v658;
            if(v672) {
              var v682 = expressionToCheck.search(/\/\|/);
              var v671 = v682 != -1;
              var v684 = !v671;
              if(v684) {
                var v693 = expressionToCheck.search(/\|\//);
                var v683 = v693 != -1;
                var v695 = !v683;
                if(v695) {
                  var v702 = expressionToCheck.search(/\[.\]/);
                  var v694 = v702 != -1;
                  var v704 = !v694;
                  if(v704) {
                    var v709 = expressionToCheck.search(/\</);
                    var v703 = v709 != -1;
                    var v711 = !v703;
                    if(v711) {
                      var v710 = expressionToCheck.search(/\>/);
                      v703 = v710 != -1
                    }
                    v694 = v703
                  }
                  v683 = v694
                }
                v671 = v683
              }
              v658 = v671
            }
            v645 = v658
          }
          v615 = v645
        }
        v571 = v615
      }
      v505 = v571
    }
    v385 = v505
  }
  var v105 = v385;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n']);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"]);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v573 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v573 + "<head>\n";
  var v386 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v705 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v685 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v685 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v574 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v508 = v574 + "td.many {color: #000000}\n";
    var v387 = v508 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v387 + "</style>\n";
    JAM.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v725 = v728 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {display: none}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v713 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v713 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v686 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v686 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v575 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v509 = v575 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v509 + "img {display: none}\n";
    var v115 = v388 + "</style>\n";
    JAM.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v576 = "</head>\n" + '<body class="main">\n';
  var v510 = v576 + '<div class="title">';
  var v389 = v510 + title$$6;
  var v117 = v389 + " results</div>\n";
  JAM.call(v116.write, v116, [v117]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v577 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v577 + "<head>\n";
  var v390 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v698 = v707 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v687 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v687 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v662 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v662 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v578 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v512 = v578 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v512 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v391 + "</style>\n";
    JAM.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v729 + "div.title {display: none}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v719 = v723 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v715 = v719 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v708 = v715 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v688 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v688 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v663 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v579 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v513 = v579 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v513 + "img {display: none}\n";
    var v123 = v392 + "</style>\n";
    JAM.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v580 = "</head>\n" + '<body class="main">\n';
  var v514 = v580 + '<div class="title">';
  var v393 = v514 + title$$8;
  var v125 = v393 + " results</div>\n";
  JAM.call(v124.write, v124, [v125]);
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  var v394 = dnaSequence$$2.search(/./);
  var v126 = v394 != -1;
  if(v126) {
    tempDnaArray = dnaSequence$$2.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = tempDnaArray.join("")
  }
  return dnaSequence$$2
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
  var v395 = testArray[0];
  var v130 = v395 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v396 = testString.search(re$$2);
  var v131 = v396 == -1;
  if(v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
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
  var v397 = testNum.toFixed(3);
  var v134 = v397 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v398 = testNum.toPrecision(5);
  var v135 = v398 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v399 = theNumber$$1.search(/\d/);
  var v136 = v399 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v515 = emblFile.search(/ID/);
  var v400 = v515 == -1;
  var v517 = !v400;
  if(v517) {
    var v581 = emblFile.search(/AC/);
    var v516 = v581 == -1;
    var v583 = !v516;
    if(v583) {
      var v621 = emblFile.search(/DE/);
      var v582 = v621 == -1;
      var v623 = !v582;
      if(v623) {
        var v622 = emblFile.search(/SQ/);
        v582 = v622 == -1
      }
      v516 = v582
    }
    v400 = v516
  }
  var v137 = v400;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v401 = theNumber$$2.search(/\d/);
  var v138 = v401 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v402 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$3) {
  var v403 = dnaSequence$$3.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v403 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v404 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v404 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v518 = genBankFile.search(/LOCUS/);
  var v405 = v518 == -1;
  var v520 = !v405;
  if(v520) {
    var v584 = genBankFile.search(/DEFINITION/);
    var v519 = v584 == -1;
    var v586 = !v519;
    if(v586) {
      var v624 = genBankFile.search(/ACCESSION/);
      var v585 = v624 == -1;
      var v626 = !v585;
      if(v626) {
        var v625 = genBankFile.search(/ORIGIN/);
        v585 = v625 == -1
      }
      v519 = v585
    }
    v405 = v519
  }
  var v143 = v405;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v521 = genBankFile$$1.search(/LOCUS/);
  var v406 = v521 == -1;
  var v523 = !v406;
  if(v523) {
    var v587 = genBankFile$$1.search(/DEFINITION/);
    var v522 = v587 == -1;
    var v589 = !v522;
    if(v589) {
      var v627 = genBankFile$$1.search(/ACCESSION/);
      var v588 = v627 == -1;
      var v629 = !v588;
      if(v629) {
        var v628 = genBankFile$$1.search(/ORIGIN/);
        v588 = v628 == -1
      }
      v522 = v588
    }
    v406 = v522
  }
  var v144 = v406;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v407 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v407 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v524 = emblFile$$1.search(/ID/);
  var v408 = v524 == -1;
  var v526 = !v408;
  if(v526) {
    var v590 = emblFile$$1.search(/AC/);
    var v525 = v590 == -1;
    var v592 = !v525;
    if(v592) {
      var v630 = emblFile$$1.search(/DE/);
      var v591 = v630 == -1;
      var v632 = !v591;
      if(v632) {
        var v631 = emblFile$$1.search(/SQ/);
        v591 = v631 == -1
      }
      v525 = v591
    }
    v408 = v525
  }
  var v146 = v408;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v409 = emblFile$$1.search(/^FT/m);
  var v147 = v409 == -1;
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
    var v410 = basePerLine / groupSize;
    var v152 = j$$6 <= v410;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v411 = k + i$$5;
        var v150 = text$$10.charAt(v411);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v412 = basePerLine / groupSize;
      v152 = j$$6 <= v412
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154]);
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
    var v413 = adjustment < 0;
    if(v413) {
      v413 = adjusted >= 0
    }
    var v156 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v414;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v415 = i$$6 + k$$1;
        var v157 = v415 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v416);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v417 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v418 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v418
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v593 = adjustNumbering(lineNum, numberingAdjustment);
      var v527 = rightNum(v593, "", 8, tabIn$$3);
      var v419 = v527 + lineOfText$$1;
      var v167 = v419 + "\n";
      JAM.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v594 = adjustNumbering(lineNum, numberingAdjustment);
        var v528 = rightNum(v594, "", 8, tabIn$$3);
        var v529 = complement(lineOfText$$1);
        var v420 = v528 + v529;
        var v169 = v420 + "\n";
        JAM.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v530 = lineOfText$$1;
        var v531 = adjustNumbering(i$$6, numberingAdjustment);
        var v421 = v530 + v531;
        var v173 = v421 + "\n";
        JAM.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v532 = complement(lineOfText$$1);
          var v533 = adjustNumbering(i$$6, numberingAdjustment);
          var v422 = v532 + v533;
          var v175 = v422 + "\n";
          JAM.call(v174.write, v174, [v175]);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"])
        }
      }else {
        var v186 = numberPosition$$1 == "above";
        if(v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179]);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181]);
          var v185 = strands$$1 == "two";
          if(v185) {
            var v182 = outputWindow.document;
            var v423 = complement(lineOfText$$1);
            var v183 = v423 + "\n";
            JAM.call(v182.write, v182, [v183]);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"])
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v424;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v425 = i$$7 + k$$2;
        var v190 = v425 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v426 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v426);
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
      var v427 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v427
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v534 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v534 + lineOfText$$2;
      var v200 = v428 + "\n";
      JAM.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v202 = v429 + "\n";
        JAM.call(v201.write, v201, [v202])
      }else {
        var v207 = numberPosition$$2 == "above";
        if(v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204]);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206])
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
  var v535 = sequence$$13.length;
  var v430 = v535 <= firstIndexToMutate;
  var v537 = !v430;
  if(v537) {
    var v536 = lastIndexToMutate < 0;
    var v595 = !v536;
    if(v595) {
      v536 = lastIndexToMutate <= firstIndexToMutate
    }
    v430 = v536
  }
  var v211 = v430;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v431 = Math.random();
    var v212 = v431 * maxNum;
    randNum = Math.floor(v212);
    var v432 = randNum < firstIndexToMutate;
    var v538 = !v432;
    if(v538) {
      v432 = randNum > lastIndexToMutate
    }
    var v213 = v432;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v433 = Math.random();
      var v434 = components$$1.length;
      var v214 = v433 * v434;
      componentsIndex = Math.round(v214);
      var v435 = components$$1.length;
      var v215 = componentsIndex == v435;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v436 = components$$1[componentsIndex]
      }
      var v216 = v436 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v437 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v438 = components$$1[componentsIndex]
    }
    var v217 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    var v218 = sequence$$13.substring(v439, v440);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    var v441 = Math.random();
    var v442 = components$$2.length;
    var v222 = v441 * v442;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v225 = v443 == 60;
    if(v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228]);
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
    var v596 = sequence$$15.length;
    var v539 = v596 - lookAhead;
    var v540 = sequence$$15.length;
    var v444 = sequence$$15.substring(v539, v540);
    var v230 = v444 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v597 = '<tr><td class="title" width="200px">' + "Site:";
  var v541 = v597 + '</td><td class="title">';
  var v445 = v541 + "Positions:";
  var v235 = v445 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v251 = i$$9 < v446;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v447 = arrayOfItems[i$$9]
    }
    var v236 = v447.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v598 = arrayOfItems[i$$9]
    }
    var v542 = v598.match(/\)\D*\d+/);
    var v448 = v542.toString();
    var v237 = v448.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if(v449) {
        v449 = matchPosition < upperLimit
      }
      var v241 = v449;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v240 = v450 + 1;
        tempString$$1 = v239 + v240
      }
      var v451 = matchExp.lastIndex;
      var v543 = RegExp.lastMatch;
      var v452 = v543.length;
      var v242 = v451 - v452;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v453 = tempString$$1.search(/\d/);
    var v244 = v453 != -1;
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v664 = v677 + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v700 = arrayOfItems[i$$9]
    }
    var v689 = v700.match(/\([^\(]+\)/);
    var v678 = v689.toString();
    var v665 = v678.replace(/\(|\)/g, "");
    var v651 = v664 + v665;
    var v633 = v651 + '</td><td class="';
    var v599 = v633 + backGroundClass;
    var v544 = v599 + '">';
    var v454 = v544 + tempString$$1;
    var v250 = v454 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v455 = arrayOfItems.length;
    v251 = i$$9 < v455
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v254 = outputWindow.document;
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v634 = v652 + '</td><td class="title">';
  var v600 = v634 + "Times found:";
  var v545 = v600 + '</td><td class="title">';
  var v456 = v545 + "Percentage:";
  var v255 = v456 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v264 = i$$10 < v457;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v458 = arrayOfItems$$1[i$$10]
    }
    var v256 = v458.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v459 = sequence$$16.search(matchExp$$1);
    var v258 = v459 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v635 = arrayOfItems$$1[i$$10]
    }
    var v601 = v635.match(/\d+/);
    var v547 = parseFloat(v601);
    var v460 = v546 - v547;
    var v261 = v460 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v461 = originalLength + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v602 = arrayOfItems$$1[i$$10]
      }
      var v548 = v602.match(/\d+/);
      var v462 = parseFloat(v548);
      var v260 = v461 - v462;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v701 = arrayOfItems$$1[i$$10]
    }
    var v690 = v701.match(/\([^\(]+\)\b/);
    var v679 = v690.toString();
    var v666 = v679.replace(/\(|\)/g, "");
    var v653 = "<tr><td>" + v666;
    var v636 = v653 + "</td><td>";
    var v603 = v636 + tempNumber;
    var v549 = v603 + "</td><td>";
    var v550 = percentage.toFixed(2);
    var v463 = v549 + v550;
    var v263 = v463 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v464 = arrayOfItems$$1.length;
    v264 = i$$10 < v464
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v465 = sequence$$17.length;
  var v272 = v465 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = Math.random();
    var v266 = v466 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v271 = v467 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v468 = sequence$$17.length;
    v272 = v468 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274]);
  return true
}
function emblFasta(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v469 = testScript();
  var v275 = v469 == false;
  if(v275) {
    return false
  }
  var v667 = theDocument.forms;
  var v654 = v667[0];
  var v637 = v654.elements;
  var v604 = v637[0];
  var v551 = checkFormElement(v604);
  var v470 = v551 == false;
  var v553 = !v470;
  if(v553) {
    var v691 = theDocument.forms;
    var v680 = v691[0];
    var v668 = v680.elements;
    var v655 = v668[0];
    var v638 = v655.value;
    var v605 = verifyEmbl(v638);
    var v552 = v605 == false;
    var v607 = !v552;
    if(v607) {
      var v692 = theDocument.forms;
      var v681 = v692[0];
      var v669 = v681.elements;
      var v656 = v669[0];
      var v639 = v656.value;
      var v606 = checkTextLength(v639, maxInput$$3);
      v552 = v606 == false
    }
    v470 = v552
  }
  var v276 = v470;
  if(v276) {
    return false
  }
  openWindow("EMBL to FASTA");
  openPre();
  var v640 = theDocument.forms;
  var v608 = v640[0];
  var v554 = v608.elements;
  var v471 = v554[0];
  var v277 = v471.value;
  emblToFasta(v277);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v278 = "_" + emblFile$$2;
  emblFile$$2 = v278 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v472 = recordArray.length;
  var v288 = i$$11 < v472;
  for(;v288;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = recordArray[i$$11]
    }
    var mainArray = v279.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v555 = mainArray[0];
    var v473 = v555.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v281 = v473 != -1;
    if(v281) {
      var v556 = mainArray[0];
      var v474 = v556.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v280 = v474.toString();
      title$$9 = v280.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v475 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v282 = filterFastaTitle(v475);
    title$$9 = v282 + "\n";
    var v283 = mainArray[2];
    dnaArray = v283.split(/\/{2}/);
    var v476 = dnaArray.length;
    var v284 = v476 == 1;
    if(v284) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v285 = dnaArray[0];
    dnaSequence = removeNonDna(v285);
    var v286 = outputWindow.document;
    var v557 = "&gt;" + title$$9;
    var v558 = addReturns(dnaSequence);
    var v477 = v557 + v558;
    var v287 = v477 + "\n\n";
    JAM.call(v286.write, v286, [v287]);
    i$$11 = i$$11 + 1;
    var v478 = recordArray.length;
    v288 = i$$11 < v478
  }
  return true
}
JAM.set(document, "onload", v2);
var v289 = document.getElementById("submitbtn");
JAM.set(v289, "onclick", v3);
var v290 = document.getElementById("clearbtn");
JAM.set(v290, "onclick", v4);

JAM.stopProfile('load');
