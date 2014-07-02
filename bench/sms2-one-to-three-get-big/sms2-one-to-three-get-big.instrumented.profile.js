
JAM.startProfile('load');
function v6() {
  var v547 = document.forms;
  var v471 = v547[0];
  var v288 = v471.elements;
  var v7 = v288[0];
  v7.value = " ";
  return
}
function v5() {
  try {
    oneToThree(document)
  }catch(e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8)
  }
  return
}
function v4() {
  var v289 = document.main_form;
  var v9 = v289.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v290 = arrayOfSequences.length;
  var v11 = v290 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v291 = arrayOfTitles.length;
  var v13 = i$$1 < v291;
  for(;v13;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v548 = arrayOfTitles[i$$1]
    }
    var v472 = v548.search(/\S/);
    var v292 = v472 == -1;
    var v474 = !v292;
    if(v474) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v596 = arrayOfSequences[i$$1]
      }
      var v549 = v596.search(/\S/);
      var v473 = v549 == -1;
      var v551 = !v473;
      if(v551) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v597 = arrayOfSequences[i$$1]
        }
        var v550 = v597.length;
        v473 = v550 != lengthOfAlign
      }
      v292 = v473
    }
    var v12 = v292;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v293 = arrayOfTitles.length;
    v13 = i$$1 < v293
  }
  return true
}
function checkCodonTable(codonTable) {
  var v475 = codonTable.search(/AmAcid/);
  var v294 = v475 == -1;
  var v477 = !v294;
  if(v477) {
    var v552 = codonTable.search(/Codon/);
    var v476 = v552 == -1;
    var v554 = !v476;
    if(v554) {
      var v598 = codonTable.search(/Number/);
      var v553 = v598 == -1;
      var v600 = !v553;
      if(v600) {
        var v627 = codonTable.search(/\/1000/);
        var v599 = v627 == -1;
        var v629 = !v599;
        if(v629) {
          var v628 = codonTable.search(/Fraction\s*\.\./);
          v599 = v628 == -1
        }
        v553 = v599
      }
      v476 = v553
    }
    v294 = v476
  }
  var v14 = v294;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v478 = formElement.value;
  var v295 = v478.search(/\S/);
  var v15 = v295 == -1;
  if(v15) {
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
  var v296 = arrayOfPatterns.length;
  var v18 = z$$2 < v296;
  for(;v18;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v479 = arrayOfPatterns[z$$2]
    }
    var v297 = v479.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v297 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = arrayOfPatterns[z$$2]
    }
    var v298 = moreExpressionCheck(v480);
    var v17 = v298 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v299 = arrayOfPatterns.length;
    v18 = z$$2 < v299
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v300 = arrayOfPatterns.length;
  var v27 = j < v300;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v555 = arrayOfPatterns[j]
    }
    var v481 = v555.match(/\/.+\//);
    var v301 = v481 + "gi";
    var v712 = eval(v301);
    v21[v22] = v712;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v482 = arrayOfPatterns[j]
    }
    var v302 = v482.match(/=[a-zA-Z\*]/);
    var v713 = v302.toString();
    v23[v24] = v713;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v303 = geneticCodeMatchResult[j]
    }
    var v714 = v303.replace(/=/g, "");
    v25[v26] = v714;
    j = j + 1;
    var v304 = arrayOfPatterns.length;
    v27 = j < v304
  }
  var i$$2 = 0;
  var v483 = testSequence.length;
  var v305 = v483 - 3;
  var v34 = i$$2 <= v305;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v28);
    j = 0;
    var v306 = geneticCodeMatchExp.length;
    var v32 = j < v306;
    for(;v32;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v484 = geneticCodeMatchExp[j]
      }
      var v307 = codon.search(v484);
      var v31 = v307 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v308 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v308 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v309 = geneticCodeMatchExp.length;
      v32 = j < v309
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v485 = testSequence.length;
    var v310 = v485 - 3;
    v34 = i$$2 <= v310
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v311;
  for(;v36;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v486 = arrayOfPatterns$$1[z$$3]
    }
    var v312 = v486.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v35 = v312 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v313
  }
  var i$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v314;
  for(;v40;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfPatterns$$1[i$$3]
    }
    var v315 = "[" + v487;
    var v37 = v315 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v316;
    for(;v39;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v488 = arrayOfPatterns$$1[j$$1]
      }
      var v317 = v488.search(re);
      var v38 = v317 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v318 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v318
    }
    i$$3 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v319
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v320 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v320;
  for(;v43;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns$$2[z$$4]
    }
    var v321 = v489.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v41 = v321 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns$$2[z$$4]
    }
    var v322 = moreExpressionCheck(v490);
    var v42 = v322 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v323 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v323
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v556 = getSequenceFromFasta(text$$7);
  var v491 = v556.replace(/[^A-Za-z]/g, "");
  var v324 = v491.length;
  var v45 = v324 > maxInput;
  if(v45) {
    var v325 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v325 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v326 = text$$8.length;
  var v47 = v326 > maxInput$$1;
  if(v47) {
    var v327 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v327 + " characters.";
    alert(v46);
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
  var v48 = outputWindow.document;
  v48.write("</form>");
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  v49.write("</div>");
  var v50 = outputWindow.document;
  v50.write("</pre>\n");
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  v51.write("</textarea>");
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  v52.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  v53.close();
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
  var v328 = alignArray.length;
  var v54 = v328 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v329 = alignArray.length;
  var v56 = i$$4 < v329;
  for(;v56;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = alignArray[i$$4]
    }
    var v330 = v492.search(/[^\s]+\s/);
    var v55 = v330 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v331 = alignArray.length;
    v56 = i$$4 < v331
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
  var v332 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v59 = v332 != -1;
  if(v59) {
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      var v57 = matchArray[0];
      arrayOfFasta.push(v57);
      v58 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v333 = sequence$$2.length;
  var v60 = "&gt;results for " + v333;
  var stringToReturn = v60 + " residue sequence ";
  var v334 = fastaSequenceTitle.search(/[^\s]/);
  var v62 = v334 != -1;
  if(v62) {
    var v335 = stringToReturn + '"';
    var v61 = v335 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v336 = stringToReturn + ' starting "';
  var v337 = sequence$$2.substring(0, 10);
  var v63 = v336 + v337;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v338 = sequenceOne.length;
  var v64 = "Search results for " + v338;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v339 = fastaSequenceTitleOne.search(/[^\s]/);
  var v66 = v339 != -1;
  if(v66) {
    var v340 = stringToReturn$$1 + '"';
    var v65 = v340 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = sequenceOne.substring(0, 10);
  var v67 = v341 + v342;
  stringToReturn$$1 = v67 + '"\n';
  var v343 = stringToReturn$$1 + "and ";
  var v344 = sequenceTwo.length;
  var v68 = v343 + v344;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v345 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v70 = v345 != -1;
  if(v70) {
    var v346 = stringToReturn$$1 + '"';
    var v69 = v346 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = sequenceTwo.substring(0, 10);
  var v71 = v347 + v348;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v349 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v349;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v557 = arrayOfPatterns$$3[j$$2]
    }
    var v493 = v557.match(/\/.+\//);
    var v350 = v493 + "gi";
    var v715 = eval(v350);
    v74[v75] = v715;
    j$$2 = j$$2 + 1;
    var v351 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v351
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v352 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v352;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns$$4[j$$3]
    }
    var v353 = v494.match(/=[a-zA-Z\*]/);
    var v716 = v353.toString();
    v78[v79] = v716;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v354 = geneticCodeMatchResult$$1[j$$3]
    }
    var v717 = v354.replace(/=/g, "");
    v80[v81] = v717;
    j$$3 = j$$3 + 1;
    var v355 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v355
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v356 = sequence$$3.length;
  var v83 = "Results for " + v356;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v357 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v357 != -1;
  if(v85) {
    var v358 = stringToReturn$$2 + '"';
    var v84 = v358 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v359 = stringToReturn$$2 + ' starting "';
  var v360 = sequence$$3.substring(0, 10);
  var v86 = v359 + v360;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v495 = "Results for " + topology;
  var v361 = v495 + " ";
  var v362 = sequence$$4.length;
  var v88 = v361 + v362;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v363 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v363 != -1;
  if(v90) {
    var v364 = stringToReturn$$3 + '"';
    var v89 = v364 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v365 = stringToReturn$$3 + ' starting "';
  var v366 = sequence$$4.substring(0, 10);
  var v91 = v365 + v366;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v367 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v367;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v368 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v368 != -1;
  if(v95) {
    var v369 = stringToReturn$$4 + '"';
    var v94 = v369 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v370 = stringToReturn$$4 + ' starting "';
  var v371 = sequenceOne$$1.substring(0, 10);
  var v96 = v370 + v371;
  stringToReturn$$4 = v96 + '"\n';
  var v372 = stringToReturn$$4 + "and ";
  var v373 = sequenceTwo$$1.length;
  var v97 = v372 + v373;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v374 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v374 != -1;
  if(v99) {
    var v375 = stringToReturn$$4 + '"';
    var v98 = v375 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v376 = stringToReturn$$4 + ' starting "';
  var v377 = sequenceTwo$$1.substring(0, 10);
  var v100 = v376 + v377;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    var v378 = Math.random();
    var v379 = components.length;
    var v102 = v378 * v379;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v380 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v380 != -1;
  if(v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v381 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v381 != -1;
  if(v106) {
    var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v105.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v496 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v382 = v496 != -1;
  var v498 = !v382;
  if(v498) {
    var v558 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v497 = v558 != -1;
    var v560 = !v497;
    if(v560) {
      var v601 = expressionToCheck.search(/\[\]/);
      var v559 = v601 != -1;
      var v603 = !v559;
      if(v603) {
        var v630 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v602 = v630 != -1;
        var v632 = !v602;
        if(v632) {
          var v642 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v631 = v642 != -1;
          var v644 = !v631;
          if(v644) {
            var v654 = expressionToCheck.search(/\|\|/);
            var v643 = v654 != -1;
            var v656 = !v643;
            if(v656) {
              var v665 = expressionToCheck.search(/\/\|/);
              var v655 = v665 != -1;
              var v667 = !v655;
              if(v667) {
                var v674 = expressionToCheck.search(/\|\//);
                var v666 = v674 != -1;
                var v676 = !v666;
                if(v676) {
                  var v683 = expressionToCheck.search(/\[.\]/);
                  var v675 = v683 != -1;
                  var v685 = !v675;
                  if(v685) {
                    var v690 = expressionToCheck.search(/\</);
                    var v684 = v690 != -1;
                    var v692 = !v684;
                    if(v692) {
                      var v691 = expressionToCheck.search(/\>/);
                      v684 = v691 != -1
                    }
                    v675 = v684
                  }
                  v666 = v675
                }
                v655 = v666
              }
              v643 = v655
            }
            v631 = v643
          }
          v602 = v631
        }
        v559 = v602
      }
      v497 = v559
    }
    v382 = v497
  }
  var v107 = v382;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  v108.write('<form action="">\n');
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  v109.write("<pre>");
  var v110 = outputWindow.document;
  v110.write('<div class="pre">');
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  v111.write('<br /><textarea rows="6" cols="61">\n');
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
  var v112 = outputWindow.document;
  var v561 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v499 = v561 + "<head>\n";
  var v383 = v499 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if(isColor) {
    var v114 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v701 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v686 = v693 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v668 = v677 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v657 = v668 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v633 = v645 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v604 = v633 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v562 = v604 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v500 = v562 + "td.many {color: #000000}\n";
    var v384 = v500 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v384 + "</style>\n";
    v114.write(v115)
  }else {
    var v116 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v706 = v709 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v702 = v706 + "div.title {display: none}\n";
    var v698 = v702 + "div.info {font-weight: bold}\n";
    var v694 = v698 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v694 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v669 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v646 = v658 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v605 = v634 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v563 = v605 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v501 = v563 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v385 = v501 + "img {display: none}\n";
    var v117 = v385 + "</style>\n";
    v116.write(v117)
  }
  var v118 = outputWindow.document;
  var v564 = "</head>\n" + '<body class="main">\n';
  var v502 = v564 + '<div class="title">';
  var v386 = v502 + title$$7;
  var v119 = v386 + " results</div>\n";
  v118.write(v119);
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
  var v120 = outputWindow.document;
  var v565 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v565 + "<head>\n";
  var v387 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v120.write(v121);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v688 = v695 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v679 = v688 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v670 = v679 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v659 = v670 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v647 = v659 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v635 = v647 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v606 = v635 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v566 = v606 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v504 = v566 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v388 = v504 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v388 + "</style>\n";
    v122.write(v123)
  }else {
    var v124 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v710 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v710 + "div.title {display: none}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v700 = v704 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v696 = v700 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v689 = v696 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v671 = v680 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v660 = v671 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v648 = v660 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v636 = v648 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v607 = v636 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v567 = v607 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v505 = v567 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v389 = v505 + "img {display: none}\n";
    var v125 = v389 + "</style>\n";
    v124.write(v125)
  }
  var v126 = outputWindow.document;
  var v568 = "</head>\n" + '<body class="main">\n';
  var v506 = v568 + '<div class="title">';
  var v390 = v506 + title$$9;
  var v127 = v390 + " results</div>\n";
  v126.write(v127);
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
  var v391 = dnaSequence$$1.search(/./);
  var v128 = v391 != -1;
  if(v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for(;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v392 = testArray[0];
  var v132 = v392 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v393 = testString.search(re$$2);
  var v133 = v393 == -1;
  if(v133) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v394 = testNum.toFixed(3);
  var v136 = v394 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v395 = testNum.toPrecision(5);
  var v137 = v395 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v396 = theNumber$$1.search(/\d/);
  var v138 = v396 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v507 = emblFile.search(/ID/);
  var v397 = v507 == -1;
  var v509 = !v397;
  if(v509) {
    var v569 = emblFile.search(/AC/);
    var v508 = v569 == -1;
    var v571 = !v508;
    if(v571) {
      var v608 = emblFile.search(/DE/);
      var v570 = v608 == -1;
      var v610 = !v570;
      if(v610) {
        var v609 = emblFile.search(/SQ/);
        v570 = v609 == -1
      }
      v508 = v570
    }
    v397 = v508
  }
  var v139 = v397;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v398 = theNumber$$2.search(/\d/);
  var v140 = v398 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v399 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v399 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v400 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v400 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v401 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v401 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v510 = genBankFile.search(/LOCUS/);
  var v402 = v510 == -1;
  var v512 = !v402;
  if(v512) {
    var v572 = genBankFile.search(/DEFINITION/);
    var v511 = v572 == -1;
    var v574 = !v511;
    if(v574) {
      var v611 = genBankFile.search(/ACCESSION/);
      var v573 = v611 == -1;
      var v613 = !v573;
      if(v613) {
        var v612 = genBankFile.search(/ORIGIN/);
        v573 = v612 == -1
      }
      v511 = v573
    }
    v402 = v511
  }
  var v145 = v402;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v513 = genBankFile$$1.search(/LOCUS/);
  var v403 = v513 == -1;
  var v515 = !v403;
  if(v515) {
    var v575 = genBankFile$$1.search(/DEFINITION/);
    var v514 = v575 == -1;
    var v577 = !v514;
    if(v577) {
      var v614 = genBankFile$$1.search(/ACCESSION/);
      var v576 = v614 == -1;
      var v616 = !v576;
      if(v616) {
        var v615 = genBankFile$$1.search(/ORIGIN/);
        v576 = v615 == -1
      }
      v514 = v576
    }
    v403 = v514
  }
  var v146 = v403;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v404 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v404 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v516 = emblFile$$1.search(/ID/);
  var v405 = v516 == -1;
  var v518 = !v405;
  if(v518) {
    var v578 = emblFile$$1.search(/AC/);
    var v517 = v578 == -1;
    var v580 = !v517;
    if(v580) {
      var v617 = emblFile$$1.search(/DE/);
      var v579 = v617 == -1;
      var v619 = !v579;
      if(v619) {
        var v618 = emblFile$$1.search(/SQ/);
        v579 = v618 == -1
      }
      v517 = v579
    }
    v405 = v517
  }
  var v148 = v405;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v406 = emblFile$$1.search(/^FT/m);
  var v149 = v406 == -1;
  if(v149) {
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v407 = basePerLine / groupSize;
    var v153 = j$$6 <= v407;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v408 = k + i$$5;
        var v151 = text$$10.charAt(v408);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v409 = basePerLine / groupSize;
      v153 = j$$6 <= v409
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    v154.write(v155);
    lineOfText = "";
    v156 = i$$5 < stopBase
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
    var v410 = adjustment < 0;
    if(v410) {
      v410 = adjusted >= 0
    }
    var v157 = v410;
    if(v157) {
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
  var v188 = i$$6 < stopBase$$2;
  for(;v188;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v411 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v411;
    for(;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v412 = i$$6 + k$$1;
        var v158 = v412 >= stopBase$$2;
        if(v158) {
          break
        }
        var v413 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v413);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if(v162) {
        var v414 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v414, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161
      }
      var v163 = i$$6 >= stopBase$$2;
      if(v163) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v415 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v415
    }
    var v187 = numberPosition$$1 == "left";
    if(v187) {
      var v165 = outputWindow.document;
      var v581 = adjustNumbering(lineNum, numberingAdjustment);
      var v519 = rightNum(v581, "", 8, tabIn$$3);
      var v416 = v519 + lineOfText$$1;
      var v166 = v416 + "\n";
      v165.write(v166);
      var v170 = strands$$1 == "two";
      if(v170) {
        var v167 = outputWindow.document;
        var v582 = adjustNumbering(lineNum, numberingAdjustment);
        var v520 = rightNum(v582, "", 8, tabIn$$3);
        var v521 = complement(lineOfText$$1);
        var v417 = v520 + v521;
        var v168 = v417 + "\n";
        v167.write(v168);
        var v169 = outputWindow.document;
        v169.write("\n")
      }
    }else {
      var v186 = numberPosition$$1 == "right";
      if(v186) {
        var v171 = outputWindow.document;
        var v522 = adjustNumbering(i$$6, numberingAdjustment);
        var v418 = lineOfText$$1 + v522;
        var v172 = v418 + "\n";
        v171.write(v172);
        var v176 = strands$$1 == "two";
        if(v176) {
          var v173 = outputWindow.document;
          var v523 = complement(lineOfText$$1);
          var v524 = adjustNumbering(i$$6, numberingAdjustment);
          var v419 = v523 + v524;
          var v174 = v419 + "\n";
          v173.write(v174);
          var v175 = outputWindow.document;
          v175.write("\n")
        }
      }else {
        var v185 = numberPosition$$1 == "above";
        if(v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          v177.write(v178);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          v179.write(v180);
          var v184 = strands$$1 == "two";
          if(v184) {
            var v181 = outputWindow.document;
            var v420 = complement(lineOfText$$1);
            var v182 = v420 + "\n";
            v181.write(v182);
            var v183 = outputWindow.document;
            v183.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v188 = i$$6 < stopBase$$2
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
  var v207 = i$$7 < stopBase$$3;
  for(;v207;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v421 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v421;
    for(;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for(;v191;) {
        var v422 = i$$7 + k$$2;
        var v189 = v422 >= stopBase$$3;
        if(v189) {
          break
        }
        var v423 = k$$2 + i$$7;
        var v190 = text$$13.charAt(v423);
        lineOfText$$2 = lineOfText$$2 + v190;
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v193 = numberPosition$$2 == "above";
      if(v193) {
        var v192 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v192
      }
      var v194 = i$$7 >= stopBase$$3;
      if(v194) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v424 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v424
    }
    var v206 = numberPosition$$2 == "left";
    if(v206) {
      var v196 = outputWindow.document;
      var v525 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v425 = v525 + lineOfText$$2;
      var v197 = v425 + "\n";
      v196.write(v197)
    }else {
      var v205 = numberPosition$$2 == "right";
      if(v205) {
        var v198 = outputWindow.document;
        var v426 = lineOfText$$2 + i$$7;
        var v199 = v426 + "\n";
        v198.write(v199)
      }else {
        var v204 = numberPosition$$2 == "above";
        if(v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          v200.write(v201);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          v202.write(v203)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v207 = i$$7 < stopBase$$3
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
  var v526 = sequence$$13.length;
  var v427 = v526 <= firstIndexToMutate;
  var v528 = !v427;
  if(v528) {
    var v527 = lastIndexToMutate < 0;
    var v583 = !v527;
    if(v583) {
      v527 = lastIndexToMutate <= firstIndexToMutate
    }
    v427 = v527
  }
  var v208 = v427;
  if(v208) {
    numMut = 0
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for(;v216;) {
    maxNum = sequence$$13.length;
    var v428 = Math.random();
    var v209 = v428 * maxNum;
    randNum = Math.floor(v209);
    var v429 = randNum < firstIndexToMutate;
    var v529 = !v429;
    if(v529) {
      v429 = randNum > lastIndexToMutate
    }
    var v210 = v429;
    if(v210) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v216 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v430 = Math.random();
      var v431 = components$$1.length;
      var v211 = v430 * v431;
      componentsIndex = Math.round(v211);
      var v432 = components$$1.length;
      var v212 = componentsIndex == v432;
      if(v212) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v433 = components$$1[componentsIndex]
      }
      var v213 = v433 != currentChar;
      if(v213) {
        needNewChar = false
      }
    }
    var v434 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v435 = components$$1[componentsIndex]
    }
    var v214 = v434 + v435;
    var v436 = randNum + 1;
    var v437 = sequence$$13.length;
    var v215 = sequence$$13.substring(v436, v437);
    sequence$$13 = v214 + v215;
    i$$8 = i$$8 + 1;
    v216 = i$$8 < numMut
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  v217.write(v218);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for(;v223;) {
    var v438 = Math.random();
    var v439 = components$$2.length;
    var v219 = v438 * v439;
    tempNum$$1 = Math.floor(v219);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v440 = sequence$$14.length;
    var v222 = v440 == 60;
    if(v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      v220.write(v221);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v223 = j$$9 < lengthOut$$1
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  v224.write(v225);
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
  var v229 = dnaConformation == "circular";
  if(v229) {
    var v226 = sequence$$15.substring(0, lookAhead);
    shiftValue = v226.length;
    var v584 = sequence$$15.length;
    var v530 = v584 - lookAhead;
    var v531 = sequence$$15.length;
    var v441 = sequence$$15.substring(v530, v531);
    var v227 = v441 + sequence$$15;
    var v228 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v230 = outputWindow.document;
  v230.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v231 = outputWindow.document;
  var v585 = '<tr><td class="title" width="200px">' + "Site:";
  var v532 = v585 + '</td><td class="title">';
  var v442 = v532 + "Positions:";
  var v232 = v442 + "</td></tr>\n";
  v231.write(v232);
  var i$$9 = 0;
  var v443 = arrayOfItems.length;
  var v248 = i$$9 < v443;
  for(;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v444 = arrayOfItems[i$$9]
    }
    var v233 = v444.match(/\/.+\//);
    matchExp = v233 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v586 = arrayOfItems[i$$9]
    }
    var v533 = v586.match(/\)\D*\d+/);
    var v445 = v533.toString();
    var v234 = v445.replace(/\)\D*/, "");
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v446 = matchPosition >= lowerLimit;
      if(v446) {
        v446 = matchPosition < upperLimit
      }
      var v238 = v446;
      if(v238) {
        timesFound = timesFound + 1;
        var v236 = tempString$$1 + ", ";
        var v447 = matchPosition - shiftValue;
        var v237 = v447 + 1;
        tempString$$1 = v236 + v237
      }
      var v239 = matchExp;
      var v534 = matchExp.lastIndex;
      var v587 = RegExp.lastMatch;
      var v535 = v587.length;
      var v448 = v534 - v535;
      v239.lastIndex = v448 + 1;
      v240 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v449 = tempString$$1.search(/\d/);
    var v241 = v449 != -1;
    if(v241) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v245 = timesFound == 0;
    if(v245) {
      backGroundClass = "none"
    }else {
      var v244 = timesFound == 1;
      if(v244) {
        backGroundClass = "one"
      }else {
        var v243 = timesFound == 2;
        if(v243) {
          backGroundClass = "two"
        }else {
          var v242 = timesFound == 3;
          if(v242) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v246 = outputWindow.document;
    var v661 = '<tr><td class="' + backGroundClass;
    var v649 = v661 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = arrayOfItems[i$$9]
    }
    var v672 = v681.match(/\([^\(]+\)/);
    var v662 = v672.toString();
    var v650 = v662.replace(/\(|\)/g, "");
    var v637 = v649 + v650;
    var v620 = v637 + '</td><td class="';
    var v588 = v620 + backGroundClass;
    var v536 = v588 + '">';
    var v450 = v536 + tempString$$1;
    var v247 = v450 + "</td></tr>\n";
    v246.write(v247);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v451 = arrayOfItems.length;
    v248 = i$$9 < v451
  }
  var v249 = outputWindow.document;
  v249.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  v250.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v251 = outputWindow.document;
  var v638 = '<tr><td class="title">' + "Pattern:";
  var v621 = v638 + '</td><td class="title">';
  var v589 = v621 + "Times found:";
  var v537 = v589 + '</td><td class="title">';
  var v452 = v537 + "Percentage:";
  var v252 = v452 + "</td></tr>\n";
  v251.write(v252);
  var i$$10 = 0;
  var v453 = arrayOfItems$$1.length;
  var v261 = i$$10 < v453;
  for(;v261;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v454 = arrayOfItems$$1[i$$10]
    }
    var v253 = v454.match(/\/[^\/]+\//);
    var matchExp$$1 = v253 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v455 = sequence$$16.search(matchExp$$1);
    var v255 = v455 != -1;
    if(v255) {
      var v254 = sequence$$16.match(matchExp$$1);
      tempNumber = v254.length
    }
    var percentage = 0;
    var v538 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v622 = arrayOfItems$$1[i$$10]
    }
    var v590 = v622.match(/\d+/);
    var v539 = parseFloat(v590);
    var v456 = v538 - v539;
    var v258 = v456 > 0;
    if(v258) {
      var v256 = 100 * tempNumber;
      var v457 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v591 = arrayOfItems$$1[i$$10]
      }
      var v540 = v591.match(/\d+/);
      var v458 = parseFloat(v540);
      var v257 = v457 - v458;
      percentage = v256 / v257
    }
    var v259 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v682 = arrayOfItems$$1[i$$10]
    }
    var v673 = v682.match(/\([^\(]+\)\b/);
    var v663 = v673.toString();
    var v651 = v663.replace(/\(|\)/g, "");
    var v639 = "<tr><td>" + v651;
    var v623 = v639 + "</td><td>";
    var v592 = v623 + tempNumber;
    var v541 = v592 + "</td><td>";
    var v542 = percentage.toFixed(2);
    var v459 = v541 + v542;
    var v260 = v459 + "</td></tr>\n";
    v259.write(v260);
    i$$10 = i$$10 + 1;
    var v460 = arrayOfItems$$1.length;
    v261 = i$$10 < v460
  }
  var v262 = outputWindow.document;
  v262.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v461 = sequence$$17.length;
  var v269 = v461 > 0;
  for(;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v462 = Math.random();
    var v263 = v462 * maxNum$$1;
    randNum$$1 = Math.floor(v263);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v264, v265);
    sequence$$17 = tempString1 + tempString2;
    var v463 = tempSeq.length;
    var v268 = v463 == 60;
    if(v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      v266.write(v267);
      tempSeq = ""
    }
    var v464 = sequence$$17.length;
    v269 = v464 > 0
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  v270.write(v271);
  return true
}
function oneToThree(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v465 = testScript();
  var v272 = v465 == false;
  if(v272) {
    return false
  }
  var v652 = theDocument.forms;
  var v640 = v652[0];
  var v624 = v640.elements;
  var v593 = v624[0];
  var v543 = checkFormElement(v593);
  var v466 = v543 == false;
  var v545 = !v466;
  if(v545) {
    var v664 = theDocument.forms;
    var v653 = v664[0];
    var v641 = v653.elements;
    var v625 = v641[0];
    var v594 = v625.value;
    var v544 = checkTextLength(v594, maxInput$$3);
    v466 = v544 == false
  }
  var v273 = v466;
  if(v273) {
    return false
  }
  openWindow("One to Three");
  openPre();
  var v626 = theDocument.forms;
  var v595 = v626[0];
  var v546 = v595.elements;
  var v467 = v546[0];
  var v274 = v467.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v274);
  var i$$11 = 0;
  var v468 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v468;
  for(;v280;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v275);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v276 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v276);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v277 = outputWindow.document;
    var v278 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v277.write(v278);
    writeOneToThree(newProtein);
    var v279 = outputWindow.document;
    v279.write("\n\n");
    i$$11 = i$$11 + 1;
    var v469 = arrayOfFasta$$1.length;
    v280 = i$$11 < v469
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$10, p1$$3, p2, p3, offset$$15, s$$5) {
    var v470 = p2.toLowerCase();
    var v281 = p1$$3 + v470;
    var v282 = p3.toLowerCase();
    return v281 + v282
  }
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v283 = " " + p1$$2;
    return v283 + " "
  }
  proteinSequence$$1 = proteinSequence$$1.toLowerCase();
  proteinSequence$$1 = proteinSequence$$1.replace(/(.)/g, v2);
  proteinSequence$$1 = proteinSequence$$1.replace(/a/g, "ALA");
  proteinSequence$$1 = proteinSequence$$1.replace(/b/g, "ASX");
  proteinSequence$$1 = proteinSequence$$1.replace(/c/g, "CYS");
  proteinSequence$$1 = proteinSequence$$1.replace(/d/g, "ASP");
  proteinSequence$$1 = proteinSequence$$1.replace(/e/g, "GLU");
  proteinSequence$$1 = proteinSequence$$1.replace(/f/g, "PHE");
  proteinSequence$$1 = proteinSequence$$1.replace(/g/g, "GLY");
  proteinSequence$$1 = proteinSequence$$1.replace(/h/g, "HIS");
  proteinSequence$$1 = proteinSequence$$1.replace(/i/g, "ILE");
  proteinSequence$$1 = proteinSequence$$1.replace(/k/g, "LYS");
  proteinSequence$$1 = proteinSequence$$1.replace(/l/g, "LEU");
  proteinSequence$$1 = proteinSequence$$1.replace(/m/g, "MET");
  proteinSequence$$1 = proteinSequence$$1.replace(/n/g, "ASN");
  proteinSequence$$1 = proteinSequence$$1.replace(/p/g, "PRO");
  proteinSequence$$1 = proteinSequence$$1.replace(/q/g, "GLN");
  proteinSequence$$1 = proteinSequence$$1.replace(/r/g, "ARG");
  proteinSequence$$1 = proteinSequence$$1.replace(/s/g, "SER");
  proteinSequence$$1 = proteinSequence$$1.replace(/t/g, "THR");
  proteinSequence$$1 = proteinSequence$$1.replace(/v/g, "VAL");
  proteinSequence$$1 = proteinSequence$$1.replace(/w/g, "TRP");
  proteinSequence$$1 = proteinSequence$$1.replace(/x/g, "XAA");
  proteinSequence$$1 = proteinSequence$$1.replace(/y/g, "TYR");
  proteinSequence$$1 = proteinSequence$$1.replace(/z/g, "GLX");
  proteinSequence$$1 = proteinSequence$$1.replace(/\*/g, "***");
  proteinSequence$$1 = proteinSequence$$1.replace(/\s*(.)(.)(.)\s*/g, v3);
  var v284 = outputWindow.document;
  var v285 = addReturns(proteinSequence$$1);
  v284.write(v285);
  return true
}
document.onload = v4;
var v286 = document.getElementById("submitbtn");
v286.onclick = v5;
var v287 = document.getElementById("clearbtn");
v287.onclick = v6;

JAM.stopProfile('load');

