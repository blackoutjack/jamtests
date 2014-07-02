
JAM.startProfile('load');
function v5() {
  var v674 = document.forms;
  var v565 = v674[0];
  var v336 = v565.elements;
  var v6 = v336[0];
  v6.value = " ";
  var v675 = document.forms;
  var v566 = v675[0];
  var v337 = v566.elements;
  var v7 = v337[4];
  v7.value = " ";
  return
}
function v4() {
  try {
    translate(document)
  }catch(e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8)
  }
  return
}
function v3() {
  var v338 = document.main_form;
  var v9 = v338.main_submit;
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
  var v339 = arrayOfSequences.length;
  var v11 = v339 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v340 = arrayOfTitles.length;
  var v13 = i$$1 < v340;
  for(;v13;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v676 = arrayOfTitles[i$$1]
    }
    var v567 = v676.search(/\S/);
    var v341 = v567 == -1;
    var v569 = !v341;
    if(v569) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v754 = arrayOfSequences[i$$1]
      }
      var v677 = v754.search(/\S/);
      var v568 = v677 == -1;
      var v679 = !v568;
      if(v679) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v755 = arrayOfSequences[i$$1]
        }
        var v678 = v755.length;
        v568 = v678 != lengthOfAlign
      }
      v341 = v568
    }
    var v12 = v341;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v342 = arrayOfTitles.length;
    v13 = i$$1 < v342
  }
  return true
}
function checkCodonTable(codonTable) {
  var v570 = codonTable.search(/AmAcid/);
  var v343 = v570 == -1;
  var v572 = !v343;
  if(v572) {
    var v680 = codonTable.search(/Codon/);
    var v571 = v680 == -1;
    var v682 = !v571;
    if(v682) {
      var v756 = codonTable.search(/Number/);
      var v681 = v756 == -1;
      var v758 = !v681;
      if(v758) {
        var v814 = codonTable.search(/\/1000/);
        var v757 = v814 == -1;
        var v816 = !v757;
        if(v816) {
          var v815 = codonTable.search(/Fraction\s*\.\./);
          v757 = v815 == -1
        }
        v681 = v757
      }
      v571 = v681
    }
    v343 = v571
  }
  var v14 = v343;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v573 = formElement.value;
  var v344 = v573.search(/\S/);
  var v15 = v344 == -1;
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
  var v345 = arrayOfPatterns.length;
  var v18 = z$$2 < v345;
  for(;v18;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v574 = arrayOfPatterns[z$$2]
    }
    var v346 = v574.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v346 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v575 = arrayOfPatterns[z$$2]
    }
    var v347 = moreExpressionCheck(v575);
    var v17 = v347 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v348 = arrayOfPatterns.length;
    v18 = z$$2 < v348
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v349 = arrayOfPatterns.length;
  var v27 = j < v349;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v683 = arrayOfPatterns[j]
    }
    var v576 = v683.match(/\/.+\//);
    var v350 = v576 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1163 = eval("introspect(JAMScript.introspectors.processAll) { " + v350 + " }")
    }else {
      var v1163 = JAMScript.call(eval, null, [v350])
    }
    v21[v22] = v1163;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = arrayOfPatterns[j]
    }
    var v351 = v577.match(/=[a-zA-Z\*]/);
    var v1164 = v351.toString();
    v23[v24] = v1164;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = geneticCodeMatchResult[j]
    }
    var v1165 = v352.replace(/=/g, "");
    v25[v26] = v1165;
    j = j + 1;
    var v353 = arrayOfPatterns.length;
    v27 = j < v353
  }
  var i$$2 = 0;
  var v578 = testSequence.length;
  var v354 = v578 - 3;
  var v34 = i$$2 <= v354;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v28);
    j = 0;
    var v355 = geneticCodeMatchExp.length;
    var v32 = j < v355;
    for(;v32;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v579 = geneticCodeMatchExp[j]
      }
      var v356 = codon.search(v579);
      var v31 = v356 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v357 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v357 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v358 = geneticCodeMatchExp.length;
      v32 = j < v358
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v580 = testSequence.length;
    var v359 = v580 - 3;
    v34 = i$$2 <= v359
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v360 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v360;
  for(;v36;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = arrayOfPatterns$$1[z$$3]
    }
    var v361 = v581.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v35 = v361 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v362 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v362
  }
  var i$$3 = 0;
  var v363 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v363;
  for(;v40;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = arrayOfPatterns$$1[i$$3]
    }
    var v364 = "[" + v582;
    var v37 = v364 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v365 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v365;
    for(;v39;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v583 = arrayOfPatterns$$1[j$$1]
      }
      var v366 = v583.search(re);
      var v38 = v366 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v367 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v367
    }
    i$$3 = i$$3 + 1;
    var v368 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v368
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v369 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v369;
  for(;v43;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = arrayOfPatterns$$2[z$$4]
    }
    var v370 = v584.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v41 = v370 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = arrayOfPatterns$$2[z$$4]
    }
    var v371 = moreExpressionCheck(v585);
    var v42 = v371 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v372 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v372
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v684 = getSequenceFromFasta(text$$7);
  var v586 = v684.replace(/[^A-Za-z]/g, "");
  var v373 = v586.length;
  var v45 = v373 > maxInput;
  if(v45) {
    var v374 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v374 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v375 = text$$8.length;
  var v47 = v375 > maxInput$$1;
  if(v47) {
    var v376 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v376 + " characters.";
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
  JAMScript.call(v48.write, v48, ["</form>"]);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</div>"]);
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAMScript.call(v52.write, v52, ["</body>\n</html>\n"]);
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
  var v377 = alignArray.length;
  var v54 = v377 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v378 = alignArray.length;
  var v56 = i$$4 < v378;
  for(;v56;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = alignArray[i$$4]
    }
    var v379 = v587.search(/[^\s]+\s/);
    var v55 = v379 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v380 = alignArray.length;
    v56 = i$$4 < v380
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
  var v381 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v59 = v381 != -1;
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
  var v382 = sequence$$2.length;
  var v60 = "&gt;results for " + v382;
  var stringToReturn = v60 + " residue sequence ";
  var v383 = fastaSequenceTitle.search(/[^\s]/);
  var v62 = v383 != -1;
  if(v62) {
    var v384 = stringToReturn + '"';
    var v61 = v384 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v385 = stringToReturn + ' starting "';
  var v386 = sequence$$2.substring(0, 10);
  var v63 = v385 + v386;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v387 = sequenceOne.length;
  var v64 = "Search results for " + v387;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v388 = fastaSequenceTitleOne.search(/[^\s]/);
  var v66 = v388 != -1;
  if(v66) {
    var v389 = stringToReturn$$1 + '"';
    var v65 = v389 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v390 = stringToReturn$$1 + ' starting "';
  var v391 = sequenceOne.substring(0, 10);
  var v67 = v390 + v391;
  stringToReturn$$1 = v67 + '"\n';
  var v392 = stringToReturn$$1 + "and ";
  var v393 = sequenceTwo.length;
  var v68 = v392 + v393;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v394 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v70 = v394 != -1;
  if(v70) {
    var v395 = stringToReturn$$1 + '"';
    var v69 = v395 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v396 = stringToReturn$$1 + ' starting "';
  var v397 = sequenceTwo.substring(0, 10);
  var v71 = v396 + v397;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v398 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v398;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v685 = arrayOfPatterns$$3[j$$2]
    }
    var v588 = v685.match(/\/.+\//);
    var v399 = v588 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1166 = eval("introspect(JAMScript.introspectors.processAll) { " + v399 + " }")
    }else {
      var v1166 = JAMScript.call(eval, null, [v399])
    }
    v74[v75] = v1166;
    j$$2 = j$$2 + 1;
    var v400 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v400
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v401 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v401;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v589 = arrayOfPatterns$$4[j$$3]
    }
    var v402 = v589.match(/=[a-zA-Z\*]/);
    var v1167 = v402.toString();
    v78[v79] = v1167;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v403 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1168 = v403.replace(/=/g, "");
    v80[v81] = v1168;
    j$$3 = j$$3 + 1;
    var v404 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v404
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v405 = sequence$$3.length;
  var v83 = "Results for " + v405;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v406 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v406 != -1;
  if(v85) {
    var v407 = stringToReturn$$2 + '"';
    var v84 = v407 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v408 = stringToReturn$$2 + ' starting "';
  var v409 = sequence$$3.substring(0, 10);
  var v86 = v408 + v409;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v590 = "Results for " + topology;
  var v410 = v590 + " ";
  var v411 = sequence$$4.length;
  var v88 = v410 + v411;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v412 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v412 != -1;
  if(v90) {
    var v413 = stringToReturn$$3 + '"';
    var v89 = v413 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v414 = stringToReturn$$3 + ' starting "';
  var v415 = sequence$$4.substring(0, 10);
  var v91 = v414 + v415;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v416 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v416;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v417 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v417 != -1;
  if(v95) {
    var v418 = stringToReturn$$4 + '"';
    var v94 = v418 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v419 = stringToReturn$$4 + ' starting "';
  var v420 = sequenceOne$$1.substring(0, 10);
  var v96 = v419 + v420;
  stringToReturn$$4 = v96 + '"\n';
  var v421 = stringToReturn$$4 + "and ";
  var v422 = sequenceTwo$$1.length;
  var v97 = v421 + v422;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v423 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v423 != -1;
  if(v99) {
    var v424 = stringToReturn$$4 + '"';
    var v98 = v424 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v425 = stringToReturn$$4 + ' starting "';
  var v426 = sequenceTwo$$1.substring(0, 10);
  var v100 = v425 + v426;
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
    var v427 = Math.random();
    var v428 = components.length;
    var v102 = v427 * v428;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v429 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v429 != -1;
  if(v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v430 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v430 != -1;
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
  var v591 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v431 = v591 != -1;
  var v593 = !v431;
  if(v593) {
    var v686 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v592 = v686 != -1;
    var v688 = !v592;
    if(v688) {
      var v759 = expressionToCheck.search(/\[\]/);
      var v687 = v759 != -1;
      var v761 = !v687;
      if(v761) {
        var v817 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v760 = v817 != -1;
        var v819 = !v760;
        if(v819) {
          var v858 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v818 = v858 != -1;
          var v860 = !v818;
          if(v860) {
            var v897 = expressionToCheck.search(/\|\|/);
            var v859 = v897 != -1;
            var v899 = !v859;
            if(v899) {
              var v929 = expressionToCheck.search(/\/\|/);
              var v898 = v929 != -1;
              var v931 = !v898;
              if(v931) {
                var v955 = expressionToCheck.search(/\|\//);
                var v930 = v955 != -1;
                var v957 = !v930;
                if(v957) {
                  var v981 = expressionToCheck.search(/\[.\]/);
                  var v956 = v981 != -1;
                  var v983 = !v956;
                  if(v983) {
                    var v1005 = expressionToCheck.search(/\</);
                    var v982 = v1005 != -1;
                    var v1007 = !v982;
                    if(v1007) {
                      var v1006 = expressionToCheck.search(/\>/);
                      v982 = v1006 != -1
                    }
                    v956 = v982
                  }
                  v930 = v956
                }
                v898 = v930
              }
              v859 = v898
            }
            v818 = v859
          }
          v760 = v818
        }
        v687 = v760
      }
      v592 = v687
    }
    v431 = v592
  }
  var v107 = v431;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ['<form action="">\n']);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ["<pre>"]);
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAMScript.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1169 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1169[2], v1169[1], v1169[0]);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v689 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v594 = v689 + "<head>\n";
  var v432 = v594 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v432 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v112.write, v112, [v113]);
  if(isColor) {
    var v114 = outputWindow.document;
    var v1071 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1050 = v1071 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1029 = v1050 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1008 = v1029 + "div.info {font-weight: bold}\n";
    var v984 = v1008 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v958 = v984 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v932 = v958 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v900 = v932 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v861 = v900 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v820 = v861 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v762 = v820 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v762 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v595 = v690 + "td.many {color: #000000}\n";
    var v433 = v595 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v433 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }else {
    var v116 = outputWindow.document;
    var v1092 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1072 = v1092 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1051 = v1072 + "div.title {display: none}\n";
    var v1030 = v1051 + "div.info {font-weight: bold}\n";
    var v1009 = v1030 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v985 = v1009 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v959 = v985 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v933 = v959 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v901 = v933 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v862 = v901 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v821 = v862 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v763 = v821 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v691 = v763 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v596 = v691 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v434 = v596 + "img {display: none}\n";
    var v117 = v434 + "</style>\n";
    JAMScript.call(v116.write, v116, [v117])
  }
  var v118 = outputWindow.document;
  var v692 = "</head>\n" + '<body class="main">\n';
  var v597 = v692 + '<div class="title">';
  var v435 = v597 + title$$6;
  var v119 = v435 + " results</div>\n";
  JAMScript.call(v118.write, v118, [v119]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1170 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1170[2], v1170[1], v1170[0]);
  outputWindow.focus();
  var v120 = outputWindow.document;
  var v693 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v598 = v693 + "<head>\n";
  var v436 = v598 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v436 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v120.write, v120, [v121]);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v1073 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1052 = v1073 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1031 = v1052 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1010 = v1031 + "div.info {font-weight: bold}\n";
    var v986 = v1010 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v960 = v986 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v934 = v960 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v902 = v934 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v863 = v902 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v822 = v863 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v764 = v822 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v694 = v764 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v599 = v694 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v437 = v599 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v437 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }else {
    var v124 = outputWindow.document;
    var v1111 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1093 = v1111 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1074 = v1093 + "div.title {display: none}\n";
    var v1053 = v1074 + "div.info {font-weight: bold}\n";
    var v1032 = v1053 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1011 = v1032 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v987 = v1011 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v961 = v987 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v935 = v961 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v903 = v935 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v864 = v903 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v823 = v864 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v765 = v823 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v695 = v765 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v600 = v695 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v438 = v600 + "img {display: none}\n";
    var v125 = v438 + "</style>\n";
    JAMScript.call(v124.write, v124, [v125])
  }
  var v126 = outputWindow.document;
  var v696 = "</head>\n" + '<body class="main">\n';
  var v601 = v696 + '<div class="title">';
  var v439 = v601 + title$$8;
  var v127 = v439 + " results</div>\n";
  JAMScript.call(v126.write, v126, [v127]);
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
  var v440 = dnaSequence$$1.search(/./);
  var v128 = v440 != -1;
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
  var v441 = testArray[0];
  var v132 = v441 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v442 = testString.search(re$$2);
  var v133 = v442 == -1;
  if(v133) {
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
  var v443 = testNum.toFixed(3);
  var v136 = v443 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v444 = testNum.toPrecision(5);
  var v137 = v444 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v445 = theNumber$$1.search(/\d/);
  var v138 = v445 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v602 = emblFile.search(/ID/);
  var v446 = v602 == -1;
  var v604 = !v446;
  if(v604) {
    var v697 = emblFile.search(/AC/);
    var v603 = v697 == -1;
    var v699 = !v603;
    if(v699) {
      var v766 = emblFile.search(/DE/);
      var v698 = v766 == -1;
      var v768 = !v698;
      if(v768) {
        var v767 = emblFile.search(/SQ/);
        v698 = v767 == -1
      }
      v603 = v698
    }
    v446 = v603
  }
  var v139 = v446;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v447 = theNumber$$2.search(/\d/);
  var v140 = v447 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v448 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v448 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v449 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v449 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v450 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v450 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v605 = genBankFile.search(/LOCUS/);
  var v451 = v605 == -1;
  var v607 = !v451;
  if(v607) {
    var v700 = genBankFile.search(/DEFINITION/);
    var v606 = v700 == -1;
    var v702 = !v606;
    if(v702) {
      var v769 = genBankFile.search(/ACCESSION/);
      var v701 = v769 == -1;
      var v771 = !v701;
      if(v771) {
        var v770 = genBankFile.search(/ORIGIN/);
        v701 = v770 == -1
      }
      v606 = v701
    }
    v451 = v606
  }
  var v145 = v451;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v608 = genBankFile$$1.search(/LOCUS/);
  var v452 = v608 == -1;
  var v610 = !v452;
  if(v610) {
    var v703 = genBankFile$$1.search(/DEFINITION/);
    var v609 = v703 == -1;
    var v705 = !v609;
    if(v705) {
      var v772 = genBankFile$$1.search(/ACCESSION/);
      var v704 = v772 == -1;
      var v774 = !v704;
      if(v774) {
        var v773 = genBankFile$$1.search(/ORIGIN/);
        v704 = v773 == -1
      }
      v609 = v704
    }
    v452 = v609
  }
  var v146 = v452;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v453 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v453 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v611 = emblFile$$1.search(/ID/);
  var v454 = v611 == -1;
  var v613 = !v454;
  if(v613) {
    var v706 = emblFile$$1.search(/AC/);
    var v612 = v706 == -1;
    var v708 = !v612;
    if(v708) {
      var v775 = emblFile$$1.search(/DE/);
      var v707 = v775 == -1;
      var v777 = !v707;
      if(v777) {
        var v776 = emblFile$$1.search(/SQ/);
        v707 = v776 == -1
      }
      v612 = v707
    }
    v454 = v612
  }
  var v148 = v454;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v455 = emblFile$$1.search(/^FT/m);
  var v149 = v455 == -1;
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
    var v456 = basePerLine / groupSize;
    var v153 = j$$6 <= v456;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v457 = k + i$$5;
        var v151 = text$$10.charAt(v457);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v458 = basePerLine / groupSize;
      v153 = j$$6 <= v458
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAMScript.call(v154.write, v154, [v155]);
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
    var v459 = adjustment < 0;
    if(v459) {
      v459 = adjusted >= 0
    }
    var v157 = v459;
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
    var v460 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v460;
    for(;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v461 = i$$6 + k$$1;
        var v158 = v461 >= stopBase$$2;
        if(v158) {
          break
        }
        var v462 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v462);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if(v162) {
        var v463 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v463, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161
      }
      var v163 = i$$6 >= stopBase$$2;
      if(v163) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v464 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v464
    }
    var v187 = numberPosition$$1 == "left";
    if(v187) {
      var v165 = outputWindow.document;
      var v709 = adjustNumbering(lineNum, numberingAdjustment);
      var v614 = rightNum(v709, "", 8, tabIn$$3);
      var v465 = v614 + lineOfText$$1;
      var v166 = v465 + "\n";
      JAMScript.call(v165.write, v165, [v166]);
      var v170 = strands$$1 == "two";
      if(v170) {
        var v167 = outputWindow.document;
        var v710 = adjustNumbering(lineNum, numberingAdjustment);
        var v615 = rightNum(v710, "", 8, tabIn$$3);
        var v616 = complement(lineOfText$$1);
        var v466 = v615 + v616;
        var v168 = v466 + "\n";
        JAMScript.call(v167.write, v167, [v168]);
        var v169 = outputWindow.document;
        JAMScript.call(v169.write, v169, ["\n"])
      }
    }else {
      var v186 = numberPosition$$1 == "right";
      if(v186) {
        var v171 = outputWindow.document;
        var v617 = adjustNumbering(i$$6, numberingAdjustment);
        var v467 = lineOfText$$1 + v617;
        var v172 = v467 + "\n";
        JAMScript.call(v171.write, v171, [v172]);
        var v176 = strands$$1 == "two";
        if(v176) {
          var v173 = outputWindow.document;
          var v618 = complement(lineOfText$$1);
          var v619 = adjustNumbering(i$$6, numberingAdjustment);
          var v468 = v618 + v619;
          var v174 = v468 + "\n";
          JAMScript.call(v173.write, v173, [v174]);
          var v175 = outputWindow.document;
          JAMScript.call(v175.write, v175, ["\n"])
        }
      }else {
        var v185 = numberPosition$$1 == "above";
        if(v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          JAMScript.call(v177.write, v177, [v178]);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          JAMScript.call(v179.write, v179, [v180]);
          var v184 = strands$$1 == "two";
          if(v184) {
            var v181 = outputWindow.document;
            var v469 = complement(lineOfText$$1);
            var v182 = v469 + "\n";
            JAMScript.call(v181.write, v181, [v182]);
            var v183 = outputWindow.document;
            JAMScript.call(v183.write, v183, ["\n"])
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
    var v470 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v470;
    for(;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for(;v191;) {
        var v471 = i$$7 + k$$2;
        var v189 = v471 >= stopBase$$3;
        if(v189) {
          break
        }
        var v472 = k$$2 + i$$7;
        var v190 = text$$13.charAt(v472);
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
      var v473 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v473
    }
    var v206 = numberPosition$$2 == "left";
    if(v206) {
      var v196 = outputWindow.document;
      var v620 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v474 = v620 + lineOfText$$2;
      var v197 = v474 + "\n";
      JAMScript.call(v196.write, v196, [v197])
    }else {
      var v205 = numberPosition$$2 == "right";
      if(v205) {
        var v198 = outputWindow.document;
        var v475 = lineOfText$$2 + i$$7;
        var v199 = v475 + "\n";
        JAMScript.call(v198.write, v198, [v199])
      }else {
        var v204 = numberPosition$$2 == "above";
        if(v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          JAMScript.call(v200.write, v200, [v201]);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          JAMScript.call(v202.write, v202, [v203])
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
  var v621 = sequence$$13.length;
  var v476 = v621 <= firstIndexToMutate;
  var v623 = !v476;
  if(v623) {
    var v622 = lastIndexToMutate < 0;
    var v711 = !v622;
    if(v711) {
      v622 = lastIndexToMutate <= firstIndexToMutate
    }
    v476 = v622
  }
  var v208 = v476;
  if(v208) {
    numMut = 0
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for(;v216;) {
    maxNum = sequence$$13.length;
    var v477 = Math.random();
    var v209 = v477 * maxNum;
    randNum = Math.floor(v209);
    var v478 = randNum < firstIndexToMutate;
    var v624 = !v478;
    if(v624) {
      v478 = randNum > lastIndexToMutate
    }
    var v210 = v478;
    if(v210) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v216 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v479 = Math.random();
      var v480 = components$$1.length;
      var v211 = v479 * v480;
      componentsIndex = Math.round(v211);
      var v481 = components$$1.length;
      var v212 = componentsIndex == v481;
      if(v212) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v482 = components$$1[componentsIndex]
      }
      var v213 = v482 != currentChar;
      if(v213) {
        needNewChar = false
      }
    }
    var v483 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = components$$1[componentsIndex]
    }
    var v214 = v483 + v484;
    var v485 = randNum + 1;
    var v486 = sequence$$13.length;
    var v215 = sequence$$13.substring(v485, v486);
    sequence$$13 = v214 + v215;
    i$$8 = i$$8 + 1;
    v216 = i$$8 < numMut
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  JAMScript.call(v217.write, v217, [v218]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for(;v223;) {
    var v487 = Math.random();
    var v488 = components$$2.length;
    var v219 = v487 * v488;
    tempNum$$1 = Math.floor(v219);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v489 = sequence$$14.length;
    var v222 = v489 == 60;
    if(v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      JAMScript.call(v220.write, v220, [v221]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v223 = j$$9 < lengthOut$$1
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  JAMScript.call(v224.write, v224, [v225]);
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
    var v712 = sequence$$15.length;
    var v625 = v712 - lookAhead;
    var v626 = sequence$$15.length;
    var v490 = sequence$$15.substring(v625, v626);
    var v227 = v490 + sequence$$15;
    var v228 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v230 = outputWindow.document;
  JAMScript.call(v230.write, v230, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v231 = outputWindow.document;
  var v713 = '<tr><td class="title" width="200px">' + "Site:";
  var v627 = v713 + '</td><td class="title">';
  var v491 = v627 + "Positions:";
  var v232 = v491 + "</td></tr>\n";
  JAMScript.call(v231.write, v231, [v232]);
  var i$$9 = 0;
  var v492 = arrayOfItems.length;
  var v248 = i$$9 < v492;
  for(;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = arrayOfItems[i$$9]
    }
    var v233 = v493.match(/\/.+\//);
    matchExp = v233 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v714 = arrayOfItems[i$$9]
    }
    var v628 = v714.match(/\)\D*\d+/);
    var v494 = v628.toString();
    var v234 = v494.replace(/\)\D*/, "");
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v495 = matchPosition >= lowerLimit;
      if(v495) {
        v495 = matchPosition < upperLimit
      }
      var v238 = v495;
      if(v238) {
        timesFound = timesFound + 1;
        var v236 = tempString$$1 + ", ";
        var v496 = matchPosition - shiftValue;
        var v237 = v496 + 1;
        tempString$$1 = v236 + v237
      }
      var v239 = matchExp;
      var v629 = matchExp.lastIndex;
      var v715 = RegExp.lastMatch;
      var v630 = v715.length;
      var v497 = v629 - v630;
      v239.lastIndex = v497 + 1;
      v240 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v498 = tempString$$1.search(/\d/);
    var v241 = v498 != -1;
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
    var v904 = '<tr><td class="' + backGroundClass;
    var v865 = v904 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v962 = arrayOfItems[i$$9]
    }
    var v936 = v962.match(/\([^\(]+\)/);
    var v905 = v936.toString();
    var v866 = v905.replace(/\(|\)/g, "");
    var v824 = v865 + v866;
    var v778 = v824 + '</td><td class="';
    var v716 = v778 + backGroundClass;
    var v631 = v716 + '">';
    var v499 = v631 + tempString$$1;
    var v247 = v499 + "</td></tr>\n";
    JAMScript.call(v246.write, v246, [v247]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v500 = arrayOfItems.length;
    v248 = i$$9 < v500
  }
  var v249 = outputWindow.document;
  JAMScript.call(v249.write, v249, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  JAMScript.call(v250.write, v250, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v251 = outputWindow.document;
  var v825 = '<tr><td class="title">' + "Pattern:";
  var v779 = v825 + '</td><td class="title">';
  var v717 = v779 + "Times found:";
  var v632 = v717 + '</td><td class="title">';
  var v501 = v632 + "Percentage:";
  var v252 = v501 + "</td></tr>\n";
  JAMScript.call(v251.write, v251, [v252]);
  var i$$10 = 0;
  var v502 = arrayOfItems$$1.length;
  var v261 = i$$10 < v502;
  for(;v261;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v503 = arrayOfItems$$1[i$$10]
    }
    var v253 = v503.match(/\/[^\/]+\//);
    var matchExp$$1 = v253 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v504 = sequence$$16.search(matchExp$$1);
    var v255 = v504 != -1;
    if(v255) {
      var v254 = sequence$$16.match(matchExp$$1);
      tempNumber = v254.length
    }
    var percentage = 0;
    var v633 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v780 = arrayOfItems$$1[i$$10]
    }
    var v718 = v780.match(/\d+/);
    var v634 = parseFloat(v718);
    var v505 = v633 - v634;
    var v258 = v505 > 0;
    if(v258) {
      var v256 = 100 * tempNumber;
      var v506 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v719 = arrayOfItems$$1[i$$10]
      }
      var v635 = v719.match(/\d+/);
      var v507 = parseFloat(v635);
      var v257 = v506 - v507;
      percentage = v256 / v257
    }
    var v259 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v963 = arrayOfItems$$1[i$$10]
    }
    var v937 = v963.match(/\([^\(]+\)\b/);
    var v906 = v937.toString();
    var v867 = v906.replace(/\(|\)/g, "");
    var v826 = "<tr><td>" + v867;
    var v781 = v826 + "</td><td>";
    var v720 = v781 + tempNumber;
    var v636 = v720 + "</td><td>";
    var v637 = percentage.toFixed(2);
    var v508 = v636 + v637;
    var v260 = v508 + "</td></tr>\n";
    JAMScript.call(v259.write, v259, [v260]);
    i$$10 = i$$10 + 1;
    var v509 = arrayOfItems$$1.length;
    v261 = i$$10 < v509
  }
  var v262 = outputWindow.document;
  JAMScript.call(v262.write, v262, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v510 = sequence$$17.length;
  var v269 = v510 > 0;
  for(;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v511 = Math.random();
    var v263 = v511 * maxNum$$1;
    randNum$$1 = Math.floor(v263);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v264, v265);
    sequence$$17 = tempString1 + tempString2;
    var v512 = tempSeq.length;
    var v268 = v512 == 60;
    if(v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      JAMScript.call(v266.write, v266, [v267]);
      tempSeq = ""
    }
    var v513 = sequence$$17.length;
    v269 = v513 > 0
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  JAMScript.call(v270.write, v270, [v271]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v638 = type$$25.toLowerCase();
  var v514 = v638 == "standard";
  var v640 = !v514;
  if(v640) {
    var v639 = type$$25.toLowerCase();
    v514 = v639 == "transl_table=1"
  }
  var v273 = v514;
  if(v273) {
    var v1146 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1129 = v1146 + "/ga[tcuy]/=D,";
    var v1112 = v1129 + "/ga[agr]/=E,";
    var v1094 = v1112 + "/[tu][tu][tcuy]/=F,";
    var v1075 = v1094 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1054 = v1075 + "/ca[tcuy]/=H,";
    var v1033 = v1054 + "/a[tu][atcuwmhy]/=I,";
    var v1012 = v1033 + "/aa[agr]/=K,";
    var v988 = v1012 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v964 = v988 + "/a[tu]g/=M,";
    var v938 = v964 + "/aa[tucy]/=N,";
    var v907 = v938 + "/cc[acgturyswkmbdhvn]/=P,";
    var v868 = v907 + "/ca[agr]/=Q,";
    var v827 = v868 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v782 = v827 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v721 = v782 + "/ac[acgturyswkmbdhvn]/=T,";
    var v641 = v721 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v515 = v641 + "/[tu]gg/=W,";
    var v272 = v515 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v516 = type$$25.toLowerCase();
  var v275 = v516 == "transl_table=2";
  if(v275) {
    var v1147 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1130 = v1147 + "/ga[tcuy]/=D,";
    var v1113 = v1130 + "/ga[agr]/=E,";
    var v1095 = v1113 + "/[tu][tu][tcuy]/=F,";
    var v1076 = v1095 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1055 = v1076 + "/ca[tcuy]/=H,";
    var v1034 = v1055 + "/a[tu][tcuy]/=I,";
    var v1013 = v1034 + "/aa[agr]/=K,";
    var v989 = v1013 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v965 = v989 + "/a[tu][agr]/=M,";
    var v939 = v965 + "/aa[tucy]/=N,";
    var v908 = v939 + "/cc[acgturyswkmbdhvn]/=P,";
    var v869 = v908 + "/ca[agr]/=Q,";
    var v828 = v869 + "/cg[acgturyswkmbdhvn]/=R,";
    var v783 = v828 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v722 = v783 + "/ac[acgturyswkmbdhvn]/=T,";
    var v642 = v722 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v517 = v642 + "/[tu]g[agr]/=W,";
    var v274 = v517 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v518 = type$$25.toLowerCase();
  var v277 = v518 == "transl_table=3";
  if(v277) {
    var v1148 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1131 = v1148 + "/ga[tcuy]/=D,";
    var v1114 = v1131 + "/ga[agr]/=E,";
    var v1096 = v1114 + "/[tu][tu][tcuy]/=F,";
    var v1077 = v1096 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1056 = v1077 + "/ca[tcuy]/=H,";
    var v1035 = v1056 + "/a[tu][tcuy]/=I,";
    var v1014 = v1035 + "/aa[agr]/=K,";
    var v990 = v1014 + "/[tu][tu][agr]/=L,";
    var v966 = v990 + "/a[tu][agr]/=M,";
    var v940 = v966 + "/aa[tucy]/=N,";
    var v909 = v940 + "/cc[acgturyswkmbdhvn]/=P,";
    var v870 = v909 + "/ca[agr]/=Q,";
    var v829 = v870 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v784 = v829 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v723 = v784 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v643 = v723 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v519 = v643 + "/[tu]g[agr]/=W,";
    var v276 = v519 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]a[agr]/=*"
  }
  var v520 = type$$25.toLowerCase();
  var v279 = v520 == "transl_table=4";
  if(v279) {
    var v1149 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1132 = v1149 + "/ga[tcuy]/=D,";
    var v1115 = v1132 + "/ga[agr]/=E,";
    var v1097 = v1115 + "/[tu][tu][tcuy]/=F,";
    var v1078 = v1097 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1057 = v1078 + "/ca[tcuy]/=H,";
    var v1036 = v1057 + "/a[tu][atcuwmhy]/=I,";
    var v1015 = v1036 + "/aa[agr]/=K,";
    var v991 = v1015 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v967 = v991 + "/a[tu]g/=M,";
    var v941 = v967 + "/aa[tucy]/=N,";
    var v910 = v941 + "/cc[acgturyswkmbdhvn]/=P,";
    var v871 = v910 + "/ca[agr]/=Q,";
    var v830 = v871 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v785 = v830 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v724 = v785 + "/ac[acgturyswkmbdhvn]/=T,";
    var v644 = v724 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v521 = v644 + "/[tu]g[agr]/=W,";
    var v278 = v521 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]a[agr]/=*"
  }
  var v522 = type$$25.toLowerCase();
  var v281 = v522 == "transl_table=5";
  if(v281) {
    var v1150 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1133 = v1150 + "/ga[tcuy]/=D,";
    var v1116 = v1133 + "/ga[agr]/=E,";
    var v1098 = v1116 + "/[tu][tu][tcuy]/=F,";
    var v1079 = v1098 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1058 = v1079 + "/ca[tcuy]/=H,";
    var v1037 = v1058 + "/a[tu][tcuy]/=I,";
    var v1016 = v1037 + "/aa[agr]/=K,";
    var v992 = v1016 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v968 = v992 + "/a[tu][agr]/=M,";
    var v942 = v968 + "/aa[tucy]/=N,";
    var v911 = v942 + "/cc[acgturyswkmbdhvn]/=P,";
    var v872 = v911 + "/ca[agr]/=Q,";
    var v831 = v872 + "/cg[acgturyswkmbdhvn]/=R,";
    var v786 = v831 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v725 = v786 + "/ac[acgturyswkmbdhvn]/=T,";
    var v645 = v725 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v523 = v645 + "/[tu]g[agr]/=W,";
    var v280 = v523 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*"
  }
  var v524 = type$$25.toLowerCase();
  var v283 = v524 == "transl_table=6";
  if(v283) {
    var v1151 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1134 = v1151 + "/ga[tcuy]/=D,";
    var v1117 = v1134 + "/ga[agr]/=E,";
    var v1099 = v1117 + "/[tu][tu][tcuy]/=F,";
    var v1080 = v1099 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1059 = v1080 + "/ca[tcuy]/=H,";
    var v1038 = v1059 + "/a[tu][atcuwmhy]/=I,";
    var v1017 = v1038 + "/aa[agr]/=K,";
    var v993 = v1017 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v969 = v993 + "/a[tu]g/=M,";
    var v943 = v969 + "/aa[tucy]/=N,";
    var v912 = v943 + "/cc[acgturyswkmbdhvn]/=P,";
    var v873 = v912 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v832 = v873 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v787 = v832 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v726 = v787 + "/ac[acgturyswkmbdhvn]/=T,";
    var v646 = v726 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v525 = v646 + "/[tu]gg/=W,";
    var v282 = v525 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]ga/=*"
  }
  var v526 = type$$25.toLowerCase();
  var v285 = v526 == "transl_table=9";
  if(v285) {
    var v1152 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1135 = v1152 + "/ga[tcuy]/=D,";
    var v1118 = v1135 + "/ga[agr]/=E,";
    var v1100 = v1118 + "/[tu][tu][tcuy]/=F,";
    var v1081 = v1100 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1060 = v1081 + "/ca[tcuy]/=H,";
    var v1039 = v1060 + "/a[tu][atcuwmhy]/=I,";
    var v1018 = v1039 + "/aag/=K,";
    var v994 = v1018 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v970 = v994 + "/a[tu]g/=M,";
    var v944 = v970 + "/aa[atcuwmhy]/=N,";
    var v913 = v944 + "/cc[acgturyswkmbdhvn]/=P,";
    var v874 = v913 + "/ca[agr]/=Q,";
    var v833 = v874 + "/cg[acgturyswkmbdhvn]/=R,";
    var v788 = v833 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v727 = v788 + "/ac[acgturyswkmbdhvn]/=T,";
    var v647 = v727 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v527 = v647 + "/[tu]g[agr]/=W,";
    var v284 = v527 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]/=*"
  }
  var v528 = type$$25.toLowerCase();
  var v287 = v528 == "transl_table=10";
  if(v287) {
    var v1153 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1136 = v1153 + "/ga[tcuy]/=D,";
    var v1119 = v1136 + "/ga[agr]/=E,";
    var v1101 = v1119 + "/[tu][tu][tcuy]/=F,";
    var v1082 = v1101 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1061 = v1082 + "/ca[tcuy]/=H,";
    var v1040 = v1061 + "/a[tu][atcuwmhy]/=I,";
    var v1019 = v1040 + "/aa[agr]/=K,";
    var v995 = v1019 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v971 = v995 + "/a[tu]g/=M,";
    var v945 = v971 + "/aa[tucy]/=N,";
    var v914 = v945 + "/cc[acgturyswkmbdhvn]/=P,";
    var v875 = v914 + "/ca[agr]/=Q,";
    var v834 = v875 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v789 = v834 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v728 = v789 + "/ac[acgturyswkmbdhvn]/=T,";
    var v648 = v728 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v529 = v648 + "/[tu]gg/=W,";
    var v286 = v529 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]/=*"
  }
  var v530 = type$$25.toLowerCase();
  var v289 = v530 == "transl_table=11";
  if(v289) {
    var v1154 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1137 = v1154 + "/ga[tcuy]/=D,";
    var v1120 = v1137 + "/ga[agr]/=E,";
    var v1102 = v1120 + "/[tu][tu][tcuy]/=F,";
    var v1083 = v1102 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1062 = v1083 + "/ca[tcuy]/=H,";
    var v1041 = v1062 + "/a[tu][atcuwmhy]/=I,";
    var v1020 = v1041 + "/aa[agr]/=K,";
    var v996 = v1020 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v972 = v996 + "/a[tu]g/=M,";
    var v946 = v972 + "/aa[tucy]/=N,";
    var v915 = v946 + "/cc[acgturyswkmbdhvn]/=P,";
    var v876 = v915 + "/ca[agr]/=Q,";
    var v835 = v876 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v790 = v835 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v729 = v790 + "/ac[acgturyswkmbdhvn]/=T,";
    var v649 = v729 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v531 = v649 + "/[tu]gg/=W,";
    var v288 = v531 + "/[tu]a[ctuy]/=Y,";
    return v288 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v532 = type$$25.toLowerCase();
  var v291 = v532 == "transl_table=12";
  if(v291) {
    var v1155 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1138 = v1155 + "/ga[tcuy]/=D,";
    var v1121 = v1138 + "/ga[agr]/=E,";
    var v1103 = v1121 + "/[tu][tu][tcuy]/=F,";
    var v1084 = v1103 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1063 = v1084 + "/ca[tcuy]/=H,";
    var v1042 = v1063 + "/a[tu][atcuwmhy]/=I,";
    var v1021 = v1042 + "/aa[agr]/=K,";
    var v997 = v1021 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v973 = v997 + "/a[tu]g/=M,";
    var v947 = v973 + "/aa[tucy]/=N,";
    var v916 = v947 + "/cc[acgturyswkmbdhvn]/=P,";
    var v877 = v916 + "/ca[agr]/=Q,";
    var v836 = v877 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v791 = v836 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v730 = v791 + "/ac[acgturyswkmbdhvn]/=T,";
    var v650 = v730 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v533 = v650 + "/[tu]gg/=W,";
    var v290 = v533 + "/[tu]a[ctuy]/=Y,";
    return v290 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v534 = type$$25.toLowerCase();
  var v293 = v534 == "transl_table=13";
  if(v293) {
    var v1156 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1139 = v1156 + "/ga[tcuy]/=D,";
    var v1122 = v1139 + "/ga[agr]/=E,";
    var v1104 = v1122 + "/[tu][tu][tcuy]/=F,";
    var v1085 = v1104 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1064 = v1085 + "/ca[tcuy]/=H,";
    var v1043 = v1064 + "/a[tu][tcuy]/=I,";
    var v1022 = v1043 + "/aa[agr]/=K,";
    var v998 = v1022 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v974 = v998 + "/a[tu][agr]/=M,";
    var v948 = v974 + "/aa[tucy]/=N,";
    var v917 = v948 + "/cc[acgturyswkmbdhvn]/=P,";
    var v878 = v917 + "/ca[agr]/=Q,";
    var v837 = v878 + "/cg[acgturyswkmbdhvn]/=R,";
    var v792 = v837 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v731 = v792 + "/ac[acgturyswkmbdhvn]/=T,";
    var v651 = v731 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v535 = v651 + "/[tu]g[agr]/=W,";
    var v292 = v535 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu]a[agr]/=*"
  }
  var v536 = type$$25.toLowerCase();
  var v295 = v536 == "transl_table=14";
  if(v295) {
    var v1157 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1140 = v1157 + "/ga[tcuy]/=D,";
    var v1123 = v1140 + "/ga[agr]/=E,";
    var v1105 = v1123 + "/[tu][tu][tcuy]/=F,";
    var v1086 = v1105 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1065 = v1086 + "/ca[tcuy]/=H,";
    var v1044 = v1065 + "/a[tu][atcuwmhy]/=I,";
    var v1023 = v1044 + "/aag/=K,";
    var v999 = v1023 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v975 = v999 + "/a[tu]g/=M,";
    var v949 = v975 + "/aa[atcuwmhy]/=N,";
    var v918 = v949 + "/cc[acgturyswkmbdhvn]/=P,";
    var v879 = v918 + "/ca[agr]/=Q,";
    var v838 = v879 + "/cg[acgturyswkmbdhvn]/=R,";
    var v793 = v838 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v732 = v793 + "/ac[acgturyswkmbdhvn]/=T,";
    var v652 = v732 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v537 = v652 + "/[tu]g[agr]/=W,";
    var v294 = v537 + "/[tu]a[atcuwmhy]/=Y,";
    return v294 + "/[tu]ag/=*"
  }
  var v538 = type$$25.toLowerCase();
  var v297 = v538 == "transl_table=15";
  if(v297) {
    var v1158 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1141 = v1158 + "/ga[tcuy]/=D,";
    var v1124 = v1141 + "/ga[agr]/=E,";
    var v1106 = v1124 + "/[tu][tu][tcuy]/=F,";
    var v1087 = v1106 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1066 = v1087 + "/ca[tcuy]/=H,";
    var v1045 = v1066 + "/a[tu][atcuwmhy]/=I,";
    var v1024 = v1045 + "/aa[agr]/=K,";
    var v1000 = v1024 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v976 = v1000 + "/a[tu]g/=M,";
    var v950 = v976 + "/aa[tucy]/=N,";
    var v919 = v950 + "/cc[acgturyswkmbdhvn]/=P,";
    var v880 = v919 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v839 = v880 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v794 = v839 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v733 = v794 + "/ac[acgturyswkmbdhvn]/=T,";
    var v653 = v733 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v539 = v653 + "/[tu]gg/=W,";
    var v296 = v539 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu][agr]a/=*"
  }
  var v540 = type$$25.toLowerCase();
  var v299 = v540 == "transl_table=16";
  if(v299) {
    var v1159 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1142 = v1159 + "/ga[tcuy]/=D,";
    var v1125 = v1142 + "/ga[agr]/=E,";
    var v1107 = v1125 + "/[tu][tu][tcuy]/=F,";
    var v1088 = v1107 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1067 = v1088 + "/ca[tcuy]/=H,";
    var v1046 = v1067 + "/a[tu][atcuwmhy]/=I,";
    var v1025 = v1046 + "/aa[agr]/=K,";
    var v1001 = v1025 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v977 = v1001 + "/a[tu]g/=M,";
    var v951 = v977 + "/aa[tucy]/=N,";
    var v920 = v951 + "/cc[acgturyswkmbdhvn]/=P,";
    var v881 = v920 + "/ca[agr]/=Q,";
    var v840 = v881 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v795 = v840 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v734 = v795 + "/ac[acgturyswkmbdhvn]/=T,";
    var v654 = v734 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v541 = v654 + "/[tu]gg/=W,";
    var v298 = v541 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu][agr]a/=*"
  }
  var v542 = type$$25.toLowerCase();
  var v301 = v542 == "transl_table=21";
  if(v301) {
    var v1160 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1143 = v1160 + "/ga[tcuy]/=D,";
    var v1126 = v1143 + "/ga[agr]/=E,";
    var v1108 = v1126 + "/[tu][tu][tcuy]/=F,";
    var v1089 = v1108 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1068 = v1089 + "/ca[tcuy]/=H,";
    var v1047 = v1068 + "/a[tu][tcuy]/=I,";
    var v1026 = v1047 + "/aag/=K,";
    var v1002 = v1026 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v978 = v1002 + "/a[tu][agr]/=M,";
    var v952 = v978 + "/aa[atcuwmhy]/=N,";
    var v921 = v952 + "/cc[acgturyswkmbdhvn]/=P,";
    var v882 = v921 + "/ca[agr]/=Q,";
    var v841 = v882 + "/cg[acgturyswkmbdhvn]/=R,";
    var v796 = v841 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v735 = v796 + "/ac[acgturyswkmbdhvn]/=T,";
    var v655 = v735 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v543 = v655 + "/[tu]g[agr]/=W,";
    var v300 = v543 + "/[tu]a[ctuy]/=Y,";
    return v300 + "/[tu]a[agr]/=*"
  }
  var v544 = type$$25.toLowerCase();
  var v303 = v544 == "transl_table=22";
  if(v303) {
    var v1161 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1144 = v1161 + "/ga[tcuy]/=D,";
    var v1127 = v1144 + "/ga[agr]/=E,";
    var v1109 = v1127 + "/[tu][tu][tcuy]/=F,";
    var v1090 = v1109 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1069 = v1090 + "/ca[tcuy]/=H,";
    var v1048 = v1069 + "/a[tu][atcuwmhy]/=I,";
    var v1027 = v1048 + "/aa[agr]/=K,";
    var v1003 = v1027 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v979 = v1003 + "/a[tu]g/=M,";
    var v953 = v979 + "/aa[tucy]/=N,";
    var v922 = v953 + "/cc[acgturyswkmbdhvn]/=P,";
    var v883 = v922 + "/ca[agr]/=Q,";
    var v842 = v883 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v797 = v842 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v736 = v797 + "/ac[acgturyswkmbdhvn]/=T,";
    var v656 = v736 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v545 = v656 + "/[tu]gg/=W,";
    var v302 = v545 + "/[tu]a[ctuy]/=Y,";
    return v302 + "/[tu][agcrsmv]a/=*"
  }
  var v546 = type$$25.toLowerCase();
  var v305 = v546 == "transl_table=23";
  if(v305) {
    var v1162 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1145 = v1162 + "/ga[tcuy]/=D,";
    var v1128 = v1145 + "/ga[agr]/=E,";
    var v1110 = v1128 + "/[tu][tu][tcuy]/=F,";
    var v1091 = v1110 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1070 = v1091 + "/ca[tcuy]/=H,";
    var v1049 = v1070 + "/a[tu][atcuwmhy]/=I,";
    var v1028 = v1049 + "/aa[agr]/=K,";
    var v1004 = v1028 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v980 = v1004 + "/a[tu]g/=M,";
    var v954 = v980 + "/aa[tucy]/=N,";
    var v923 = v954 + "/cc[acgturyswkmbdhvn]/=P,";
    var v884 = v923 + "/ca[agr]/=Q,";
    var v843 = v884 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v798 = v843 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v737 = v798 + "/ac[acgturyswkmbdhvn]/=T,";
    var v657 = v737 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v547 = v657 + "/[tu]gg/=W,";
    var v304 = v547 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function translateDna(theDocument) {
  translate(theDocument);
  return true
}
function translate(theDocument$$1) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v548 = testScript();
  var v306 = v548 == false;
  if(v306) {
    return false
  }
  var v885 = theDocument$$1.forms;
  var v844 = v885[0];
  var v799 = v844.elements;
  var v738 = v799[6];
  var v658 = v738.options;
  var v886 = theDocument$$1.forms;
  var v845 = v886[0];
  var v800 = v845.elements;
  var v739 = v800[6];
  var v659 = v739.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v549 = v658[v659]
  }
  var v307 = v549.value;
  var geneticCode = getGeneticCodeString(v307);
  var v887 = theDocument$$1.forms;
  var v846 = v887[0];
  var v801 = v846.elements;
  var v740 = v801[0];
  var v660 = checkFormElement(v740);
  var v550 = v660 == false;
  var v662 = !v550;
  if(v662) {
    var v924 = theDocument$$1.forms;
    var v888 = v924[0];
    var v847 = v888.elements;
    var v802 = v847[0];
    var v741 = v802.value;
    var v661 = checkSequenceLength(v741, maxInput$$3);
    v550 = v661 == false
  }
  var v308 = v550;
  if(v308) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v551 = checkGeneticCode(geneticCode);
  var v309 = v551 == false;
  if(v309) {
    return false
  }
  var v848 = theDocument$$1.forms;
  var v803 = v848[0];
  var v742 = v803.elements;
  var v663 = v742[4];
  var v552 = v663.options;
  var v849 = theDocument$$1.forms;
  var v804 = v849[0];
  var v743 = v804.elements;
  var v664 = v743[4];
  var v553 = v664.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v310 = v552[v553]
  }
  var rfText = v310.value;
  var v925 = theDocument$$1.forms;
  var v889 = v925[0];
  var v850 = v889.elements;
  var v805 = v850[4];
  var v744 = v805.options;
  var v926 = theDocument$$1.forms;
  var v890 = v926[0];
  var v851 = v890.elements;
  var v806 = v851[4];
  var v745 = v806.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v665 = v744[v745]
  }
  var v554 = v665.value;
  var v312 = v554.match(/^\d+$/);
  if(v312) {
    rfText = rfText + 1
  }else {
    var v927 = theDocument$$1.forms;
    var v891 = v927[0];
    var v852 = v891.elements;
    var v807 = v852[4];
    var v746 = v807.options;
    var v928 = theDocument$$1.forms;
    var v892 = v928[0];
    var v853 = v892.elements;
    var v808 = v853[4];
    var v747 = v808.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v666 = v746[v747]
    }
    var v555 = v666.value;
    var v311 = '"' + v555;
    rfText = v311 + '"'
  }
  openWindow("Translate");
  openPre();
  var v809 = theDocument$$1.forms;
  var v748 = v809[0];
  var v667 = v748.elements;
  var v556 = v667[0];
  var v313 = v556.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v313);
  var i$$11 = 0;
  var v557 = arrayOfFasta$$1.length;
  var v321 = i$$11 < v557;
  for(;v321;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v314 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v314);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v315 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v315);
    newDna = removeNonDna(newDna);
    var v316 = outputWindow.document;
    var v749 = "&gt;rf " + rfText;
    var v668 = v749 + " ";
    var v558 = v668 + title$$9;
    var v317 = v558 + "\n";
    JAMScript.call(v316.write, v316, [v317]);
    var v893 = theDocument$$1.forms;
    var v854 = v893[0];
    var v810 = v854.elements;
    var v750 = v810[4];
    var v669 = v750.options;
    var v894 = theDocument$$1.forms;
    var v855 = v894[0];
    var v811 = v855.elements;
    var v751 = v811[4];
    var v670 = v751.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v559 = v669[v670]
    }
    var v318 = v559.value;
    var v895 = theDocument$$1.forms;
    var v856 = v895[0];
    var v812 = v856.elements;
    var v752 = v812[5];
    var v671 = v752.options;
    var v896 = theDocument$$1.forms;
    var v857 = v896[0];
    var v813 = v857.elements;
    var v753 = v813[5];
    var v672 = v753.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = v671[v672]
    }
    var v319 = v560.value;
    writeTranslation(newDna, geneticCode, v318, v319);
    var v320 = outputWindow.document;
    JAMScript.call(v320.write, v320, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v561 = arrayOfFasta$$1.length;
    v321 = i$$11 < v561
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeTranslation(dnaSequence$$3, geneticCode$$1, startPos, strand) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v322 = " " + p1$$2;
    return v322 + " "
  }
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var v324 = strand == "reverse";
  if(v324) {
    var v323 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v323)
  }
  var v327 = startPos == "uppercase";
  if(v327) {
    dnaSequence$$3 = dnaSequence$$3.replace(/[a-z]/g, "")
  }else {
    var v325 = parseInt(startPos);
    var v326 = dnaSequence$$3.length;
    dnaSequence$$3 = dnaSequence$$3.substring(v325, v326)
  }
  var v673 = dnaSequence$$3.replace(/[^A-Za-z]/g, "");
  var v562 = v673.length;
  var v328 = v562 < 3;
  if(v328) {
    return""
  }
  dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2);
  var i$$12 = 0;
  var v563 = geneticCodeMatchExp$$2.length;
  var v331 = i$$12 < v563;
  for(;v331;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v329 = geneticCodeMatchExp$$2[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v330 = geneticCodeMatchResult$$2[i$$12]
    }
    dnaSequence$$3 = dnaSequence$$3.replace(v329, v330);
    i$$12 = i$$12 + 1;
    var v564 = geneticCodeMatchExp$$2.length;
    v331 = i$$12 < v564
  }
  dnaSequence$$3 = dnaSequence$$3.replace(/\S{3}/g, "X");
  dnaSequence$$3 = dnaSequence$$3.replace(/\s\S{1,2}$/, "");
  dnaSequence$$3 = dnaSequence$$3.replace(/\s/g, "");
  var v332 = outputWindow.document;
  var v333 = addReturns(dnaSequence$$3);
  JAMScript.call(v332.write, v332, [v333]);
  return true
}
JAMScript.set(document, "onload", v3);
var v334 = document.getElementById("submitbtn");
JAMScript.set(v334, "onclick", v4);
var v335 = document.getElementById("clearbtn");
JAMScript.set(v335, "onclick", v5);

JAM.stopProfile('load');
