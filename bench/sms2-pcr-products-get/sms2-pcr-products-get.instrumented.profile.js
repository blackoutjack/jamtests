
JAM.startProfile('load');
function v4() {
  var v707 = document.forms;
  var v572 = v707[0];
  var v329 = v572.elements;
  var v5 = v329[0];
  v5.value = " ";
  var v708 = document.forms;
  var v573 = v708[0];
  var v330 = v573.elements;
  var v6 = v330[1];
  v6.value = " ";
  var v709 = document.forms;
  var v574 = v709[0];
  var v331 = v574.elements;
  var v7 = v331[2];
  v7.value = " ";
  var v710 = document.forms;
  var v575 = v710[0];
  var v332 = v575.elements;
  var v8 = v332[3];
  v8.value = " ";
  var v711 = document.forms;
  var v576 = v711[0];
  var v333 = v576.elements;
  var v9 = v333[4];
  v9.value = " ";
  return
}
function v3() {
  try {
    pcrProducts(document)
  }catch(e$$7) {
    var v10 = "The following error was encountered: " + e$$7;
    alert(v10)
  }
  return
}
function v2() {
  var v334 = document.main_form;
  var v11 = v334.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v335 = arrayOfSequences.length;
  var v13 = v335 < 2;
  if(v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v336 = arrayOfTitles.length;
  var v15 = i$$1 < v336;
  for(;v15;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v712 = arrayOfTitles[i$$1]
    }
    var v577 = v712.search(/\S/);
    var v337 = v577 == -1;
    var v579 = !v337;
    if(v579) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v805 = arrayOfSequences[i$$1]
      }
      var v713 = v805.search(/\S/);
      var v578 = v713 == -1;
      var v715 = !v578;
      if(v715) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v806 = arrayOfSequences[i$$1]
        }
        var v714 = v806.length;
        v578 = v714 != lengthOfAlign
      }
      v337 = v578
    }
    var v14 = v337;
    if(v14) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v338 = arrayOfTitles.length;
    v15 = i$$1 < v338
  }
  return true
}
function checkCodonTable(codonTable) {
  var v580 = codonTable.search(/AmAcid/);
  var v339 = v580 == -1;
  var v582 = !v339;
  if(v582) {
    var v716 = codonTable.search(/Codon/);
    var v581 = v716 == -1;
    var v718 = !v581;
    if(v718) {
      var v807 = codonTable.search(/Number/);
      var v717 = v807 == -1;
      var v809 = !v717;
      if(v809) {
        var v877 = codonTable.search(/\/1000/);
        var v808 = v877 == -1;
        var v879 = !v808;
        if(v879) {
          var v878 = codonTable.search(/Fraction\s*\.\./);
          v808 = v878 == -1
        }
        v717 = v808
      }
      v581 = v717
    }
    v339 = v581
  }
  var v16 = v339;
  if(v16) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v583 = formElement.value;
  var v340 = v583.search(/\S/);
  var v17 = v340 == -1;
  if(v17) {
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
  var v341 = arrayOfPatterns.length;
  var v20 = z$$2 < v341;
  for(;v20;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = arrayOfPatterns[z$$2]
    }
    var v342 = v584.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v18 = v342 == -1;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = arrayOfPatterns[z$$2]
    }
    var v343 = moreExpressionCheck(v585);
    var v19 = v343 == false;
    if(v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v344 = arrayOfPatterns.length;
    v20 = z$$2 < v344
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v345 = arrayOfPatterns.length;
  var v29 = j < v345;
  for(;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v719 = arrayOfPatterns[j]
    }
    var v586 = v719.match(/\/.+\//);
    var v346 = v586 + "gi";
    var v1044 = eval(v346);
    v23[v24] = v1044;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = arrayOfPatterns[j]
    }
    var v347 = v587.match(/=[a-zA-Z\*]/);
    var v1045 = v347.toString();
    v25[v26] = v1045;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v348 = geneticCodeMatchResult[j]
    }
    var v1046 = v348.replace(/=/g, "");
    v27[v28] = v1046;
    j = j + 1;
    var v349 = arrayOfPatterns.length;
    v29 = j < v349
  }
  var i$$2 = 0;
  var v588 = testSequence.length;
  var v350 = v588 - 3;
  var v36 = i$$2 <= v350;
  for(;v36;) {
    var v30 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v30);
    j = 0;
    var v351 = geneticCodeMatchExp.length;
    var v34 = j < v351;
    for(;v34;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v589 = geneticCodeMatchExp[j]
      }
      var v352 = codon.search(v589);
      var v33 = v352 != -1;
      if(v33) {
        var v32 = oneMatch == true;
        if(v32) {
          var v353 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v31 = v353 + ".";
          alert(v31);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v354 = geneticCodeMatchExp.length;
      v34 = j < v354
    }
    var v35 = oneMatch == false;
    if(v35) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v590 = testSequence.length;
    var v355 = v590 - 3;
    v36 = i$$2 <= v355
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v356 = arrayOfPatterns$$1.length;
  var v38 = z$$3 < v356;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v591 = arrayOfPatterns$$1[z$$3]
    }
    var v357 = v591.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v37 = v357 != -1;
    if(v37) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v358 = arrayOfPatterns$$1.length;
    v38 = z$$3 < v358
  }
  var i$$3 = 0;
  var v359 = arrayOfPatterns$$1.length;
  var v42 = i$$3 < v359;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v592 = arrayOfPatterns$$1[i$$3]
    }
    var v360 = "[" + v592;
    var v39 = v360 + "]";
    var re = new RegExp(v39, "gi");
    var j$$1 = i$$3 + 1;
    var v361 = arrayOfPatterns$$1.length;
    var v41 = j$$1 < v361;
    for(;v41;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v593 = arrayOfPatterns$$1[j$$1]
      }
      var v362 = v593.search(re);
      var v40 = v362 != -1;
      if(v40) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v363 = arrayOfPatterns$$1.length;
      v41 = j$$1 < v363
    }
    i$$3 = i$$3 + 1;
    var v364 = arrayOfPatterns$$1.length;
    v42 = i$$3 < v364
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v365 = arrayOfPatterns$$2.length;
  var v45 = z$$4 < v365;
  for(;v45;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v594 = arrayOfPatterns$$2[z$$4]
    }
    var v366 = v594.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v43 = v366 == -1;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v595 = arrayOfPatterns$$2[z$$4]
    }
    var v367 = moreExpressionCheck(v595);
    var v44 = v367 == false;
    if(v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v368 = arrayOfPatterns$$2.length;
    v45 = z$$4 < v368
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v720 = getSequenceFromFasta(text$$7);
  var v596 = v720.replace(/[^A-Za-z]/g, "");
  var v369 = v596.length;
  var v47 = v369 > maxInput;
  if(v47) {
    var v370 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v46 = v370 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v371 = text$$8.length;
  var v49 = v371 > maxInput$$1;
  if(v49) {
    var v372 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v48 = v372 + " characters.";
    alert(v48);
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
  var v50 = outputWindow.document;
  v50.write("</form>");
  return true
}
function closePre() {
  var v51 = outputWindow.document;
  v51.write("</div>");
  var v52 = outputWindow.document;
  v52.write("</pre>\n");
  return
}
function closeTextArea() {
  var v53 = outputWindow.document;
  v53.write("</textarea>");
  return true
}
function closeWindow() {
  var v54 = outputWindow.document;
  v54.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v55 = outputWindow.document;
  v55.close();
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
  var v373 = alignArray.length;
  var v56 = v373 < 3;
  if(v56) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v374 = alignArray.length;
  var v58 = i$$4 < v374;
  for(;v58;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v597 = alignArray[i$$4]
    }
    var v375 = v597.search(/[^\s]+\s/);
    var v57 = v375 == -1;
    if(v57) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v376 = alignArray.length;
    v58 = i$$4 < v376
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
  var v377 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v61 = v377 != -1;
  if(v61) {
    var v60 = matchArray = re$$1.exec(sequenceData);
    for(;v60;) {
      var v59 = matchArray[0];
      arrayOfFasta.push(v59);
      v60 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v378 = sequence$$2.length;
  var v62 = "&gt;results for " + v378;
  var stringToReturn = v62 + " residue sequence ";
  var v379 = fastaSequenceTitle.search(/[^\s]/);
  var v64 = v379 != -1;
  if(v64) {
    var v380 = stringToReturn + '"';
    var v63 = v380 + fastaSequenceTitle;
    stringToReturn = v63 + '"'
  }
  var v381 = stringToReturn + ' starting "';
  var v382 = sequence$$2.substring(0, 10);
  var v65 = v381 + v382;
  stringToReturn = v65 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v383 = sequenceOne.length;
  var v66 = "Search results for " + v383;
  var stringToReturn$$1 = v66 + " residue sequence ";
  var v384 = fastaSequenceTitleOne.search(/[^\s]/);
  var v68 = v384 != -1;
  if(v68) {
    var v385 = stringToReturn$$1 + '"';
    var v67 = v385 + fastaSequenceTitleOne;
    stringToReturn$$1 = v67 + '"'
  }
  var v386 = stringToReturn$$1 + ' starting "';
  var v387 = sequenceOne.substring(0, 10);
  var v69 = v386 + v387;
  stringToReturn$$1 = v69 + '"\n';
  var v388 = stringToReturn$$1 + "and ";
  var v389 = sequenceTwo.length;
  var v70 = v388 + v389;
  stringToReturn$$1 = v70 + " residue sequence ";
  var v390 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v72 = v390 != -1;
  if(v72) {
    var v391 = stringToReturn$$1 + '"';
    var v71 = v391 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v71 + '"'
  }
  var v392 = stringToReturn$$1 + ' starting "';
  var v393 = sequenceTwo.substring(0, 10);
  var v73 = v392 + v393;
  stringToReturn$$1 = v73 + '"';
  var v74 = '<div class="info">' + stringToReturn$$1;
  return v74 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v75 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v75);
  var j$$2 = 0;
  var v394 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v394;
  for(;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v721 = arrayOfPatterns$$3[j$$2]
    }
    var v598 = v721.match(/\/.+\//);
    var v395 = v598 + "gi";
    var v1047 = eval(v395);
    v76[v77] = v1047;
    j$$2 = j$$2 + 1;
    var v396 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v396
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v397 = arrayOfPatterns$$4.length;
  var v84 = j$$3 < v397;
  for(;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v599 = arrayOfPatterns$$4[j$$3]
    }
    var v398 = v599.match(/=[a-zA-Z\*]/);
    var v1048 = v398.toString();
    v80[v81] = v1048;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v399 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1049 = v399.replace(/=/g, "");
    v82[v83] = v1049;
    j$$3 = j$$3 + 1;
    var v400 = arrayOfPatterns$$4.length;
    v84 = j$$3 < v400
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v401 = sequence$$3.length;
  var v85 = "Results for " + v401;
  var stringToReturn$$2 = v85 + " residue sequence ";
  var v402 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v87 = v402 != -1;
  if(v87) {
    var v403 = stringToReturn$$2 + '"';
    var v86 = v403 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v86 + '"'
  }
  var v404 = stringToReturn$$2 + ' starting "';
  var v405 = sequence$$3.substring(0, 10);
  var v88 = v404 + v405;
  stringToReturn$$2 = v88 + '"';
  var v89 = '<div class="info">' + stringToReturn$$2;
  return v89 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v600 = "Results for " + topology;
  var v406 = v600 + " ";
  var v407 = sequence$$4.length;
  var v90 = v406 + v407;
  var stringToReturn$$3 = v90 + " residue sequence ";
  var v408 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v92 = v408 != -1;
  if(v92) {
    var v409 = stringToReturn$$3 + '"';
    var v91 = v409 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v91 + '"'
  }
  var v410 = stringToReturn$$3 + ' starting "';
  var v411 = sequence$$4.substring(0, 10);
  var v93 = v410 + v411;
  stringToReturn$$3 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$3;
  return v94 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v412 = sequenceOne$$1.length;
  var v95 = "Alignment results for " + v412;
  var stringToReturn$$4 = v95 + " residue sequence ";
  var v413 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v97 = v413 != -1;
  if(v97) {
    var v414 = stringToReturn$$4 + '"';
    var v96 = v414 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v415 = stringToReturn$$4 + ' starting "';
  var v416 = sequenceOne$$1.substring(0, 10);
  var v98 = v415 + v416;
  stringToReturn$$4 = v98 + '"\n';
  var v417 = stringToReturn$$4 + "and ";
  var v418 = sequenceTwo$$1.length;
  var v99 = v417 + v418;
  stringToReturn$$4 = v99 + " residue sequence ";
  var v419 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v101 = v419 != -1;
  if(v101) {
    var v420 = stringToReturn$$4 + '"';
    var v100 = v420 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v421 = stringToReturn$$4 + ' starting "';
  var v422 = sequenceTwo$$1.substring(0, 10);
  var v102 = v421 + v422;
  stringToReturn$$4 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$4;
  return v103 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for(;v105;) {
    var v423 = Math.random();
    var v424 = components.length;
    var v104 = v423 * v424;
    tempNum = Math.floor(v104);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v425 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v425 != -1;
  if(v106) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v426 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v108 = v426 != -1;
  if(v108) {
    var v107 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v107.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v601 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v427 = v601 != -1;
  var v603 = !v427;
  if(v603) {
    var v722 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v602 = v722 != -1;
    var v724 = !v602;
    if(v724) {
      var v810 = expressionToCheck.search(/\[\]/);
      var v723 = v810 != -1;
      var v812 = !v723;
      if(v812) {
        var v880 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v811 = v880 != -1;
        var v882 = !v811;
        if(v882) {
          var v925 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v881 = v925 != -1;
          var v927 = !v881;
          if(v927) {
            var v959 = expressionToCheck.search(/\|\|/);
            var v926 = v959 != -1;
            var v961 = !v926;
            if(v961) {
              var v977 = expressionToCheck.search(/\/\|/);
              var v960 = v977 != -1;
              var v979 = !v960;
              if(v979) {
                var v993 = expressionToCheck.search(/\|\//);
                var v978 = v993 != -1;
                var v995 = !v978;
                if(v995) {
                  var v1006 = expressionToCheck.search(/\[.\]/);
                  var v994 = v1006 != -1;
                  var v1008 = !v994;
                  if(v1008) {
                    var v1017 = expressionToCheck.search(/\</);
                    var v1007 = v1017 != -1;
                    var v1019 = !v1007;
                    if(v1019) {
                      var v1018 = expressionToCheck.search(/\>/);
                      v1007 = v1018 != -1
                    }
                    v994 = v1007
                  }
                  v978 = v994
                }
                v960 = v978
              }
              v926 = v960
            }
            v881 = v926
          }
          v811 = v881
        }
        v723 = v811
      }
      v602 = v723
    }
    v427 = v602
  }
  var v109 = v427;
  if(v109) {
    return false
  }
  return true
}
function openForm() {
  var v110 = outputWindow.document;
  v110.write('<form action="">\n');
  return true
}
function openPre() {
  var v111 = outputWindow.document;
  v111.write("<pre>");
  var v112 = outputWindow.document;
  v112.write('<div class="pre">');
  return
}
function openTextArea() {
  var v113 = outputWindow.document;
  v113.write('<br /><textarea rows="6" cols="61">\n');
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
  var v114 = outputWindow.document;
  var v725 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v604 = v725 + "<head>\n";
  var v428 = v604 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v428 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v114.write(v115);
  if(isColor) {
    var v116 = outputWindow.document;
    var v1035 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1030 = v1035 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1025 = v1030 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1020 = v1025 + "div.info {font-weight: bold}\n";
    var v1009 = v1020 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v996 = v1009 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v980 = v996 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v962 = v980 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v928 = v962 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v883 = v928 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v813 = v883 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v813 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v605 = v726 + "td.many {color: #000000}\n";
    var v429 = v605 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v117 = v429 + "</style>\n";
    v116.write(v117)
  }else {
    var v118 = outputWindow.document;
    var v1040 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1036 = v1040 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1031 = v1036 + "div.title {display: none}\n";
    var v1026 = v1031 + "div.info {font-weight: bold}\n";
    var v1021 = v1026 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1010 = v1021 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v997 = v1010 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v981 = v997 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v963 = v981 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v929 = v963 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v884 = v929 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v814 = v884 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v727 = v814 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v727 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v430 = v606 + "img {display: none}\n";
    var v119 = v430 + "</style>\n";
    v118.write(v119)
  }
  var v120 = outputWindow.document;
  var v728 = "</head>\n" + '<body class="main">\n';
  var v607 = v728 + '<div class="title">';
  var v431 = v607 + title$$7;
  var v121 = v431 + " results</div>\n";
  v120.write(v121);
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
  var v122 = outputWindow.document;
  var v729 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v608 = v729 + "<head>\n";
  var v432 = v608 + "<title>Sequence Manipulation Suite</title>\n";
  var v123 = v432 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v122.write(v123);
  if(isBackground) {
    var v124 = outputWindow.document;
    var v1037 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1032 = v1037 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1027 = v1032 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1022 = v1027 + "div.info {font-weight: bold}\n";
    var v1011 = v1022 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v998 = v1011 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v982 = v998 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v964 = v982 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v930 = v964 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v885 = v930 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v815 = v885 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v730 = v815 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v609 = v730 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v433 = v609 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v125 = v433 + "</style>\n";
    v124.write(v125)
  }else {
    var v126 = outputWindow.document;
    var v1043 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1041 = v1043 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1038 = v1041 + "div.title {display: none}\n";
    var v1033 = v1038 + "div.info {font-weight: bold}\n";
    var v1028 = v1033 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1023 = v1028 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1012 = v1023 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v999 = v1012 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v983 = v999 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v965 = v983 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v931 = v965 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v886 = v931 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v816 = v886 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v731 = v816 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v610 = v731 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v434 = v610 + "img {display: none}\n";
    var v127 = v434 + "</style>\n";
    v126.write(v127)
  }
  var v128 = outputWindow.document;
  var v732 = "</head>\n" + '<body class="main">\n';
  var v611 = v732 + '<div class="title">';
  var v435 = v611 + title$$9;
  var v129 = v435 + " results</div>\n";
  v128.write(v129);
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
  var v436 = dnaSequence$$1.search(/./);
  var v130 = v436 != -1;
  if(v130) {
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
  var v131 = j$$5 < lengthOfColumn;
  for(;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn
  }
  var v132 = tempString + theNumber;
  theNumber = v132 + " ";
  var v133 = sequenceToAppend + theNumber;
  sequenceToAppend = v133 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v437 = testArray[0];
  var v134 = v437 != testString;
  if(v134) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v438 = testString.search(re$$2);
  var v135 = v438 == -1;
  if(v135) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v136 = !caughtException;
  if(v136) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v137 = testString != "1X2X3X";
  if(v137) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v439 = testNum.toFixed(3);
  var v138 = v439 != 2489.824;
  if(v138) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v440 = testNum.toPrecision(5);
  var v139 = v440 != 2489.8;
  if(v139) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v441 = theNumber$$1.search(/\d/);
  var v140 = v441 == -1;
  if(v140) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v612 = emblFile.search(/ID/);
  var v442 = v612 == -1;
  var v614 = !v442;
  if(v614) {
    var v733 = emblFile.search(/AC/);
    var v613 = v733 == -1;
    var v735 = !v613;
    if(v735) {
      var v817 = emblFile.search(/DE/);
      var v734 = v817 == -1;
      var v819 = !v734;
      if(v819) {
        var v818 = emblFile.search(/SQ/);
        v734 = v818 == -1
      }
      v613 = v734
    }
    v442 = v613
  }
  var v141 = v442;
  if(v141) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v443 = theNumber$$2.search(/\d/);
  var v142 = v443 == -1;
  if(v142) {
    alert("Please enter a number.");
    return false
  }
  var v144 = theNumber$$2 > maxInput$$2;
  if(v144) {
    var v444 = "Please enter a number less than or equal to " + maxInput$$2;
    var v143 = v444 + ".";
    alert(v143);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v445 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v145 = v445 != -1;
  if(v145) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v446 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v146 = v446 != -1;
  if(v146) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v615 = genBankFile.search(/LOCUS/);
  var v447 = v615 == -1;
  var v617 = !v447;
  if(v617) {
    var v736 = genBankFile.search(/DEFINITION/);
    var v616 = v736 == -1;
    var v738 = !v616;
    if(v738) {
      var v820 = genBankFile.search(/ACCESSION/);
      var v737 = v820 == -1;
      var v822 = !v737;
      if(v822) {
        var v821 = genBankFile.search(/ORIGIN/);
        v737 = v821 == -1
      }
      v616 = v737
    }
    v447 = v616
  }
  var v147 = v447;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v618 = genBankFile$$1.search(/LOCUS/);
  var v448 = v618 == -1;
  var v620 = !v448;
  if(v620) {
    var v739 = genBankFile$$1.search(/DEFINITION/);
    var v619 = v739 == -1;
    var v741 = !v619;
    if(v741) {
      var v823 = genBankFile$$1.search(/ACCESSION/);
      var v740 = v823 == -1;
      var v825 = !v740;
      if(v825) {
        var v824 = genBankFile$$1.search(/ORIGIN/);
        v740 = v824 == -1
      }
      v619 = v740
    }
    v448 = v619
  }
  var v148 = v448;
  if(v148) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v449 = genBankFile$$1.search(/FEATURES {13}/);
  var v149 = v449 == -1;
  if(v149) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v621 = emblFile$$1.search(/ID/);
  var v450 = v621 == -1;
  var v623 = !v450;
  if(v623) {
    var v742 = emblFile$$1.search(/AC/);
    var v622 = v742 == -1;
    var v744 = !v622;
    if(v744) {
      var v826 = emblFile$$1.search(/DE/);
      var v743 = v826 == -1;
      var v828 = !v743;
      if(v828) {
        var v827 = emblFile$$1.search(/SQ/);
        v743 = v827 == -1
      }
      v622 = v743
    }
    v450 = v622
  }
  var v150 = v450;
  if(v150) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v451 = emblFile$$1.search(/^FT/m);
  var v151 = v451 == -1;
  if(v151) {
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
  var v158 = i$$5 < stopBase;
  for(;v158;) {
    var v152 = i$$5 + 1;
    lineOfText = rightNum(v152, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v452 = basePerLine / groupSize;
    var v155 = j$$6 <= v452;
    for(;v155;) {
      var v154 = k < groupSize;
      for(;v154;) {
        var v453 = k + i$$5;
        var v153 = text$$10.charAt(v453);
        lineOfText = lineOfText + v153;
        k = k + 1;
        v154 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v454 = basePerLine / groupSize;
      v155 = j$$6 <= v454
    }
    var v156 = outputWindow.document;
    var v157 = lineOfText + "\n";
    v156.write(v157);
    lineOfText = "";
    v158 = i$$5 < stopBase
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
    var v455 = adjustment < 0;
    if(v455) {
      v455 = adjusted >= 0
    }
    var v159 = v455;
    if(v159) {
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v456 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v456;
    for(;v166;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v457 = i$$6 + k$$1;
        var v160 = v457 >= stopBase$$2;
        if(v160) {
          break
        }
        var v458 = k$$1 + i$$6;
        var v161 = text$$12.charAt(v458);
        lineOfText$$1 = lineOfText$$1 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v459 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v459, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v460 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v460
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v745 = adjustNumbering(lineNum, numberingAdjustment);
      var v624 = rightNum(v745, "", 8, tabIn$$3);
      var v461 = v624 + lineOfText$$1;
      var v168 = v461 + "\n";
      v167.write(v168);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v746 = adjustNumbering(lineNum, numberingAdjustment);
        var v625 = rightNum(v746, "", 8, tabIn$$3);
        var v626 = complement(lineOfText$$1);
        var v462 = v625 + v626;
        var v170 = v462 + "\n";
        v169.write(v170);
        var v171 = outputWindow.document;
        v171.write("\n")
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v627 = adjustNumbering(i$$6, numberingAdjustment);
        var v463 = lineOfText$$1 + v627;
        var v174 = v463 + "\n";
        v173.write(v174);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v628 = complement(lineOfText$$1);
          var v629 = adjustNumbering(i$$6, numberingAdjustment);
          var v464 = v628 + v629;
          var v176 = v464 + "\n";
          v175.write(v176);
          var v177 = outputWindow.document;
          v177.write("\n")
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          v179.write(v180);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          v181.write(v182);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v465 = complement(lineOfText$$1);
            var v184 = v465 + "\n";
            v183.write(v184);
            var v185 = outputWindow.document;
            v185.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
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
  var v209 = i$$7 < stopBase$$3;
  for(;v209;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v466 = basePerLine$$3 / groupSize$$3;
    var v197 = j$$8 <= v466;
    for(;v197;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v467 = i$$7 + k$$2;
        var v191 = v467 >= stopBase$$3;
        if(v191) {
          break
        }
        var v468 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v468);
        lineOfText$$2 = lineOfText$$2 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v195 = numberPosition$$2 == "above";
      if(v195) {
        var v194 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v194
      }
      var v196 = i$$7 >= stopBase$$3;
      if(v196) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v469 = basePerLine$$3 / groupSize$$3;
      v197 = j$$8 <= v469
    }
    var v208 = numberPosition$$2 == "left";
    if(v208) {
      var v198 = outputWindow.document;
      var v630 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v470 = v630 + lineOfText$$2;
      var v199 = v470 + "\n";
      v198.write(v199)
    }else {
      var v207 = numberPosition$$2 == "right";
      if(v207) {
        var v200 = outputWindow.document;
        var v471 = lineOfText$$2 + i$$7;
        var v201 = v471 + "\n";
        v200.write(v201)
      }else {
        var v206 = numberPosition$$2 == "above";
        if(v206) {
          var v202 = outputWindow.document;
          var v203 = aboveNum$$1 + "\n";
          v202.write(v203);
          var v204 = outputWindow.document;
          var v205 = lineOfText$$2 + "\n";
          v204.write(v205)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v209 = i$$7 < stopBase$$3
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
  var v631 = sequence$$13.length;
  var v472 = v631 <= firstIndexToMutate;
  var v633 = !v472;
  if(v633) {
    var v632 = lastIndexToMutate < 0;
    var v747 = !v632;
    if(v747) {
      v632 = lastIndexToMutate <= firstIndexToMutate
    }
    v472 = v632
  }
  var v210 = v472;
  if(v210) {
    numMut = 0
  }
  var i$$8 = 0;
  var v218 = i$$8 < numMut;
  for(;v218;) {
    maxNum = sequence$$13.length;
    var v473 = Math.random();
    var v211 = v473 * maxNum;
    randNum = Math.floor(v211);
    var v474 = randNum < firstIndexToMutate;
    var v634 = !v474;
    if(v634) {
      v474 = randNum > lastIndexToMutate
    }
    var v212 = v474;
    if(v212) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v218 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v475 = Math.random();
      var v476 = components$$1.length;
      var v213 = v475 * v476;
      componentsIndex = Math.round(v213);
      var v477 = components$$1.length;
      var v214 = componentsIndex == v477;
      if(v214) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v478 = components$$1[componentsIndex]
      }
      var v215 = v478 != currentChar;
      if(v215) {
        needNewChar = false
      }
    }
    var v479 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = components$$1[componentsIndex]
    }
    var v216 = v479 + v480;
    var v481 = randNum + 1;
    var v482 = sequence$$13.length;
    var v217 = sequence$$13.substring(v481, v482);
    sequence$$13 = v216 + v217;
    i$$8 = i$$8 + 1;
    v218 = i$$8 < numMut
  }
  var v219 = outputWindow.document;
  var v220 = addReturns(sequence$$13);
  v219.write(v220);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v225 = j$$9 < lengthOut$$1;
  for(;v225;) {
    var v483 = Math.random();
    var v484 = components$$2.length;
    var v221 = v483 * v484;
    tempNum$$1 = Math.floor(v221);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v485 = sequence$$14.length;
    var v224 = v485 == 60;
    if(v224) {
      var v222 = outputWindow.document;
      var v223 = sequence$$14 + "\n";
      v222.write(v223);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v225 = j$$9 < lengthOut$$1
  }
  var v226 = outputWindow.document;
  var v227 = sequence$$14 + "\n";
  v226.write(v227);
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
  var v231 = dnaConformation == "circular";
  if(v231) {
    var v228 = sequence$$15.substring(0, lookAhead);
    shiftValue = v228.length;
    var v748 = sequence$$15.length;
    var v635 = v748 - lookAhead;
    var v636 = sequence$$15.length;
    var v486 = sequence$$15.substring(v635, v636);
    var v229 = v486 + sequence$$15;
    var v230 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v229 + v230;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v232 = outputWindow.document;
  v232.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v233 = outputWindow.document;
  var v749 = '<tr><td class="title" width="200px">' + "Site:";
  var v637 = v749 + '</td><td class="title">';
  var v487 = v637 + "Positions:";
  var v234 = v487 + "</td></tr>\n";
  v233.write(v234);
  var i$$9 = 0;
  var v488 = arrayOfItems.length;
  var v250 = i$$9 < v488;
  for(;v250;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfItems[i$$9]
    }
    var v235 = v489.match(/\/.+\//);
    matchExp = v235 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v750 = arrayOfItems[i$$9]
    }
    var v638 = v750.match(/\)\D*\d+/);
    var v490 = v638.toString();
    var v236 = v490.replace(/\)\D*/, "");
    cutDistance = parseFloat(v236);
    var v242 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v242;) {
      var v237 = matchExp.lastIndex;
      matchPosition = v237 - cutDistance;
      var v491 = matchPosition >= lowerLimit;
      if(v491) {
        v491 = matchPosition < upperLimit
      }
      var v240 = v491;
      if(v240) {
        timesFound = timesFound + 1;
        var v238 = tempString$$1 + ", ";
        var v492 = matchPosition - shiftValue;
        var v239 = v492 + 1;
        tempString$$1 = v238 + v239
      }
      var v241 = matchExp;
      var v639 = matchExp.lastIndex;
      var v751 = RegExp.lastMatch;
      var v640 = v751.length;
      var v493 = v639 - v640;
      v241.lastIndex = v493 + 1;
      v242 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v494 = tempString$$1.search(/\d/);
    var v243 = v494 != -1;
    if(v243) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v247 = timesFound == 0;
    if(v247) {
      backGroundClass = "none"
    }else {
      var v246 = timesFound == 1;
      if(v246) {
        backGroundClass = "one"
      }else {
        var v245 = timesFound == 2;
        if(v245) {
          backGroundClass = "two"
        }else {
          var v244 = timesFound == 3;
          if(v244) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v248 = outputWindow.document;
    var v966 = '<tr><td class="' + backGroundClass;
    var v932 = v966 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1000 = arrayOfItems[i$$9]
    }
    var v984 = v1000.match(/\([^\(]+\)/);
    var v967 = v984.toString();
    var v933 = v967.replace(/\(|\)/g, "");
    var v887 = v932 + v933;
    var v829 = v887 + '</td><td class="';
    var v752 = v829 + backGroundClass;
    var v641 = v752 + '">';
    var v495 = v641 + tempString$$1;
    var v249 = v495 + "</td></tr>\n";
    v248.write(v249);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v496 = arrayOfItems.length;
    v250 = i$$9 < v496
  }
  var v251 = outputWindow.document;
  v251.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v252 = outputWindow.document;
  v252.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v253 = outputWindow.document;
  var v888 = '<tr><td class="title">' + "Pattern:";
  var v830 = v888 + '</td><td class="title">';
  var v753 = v830 + "Times found:";
  var v642 = v753 + '</td><td class="title">';
  var v497 = v642 + "Percentage:";
  var v254 = v497 + "</td></tr>\n";
  v253.write(v254);
  var i$$10 = 0;
  var v498 = arrayOfItems$$1.length;
  var v263 = i$$10 < v498;
  for(;v263;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfItems$$1[i$$10]
    }
    var v255 = v499.match(/\/[^\/]+\//);
    var matchExp$$1 = v255 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v500 = sequence$$16.search(matchExp$$1);
    var v257 = v500 != -1;
    if(v257) {
      var v256 = sequence$$16.match(matchExp$$1);
      tempNumber = v256.length
    }
    var percentage = 0;
    var v643 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v831 = arrayOfItems$$1[i$$10]
    }
    var v754 = v831.match(/\d+/);
    var v644 = parseFloat(v754);
    var v501 = v643 - v644;
    var v260 = v501 > 0;
    if(v260) {
      var v258 = 100 * tempNumber;
      var v502 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v755 = arrayOfItems$$1[i$$10]
      }
      var v645 = v755.match(/\d+/);
      var v503 = parseFloat(v645);
      var v259 = v502 - v503;
      percentage = v258 / v259
    }
    var v261 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1001 = arrayOfItems$$1[i$$10]
    }
    var v985 = v1001.match(/\([^\(]+\)\b/);
    var v968 = v985.toString();
    var v934 = v968.replace(/\(|\)/g, "");
    var v889 = "<tr><td>" + v934;
    var v832 = v889 + "</td><td>";
    var v756 = v832 + tempNumber;
    var v646 = v756 + "</td><td>";
    var v647 = percentage.toFixed(2);
    var v504 = v646 + v647;
    var v262 = v504 + "</td></tr>\n";
    v261.write(v262);
    i$$10 = i$$10 + 1;
    var v505 = arrayOfItems$$1.length;
    v263 = i$$10 < v505
  }
  var v264 = outputWindow.document;
  v264.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v506 = sequence$$17.length;
  var v271 = v506 > 0;
  for(;v271;) {
    maxNum$$1 = sequence$$17.length;
    var v507 = Math.random();
    var v265 = v507 * maxNum$$1;
    randNum$$1 = Math.floor(v265);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v266 = randNum$$1 + 1;
    var v267 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v266, v267);
    sequence$$17 = tempString1 + tempString2;
    var v508 = tempSeq.length;
    var v270 = v508 == 60;
    if(v270) {
      var v268 = outputWindow.document;
      var v269 = tempSeq + "\n";
      v268.write(v269);
      tempSeq = ""
    }
    var v509 = sequence$$17.length;
    v271 = v509 > 0
  }
  var v272 = outputWindow.document;
  var v273 = tempSeq + "\n";
  v272.write(v273);
  return true
}
function pcrProducts(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v510 = testScript();
  var v274 = v510 == false;
  if(v274) {
    return false
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v935 = theDocument.forms;
  var v890 = v935[0];
  var v833 = v890.elements;
  var v757 = v833[0];
  var v648 = checkFormElement(v757);
  var v511 = v648 == false;
  var v650 = !v511;
  if(v650) {
    var v986 = theDocument.forms;
    var v969 = v986[0];
    var v936 = v969.elements;
    var v891 = v936[0];
    var v834 = v891.value;
    var v758 = checkSequenceLength(v834, maxInput$$3);
    var v649 = v758 == false;
    var v760 = !v649;
    if(v760) {
      var v987 = theDocument.forms;
      var v970 = v987[0];
      var v937 = v970.elements;
      var v892 = v937[1];
      var v835 = checkFormElement(v892);
      var v759 = v835 == false;
      var v837 = !v759;
      if(v837) {
        var v1002 = theDocument.forms;
        var v988 = v1002[0];
        var v971 = v988.elements;
        var v938 = v971[2];
        var v893 = checkFormElement(v938);
        var v836 = v893 == false;
        var v895 = !v836;
        if(v895) {
          var v1013 = theDocument.forms;
          var v1003 = v1013[0];
          var v989 = v1003.elements;
          var v972 = v989[3];
          var v939 = checkFormElement(v972);
          var v894 = v939 == false;
          var v941 = !v894;
          if(v941) {
            var v1014 = theDocument.forms;
            var v1004 = v1014[0];
            var v990 = v1004.elements;
            var v973 = v990[4];
            var v940 = checkFormElement(v973);
            v894 = v940 == false
          }
          v836 = v894
        }
        v759 = v836
      }
      v649 = v759
    }
    v511 = v649
  }
  var v275 = v511;
  if(v275) {
    return false
  }
  var v974 = theDocument.forms;
  var v942 = v974[0];
  var v896 = v942.elements;
  var v838 = v896[2];
  var v761 = v838.value;
  var v651 = v761.replace(/[^A-Za-z]/g, "");
  var v512 = v651.length;
  var v276 = v512 < 10;
  if(v276) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  var v975 = theDocument.forms;
  var v943 = v975[0];
  var v897 = v943.elements;
  var v839 = v897[4];
  var v762 = v839.value;
  var v652 = v762.replace(/[^A-Za-z]/g, "");
  var v513 = v652.length;
  var v277 = v513 < 10;
  if(v277) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  var v898 = theDocument.forms;
  var v840 = v898[0];
  var v763 = v840.elements;
  var v653 = v763[2];
  var v514 = v653.value;
  var v278 = v514.replace(/[^A-Za-z]/g, "");
  var primerOne = convertDegenerates(v278);
  var v899 = theDocument.forms;
  var v841 = v899[0];
  var v764 = v841.elements;
  var v654 = v764[4];
  var v515 = v654.value;
  var v279 = v515.replace(/[^A-Za-z]/g, "");
  var primerTwo = convertDegenerates(v279);
  try {
    var v516 = "/" + primerOne;
    var v280 = v516 + "/gi";
    re$$3 = eval(v280);
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return false
  }
  try {
    var v517 = "/" + primerTwo;
    var v281 = v517 + "/gi";
    re$$3 = eval(v281);
    testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return false
  }
  var v765 = "/" + primerOne;
  var v655 = v765 + "/gi";
  var v518 = eval(v655);
  var v900 = theDocument.forms;
  var v842 = v900[0];
  var v766 = v842.elements;
  var v656 = v766[1];
  var v519 = v656.value;
  var v282 = new Primer(v518, v519);
  primers.push(v282);
  var v767 = "/" + primerTwo;
  var v657 = v767 + "/gi";
  var v520 = eval(v657);
  var v901 = theDocument.forms;
  var v843 = v901[0];
  var v768 = v843.elements;
  var v658 = v768[3];
  var v521 = v658.value;
  var v283 = new Primer(v520, v521);
  primers.push(v283);
  var v844 = theDocument.forms;
  var v769 = v844[0];
  var v659 = v769.elements;
  var v522 = v659[0];
  var v284 = v522.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v284);
  var i$$11 = 0;
  var v523 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v523;
  for(;v291;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v285 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v285);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v286 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v286);
    newDna = removeNonDna(newDna);
    var v944 = theDocument.forms;
    var v902 = v944[0];
    var v845 = v902.elements;
    var v770 = v845[8];
    var v660 = v770.options;
    var v945 = theDocument.forms;
    var v903 = v945[0];
    var v846 = v903.elements;
    var v771 = v846[8];
    var v661 = v771.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v524 = v660[v661]
    }
    var v287 = v524.value;
    forwardMatches = findMatches(primers, newDna, v287);
    var v525 = complement(newDna);
    var v288 = reverse(v525);
    var v946 = theDocument.forms;
    var v904 = v946[0];
    var v847 = v904.elements;
    var v772 = v847[8];
    var v662 = v772.options;
    var v947 = theDocument.forms;
    var v905 = v947[0];
    var v848 = v905.elements;
    var v773 = v848[8];
    var v663 = v773.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v526 = v662[v663]
    }
    var v289 = v526.value;
    reverseMatches = findMatches(primers, v288, v289);
    var v948 = theDocument.forms;
    var v906 = v948[0];
    var v849 = v906.elements;
    var v774 = v849[8];
    var v664 = v774.options;
    var v949 = theDocument.forms;
    var v907 = v949[0];
    var v850 = v907.elements;
    var v775 = v850[8];
    var v665 = v775.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v527 = v664[v665]
    }
    var v290 = v527.value;
    makePcrProducts(newDna, title, forwardMatches, reverseMatches, v290, pcrProducts$$1);
    i$$11 = i$$11 + 1;
    var v528 = arrayOfFasta$$1.length;
    v291 = i$$11 < v528
  }
  pcrProducts$$1.sort(pcrProductSorter);
  openWindow("PCR Products");
  openPre();
  i$$11 = 0;
  var v529 = pcrProducts$$1.length;
  var v294 = i$$11 < v529;
  for(;v294;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v292 = pcrProducts$$1[i$$11]
    }
    var v950 = theDocument.forms;
    var v908 = v950[0];
    var v851 = v908.elements;
    var v776 = v851[8];
    var v666 = v776.options;
    var v951 = theDocument.forms;
    var v909 = v951[0];
    var v852 = v909.elements;
    var v777 = v852[8];
    var v667 = v777.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = v666[v667]
    }
    var v293 = v530.value;
    v292.writeProduct(v293);
    i$$11 = i$$11 + 1;
    var v531 = pcrProducts$$1.length;
    v294 = i$$11 < v531
  }
  var v532 = pcrProducts$$1.length;
  var v296 = v532 == 0;
  if(v296) {
    var v295 = outputWindow.document;
    v295.write("No PCR products were obtained.\n\n")
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  var v313 = topology$$1 == "circular";
  if(v313) {
    var lookAhead$$1 = 50;
    var v297 = sequence$$18.substring(0, lookAhead$$1);
    var shiftValue$$1 = v297.length;
    var v298 = sequence$$18.length;
    var upperLimit$$1 = v298 + shiftValue$$1;
    var v778 = sequence$$18.length;
    var v668 = v778 - lookAhead$$1;
    var v669 = sequence$$18.length;
    var v533 = sequence$$18.substring(v668, v669);
    var v299 = v533 + sequence$$18;
    var v300 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v299 + v300;
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v534 = primers$$1.length;
    var v307 = i$$12 < v534;
    for(;v307;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v301 = primers$$1[i$$12]
      }
      re$$4 = v301.re;
      var v306 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v306;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v535 = matchPosition$$1 >= lowerLimit$$1;
        if(v535) {
          v535 = matchPosition$$1 < upperLimit$$1
        }
        var v304 = v535;
        if(v304) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          var v302 = matchPosition$$1 == 0;
          if(v302) {
            matchPosition$$1 = originalLength$$1
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v670 = primers$$1[i$$12]
          }
          var v536 = v670.name;
          var v537 = matchArray$$2[0];
          var v303 = new Match(v536, v537, matchPosition$$1);
          arrayOfMatches.push(v303)
        }
        var v305 = re$$4;
        var v671 = re$$4.lastIndex;
        var v779 = RegExp.lastMatch;
        var v672 = v779.length;
        var v538 = v671 - v672;
        v305.lastIndex = v538 + 1;
        v306 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      var v539 = primers$$1.length;
      v307 = i$$12 < v539
    }
  }else {
    i$$12 = 0;
    var v540 = primers$$1.length;
    var v312 = i$$12 < v540;
    for(;v312;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v308 = primers$$1[i$$12]
      }
      re$$4 = v308.re;
      var v311 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v311;) {
        matchPosition$$1 = re$$4.lastIndex;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v673 = primers$$1[i$$12]
        }
        var v541 = v673.name;
        var v542 = matchArray$$2[0];
        var v309 = new Match(v541, v542, matchPosition$$1);
        arrayOfMatches.push(v309);
        var v310 = re$$4;
        var v674 = re$$4.lastIndex;
        var v780 = RegExp.lastMatch;
        var v675 = v780.length;
        var v543 = v674 - v675;
        v310.lastIndex = v543 + 1;
        v311 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      var v544 = primers$$1.length;
      v312 = i$$12 < v544
    }
  }
  return arrayOfMatches
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v545 = forwardMatches$$1.length;
  var v319 = i$$13 < v545;
  for(;v319;) {
    var j$$10 = 0;
    var v546 = reverseMatches$$1.length;
    var v318 = j$$10 < v546;
    for(;v318;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v781 = forwardMatches$$1[i$$13]
      }
      var v676 = v781.positionAfter;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v853 = forwardMatches$$1[i$$13]
      }
      var v782 = v853.matchingText;
      var v677 = v782.length;
      var v547 = v676 - v677;
      var v678 = newDna$$1.length;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v783 = reverseMatches$$1[j$$10]
      }
      var v679 = v783.positionAfter;
      var v548 = v678 - v679;
      var v317 = v547 <= v548;
      if(v317) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v854 = forwardMatches$$1[i$$13]
        }
        var v784 = v854.positionAfter;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v910 = forwardMatches$$1[i$$13]
        }
        var v855 = v910.matchingText;
        var v785 = v855.length;
        var v680 = v784 - v785;
        var v549 = v680 + 1;
        var v786 = newDna$$1.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v856 = reverseMatches$$1[j$$10]
        }
        var v787 = v856.positionAfter;
        var v681 = v786 - v787;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v857 = reverseMatches$$1[j$$10]
        }
        var v788 = v857.matchingText;
        var v682 = v788.length;
        var v550 = v681 + v682;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v683 = forwardMatches$$1[i$$13]
        }
        var v551 = v683.primerName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v684 = reverseMatches$$1[j$$10]
        }
        var v552 = v684.primerName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v685 = forwardMatches$$1[i$$13]
        }
        var v553 = v685.name;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v686 = reverseMatches$$1[j$$10]
        }
        var v554 = v686.name;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v858 = forwardMatches$$1[i$$13]
        }
        var v789 = v858.positionAfter;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v911 = forwardMatches$$1[i$$13]
        }
        var v859 = v911.matchingText;
        var v790 = v859.length;
        var v687 = v789 - v790;
        var v860 = newDna$$1.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v912 = reverseMatches$$1[j$$10]
        }
        var v861 = v912.positionAfter;
        var v791 = v860 - v861;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v913 = reverseMatches$$1[j$$10]
        }
        var v862 = v913.matchingText;
        var v792 = v862.length;
        var v688 = v791 + v792;
        var v555 = newDna$$1.substring(v687, v688);
        var v314 = new PcrProduct(title$$10, v549, v550, v551, v552, v553, v554, v555);
        pcrProducts$$2.push(v314)
      }else {
        var v556 = topology$$2 == "circular";
        if(v556) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v863 = forwardMatches$$1[i$$13]
          }
          var v793 = v863.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v914 = forwardMatches$$1[i$$13]
          }
          var v864 = v914.matchingText;
          var v794 = v864.length;
          var v689 = v793 - v794;
          var v915 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v952 = reverseMatches$$1[j$$10]
          }
          var v916 = v952.positionAfter;
          var v865 = v915 - v916;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v953 = reverseMatches$$1[j$$10]
          }
          var v917 = v953.matchingText;
          var v866 = v917.length;
          var v795 = v865 + v866;
          var v690 = v795 - 1;
          v556 = v689 > v690
        }
        var v316 = v556;
        if(v316) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v867 = forwardMatches$$1[i$$13]
          }
          var v796 = v867.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v918 = forwardMatches$$1[i$$13]
          }
          var v868 = v918.matchingText;
          var v797 = v868.length;
          var v691 = v796 - v797;
          var v557 = v691 + 1;
          var v798 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v869 = reverseMatches$$1[j$$10]
          }
          var v799 = v869.positionAfter;
          var v692 = v798 - v799;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v870 = reverseMatches$$1[j$$10]
          }
          var v800 = v870.matchingText;
          var v693 = v800.length;
          var v558 = v692 + v693;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v694 = forwardMatches$$1[i$$13]
          }
          var v559 = v694.primerName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v695 = reverseMatches$$1[j$$10]
          }
          var v560 = v695.primerName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v696 = forwardMatches$$1[i$$13]
          }
          var v561 = v696.name;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v697 = reverseMatches$$1[j$$10]
          }
          var v562 = v697.name;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v919 = forwardMatches$$1[i$$13]
          }
          var v871 = v919.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v954 = forwardMatches$$1[i$$13]
          }
          var v920 = v954.matchingText;
          var v872 = v920.length;
          var v801 = v871 - v872;
          var v802 = newDna$$1.length;
          var v698 = newDna$$1.substring(v801, v802);
          var v921 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v955 = reverseMatches$$1[j$$10]
          }
          var v922 = v955.positionAfter;
          var v873 = v921 - v922;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v956 = reverseMatches$$1[j$$10]
          }
          var v923 = v956.matchingText;
          var v874 = v923.length;
          var v803 = v873 + v874;
          var v699 = newDna$$1.substring(0, v803);
          var v563 = v698 + v699;
          var v315 = new PcrProduct(title$$10, v557, v558, v559, v560, v561, v562, v563);
          pcrProducts$$2.push(v315)
        }
      }
      j$$10 = j$$10 + 1;
      var v564 = reverseMatches$$1.length;
      v318 = j$$10 < v564
    }
    i$$13 = i$$13 + 1;
    var v565 = forwardMatches$$1.length;
    v319 = i$$13 < v565
  }
  return
}
function writeProduct(topology$$3) {
  var v320 = outputWindow.document;
  var v1042 = this.sequence;
  var v1039 = v1042.length;
  var v1034 = "&gt;" + v1039;
  var v1029 = v1034 + " bp product from ";
  var v1024 = v1029 + topology$$3;
  var v1015 = v1024 + " template ";
  var v1016 = this.template;
  var v1005 = v1015 + v1016;
  var v991 = v1005 + ", base ";
  var v992 = this.start;
  var v976 = v991 + v992;
  var v957 = v976 + " to base ";
  var v958 = this.stop;
  var v924 = v957 + v958;
  var v875 = v924 + " (";
  var v876 = this.forwardName;
  var v804 = v875 + v876;
  var v700 = v804 + " - ";
  var v701 = this.reverseName;
  var v566 = v700 + v701;
  var v321 = v566 + ").\n";
  v320.write(v321);
  var v322 = outputWindow.document;
  var v702 = this.sequence;
  var v567 = addReturns(v702);
  var v323 = v567 + "\n\n";
  v322.write(v323);
  return
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return
}
function Primer(re$$5, name$$32) {
  this.re = re$$5;
  this.name = name$$32;
  return
}
function pcrProductSorter(a, b) {
  var v703 = a.sequence;
  var v568 = v703.length;
  var v704 = b.sequence;
  var v569 = v704.length;
  var v324 = v568 < v569;
  if(v324) {
    return 1
  }
  var v705 = a.sequence;
  var v570 = v705.length;
  var v706 = b.sequence;
  var v571 = v706.length;
  var v325 = v570 > v571;
  if(v325) {
    return-1
  }else {
    return 0
  }
  return
}
new PcrProduct("", 0, 0, "", "", "", "", "");
var v326 = PcrProduct.prototype;
v326.writeProduct = writeProduct;
document.onload = v2;
var v327 = document.getElementById("submitbtn");
v327.onclick = v3;
var v328 = document.getElementById("clearbtn");
v328.onclick = v4;

JAM.stopProfile('load');
