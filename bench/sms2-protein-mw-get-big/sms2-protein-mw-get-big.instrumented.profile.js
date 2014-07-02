
JAM.startProfile('load');
function v4() {
  var v564 = document.forms;
  var v483 = v564[0];
  var v294 = v483.elements;
  var v5 = v294[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinMw(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v295 = document.main_form;
  var v7 = v295.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v296 = arrayOfSequences.length;
  var v9 = v296 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v11 = i$$1 < v297;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v565 = arrayOfTitles[i$$1]
    }
    var v484 = v565.search(/\S/);
    var v298 = v484 == -1;
    var v486 = !v298;
    if(v486) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v618 = arrayOfSequences[i$$1]
      }
      var v566 = v618.search(/\S/);
      var v485 = v566 == -1;
      var v568 = !v485;
      if(v568) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v619 = arrayOfSequences[i$$1]
        }
        var v567 = v619.length;
        v485 = v567 != lengthOfAlign
      }
      v298 = v485
    }
    var v10 = v298;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v299 = arrayOfTitles.length;
    v11 = i$$1 < v299
  }
  return true
}
function checkCodonTable(codonTable) {
  var v487 = codonTable.search(/AmAcid/);
  var v300 = v487 == -1;
  var v489 = !v300;
  if(v489) {
    var v569 = codonTable.search(/Codon/);
    var v488 = v569 == -1;
    var v571 = !v488;
    if(v571) {
      var v620 = codonTable.search(/Number/);
      var v570 = v620 == -1;
      var v622 = !v570;
      if(v622) {
        var v654 = codonTable.search(/\/1000/);
        var v621 = v654 == -1;
        var v656 = !v621;
        if(v656) {
          var v655 = codonTable.search(/Fraction\s*\.\./);
          v621 = v655 == -1
        }
        v570 = v621
      }
      v488 = v570
    }
    v300 = v488
  }
  var v12 = v300;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v490 = formElement.value;
  var v301 = v490.search(/\S/);
  var v13 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v16 = z$$2 < v302;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = arrayOfPatterns[z$$2]
    }
    var v303 = v491.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v303 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns[z$$2]
    }
    var v304 = moreExpressionCheck(v492);
    var v15 = v304 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v16 = z$$2 < v305
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v25 = j < v306;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v572 = arrayOfPatterns[j]
    }
    var v493 = v572.match(/\/.+\//);
    var v307 = v493 + "gi";
    var v747 = eval(v307);
    v19[v20] = v747;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns[j]
    }
    var v308 = v494.match(/=[a-zA-Z\*]/);
    var v748 = v308.toString();
    v21[v22] = v748;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v309 = geneticCodeMatchResult[j]
    }
    var v749 = v309.replace(/=/g, "");
    v23[v24] = v749;
    j = j + 1;
    var v310 = arrayOfPatterns.length;
    v25 = j < v310
  }
  var i$$2 = 0;
  var v495 = testSequence.length;
  var v311 = v495 - 3;
  var v32 = i$$2 <= v311;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v312 = geneticCodeMatchExp.length;
    var v30 = j < v312;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v496 = geneticCodeMatchExp[j]
      }
      var v313 = codon.search(v496);
      var v29 = v313 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v314 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v314 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v315 = geneticCodeMatchExp.length;
      v30 = j < v315
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v497 = testSequence.length;
    var v316 = v497 - 3;
    v32 = i$$2 <= v316
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v317;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns$$1[z$$3]
    }
    var v318 = v498.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v318 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v319
  }
  var i$$3 = 0;
  var v320 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v320;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns$$1[i$$3]
    }
    var v321 = "[" + v499;
    var v35 = v321 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v322;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v500 = arrayOfPatterns$$1[j$$1]
      }
      var v323 = v500.search(re);
      var v36 = v323 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v324 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v324
    }
    i$$3 = i$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v325
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v326 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v326;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v501 = arrayOfPatterns$$2[z$$4]
    }
    var v327 = v501.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v327 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = arrayOfPatterns$$2[z$$4]
    }
    var v328 = moreExpressionCheck(v502);
    var v40 = v328 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v329 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v329
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v573 = getSequenceFromFasta(text$$7);
  var v503 = v573.replace(/[^A-Za-z]/g, "");
  var v330 = v503.length;
  var v43 = v330 > maxInput;
  if(v43) {
    var v331 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v331 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v332 = text$$8.length;
  var v45 = v332 > maxInput$$1;
  if(v45) {
    var v333 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v333 + " characters.";
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
  var v334 = alignArray.length;
  var v52 = v334 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v335 = alignArray.length;
  var v54 = i$$4 < v335;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = alignArray[i$$4]
    }
    var v336 = v504.search(/[^\s]+\s/);
    var v53 = v336 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v337 = alignArray.length;
    v54 = i$$4 < v337
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
  var v338 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v338 != -1;
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
  var v339 = sequence$$2.length;
  var v58 = "&gt;results for " + v339;
  var stringToReturn = v58 + " residue sequence ";
  var v340 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v340 != -1;
  if(v60) {
    var v341 = stringToReturn + '"';
    var v59 = v341 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v342 = stringToReturn + ' starting "';
  var v343 = sequence$$2.substring(0, 10);
  var v61 = v342 + v343;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v344 = sequenceOne.length;
  var v62 = "Search results for " + v344;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v345 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v345 != -1;
  if(v64) {
    var v346 = stringToReturn$$1 + '"';
    var v63 = v346 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = sequenceOne.substring(0, 10);
  var v65 = v347 + v348;
  stringToReturn$$1 = v65 + '"\n';
  var v349 = stringToReturn$$1 + "and ";
  var v350 = sequenceTwo.length;
  var v66 = v349 + v350;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v351 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v351 != -1;
  if(v68) {
    var v352 = stringToReturn$$1 + '"';
    var v67 = v352 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v353 = stringToReturn$$1 + ' starting "';
  var v354 = sequenceTwo.substring(0, 10);
  var v69 = v353 + v354;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v355 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v355;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v574 = arrayOfPatterns$$3[j$$2]
    }
    var v505 = v574.match(/\/.+\//);
    var v356 = v505 + "gi";
    var v750 = eval(v356);
    v72[v73] = v750;
    j$$2 = j$$2 + 1;
    var v357 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v357
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v358 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v358;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns$$4[j$$3]
    }
    var v359 = v506.match(/=[a-zA-Z\*]/);
    var v751 = v359.toString();
    v76[v77] = v751;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v360 = geneticCodeMatchResult$$1[j$$3]
    }
    var v752 = v360.replace(/=/g, "");
    v78[v79] = v752;
    j$$3 = j$$3 + 1;
    var v361 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v361
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v362 = sequence$$3.length;
  var v81 = "Results for " + v362;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v363 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v363 != -1;
  if(v83) {
    var v364 = stringToReturn$$2 + '"';
    var v82 = v364 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v365 = stringToReturn$$2 + ' starting "';
  var v366 = sequence$$3.substring(0, 10);
  var v84 = v365 + v366;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v367 = v507 + " ";
  var v368 = sequence$$4.length;
  var v86 = v367 + v368;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v369 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v369 != -1;
  if(v88) {
    var v370 = stringToReturn$$3 + '"';
    var v87 = v370 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v371 = stringToReturn$$3 + ' starting "';
  var v372 = sequence$$4.substring(0, 10);
  var v89 = v371 + v372;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v373 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v373;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v374 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v374 != -1;
  if(v93) {
    var v375 = stringToReturn$$4 + '"';
    var v92 = v375 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v376 = stringToReturn$$4 + ' starting "';
  var v377 = sequenceOne$$1.substring(0, 10);
  var v94 = v376 + v377;
  stringToReturn$$4 = v94 + '"\n';
  var v378 = stringToReturn$$4 + "and ";
  var v379 = sequenceTwo$$1.length;
  var v95 = v378 + v379;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v380 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v380 != -1;
  if(v97) {
    var v381 = stringToReturn$$4 + '"';
    var v96 = v381 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v382 = stringToReturn$$4 + ' starting "';
  var v383 = sequenceTwo$$1.substring(0, 10);
  var v98 = v382 + v383;
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
    var v384 = Math.random();
    var v385 = components.length;
    var v100 = v384 * v385;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v386 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v386 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v387 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v387 != -1;
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
  var v508 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v388 = v508 != -1;
  var v510 = !v388;
  if(v510) {
    var v575 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v509 = v575 != -1;
    var v577 = !v509;
    if(v577) {
      var v623 = expressionToCheck.search(/\[\]/);
      var v576 = v623 != -1;
      var v625 = !v576;
      if(v625) {
        var v657 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v624 = v657 != -1;
        var v659 = !v624;
        if(v659) {
          var v673 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v658 = v673 != -1;
          var v675 = !v658;
          if(v675) {
            var v689 = expressionToCheck.search(/\|\|/);
            var v674 = v689 != -1;
            var v691 = !v674;
            if(v691) {
              var v700 = expressionToCheck.search(/\/\|/);
              var v690 = v700 != -1;
              var v702 = !v690;
              if(v702) {
                var v709 = expressionToCheck.search(/\|\//);
                var v701 = v709 != -1;
                var v711 = !v701;
                if(v711) {
                  var v718 = expressionToCheck.search(/\[.\]/);
                  var v710 = v718 != -1;
                  var v720 = !v710;
                  if(v720) {
                    var v725 = expressionToCheck.search(/\</);
                    var v719 = v725 != -1;
                    var v727 = !v719;
                    if(v727) {
                      var v726 = expressionToCheck.search(/\>/);
                      v719 = v726 != -1
                    }
                    v710 = v719
                  }
                  v701 = v710
                }
                v690 = v701
              }
              v674 = v690
            }
            v658 = v674
          }
          v624 = v658
        }
        v576 = v624
      }
      v509 = v576
    }
    v388 = v509
  }
  var v105 = v388;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v578 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v578 + "<head>\n";
  var v389 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v732 = v736 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v728 = v732 + "div.info {font-weight: bold}\n";
    var v721 = v728 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v703 = v712 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v692 = v703 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v692 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v660 = v676 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v626 = v660 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v579 = v626 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v579 + "td.many {color: #000000}\n";
    var v390 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v390 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v744 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v741 = v744 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v741 + "div.title {display: none}\n";
    var v733 = v737 + "div.info {font-weight: bold}\n";
    var v729 = v733 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v729 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v713 = v722 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v704 = v713 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v704 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v693 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v677 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v627 = v661 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v580 = v627 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v580 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v391 = v513 + "img {display: none}\n";
    var v115 = v391 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v581 = "</head>\n" + '<body class="main">\n';
  var v514 = v581 + '<div class="title">';
  var v392 = v514 + title$$7;
  var v117 = v392 + " results</div>\n";
  v116.write(v117);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v582 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v582 + "<head>\n";
  var v393 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v738 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v738 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v730 = v734 + "div.info {font-weight: bold}\n";
    var v723 = v730 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v714 = v723 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v705 = v714 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v694 = v705 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v678 = v694 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v662 = v678 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v628 = v662 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v583 = v628 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v583 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v394 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v394 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v745 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v745 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v731 = v735 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v724 = v731 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v715 = v724 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v706 = v715 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v695 = v706 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v679 = v695 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v663 = v679 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v629 = v663 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v584 = v629 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v584 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v395 = v517 + "img {display: none}\n";
    var v123 = v395 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v585 = "</head>\n" + '<body class="main">\n';
  var v518 = v585 + '<div class="title">';
  var v396 = v518 + title$$9;
  var v125 = v396 + " results</div>\n";
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
  var v397 = dnaSequence$$1.search(/./);
  var v126 = v397 != -1;
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
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v398 = testArray[0];
  var v130 = v398 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v399 = testString.search(re$$2);
  var v131 = v399 == -1;
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
  var v400 = testNum.toFixed(3);
  var v134 = v400 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v401 = testNum.toPrecision(5);
  var v135 = v401 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v402 = theNumber$$1.search(/\d/);
  var v136 = v402 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v519 = emblFile.search(/ID/);
  var v403 = v519 == -1;
  var v521 = !v403;
  if(v521) {
    var v586 = emblFile.search(/AC/);
    var v520 = v586 == -1;
    var v588 = !v520;
    if(v588) {
      var v630 = emblFile.search(/DE/);
      var v587 = v630 == -1;
      var v632 = !v587;
      if(v632) {
        var v631 = emblFile.search(/SQ/);
        v587 = v631 == -1
      }
      v520 = v587
    }
    v403 = v520
  }
  var v137 = v403;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v404 = theNumber$$2.search(/\d/);
  var v138 = v404 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v405 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v405 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v406 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v406 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v407 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v407 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v522 = genBankFile.search(/LOCUS/);
  var v408 = v522 == -1;
  var v524 = !v408;
  if(v524) {
    var v589 = genBankFile.search(/DEFINITION/);
    var v523 = v589 == -1;
    var v591 = !v523;
    if(v591) {
      var v633 = genBankFile.search(/ACCESSION/);
      var v590 = v633 == -1;
      var v635 = !v590;
      if(v635) {
        var v634 = genBankFile.search(/ORIGIN/);
        v590 = v634 == -1
      }
      v523 = v590
    }
    v408 = v523
  }
  var v143 = v408;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v525 = genBankFile$$1.search(/LOCUS/);
  var v409 = v525 == -1;
  var v527 = !v409;
  if(v527) {
    var v592 = genBankFile$$1.search(/DEFINITION/);
    var v526 = v592 == -1;
    var v594 = !v526;
    if(v594) {
      var v636 = genBankFile$$1.search(/ACCESSION/);
      var v593 = v636 == -1;
      var v638 = !v593;
      if(v638) {
        var v637 = genBankFile$$1.search(/ORIGIN/);
        v593 = v637 == -1
      }
      v526 = v593
    }
    v409 = v526
  }
  var v144 = v409;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v410 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v410 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v528 = emblFile$$1.search(/ID/);
  var v411 = v528 == -1;
  var v530 = !v411;
  if(v530) {
    var v595 = emblFile$$1.search(/AC/);
    var v529 = v595 == -1;
    var v597 = !v529;
    if(v597) {
      var v639 = emblFile$$1.search(/DE/);
      var v596 = v639 == -1;
      var v641 = !v596;
      if(v641) {
        var v640 = emblFile$$1.search(/SQ/);
        v596 = v640 == -1
      }
      v529 = v596
    }
    v411 = v529
  }
  var v146 = v411;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v412 = emblFile$$1.search(/^FT/m);
  var v147 = v412 == -1;
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
  var v154 = i$$5 < stopBase;
  for(;v154;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v413 = basePerLine / groupSize;
    var v151 = j$$6 <= v413;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v414 = k + i$$5;
        var v149 = text$$10.charAt(v414);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v415 = basePerLine / groupSize;
      v151 = j$$6 <= v415
    }
    var v152 = outputWindow.document;
    var v153 = lineOfText + "\n";
    v152.write(v153);
    lineOfText = "";
    v154 = i$$5 < stopBase
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
    var v416 = adjustment < 0;
    if(v416) {
      v416 = adjusted >= 0
    }
    var v155 = v416;
    if(v155) {
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
  var v186 = i$$6 < stopBase$$2;
  for(;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v417 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v417;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v418 = i$$6 + k$$1;
        var v156 = v418 >= stopBase$$2;
        if(v156) {
          break
        }
        var v419 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v419);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v420 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v420, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v421 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v421
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v598 = adjustNumbering(lineNum, numberingAdjustment);
      var v531 = rightNum(v598, "", 8, tabIn$$3);
      var v422 = v531 + lineOfText$$1;
      var v164 = v422 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v599 = adjustNumbering(lineNum, numberingAdjustment);
        var v532 = rightNum(v599, "", 8, tabIn$$3);
        var v533 = complement(lineOfText$$1);
        var v423 = v532 + v533;
        var v166 = v423 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v534 = adjustNumbering(i$$6, numberingAdjustment);
        var v424 = lineOfText$$1 + v534;
        var v170 = v424 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v535 = complement(lineOfText$$1);
          var v536 = adjustNumbering(i$$6, numberingAdjustment);
          var v425 = v535 + v536;
          var v172 = v425 + "\n";
          v171.write(v172);
          var v173 = outputWindow.document;
          v173.write("\n")
        }
      }else {
        var v183 = numberPosition$$1 == "above";
        if(v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          v175.write(v176);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          v177.write(v178);
          var v182 = strands$$1 == "two";
          if(v182) {
            var v179 = outputWindow.document;
            var v426 = complement(lineOfText$$1);
            var v180 = v426 + "\n";
            v179.write(v180);
            var v181 = outputWindow.document;
            v181.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2
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
  var v205 = i$$7 < stopBase$$3;
  for(;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v427 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v427;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v428 = i$$7 + k$$2;
        var v187 = v428 >= stopBase$$3;
        if(v187) {
          break
        }
        var v429 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v429);
        lineOfText$$2 = lineOfText$$2 + v188;
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v191 = numberPosition$$2 == "above";
      if(v191) {
        var v190 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v190
      }
      var v192 = i$$7 >= stopBase$$3;
      if(v192) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v430 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v430
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v537 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v431 = v537 + lineOfText$$2;
      var v195 = v431 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v432 = lineOfText$$2 + i$$7;
        var v197 = v432 + "\n";
        v196.write(v197)
      }else {
        var v202 = numberPosition$$2 == "above";
        if(v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          v198.write(v199);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          v200.write(v201)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3
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
  var v538 = sequence$$13.length;
  var v433 = v538 <= firstIndexToMutate;
  var v540 = !v433;
  if(v540) {
    var v539 = lastIndexToMutate < 0;
    var v600 = !v539;
    if(v600) {
      v539 = lastIndexToMutate <= firstIndexToMutate
    }
    v433 = v539
  }
  var v206 = v433;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v434 = Math.random();
    var v207 = v434 * maxNum;
    randNum = Math.floor(v207);
    var v435 = randNum < firstIndexToMutate;
    var v541 = !v435;
    if(v541) {
      v435 = randNum > lastIndexToMutate
    }
    var v208 = v435;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v436 = Math.random();
      var v437 = components$$1.length;
      var v209 = v436 * v437;
      componentsIndex = Math.round(v209);
      var v438 = components$$1.length;
      var v210 = componentsIndex == v438;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v439 = components$$1[componentsIndex]
      }
      var v211 = v439 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v440 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v441 = components$$1[componentsIndex]
    }
    var v212 = v440 + v441;
    var v442 = randNum + 1;
    var v443 = sequence$$13.length;
    var v213 = sequence$$13.substring(v442, v443);
    sequence$$13 = v212 + v213;
    i$$8 = i$$8 + 1;
    v214 = i$$8 < numMut
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  v215.write(v216);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for(;v221;) {
    var v444 = Math.random();
    var v445 = components$$2.length;
    var v217 = v444 * v445;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v446 = sequence$$14.length;
    var v220 = v446 == 60;
    if(v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      v218.write(v219);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v221 = j$$9 < lengthOut$$1
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  v222.write(v223);
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
  var v227 = dnaConformation == "circular";
  if(v227) {
    var v224 = sequence$$15.substring(0, lookAhead);
    shiftValue = v224.length;
    var v601 = sequence$$15.length;
    var v542 = v601 - lookAhead;
    var v543 = sequence$$15.length;
    var v447 = sequence$$15.substring(v542, v543);
    var v225 = v447 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v602 = '<tr><td class="title" width="200px">' + "Site:";
  var v544 = v602 + '</td><td class="title">';
  var v448 = v544 + "Positions:";
  var v230 = v448 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v449 = arrayOfItems.length;
  var v246 = i$$9 < v449;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v450 = arrayOfItems[i$$9]
    }
    var v231 = v450.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v603 = arrayOfItems[i$$9]
    }
    var v545 = v603.match(/\)\D*\d+/);
    var v451 = v545.toString();
    var v232 = v451.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v452 = matchPosition >= lowerLimit;
      if(v452) {
        v452 = matchPosition < upperLimit
      }
      var v236 = v452;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v453 = matchPosition - shiftValue;
        var v235 = v453 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v546 = matchExp.lastIndex;
      var v604 = RegExp.lastMatch;
      var v547 = v604.length;
      var v454 = v546 - v547;
      v237.lastIndex = v454 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v455 = tempString$$1.search(/\d/);
    var v239 = v455 != -1;
    if(v239) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v243 = timesFound == 0;
    if(v243) {
      backGroundClass = "none"
    }else {
      var v242 = timesFound == 1;
      if(v242) {
        backGroundClass = "one"
      }else {
        var v241 = timesFound == 2;
        if(v241) {
          backGroundClass = "two"
        }else {
          var v240 = timesFound == 3;
          if(v240) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v244 = outputWindow.document;
    var v696 = '<tr><td class="' + backGroundClass;
    var v680 = v696 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = arrayOfItems[i$$9]
    }
    var v707 = v716.match(/\([^\(]+\)/);
    var v697 = v707.toString();
    var v681 = v697.replace(/\(|\)/g, "");
    var v664 = v680 + v681;
    var v642 = v664 + '</td><td class="';
    var v605 = v642 + backGroundClass;
    var v548 = v605 + '">';
    var v456 = v548 + tempString$$1;
    var v245 = v456 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v457 = arrayOfItems.length;
    v246 = i$$9 < v457
  }
  var v247 = outputWindow.document;
  v247.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  v248.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v249 = outputWindow.document;
  var v665 = '<tr><td class="title">' + "Pattern:";
  var v643 = v665 + '</td><td class="title">';
  var v606 = v643 + "Times found:";
  var v549 = v606 + '</td><td class="title">';
  var v458 = v549 + "Percentage:";
  var v250 = v458 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v459 = arrayOfItems$$1.length;
  var v259 = i$$10 < v459;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v460 = arrayOfItems$$1[i$$10]
    }
    var v251 = v460.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v461 = sequence$$16.search(matchExp$$1);
    var v253 = v461 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v550 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v644 = arrayOfItems$$1[i$$10]
    }
    var v607 = v644.match(/\d+/);
    var v551 = parseFloat(v607);
    var v462 = v550 - v551;
    var v256 = v462 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v463 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v608 = arrayOfItems$$1[i$$10]
      }
      var v552 = v608.match(/\d+/);
      var v464 = parseFloat(v552);
      var v255 = v463 - v464;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v717 = arrayOfItems$$1[i$$10]
    }
    var v708 = v717.match(/\([^\(]+\)\b/);
    var v698 = v708.toString();
    var v682 = v698.replace(/\(|\)/g, "");
    var v666 = "<tr><td>" + v682;
    var v645 = v666 + "</td><td>";
    var v609 = v645 + tempNumber;
    var v553 = v609 + "</td><td>";
    var v554 = percentage.toFixed(2);
    var v465 = v553 + v554;
    var v258 = v465 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v466 = arrayOfItems$$1.length;
    v259 = i$$10 < v466
  }
  var v260 = outputWindow.document;
  v260.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v467 = sequence$$17.length;
  var v267 = v467 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v468 = Math.random();
    var v261 = v468 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v469 = tempSeq.length;
    var v266 = v469 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v470 = sequence$$17.length;
    v267 = v470 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function proteinMw(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v471 = testScript();
  var v270 = v471 == false;
  if(v270) {
    return false
  }
  var v683 = theDocument.forms;
  var v667 = v683[0];
  var v646 = v667.elements;
  var v610 = v646[0];
  var v555 = checkFormElement(v610);
  var v472 = v555 == false;
  var v557 = !v472;
  if(v557) {
    var v699 = theDocument.forms;
    var v684 = v699[0];
    var v668 = v684.elements;
    var v647 = v668[0];
    var v611 = v647.value;
    var v556 = checkSequenceLength(v611, maxInput$$3);
    v472 = v556 == false
  }
  var v271 = v472;
  if(v271) {
    return false
  }
  var arrayOfMw = ["/A/ (A)71.08", "/C/ (C)103.14", "/D/ (D)115.09", "/E/ (E)129.12", " /F/ (F)147.18", "/G/ (G)57.06", "/H/ (H)137.15", "/I/ (I)113.17", "/K/ (K)128.18", "/L/ (L)113.17", "/M/ (M)131.21", "/N/ (N)114.11", "/P/ (P)97.12", "/Q/ (Q)128.41", "/R/ (R)156.20", "/S/ (S)87.08", "/T/ (T)101.11", "/V/ (V)99.14", "/W/ (W)186.21", "/Y/ (Y)163.18"];
  openWindow("Protein Molecular Weight");
  var v648 = theDocument.forms;
  var v612 = v648[0];
  var v558 = v612.elements;
  var v473 = v558[0];
  var v272 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v474;
  for(;v280;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v273 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v273);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v274);
    newProtein = removeNonProteinStrict(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(title, newProtein);
    v275.write(v276);
    var v685 = theDocument.forms;
    var v669 = v685[0];
    var v649 = v669.elements;
    var v613 = v649[4];
    var v559 = v613.options;
    var v686 = theDocument.forms;
    var v670 = v686[0];
    var v650 = v670.elements;
    var v614 = v650[4];
    var v560 = v614.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v475 = v559[v560]
    }
    var v277 = v475.value;
    var v687 = theDocument.forms;
    var v671 = v687[0];
    var v651 = v671.elements;
    var v615 = v651[5];
    var v561 = v615.options;
    var v688 = theDocument.forms;
    var v672 = v688[0];
    var v652 = v672.elements;
    var v616 = v652[5];
    var v562 = v616.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v476 = v561[v562]
    }
    var v278 = v476.value;
    writeProtMw(newProtein, arrayOfMw, v277, v278);
    var v279 = outputWindow.document;
    v279.write("<br />\n<br />\n");
    i$$11 = i$$11 + 1;
    var v477 = arrayOfFasta$$1.length;
    v280 = i$$11 < v477
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeProtMw(proteinSequence$$1, arrayOfMw$$1, copies, fusion) {
  var water = 18.015;
  var result = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v281 = j$$10 < copies;
  for(;v281;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10 = j$$10 + 1;
    v281 = j$$10 < copies
  }
  j$$10 = 0;
  var v478 = arrayOfMw$$1.length;
  var v286 = j$$10 < v478;
  for(;v286;) {
    var tempNumber$$1 = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v479 = arrayOfMw$$1[j$$10]
    }
    var v282 = v479.match(/\/[^\/]+\//);
    var matchExp$$2 = v282 + "gi";
    matchExp$$2 = eval(matchExp$$2);
    var v480 = proteinSequence$$1.search(matchExp$$2);
    var v284 = v480 != -1;
    if(v284) {
      var v283 = proteinSequence$$1.match(matchExp$$2);
      tempNumber$$1 = v283.length
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v653 = arrayOfMw$$1[j$$10]
    }
    var v617 = v653.match(/[\d\.]+/);
    var v563 = v617.toString();
    var v481 = parseFloat(v563);
    var v285 = tempNumber$$1 * v481;
    result = result + v285;
    j$$10 = j$$10 + 1;
    var v482 = arrayOfMw$$1.length;
    v286 = j$$10 < v482
  }
  var v291 = result == 0;
  if(v291) {
    var v287 = outputWindow.document;
    var v288 = result + " kDa";
    v287.write(v288)
  }else {
    result = result + water;
    result = result / 1E3;
    result = result.toFixed(2);
    var v289 = outputWindow.document;
    var v290 = result + " kDa";
    v289.write(v290)
  }
  return true
}
document.onload = v2;
var v292 = document.getElementById("submitbtn");
v292.onclick = v3;
var v293 = document.getElementById("clearbtn");
v293.onclick = v4;

JAM.stopProfile('load');

