
JAM.startProfile('load');
function v5() {
  var v565 = document.forms;
  var v481 = v565[0];
  var v293 = v481.elements;
  var v6 = v293[0];
  v6.value = " ";
  return
}
function v4() {
  try {
    splitCodons(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v3() {
  var v294 = document.main_form;
  var v8 = v294.main_submit;
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
  var v295 = arrayOfSequences.length;
  var v10 = v295 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v12 = i$$1 < v296;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v566 = arrayOfTitles[i$$1]
    }
    var v482 = v566.search(/\S/);
    var v297 = v482 == -1;
    var v484 = !v297;
    if(v484) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v617 = arrayOfSequences[i$$1]
      }
      var v567 = v617.search(/\S/);
      var v483 = v567 == -1;
      var v569 = !v483;
      if(v569) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v618 = arrayOfSequences[i$$1]
        }
        var v568 = v618.length;
        v483 = v568 != lengthOfAlign
      }
      v297 = v483
    }
    var v11 = v297;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v298 = arrayOfTitles.length;
    v12 = i$$1 < v298
  }
  return true
}
function checkCodonTable(codonTable) {
  var v485 = codonTable.search(/AmAcid/);
  var v299 = v485 == -1;
  var v487 = !v299;
  if(v487) {
    var v570 = codonTable.search(/Codon/);
    var v486 = v570 == -1;
    var v572 = !v486;
    if(v572) {
      var v619 = codonTable.search(/Number/);
      var v571 = v619 == -1;
      var v621 = !v571;
      if(v621) {
        var v651 = codonTable.search(/\/1000/);
        var v620 = v651 == -1;
        var v653 = !v620;
        if(v653) {
          var v652 = codonTable.search(/Fraction\s*\.\./);
          v620 = v652 == -1
        }
        v571 = v620
      }
      v486 = v571
    }
    v299 = v486
  }
  var v13 = v299;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v488 = formElement.value;
  var v300 = v488.search(/\S/);
  var v14 = v300 == -1;
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
  var v301 = arrayOfPatterns.length;
  var v17 = z$$2 < v301;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns[z$$2]
    }
    var v302 = v489.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v302 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns[z$$2]
    }
    var v303 = moreExpressionCheck(v490);
    var v16 = v303 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v17 = z$$2 < v304
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v26 = j < v305;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v573 = arrayOfPatterns[j]
    }
    var v491 = v573.match(/\/.+\//);
    var v306 = v491 + "gi";
    var v748 = eval(v306);
    v20[v21] = v748;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns[j]
    }
    var v307 = v492.match(/=[a-zA-Z\*]/);
    var v749 = v307.toString();
    v22[v23] = v749;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v308 = geneticCodeMatchResult[j]
    }
    var v750 = v308.replace(/=/g, "");
    v24[v25] = v750;
    j = j + 1;
    var v309 = arrayOfPatterns.length;
    v26 = j < v309
  }
  var i$$2 = 0;
  var v493 = testSequence.length;
  var v310 = v493 - 3;
  var v33 = i$$2 <= v310;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v31 = j < v311;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v494 = geneticCodeMatchExp[j]
      }
      var v312 = codon.search(v494);
      var v30 = v312 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v313 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v314 = geneticCodeMatchExp.length;
      v31 = j < v314
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v495 = testSequence.length;
    var v315 = v495 - 3;
    v33 = i$$2 <= v315
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v316;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = arrayOfPatterns$$1[z$$3]
    }
    var v317 = v496.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v317 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v318
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v319;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns$$1[i$$3]
    }
    var v320 = "[" + v497;
    var v36 = v320 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v321;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v498 = arrayOfPatterns$$1[j$$1]
      }
      var v322 = v498.search(re);
      var v37 = v322 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v323 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v323
    }
    i$$3 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v324
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v325;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns$$2[z$$4]
    }
    var v326 = v499.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v326 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns$$2[z$$4]
    }
    var v327 = moreExpressionCheck(v500);
    var v41 = v327 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v328
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v574 = getSequenceFromFasta(text$$7);
  var v501 = v574.replace(/[^A-Za-z]/g, "");
  var v329 = v501.length;
  var v44 = v329 > maxInput;
  if(v44) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v330 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v46 = v331 > maxInput$$1;
  if(v46) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v332 + " characters.";
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
  v47.write("</form>");
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  v48.write("</div>");
  var v49 = outputWindow.document;
  v49.write("</pre>\n");
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  v50.write("</textarea>");
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  v51.write("</body>\n</html>\n");
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
  var v333 = alignArray.length;
  var v53 = v333 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v55 = i$$4 < v334;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = alignArray[i$$4]
    }
    var v335 = v502.search(/[^\s]+\s/);
    var v54 = v335 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v336 = alignArray.length;
    v55 = i$$4 < v336
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
  var v337 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v337 != -1;
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
  var v338 = sequence$$2.length;
  var v59 = "&gt;results for " + v338;
  var stringToReturn = v59 + " residue sequence ";
  var v339 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v339 != -1;
  if(v61) {
    var v340 = stringToReturn + '"';
    var v60 = v340 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v341 = stringToReturn + ' starting "';
  var v342 = sequence$$2.substring(0, 10);
  var v62 = v341 + v342;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v63 = "Search results for " + v343;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v344 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v344 != -1;
  if(v65) {
    var v345 = stringToReturn$$1 + '"';
    var v64 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = sequenceOne.substring(0, 10);
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v67 = v348 + v349;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v350 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v350 != -1;
  if(v69) {
    var v351 = stringToReturn$$1 + '"';
    var v68 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = sequenceTwo.substring(0, 10);
  var v70 = v352 + v353;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v354;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v575 = arrayOfPatterns$$3[j$$2]
    }
    var v503 = v575.match(/\/.+\//);
    var v355 = v503 + "gi";
    var v751 = eval(v355);
    v73[v74] = v751;
    j$$2 = j$$2 + 1;
    var v356 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v356
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v357;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns$$4[j$$3]
    }
    var v358 = v504.match(/=[a-zA-Z\*]/);
    var v752 = v358.toString();
    v77[v78] = v752;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v359 = geneticCodeMatchResult$$1[j$$3]
    }
    var v753 = v359.replace(/=/g, "");
    v79[v80] = v753;
    j$$3 = j$$3 + 1;
    var v360 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v360
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v361 = sequence$$3.length;
  var v82 = "Results for " + v361;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v362 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v362 != -1;
  if(v84) {
    var v363 = stringToReturn$$2 + '"';
    var v83 = v363 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v364 = stringToReturn$$2 + ' starting "';
  var v365 = sequence$$3.substring(0, 10);
  var v85 = v364 + v365;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v505 = "Results for " + topology;
  var v366 = v505 + " ";
  var v367 = sequence$$4.length;
  var v87 = v366 + v367;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v368 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v368 != -1;
  if(v89) {
    var v369 = stringToReturn$$3 + '"';
    var v88 = v369 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v370 = stringToReturn$$3 + ' starting "';
  var v371 = sequence$$4.substring(0, 10);
  var v90 = v370 + v371;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v372 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v372;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v373 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v373 != -1;
  if(v94) {
    var v374 = stringToReturn$$4 + '"';
    var v93 = v374 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v375 = stringToReturn$$4 + ' starting "';
  var v376 = sequenceOne$$1.substring(0, 10);
  var v95 = v375 + v376;
  stringToReturn$$4 = v95 + '"\n';
  var v377 = stringToReturn$$4 + "and ";
  var v378 = sequenceTwo$$1.length;
  var v96 = v377 + v378;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v379 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v379 != -1;
  if(v98) {
    var v380 = stringToReturn$$4 + '"';
    var v97 = v380 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v381 = stringToReturn$$4 + ' starting "';
  var v382 = sequenceTwo$$1.substring(0, 10);
  var v99 = v381 + v382;
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
    var v383 = Math.random();
    var v384 = components.length;
    var v101 = v383 * v384;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v385 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v385 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v386 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v386 != -1;
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
  var v506 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v387 = v506 != -1;
  var v508 = !v387;
  if(v508) {
    var v576 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v507 = v576 != -1;
    var v578 = !v507;
    if(v578) {
      var v622 = expressionToCheck.search(/\[\]/);
      var v577 = v622 != -1;
      var v624 = !v577;
      if(v624) {
        var v654 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v623 = v654 != -1;
        var v656 = !v623;
        if(v656) {
          var v669 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v655 = v669 != -1;
          var v671 = !v655;
          if(v671) {
            var v687 = expressionToCheck.search(/\|\|/);
            var v670 = v687 != -1;
            var v689 = !v670;
            if(v689) {
              var v701 = expressionToCheck.search(/\/\|/);
              var v688 = v701 != -1;
              var v703 = !v688;
              if(v703) {
                var v710 = expressionToCheck.search(/\|\//);
                var v702 = v710 != -1;
                var v712 = !v702;
                if(v712) {
                  var v719 = expressionToCheck.search(/\[.\]/);
                  var v711 = v719 != -1;
                  var v721 = !v711;
                  if(v721) {
                    var v726 = expressionToCheck.search(/\</);
                    var v720 = v726 != -1;
                    var v728 = !v720;
                    if(v728) {
                      var v727 = expressionToCheck.search(/\>/);
                      v720 = v727 != -1
                    }
                    v711 = v720
                  }
                  v702 = v711
                }
                v688 = v702
              }
              v670 = v688
            }
            v655 = v670
          }
          v623 = v655
        }
        v577 = v623
      }
      v507 = v577
    }
    v387 = v507
  }
  var v106 = v387;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  v107.write('<form action="">\n');
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  v108.write("<pre>");
  var v109 = outputWindow.document;
  v109.write('<div class="pre">');
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  v110.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v579 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v579 + "<head>\n";
  var v388 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v111.write(v112);
  if(isColor) {
    var v113 = outputWindow.document;
    var v741 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v737 = v741 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v737 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v722 = v729 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v722 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v704 = v713 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v690 = v704 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v672 = v690 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v657 = v672 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v625 = v657 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v580 = v625 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v510 = v580 + "td.many {color: #000000}\n";
    var v389 = v510 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v389 + "</style>\n";
    v113.write(v114)
  }else {
    var v115 = outputWindow.document;
    var v745 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v742 = v745 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {display: none}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v730 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v730 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v714 = v723 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v705 = v714 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v705 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v691 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v673 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v658 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v581 = v626 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v511 = v581 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v390 = v511 + "img {display: none}\n";
    var v116 = v390 + "</style>\n";
    v115.write(v116)
  }
  var v117 = outputWindow.document;
  var v582 = "</head>\n" + '<body class="main">\n';
  var v512 = v582 + '<div class="title">';
  var v391 = v512 + title$$6;
  var v118 = v391 + " results</div>\n";
  v117.write(v118);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v583 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v513 = v583 + "<head>\n";
  var v392 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v119.write(v120);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v743 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v739 = v743 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v735 = v739 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v731 = v735 + "div.info {font-weight: bold}\n";
    var v724 = v731 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v715 = v724 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v706 = v715 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v692 = v706 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v674 = v692 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v659 = v674 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v627 = v659 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v584 = v627 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v514 = v584 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v393 = v514 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v393 + "</style>\n";
    v121.write(v122)
  }else {
    var v123 = outputWindow.document;
    var v747 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v746 = v747 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v744 = v746 + "div.title {display: none}\n";
    var v740 = v744 + "div.info {font-weight: bold}\n";
    var v736 = v740 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v732 = v736 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v725 = v732 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v716 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v707 = v716 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v693 = v707 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v675 = v693 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v660 = v675 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v628 = v660 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v585 = v628 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v515 = v585 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v394 = v515 + "img {display: none}\n";
    var v124 = v394 + "</style>\n";
    v123.write(v124)
  }
  var v125 = outputWindow.document;
  var v586 = "</head>\n" + '<body class="main">\n';
  var v516 = v586 + '<div class="title">';
  var v395 = v516 + title$$8;
  var v126 = v395 + " results</div>\n";
  v125.write(v126);
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
  var v396 = dnaSequence$$1.search(/./);
  var v127 = v396 != -1;
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
  var v397 = testArray[0];
  var v131 = v397 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v398 = testString.search(re$$2);
  var v132 = v398 == -1;
  if(v132) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
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
  var v399 = testNum.toFixed(3);
  var v135 = v399 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v400 = testNum.toPrecision(5);
  var v136 = v400 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v401 = theNumber$$1.search(/\d/);
  var v137 = v401 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v517 = emblFile.search(/ID/);
  var v402 = v517 == -1;
  var v519 = !v402;
  if(v519) {
    var v587 = emblFile.search(/AC/);
    var v518 = v587 == -1;
    var v589 = !v518;
    if(v589) {
      var v629 = emblFile.search(/DE/);
      var v588 = v629 == -1;
      var v631 = !v588;
      if(v631) {
        var v630 = emblFile.search(/SQ/);
        v588 = v630 == -1
      }
      v518 = v588
    }
    v402 = v518
  }
  var v138 = v402;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v403 = theNumber$$2.search(/\d/);
  var v139 = v403 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v404 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v404 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v405 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v405 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v406 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v406 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v520 = genBankFile.search(/LOCUS/);
  var v407 = v520 == -1;
  var v522 = !v407;
  if(v522) {
    var v590 = genBankFile.search(/DEFINITION/);
    var v521 = v590 == -1;
    var v592 = !v521;
    if(v592) {
      var v632 = genBankFile.search(/ACCESSION/);
      var v591 = v632 == -1;
      var v634 = !v591;
      if(v634) {
        var v633 = genBankFile.search(/ORIGIN/);
        v591 = v633 == -1
      }
      v521 = v591
    }
    v407 = v521
  }
  var v144 = v407;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v523 = genBankFile$$1.search(/LOCUS/);
  var v408 = v523 == -1;
  var v525 = !v408;
  if(v525) {
    var v593 = genBankFile$$1.search(/DEFINITION/);
    var v524 = v593 == -1;
    var v595 = !v524;
    if(v595) {
      var v635 = genBankFile$$1.search(/ACCESSION/);
      var v594 = v635 == -1;
      var v637 = !v594;
      if(v637) {
        var v636 = genBankFile$$1.search(/ORIGIN/);
        v594 = v636 == -1
      }
      v524 = v594
    }
    v408 = v524
  }
  var v145 = v408;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v409 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v409 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v526 = emblFile$$1.search(/ID/);
  var v410 = v526 == -1;
  var v528 = !v410;
  if(v528) {
    var v596 = emblFile$$1.search(/AC/);
    var v527 = v596 == -1;
    var v598 = !v527;
    if(v598) {
      var v638 = emblFile$$1.search(/DE/);
      var v597 = v638 == -1;
      var v640 = !v597;
      if(v640) {
        var v639 = emblFile$$1.search(/SQ/);
        v597 = v639 == -1
      }
      v527 = v597
    }
    v410 = v527
  }
  var v147 = v410;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v411 = emblFile$$1.search(/^FT/m);
  var v148 = v411 == -1;
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
    var v412 = basePerLine / groupSize;
    var v152 = j$$6 <= v412;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v413 = k + i$$5;
        var v150 = text$$10.charAt(v413);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v414 = basePerLine / groupSize;
      v152 = j$$6 <= v414
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
    var v415 = adjustment < 0;
    if(v415) {
      v415 = adjusted >= 0
    }
    var v156 = v415;
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
    var v416 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v416;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v417 = i$$6 + k$$1;
        var v157 = v417 >= stopBase$$2;
        if(v157) {
          break
        }
        var v418 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v418);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v419 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v419, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v420 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v420
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v599 = adjustNumbering(lineNum, numberingAdjustment);
      var v529 = rightNum(v599, "", 8, tabIn$$3);
      var v421 = v529 + lineOfText$$1;
      var v165 = v421 + "\n";
      v164.write(v165);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v600 = adjustNumbering(lineNum, numberingAdjustment);
        var v530 = rightNum(v600, "", 8, tabIn$$3);
        var v531 = complement(lineOfText$$1);
        var v422 = v530 + v531;
        var v167 = v422 + "\n";
        v166.write(v167);
        var v168 = outputWindow.document;
        v168.write("\n")
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v532 = adjustNumbering(i$$6, numberingAdjustment);
        var v423 = lineOfText$$1 + v532;
        var v171 = v423 + "\n";
        v170.write(v171);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v533 = complement(lineOfText$$1);
          var v534 = adjustNumbering(i$$6, numberingAdjustment);
          var v424 = v533 + v534;
          var v173 = v424 + "\n";
          v172.write(v173);
          var v174 = outputWindow.document;
          v174.write("\n")
        }
      }else {
        var v184 = numberPosition$$1 == "above";
        if(v184) {
          var v176 = outputWindow.document;
          var v177 = aboveNum + "\n";
          v176.write(v177);
          var v178 = outputWindow.document;
          var v179 = lineOfText$$1 + "\n";
          v178.write(v179);
          var v183 = strands$$1 == "two";
          if(v183) {
            var v180 = outputWindow.document;
            var v425 = complement(lineOfText$$1);
            var v181 = v425 + "\n";
            v180.write(v181);
            var v182 = outputWindow.document;
            v182.write("\n")
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
    var v426 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v426;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v427 = i$$7 + k$$2;
        var v188 = v427 >= stopBase$$3;
        if(v188) {
          break
        }
        var v428 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v428);
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
      var v429 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v429
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v535 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v430 = v535 + lineOfText$$2;
      var v196 = v430 + "\n";
      v195.write(v196)
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v431 = lineOfText$$2 + i$$7;
        var v198 = v431 + "\n";
        v197.write(v198)
      }else {
        var v203 = numberPosition$$2 == "above";
        if(v203) {
          var v199 = outputWindow.document;
          var v200 = aboveNum$$1 + "\n";
          v199.write(v200);
          var v201 = outputWindow.document;
          var v202 = lineOfText$$2 + "\n";
          v201.write(v202)
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
  var v536 = sequence$$13.length;
  var v432 = v536 <= firstIndexToMutate;
  var v538 = !v432;
  if(v538) {
    var v537 = lastIndexToMutate < 0;
    var v601 = !v537;
    if(v601) {
      v537 = lastIndexToMutate <= firstIndexToMutate
    }
    v432 = v537
  }
  var v207 = v432;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v433 = Math.random();
    var v208 = v433 * maxNum;
    randNum = Math.floor(v208);
    var v434 = randNum < firstIndexToMutate;
    var v539 = !v434;
    if(v539) {
      v434 = randNum > lastIndexToMutate
    }
    var v209 = v434;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v435 = Math.random();
      var v436 = components$$1.length;
      var v210 = v435 * v436;
      componentsIndex = Math.round(v210);
      var v437 = components$$1.length;
      var v211 = componentsIndex == v437;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v438 = components$$1[componentsIndex]
      }
      var v212 = v438 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v439 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v440 = components$$1[componentsIndex]
    }
    var v213 = v439 + v440;
    var v441 = randNum + 1;
    var v442 = sequence$$13.length;
    var v214 = sequence$$13.substring(v441, v442);
    sequence$$13 = v213 + v214;
    i$$8 = i$$8 + 1;
    v215 = i$$8 < numMut
  }
  var v216 = outputWindow.document;
  var v217 = addReturns(sequence$$13);
  v216.write(v217);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v222 = j$$9 < lengthOut$$1;
  for(;v222;) {
    var v443 = Math.random();
    var v444 = components$$2.length;
    var v218 = v443 * v444;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v445 = sequence$$14.length;
    var v221 = v445 == 60;
    if(v221) {
      var v219 = outputWindow.document;
      var v220 = sequence$$14 + "\n";
      v219.write(v220);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v222 = j$$9 < lengthOut$$1
  }
  var v223 = outputWindow.document;
  var v224 = sequence$$14 + "\n";
  v223.write(v224);
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
    var v602 = sequence$$15.length;
    var v540 = v602 - lookAhead;
    var v541 = sequence$$15.length;
    var v446 = sequence$$15.substring(v540, v541);
    var v226 = v446 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  v229.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v230 = outputWindow.document;
  var v603 = '<tr><td class="title" width="200px">' + "Site:";
  var v542 = v603 + '</td><td class="title">';
  var v447 = v542 + "Positions:";
  var v231 = v447 + "</td></tr>\n";
  v230.write(v231);
  var i$$9 = 0;
  var v448 = arrayOfItems.length;
  var v247 = i$$9 < v448;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v449 = arrayOfItems[i$$9]
    }
    var v232 = v449.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v604 = arrayOfItems[i$$9]
    }
    var v543 = v604.match(/\)\D*\d+/);
    var v450 = v543.toString();
    var v233 = v450.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if(v451) {
        v451 = matchPosition < upperLimit
      }
      var v237 = v451;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v452 = matchPosition - shiftValue;
        var v236 = v452 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v544 = matchExp.lastIndex;
      var v605 = RegExp.lastMatch;
      var v545 = v605.length;
      var v453 = v544 - v545;
      v238.lastIndex = v453 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v454 = tempString$$1.search(/\d/);
    var v240 = v454 != -1;
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
    var v694 = '<tr><td class="' + backGroundClass;
    var v676 = v694 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v717 = arrayOfItems[i$$9]
    }
    var v708 = v717.match(/\([^\(]+\)/);
    var v695 = v708.toString();
    var v677 = v695.replace(/\(|\)/g, "");
    var v661 = v676 + v677;
    var v641 = v661 + '</td><td class="';
    var v606 = v641 + backGroundClass;
    var v546 = v606 + '">';
    var v455 = v546 + tempString$$1;
    var v246 = v455 + "</td></tr>\n";
    v245.write(v246);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v456 = arrayOfItems.length;
    v247 = i$$9 < v456
  }
  var v248 = outputWindow.document;
  v248.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v249 = outputWindow.document;
  v249.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v250 = outputWindow.document;
  var v662 = '<tr><td class="title">' + "Pattern:";
  var v642 = v662 + '</td><td class="title">';
  var v607 = v642 + "Times found:";
  var v547 = v607 + '</td><td class="title">';
  var v457 = v547 + "Percentage:";
  var v251 = v457 + "</td></tr>\n";
  v250.write(v251);
  var i$$10 = 0;
  var v458 = arrayOfItems$$1.length;
  var v260 = i$$10 < v458;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v459 = arrayOfItems$$1[i$$10]
    }
    var v252 = v459.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v460 = sequence$$16.search(matchExp$$1);
    var v254 = v460 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v548 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v643 = arrayOfItems$$1[i$$10]
    }
    var v608 = v643.match(/\d+/);
    var v549 = parseFloat(v608);
    var v461 = v548 - v549;
    var v257 = v461 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v462 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v609 = arrayOfItems$$1[i$$10]
      }
      var v550 = v609.match(/\d+/);
      var v463 = parseFloat(v550);
      var v256 = v462 - v463;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfItems$$1[i$$10]
    }
    var v709 = v718.match(/\([^\(]+\)\b/);
    var v696 = v709.toString();
    var v678 = v696.replace(/\(|\)/g, "");
    var v663 = "<tr><td>" + v678;
    var v644 = v663 + "</td><td>";
    var v610 = v644 + tempNumber;
    var v551 = v610 + "</td><td>";
    var v552 = percentage.toFixed(2);
    var v464 = v551 + v552;
    var v259 = v464 + "</td></tr>\n";
    v258.write(v259);
    i$$10 = i$$10 + 1;
    var v465 = arrayOfItems$$1.length;
    v260 = i$$10 < v465
  }
  var v261 = outputWindow.document;
  v261.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v466 = sequence$$17.length;
  var v268 = v466 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v467 = Math.random();
    var v262 = v467 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v468 = tempSeq.length;
    var v267 = v468 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      v265.write(v266);
      tempSeq = ""
    }
    var v469 = sequence$$17.length;
    v268 = v469 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  v269.write(v270);
  return true
}
function splitCodons(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v470 = testScript();
  var v271 = v470 == false;
  if(v271) {
    return false
  }
  var v679 = theDocument.forms;
  var v664 = v679[0];
  var v645 = v664.elements;
  var v611 = v645[0];
  var v553 = checkFormElement(v611);
  var v471 = v553 == false;
  var v555 = !v471;
  if(v555) {
    var v697 = theDocument.forms;
    var v680 = v697[0];
    var v665 = v680.elements;
    var v646 = v665[0];
    var v612 = v646.value;
    var v554 = checkTextLength(v612, maxInput$$3);
    v471 = v554 == false
  }
  var v272 = v471;
  if(v272) {
    return false
  }
  openWindow("Split Codons");
  openPre();
  var v647 = theDocument.forms;
  var v613 = v647[0];
  var v556 = v613.elements;
  var v472 = v556[0];
  var v273 = v472.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v473 = arrayOfFasta$$1.length;
  var v284 = i$$11 < v473;
  for(;v284;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    var sequence$$18 = getSequenceFromFasta(v274);
    sequence$$18 = removeFormatting(sequence$$18);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    var title$$9 = getTitleFromFasta(v275);
    var v557 = sequence$$18.length;
    var v474 = v557 % 3;
    var v277 = v474 != 0;
    if(v277) {
      var v475 = "Sequence '" + title$$9;
      var v276 = v475 + "' ends in a partial codon that will be removed.";
      alert(v276)
    }
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var position1 = getBasesBasedOnCodonPosition(sequence$$18, 1);
    var v278 = outputWindow.document;
    var v698 = ">" + title$$9;
    var v681 = v698 + ";codon_positon_1_bases;length=";
    var v682 = position1.length;
    var v666 = v681 + v682;
    var v648 = v666 + ";source_length=";
    var v614 = v648 + length$$11;
    var v558 = v614 + "\n";
    var v559 = addReturns(position1);
    var v476 = v558 + v559;
    var v279 = v476 + "\n\n";
    v278.write(v279);
    var position2 = getBasesBasedOnCodonPosition(sequence$$18, 2);
    var v280 = outputWindow.document;
    var v699 = ">" + title$$9;
    var v683 = v699 + ";codon_positon_2_bases;length=";
    var v684 = position2.length;
    var v667 = v683 + v684;
    var v649 = v667 + ";source_length=";
    var v615 = v649 + length$$11;
    var v560 = v615 + "\n";
    var v561 = addReturns(position2);
    var v477 = v560 + v561;
    var v281 = v477 + "\n\n";
    v280.write(v281);
    var position3 = getBasesBasedOnCodonPosition(sequence$$18, 3);
    var v282 = outputWindow.document;
    var v700 = ">" + title$$9;
    var v685 = v700 + ";codon_positon_3_bases;length=";
    var v686 = position3.length;
    var v668 = v685 + v686;
    var v650 = v668 + ";source_length=";
    var v616 = v650 + length$$11;
    var v562 = v616 + "\n";
    var v563 = addReturns(position3);
    var v478 = v562 + v563;
    var v283 = v478 + "\n\n";
    v282.write(v283);
    seqCount = seqCount + 1;
    i$$11 = i$$11 + 1;
    var v479 = arrayOfFasta$$1.length;
    v284 = i$$11 < v479
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function getBasesBasedOnCodonPosition(sequence$$19, position) {
  function v2(str$$9, p1$$2, p2, offset$$14, s$$4) {
    return p2
  }
  var re$$3;
  var v287 = position == 1;
  if(v287) {
    re$$3 = "((.)..)"
  }else {
    var v286 = position == 2;
    if(v286) {
      re$$3 = "(.(.).)"
    }else {
      var v285 = position == 3;
      if(v285) {
        re$$3 = "(..(.))"
      }
    }
  }
  var v288 = sequence$$19.length;
  var partial_codon_length = v288 % 3;
  var v564 = ".{" + partial_codon_length;
  var v480 = v564 + "}$";
  var v289 = new RegExp(v480);
  sequence$$19 = sequence$$19.replace(v289, "");
  var v290 = new RegExp(re$$3, "g");
  return sequence$$19.replace(v290, v2)
}
document.onload = v3;
var v291 = document.getElementById("submitbtn");
v291.onclick = v4;
var v292 = document.getElementById("clearbtn");
v292.onclick = v5;

JAM.stopProfile('load');

