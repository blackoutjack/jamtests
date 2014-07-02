
JAM.startProfile('load');
function v4() {
  var v602 = document.forms;
  var v513 = v602[0];
  var v317 = v513.elements;
  var v5 = v317[0];
  v5.value = " ";
  var v603 = document.forms;
  var v514 = v603[0];
  var v318 = v514.elements;
  var v6 = v318[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaMw(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v319 = document.main_form;
  var v8 = v319.main_submit;
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
  var v320 = arrayOfSequences.length;
  var v10 = v320 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v321 = arrayOfTitles.length;
  var v12 = i$$1 < v321;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v604 = arrayOfTitles[i$$1]
    }
    var v515 = v604.search(/\S/);
    var v322 = v515 == -1;
    var v517 = !v322;
    if(v517) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v658 = arrayOfSequences[i$$1]
      }
      var v605 = v658.search(/\S/);
      var v516 = v605 == -1;
      var v607 = !v516;
      if(v607) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v659 = arrayOfSequences[i$$1]
        }
        var v606 = v659.length;
        v516 = v606 != lengthOfAlign
      }
      v322 = v516
    }
    var v11 = v322;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v323 = arrayOfTitles.length;
    v12 = i$$1 < v323
  }
  return true
}
function checkCodonTable(codonTable) {
  var v518 = codonTable.search(/AmAcid/);
  var v324 = v518 == -1;
  var v520 = !v324;
  if(v520) {
    var v608 = codonTable.search(/Codon/);
    var v519 = v608 == -1;
    var v610 = !v519;
    if(v610) {
      var v660 = codonTable.search(/Number/);
      var v609 = v660 == -1;
      var v662 = !v609;
      if(v662) {
        var v693 = codonTable.search(/\/1000/);
        var v661 = v693 == -1;
        var v695 = !v661;
        if(v695) {
          var v694 = codonTable.search(/Fraction\s*\.\./);
          v661 = v694 == -1
        }
        v609 = v661
      }
      v519 = v609
    }
    v324 = v519
  }
  var v13 = v324;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v521 = formElement.value;
  var v325 = v521.search(/\S/);
  var v14 = v325 == -1;
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
  var v326 = arrayOfPatterns.length;
  var v17 = z$$2 < v326;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v522 = arrayOfPatterns[z$$2]
    }
    var v327 = v522.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v327 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v523 = arrayOfPatterns[z$$2]
    }
    var v328 = moreExpressionCheck(v523);
    var v16 = v328 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v329 = arrayOfPatterns.length;
    v17 = z$$2 < v329
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v330 = arrayOfPatterns.length;
  var v26 = j < v330;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = arrayOfPatterns[j]
    }
    var v524 = v611.match(/\/.+\//);
    var v331 = v524 + "gi";
    if(JAMScript.isEval(eval)) {
      var v786 = eval("introspect(JAMScript.introspectors.processAll) { " + v331 + " }")
    }else {
      var v786 = JAMScript.call(eval, null, [v331])
    }
    v20[v21] = v786;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v525 = arrayOfPatterns[j]
    }
    var v332 = v525.match(/=[a-zA-Z\*]/);
    var v787 = v332.toString();
    v22[v23] = v787;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v333 = geneticCodeMatchResult[j]
    }
    var v788 = v333.replace(/=/g, "");
    v24[v25] = v788;
    j = j + 1;
    var v334 = arrayOfPatterns.length;
    v26 = j < v334
  }
  var i$$2 = 0;
  var v526 = testSequence.length;
  var v335 = v526 - 3;
  var v33 = i$$2 <= v335;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v336 = geneticCodeMatchExp.length;
    var v31 = j < v336;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v527 = geneticCodeMatchExp[j]
      }
      var v337 = codon.search(v527);
      var v30 = v337 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v338 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v338 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v339 = geneticCodeMatchExp.length;
      v31 = j < v339
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v528 = testSequence.length;
    var v340 = v528 - 3;
    v33 = i$$2 <= v340
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v341 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v341;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v529 = arrayOfPatterns$$1[z$$3]
    }
    var v342 = v529.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v342 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v343 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v343
  }
  var i$$3 = 0;
  var v344 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v344;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = arrayOfPatterns$$1[i$$3]
    }
    var v345 = "[" + v530;
    var v36 = v345 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v346 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v346;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v531 = arrayOfPatterns$$1[j$$1]
      }
      var v347 = v531.search(re);
      var v37 = v347 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v348 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v348
    }
    i$$3 = i$$3 + 1;
    var v349 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v349
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v350 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v350;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v532 = arrayOfPatterns$$2[z$$4]
    }
    var v351 = v532.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v351 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v533 = arrayOfPatterns$$2[z$$4]
    }
    var v352 = moreExpressionCheck(v533);
    var v41 = v352 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v353 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v353
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v612 = getSequenceFromFasta(text$$7);
  var v534 = v612.replace(/[^A-Za-z]/g, "");
  var v354 = v534.length;
  var v44 = v354 > maxInput;
  if(v44) {
    var v355 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v355 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v356 = text$$8.length;
  var v46 = v356 > maxInput$$1;
  if(v46) {
    var v357 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v357 + " characters.";
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
  var v358 = alignArray.length;
  var v53 = v358 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v359 = alignArray.length;
  var v55 = i$$4 < v359;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v535 = alignArray[i$$4]
    }
    var v360 = v535.search(/[^\s]+\s/);
    var v54 = v360 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v361 = alignArray.length;
    v55 = i$$4 < v361
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
  var v362 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v362 != -1;
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
  var v363 = sequence$$2.length;
  var v59 = "&gt;results for " + v363;
  var stringToReturn = v59 + " residue sequence ";
  var v364 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v364 != -1;
  if(v61) {
    var v365 = stringToReturn + '"';
    var v60 = v365 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v366 = stringToReturn + ' starting "';
  var v367 = sequence$$2.substring(0, 10);
  var v62 = v366 + v367;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v368 = sequenceOne.length;
  var v63 = "Search results for " + v368;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v369 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v369 != -1;
  if(v65) {
    var v370 = stringToReturn$$1 + '"';
    var v64 = v370 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v371 = stringToReturn$$1 + ' starting "';
  var v372 = sequenceOne.substring(0, 10);
  var v66 = v371 + v372;
  stringToReturn$$1 = v66 + '"\n';
  var v373 = stringToReturn$$1 + "and ";
  var v374 = sequenceTwo.length;
  var v67 = v373 + v374;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v375 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v375 != -1;
  if(v69) {
    var v376 = stringToReturn$$1 + '"';
    var v68 = v376 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v377 = stringToReturn$$1 + ' starting "';
  var v378 = sequenceTwo.substring(0, 10);
  var v70 = v377 + v378;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v379 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v379;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v613 = arrayOfPatterns$$3[j$$2]
    }
    var v536 = v613.match(/\/.+\//);
    var v380 = v536 + "gi";
    if(JAMScript.isEval(eval)) {
      var v789 = eval("introspect(JAMScript.introspectors.processAll) { " + v380 + " }")
    }else {
      var v789 = JAMScript.call(eval, null, [v380])
    }
    v73[v74] = v789;
    j$$2 = j$$2 + 1;
    var v381 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v381
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v382 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v382;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v537 = arrayOfPatterns$$4[j$$3]
    }
    var v383 = v537.match(/=[a-zA-Z\*]/);
    var v790 = v383.toString();
    v77[v78] = v790;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v384 = geneticCodeMatchResult$$1[j$$3]
    }
    var v791 = v384.replace(/=/g, "");
    v79[v80] = v791;
    j$$3 = j$$3 + 1;
    var v385 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v385
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v386 = sequence$$3.length;
  var v82 = "Results for " + v386;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v387 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v387 != -1;
  if(v84) {
    var v388 = stringToReturn$$2 + '"';
    var v83 = v388 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v389 = stringToReturn$$2 + ' starting "';
  var v390 = sequence$$3.substring(0, 10);
  var v85 = v389 + v390;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v538 = "Results for " + topology;
  var v391 = v538 + " ";
  var v392 = sequence$$4.length;
  var v87 = v391 + v392;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v393 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v393 != -1;
  if(v89) {
    var v394 = stringToReturn$$3 + '"';
    var v88 = v394 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v395 = stringToReturn$$3 + ' starting "';
  var v396 = sequence$$4.substring(0, 10);
  var v90 = v395 + v396;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v397 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v397;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v398 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v398 != -1;
  if(v94) {
    var v399 = stringToReturn$$4 + '"';
    var v93 = v399 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v400 = stringToReturn$$4 + ' starting "';
  var v401 = sequenceOne$$1.substring(0, 10);
  var v95 = v400 + v401;
  stringToReturn$$4 = v95 + '"\n';
  var v402 = stringToReturn$$4 + "and ";
  var v403 = sequenceTwo$$1.length;
  var v96 = v402 + v403;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v404 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v404 != -1;
  if(v98) {
    var v405 = stringToReturn$$4 + '"';
    var v97 = v405 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v406 = stringToReturn$$4 + ' starting "';
  var v407 = sequenceTwo$$1.substring(0, 10);
  var v99 = v406 + v407;
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
    var v408 = Math.random();
    var v409 = components.length;
    var v101 = v408 * v409;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v410 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v410 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v411 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v411 != -1;
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
  var v539 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v412 = v539 != -1;
  var v541 = !v412;
  if(v541) {
    var v614 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v540 = v614 != -1;
    var v616 = !v540;
    if(v616) {
      var v663 = expressionToCheck.search(/\[\]/);
      var v615 = v663 != -1;
      var v665 = !v615;
      if(v665) {
        var v696 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v664 = v696 != -1;
        var v698 = !v664;
        if(v698) {
          var v712 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v697 = v712 != -1;
          var v714 = !v697;
          if(v714) {
            var v728 = expressionToCheck.search(/\|\|/);
            var v713 = v728 != -1;
            var v730 = !v713;
            if(v730) {
              var v739 = expressionToCheck.search(/\/\|/);
              var v729 = v739 != -1;
              var v741 = !v729;
              if(v741) {
                var v748 = expressionToCheck.search(/\|\//);
                var v740 = v748 != -1;
                var v750 = !v740;
                if(v750) {
                  var v757 = expressionToCheck.search(/\[.\]/);
                  var v749 = v757 != -1;
                  var v759 = !v749;
                  if(v759) {
                    var v764 = expressionToCheck.search(/\</);
                    var v758 = v764 != -1;
                    var v766 = !v758;
                    if(v766) {
                      var v765 = expressionToCheck.search(/\>/);
                      v758 = v765 != -1
                    }
                    v749 = v758
                  }
                  v740 = v749
                }
                v729 = v740
              }
              v713 = v729
            }
            v697 = v713
          }
          v664 = v697
        }
        v615 = v664
      }
      v540 = v615
    }
    v412 = v540
  }
  var v106 = v412;
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
    var v795 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v795[2], v795[1], v795[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v617 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v542 = v617 + "<head>\n";
  var v413 = v542 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v413 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v779 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v775 = v779 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v771 = v775 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v767 = v771 + "div.info {font-weight: bold}\n";
    var v760 = v767 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v751 = v760 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v742 = v751 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v731 = v742 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v715 = v731 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v699 = v715 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v666 = v699 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v666 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v543 = v618 + "td.many {color: #000000}\n";
    var v414 = v543 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v414 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v783 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v780 = v783 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v776 = v780 + "div.title {display: none}\n";
    var v772 = v776 + "div.info {font-weight: bold}\n";
    var v768 = v772 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v761 = v768 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v752 = v761 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v743 = v752 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v732 = v743 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v716 = v732 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v716 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v667 = v700 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v619 = v667 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v544 = v619 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v415 = v544 + "img {display: none}\n";
    var v116 = v415 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v620 = "</head>\n" + '<body class="main">\n';
  var v545 = v620 + '<div class="title">';
  var v416 = v545 + title$$7;
  var v118 = v416 + " results</div>\n";
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
    var v796 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v796[2], v796[1], v796[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v621 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v546 = v621 + "<head>\n";
  var v417 = v546 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v417 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v781 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v777 = v781 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v773 = v777 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v769 = v773 + "div.info {font-weight: bold}\n";
    var v762 = v769 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v753 = v762 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v744 = v753 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v733 = v744 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v717 = v733 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v701 = v717 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v668 = v701 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v622 = v668 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v547 = v622 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v418 = v547 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v418 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v785 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v784 = v785 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v782 = v784 + "div.title {display: none}\n";
    var v778 = v782 + "div.info {font-weight: bold}\n";
    var v774 = v778 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v770 = v774 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v763 = v770 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v754 = v763 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v745 = v754 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v734 = v745 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v718 = v734 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v702 = v718 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v669 = v702 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v623 = v669 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v548 = v623 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v419 = v548 + "img {display: none}\n";
    var v124 = v419 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v624 = "</head>\n" + '<body class="main">\n';
  var v549 = v624 + '<div class="title">';
  var v420 = v549 + title$$9;
  var v126 = v420 + " results</div>\n";
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
  var v421 = dnaSequence$$1.search(/./);
  var v127 = v421 != -1;
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
  var v422 = testArray[0];
  var v131 = v422 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v423 = testString.search(re$$2);
  var v132 = v423 == -1;
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
  var v424 = testNum.toFixed(3);
  var v135 = v424 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v425 = testNum.toPrecision(5);
  var v136 = v425 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v426 = theNumber$$1.search(/\d/);
  var v137 = v426 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v550 = emblFile.search(/ID/);
  var v427 = v550 == -1;
  var v552 = !v427;
  if(v552) {
    var v625 = emblFile.search(/AC/);
    var v551 = v625 == -1;
    var v627 = !v551;
    if(v627) {
      var v670 = emblFile.search(/DE/);
      var v626 = v670 == -1;
      var v672 = !v626;
      if(v672) {
        var v671 = emblFile.search(/SQ/);
        v626 = v671 == -1
      }
      v551 = v626
    }
    v427 = v551
  }
  var v138 = v427;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v428 = theNumber$$2.search(/\d/);
  var v139 = v428 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v429 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v429 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v430 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v430 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v431 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v431 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v553 = genBankFile.search(/LOCUS/);
  var v432 = v553 == -1;
  var v555 = !v432;
  if(v555) {
    var v628 = genBankFile.search(/DEFINITION/);
    var v554 = v628 == -1;
    var v630 = !v554;
    if(v630) {
      var v673 = genBankFile.search(/ACCESSION/);
      var v629 = v673 == -1;
      var v675 = !v629;
      if(v675) {
        var v674 = genBankFile.search(/ORIGIN/);
        v629 = v674 == -1
      }
      v554 = v629
    }
    v432 = v554
  }
  var v144 = v432;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v556 = genBankFile$$1.search(/LOCUS/);
  var v433 = v556 == -1;
  var v558 = !v433;
  if(v558) {
    var v631 = genBankFile$$1.search(/DEFINITION/);
    var v557 = v631 == -1;
    var v633 = !v557;
    if(v633) {
      var v676 = genBankFile$$1.search(/ACCESSION/);
      var v632 = v676 == -1;
      var v678 = !v632;
      if(v678) {
        var v677 = genBankFile$$1.search(/ORIGIN/);
        v632 = v677 == -1
      }
      v557 = v632
    }
    v433 = v557
  }
  var v145 = v433;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v434 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v434 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v559 = emblFile$$1.search(/ID/);
  var v435 = v559 == -1;
  var v561 = !v435;
  if(v561) {
    var v634 = emblFile$$1.search(/AC/);
    var v560 = v634 == -1;
    var v636 = !v560;
    if(v636) {
      var v679 = emblFile$$1.search(/DE/);
      var v635 = v679 == -1;
      var v681 = !v635;
      if(v681) {
        var v680 = emblFile$$1.search(/SQ/);
        v635 = v680 == -1
      }
      v560 = v635
    }
    v435 = v560
  }
  var v147 = v435;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v436 = emblFile$$1.search(/^FT/m);
  var v148 = v436 == -1;
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
    var v437 = basePerLine / groupSize;
    var v152 = j$$6 <= v437;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v438 = k + i$$5;
        var v150 = text$$10.charAt(v438);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v439 = basePerLine / groupSize;
      v152 = j$$6 <= v439
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
    var v440 = adjustment < 0;
    if(v440) {
      v440 = adjusted >= 0
    }
    var v156 = v440;
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
    var v441 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v441;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v442 = i$$6 + k$$1;
        var v157 = v442 >= stopBase$$2;
        if(v157) {
          break
        }
        var v443 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v443);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v444 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v444, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v445 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v445
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v637 = adjustNumbering(lineNum, numberingAdjustment);
      var v562 = rightNum(v637, "", 8, tabIn$$3);
      var v446 = v562 + lineOfText$$1;
      var v165 = v446 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v638 = adjustNumbering(lineNum, numberingAdjustment);
        var v563 = rightNum(v638, "", 8, tabIn$$3);
        var v564 = complement(lineOfText$$1);
        var v447 = v563 + v564;
        var v167 = v447 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v565 = adjustNumbering(i$$6, numberingAdjustment);
        var v448 = lineOfText$$1 + v565;
        var v171 = v448 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v566 = complement(lineOfText$$1);
          var v567 = adjustNumbering(i$$6, numberingAdjustment);
          var v449 = v566 + v567;
          var v173 = v449 + "\n";
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
            var v450 = complement(lineOfText$$1);
            var v181 = v450 + "\n";
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
    var v451 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v451;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v452 = i$$7 + k$$2;
        var v188 = v452 >= stopBase$$3;
        if(v188) {
          break
        }
        var v453 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v453);
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
      var v454 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v454
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v568 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v455 = v568 + lineOfText$$2;
      var v196 = v455 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v456 = lineOfText$$2 + i$$7;
        var v198 = v456 + "\n";
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
  var v569 = sequence$$13.length;
  var v457 = v569 <= firstIndexToMutate;
  var v571 = !v457;
  if(v571) {
    var v570 = lastIndexToMutate < 0;
    var v639 = !v570;
    if(v639) {
      v570 = lastIndexToMutate <= firstIndexToMutate
    }
    v457 = v570
  }
  var v207 = v457;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v458 = Math.random();
    var v208 = v458 * maxNum;
    randNum = Math.floor(v208);
    var v459 = randNum < firstIndexToMutate;
    var v572 = !v459;
    if(v572) {
      v459 = randNum > lastIndexToMutate
    }
    var v209 = v459;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v460 = Math.random();
      var v461 = components$$1.length;
      var v210 = v460 * v461;
      componentsIndex = Math.round(v210);
      var v462 = components$$1.length;
      var v211 = componentsIndex == v462;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v463 = components$$1[componentsIndex]
      }
      var v212 = v463 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v464 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v465 = components$$1[componentsIndex]
    }
    var v213 = v464 + v465;
    var v466 = randNum + 1;
    var v467 = sequence$$13.length;
    var v214 = sequence$$13.substring(v466, v467);
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
    var v468 = Math.random();
    var v469 = components$$2.length;
    var v218 = v468 * v469;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v470 = sequence$$14.length;
    var v221 = v470 == 60;
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
    var v640 = sequence$$15.length;
    var v573 = v640 - lookAhead;
    var v574 = sequence$$15.length;
    var v471 = sequence$$15.substring(v573, v574);
    var v226 = v471 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v641 = '<tr><td class="title" width="200px">' + "Site:";
  var v575 = v641 + '</td><td class="title">';
  var v472 = v575 + "Positions:";
  var v231 = v472 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v473 = arrayOfItems.length;
  var v247 = i$$9 < v473;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v474 = arrayOfItems[i$$9]
    }
    var v232 = v474.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v642 = arrayOfItems[i$$9]
    }
    var v576 = v642.match(/\)\D*\d+/);
    var v475 = v576.toString();
    var v233 = v475.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v476 = matchPosition >= lowerLimit;
      if(v476) {
        v476 = matchPosition < upperLimit
      }
      var v237 = v476;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v477 = matchPosition - shiftValue;
        var v236 = v477 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v577 = matchExp.lastIndex;
      var v643 = RegExp.lastMatch;
      var v578 = v643.length;
      var v478 = v577 - v578;
      v238.lastIndex = v478 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v479 = tempString$$1.search(/\d/);
    var v240 = v479 != -1;
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
    var v735 = '<tr><td class="' + backGroundClass;
    var v719 = v735 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v755 = arrayOfItems[i$$9]
    }
    var v746 = v755.match(/\([^\(]+\)/);
    var v736 = v746.toString();
    var v720 = v736.replace(/\(|\)/g, "");
    var v703 = v719 + v720;
    var v682 = v703 + '</td><td class="';
    var v644 = v682 + backGroundClass;
    var v579 = v644 + '">';
    var v480 = v579 + tempString$$1;
    var v246 = v480 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v481 = arrayOfItems.length;
    v247 = i$$9 < v481
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
  var v704 = '<tr><td class="title">' + "Pattern:";
  var v683 = v704 + '</td><td class="title">';
  var v645 = v683 + "Times found:";
  var v580 = v645 + '</td><td class="title">';
  var v482 = v580 + "Percentage:";
  var v251 = v482 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v483 = arrayOfItems$$1.length;
  var v260 = i$$10 < v483;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfItems$$1[i$$10]
    }
    var v252 = v484.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v485 = sequence$$16.search(matchExp$$1);
    var v254 = v485 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v581 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v684 = arrayOfItems$$1[i$$10]
    }
    var v646 = v684.match(/\d+/);
    var v582 = parseFloat(v646);
    var v486 = v581 - v582;
    var v257 = v486 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v487 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v647 = arrayOfItems$$1[i$$10]
      }
      var v583 = v647.match(/\d+/);
      var v488 = parseFloat(v583);
      var v256 = v487 - v488;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = arrayOfItems$$1[i$$10]
    }
    var v747 = v756.match(/\([^\(]+\)\b/);
    var v737 = v747.toString();
    var v721 = v737.replace(/\(|\)/g, "");
    var v705 = "<tr><td>" + v721;
    var v685 = v705 + "</td><td>";
    var v648 = v685 + tempNumber;
    var v584 = v648 + "</td><td>";
    var v585 = percentage.toFixed(2);
    var v489 = v584 + v585;
    var v259 = v489 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v490 = arrayOfItems$$1.length;
    v260 = i$$10 < v490
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
  var v491 = sequence$$17.length;
  var v268 = v491 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v492 = Math.random();
    var v262 = v492 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v493 = tempSeq.length;
    var v267 = v493 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v494 = sequence$$17.length;
    v268 = v494 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function dnaMw(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v495 = testScript();
  var v271 = v495 == false;
  if(v271) {
    return false
  }
  var v722 = theDocument.forms;
  var v706 = v722[0];
  var v686 = v706.elements;
  var v649 = v686[0];
  var v586 = checkFormElement(v649);
  var v496 = v586 == false;
  var v588 = !v496;
  if(v588) {
    var v738 = theDocument.forms;
    var v723 = v738[0];
    var v707 = v723.elements;
    var v687 = v707[0];
    var v650 = v687.value;
    var v587 = checkSequenceLength(v650, maxInput$$3);
    v496 = v587 == false
  }
  var v272 = v496;
  if(v272) {
    return false
  }
  openWindow("DNA Molecular Weight");
  var v688 = theDocument.forms;
  var v651 = v688[0];
  var v589 = v651.elements;
  var v497 = v589[0];
  var v273 = v497.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v498 = arrayOfFasta$$1.length;
  var v281 = i$$11 < v498;
  for(;v281;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v274);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v275);
    newDna = _removeNonPrimer(newDna);
    var v276 = outputWindow.document;
    var v277 = getInfoFromTitleAndSequence(title, newDna);
    JAMScript.call(v276.write, v276, [v277]);
    var v724 = theDocument.forms;
    var v708 = v724[0];
    var v689 = v708.elements;
    var v652 = v689[4];
    var v590 = v652.options;
    var v725 = theDocument.forms;
    var v709 = v725[0];
    var v690 = v709.elements;
    var v653 = v690[4];
    var v591 = v653.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = v590[v591]
    }
    var v278 = v499.value;
    var v726 = theDocument.forms;
    var v710 = v726[0];
    var v691 = v710.elements;
    var v654 = v691[5];
    var v592 = v654.options;
    var v727 = theDocument.forms;
    var v711 = v727[0];
    var v692 = v711.elements;
    var v655 = v692[5];
    var v593 = v655.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = v592[v593]
    }
    var v279 = v500.value;
    writeDnaMw(newDna, v278, v279);
    var v280 = outputWindow.document;
    JAMScript.call(v280.write, v280, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v501 = arrayOfFasta$$1.length;
    v281 = i$$11 < v501
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeDnaMw(sequence$$18, strandType, topology$$1) {
  var OH = 17.01;
  var result = 0;
  var v309 = strandType == "single";
  if(v309) {
    var mw_direct_strand = _molecularWeight(sequence$$18);
    var v502 = mw_direct_strand.length;
    var v292 = v502 == 1;
    if(v292) {
      var v282 = mw_direct_strand[0];
      var mw = parseFloat(v282);
      var v283 = topology$$1 == "circular";
      if(v283) {
        mw = mw - OH
      }
      mw = mw.toFixed(2);
      var v284 = outputWindow.document;
      var v285 = mw + " Da";
      JAMScript.call(v284.write, v284, [v285])
    }else {
      var v503 = mw_direct_strand.length;
      var v291 = v503 == 2;
      if(v291) {
        var v286 = mw_direct_strand[0];
        var mw_lower = parseFloat(v286);
        var v287 = mw_direct_strand[1];
        var mw_upper = parseFloat(v287);
        var v288 = topology$$1 == "circular";
        if(v288) {
          mw_lower = mw_lower - OH;
          mw_upper = mw_upper - OH
        }
        mw_lower = mw_lower.toFixed(2);
        mw_upper = mw_upper.toFixed(2);
        var v289 = outputWindow.document;
        var v594 = mw_lower + " to ";
        var v504 = v594 + mw_upper;
        var v290 = v504 + " Da";
        JAMScript.call(v289.write, v289, [v290])
      }
    }
  }else {
    var v308 = strandType == "double";
    if(v308) {
      mw_direct_strand = _molecularWeight(sequence$$18);
      var v505 = complement(sequence$$18);
      var v293 = reverse(v505);
      var mw_reverse_strand = _molecularWeight(v293);
      var v595 = mw_direct_strand.length;
      var v506 = v595 == 1;
      if(v506) {
        var v596 = mw_reverse_strand.length;
        v506 = v596 == 1
      }
      var v307 = v506;
      if(v307) {
        var v294 = mw_direct_strand[0];
        var mw_direct = parseFloat(v294);
        var v295 = mw_reverse_strand[0];
        var mw_reverse = parseFloat(v295);
        var v296 = topology$$1 == "circular";
        if(v296) {
          mw_direct = mw_direct - OH;
          mw_reverse = mw_reverse - OH
        }
        mw = mw_direct + mw_reverse;
        mw = mw.toFixed(2);
        var v297 = outputWindow.document;
        var v298 = mw + " Da";
        JAMScript.call(v297.write, v297, [v298])
      }else {
        var v597 = mw_direct_strand.length;
        var v507 = v597 == 2;
        if(v507) {
          var v598 = mw_reverse_strand.length;
          v507 = v598 == 2
        }
        var v306 = v507;
        if(v306) {
          var v299 = mw_direct_strand[0];
          var mw_direct_lower = parseFloat(v299);
          var v300 = mw_reverse_strand[0];
          var mw_reverse_lower = parseFloat(v300);
          var v301 = mw_direct_strand[1];
          var mw_direct_upper = parseFloat(v301);
          var v302 = mw_reverse_strand[1];
          var mw_reverse_upper = parseFloat(v302);
          var v303 = topology$$1 == "circular";
          if(v303) {
            mw_direct_lower = mw_direct_lower - OH;
            mw_reverse_lower = mw_reverse_lower - OH;
            mw_direct_upper = mw_direct_upper - OH;
            mw_reverse_upper = mw_reverse_upper - OH
          }
          mw_lower = mw_direct_lower + mw_reverse_lower;
          mw_upper = mw_direct_upper + mw_reverse_upper;
          mw_lower = mw_lower.toFixed(2);
          mw_upper = mw_upper.toFixed(2);
          var v304 = outputWindow.document;
          var v599 = mw_lower + " to ";
          var v508 = v599 + mw_upper;
          var v305 = v508 + " Da";
          JAMScript.call(v304.write, v304, [v305])
        }
      }
    }
  }
  return true
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v509 = sequence$$19.search(/[^gatc]/i);
  var v310 = v509 == -1;
  if(v310) {
    return true
  }
  return false
}
function _molecularWeight(sequence$$20) {
  var v311 = _containsOnlyNonDegenerates(sequence$$20);
  if(v311) {
    return _molecularWeightNonDegen(sequence$$20)
  }else {
    return _molecularWeightDegen(sequence$$20)
  }
  return
}
function _molecularWeightNonDegen(sequence$$21) {
  var results = new Array;
  var v792 = _mw(sequence$$21);
  results[0] = v792;
  return results
}
function _mw(sequence$$22) {
  var g = _getBaseCount(sequence$$22, "g");
  var a = _getBaseCount(sequence$$22, "a");
  var t = _getBaseCount(sequence$$22, "t");
  var c = _getBaseCount(sequence$$22, "c");
  var v656 = g * 329.21;
  var v657 = a * 313.21;
  var v600 = v656 + v657;
  var v601 = t * 304.2;
  var v510 = v600 + v601;
  var v511 = c * 289.18;
  var v312 = v510 + v511;
  return v312 + 17.01
}
function _molecularWeightDegen(sequence$$23) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
  lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");
  upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
  upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");
  var results$$1 = new Array;
  var v793 = _molecularWeightNonDegen(lowerBoundsSequence);
  results$$1[0] = v793;
  var v794 = _molecularWeightNonDegen(upperBoundsSequence);
  results$$1[1] = v794;
  return results$$1
}
function _getBaseCount(sequence$$24, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v512 = sequence$$24.search(basePattern);
  var v314 = v512 != -1;
  if(v314) {
    var v313 = sequence$$24.match(basePattern);
    return v313.length
  }else {
    return 0
  }
  return
}
function _removeNonPrimer(sequence$$25) {
  sequence$$25.replace(/u/g, "t");
  sequence$$25.replace(/U/g, "T");
  return sequence$$25.replace(/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, "")
}
JAMScript.set(document, "onload", v2);
var v315 = document.getElementById("submitbtn");
JAMScript.set(v315, "onclick", v3);
var v316 = document.getElementById("clearbtn");
JAMScript.set(v316, "onclick", v4);

JAM.stopProfile('load');
