
JAM.startProfile('load');
function v4() {
  var v732 = document.forms;
  var v607 = v732[0];
  var v356 = v607.elements;
  var v5 = v356[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    restDigest(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v357 = document.main_form;
  var v7 = v357.main_submit;
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
  var v358 = arrayOfSequences.length;
  var v9 = v358 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v359 = arrayOfTitles.length;
  var v11 = i$$1 < v359;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v733 = arrayOfTitles[i$$1]
    }
    var v608 = v733.search(/\S/);
    var v360 = v608 == -1;
    var v610 = !v360;
    if(v610) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v807 = arrayOfSequences[i$$1]
      }
      var v734 = v807.search(/\S/);
      var v609 = v734 == -1;
      var v736 = !v609;
      if(v736) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v808 = arrayOfSequences[i$$1]
        }
        var v735 = v808.length;
        v609 = v735 != lengthOfAlign
      }
      v360 = v609
    }
    var v10 = v360;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v361 = arrayOfTitles.length;
    v11 = i$$1 < v361
  }
  return true
}
function checkCodonTable(codonTable) {
  var v611 = codonTable.search(/AmAcid/);
  var v362 = v611 == -1;
  var v613 = !v362;
  if(v613) {
    var v737 = codonTable.search(/Codon/);
    var v612 = v737 == -1;
    var v739 = !v612;
    if(v739) {
      var v809 = codonTable.search(/Number/);
      var v738 = v809 == -1;
      var v811 = !v738;
      if(v811) {
        var v860 = codonTable.search(/\/1000/);
        var v810 = v860 == -1;
        var v862 = !v810;
        if(v862) {
          var v861 = codonTable.search(/Fraction\s*\.\./);
          v810 = v861 == -1
        }
        v738 = v810
      }
      v612 = v738
    }
    v362 = v612
  }
  var v12 = v362;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v614 = formElement.value;
  var v363 = v614.search(/\S/);
  var v13 = v363 == -1;
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
  var v364 = arrayOfPatterns.length;
  var v16 = z$$2 < v364;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v615 = arrayOfPatterns[z$$2]
    }
    var v365 = v615.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v365 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v616 = arrayOfPatterns[z$$2]
    }
    var v366 = moreExpressionCheck(v616);
    var v15 = v366 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v367 = arrayOfPatterns.length;
    v16 = z$$2 < v367
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v368 = arrayOfPatterns.length;
  var v25 = j < v368;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v740 = arrayOfPatterns[j]
    }
    var v617 = v740.match(/\/.+\//);
    var v369 = v617 + "gi";
    var v985 = eval(v369);
    v19[v20] = v985;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = arrayOfPatterns[j]
    }
    var v370 = v618.match(/=[a-zA-Z\*]/);
    var v986 = v370.toString();
    v21[v22] = v986;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v371 = geneticCodeMatchResult[j]
    }
    var v987 = v371.replace(/=/g, "");
    v23[v24] = v987;
    j = j + 1;
    var v372 = arrayOfPatterns.length;
    v25 = j < v372
  }
  var i$$2 = 0;
  var v619 = testSequence.length;
  var v373 = v619 - 3;
  var v32 = i$$2 <= v373;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v374 = geneticCodeMatchExp.length;
    var v30 = j < v374;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v620 = geneticCodeMatchExp[j]
      }
      var v375 = codon.search(v620);
      var v29 = v375 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v376 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v376 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v377 = geneticCodeMatchExp.length;
      v30 = j < v377
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v621 = testSequence.length;
    var v378 = v621 - 3;
    v32 = i$$2 <= v378
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v379 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v379;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v622 = arrayOfPatterns$$1[z$$3]
    }
    var v380 = v622.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v380 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v381 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v381
  }
  var i$$3 = 0;
  var v382 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v382;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = arrayOfPatterns$$1[i$$3]
    }
    var v383 = "[" + v623;
    var v35 = v383 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v384 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v384;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v624 = arrayOfPatterns$$1[j$$1]
      }
      var v385 = v624.search(re);
      var v36 = v385 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v386 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v386
    }
    i$$3 = i$$3 + 1;
    var v387 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v387
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v388 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v388;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v625 = arrayOfPatterns$$2[z$$4]
    }
    var v389 = v625.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v389 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v626 = arrayOfPatterns$$2[z$$4]
    }
    var v390 = moreExpressionCheck(v626);
    var v40 = v390 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v391 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v391
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v741 = getSequenceFromFasta(text$$7);
  var v627 = v741.replace(/[^A-Za-z]/g, "");
  var v392 = v627.length;
  var v43 = v392 > maxInput;
  if(v43) {
    var v393 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v393 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v394 = text$$8.length;
  var v45 = v394 > maxInput$$1;
  if(v45) {
    var v395 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v395 + " characters.";
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
  var v396 = alignArray.length;
  var v52 = v396 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v397 = alignArray.length;
  var v54 = i$$4 < v397;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = alignArray[i$$4]
    }
    var v398 = v628.search(/[^\s]+\s/);
    var v53 = v398 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v399 = alignArray.length;
    v54 = i$$4 < v399
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
  var v400 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v400 != -1;
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
  var v401 = sequence$$2.length;
  var v58 = "&gt;results for " + v401;
  var stringToReturn = v58 + " residue sequence ";
  var v402 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v402 != -1;
  if(v60) {
    var v403 = stringToReturn + '"';
    var v59 = v403 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v404 = stringToReturn + ' starting "';
  var v405 = sequence$$2.substring(0, 10);
  var v61 = v404 + v405;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v406 = sequenceOne.length;
  var v62 = "Search results for " + v406;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v407 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v407 != -1;
  if(v64) {
    var v408 = stringToReturn$$1 + '"';
    var v63 = v408 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v409 = stringToReturn$$1 + ' starting "';
  var v410 = sequenceOne.substring(0, 10);
  var v65 = v409 + v410;
  stringToReturn$$1 = v65 + '"\n';
  var v411 = stringToReturn$$1 + "and ";
  var v412 = sequenceTwo.length;
  var v66 = v411 + v412;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v413 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v413 != -1;
  if(v68) {
    var v414 = stringToReturn$$1 + '"';
    var v67 = v414 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v415 = stringToReturn$$1 + ' starting "';
  var v416 = sequenceTwo.substring(0, 10);
  var v69 = v415 + v416;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v417 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v417;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v742 = arrayOfPatterns$$3[j$$2]
    }
    var v629 = v742.match(/\/.+\//);
    var v418 = v629 + "gi";
    var v988 = eval(v418);
    v72[v73] = v988;
    j$$2 = j$$2 + 1;
    var v419 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v419
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v420 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v420;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v630 = arrayOfPatterns$$4[j$$3]
    }
    var v421 = v630.match(/=[a-zA-Z\*]/);
    var v989 = v421.toString();
    v76[v77] = v989;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v422 = geneticCodeMatchResult$$1[j$$3]
    }
    var v990 = v422.replace(/=/g, "");
    v78[v79] = v990;
    j$$3 = j$$3 + 1;
    var v423 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v423
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v424 = sequence$$3.length;
  var v81 = "Results for " + v424;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v425 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v425 != -1;
  if(v83) {
    var v426 = stringToReturn$$2 + '"';
    var v82 = v426 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v427 = stringToReturn$$2 + ' starting "';
  var v428 = sequence$$3.substring(0, 10);
  var v84 = v427 + v428;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v631 = "Results for " + topology;
  var v429 = v631 + " ";
  var v430 = sequence$$4.length;
  var v86 = v429 + v430;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v431 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v431 != -1;
  if(v88) {
    var v432 = stringToReturn$$3 + '"';
    var v87 = v432 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v433 = stringToReturn$$3 + ' starting "';
  var v434 = sequence$$4.substring(0, 10);
  var v89 = v433 + v434;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v435 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v435;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v436 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v436 != -1;
  if(v93) {
    var v437 = stringToReturn$$4 + '"';
    var v92 = v437 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v438 = stringToReturn$$4 + ' starting "';
  var v439 = sequenceOne$$1.substring(0, 10);
  var v94 = v438 + v439;
  stringToReturn$$4 = v94 + '"\n';
  var v440 = stringToReturn$$4 + "and ";
  var v441 = sequenceTwo$$1.length;
  var v95 = v440 + v441;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v442 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v442 != -1;
  if(v97) {
    var v443 = stringToReturn$$4 + '"';
    var v96 = v443 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v444 = stringToReturn$$4 + ' starting "';
  var v445 = sequenceTwo$$1.substring(0, 10);
  var v98 = v444 + v445;
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
    var v446 = Math.random();
    var v447 = components.length;
    var v100 = v446 * v447;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v448 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v448 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v449 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v449 != -1;
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
  var v632 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v450 = v632 != -1;
  var v634 = !v450;
  if(v634) {
    var v743 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v633 = v743 != -1;
    var v745 = !v633;
    if(v745) {
      var v812 = expressionToCheck.search(/\[\]/);
      var v744 = v812 != -1;
      var v814 = !v744;
      if(v814) {
        var v863 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v813 = v863 != -1;
        var v865 = !v813;
        if(v865) {
          var v890 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v864 = v890 != -1;
          var v892 = !v864;
          if(v892) {
            var v915 = expressionToCheck.search(/\|\|/);
            var v891 = v915 != -1;
            var v917 = !v891;
            if(v917) {
              var v928 = expressionToCheck.search(/\/\|/);
              var v916 = v928 != -1;
              var v930 = !v916;
              if(v930) {
                var v939 = expressionToCheck.search(/\|\//);
                var v929 = v939 != -1;
                var v941 = !v929;
                if(v941) {
                  var v949 = expressionToCheck.search(/\[.\]/);
                  var v940 = v949 != -1;
                  var v951 = !v940;
                  if(v951) {
                    var v958 = expressionToCheck.search(/\</);
                    var v950 = v958 != -1;
                    var v960 = !v950;
                    if(v960) {
                      var v959 = expressionToCheck.search(/\>/);
                      v950 = v959 != -1
                    }
                    v940 = v950
                  }
                  v929 = v940
                }
                v916 = v929
              }
              v891 = v916
            }
            v864 = v891
          }
          v813 = v864
        }
        v744 = v813
      }
      v633 = v744
    }
    v450 = v633
  }
  var v105 = v450;
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
  var v746 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v635 = v746 + "<head>\n";
  var v451 = v635 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v451 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v976 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v971 = v976 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v966 = v971 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v961 = v966 + "div.info {font-weight: bold}\n";
    var v952 = v961 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v942 = v952 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v931 = v942 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v918 = v931 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v893 = v918 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v866 = v893 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v815 = v866 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v747 = v815 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v636 = v747 + "td.many {color: #000000}\n";
    var v452 = v636 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v452 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v981 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v977 = v981 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v972 = v977 + "div.title {display: none}\n";
    var v967 = v972 + "div.info {font-weight: bold}\n";
    var v962 = v967 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v953 = v962 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v943 = v953 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v932 = v943 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v919 = v932 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v894 = v919 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v867 = v894 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v816 = v867 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v748 = v816 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v748 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v453 = v637 + "img {display: none}\n";
    var v115 = v453 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v749 = "</head>\n" + '<body class="main">\n';
  var v638 = v749 + '<div class="title">';
  var v454 = v638 + title$$7;
  var v117 = v454 + " results</div>\n";
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
  var v750 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v639 = v750 + "<head>\n";
  var v455 = v639 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v455 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v978 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v973 = v978 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v968 = v973 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v963 = v968 + "div.info {font-weight: bold}\n";
    var v954 = v963 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v944 = v954 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v933 = v944 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v920 = v933 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v895 = v920 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v868 = v895 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v817 = v868 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v751 = v817 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v640 = v751 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v456 = v640 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v456 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v984 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v982 = v984 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v979 = v982 + "div.title {display: none}\n";
    var v974 = v979 + "div.info {font-weight: bold}\n";
    var v969 = v974 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v964 = v969 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v955 = v964 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v945 = v955 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v934 = v945 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v921 = v934 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v896 = v921 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v869 = v896 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v818 = v869 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v752 = v818 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v641 = v752 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v457 = v641 + "img {display: none}\n";
    var v123 = v457 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v753 = "</head>\n" + '<body class="main">\n';
  var v642 = v753 + '<div class="title">';
  var v458 = v642 + title$$9;
  var v125 = v458 + " results</div>\n";
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
  var v459 = dnaSequence$$1.search(/./);
  var v126 = v459 != -1;
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
  var v460 = testArray[0];
  var v130 = v460 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v461 = testString.search(re$$2);
  var v131 = v461 == -1;
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
  var v462 = testNum.toFixed(3);
  var v134 = v462 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v463 = testNum.toPrecision(5);
  var v135 = v463 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v464 = theNumber$$1.search(/\d/);
  var v136 = v464 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v643 = emblFile.search(/ID/);
  var v465 = v643 == -1;
  var v645 = !v465;
  if(v645) {
    var v754 = emblFile.search(/AC/);
    var v644 = v754 == -1;
    var v756 = !v644;
    if(v756) {
      var v819 = emblFile.search(/DE/);
      var v755 = v819 == -1;
      var v821 = !v755;
      if(v821) {
        var v820 = emblFile.search(/SQ/);
        v755 = v820 == -1
      }
      v644 = v755
    }
    v465 = v644
  }
  var v137 = v465;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v466 = theNumber$$2.search(/\d/);
  var v138 = v466 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v467 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v467 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v468 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v468 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v469 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v469 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v646 = genBankFile.search(/LOCUS/);
  var v470 = v646 == -1;
  var v648 = !v470;
  if(v648) {
    var v757 = genBankFile.search(/DEFINITION/);
    var v647 = v757 == -1;
    var v759 = !v647;
    if(v759) {
      var v822 = genBankFile.search(/ACCESSION/);
      var v758 = v822 == -1;
      var v824 = !v758;
      if(v824) {
        var v823 = genBankFile.search(/ORIGIN/);
        v758 = v823 == -1
      }
      v647 = v758
    }
    v470 = v647
  }
  var v143 = v470;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v649 = genBankFile$$1.search(/LOCUS/);
  var v471 = v649 == -1;
  var v651 = !v471;
  if(v651) {
    var v760 = genBankFile$$1.search(/DEFINITION/);
    var v650 = v760 == -1;
    var v762 = !v650;
    if(v762) {
      var v825 = genBankFile$$1.search(/ACCESSION/);
      var v761 = v825 == -1;
      var v827 = !v761;
      if(v827) {
        var v826 = genBankFile$$1.search(/ORIGIN/);
        v761 = v826 == -1
      }
      v650 = v761
    }
    v471 = v650
  }
  var v144 = v471;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v472 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v472 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v652 = emblFile$$1.search(/ID/);
  var v473 = v652 == -1;
  var v654 = !v473;
  if(v654) {
    var v763 = emblFile$$1.search(/AC/);
    var v653 = v763 == -1;
    var v765 = !v653;
    if(v765) {
      var v828 = emblFile$$1.search(/DE/);
      var v764 = v828 == -1;
      var v830 = !v764;
      if(v830) {
        var v829 = emblFile$$1.search(/SQ/);
        v764 = v829 == -1
      }
      v653 = v764
    }
    v473 = v653
  }
  var v146 = v473;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v474 = emblFile$$1.search(/^FT/m);
  var v147 = v474 == -1;
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
    var v475 = basePerLine / groupSize;
    var v151 = j$$6 <= v475;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v476 = k + i$$5;
        var v149 = text$$10.charAt(v476);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v477 = basePerLine / groupSize;
      v151 = j$$6 <= v477
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
    var v478 = adjustment < 0;
    if(v478) {
      v478 = adjusted >= 0
    }
    var v155 = v478;
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
    var v479 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v479;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v480 = i$$6 + k$$1;
        var v156 = v480 >= stopBase$$2;
        if(v156) {
          break
        }
        var v481 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v481);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v482 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v482, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v483 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v483
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v766 = adjustNumbering(lineNum, numberingAdjustment);
      var v655 = rightNum(v766, "", 8, tabIn$$3);
      var v484 = v655 + lineOfText$$1;
      var v164 = v484 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v767 = adjustNumbering(lineNum, numberingAdjustment);
        var v656 = rightNum(v767, "", 8, tabIn$$3);
        var v657 = complement(lineOfText$$1);
        var v485 = v656 + v657;
        var v166 = v485 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v658 = adjustNumbering(i$$6, numberingAdjustment);
        var v486 = lineOfText$$1 + v658;
        var v170 = v486 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v659 = complement(lineOfText$$1);
          var v660 = adjustNumbering(i$$6, numberingAdjustment);
          var v487 = v659 + v660;
          var v172 = v487 + "\n";
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
            var v488 = complement(lineOfText$$1);
            var v180 = v488 + "\n";
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
    var v489 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v489;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v490 = i$$7 + k$$2;
        var v187 = v490 >= stopBase$$3;
        if(v187) {
          break
        }
        var v491 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v491);
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
      var v492 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v492
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v661 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v493 = v661 + lineOfText$$2;
      var v195 = v493 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v494 = lineOfText$$2 + i$$7;
        var v197 = v494 + "\n";
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
  var v662 = sequence$$13.length;
  var v495 = v662 <= firstIndexToMutate;
  var v664 = !v495;
  if(v664) {
    var v663 = lastIndexToMutate < 0;
    var v768 = !v663;
    if(v768) {
      v663 = lastIndexToMutate <= firstIndexToMutate
    }
    v495 = v663
  }
  var v206 = v495;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v496 = Math.random();
    var v207 = v496 * maxNum;
    randNum = Math.floor(v207);
    var v497 = randNum < firstIndexToMutate;
    var v665 = !v497;
    if(v665) {
      v497 = randNum > lastIndexToMutate
    }
    var v208 = v497;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v498 = Math.random();
      var v499 = components$$1.length;
      var v209 = v498 * v499;
      componentsIndex = Math.round(v209);
      var v500 = components$$1.length;
      var v210 = componentsIndex == v500;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v501 = components$$1[componentsIndex]
      }
      var v211 = v501 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v502 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v503 = components$$1[componentsIndex]
    }
    var v212 = v502 + v503;
    var v504 = randNum + 1;
    var v505 = sequence$$13.length;
    var v213 = sequence$$13.substring(v504, v505);
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
    var v506 = Math.random();
    var v507 = components$$2.length;
    var v217 = v506 * v507;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v508 = sequence$$14.length;
    var v220 = v508 == 60;
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
    var v769 = sequence$$15.length;
    var v666 = v769 - lookAhead;
    var v667 = sequence$$15.length;
    var v509 = sequence$$15.substring(v666, v667);
    var v225 = v509 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v770 = '<tr><td class="title" width="200px">' + "Site:";
  var v668 = v770 + '</td><td class="title">';
  var v510 = v668 + "Positions:";
  var v230 = v510 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v511 = arrayOfItems.length;
  var v246 = i$$9 < v511;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v512 = arrayOfItems[i$$9]
    }
    var v231 = v512.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v771 = arrayOfItems[i$$9]
    }
    var v669 = v771.match(/\)\D*\d+/);
    var v513 = v669.toString();
    var v232 = v513.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v514 = matchPosition >= lowerLimit;
      if(v514) {
        v514 = matchPosition < upperLimit
      }
      var v236 = v514;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v515 = matchPosition - shiftValue;
        var v235 = v515 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v670 = matchExp.lastIndex;
      var v772 = RegExp.lastMatch;
      var v671 = v772.length;
      var v516 = v670 - v671;
      v237.lastIndex = v516 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v517 = tempString$$1.search(/\d/);
    var v239 = v517 != -1;
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
    var v922 = '<tr><td class="' + backGroundClass;
    var v897 = v922 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v946 = arrayOfItems[i$$9]
    }
    var v935 = v946.match(/\([^\(]+\)/);
    var v923 = v935.toString();
    var v898 = v923.replace(/\(|\)/g, "");
    var v870 = v897 + v898;
    var v831 = v870 + '</td><td class="';
    var v773 = v831 + backGroundClass;
    var v672 = v773 + '">';
    var v518 = v672 + tempString$$1;
    var v245 = v518 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v519 = arrayOfItems.length;
    v246 = i$$9 < v519
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
  var v871 = '<tr><td class="title">' + "Pattern:";
  var v832 = v871 + '</td><td class="title">';
  var v774 = v832 + "Times found:";
  var v673 = v774 + '</td><td class="title">';
  var v520 = v673 + "Percentage:";
  var v250 = v520 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v521 = arrayOfItems$$1.length;
  var v259 = i$$10 < v521;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v522 = arrayOfItems$$1[i$$10]
    }
    var v251 = v522.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v523 = sequence$$16.search(matchExp$$1);
    var v253 = v523 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v674 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v833 = arrayOfItems$$1[i$$10]
    }
    var v775 = v833.match(/\d+/);
    var v675 = parseFloat(v775);
    var v524 = v674 - v675;
    var v256 = v524 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v525 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v776 = arrayOfItems$$1[i$$10]
      }
      var v676 = v776.match(/\d+/);
      var v526 = parseFloat(v676);
      var v255 = v525 - v526;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v947 = arrayOfItems$$1[i$$10]
    }
    var v936 = v947.match(/\([^\(]+\)\b/);
    var v924 = v936.toString();
    var v899 = v924.replace(/\(|\)/g, "");
    var v872 = "<tr><td>" + v899;
    var v834 = v872 + "</td><td>";
    var v777 = v834 + tempNumber;
    var v677 = v777 + "</td><td>";
    var v678 = percentage.toFixed(2);
    var v527 = v677 + v678;
    var v258 = v527 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v528 = arrayOfItems$$1.length;
    v259 = i$$10 < v528
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
  var v529 = sequence$$17.length;
  var v267 = v529 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v530 = Math.random();
    var v261 = v530 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v531 = tempSeq.length;
    var v266 = v531 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v532 = sequence$$17.length;
    v267 = v532 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function restDigest(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 1E5;
  var v533 = testScript();
  var v270 = v533 == false;
  if(v270) {
    return false
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v900 = theDocument.forms;
  var v873 = v900[0];
  var v835 = v873.elements;
  var v778 = v835[0];
  var v679 = checkFormElement(v778);
  var v534 = v679 == false;
  var v681 = !v534;
  if(v681) {
    var v925 = theDocument.forms;
    var v901 = v925[0];
    var v874 = v901.elements;
    var v836 = v874[0];
    var v779 = v836.value;
    var v680 = checkSequenceLength(v779, maxInput$$3);
    v534 = v680 == false
  }
  var v271 = v534;
  if(v271) {
    return false
  }
  var v837 = theDocument.forms;
  var v780 = v837[0];
  var v682 = v780.elements;
  var v535 = v682[0];
  var v272 = v535.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v536 = arrayOfFasta$$1.length;
  var v278 = i$$11 < v536;
  for(;v278;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v273 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v273);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v274);
    newDna = removeNonDna(newDna);
    var v902 = theDocument.forms;
    var v875 = v902[0];
    var v838 = v875.elements;
    var v781 = v838[4];
    var v683 = v781.options;
    var v903 = theDocument.forms;
    var v876 = v903[0];
    var v839 = v876.elements;
    var v782 = v839[4];
    var v684 = v782.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v537 = v683[v684]
    }
    var v275 = v537.value;
    var v276 = newDna.length;
    var v277 = newDna.length;
    restrictionFragment = new RestrictionFragment(v275, title, newDna, 1, v276, "sequence start", "sequence end", v277);
    restrictionFragments.push(restrictionFragment);
    i$$11 = i$$11 + 1;
    var v538 = arrayOfFasta$$1.length;
    v278 = i$$11 < v538
  }
  var v904 = theDocument.forms;
  var v877 = v904[0];
  var v840 = v877.elements;
  var v783 = v840[5];
  var v685 = v783.options;
  var v905 = theDocument.forms;
  var v878 = v905[0];
  var v841 = v878.elements;
  var v784 = v841[5];
  var v686 = v784.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v539 = v685[v686]
  }
  var v279 = v539.value;
  restrictionFragments = digest(restrictionFragments, v279);
  var v906 = theDocument.forms;
  var v879 = v906[0];
  var v842 = v879.elements;
  var v785 = v842[6];
  var v687 = v785.options;
  var v907 = theDocument.forms;
  var v880 = v907[0];
  var v843 = v880.elements;
  var v786 = v843[6];
  var v688 = v786.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v540 = v687[v688]
  }
  var v280 = v540.value;
  restrictionFragments = digest(restrictionFragments, v280);
  var v908 = theDocument.forms;
  var v881 = v908[0];
  var v844 = v881.elements;
  var v787 = v844[7];
  var v689 = v787.options;
  var v909 = theDocument.forms;
  var v882 = v909[0];
  var v845 = v882.elements;
  var v788 = v845[7];
  var v690 = v788.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v541 = v689[v690]
  }
  var v281 = v541.value;
  restrictionFragments = digest(restrictionFragments, v281);
  restrictionFragments.sort(restrictionFragmentSorter);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v542 = restrictionFragments.length;
  var v285 = i$$11 < v542;
  for(;v285;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v282 = restrictionFragments[i$$11]
    }
    v282.correctPositions();
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v283 = restrictionFragments[i$$11]
    }
    var v910 = theDocument.forms;
    var v883 = v910[0];
    var v846 = v883.elements;
    var v789 = v846[4];
    var v691 = v789.options;
    var v911 = theDocument.forms;
    var v884 = v911[0];
    var v847 = v884.elements;
    var v790 = v847[4];
    var v692 = v790.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v543 = v691[v692]
    }
    var v284 = v543.value;
    v283.writeFragment(v284);
    i$$11 = i$$11 + 1;
    var v544 = restrictionFragments.length;
    v285 = i$$11 < v544
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function digest(arrayOfRestrictionFragments, enzyme) {
  var v286 = enzyme == "";
  if(v286) {
    return arrayOfRestrictionFragments
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v287 = enzyme.match(/\/.+\//);
  var matchExp$$2 = v287.toString();
  matchExp$$2 = matchExp$$2.replace(/\//g, "");
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v693 = enzyme.match(/\)\D*\d+/);
  var v545 = v693.toString();
  var v288 = v545.replace(/\)\D*/, "");
  var cutDistance$$1 = parseInt(v288);
  var v546 = enzyme.match(/\([^\(]+\)/);
  var v289 = v546.toString();
  var enzymeName = v289.replace(/\(|\)/g, "");
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v547 = arrayOfRestrictionFragments.length;
  var v332 = i$$12 < v547;
  for(;v332;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v694 = arrayOfRestrictionFragments[i$$12]
    }
    var v548 = v694.topology;
    var v300 = v548 == "circular";
    if(v300) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v695 = arrayOfRestrictionFragments[i$$12]
      }
      var v549 = v695.sequence;
      var v290 = v549.substring(0, lookAhead$$1);
      shiftValue$$1 = v290.length;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v791 = arrayOfRestrictionFragments[i$$12]
      }
      var v696 = v791.sequence;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v885 = arrayOfRestrictionFragments[i$$12]
      }
      var v848 = v885.sequence;
      var v792 = v848.length;
      var v697 = v792 - lookAhead$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v849 = arrayOfRestrictionFragments[i$$12]
      }
      var v793 = v849.sequence;
      var v698 = v793.length;
      var v550 = v696.substring(v697, v698);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v699 = arrayOfRestrictionFragments[i$$12]
      }
      var v551 = v699.sequence;
      var v291 = v550 + v551;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v700 = arrayOfRestrictionFragments[i$$12]
      }
      var v552 = v700.sequence;
      var v292 = v552.substring(0, lookAhead$$1);
      var extendedSequence = v291 + v292;
      lowerLimit$$1 = 0 + shiftValue$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v701 = arrayOfRestrictionFragments[i$$12]
      }
      var v553 = v701.sequence;
      var v293 = v553.length;
      upperLimit$$1 = v293 + shiftValue$$1;
      var v297 = matchArray$$2 = matchExp$$2.exec(extendedSequence);
      for(;v297;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v554 = matchPosition$$1 >= lowerLimit$$1;
        if(v554) {
          v554 = matchPosition$$1 < upperLimit$$1
        }
        var v295 = v554;
        if(v295) {
          var v294 = matchPosition$$1 - shiftValue$$1;
          positions.push(v294);
          wasCut = true
        }
        var v296 = matchExp$$2;
        var v702 = matchExp$$2.lastIndex;
        var v794 = RegExp.lastMatch;
        var v703 = v794.length;
        var v555 = v702 - v703;
        v296.lastIndex = v555 + 1;
        v297 = matchArray$$2 = matchExp$$2.exec(extendedSequence)
      }
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v704 = arrayOfRestrictionFragments[i$$12]
      }
      var v556 = v704.sequence;
      var v299 = matchArray$$2 = matchExp$$2.exec(v556);
      for(;v299;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        positions.push(matchPosition$$1);
        wasCut = true;
        var v298 = matchExp$$2;
        var v705 = matchExp$$2.lastIndex;
        var v795 = RegExp.lastMatch;
        var v706 = v795.length;
        var v557 = v705 - v706;
        v298.lastIndex = v557 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v707 = arrayOfRestrictionFragments[i$$12]
        }
        var v558 = v707.sequence;
        v299 = matchArray$$2 = matchExp$$2.exec(v558)
      }
    }
    var v331 = !wasCut;
    if(v331) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v301 = arrayOfRestrictionFragments[i$$12]
      }
      newFragments.push(v301)
    }else {
      wasCut = false;
      previousCutPosition = 0;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v302 = arrayOfRestrictionFragments[i$$12]
      }
      previousEnzyme = v302.startEnzyme;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v303 = arrayOfRestrictionFragments[i$$12]
      }
      previousStartPosition = v303.start;
      var j$$10 = 0;
      var v559 = positions.length;
      var v330 = j$$10 < v559;
      for(;v330;) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v708 = arrayOfRestrictionFragments[i$$12]
        }
        var v560 = v708.topology;
        var v313 = v560 == "circular";
        if(v313) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v304 = arrayOfRestrictionFragments[i$$12]
          }
          v304.topology = "linear";
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v561 = arrayOfRestrictionFragments[i$$12]
          }
          var v305 = v561.sourceName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v709 = arrayOfRestrictionFragments[i$$12]
          }
          var v562 = v709.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v563 = positions[j$$10]
          }
          var v306 = v562.substring(previousCutPosition, v563);
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v886 = arrayOfRestrictionFragments[i$$12]
          }
          var v850 = v886.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v851 = positions[j$$10]
          }
          var v796 = v850.substring(previousCutPosition, v851);
          var v710 = v796.length;
          var v564 = previousStartPosition + v710;
          var v307 = v564 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v565 = arrayOfRestrictionFragments[i$$12]
          }
          var v308 = v565.originalLength;
          startRestrictionFragment = new RestrictionFragment("linear", v305, v306, previousStartPosition, v307, previousEnzyme, enzymeName, v308)
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v566 = arrayOfRestrictionFragments[i$$12]
          }
          var v309 = v566.sourceName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v711 = arrayOfRestrictionFragments[i$$12]
          }
          var v567 = v711.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v568 = positions[j$$10]
          }
          var v310 = v567.substring(previousCutPosition, v568);
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v887 = arrayOfRestrictionFragments[i$$12]
          }
          var v852 = v887.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v853 = positions[j$$10]
          }
          var v797 = v852.substring(previousCutPosition, v853);
          var v712 = v797.length;
          var v569 = previousStartPosition + v712;
          var v311 = v569 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v570 = arrayOfRestrictionFragments[i$$12]
          }
          var v312 = v570.originalLength;
          restrictionFragmentOne = new RestrictionFragment("linear", v309, v310, previousStartPosition, v311, previousEnzyme, enzymeName, v312);
          newFragments.push(restrictionFragmentOne)
        }
        var v713 = positions.length;
        var v571 = v713 - 1;
        var v327 = j$$10 == v571;
        if(v327) {
          var v326 = startRestrictionFragment == null;
          if(v326) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v572 = arrayOfRestrictionFragments[i$$12]
            }
            var v314 = v572.sourceName;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v714 = arrayOfRestrictionFragments[i$$12]
            }
            var v573 = v714.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v574 = positions[j$$10]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v798 = arrayOfRestrictionFragments[i$$12]
            }
            var v715 = v798.sequence;
            var v575 = v715.length;
            var v315 = v573.substring(v574, v575);
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v854 = arrayOfRestrictionFragments[i$$12]
            }
            var v799 = v854.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v800 = positions[j$$10]
            }
            var v716 = v799.substring(previousCutPosition, v800);
            var v576 = v716.length;
            var v316 = previousStartPosition + v576;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v577 = arrayOfRestrictionFragments[i$$12]
            }
            var v317 = v577.stop;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v578 = arrayOfRestrictionFragments[i$$12]
            }
            var v318 = v578.stopEnzyme;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v579 = arrayOfRestrictionFragments[i$$12]
            }
            var v319 = v579.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v314, v315, v316, v317, enzymeName, v318, v319);
            newFragments.push(restrictionFragmentTwo)
          }else {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v580 = arrayOfRestrictionFragments[i$$12]
            }
            var v320 = v580.sourceName;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v801 = arrayOfRestrictionFragments[i$$12]
            }
            var v717 = v801.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v718 = positions[j$$10]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v855 = arrayOfRestrictionFragments[i$$12]
            }
            var v802 = v855.sequence;
            var v719 = v802.length;
            var v581 = v717.substring(v718, v719);
            var v582 = startRestrictionFragment.sequence;
            var v321 = v581 + v582;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v856 = arrayOfRestrictionFragments[i$$12]
            }
            var v803 = v856.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v804 = positions[j$$10]
            }
            var v720 = v803.substring(previousCutPosition, v804);
            var v583 = v720.length;
            var v322 = previousStartPosition + v583;
            var v323 = startRestrictionFragment.stop;
            var v324 = startRestrictionFragment.stopEnzyme;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v584 = arrayOfRestrictionFragments[i$$12]
            }
            var v325 = v584.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v320, v321, v322, v323, enzymeName, v324, v325);
            newFragments.push(restrictionFragmentTwo)
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v585 = arrayOfRestrictionFragments[i$$12]
        }
        var v328 = v585.start;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v329 = positions[j$$10]
        }
        previousStartPosition = v328 + v329;
        j$$10 = j$$10 + 1;
        var v586 = positions.length;
        v330 = j$$10 < v586
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    var v587 = arrayOfRestrictionFragments.length;
    v332 = i$$12 < v587
  }
  return newFragments
}
function restrictionFragmentSorter(a, b) {
  var v721 = a.sequence;
  var v588 = v721.length;
  var v722 = b.sequence;
  var v589 = v722.length;
  var v333 = v588 < v589;
  if(v333) {
    return 1
  }
  var v723 = a.sequence;
  var v590 = v723.length;
  var v724 = b.sequence;
  var v591 = v724.length;
  var v334 = v590 > v591;
  if(v334) {
    return-1
  }
  var v725 = a.sequence;
  var v592 = v725.length;
  var v726 = b.sequence;
  var v593 = v726.length;
  var v337 = v592 == v593;
  if(v337) {
    var v594 = a.start;
    var v595 = b.start;
    var v335 = v594 < v595;
    if(v335) {
      return-1
    }
    var v596 = a.start;
    var v597 = b.start;
    var v336 = v596 > v597;
    if(v336) {
      return 1
    }else {
      return 0
    }
  }
  return
}
function writeFragment(topology$$1) {
  var v598 = this.topology;
  var v342 = v598 == "linear";
  if(v342) {
    var v338 = outputWindow.document;
    var v983 = this.sequence;
    var v980 = v983.length;
    var v975 = "&gt;" + v980;
    var v970 = v975 + " bp linear fragment from ";
    var v965 = v970 + topology$$1;
    var v956 = v965 + " parent ";
    var v957 = this.sourceName;
    var v948 = v956 + v957;
    var v937 = v948 + ", base ";
    var v938 = this.start;
    var v926 = v937 + v938;
    var v912 = v926 + " to base ";
    var v913 = this.stop;
    var v888 = v912 + v913;
    var v857 = v888 + " (";
    var v858 = this.startEnzyme;
    var v805 = v857 + v858;
    var v727 = v805 + " - ";
    var v728 = this.stopEnzyme;
    var v599 = v727 + v728;
    var v339 = v599 + ").\n";
    v338.write(v339)
  }else {
    var v340 = outputWindow.document;
    var v927 = this.sequence;
    var v914 = v927.length;
    var v889 = "&gt;" + v914;
    var v859 = v889 + " bp circular molecule from ";
    var v806 = v859 + topology$$1;
    var v729 = v806 + " parent ";
    var v730 = this.sourceName;
    var v600 = v729 + v730;
    var v341 = v600 + ".\n";
    v340.write(v341)
  }
  var v343 = outputWindow.document;
  var v731 = this.sequence;
  var v601 = addReturns(v731);
  var v344 = v601 + "\n\n";
  v343.write(v344);
  return
}
function correctPositions() {
  var v602 = this.start;
  var v603 = this.originalLength;
  var v347 = v602 > v603;
  if(v347) {
    var v345 = this.start;
    var v346 = this.originalLength;
    this.start = v345 - v346
  }
  var v604 = this.stop;
  var v605 = this.originalLength;
  var v350 = v604 > v605;
  if(v350) {
    var v348 = this.stop;
    var v349 = this.originalLength;
    this.stop = v348 - v349
  }
  var v606 = this.stop;
  var v351 = v606 == 0;
  if(v351) {
    this.stop = this.originalLength
  }
  return
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
var v352 = RestrictionFragment.prototype;
v352.writeFragment = writeFragment;
var v353 = RestrictionFragment.prototype;
v353.correctPositions = correctPositions;
document.onload = v2;
var v354 = document.getElementById("submitbtn");
v354.onclick = v3;
var v355 = document.getElementById("clearbtn");
v355.onclick = v4;

JAM.stopProfile('load');
