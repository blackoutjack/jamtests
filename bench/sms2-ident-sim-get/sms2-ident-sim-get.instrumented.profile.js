
JAM.startProfile('load');
function v4() {
  var v631 = document.forms;
  var v536 = v631[0];
  var v321 = v536.elements;
  var v5 = v321[0];
  v5.value = " ";
  var v632 = document.forms;
  var v537 = v632[0];
  var v322 = v537.elements;
  var v6 = v322[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    identSim(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v323 = document.main_form;
  var v8 = v323.main_submit;
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
  var v324 = arrayOfSequences.length;
  var v10 = v324 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v325 = arrayOfTitles.length;
  var v12 = i$$1 < v325;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v633 = arrayOfTitles[i$$1]
    }
    var v538 = v633.search(/\S/);
    var v326 = v538 == -1;
    var v540 = !v326;
    if(v540) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v696 = arrayOfSequences[i$$1]
      }
      var v634 = v696.search(/\S/);
      var v539 = v634 == -1;
      var v636 = !v539;
      if(v636) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v697 = arrayOfSequences[i$$1]
        }
        var v635 = v697.length;
        v539 = v635 != lengthOfAlign
      }
      v326 = v539
    }
    var v11 = v326;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v327 = arrayOfTitles.length;
    v12 = i$$1 < v327
  }
  return true
}
function checkCodonTable(codonTable) {
  var v541 = codonTable.search(/AmAcid/);
  var v328 = v541 == -1;
  var v543 = !v328;
  if(v543) {
    var v637 = codonTable.search(/Codon/);
    var v542 = v637 == -1;
    var v639 = !v542;
    if(v639) {
      var v698 = codonTable.search(/Number/);
      var v638 = v698 == -1;
      var v700 = !v638;
      if(v700) {
        var v737 = codonTable.search(/\/1000/);
        var v699 = v737 == -1;
        var v739 = !v699;
        if(v739) {
          var v738 = codonTable.search(/Fraction\s*\.\./);
          v699 = v738 == -1
        }
        v638 = v699
      }
      v542 = v638
    }
    v328 = v542
  }
  var v13 = v328;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v544 = formElement.value;
  var v329 = v544.search(/\S/);
  var v14 = v329 == -1;
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
  var v330 = arrayOfPatterns.length;
  var v17 = z$$2 < v330;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v545 = arrayOfPatterns[z$$2]
    }
    var v331 = v545.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v331 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v546 = arrayOfPatterns[z$$2]
    }
    var v332 = moreExpressionCheck(v546);
    var v16 = v332 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v333 = arrayOfPatterns.length;
    v17 = z$$2 < v333
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v334 = arrayOfPatterns.length;
  var v26 = j < v334;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v640 = arrayOfPatterns[j]
    }
    var v547 = v640.match(/\/.+\//);
    var v335 = v547 + "gi";
    var v826 = eval(v335);
    v20[v21] = v826;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v548 = arrayOfPatterns[j]
    }
    var v336 = v548.match(/=[a-zA-Z\*]/);
    var v827 = v336.toString();
    v22[v23] = v827;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v337 = geneticCodeMatchResult[j]
    }
    var v828 = v337.replace(/=/g, "");
    v24[v25] = v828;
    j = j + 1;
    var v338 = arrayOfPatterns.length;
    v26 = j < v338
  }
  var i$$2 = 0;
  var v549 = testSequence.length;
  var v339 = v549 - 3;
  var v33 = i$$2 <= v339;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v340 = geneticCodeMatchExp.length;
    var v31 = j < v340;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v550 = geneticCodeMatchExp[j]
      }
      var v341 = codon.search(v550);
      var v30 = v341 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v342 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v342 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v343 = geneticCodeMatchExp.length;
      v31 = j < v343
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v551 = testSequence.length;
    var v344 = v551 - 3;
    v33 = i$$2 <= v344
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v345 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v345;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v552 = arrayOfPatterns$$1[z$$3]
    }
    var v346 = v552.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v346 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v347 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v347
  }
  var i$$3 = 0;
  var v348 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v348;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfPatterns$$1[i$$3]
    }
    var v349 = "[" + v553;
    var v36 = v349 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v350 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v350;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v554 = arrayOfPatterns$$1[j$$1]
      }
      var v351 = v554.search(re);
      var v37 = v351 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v352 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v352
    }
    i$$3 = i$$3 + 1;
    var v353 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v353
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v354 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v354;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v555 = arrayOfPatterns$$2[z$$4]
    }
    var v355 = v555.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v355 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v556 = arrayOfPatterns$$2[z$$4]
    }
    var v356 = moreExpressionCheck(v556);
    var v41 = v356 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v357 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v357
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v641 = getSequenceFromFasta(text$$7);
  var v557 = v641.replace(/[^A-Za-z]/g, "");
  var v358 = v557.length;
  var v44 = v358 > maxInput;
  if(v44) {
    var v359 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v359 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v360 = text$$8.length;
  var v46 = v360 > maxInput$$1;
  if(v46) {
    var v361 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v361 + " characters.";
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
  var v362 = alignArray.length;
  var v53 = v362 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v363 = alignArray.length;
  var v55 = i$$4 < v363;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v558 = alignArray[i$$4]
    }
    var v364 = v558.search(/[^\s]+\s/);
    var v54 = v364 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v365 = alignArray.length;
    v55 = i$$4 < v365
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
  var v366 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v366 != -1;
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
  var v367 = sequence$$2.length;
  var v59 = "&gt;results for " + v367;
  var stringToReturn = v59 + " residue sequence ";
  var v368 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v368 != -1;
  if(v61) {
    var v369 = stringToReturn + '"';
    var v60 = v369 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v370 = stringToReturn + ' starting "';
  var v371 = sequence$$2.substring(0, 10);
  var v62 = v370 + v371;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v372 = sequenceOne.length;
  var v63 = "Search results for " + v372;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v373 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v373 != -1;
  if(v65) {
    var v374 = stringToReturn$$1 + '"';
    var v64 = v374 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v375 = stringToReturn$$1 + ' starting "';
  var v376 = sequenceOne.substring(0, 10);
  var v66 = v375 + v376;
  stringToReturn$$1 = v66 + '"\n';
  var v377 = stringToReturn$$1 + "and ";
  var v378 = sequenceTwo.length;
  var v67 = v377 + v378;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v379 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v379 != -1;
  if(v69) {
    var v380 = stringToReturn$$1 + '"';
    var v68 = v380 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v381 = stringToReturn$$1 + ' starting "';
  var v382 = sequenceTwo.substring(0, 10);
  var v70 = v381 + v382;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v383 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v383;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v642 = arrayOfPatterns$$3[j$$2]
    }
    var v559 = v642.match(/\/.+\//);
    var v384 = v559 + "gi";
    var v829 = eval(v384);
    v73[v74] = v829;
    j$$2 = j$$2 + 1;
    var v385 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v385
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v386 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v386;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = arrayOfPatterns$$4[j$$3]
    }
    var v387 = v560.match(/=[a-zA-Z\*]/);
    var v830 = v387.toString();
    v77[v78] = v830;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v388 = geneticCodeMatchResult$$1[j$$3]
    }
    var v831 = v388.replace(/=/g, "");
    v79[v80] = v831;
    j$$3 = j$$3 + 1;
    var v389 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v389
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v390 = sequence$$3.length;
  var v82 = "Results for " + v390;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v391 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v391 != -1;
  if(v84) {
    var v392 = stringToReturn$$2 + '"';
    var v83 = v392 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v393 = stringToReturn$$2 + ' starting "';
  var v394 = sequence$$3.substring(0, 10);
  var v85 = v393 + v394;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v561 = "Results for " + topology;
  var v395 = v561 + " ";
  var v396 = sequence$$4.length;
  var v87 = v395 + v396;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v397 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v397 != -1;
  if(v89) {
    var v398 = stringToReturn$$3 + '"';
    var v88 = v398 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v399 = stringToReturn$$3 + ' starting "';
  var v400 = sequence$$4.substring(0, 10);
  var v90 = v399 + v400;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v401 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v401;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v402 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v402 != -1;
  if(v94) {
    var v403 = stringToReturn$$4 + '"';
    var v93 = v403 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v404 = stringToReturn$$4 + ' starting "';
  var v405 = sequenceOne$$1.substring(0, 10);
  var v95 = v404 + v405;
  stringToReturn$$4 = v95 + '"\n';
  var v406 = stringToReturn$$4 + "and ";
  var v407 = sequenceTwo$$1.length;
  var v96 = v406 + v407;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v408 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v408 != -1;
  if(v98) {
    var v409 = stringToReturn$$4 + '"';
    var v97 = v409 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v410 = stringToReturn$$4 + ' starting "';
  var v411 = sequenceTwo$$1.substring(0, 10);
  var v99 = v410 + v411;
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
    var v412 = Math.random();
    var v413 = components.length;
    var v101 = v412 * v413;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v414 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v414 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v415 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v415 != -1;
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
  var v562 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v416 = v562 != -1;
  var v564 = !v416;
  if(v564) {
    var v643 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v563 = v643 != -1;
    var v645 = !v563;
    if(v645) {
      var v701 = expressionToCheck.search(/\[\]/);
      var v644 = v701 != -1;
      var v703 = !v644;
      if(v703) {
        var v740 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v702 = v740 != -1;
        var v742 = !v702;
        if(v742) {
          var v756 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v741 = v756 != -1;
          var v758 = !v741;
          if(v758) {
            var v768 = expressionToCheck.search(/\|\|/);
            var v757 = v768 != -1;
            var v770 = !v757;
            if(v770) {
              var v779 = expressionToCheck.search(/\/\|/);
              var v769 = v779 != -1;
              var v781 = !v769;
              if(v781) {
                var v788 = expressionToCheck.search(/\|\//);
                var v780 = v788 != -1;
                var v790 = !v780;
                if(v790) {
                  var v797 = expressionToCheck.search(/\[.\]/);
                  var v789 = v797 != -1;
                  var v799 = !v789;
                  if(v799) {
                    var v804 = expressionToCheck.search(/\</);
                    var v798 = v804 != -1;
                    var v806 = !v798;
                    if(v806) {
                      var v805 = expressionToCheck.search(/\>/);
                      v798 = v805 != -1
                    }
                    v789 = v798
                  }
                  v780 = v789
                }
                v769 = v780
              }
              v757 = v769
            }
            v741 = v757
          }
          v702 = v741
        }
        v644 = v702
      }
      v563 = v644
    }
    v416 = v563
  }
  var v106 = v416;
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
  var v646 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v565 = v646 + "<head>\n";
  var v417 = v565 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v417 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v111.write(v112);
  if(isColor) {
    var v113 = outputWindow.document;
    var v819 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v815 = v819 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v815 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v800 = v807 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v791 = v800 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v782 = v791 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v771 = v782 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v759 = v771 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v743 = v759 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v704 = v743 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v704 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v566 = v647 + "td.many {color: #000000}\n";
    var v418 = v566 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v418 + "</style>\n";
    v113.write(v114)
  }else {
    var v115 = outputWindow.document;
    var v823 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v820 = v823 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v816 = v820 + "div.title {display: none}\n";
    var v812 = v816 + "div.info {font-weight: bold}\n";
    var v808 = v812 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v801 = v808 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v792 = v801 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v783 = v792 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v772 = v783 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v760 = v772 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v744 = v760 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v744 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v648 = v705 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v567 = v648 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v419 = v567 + "img {display: none}\n";
    var v116 = v419 + "</style>\n";
    v115.write(v116)
  }
  var v117 = outputWindow.document;
  var v649 = "</head>\n" + '<body class="main">\n';
  var v568 = v649 + '<div class="title">';
  var v420 = v568 + title$$6;
  var v118 = v420 + " results</div>\n";
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
  var v650 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v569 = v650 + "<head>\n";
  var v421 = v569 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v421 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v119.write(v120);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v821 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v817 = v821 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v813 = v817 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v809 = v813 + "div.info {font-weight: bold}\n";
    var v802 = v809 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v793 = v802 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v784 = v793 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v773 = v784 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v761 = v773 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v745 = v761 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v706 = v745 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v651 = v706 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v570 = v651 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v422 = v570 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v422 + "</style>\n";
    v121.write(v122)
  }else {
    var v123 = outputWindow.document;
    var v825 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v824 = v825 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v822 = v824 + "div.title {display: none}\n";
    var v818 = v822 + "div.info {font-weight: bold}\n";
    var v814 = v818 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v810 = v814 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v803 = v810 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v794 = v803 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v785 = v794 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v774 = v785 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v762 = v774 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v746 = v762 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v707 = v746 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v652 = v707 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v571 = v652 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v423 = v571 + "img {display: none}\n";
    var v124 = v423 + "</style>\n";
    v123.write(v124)
  }
  var v125 = outputWindow.document;
  var v653 = "</head>\n" + '<body class="main">\n';
  var v572 = v653 + '<div class="title">';
  var v424 = v572 + title$$8;
  var v126 = v424 + " results</div>\n";
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
  var v425 = dnaSequence$$1.search(/./);
  var v127 = v425 != -1;
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
  var v426 = testArray[0];
  var v131 = v426 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v427 = testString.search(re$$2);
  var v132 = v427 == -1;
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
  var v428 = testNum.toFixed(3);
  var v135 = v428 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v429 = testNum.toPrecision(5);
  var v136 = v429 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v430 = theNumber$$1.search(/\d/);
  var v137 = v430 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v573 = emblFile.search(/ID/);
  var v431 = v573 == -1;
  var v575 = !v431;
  if(v575) {
    var v654 = emblFile.search(/AC/);
    var v574 = v654 == -1;
    var v656 = !v574;
    if(v656) {
      var v708 = emblFile.search(/DE/);
      var v655 = v708 == -1;
      var v710 = !v655;
      if(v710) {
        var v709 = emblFile.search(/SQ/);
        v655 = v709 == -1
      }
      v574 = v655
    }
    v431 = v574
  }
  var v138 = v431;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v432 = theNumber$$2.search(/\d/);
  var v139 = v432 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v433 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v433 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v434 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v434 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v435 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v435 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v576 = genBankFile.search(/LOCUS/);
  var v436 = v576 == -1;
  var v578 = !v436;
  if(v578) {
    var v657 = genBankFile.search(/DEFINITION/);
    var v577 = v657 == -1;
    var v659 = !v577;
    if(v659) {
      var v711 = genBankFile.search(/ACCESSION/);
      var v658 = v711 == -1;
      var v713 = !v658;
      if(v713) {
        var v712 = genBankFile.search(/ORIGIN/);
        v658 = v712 == -1
      }
      v577 = v658
    }
    v436 = v577
  }
  var v144 = v436;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v579 = genBankFile$$1.search(/LOCUS/);
  var v437 = v579 == -1;
  var v581 = !v437;
  if(v581) {
    var v660 = genBankFile$$1.search(/DEFINITION/);
    var v580 = v660 == -1;
    var v662 = !v580;
    if(v662) {
      var v714 = genBankFile$$1.search(/ACCESSION/);
      var v661 = v714 == -1;
      var v716 = !v661;
      if(v716) {
        var v715 = genBankFile$$1.search(/ORIGIN/);
        v661 = v715 == -1
      }
      v580 = v661
    }
    v437 = v580
  }
  var v145 = v437;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v438 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v438 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v582 = emblFile$$1.search(/ID/);
  var v439 = v582 == -1;
  var v584 = !v439;
  if(v584) {
    var v663 = emblFile$$1.search(/AC/);
    var v583 = v663 == -1;
    var v665 = !v583;
    if(v665) {
      var v717 = emblFile$$1.search(/DE/);
      var v664 = v717 == -1;
      var v719 = !v664;
      if(v719) {
        var v718 = emblFile$$1.search(/SQ/);
        v664 = v718 == -1
      }
      v583 = v664
    }
    v439 = v583
  }
  var v147 = v439;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v440 = emblFile$$1.search(/^FT/m);
  var v148 = v440 == -1;
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
    var v441 = basePerLine / groupSize;
    var v152 = j$$6 <= v441;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v442 = k + i$$5;
        var v150 = text$$10.charAt(v442);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v443 = basePerLine / groupSize;
      v152 = j$$6 <= v443
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
    var v444 = adjustment < 0;
    if(v444) {
      v444 = adjusted >= 0
    }
    var v156 = v444;
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
    var v445 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v445;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v446 = i$$6 + k$$1;
        var v157 = v446 >= stopBase$$2;
        if(v157) {
          break
        }
        var v447 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v447);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v448 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v448, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v449 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v449
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v666 = adjustNumbering(lineNum, numberingAdjustment);
      var v585 = rightNum(v666, "", 8, tabIn$$3);
      var v450 = v585 + lineOfText$$1;
      var v165 = v450 + "\n";
      v164.write(v165);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v667 = adjustNumbering(lineNum, numberingAdjustment);
        var v586 = rightNum(v667, "", 8, tabIn$$3);
        var v587 = complement(lineOfText$$1);
        var v451 = v586 + v587;
        var v167 = v451 + "\n";
        v166.write(v167);
        var v168 = outputWindow.document;
        v168.write("\n")
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v588 = adjustNumbering(i$$6, numberingAdjustment);
        var v452 = lineOfText$$1 + v588;
        var v171 = v452 + "\n";
        v170.write(v171);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v589 = complement(lineOfText$$1);
          var v590 = adjustNumbering(i$$6, numberingAdjustment);
          var v453 = v589 + v590;
          var v173 = v453 + "\n";
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
            var v454 = complement(lineOfText$$1);
            var v181 = v454 + "\n";
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
    var v455 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v455;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v456 = i$$7 + k$$2;
        var v188 = v456 >= stopBase$$3;
        if(v188) {
          break
        }
        var v457 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v457);
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
      var v458 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v458
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v591 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v459 = v591 + lineOfText$$2;
      var v196 = v459 + "\n";
      v195.write(v196)
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v460 = lineOfText$$2 + i$$7;
        var v198 = v460 + "\n";
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
  var v592 = sequence$$13.length;
  var v461 = v592 <= firstIndexToMutate;
  var v594 = !v461;
  if(v594) {
    var v593 = lastIndexToMutate < 0;
    var v668 = !v593;
    if(v668) {
      v593 = lastIndexToMutate <= firstIndexToMutate
    }
    v461 = v593
  }
  var v207 = v461;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v462 = Math.random();
    var v208 = v462 * maxNum;
    randNum = Math.floor(v208);
    var v463 = randNum < firstIndexToMutate;
    var v595 = !v463;
    if(v595) {
      v463 = randNum > lastIndexToMutate
    }
    var v209 = v463;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v464 = Math.random();
      var v465 = components$$1.length;
      var v210 = v464 * v465;
      componentsIndex = Math.round(v210);
      var v466 = components$$1.length;
      var v211 = componentsIndex == v466;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v467 = components$$1[componentsIndex]
      }
      var v212 = v467 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v468 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v469 = components$$1[componentsIndex]
    }
    var v213 = v468 + v469;
    var v470 = randNum + 1;
    var v471 = sequence$$13.length;
    var v214 = sequence$$13.substring(v470, v471);
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
    var v472 = Math.random();
    var v473 = components$$2.length;
    var v218 = v472 * v473;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v474 = sequence$$14.length;
    var v221 = v474 == 60;
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
    var v669 = sequence$$15.length;
    var v596 = v669 - lookAhead;
    var v597 = sequence$$15.length;
    var v475 = sequence$$15.substring(v596, v597);
    var v226 = v475 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  v229.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v230 = outputWindow.document;
  var v670 = '<tr><td class="title" width="200px">' + "Site:";
  var v598 = v670 + '</td><td class="title">';
  var v476 = v598 + "Positions:";
  var v231 = v476 + "</td></tr>\n";
  v230.write(v231);
  var i$$9 = 0;
  var v477 = arrayOfItems.length;
  var v247 = i$$9 < v477;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v478 = arrayOfItems[i$$9]
    }
    var v232 = v478.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v671 = arrayOfItems[i$$9]
    }
    var v599 = v671.match(/\)\D*\d+/);
    var v479 = v599.toString();
    var v233 = v479.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v480 = matchPosition >= lowerLimit;
      if(v480) {
        v480 = matchPosition < upperLimit
      }
      var v237 = v480;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v481 = matchPosition - shiftValue;
        var v236 = v481 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v600 = matchExp.lastIndex;
      var v672 = RegExp.lastMatch;
      var v601 = v672.length;
      var v482 = v600 - v601;
      v238.lastIndex = v482 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v483 = tempString$$1.search(/\d/);
    var v240 = v483 != -1;
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
    var v775 = '<tr><td class="' + backGroundClass;
    var v763 = v775 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v795 = arrayOfItems[i$$9]
    }
    var v786 = v795.match(/\([^\(]+\)/);
    var v776 = v786.toString();
    var v764 = v776.replace(/\(|\)/g, "");
    var v747 = v763 + v764;
    var v720 = v747 + '</td><td class="';
    var v673 = v720 + backGroundClass;
    var v602 = v673 + '">';
    var v484 = v602 + tempString$$1;
    var v246 = v484 + "</td></tr>\n";
    v245.write(v246);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v485 = arrayOfItems.length;
    v247 = i$$9 < v485
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
  var v748 = '<tr><td class="title">' + "Pattern:";
  var v721 = v748 + '</td><td class="title">';
  var v674 = v721 + "Times found:";
  var v603 = v674 + '</td><td class="title">';
  var v486 = v603 + "Percentage:";
  var v251 = v486 + "</td></tr>\n";
  v250.write(v251);
  var i$$10 = 0;
  var v487 = arrayOfItems$$1.length;
  var v260 = i$$10 < v487;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfItems$$1[i$$10]
    }
    var v252 = v488.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v489 = sequence$$16.search(matchExp$$1);
    var v254 = v489 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v604 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v722 = arrayOfItems$$1[i$$10]
    }
    var v675 = v722.match(/\d+/);
    var v605 = parseFloat(v675);
    var v490 = v604 - v605;
    var v257 = v490 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v491 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v676 = arrayOfItems$$1[i$$10]
      }
      var v606 = v676.match(/\d+/);
      var v492 = parseFloat(v606);
      var v256 = v491 - v492;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v796 = arrayOfItems$$1[i$$10]
    }
    var v787 = v796.match(/\([^\(]+\)\b/);
    var v777 = v787.toString();
    var v765 = v777.replace(/\(|\)/g, "");
    var v749 = "<tr><td>" + v765;
    var v723 = v749 + "</td><td>";
    var v677 = v723 + tempNumber;
    var v607 = v677 + "</td><td>";
    var v608 = percentage.toFixed(2);
    var v493 = v607 + v608;
    var v259 = v493 + "</td></tr>\n";
    v258.write(v259);
    i$$10 = i$$10 + 1;
    var v494 = arrayOfItems$$1.length;
    v260 = i$$10 < v494
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
  var v495 = sequence$$17.length;
  var v268 = v495 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v496 = Math.random();
    var v262 = v496 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v497 = tempSeq.length;
    var v267 = v497 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      v265.write(v266);
      tempSeq = ""
    }
    var v498 = sequence$$17.length;
    v268 = v498 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  v269.write(v270);
  return true
}
function identSim(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v499 = testScript();
  var v271 = v499 == false;
  if(v271) {
    return false
  }
  var v766 = theDocument.forms;
  var v750 = v766[0];
  var v724 = v750.elements;
  var v678 = v724[0];
  var v609 = checkFormElement(v678);
  var v500 = v609 == false;
  var v611 = !v500;
  if(v611) {
    var v778 = theDocument.forms;
    var v767 = v778[0];
    var v751 = v767.elements;
    var v725 = v751[0];
    var v679 = v725.value;
    var v610 = checkTextLength(v679, maxInput$$3);
    v500 = v610 == false
  }
  var v272 = v500;
  if(v272) {
    return false
  }
  var v726 = theDocument.forms;
  var v680 = v726[0];
  var v612 = v680.elements;
  var v501 = v612[0];
  var v273 = v501.value;
  theAlignment = "X" + v273;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v502 = earlyCheckAlign(alignArray$$1);
  var v274 = v502 == false;
  if(v274) {
    return false
  }
  var i$$11 = 1;
  var v503 = alignArray$$1.length;
  var v289 = i$$11 < v503;
  for(;v289;) {
    var v275 = titleArray;
    var v276 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = alignArray$$1[i$$11]
    }
    var v832 = v504.match(/[^\f\n\r]+[\f\n\r]/);
    v275[v276] = v832;
    var v277 = titleArray;
    var v278 = i$$11 - 1;
    var v727 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = titleArray[v727]
    }
    var v613 = v681.toString();
    var v505 = filterFastaTitle(v613);
    var v833 = v505.replace(/[\f\n\r]/g, "");
    v277[v278] = v833;
    var v279 = titleArray;
    var v280 = i$$11 - 1;
    var v614 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = titleArray[v614]
    }
    var v834 = v506.substring(0, 20);
    v279[v280] = v834;
    var v284 = i$$11 == 1;
    if(v284) {
      var v507 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v281 = titleArray[v507]
      }
      longestTitle = v281.length
    }else {
      var v682 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v615 = titleArray[v682]
      }
      var v508 = v615.length;
      var v283 = v508 > longestTitle;
      if(v283) {
        var v509 = i$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v282 = titleArray[v509]
        }
        longestTitle = v282.length
      }
    }
    var v285 = sequenceArray$$1;
    var v286 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = alignArray$$1[i$$11]
    }
    var v835 = v510.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v285[v286] = v835;
    var v287 = sequenceArray$$1;
    var v288 = i$$11 - 1;
    var v616 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = sequenceArray$$1[v616]
    }
    var v836 = filterAlignSeq(v511);
    v287[v288] = v836;
    i$$11 = i$$11 + 1;
    var v512 = alignArray$$1.length;
    v289 = i$$11 < v512
  }
  var v513 = checkAlign(titleArray, sequenceArray$$1);
  var v290 = v513 == false;
  if(v290) {
    return false
  }
  var v752 = theDocument.forms;
  var v728 = v752[0];
  var v683 = v728.elements;
  var v617 = v683[1];
  var v514 = v617.value;
  var v291 = v514.replace(/\s/g, "");
  groupString = v291.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v515 = checkGroupInput(arrayOfGroups);
  var v292 = v515 == false;
  if(v292) {
    return false
  }
  openWindowAlign("Ident and Sim");
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v516 = sequenceArray$$2.length;
  var v318 = k$$3 < v516;
  for(;v318;) {
    var m = k$$3 + 1;
    var v517 = sequenceArray$$2.length;
    var v317 = m < v517;
    for(;v317;) {
      var i$$12 = 0;
      var v618 = sequenceArray$$2[0];
      var v518 = v618.length;
      var v297 = i$$12 < v518;
      for(;v297;) {
        alignLength = alignLength + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v729 = sequenceArray$$2[k$$3]
        }
        var v684 = v729.charAt(i$$12);
        var v619 = v684.toUpperCase();
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v730 = sequenceArray$$2[m]
        }
        var v685 = v730.charAt(i$$12);
        var v620 = v685.toUpperCase();
        var v519 = v619 == v620;
        if(v519) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v731 = sequenceArray$$2[k$$3]
          }
          var v686 = v731.charAt(i$$12);
          var v621 = v686.toUpperCase();
          v519 = v621 != "X"
        }
        var v296 = v519;
        if(v296) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v687 = sequenceArray$$2[k$$3]
          }
          var v622 = v687.charAt(i$$12);
          var v520 = v622 != "-";
          if(v520) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v688 = sequenceArray$$2[k$$3]
            }
            var v623 = v688.charAt(i$$12);
            v520 = v623 != "."
          }
          var v293 = v520;
          if(v293) {
            identical = identical + 1
          }else {
            alignLength = alignLength - 1
          }
        }else {
          var j$$10 = 0;
          var v521 = arrayOfGroups$$1.length;
          var v295 = j$$10 < v521;
          for(;v295;) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v689 = arrayOfGroups$$1[j$$10]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v753 = sequenceArray$$2[k$$3]
            }
            var v732 = v753.charAt(i$$12);
            var v690 = v732.toUpperCase();
            var v624 = v689.search(v690);
            var v522 = v624 != -1;
            if(v522) {
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v691 = arrayOfGroups$$1[j$$10]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v754 = sequenceArray$$2[m]
              }
              var v733 = v754.charAt(i$$12);
              var v692 = v733.toUpperCase();
              var v625 = v691.search(v692);
              v522 = v625 != -1
            }
            var v294 = v522;
            if(v294) {
              similar = similar + 1;
              break
            }
            j$$10 = j$$10 + 1;
            var v523 = arrayOfGroups$$1.length;
            v295 = j$$10 < v523
          }
        }
        i$$12 = i$$12 + 1;
        var v626 = sequenceArray$$2[0];
        var v524 = v626.length;
        v297 = i$$12 < v524
      }
      var v298 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v734 = titleArray$$1[k$$3]
      }
      var v693 = "<b>Results for " + v734;
      var v627 = v693 + " vs ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v628 = titleArray$$1[m]
      }
      var v525 = v627 + v628;
      var v299 = v525 + ":</b>\n";
      v298.write(v299);
      var v300 = outputWindow.document;
      var v526 = "  Alignment length: " + alignLength;
      var v301 = v526 + "\n";
      v300.write(v301);
      var v302 = outputWindow.document;
      var v527 = "Identical residues: " + identical;
      var v303 = v527 + "\n";
      v302.write(v303);
      var v304 = outputWindow.document;
      var v528 = "  Similar residues: " + similar;
      var v305 = v528 + "\n";
      v304.write(v305);
      var v310 = identical == 0;
      if(v310) {
        var v306 = outputWindow.document;
        var v529 = "  Percent identity: " + 0;
        var v307 = v529 + "\n";
        v306.write(v307)
      }else {
        var v308 = outputWindow.document;
        var v735 = identical / alignLength;
        var v694 = v735 * 100;
        var v629 = v694.toFixed(2);
        var v530 = "  Percent identity: " + v629;
        var v309 = v530 + "\n";
        v308.write(v309)
      }
      var v531 = similar == 0;
      if(v531) {
        v531 = identical == 0
      }
      var v315 = v531;
      if(v315) {
        var v311 = outputWindow.document;
        var v532 = "Percent similarity: " + 0;
        var v312 = v532 + "\n";
        v311.write(v312)
      }else {
        var v313 = outputWindow.document;
        var v755 = identical + similar;
        var v736 = v755 / alignLength;
        var v695 = v736 * 100;
        var v630 = v695.toFixed(2);
        var v533 = "Percent similarity: " + v630;
        var v314 = v533 + "\n";
        v313.write(v314)
      }
      var v316 = outputWindow.document;
      v316.write("\n");
      identical = 0;
      similar = 0;
      alignLength = 0;
      m = m + 1;
      var v534 = sequenceArray$$2.length;
      v317 = m < v534
    }
    k$$3 = k$$3 + 1;
    var v535 = sequenceArray$$2.length;
    v318 = k$$3 < v535
  }
  return true
}
document.onload = v2;
var v319 = document.getElementById("submitbtn");
v319.onclick = v3;
var v320 = document.getElementById("clearbtn");
v320.onclick = v4;

JAM.stopProfile('load');
