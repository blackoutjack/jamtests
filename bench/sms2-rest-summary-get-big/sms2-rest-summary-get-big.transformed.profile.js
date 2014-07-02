
JAM.startProfile('load');
function v4() {
  var v557 = document.forms;
  var v477 = v557[0];
  var v289 = v477.elements;
  var v5 = v289[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    restSummary(document)
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
  function v0(str$$7, p1, offset$$12, s$$2) {
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v558 = arrayOfTitles[i$$1]
    }
    var v478 = v558.search(/\S/);
    var v293 = v478 == -1;
    var v480 = !v293;
    if(v480) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v611 = arrayOfSequences[i$$1]
      }
      var v559 = v611.search(/\S/);
      var v479 = v559 == -1;
      var v561 = !v479;
      if(v561) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v612 = arrayOfSequences[i$$1]
        }
        var v560 = v612.length;
        v479 = v560 != lengthOfAlign
      }
      v293 = v479
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
  var v481 = codonTable.search(/AmAcid/);
  var v295 = v481 == -1;
  var v483 = !v295;
  if(v483) {
    var v562 = codonTable.search(/Codon/);
    var v482 = v562 == -1;
    var v564 = !v482;
    if(v564) {
      var v613 = codonTable.search(/Number/);
      var v563 = v613 == -1;
      var v615 = !v563;
      if(v615) {
        var v647 = codonTable.search(/\/1000/);
        var v614 = v647 == -1;
        var v649 = !v614;
        if(v649) {
          var v648 = codonTable.search(/Fraction\s*\.\./);
          v614 = v648 == -1
        }
        v563 = v614
      }
      v482 = v563
    }
    v295 = v482
  }
  var v12 = v295;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v484 = formElement.value;
  var v296 = v484.search(/\S/);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = arrayOfPatterns[z$$2]
    }
    var v298 = v485.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v298 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v486 = arrayOfPatterns[z$$2]
    }
    var v299 = moreExpressionCheck(v486);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v565 = arrayOfPatterns[j]
    }
    var v487 = v565.match(/\/.+\//);
    var v302 = v487 + "gi";
    if(JAMScript.isEval(eval)) {
      var v848 = eval("introspect(JAMScript.introspectors.processAll) { " + v302 + " }")
    }else {
      var v848 = JAMScript.call(eval, null, [v302])
    }
    v19[v20] = v848;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns[j]
    }
    var v303 = v488.match(/=[a-zA-Z\*]/);
    var v849 = v303.toString();
    v21[v22] = v849;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v304 = geneticCodeMatchResult[j]
    }
    var v850 = v304.replace(/=/g, "");
    v23[v24] = v850;
    j = j + 1;
    var v305 = arrayOfPatterns.length;
    v25 = j < v305
  }
  var i$$2 = 0;
  var v489 = testSequence.length;
  var v306 = v489 - 3;
  var v32 = i$$2 <= v306;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v307 = geneticCodeMatchExp.length;
    var v30 = j < v307;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v490 = geneticCodeMatchExp[j]
      }
      var v308 = codon.search(v490);
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
    var v491 = testSequence.length;
    var v311 = v491 - 3;
    v32 = i$$2 <= v311
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v312;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns$$1[z$$3]
    }
    var v313 = v492.search(/[^acdefghiklmnpqrstvwyz]/i);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = arrayOfPatterns$$1[i$$3]
    }
    var v316 = "[" + v493;
    var v35 = v316 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v317;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v494 = arrayOfPatterns$$1[j$$1]
      }
      var v318 = v494.search(re);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v495 = arrayOfPatterns$$2[z$$4]
    }
    var v322 = v495.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v322 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = arrayOfPatterns$$2[z$$4]
    }
    var v323 = moreExpressionCheck(v496);
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
  var v566 = getSequenceFromFasta(text$$7);
  var v497 = v566.replace(/[^A-Za-z]/g, "");
  var v325 = v497.length;
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
  JAMScript.call(v46.write, v46, ["</form>"]);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAMScript.call(v47.write, v47, ["</div>"]);
  var v48 = outputWindow.document;
  JAMScript.call(v48.write, v48, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</body>\n</html>\n"]);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = alignArray[i$$4]
    }
    var v331 = v498.search(/[^\s]+\s/);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v567 = arrayOfPatterns$$3[j$$2]
    }
    var v499 = v567.match(/\/.+\//);
    var v351 = v499 + "gi";
    if(JAMScript.isEval(eval)) {
      var v851 = eval("introspect(JAMScript.introspectors.processAll) { " + v351 + " }")
    }else {
      var v851 = JAMScript.call(eval, null, [v351])
    }
    v72[v73] = v851;
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns$$4[j$$3]
    }
    var v354 = v500.match(/=[a-zA-Z\*]/);
    var v852 = v354.toString();
    v76[v77] = v852;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v355 = geneticCodeMatchResult$$1[j$$3]
    }
    var v853 = v355.replace(/=/g, "");
    v78[v79] = v853;
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
  var v501 = "Results for " + topology;
  var v362 = v501 + " ";
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
  var v502 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v383 = v502 != -1;
  var v504 = !v383;
  if(v504) {
    var v568 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v503 = v568 != -1;
    var v570 = !v503;
    if(v570) {
      var v616 = expressionToCheck.search(/\[\]/);
      var v569 = v616 != -1;
      var v618 = !v569;
      if(v618) {
        var v650 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v617 = v650 != -1;
        var v652 = !v617;
        if(v652) {
          var v667 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v651 = v667 != -1;
          var v669 = !v651;
          if(v669) {
            var v684 = expressionToCheck.search(/\|\|/);
            var v668 = v684 != -1;
            var v686 = !v668;
            if(v686) {
              var v698 = expressionToCheck.search(/\/\|/);
              var v685 = v698 != -1;
              var v700 = !v685;
              if(v700) {
                var v708 = expressionToCheck.search(/\|\//);
                var v699 = v708 != -1;
                var v710 = !v699;
                if(v710) {
                  var v718 = expressionToCheck.search(/\[.\]/);
                  var v709 = v718 != -1;
                  var v720 = !v709;
                  if(v720) {
                    var v726 = expressionToCheck.search(/\</);
                    var v719 = v726 != -1;
                    var v728 = !v719;
                    if(v728) {
                      var v727 = expressionToCheck.search(/\>/);
                      v719 = v727 != -1
                    }
                    v709 = v719
                  }
                  v699 = v709
                }
                v685 = v699
              }
              v668 = v685
            }
            v651 = v668
          }
          v617 = v651
        }
        v569 = v617
      }
      v503 = v569
    }
    v383 = v503
  }
  var v105 = v383;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAMScript.call(v106.write, v106, ['<form action="">\n']);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAMScript.call(v107.write, v107, ["<pre>"]);
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v854 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v854[2], v854[1], v854[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v571 + "<head>\n";
  var v384 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v744 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v739 = v744 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v739 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v729 = v734 + "div.info {font-weight: bold}\n";
    var v721 = v729 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v721 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v701 = v711 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v687 = v701 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v670 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v653 = v670 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v619 = v653 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v619 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v506 = v572 + "td.many {color: #000000}\n";
    var v385 = v506 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v385 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v749 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v745 = v749 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v740 = v745 + "div.title {display: none}\n";
    var v735 = v740 + "div.info {font-weight: bold}\n";
    var v730 = v735 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v730 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v722 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v702 = v712 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v702 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v671 = v688 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v654 = v671 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v620 = v654 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v620 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v507 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v386 = v507 + "img {display: none}\n";
    var v115 = v386 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v508 = v574 + '<div class="title">';
  var v387 = v508 + title$$6;
  var v117 = v387 + " results</div>\n";
  JAMScript.call(v116.write, v116, [v117]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v855 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v855[2], v855[1], v855[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v575 + "<head>\n";
  var v388 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v741 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v736 = v741 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v731 = v736 + "div.info {font-weight: bold}\n";
    var v723 = v731 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v713 = v723 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v703 = v713 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v689 = v703 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v672 = v689 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v655 = v672 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v621 = v655 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v621 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v510 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v389 = v510 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v389 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v750 = v752 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v747 = v750 + "div.title {display: none}\n";
    var v742 = v747 + "div.info {font-weight: bold}\n";
    var v737 = v742 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v732 = v737 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v724 = v732 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v714 = v724 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v704 = v714 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v690 = v704 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v673 = v690 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v656 = v673 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v622 = v656 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v622 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v511 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v390 = v511 + "img {display: none}\n";
    var v123 = v390 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v512 = v578 + '<div class="title">';
  var v391 = v512 + title$$8;
  var v125 = v391 + " results</div>\n";
  JAMScript.call(v124.write, v124, [v125]);
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
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
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
    if(JAMScript.isEval(eval)) {
      re$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAMScript.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
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
  var v513 = emblFile.search(/ID/);
  var v398 = v513 == -1;
  var v515 = !v398;
  if(v515) {
    var v579 = emblFile.search(/AC/);
    var v514 = v579 == -1;
    var v581 = !v514;
    if(v581) {
      var v623 = emblFile.search(/DE/);
      var v580 = v623 == -1;
      var v625 = !v580;
      if(v625) {
        var v624 = emblFile.search(/SQ/);
        v580 = v624 == -1
      }
      v514 = v580
    }
    v398 = v514
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
  var v516 = genBankFile.search(/LOCUS/);
  var v403 = v516 == -1;
  var v518 = !v403;
  if(v518) {
    var v582 = genBankFile.search(/DEFINITION/);
    var v517 = v582 == -1;
    var v584 = !v517;
    if(v584) {
      var v626 = genBankFile.search(/ACCESSION/);
      var v583 = v626 == -1;
      var v628 = !v583;
      if(v628) {
        var v627 = genBankFile.search(/ORIGIN/);
        v583 = v627 == -1
      }
      v517 = v583
    }
    v403 = v517
  }
  var v143 = v403;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v519 = genBankFile$$1.search(/LOCUS/);
  var v404 = v519 == -1;
  var v521 = !v404;
  if(v521) {
    var v585 = genBankFile$$1.search(/DEFINITION/);
    var v520 = v585 == -1;
    var v587 = !v520;
    if(v587) {
      var v629 = genBankFile$$1.search(/ACCESSION/);
      var v586 = v629 == -1;
      var v631 = !v586;
      if(v631) {
        var v630 = genBankFile$$1.search(/ORIGIN/);
        v586 = v630 == -1
      }
      v520 = v586
    }
    v404 = v520
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
  var v522 = emblFile$$1.search(/ID/);
  var v406 = v522 == -1;
  var v524 = !v406;
  if(v524) {
    var v588 = emblFile$$1.search(/AC/);
    var v523 = v588 == -1;
    var v590 = !v523;
    if(v590) {
      var v632 = emblFile$$1.search(/DE/);
      var v589 = v632 == -1;
      var v634 = !v589;
      if(v634) {
        var v633 = emblFile$$1.search(/SQ/);
        v589 = v633 == -1
      }
      v523 = v589
    }
    v406 = v523
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
  var v154 = i$$5 < stopBase;
  for(;v154;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v408 = basePerLine / groupSize;
    var v151 = j$$6 <= v408;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v409 = k + i$$5;
        var v149 = text$$10.charAt(v409);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v410 = basePerLine / groupSize;
      v151 = j$$6 <= v410
    }
    var v152 = outputWindow.document;
    var v153 = lineOfText + "\n";
    JAMScript.call(v152.write, v152, [v153]);
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
    var v411 = adjustment < 0;
    if(v411) {
      v411 = adjusted >= 0
    }
    var v155 = v411;
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
    var v412 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v412;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v413 = i$$6 + k$$1;
        var v156 = v413 >= stopBase$$2;
        if(v156) {
          break
        }
        var v414 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v414);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v415 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v415, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v416 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v416
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v591 = adjustNumbering(lineNum, numberingAdjustment);
      var v525 = rightNum(v591, "", 8, tabIn$$3);
      var v417 = v525 + lineOfText$$1;
      var v164 = v417 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v592 = adjustNumbering(lineNum, numberingAdjustment);
        var v526 = rightNum(v592, "", 8, tabIn$$3);
        var v527 = complement(lineOfText$$1);
        var v418 = v526 + v527;
        var v166 = v418 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v528 = adjustNumbering(i$$6, numberingAdjustment);
        var v419 = lineOfText$$1 + v528;
        var v170 = v419 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v529 = complement(lineOfText$$1);
          var v530 = adjustNumbering(i$$6, numberingAdjustment);
          var v420 = v529 + v530;
          var v172 = v420 + "\n";
          JAMScript.call(v171.write, v171, [v172]);
          var v173 = outputWindow.document;
          JAMScript.call(v173.write, v173, ["\n"])
        }
      }else {
        var v183 = numberPosition$$1 == "above";
        if(v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          JAMScript.call(v175.write, v175, [v176]);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          JAMScript.call(v177.write, v177, [v178]);
          var v182 = strands$$1 == "two";
          if(v182) {
            var v179 = outputWindow.document;
            var v421 = complement(lineOfText$$1);
            var v180 = v421 + "\n";
            JAMScript.call(v179.write, v179, [v180]);
            var v181 = outputWindow.document;
            JAMScript.call(v181.write, v181, ["\n"])
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
    var v422 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v422;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v423 = i$$7 + k$$2;
        var v187 = v423 >= stopBase$$3;
        if(v187) {
          break
        }
        var v424 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v424);
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
      var v425 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v425
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v531 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v426 = v531 + lineOfText$$2;
      var v195 = v426 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v427 = lineOfText$$2 + i$$7;
        var v197 = v427 + "\n";
        JAMScript.call(v196.write, v196, [v197])
      }else {
        var v202 = numberPosition$$2 == "above";
        if(v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          JAMScript.call(v198.write, v198, [v199]);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          JAMScript.call(v200.write, v200, [v201])
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
  var v532 = sequence$$13.length;
  var v428 = v532 <= firstIndexToMutate;
  var v534 = !v428;
  if(v534) {
    var v533 = lastIndexToMutate < 0;
    var v593 = !v533;
    if(v593) {
      v533 = lastIndexToMutate <= firstIndexToMutate
    }
    v428 = v533
  }
  var v206 = v428;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v429 = Math.random();
    var v207 = v429 * maxNum;
    randNum = Math.floor(v207);
    var v430 = randNum < firstIndexToMutate;
    var v535 = !v430;
    if(v535) {
      v430 = randNum > lastIndexToMutate
    }
    var v208 = v430;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v431 = Math.random();
      var v432 = components$$1.length;
      var v209 = v431 * v432;
      componentsIndex = Math.round(v209);
      var v433 = components$$1.length;
      var v210 = componentsIndex == v433;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v434 = components$$1[componentsIndex]
      }
      var v211 = v434 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v435 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v436 = components$$1[componentsIndex]
    }
    var v212 = v435 + v436;
    var v437 = randNum + 1;
    var v438 = sequence$$13.length;
    var v213 = sequence$$13.substring(v437, v438);
    sequence$$13 = v212 + v213;
    i$$8 = i$$8 + 1;
    v214 = i$$8 < numMut
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  JAMScript.call(v215.write, v215, [v216]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for(;v221;) {
    var v439 = Math.random();
    var v440 = components$$2.length;
    var v217 = v439 * v440;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v441 = sequence$$14.length;
    var v220 = v441 == 60;
    if(v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      JAMScript.call(v218.write, v218, [v219]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v221 = j$$9 < lengthOut$$1
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  JAMScript.call(v222.write, v222, [v223]);
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
    var v594 = sequence$$15.length;
    var v536 = v594 - lookAhead;
    var v537 = sequence$$15.length;
    var v442 = sequence$$15.substring(v536, v537);
    var v225 = v442 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v595 = '<tr><td class="title" width="200px">' + "Site:";
  var v538 = v595 + '</td><td class="title">';
  var v443 = v538 + "Positions:";
  var v230 = v443 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v444 = arrayOfItems.length;
  var v246 = i$$9 < v444;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v445 = arrayOfItems[i$$9]
    }
    var v231 = v445.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v596 = arrayOfItems[i$$9]
    }
    var v539 = v596.match(/\)\D*\d+/);
    var v446 = v539.toString();
    var v232 = v446.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v447 = matchPosition >= lowerLimit;
      if(v447) {
        v447 = matchPosition < upperLimit
      }
      var v236 = v447;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v448 = matchPosition - shiftValue;
        var v235 = v448 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v540 = matchExp.lastIndex;
      var v597 = RegExp.lastMatch;
      var v541 = v597.length;
      var v449 = v540 - v541;
      v237.lastIndex = v449 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v450 = tempString$$1.search(/\d/);
    var v239 = v450 != -1;
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
    var v691 = '<tr><td class="' + backGroundClass;
    var v674 = v691 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v715 = arrayOfItems[i$$9]
    }
    var v705 = v715.match(/\([^\(]+\)/);
    var v692 = v705.toString();
    var v675 = v692.replace(/\(|\)/g, "");
    var v657 = v674 + v675;
    var v635 = v657 + '</td><td class="';
    var v598 = v635 + backGroundClass;
    var v542 = v598 + '">';
    var v451 = v542 + tempString$$1;
    var v245 = v451 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v452 = arrayOfItems.length;
    v246 = i$$9 < v452
  }
  var v247 = outputWindow.document;
  JAMScript.call(v247.write, v247, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  JAMScript.call(v248.write, v248, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v249 = outputWindow.document;
  var v658 = '<tr><td class="title">' + "Pattern:";
  var v636 = v658 + '</td><td class="title">';
  var v599 = v636 + "Times found:";
  var v543 = v599 + '</td><td class="title">';
  var v453 = v543 + "Percentage:";
  var v250 = v453 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v454 = arrayOfItems$$1.length;
  var v259 = i$$10 < v454;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = arrayOfItems$$1[i$$10]
    }
    var v251 = v455.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v456 = sequence$$16.search(matchExp$$1);
    var v253 = v456 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v544 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = arrayOfItems$$1[i$$10]
    }
    var v600 = v637.match(/\d+/);
    var v545 = parseFloat(v600);
    var v457 = v544 - v545;
    var v256 = v457 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v458 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v601 = arrayOfItems$$1[i$$10]
      }
      var v546 = v601.match(/\d+/);
      var v459 = parseFloat(v546);
      var v255 = v458 - v459;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = arrayOfItems$$1[i$$10]
    }
    var v706 = v716.match(/\([^\(]+\)\b/);
    var v693 = v706.toString();
    var v676 = v693.replace(/\(|\)/g, "");
    var v659 = "<tr><td>" + v676;
    var v638 = v659 + "</td><td>";
    var v602 = v638 + tempNumber;
    var v547 = v602 + "</td><td>";
    var v548 = percentage.toFixed(2);
    var v460 = v547 + v548;
    var v258 = v460 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v461 = arrayOfItems$$1.length;
    v259 = i$$10 < v461
  }
  var v260 = outputWindow.document;
  JAMScript.call(v260.write, v260, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v462 = sequence$$17.length;
  var v267 = v462 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v463 = Math.random();
    var v261 = v463 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v464 = tempSeq.length;
    var v266 = v464 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v465 = sequence$$17.length;
    v267 = v465 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v466 = type$$25.toLowerCase();
  var v271 = v466 == "standard";
  if(v271) {
    var v847 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v846 = v847 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v845 = v846 + "/cgcg/ (AccII cg|cg)2,";
    var v844 = v845 + "/tccgga/ (AccIII t|ccgga)5,";
    var v843 = v844 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v842 = v843 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v841 = v842 + "/gtac/ (AfaI gt|ac)2,";
    var v840 = v841 + "/agcgct/ (AfeI agc|gct)3,";
    var v839 = v840 + "/cttaag/ (AflII c|ttaag)5,";
    var v838 = v839 + "/accggt/ (AgeI a|ccggt)5,";
    var v837 = v838 + "/actagt/ (AhlI a|ctagt)5,";
    var v836 = v837 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v835 = v836 + "/agct/ (AluI ag|ct)2,";
    var v834 = v835 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v833 = v834 + "/gggccc/ (ApaI gggcc|c)1,";
    var v832 = v833 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v831 = v832 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v830 = v831 + "/attaat/ (AseI at|taat)4,";
    var v829 = v830 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v828 = v829 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v827 = v828 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v826 = v827 + "/tgcgca/ (AviII tgc|gca)3,";
    var v825 = v826 + "/cctagg/ (AvrII c|ctagg)5,";
    var v824 = v825 + "/tggcca/ (BalI tgg|cca)3,";
    var v823 = v824 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v822 = v823 + "/atcgat/ (BanIII at|cgat)4,";
    var v821 = v822 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v820 = v821 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v819 = v820 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v818 = v819 + "/actagt/ (BcuI a|ctagt)5,";
    var v817 = v818 + "/tgatca/ (BclI t|gatca)5,";
    var v816 = v817 + "/ctag/ (BfaI c|tag)3,";
    var v815 = v816 + "/cttaag/ (BfrI c|ttaag)5,";
    var v814 = v815 + "/atgcat/ (BfrBI atg|cat)3,";
    var v813 = v814 + "/agatct/ (BglII a|gatct)5,";
    var v812 = v813 + "/cctagg/ (BlnI c|ctagg)5,";
    var v811 = v812 + "/atcgat/ (BseCI at|cgat)4,";
    var v810 = v811 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v809 = v810 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v808 = v809 + "/accggt/ (BshTI a|ccggt)5,";
    var v807 = v808 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v806 = v807 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v805 = v806 + "/atcgat/ (BspDI at|cgat)4,";
    var v804 = v805 + "/tccgga/ (BspEI t|ccgga)5,";
    var v803 = v804 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v802 = v803 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v801 = v802 + "/cgcg/ (BstUI cg|cg)2,";
    var v800 = v801 + "/atcgat/ (ClaI at|cgat)4,";
    var v799 = v800 + "/gatc/ (DpnII |gatc)4,";
    var v798 = v799 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v797 = v798 + "/cggccg/ (EagI c|ggccg)5,";
    var v796 = v797 + "/gaattc/ (EcoRI g|aattc)5,";
    var v795 = v796 + "/gatatc/ (EcoRV gat|atc)3,";
    var v794 = v795 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v793 = v794 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v792 = v793 + "/tgcgca/ (FspI tgc|gca)3,";
    var v791 = v792 + "/ggcc/ (HaeIII gg|cc)2,";
    var v790 = v791 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v789 = v790 + "/aagctt/ (HindIII a|agctt)5,";
    var v788 = v789 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v787 = v788 + "/gttaac/ (HpaI gtt|aac)3,";
    var v786 = v787 + "/ccgg/ (HpaII c|cgg)3,";
    var v785 = v786 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v784 = v785 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v783 = v784 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v782 = v783 + "/caattg/ (MfeI c|aattg)5,";
    var v781 = v782 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v780 = v781 + "/tggcca/ (MscI tgg|cca)3,";
    var v779 = v780 + "/ttaa/ (MseI t|taa)3,";
    var v778 = v779 + "/ccgg/ (MspI c|cgg)3,";
    var v777 = v778 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v776 = v777 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v775 = v776 + "/ccatgg/ (NcoI c|catgg)5,";
    var v774 = v775 + "/catatg/ (NdeI ca|tatg)4,";
    var v773 = v774 + "/gatc/ (NdeII |gatc)4,";
    var v772 = v773 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v771 = v772 + "/gctagc/ (NheI g|ctagc)5,";
    var v770 = v771 + "/catg/ (NlaIII catg|)0,";
    var v769 = v770 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v768 = v769 + "/tcgcga/ (NruI tcg|cga)3,";
    var v767 = v768 + "/atgcat/ (NsiI atgca|t)1,";
    var v766 = v767 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v765 = v766 + "/acatgt/ (PciI a|catgt)5,";
    var v764 = v765 + "/ggcc/ (PhoI gg|cc)2,";
    var v763 = v764 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v762 = v763 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v761 = v762 + "/ttataa/ (PsiI tta|taa)3,";
    var v760 = v761 + "/ctgcag/ (PstI ctgca|g)1,";
    var v759 = v760 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v758 = v759 + "/cagctg/ (PvuII cag|ctg)3,";
    var v757 = v758 + "/gtac/ (RsaI gt|ac)2,";
    var v756 = v757 + "/gagctc/ (SacI gagct|c)1,";
    var v755 = v756 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v754 = v755 + "/gtcgac/ (SalI g|tcgac)5,";
    var v753 = v754 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v751 = v753 + "/agtact/ (ScaI agt|act)3,";
    var v748 = v751 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v743 = v748 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v738 = v743 + "/tacgta/ (SnaBI tac|gta)3,";
    var v733 = v738 + "/actagt/ (SpeI a|ctagt)5,";
    var v725 = v733 + "/gcatgc/ (SphI gcatg|c)1,";
    var v717 = v725 + "/aatatt/ (SspI aat|att)3,";
    var v707 = v717 + "/gagctc/ (SstI gagct|c)1,";
    var v694 = v707 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v677 = v694 + "/aggcct/ (StuI agg|cct)3,";
    var v660 = v677 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v639 = v660 + "/tcga/ (TaqI t|cga)3,";
    var v603 = v639 + "/ctcgag/ (TliI c|tcgag)5,";
    var v549 = v603 + "/attaat/ (VspI at|taat)4,";
    var v467 = v549 + "/tctaga/ (XbaI t|ctaga)5,";
    var v270 = v467 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v270 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function restSummary(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var restrictionSites = getRestrictionSiteString("standard");
  var v678 = theDocument.forms;
  var v661 = v678[0];
  var v640 = v661.elements;
  var v604 = v640[0];
  var v550 = checkFormElement(v604);
  var v468 = v550 == false;
  var v552 = !v468;
  if(v552) {
    var v695 = theDocument.forms;
    var v679 = v695[0];
    var v662 = v679.elements;
    var v641 = v662[0];
    var v605 = v641.value;
    var v551 = checkSequenceLength(v605, maxInput$$3);
    v468 = v551 == false
  }
  var v272 = v468;
  if(v272) {
    return false
  }
  itemsToCheck = restrictionSites.split(/,/);
  var v469 = checkRestPatterns(itemsToCheck);
  var v273 = v469 == false;
  if(v273) {
    return false
  }
  openWindow("Restriction Summary");
  var v274 = outputWindow.document;
  var v470 = '<span class="one">' + "cuts once";
  var v275 = v470 + "</span><br />\n";
  JAMScript.call(v274.write, v274, [v275]);
  var v276 = outputWindow.document;
  var v471 = '<span class="two">' + "cuts twice";
  var v277 = v471 + "</span><br />\n";
  JAMScript.call(v276.write, v276, [v277]);
  var v278 = outputWindow.document;
  JAMScript.call(v278.write, v278, ["\n"]);
  var v642 = theDocument.forms;
  var v606 = v642[0];
  var v553 = v606.elements;
  var v472 = v553[0];
  var v279 = v472.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v279);
  var i$$11 = 0;
  var v473 = arrayOfFasta$$1.length;
  var v286 = i$$11 < v473;
  for(;v286;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v280);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v281);
    newDna = removeNonDna(newDna);
    var v282 = outputWindow.document;
    var v696 = theDocument.forms;
    var v680 = v696[0];
    var v663 = v680.elements;
    var v643 = v663[4];
    var v607 = v643.options;
    var v697 = theDocument.forms;
    var v681 = v697[0];
    var v664 = v681.elements;
    var v644 = v664[4];
    var v608 = v644.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v554 = v607[v608]
    }
    var v474 = v554.value;
    var v283 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v474);
    JAMScript.call(v282.write, v282, [v283]);
    var v682 = theDocument.forms;
    var v665 = v682[0];
    var v645 = v665.elements;
    var v609 = v645[4];
    var v555 = v609.options;
    var v683 = theDocument.forms;
    var v666 = v683[0];
    var v646 = v666.elements;
    var v610 = v646[4];
    var v556 = v610.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v475 = v555[v556]
    }
    var v284 = v475.value;
    writeRestrictionSites(newDna, itemsToCheck, v284);
    var v285 = outputWindow.document;
    JAMScript.call(v285.write, v285, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v476 = arrayOfFasta$$1.length;
    v286 = i$$11 < v476
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
JAMScript.set(document, "onload", v2);
var v287 = document.getElementById("submitbtn");
JAMScript.set(v287, "onclick", v3);
var v288 = document.getElementById("clearbtn");
JAMScript.set(v288, "onclick", v4);

JAM.stopProfile('load');
