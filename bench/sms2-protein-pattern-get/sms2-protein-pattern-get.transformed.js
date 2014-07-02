function v4() {
  var v561 = document.forms;
  var v478 = v561[0];
  var v290 = v478.elements;
  var v5 = v290[0];
  v5.value = " ";
  var v562 = document.forms;
  var v479 = v562[0];
  var v291 = v479.elements;
  var v6 = v291[1];
  v6.value = " ";
  return
}
function v3() {
  try {
    proteinPattern(document)
  }catch(e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7)
  }
  return
}
function v2() {
  var v292 = document.main_form;
  var v8 = v292.main_submit;
  v8.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v293 = arrayOfSequences.length;
  var v10 = v293 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v12 = i$$1 < v294;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v563 = arrayOfTitles[i$$1]
    }
    var v480 = v563.search(/\S/);
    var v295 = v480 == -1;
    var v482 = !v295;
    if(v482) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v617 = arrayOfSequences[i$$1]
      }
      var v564 = v617.search(/\S/);
      var v481 = v564 == -1;
      var v566 = !v481;
      if(v566) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v618 = arrayOfSequences[i$$1]
        }
        var v565 = v618.length;
        v481 = v565 != lengthOfAlign
      }
      v295 = v481
    }
    var v11 = v295;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v296 = arrayOfTitles.length;
    v12 = i$$1 < v296
  }
  return true
}
function checkCodonTable(codonTable) {
  var v483 = codonTable.search(/AmAcid/);
  var v297 = v483 == -1;
  var v485 = !v297;
  if(v485) {
    var v567 = codonTable.search(/Codon/);
    var v484 = v567 == -1;
    var v569 = !v484;
    if(v569) {
      var v619 = codonTable.search(/Number/);
      var v568 = v619 == -1;
      var v621 = !v568;
      if(v621) {
        var v651 = codonTable.search(/\/1000/);
        var v620 = v651 == -1;
        var v653 = !v620;
        if(v653) {
          var v652 = codonTable.search(/Fraction\s*\.\./);
          v620 = v652 == -1
        }
        v568 = v620
      }
      v484 = v568
    }
    v297 = v484
  }
  var v13 = v297;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v486 = formElement.value;
  var v298 = v486.search(/\S/);
  var v14 = v298 == -1;
  if(v14) {
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
  var v17 = z$$2 < v299;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfPatterns[z$$2]
    }
    var v300 = v487.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v300 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns[z$$2]
    }
    var v301 = moreExpressionCheck(v488);
    var v16 = v301 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v17 = z$$2 < v302
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v26 = j < v303;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v570 = arrayOfPatterns[j]
    }
    var v489 = v570.match(/\/.+\//);
    var v304 = v489 + "gi";
    if(JAMScript.isEval(eval)) {
      var v747 = eval("introspect(JAMScript.introspectors.processAll) { " + v304 + " }")
    }else {
      var v747 = JAMScript.call(eval, null, [v304])
    }
    v20[v21] = v747;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns[j]
    }
    var v305 = v490.match(/=[a-zA-Z\*]/);
    var v748 = v305.toString();
    v22[v23] = v748;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v306 = geneticCodeMatchResult[j]
    }
    var v749 = v306.replace(/=/g, "");
    v24[v25] = v749;
    j = j + 1;
    var v307 = arrayOfPatterns.length;
    v26 = j < v307
  }
  var i$$2 = 0;
  var v491 = testSequence.length;
  var v308 = v491 - 3;
  var v33 = i$$2 <= v308;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v31 = j < v309;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v492 = geneticCodeMatchExp[j]
      }
      var v310 = codon.search(v492);
      var v30 = v310 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v311 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v312 = geneticCodeMatchExp.length;
      v31 = j < v312
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v493 = testSequence.length;
    var v313 = v493 - 3;
    v33 = i$$2 <= v313
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v314;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns$$1[z$$3]
    }
    var v315 = v494.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v315 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v316
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v317;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v495 = arrayOfPatterns$$1[i$$3]
    }
    var v318 = "[" + v495;
    var v36 = v318 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v319;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v496 = arrayOfPatterns$$1[j$$1]
      }
      var v320 = v496.search(re);
      var v37 = v320 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v321 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v321
    }
    i$$3 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v322
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v323;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns$$2[z$$4]
    }
    var v324 = v497.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v324 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns$$2[z$$4]
    }
    var v325 = moreExpressionCheck(v498);
    var v41 = v325 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v326
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v571 = getSequenceFromFasta(text$$7);
  var v499 = v571.replace(/[^A-Za-z]/g, "");
  var v327 = v499.length;
  var v44 = v327 > maxInput;
  if(v44) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v328 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v46 = v329 > maxInput$$1;
  if(v46) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v330 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAMScript.call(v47.write, v47, ["</form>"]);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAMScript.call(v48.write, v48, ["</div>"]);
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
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
  var v53 = v331 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v55 = i$$4 < v332;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = alignArray[i$$4]
    }
    var v333 = v500.search(/[^\s]+\s/);
    var v54 = v333 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v334 = alignArray.length;
    v55 = i$$4 < v334
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
  var v58 = v335 != -1;
  if(v58) {
    var v57 = matchArray = re$$1.exec(sequenceData);
    for(;v57;) {
      var v56 = matchArray[0];
      arrayOfFasta.push(v56);
      v57 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v336 = sequence$$2.length;
  var v59 = "&gt;results for " + v336;
  var stringToReturn = v59 + " residue sequence ";
  var v337 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v337 != -1;
  if(v61) {
    var v338 = stringToReturn + '"';
    var v60 = v338 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = sequence$$2.substring(0, 10);
  var v62 = v339 + v340;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v63 = "Search results for " + v341;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v342 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v342 != -1;
  if(v65) {
    var v343 = stringToReturn$$1 + '"';
    var v64 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = sequenceOne.substring(0, 10);
  var v66 = v344 + v345;
  stringToReturn$$1 = v66 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v67 = v346 + v347;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v348 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v348 != -1;
  if(v69) {
    var v349 = stringToReturn$$1 + '"';
    var v68 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = sequenceTwo.substring(0, 10);
  var v70 = v350 + v351;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v352;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v572 = arrayOfPatterns$$3[j$$2]
    }
    var v501 = v572.match(/\/.+\//);
    var v353 = v501 + "gi";
    if(JAMScript.isEval(eval)) {
      var v750 = eval("introspect(JAMScript.introspectors.processAll) { " + v353 + " }")
    }else {
      var v750 = JAMScript.call(eval, null, [v353])
    }
    v73[v74] = v750;
    j$$2 = j$$2 + 1;
    var v354 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v354
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v355;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = arrayOfPatterns$$4[j$$3]
    }
    var v356 = v502.match(/=[a-zA-Z\*]/);
    var v751 = v356.toString();
    v77[v78] = v751;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v357 = geneticCodeMatchResult$$1[j$$3]
    }
    var v752 = v357.replace(/=/g, "");
    v79[v80] = v752;
    j$$3 = j$$3 + 1;
    var v358 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v358
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v82 = "Results for " + v359;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v360 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v360 != -1;
  if(v84) {
    var v361 = stringToReturn$$2 + '"';
    var v83 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v362 = stringToReturn$$2 + ' starting "';
  var v363 = sequence$$3.substring(0, 10);
  var v85 = v362 + v363;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v503 = "Results for " + topology;
  var v364 = v503 + " ";
  var v365 = sequence$$4.length;
  var v87 = v364 + v365;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v366 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v366 != -1;
  if(v89) {
    var v367 = stringToReturn$$3 + '"';
    var v88 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v368 = stringToReturn$$3 + ' starting "';
  var v369 = sequence$$4.substring(0, 10);
  var v90 = v368 + v369;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v370;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v371 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v371 != -1;
  if(v94) {
    var v372 = stringToReturn$$4 + '"';
    var v93 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = sequenceOne$$1.substring(0, 10);
  var v95 = v373 + v374;
  stringToReturn$$4 = v95 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v96 = v375 + v376;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v377 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v377 != -1;
  if(v98) {
    var v378 = stringToReturn$$4 + '"';
    var v97 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = sequenceTwo$$1.substring(0, 10);
  var v99 = v379 + v380;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    var v381 = Math.random();
    var v382 = components.length;
    var v101 = v381 * v382;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v383 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v383 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v384 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v384 != -1;
  if(v105) {
    var v104 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v104.toString();
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
    var v573 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v505 = v573 != -1;
    var v575 = !v505;
    if(v575) {
      var v622 = expressionToCheck.search(/\[\]/);
      var v574 = v622 != -1;
      var v624 = !v574;
      if(v624) {
        var v654 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v623 = v654 != -1;
        var v656 = !v623;
        if(v656) {
          var v669 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v655 = v669 != -1;
          var v671 = !v655;
          if(v671) {
            var v684 = expressionToCheck.search(/\|\|/);
            var v670 = v684 != -1;
            var v686 = !v670;
            if(v686) {
              var v697 = expressionToCheck.search(/\/\|/);
              var v685 = v697 != -1;
              var v699 = !v685;
              if(v699) {
                var v708 = expressionToCheck.search(/\|\//);
                var v698 = v708 != -1;
                var v710 = !v698;
                if(v710) {
                  var v718 = expressionToCheck.search(/\[.\]/);
                  var v709 = v718 != -1;
                  var v720 = !v709;
                  if(v720) {
                    var v725 = expressionToCheck.search(/\</);
                    var v719 = v725 != -1;
                    var v727 = !v719;
                    if(v727) {
                      var v726 = expressionToCheck.search(/\>/);
                      v719 = v726 != -1
                    }
                    v709 = v719
                  }
                  v698 = v709
                }
                v685 = v698
              }
              v670 = v685
            }
            v655 = v670
          }
          v623 = v655
        }
        v574 = v623
      }
      v505 = v574
    }
    v385 = v505
  }
  var v106 = v385;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAMScript.call(v107.write, v107, ['<form action="">\n']);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ["<pre>"]);
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v753 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v753[2], v753[1], v753[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v576 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v576 + "<head>\n";
  var v386 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v732 = v736 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v728 = v732 + "div.info {font-weight: bold}\n";
    var v721 = v728 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v721 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v700 = v711 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v687 = v700 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v672 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v657 = v672 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v625 = v657 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v577 = v625 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v508 = v577 + "td.many {color: #000000}\n";
    var v387 = v508 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v387 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v744 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v741 = v744 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v741 + "div.title {display: none}\n";
    var v733 = v737 + "div.info {font-weight: bold}\n";
    var v729 = v733 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v729 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v722 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v701 = v712 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v701 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v688 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v673 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v658 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v578 = v626 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v509 = v578 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v509 + "img {display: none}\n";
    var v116 = v388 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v579 = "</head>\n" + '<body class="main">\n';
  var v510 = v579 + '<div class="title">';
  var v389 = v510 + title$$7;
  var v118 = v389 + " results</div>\n";
  JAMScript.call(v117.write, v117, [v118]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v754 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v754[2], v754[1], v754[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v580 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v580 + "<head>\n";
  var v390 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v738 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v738 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v730 = v734 + "div.info {font-weight: bold}\n";
    var v723 = v730 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v713 = v723 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v702 = v713 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v689 = v702 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v674 = v689 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v659 = v674 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v627 = v659 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v581 = v627 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v512 = v581 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v512 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v391 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v745 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v745 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v731 = v735 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v724 = v731 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v714 = v724 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v703 = v714 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v690 = v703 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v675 = v690 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v660 = v675 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v628 = v660 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v582 = v628 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v513 = v582 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v513 + "img {display: none}\n";
    var v124 = v392 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v583 = "</head>\n" + '<body class="main">\n';
  var v514 = v583 + '<div class="title">';
  var v393 = v514 + title$$9;
  var v126 = v393 + " results</div>\n";
  JAMScript.call(v125.write, v125, [v126]);
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
  var v394 = dnaSequence$$1.search(/./);
  var v127 = v394 != -1;
  if(v127) {
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
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v395 = testArray[0];
  var v131 = v395 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v396 = testString.search(re$$2);
  var v132 = v396 == -1;
  if(v132) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAMScript.isEval(eval)) {
      re$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAMScript.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  var v133 = !caughtException;
  if(v133) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v134 = testString != "1X2X3X";
  if(v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v397 = testNum.toFixed(3);
  var v135 = v397 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v398 = testNum.toPrecision(5);
  var v136 = v398 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v399 = theNumber$$1.search(/\d/);
  var v137 = v399 == -1;
  if(v137) {
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
    var v584 = emblFile.search(/AC/);
    var v516 = v584 == -1;
    var v586 = !v516;
    if(v586) {
      var v629 = emblFile.search(/DE/);
      var v585 = v629 == -1;
      var v631 = !v585;
      if(v631) {
        var v630 = emblFile.search(/SQ/);
        v585 = v630 == -1
      }
      v516 = v585
    }
    v400 = v516
  }
  var v138 = v400;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v401 = theNumber$$2.search(/\d/);
  var v139 = v401 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v402 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v403 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v403 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v404 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v404 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v518 = genBankFile.search(/LOCUS/);
  var v405 = v518 == -1;
  var v520 = !v405;
  if(v520) {
    var v587 = genBankFile.search(/DEFINITION/);
    var v519 = v587 == -1;
    var v589 = !v519;
    if(v589) {
      var v632 = genBankFile.search(/ACCESSION/);
      var v588 = v632 == -1;
      var v634 = !v588;
      if(v634) {
        var v633 = genBankFile.search(/ORIGIN/);
        v588 = v633 == -1
      }
      v519 = v588
    }
    v405 = v519
  }
  var v144 = v405;
  if(v144) {
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
    var v590 = genBankFile$$1.search(/DEFINITION/);
    var v522 = v590 == -1;
    var v592 = !v522;
    if(v592) {
      var v635 = genBankFile$$1.search(/ACCESSION/);
      var v591 = v635 == -1;
      var v637 = !v591;
      if(v637) {
        var v636 = genBankFile$$1.search(/ORIGIN/);
        v591 = v636 == -1
      }
      v522 = v591
    }
    v406 = v522
  }
  var v145 = v406;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v407 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v407 == -1;
  if(v146) {
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
    var v593 = emblFile$$1.search(/AC/);
    var v525 = v593 == -1;
    var v595 = !v525;
    if(v595) {
      var v638 = emblFile$$1.search(/DE/);
      var v594 = v638 == -1;
      var v640 = !v594;
      if(v640) {
        var v639 = emblFile$$1.search(/SQ/);
        v594 = v639 == -1
      }
      v525 = v594
    }
    v408 = v525
  }
  var v147 = v408;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v409 = emblFile$$1.search(/^FT/m);
  var v148 = v409 == -1;
  if(v148) {
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
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v410 = basePerLine / groupSize;
    var v152 = j$$6 <= v410;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v411 = k + i$$5;
        var v150 = text$$10.charAt(v411);
        lineOfText = lineOfText + v150;
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
    JAMScript.call(v153.write, v153, [v154]);
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
  var v187 = i$$6 < stopBase$$2;
  for(;v187;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v414 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v414;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v415 = i$$6 + k$$1;
        var v157 = v415 >= stopBase$$2;
        if(v157) {
          break
        }
        var v416 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v416);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v417 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v418 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v418
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v596 = adjustNumbering(lineNum, numberingAdjustment);
      var v527 = rightNum(v596, "", 8, tabIn$$3);
      var v419 = v527 + lineOfText$$1;
      var v165 = v419 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v597 = adjustNumbering(lineNum, numberingAdjustment);
        var v528 = rightNum(v597, "", 8, tabIn$$3);
        var v529 = complement(lineOfText$$1);
        var v420 = v528 + v529;
        var v167 = v420 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v530 = adjustNumbering(i$$6, numberingAdjustment);
        var v421 = lineOfText$$1 + v530;
        var v171 = v421 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v531 = complement(lineOfText$$1);
          var v532 = adjustNumbering(i$$6, numberingAdjustment);
          var v422 = v531 + v532;
          var v173 = v422 + "\n";
          JAMScript.call(v172.write, v172, [v173]);
          var v174 = outputWindow.document;
          JAMScript.call(v174.write, v174, ["\n"])
        }
      }else {
        var v184 = numberPosition$$1 == "above";
        if(v184) {
          var v176 = outputWindow.document;
          var v177 = aboveNum + "\n";
          JAMScript.call(v176.write, v176, [v177]);
          var v178 = outputWindow.document;
          var v179 = lineOfText$$1 + "\n";
          JAMScript.call(v178.write, v178, [v179]);
          var v183 = strands$$1 == "two";
          if(v183) {
            var v180 = outputWindow.document;
            var v423 = complement(lineOfText$$1);
            var v181 = v423 + "\n";
            JAMScript.call(v180.write, v180, [v181]);
            var v182 = outputWindow.document;
            JAMScript.call(v182.write, v182, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v187 = i$$6 < stopBase$$2
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
  var v206 = i$$7 < stopBase$$3;
  for(;v206;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v424 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v424;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v425 = i$$7 + k$$2;
        var v188 = v425 >= stopBase$$3;
        if(v188) {
          break
        }
        var v426 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v426);
        lineOfText$$2 = lineOfText$$2 + v189;
        k$$2 = k$$2 + 1;
        v190 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v192 = numberPosition$$2 == "above";
      if(v192) {
        var v191 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v191
      }
      var v193 = i$$7 >= stopBase$$3;
      if(v193) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v427 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v427
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v533 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v533 + lineOfText$$2;
      var v196 = v428 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v198 = v429 + "\n";
        JAMScript.call(v197.write, v197, [v198])
      }else {
        var v203 = numberPosition$$2 == "above";
        if(v203) {
          var v199 = outputWindow.document;
          var v200 = aboveNum$$1 + "\n";
          JAMScript.call(v199.write, v199, [v200]);
          var v201 = outputWindow.document;
          var v202 = lineOfText$$2 + "\n";
          JAMScript.call(v201.write, v201, [v202])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v206 = i$$7 < stopBase$$3
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
  var v534 = sequence$$13.length;
  var v430 = v534 <= firstIndexToMutate;
  var v536 = !v430;
  if(v536) {
    var v535 = lastIndexToMutate < 0;
    var v598 = !v535;
    if(v598) {
      v535 = lastIndexToMutate <= firstIndexToMutate
    }
    v430 = v535
  }
  var v207 = v430;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v431 = Math.random();
    var v208 = v431 * maxNum;
    randNum = Math.floor(v208);
    var v432 = randNum < firstIndexToMutate;
    var v537 = !v432;
    if(v537) {
      v432 = randNum > lastIndexToMutate
    }
    var v209 = v432;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v433 = Math.random();
      var v434 = components$$1.length;
      var v210 = v433 * v434;
      componentsIndex = Math.round(v210);
      var v435 = components$$1.length;
      var v211 = componentsIndex == v435;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v436 = components$$1[componentsIndex]
      }
      var v212 = v436 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v437 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v438 = components$$1[componentsIndex]
    }
    var v213 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    var v214 = sequence$$13.substring(v439, v440);
    sequence$$13 = v213 + v214;
    i$$8 = i$$8 + 1;
    v215 = i$$8 < numMut
  }
  var v216 = outputWindow.document;
  var v217 = addReturns(sequence$$13);
  JAMScript.call(v216.write, v216, [v217]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v222 = j$$9 < lengthOut$$1;
  for(;v222;) {
    var v441 = Math.random();
    var v442 = components$$2.length;
    var v218 = v441 * v442;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v221 = v443 == 60;
    if(v221) {
      var v219 = outputWindow.document;
      var v220 = sequence$$14 + "\n";
      JAMScript.call(v219.write, v219, [v220]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v222 = j$$9 < lengthOut$$1
  }
  var v223 = outputWindow.document;
  var v224 = sequence$$14 + "\n";
  JAMScript.call(v223.write, v223, [v224]);
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
  var v228 = dnaConformation == "circular";
  if(v228) {
    var v225 = sequence$$15.substring(0, lookAhead);
    shiftValue = v225.length;
    var v599 = sequence$$15.length;
    var v538 = v599 - lookAhead;
    var v539 = sequence$$15.length;
    var v444 = sequence$$15.substring(v538, v539);
    var v226 = v444 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v600 = '<tr><td class="title" width="200px">' + "Site:";
  var v540 = v600 + '</td><td class="title">';
  var v445 = v540 + "Positions:";
  var v231 = v445 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v247 = i$$9 < v446;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v447 = arrayOfItems[i$$9]
    }
    var v232 = v447.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v601 = arrayOfItems[i$$9]
    }
    var v541 = v601.match(/\)\D*\d+/);
    var v448 = v541.toString();
    var v233 = v448.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if(v449) {
        v449 = matchPosition < upperLimit
      }
      var v237 = v449;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v236 = v450 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v542 = matchExp.lastIndex;
      var v602 = RegExp.lastMatch;
      var v543 = v602.length;
      var v451 = v542 - v543;
      v238.lastIndex = v451 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v452 = tempString$$1.search(/\d/);
    var v240 = v452 != -1;
    if(v240) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v244 = timesFound == 0;
    if(v244) {
      backGroundClass = "none"
    }else {
      var v243 = timesFound == 1;
      if(v243) {
        backGroundClass = "one"
      }else {
        var v242 = timesFound == 2;
        if(v242) {
          backGroundClass = "two"
        }else {
          var v241 = timesFound == 3;
          if(v241) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v245 = outputWindow.document;
    var v691 = '<tr><td class="' + backGroundClass;
    var v676 = v691 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v715 = arrayOfItems[i$$9]
    }
    var v704 = v715.match(/\([^\(]+\)/);
    var v692 = v704.toString();
    var v677 = v692.replace(/\(|\)/g, "");
    var v661 = v676 + v677;
    var v641 = v661 + '</td><td class="';
    var v603 = v641 + backGroundClass;
    var v544 = v603 + '">';
    var v453 = v544 + tempString$$1;
    var v246 = v453 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v454 = arrayOfItems.length;
    v247 = i$$9 < v454
  }
  var v248 = outputWindow.document;
  JAMScript.call(v248.write, v248, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v249 = outputWindow.document;
  JAMScript.call(v249.write, v249, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v250 = outputWindow.document;
  var v662 = '<tr><td class="title">' + "Pattern:";
  var v642 = v662 + '</td><td class="title">';
  var v604 = v642 + "Times found:";
  var v545 = v604 + '</td><td class="title">';
  var v455 = v545 + "Percentage:";
  var v251 = v455 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v456 = arrayOfItems$$1.length;
  var v260 = i$$10 < v456;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v457 = arrayOfItems$$1[i$$10]
    }
    var v252 = v457.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v458 = sequence$$16.search(matchExp$$1);
    var v254 = v458 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v643 = arrayOfItems$$1[i$$10]
    }
    var v605 = v643.match(/\d+/);
    var v547 = parseFloat(v605);
    var v459 = v546 - v547;
    var v257 = v459 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v460 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v606 = arrayOfItems$$1[i$$10]
      }
      var v548 = v606.match(/\d+/);
      var v461 = parseFloat(v548);
      var v256 = v460 - v461;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = arrayOfItems$$1[i$$10]
    }
    var v705 = v716.match(/\([^\(]+\)\b/);
    var v693 = v705.toString();
    var v678 = v693.replace(/\(|\)/g, "");
    var v663 = "<tr><td>" + v678;
    var v644 = v663 + "</td><td>";
    var v607 = v644 + tempNumber;
    var v549 = v607 + "</td><td>";
    var v550 = percentage.toFixed(2);
    var v462 = v549 + v550;
    var v259 = v462 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v463 = arrayOfItems$$1.length;
    v260 = i$$10 < v463
  }
  var v261 = outputWindow.document;
  JAMScript.call(v261.write, v261, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v464 = sequence$$17.length;
  var v268 = v464 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v465 = Math.random();
    var v262 = v465 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v466 = tempSeq.length;
    var v267 = v466 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v467 = sequence$$17.length;
    v268 = v467 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function proteinPattern(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v468 = testScript();
  var v271 = v468 == false;
  if(v271) {
    return false
  }
  var re$$3;
  var matches = new Array;
  var v679 = theDocument.forms;
  var v664 = v679[0];
  var v645 = v664.elements;
  var v608 = v645[0];
  var v551 = checkFormElement(v608);
  var v469 = v551 == false;
  var v553 = !v469;
  if(v553) {
    var v706 = theDocument.forms;
    var v694 = v706[0];
    var v680 = v694.elements;
    var v665 = v680[0];
    var v646 = v665.value;
    var v609 = checkSequenceLength(v646, maxInput$$3);
    var v552 = v609 == false;
    var v611 = !v552;
    if(v611) {
      var v695 = theDocument.forms;
      var v681 = v695[0];
      var v666 = v681.elements;
      var v647 = v666[1];
      var v610 = checkFormElement(v647);
      v552 = v610 == false
    }
    v469 = v552
  }
  var v272 = v469;
  if(v272) {
    return false
  }
  var v682 = theDocument.forms;
  var v667 = v682[0];
  var v648 = v667.elements;
  var v612 = v648[1];
  var v554 = v612.value;
  var v470 = v554.replace(/\//g, "");
  var v273 = "/" + v470;
  re$$3 = v273 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    if(JAMScript.isEval(eval)) {
      re$$3 = eval("introspect(JAMScript.introspectors.processAll) { " + re$$3 + " }")
    }else {
      re$$3 = JAMScript.call(eval, null, [re$$3])
    }
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$5) {
    alert("The regular expression is not formatted correctly.");
    return false
  }
  openWindow("Protein Pattern Find");
  openPre();
  var v649 = theDocument.forms;
  var v613 = v649[0];
  var v555 = v613.elements;
  var v471 = v555[0];
  var v274 = v471.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v274);
  var i$$11 = 0;
  var v472 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v472;
  for(;v280;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v275);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v276 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v276);
    newProtein = removeNonProteinStrict(newProtein);
    var v277 = outputWindow.document;
    var v278 = getInfoFromTitleAndSequence(title, newProtein);
    JAMScript.call(v277.write, v277, [v278]);
    writeProteinPattern(newProtein, re$$3);
    var v279 = outputWindow.document;
    JAMScript.call(v279.write, v279, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v473 = arrayOfFasta$$1.length;
    v280 = i$$11 < v473
  }
  closePre();
  closeWindow();
  return true
}
function writeProteinPattern(proteinSequence$$1, re$$4) {
  var matchArray$$2;
  var matchPosition$$1;
  var matchCount = 0;
  var simplePattern = re$$4.toString();
  simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  var v285 = matchArray$$2 = re$$4.exec(proteinSequence$$1);
  for(;v285;) {
    matchCount = matchCount + 1;
    var match_end = re$$4.lastIndex;
    var v556 = RegExp.lastMatch;
    var v474 = v556.length;
    var v281 = match_end - v474;
    var match_start = v281 + 1;
    var v282 = outputWindow.document;
    var v717 = "&gt;match number " + matchCount;
    var v707 = v717 + ' to "';
    var v696 = v707 + simplePattern;
    var v683 = v696 + '" start=';
    var v668 = v683 + match_start;
    var v650 = v668 + " end=";
    var v614 = v650 + match_end;
    var v557 = v614 + "\n";
    var v615 = matchArray$$2[0];
    var v558 = addReturns(v615);
    var v475 = v557 + v558;
    var v283 = v475 + "\n\n";
    JAMScript.call(v282.write, v282, [v283]);
    var v284 = re$$4;
    var v559 = re$$4.lastIndex;
    var v616 = RegExp.lastMatch;
    var v560 = v616.length;
    var v476 = v559 - v560;
    v284.lastIndex = v476 + 1;
    v285 = matchArray$$2 = re$$4.exec(proteinSequence$$1)
  }
  var v477 = matchCount > 0;
  var v287 = !v477;
  if(v287) {
    var v286 = outputWindow.document;
    JAMScript.call(v286.write, v286, ["no matches found for this sequence.\n\n"])
  }
  return
}
JAMScript.set(document, "onload", v2);
var v288 = document.getElementById("submitbtn");
JAMScript.set(v288, "onclick", v3);
var v289 = document.getElementById("clearbtn");
JAMScript.set(v289, "onclick", v4);

