
JAM.startProfile('load');
function v12() {
  var v867 = document.forms;
  var v718 = v867[0];
  var v415 = v718.elements;
  var v13 = v415[0];
  v13.value = " ";
  return
}
function v11() {
  try {
    windowExtract(document)
  }catch(e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14)
  }
  return
}
function v10() {
  var v416 = document.main_form;
  var v15 = v416.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v417 = arrayOfSequences.length;
  var v17 = v417 < 2;
  if(v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v418 = arrayOfTitles.length;
  var v19 = i$$1 < v418;
  for(;v19;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v868 = arrayOfTitles[i$$1]
    }
    var v719 = v868.search(/\S/);
    var v419 = v719 == -1;
    var v721 = !v419;
    if(v721) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v974 = arrayOfSequences[i$$1]
      }
      var v869 = v974.search(/\S/);
      var v720 = v869 == -1;
      var v871 = !v720;
      if(v871) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v975 = arrayOfSequences[i$$1]
        }
        var v870 = v975.length;
        v720 = v870 != lengthOfAlign
      }
      v419 = v720
    }
    var v18 = v419;
    if(v18) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v420 = arrayOfTitles.length;
    v19 = i$$1 < v420
  }
  return true
}
function checkCodonTable(codonTable) {
  var v722 = codonTable.search(/AmAcid/);
  var v421 = v722 == -1;
  var v724 = !v421;
  if(v724) {
    var v872 = codonTable.search(/Codon/);
    var v723 = v872 == -1;
    var v874 = !v723;
    if(v874) {
      var v976 = codonTable.search(/Number/);
      var v873 = v976 == -1;
      var v978 = !v873;
      if(v978) {
        var v1042 = codonTable.search(/\/1000/);
        var v977 = v1042 == -1;
        var v1044 = !v977;
        if(v1044) {
          var v1043 = codonTable.search(/Fraction\s*\.\./);
          v977 = v1043 == -1
        }
        v873 = v977
      }
      v723 = v873
    }
    v421 = v723
  }
  var v20 = v421;
  if(v20) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v725 = formElement.value;
  var v422 = v725.search(/\S/);
  var v21 = v422 == -1;
  if(v21) {
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
  var v423 = arrayOfPatterns.length;
  var v24 = z$$2 < v423;
  for(;v24;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v726 = arrayOfPatterns[z$$2]
    }
    var v424 = v726.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v22 = v424 == -1;
    if(v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v727 = arrayOfPatterns[z$$2]
    }
    var v425 = moreExpressionCheck(v727);
    var v23 = v425 == false;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v426 = arrayOfPatterns.length;
    v24 = z$$2 < v426
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v427 = arrayOfPatterns.length;
  var v33 = j < v427;
  for(;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v875 = arrayOfPatterns[j]
    }
    var v728 = v875.match(/\/.+\//);
    var v428 = v728 + "gi";
    var v1197 = eval(v428);
    v27[v28] = v1197;
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v729 = arrayOfPatterns[j]
    }
    var v429 = v729.match(/=[a-zA-Z\*]/);
    var v1198 = v429.toString();
    v29[v30] = v1198;
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v430 = geneticCodeMatchResult[j]
    }
    var v1199 = v430.replace(/=/g, "");
    v31[v32] = v1199;
    j = j + 1;
    var v431 = arrayOfPatterns.length;
    v33 = j < v431
  }
  var i$$2 = 0;
  var v730 = testSequence.length;
  var v432 = v730 - 3;
  var v40 = i$$2 <= v432;
  for(;v40;) {
    var v34 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v34);
    j = 0;
    var v433 = geneticCodeMatchExp.length;
    var v38 = j < v433;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v731 = geneticCodeMatchExp[j]
      }
      var v434 = codon.search(v731);
      var v37 = v434 != -1;
      if(v37) {
        var v36 = oneMatch == true;
        if(v36) {
          var v435 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v35 = v435 + ".";
          alert(v35);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v436 = geneticCodeMatchExp.length;
      v38 = j < v436
    }
    var v39 = oneMatch == false;
    if(v39) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v732 = testSequence.length;
    var v437 = v732 - 3;
    v40 = i$$2 <= v437
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v438 = arrayOfPatterns$$1.length;
  var v42 = z$$3 < v438;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v733 = arrayOfPatterns$$1[z$$3]
    }
    var v439 = v733.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v41 = v439 != -1;
    if(v41) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v440 = arrayOfPatterns$$1.length;
    v42 = z$$3 < v440
  }
  var i$$3 = 0;
  var v441 = arrayOfPatterns$$1.length;
  var v46 = i$$3 < v441;
  for(;v46;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v734 = arrayOfPatterns$$1[i$$3]
    }
    var v442 = "[" + v734;
    var v43 = v442 + "]";
    var re = new RegExp(v43, "gi");
    var j$$1 = i$$3 + 1;
    var v443 = arrayOfPatterns$$1.length;
    var v45 = j$$1 < v443;
    for(;v45;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v735 = arrayOfPatterns$$1[j$$1]
      }
      var v444 = v735.search(re);
      var v44 = v444 != -1;
      if(v44) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v445 = arrayOfPatterns$$1.length;
      v45 = j$$1 < v445
    }
    i$$3 = i$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    v46 = i$$3 < v446
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v447 = arrayOfPatterns$$2.length;
  var v49 = z$$4 < v447;
  for(;v49;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v736 = arrayOfPatterns$$2[z$$4]
    }
    var v448 = v736.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v47 = v448 == -1;
    if(v47) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v737 = arrayOfPatterns$$2[z$$4]
    }
    var v449 = moreExpressionCheck(v737);
    var v48 = v449 == false;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v450 = arrayOfPatterns$$2.length;
    v49 = z$$4 < v450
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v876 = getSequenceFromFasta(text$$7);
  var v738 = v876.replace(/[^A-Za-z]/g, "");
  var v451 = v738.length;
  var v51 = v451 > maxInput;
  if(v51) {
    var v452 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v50 = v452 + " characters.";
    alert(v50);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v453 = text$$8.length;
  var v53 = v453 > maxInput$$1;
  if(v53) {
    var v454 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v52 = v454 + " characters.";
    alert(v52);
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
  var v54 = outputWindow.document;
  v54.write("</form>");
  return true
}
function closePre() {
  var v55 = outputWindow.document;
  v55.write("</div>");
  var v56 = outputWindow.document;
  v56.write("</pre>\n");
  return
}
function closeTextArea() {
  var v57 = outputWindow.document;
  v57.write("</textarea>");
  return true
}
function closeWindow() {
  var v58 = outputWindow.document;
  v58.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  v59.close();
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
  var v455 = alignArray.length;
  var v60 = v455 < 3;
  if(v60) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v456 = alignArray.length;
  var v62 = i$$4 < v456;
  for(;v62;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v739 = alignArray[i$$4]
    }
    var v457 = v739.search(/[^\s]+\s/);
    var v61 = v457 == -1;
    if(v61) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v458 = alignArray.length;
    v62 = i$$4 < v458
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
  var v459 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v65 = v459 != -1;
  if(v65) {
    var v64 = matchArray = re$$1.exec(sequenceData);
    for(;v64;) {
      var v63 = matchArray[0];
      arrayOfFasta.push(v63);
      v64 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v460 = sequence$$2.length;
  var v66 = "&gt;results for " + v460;
  var stringToReturn = v66 + " residue sequence ";
  var v461 = fastaSequenceTitle.search(/[^\s]/);
  var v68 = v461 != -1;
  if(v68) {
    var v462 = stringToReturn + '"';
    var v67 = v462 + fastaSequenceTitle;
    stringToReturn = v67 + '"'
  }
  var v463 = stringToReturn + ' starting "';
  var v464 = sequence$$2.substring(0, 10);
  var v69 = v463 + v464;
  stringToReturn = v69 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v465 = sequenceOne.length;
  var v70 = "Search results for " + v465;
  var stringToReturn$$1 = v70 + " residue sequence ";
  var v466 = fastaSequenceTitleOne.search(/[^\s]/);
  var v72 = v466 != -1;
  if(v72) {
    var v467 = stringToReturn$$1 + '"';
    var v71 = v467 + fastaSequenceTitleOne;
    stringToReturn$$1 = v71 + '"'
  }
  var v468 = stringToReturn$$1 + ' starting "';
  var v469 = sequenceOne.substring(0, 10);
  var v73 = v468 + v469;
  stringToReturn$$1 = v73 + '"\n';
  var v470 = stringToReturn$$1 + "and ";
  var v471 = sequenceTwo.length;
  var v74 = v470 + v471;
  stringToReturn$$1 = v74 + " residue sequence ";
  var v472 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v76 = v472 != -1;
  if(v76) {
    var v473 = stringToReturn$$1 + '"';
    var v75 = v473 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v75 + '"'
  }
  var v474 = stringToReturn$$1 + ' starting "';
  var v475 = sequenceTwo.substring(0, 10);
  var v77 = v474 + v475;
  stringToReturn$$1 = v77 + '"';
  var v78 = '<div class="info">' + stringToReturn$$1;
  return v78 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v79 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v79);
  var j$$2 = 0;
  var v476 = arrayOfPatterns$$3.length;
  var v82 = j$$2 < v476;
  for(;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v877 = arrayOfPatterns$$3[j$$2]
    }
    var v740 = v877.match(/\/.+\//);
    var v477 = v740 + "gi";
    var v1200 = eval(v477);
    v80[v81] = v1200;
    j$$2 = j$$2 + 1;
    var v478 = arrayOfPatterns$$3.length;
    v82 = j$$2 < v478
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v83 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v83);
  var j$$3 = 0;
  var v479 = arrayOfPatterns$$4.length;
  var v88 = j$$3 < v479;
  for(;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v741 = arrayOfPatterns$$4[j$$3]
    }
    var v480 = v741.match(/=[a-zA-Z\*]/);
    var v1201 = v480.toString();
    v84[v85] = v1201;
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1202 = v481.replace(/=/g, "");
    v86[v87] = v1202;
    j$$3 = j$$3 + 1;
    var v482 = arrayOfPatterns$$4.length;
    v88 = j$$3 < v482
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v483 = sequence$$3.length;
  var v89 = "Results for " + v483;
  var stringToReturn$$2 = v89 + " residue sequence ";
  var v484 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v91 = v484 != -1;
  if(v91) {
    var v485 = stringToReturn$$2 + '"';
    var v90 = v485 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v90 + '"'
  }
  var v486 = stringToReturn$$2 + ' starting "';
  var v487 = sequence$$3.substring(0, 10);
  var v92 = v486 + v487;
  stringToReturn$$2 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$2;
  return v93 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v742 = "Results for " + topology;
  var v488 = v742 + " ";
  var v489 = sequence$$4.length;
  var v94 = v488 + v489;
  var stringToReturn$$3 = v94 + " residue sequence ";
  var v490 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v96 = v490 != -1;
  if(v96) {
    var v491 = stringToReturn$$3 + '"';
    var v95 = v491 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v95 + '"'
  }
  var v492 = stringToReturn$$3 + ' starting "';
  var v493 = sequence$$4.substring(0, 10);
  var v97 = v492 + v493;
  stringToReturn$$3 = v97 + '"';
  var v98 = '<div class="info">' + stringToReturn$$3;
  return v98 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v494 = sequenceOne$$1.length;
  var v99 = "Alignment results for " + v494;
  var stringToReturn$$4 = v99 + " residue sequence ";
  var v495 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v101 = v495 != -1;
  if(v101) {
    var v496 = stringToReturn$$4 + '"';
    var v100 = v496 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v497 = stringToReturn$$4 + ' starting "';
  var v498 = sequenceOne$$1.substring(0, 10);
  var v102 = v497 + v498;
  stringToReturn$$4 = v102 + '"\n';
  var v499 = stringToReturn$$4 + "and ";
  var v500 = sequenceTwo$$1.length;
  var v103 = v499 + v500;
  stringToReturn$$4 = v103 + " residue sequence ";
  var v501 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v105 = v501 != -1;
  if(v105) {
    var v502 = stringToReturn$$4 + '"';
    var v104 = v502 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v104 + '"'
  }
  var v503 = stringToReturn$$4 + ' starting "';
  var v504 = sequenceTwo$$1.substring(0, 10);
  var v106 = v503 + v504;
  stringToReturn$$4 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$4;
  return v107 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v109 = j$$4 < lengthOut;
  for(;v109;) {
    var v505 = Math.random();
    var v506 = components.length;
    var v108 = v505 * v506;
    tempNum = Math.floor(v108);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v507 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v110 = v507 != -1;
  if(v110) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v508 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v112 = v508 != -1;
  if(v112) {
    var v111 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v111.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v743 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v509 = v743 != -1;
  var v745 = !v509;
  if(v745) {
    var v878 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v744 = v878 != -1;
    var v880 = !v744;
    if(v880) {
      var v979 = expressionToCheck.search(/\[\]/);
      var v879 = v979 != -1;
      var v981 = !v879;
      if(v981) {
        var v1045 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v980 = v1045 != -1;
        var v1047 = !v980;
        if(v1047) {
          var v1090 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1046 = v1090 != -1;
          var v1092 = !v1046;
          if(v1092) {
            var v1118 = expressionToCheck.search(/\|\|/);
            var v1091 = v1118 != -1;
            var v1120 = !v1091;
            if(v1120) {
              var v1135 = expressionToCheck.search(/\/\|/);
              var v1119 = v1135 != -1;
              var v1137 = !v1119;
              if(v1137) {
                var v1150 = expressionToCheck.search(/\|\//);
                var v1136 = v1150 != -1;
                var v1152 = !v1136;
                if(v1152) {
                  var v1162 = expressionToCheck.search(/\[.\]/);
                  var v1151 = v1162 != -1;
                  var v1164 = !v1151;
                  if(v1164) {
                    var v1171 = expressionToCheck.search(/\</);
                    var v1163 = v1171 != -1;
                    var v1173 = !v1163;
                    if(v1173) {
                      var v1172 = expressionToCheck.search(/\>/);
                      v1163 = v1172 != -1
                    }
                    v1151 = v1163
                  }
                  v1136 = v1151
                }
                v1119 = v1136
              }
              v1091 = v1119
            }
            v1046 = v1091
          }
          v980 = v1046
        }
        v879 = v980
      }
      v744 = v879
    }
    v509 = v744
  }
  var v113 = v509;
  if(v113) {
    return false
  }
  return true
}
function openForm() {
  var v114 = outputWindow.document;
  v114.write('<form action="">\n');
  return true
}
function openPre() {
  var v115 = outputWindow.document;
  v115.write("<pre>");
  var v116 = outputWindow.document;
  v116.write('<div class="pre">');
  return
}
function openTextArea() {
  var v117 = outputWindow.document;
  v117.write('<br /><textarea rows="6" cols="61">\n');
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
  var v118 = outputWindow.document;
  var v881 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v746 = v881 + "<head>\n";
  var v510 = v746 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v510 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isColor) {
    var v120 = outputWindow.document;
    var v1190 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1186 = v1190 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1180 = v1186 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1174 = v1180 + "div.info {font-weight: bold}\n";
    var v1165 = v1174 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1153 = v1165 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1138 = v1153 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1121 = v1138 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1093 = v1121 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1048 = v1093 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v982 = v1048 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v882 = v982 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v747 = v882 + "td.many {color: #000000}\n";
    var v511 = v747 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v121 = v511 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v1194 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1191 = v1194 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1187 = v1191 + "div.title {display: none}\n";
    var v1181 = v1187 + "div.info {font-weight: bold}\n";
    var v1175 = v1181 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1166 = v1175 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1154 = v1166 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1139 = v1154 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1122 = v1139 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1094 = v1122 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1049 = v1094 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v983 = v1049 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v883 = v983 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v883 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v512 = v748 + "img {display: none}\n";
    var v123 = v512 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v884 = "</head>\n" + '<body class="main">\n';
  var v749 = v884 + '<div class="title">';
  var v513 = v749 + title$$7;
  var v125 = v513 + " results</div>\n";
  v124.write(v125);
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
  var v126 = outputWindow.document;
  var v885 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v750 = v885 + "<head>\n";
  var v514 = v750 + "<title>Sequence Manipulation Suite</title>\n";
  var v127 = v514 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v126.write(v127);
  if(isBackground) {
    var v128 = outputWindow.document;
    var v1192 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1188 = v1192 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1182 = v1188 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1176 = v1182 + "div.info {font-weight: bold}\n";
    var v1167 = v1176 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1155 = v1167 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1140 = v1155 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1123 = v1140 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1095 = v1123 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1050 = v1095 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v984 = v1050 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v886 = v984 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v751 = v886 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v515 = v751 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v129 = v515 + "</style>\n";
    v128.write(v129)
  }else {
    var v130 = outputWindow.document;
    var v1196 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1195 = v1196 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1193 = v1195 + "div.title {display: none}\n";
    var v1189 = v1193 + "div.info {font-weight: bold}\n";
    var v1183 = v1189 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1177 = v1183 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1168 = v1177 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1156 = v1168 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1141 = v1156 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1124 = v1141 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1096 = v1124 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1051 = v1096 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v985 = v1051 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v887 = v985 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v752 = v887 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v516 = v752 + "img {display: none}\n";
    var v131 = v516 + "</style>\n";
    v130.write(v131)
  }
  var v132 = outputWindow.document;
  var v888 = "</head>\n" + '<body class="main">\n';
  var v753 = v888 + '<div class="title">';
  var v517 = v753 + title$$9;
  var v133 = v517 + " results</div>\n";
  v132.write(v133);
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
  var v518 = dnaSequence$$1.search(/./);
  var v134 = v518 != -1;
  if(v134) {
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
  var v135 = j$$5 < lengthOfColumn;
  for(;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn
  }
  var v136 = tempString + theNumber;
  theNumber = v136 + " ";
  var v137 = sequenceToAppend + theNumber;
  sequenceToAppend = v137 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v519 = testArray[0];
  var v138 = v519 != testString;
  if(v138) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v520 = testString.search(re$$2);
  var v139 = v520 == -1;
  if(v139) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v140 = !caughtException;
  if(v140) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v141 = testString != "1X2X3X";
  if(v141) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v521 = testNum.toFixed(3);
  var v142 = v521 != 2489.824;
  if(v142) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v522 = testNum.toPrecision(5);
  var v143 = v522 != 2489.8;
  if(v143) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v523 = theNumber$$1.search(/\d/);
  var v144 = v523 == -1;
  if(v144) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v754 = emblFile.search(/ID/);
  var v524 = v754 == -1;
  var v756 = !v524;
  if(v756) {
    var v889 = emblFile.search(/AC/);
    var v755 = v889 == -1;
    var v891 = !v755;
    if(v891) {
      var v986 = emblFile.search(/DE/);
      var v890 = v986 == -1;
      var v988 = !v890;
      if(v988) {
        var v987 = emblFile.search(/SQ/);
        v890 = v987 == -1
      }
      v755 = v890
    }
    v524 = v755
  }
  var v145 = v524;
  if(v145) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v525 = theNumber$$2.search(/\d/);
  var v146 = v525 == -1;
  if(v146) {
    alert("Please enter a number.");
    return false
  }
  var v148 = theNumber$$2 > maxInput$$2;
  if(v148) {
    var v526 = "Please enter a number less than or equal to " + maxInput$$2;
    var v147 = v526 + ".";
    alert(v147);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v527 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v149 = v527 != -1;
  if(v149) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v528 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v150 = v528 != -1;
  if(v150) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v757 = genBankFile.search(/LOCUS/);
  var v529 = v757 == -1;
  var v759 = !v529;
  if(v759) {
    var v892 = genBankFile.search(/DEFINITION/);
    var v758 = v892 == -1;
    var v894 = !v758;
    if(v894) {
      var v989 = genBankFile.search(/ACCESSION/);
      var v893 = v989 == -1;
      var v991 = !v893;
      if(v991) {
        var v990 = genBankFile.search(/ORIGIN/);
        v893 = v990 == -1
      }
      v758 = v893
    }
    v529 = v758
  }
  var v151 = v529;
  if(v151) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v760 = genBankFile$$1.search(/LOCUS/);
  var v530 = v760 == -1;
  var v762 = !v530;
  if(v762) {
    var v895 = genBankFile$$1.search(/DEFINITION/);
    var v761 = v895 == -1;
    var v897 = !v761;
    if(v897) {
      var v992 = genBankFile$$1.search(/ACCESSION/);
      var v896 = v992 == -1;
      var v994 = !v896;
      if(v994) {
        var v993 = genBankFile$$1.search(/ORIGIN/);
        v896 = v993 == -1
      }
      v761 = v896
    }
    v530 = v761
  }
  var v152 = v530;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v531 = genBankFile$$1.search(/FEATURES {13}/);
  var v153 = v531 == -1;
  if(v153) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v763 = emblFile$$1.search(/ID/);
  var v532 = v763 == -1;
  var v765 = !v532;
  if(v765) {
    var v898 = emblFile$$1.search(/AC/);
    var v764 = v898 == -1;
    var v900 = !v764;
    if(v900) {
      var v995 = emblFile$$1.search(/DE/);
      var v899 = v995 == -1;
      var v997 = !v899;
      if(v997) {
        var v996 = emblFile$$1.search(/SQ/);
        v899 = v996 == -1
      }
      v764 = v899
    }
    v532 = v764
  }
  var v154 = v532;
  if(v154) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v533 = emblFile$$1.search(/^FT/m);
  var v155 = v533 == -1;
  if(v155) {
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
  var v162 = i$$5 < stopBase;
  for(;v162;) {
    var v156 = i$$5 + 1;
    lineOfText = rightNum(v156, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v534 = basePerLine / groupSize;
    var v159 = j$$6 <= v534;
    for(;v159;) {
      var v158 = k < groupSize;
      for(;v158;) {
        var v535 = k + i$$5;
        var v157 = text$$10.charAt(v535);
        lineOfText = lineOfText + v157;
        k = k + 1;
        v158 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v536 = basePerLine / groupSize;
      v159 = j$$6 <= v536
    }
    var v160 = outputWindow.document;
    var v161 = lineOfText + "\n";
    v160.write(v161);
    lineOfText = "";
    v162 = i$$5 < stopBase
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
    var v537 = adjustment < 0;
    if(v537) {
      v537 = adjusted >= 0
    }
    var v163 = v537;
    if(v163) {
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
  var v194 = i$$6 < stopBase$$2;
  for(;v194;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v538 = basePerLine$$2 / groupSize$$2;
    var v170 = j$$7 <= v538;
    for(;v170;) {
      var v166 = k$$1 < groupSize$$2;
      for(;v166;) {
        var v539 = i$$6 + k$$1;
        var v164 = v539 >= stopBase$$2;
        if(v164) {
          break
        }
        var v540 = k$$1 + i$$6;
        var v165 = text$$12.charAt(v540);
        lineOfText$$1 = lineOfText$$1 + v165;
        k$$1 = k$$1 + 1;
        v166 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v168 = numberPosition$$1 == "above";
      if(v168) {
        var v541 = adjustNumbering(i$$6, numberingAdjustment);
        var v167 = rightNum(v541, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v167
      }
      var v169 = i$$6 >= stopBase$$2;
      if(v169) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v542 = basePerLine$$2 / groupSize$$2;
      v170 = j$$7 <= v542
    }
    var v193 = numberPosition$$1 == "left";
    if(v193) {
      var v171 = outputWindow.document;
      var v901 = adjustNumbering(lineNum, numberingAdjustment);
      var v766 = rightNum(v901, "", 8, tabIn$$3);
      var v543 = v766 + lineOfText$$1;
      var v172 = v543 + "\n";
      v171.write(v172);
      var v176 = strands$$1 == "two";
      if(v176) {
        var v173 = outputWindow.document;
        var v902 = adjustNumbering(lineNum, numberingAdjustment);
        var v767 = rightNum(v902, "", 8, tabIn$$3);
        var v768 = complement(lineOfText$$1);
        var v544 = v767 + v768;
        var v174 = v544 + "\n";
        v173.write(v174);
        var v175 = outputWindow.document;
        v175.write("\n")
      }
    }else {
      var v192 = numberPosition$$1 == "right";
      if(v192) {
        var v177 = outputWindow.document;
        var v769 = adjustNumbering(i$$6, numberingAdjustment);
        var v545 = lineOfText$$1 + v769;
        var v178 = v545 + "\n";
        v177.write(v178);
        var v182 = strands$$1 == "two";
        if(v182) {
          var v179 = outputWindow.document;
          var v770 = complement(lineOfText$$1);
          var v771 = adjustNumbering(i$$6, numberingAdjustment);
          var v546 = v770 + v771;
          var v180 = v546 + "\n";
          v179.write(v180);
          var v181 = outputWindow.document;
          v181.write("\n")
        }
      }else {
        var v191 = numberPosition$$1 == "above";
        if(v191) {
          var v183 = outputWindow.document;
          var v184 = aboveNum + "\n";
          v183.write(v184);
          var v185 = outputWindow.document;
          var v186 = lineOfText$$1 + "\n";
          v185.write(v186);
          var v190 = strands$$1 == "two";
          if(v190) {
            var v187 = outputWindow.document;
            var v547 = complement(lineOfText$$1);
            var v188 = v547 + "\n";
            v187.write(v188);
            var v189 = outputWindow.document;
            v189.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v194 = i$$6 < stopBase$$2
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
  var v213 = i$$7 < stopBase$$3;
  for(;v213;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v548 = basePerLine$$3 / groupSize$$3;
    var v201 = j$$8 <= v548;
    for(;v201;) {
      var v197 = k$$2 < groupSize$$3;
      for(;v197;) {
        var v549 = i$$7 + k$$2;
        var v195 = v549 >= stopBase$$3;
        if(v195) {
          break
        }
        var v550 = k$$2 + i$$7;
        var v196 = text$$13.charAt(v550);
        lineOfText$$2 = lineOfText$$2 + v196;
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v199 = numberPosition$$2 == "above";
      if(v199) {
        var v198 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v198
      }
      var v200 = i$$7 >= stopBase$$3;
      if(v200) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v551 = basePerLine$$3 / groupSize$$3;
      v201 = j$$8 <= v551
    }
    var v212 = numberPosition$$2 == "left";
    if(v212) {
      var v202 = outputWindow.document;
      var v772 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v552 = v772 + lineOfText$$2;
      var v203 = v552 + "\n";
      v202.write(v203)
    }else {
      var v211 = numberPosition$$2 == "right";
      if(v211) {
        var v204 = outputWindow.document;
        var v553 = lineOfText$$2 + i$$7;
        var v205 = v553 + "\n";
        v204.write(v205)
      }else {
        var v210 = numberPosition$$2 == "above";
        if(v210) {
          var v206 = outputWindow.document;
          var v207 = aboveNum$$1 + "\n";
          v206.write(v207);
          var v208 = outputWindow.document;
          var v209 = lineOfText$$2 + "\n";
          v208.write(v209)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v213 = i$$7 < stopBase$$3
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
  var v773 = sequence$$13.length;
  var v554 = v773 <= firstIndexToMutate;
  var v775 = !v554;
  if(v775) {
    var v774 = lastIndexToMutate < 0;
    var v903 = !v774;
    if(v903) {
      v774 = lastIndexToMutate <= firstIndexToMutate
    }
    v554 = v774
  }
  var v214 = v554;
  if(v214) {
    numMut = 0
  }
  var i$$8 = 0;
  var v222 = i$$8 < numMut;
  for(;v222;) {
    maxNum = sequence$$13.length;
    var v555 = Math.random();
    var v215 = v555 * maxNum;
    randNum = Math.floor(v215);
    var v556 = randNum < firstIndexToMutate;
    var v776 = !v556;
    if(v776) {
      v556 = randNum > lastIndexToMutate
    }
    var v216 = v556;
    if(v216) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v222 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v557 = Math.random();
      var v558 = components$$1.length;
      var v217 = v557 * v558;
      componentsIndex = Math.round(v217);
      var v559 = components$$1.length;
      var v218 = componentsIndex == v559;
      if(v218) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v560 = components$$1[componentsIndex]
      }
      var v219 = v560 != currentChar;
      if(v219) {
        needNewChar = false
      }
    }
    var v561 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = components$$1[componentsIndex]
    }
    var v220 = v561 + v562;
    var v563 = randNum + 1;
    var v564 = sequence$$13.length;
    var v221 = sequence$$13.substring(v563, v564);
    sequence$$13 = v220 + v221;
    i$$8 = i$$8 + 1;
    v222 = i$$8 < numMut
  }
  var v223 = outputWindow.document;
  var v224 = addReturns(sequence$$13);
  v223.write(v224);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v229 = j$$9 < lengthOut$$1;
  for(;v229;) {
    var v565 = Math.random();
    var v566 = components$$2.length;
    var v225 = v565 * v566;
    tempNum$$1 = Math.floor(v225);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v567 = sequence$$14.length;
    var v228 = v567 == 60;
    if(v228) {
      var v226 = outputWindow.document;
      var v227 = sequence$$14 + "\n";
      v226.write(v227);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v229 = j$$9 < lengthOut$$1
  }
  var v230 = outputWindow.document;
  var v231 = sequence$$14 + "\n";
  v230.write(v231);
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
  var v235 = dnaConformation == "circular";
  if(v235) {
    var v232 = sequence$$15.substring(0, lookAhead);
    shiftValue = v232.length;
    var v904 = sequence$$15.length;
    var v777 = v904 - lookAhead;
    var v778 = sequence$$15.length;
    var v568 = sequence$$15.substring(v777, v778);
    var v233 = v568 + sequence$$15;
    var v234 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v233 + v234;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v236 = outputWindow.document;
  v236.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v237 = outputWindow.document;
  var v905 = '<tr><td class="title" width="200px">' + "Site:";
  var v779 = v905 + '</td><td class="title">';
  var v569 = v779 + "Positions:";
  var v238 = v569 + "</td></tr>\n";
  v237.write(v238);
  var i$$9 = 0;
  var v570 = arrayOfItems.length;
  var v254 = i$$9 < v570;
  for(;v254;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v571 = arrayOfItems[i$$9]
    }
    var v239 = v571.match(/\/.+\//);
    matchExp = v239 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v906 = arrayOfItems[i$$9]
    }
    var v780 = v906.match(/\)\D*\d+/);
    var v572 = v780.toString();
    var v240 = v572.replace(/\)\D*/, "");
    cutDistance = parseFloat(v240);
    var v246 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v246;) {
      var v241 = matchExp.lastIndex;
      matchPosition = v241 - cutDistance;
      var v573 = matchPosition >= lowerLimit;
      if(v573) {
        v573 = matchPosition < upperLimit
      }
      var v244 = v573;
      if(v244) {
        timesFound = timesFound + 1;
        var v242 = tempString$$1 + ", ";
        var v574 = matchPosition - shiftValue;
        var v243 = v574 + 1;
        tempString$$1 = v242 + v243
      }
      var v245 = matchExp;
      var v781 = matchExp.lastIndex;
      var v907 = RegExp.lastMatch;
      var v782 = v907.length;
      var v575 = v781 - v782;
      v245.lastIndex = v575 + 1;
      v246 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v576 = tempString$$1.search(/\d/);
    var v247 = v576 != -1;
    if(v247) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v251 = timesFound == 0;
    if(v251) {
      backGroundClass = "none"
    }else {
      var v250 = timesFound == 1;
      if(v250) {
        backGroundClass = "one"
      }else {
        var v249 = timesFound == 2;
        if(v249) {
          backGroundClass = "two"
        }else {
          var v248 = timesFound == 3;
          if(v248) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v252 = outputWindow.document;
    var v1125 = '<tr><td class="' + backGroundClass;
    var v1097 = v1125 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1157 = arrayOfItems[i$$9]
    }
    var v1142 = v1157.match(/\([^\(]+\)/);
    var v1126 = v1142.toString();
    var v1098 = v1126.replace(/\(|\)/g, "");
    var v1052 = v1097 + v1098;
    var v998 = v1052 + '</td><td class="';
    var v908 = v998 + backGroundClass;
    var v783 = v908 + '">';
    var v577 = v783 + tempString$$1;
    var v253 = v577 + "</td></tr>\n";
    v252.write(v253);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v578 = arrayOfItems.length;
    v254 = i$$9 < v578
  }
  var v255 = outputWindow.document;
  v255.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v256 = outputWindow.document;
  v256.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v257 = outputWindow.document;
  var v1053 = '<tr><td class="title">' + "Pattern:";
  var v999 = v1053 + '</td><td class="title">';
  var v909 = v999 + "Times found:";
  var v784 = v909 + '</td><td class="title">';
  var v579 = v784 + "Percentage:";
  var v258 = v579 + "</td></tr>\n";
  v257.write(v258);
  var i$$10 = 0;
  var v580 = arrayOfItems$$1.length;
  var v267 = i$$10 < v580;
  for(;v267;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = arrayOfItems$$1[i$$10]
    }
    var v259 = v581.match(/\/[^\/]+\//);
    var matchExp$$1 = v259 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v582 = sequence$$16.search(matchExp$$1);
    var v261 = v582 != -1;
    if(v261) {
      var v260 = sequence$$16.match(matchExp$$1);
      tempNumber = v260.length
    }
    var percentage = 0;
    var v785 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1000 = arrayOfItems$$1[i$$10]
    }
    var v910 = v1000.match(/\d+/);
    var v786 = parseFloat(v910);
    var v583 = v785 - v786;
    var v264 = v583 > 0;
    if(v264) {
      var v262 = 100 * tempNumber;
      var v584 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v911 = arrayOfItems$$1[i$$10]
      }
      var v787 = v911.match(/\d+/);
      var v585 = parseFloat(v787);
      var v263 = v584 - v585;
      percentage = v262 / v263
    }
    var v265 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1158 = arrayOfItems$$1[i$$10]
    }
    var v1143 = v1158.match(/\([^\(]+\)\b/);
    var v1127 = v1143.toString();
    var v1099 = v1127.replace(/\(|\)/g, "");
    var v1054 = "<tr><td>" + v1099;
    var v1001 = v1054 + "</td><td>";
    var v912 = v1001 + tempNumber;
    var v788 = v912 + "</td><td>";
    var v789 = percentage.toFixed(2);
    var v586 = v788 + v789;
    var v266 = v586 + "</td></tr>\n";
    v265.write(v266);
    i$$10 = i$$10 + 1;
    var v587 = arrayOfItems$$1.length;
    v267 = i$$10 < v587
  }
  var v268 = outputWindow.document;
  v268.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v588 = sequence$$17.length;
  var v275 = v588 > 0;
  for(;v275;) {
    maxNum$$1 = sequence$$17.length;
    var v589 = Math.random();
    var v269 = v589 * maxNum$$1;
    randNum$$1 = Math.floor(v269);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v270 = randNum$$1 + 1;
    var v271 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v270, v271);
    sequence$$17 = tempString1 + tempString2;
    var v590 = tempSeq.length;
    var v274 = v590 == 60;
    if(v274) {
      var v272 = outputWindow.document;
      var v273 = tempSeq + "\n";
      v272.write(v273);
      tempSeq = ""
    }
    var v591 = sequence$$17.length;
    v275 = v591 > 0
  }
  var v276 = outputWindow.document;
  var v277 = tempSeq + "\n";
  v276.write(v277);
  return true
}
function windowExtract(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v592 = testScript();
  var v278 = v592 == false;
  if(v278) {
    return false
  }
  var v1100 = theDocument.forms;
  var v1055 = v1100[0];
  var v1002 = v1055.elements;
  var v913 = v1002[0];
  var v790 = checkFormElement(v913);
  var v593 = v790 == false;
  var v792 = !v593;
  if(v792) {
    var v1144 = theDocument.forms;
    var v1128 = v1144[0];
    var v1101 = v1128.elements;
    var v1056 = v1101[0];
    var v1003 = v1056.value;
    var v914 = checkSequenceLength(v1003, maxInput$$3);
    var v791 = v914 == false;
    var v916 = !v791;
    if(v916) {
      var v1145 = theDocument.forms;
      var v1129 = v1145[0];
      var v1102 = v1129.elements;
      var v1057 = v1102[1];
      var v1004 = checkFormElement(v1057);
      var v915 = v1004 == false;
      var v1006 = !v915;
      if(v1006) {
        var v1159 = theDocument.forms;
        var v1146 = v1159[0];
        var v1130 = v1146.elements;
        var v1103 = v1130[3];
        var v1058 = checkFormElement(v1103);
        var v1005 = v1058 == false;
        var v1060 = !v1005;
        if(v1060) {
          var v1184 = theDocument.forms;
          var v1178 = v1184[0];
          var v1169 = v1178.elements;
          var v1160 = v1169[1];
          var v1147 = v1160.value;
          var v1131 = v1147.replace(/[^\d]/g, "");
          var v1104 = verifyMaxDigits(v1131, maxInput$$3);
          var v1059 = v1104 == false;
          var v1106 = !v1059;
          if(v1106) {
            var v1185 = theDocument.forms;
            var v1179 = v1185[0];
            var v1170 = v1179.elements;
            var v1161 = v1170[3];
            var v1148 = v1161.value;
            var v1132 = v1148.replace(/[^\d]/g, "");
            var v1105 = verifyMaxDigits(v1132, maxInput$$3);
            v1059 = v1105 == false
          }
          v1005 = v1059
        }
        v915 = v1005
      }
      v791 = v915
    }
    v593 = v791
  }
  var v279 = v593;
  if(v279) {
    return false
  }
  var v1061 = theDocument.forms;
  var v1007 = v1061[0];
  var v917 = v1007.elements;
  var v793 = v917[1];
  var v594 = v793.value;
  var v280 = v594.replace(/[^\d]/g, "");
  var windowSize = parseInt(v280);
  var v1062 = theDocument.forms;
  var v1008 = v1062[0];
  var v918 = v1008.elements;
  var v794 = v918[3];
  var v595 = v794.value;
  var v281 = v595.replace(/[^\d]/g, "");
  var position = parseInt(v281);
  var v919 = theDocument.forms;
  var v795 = v919[0];
  var v596 = v795.elements;
  var v282 = v596[2];
  var orientation = v282.value;
  var start$$4;
  var end$$1;
  var v289 = orientation == "ending";
  if(v289) {
    end$$1 = position;
    var v283 = end$$1 - windowSize;
    start$$4 = v283 + 1
  }else {
    var v288 = orientation == "starting";
    if(v288) {
      start$$4 = position;
      var v284 = start$$4 + windowSize;
      end$$1 = v284 - 1
    }else {
      var v287 = orientation == "centered";
      if(v287) {
        var v796 = windowSize / 2;
        var v597 = Math.round(v796);
        var v285 = position - v597;
        start$$4 = v285 + 1;
        var v286 = start$$4 + windowSize;
        end$$1 = v286 - 1
      }
    }
  }
  var v290 = new Range(start$$4, end$$1);
  ranges.push(v290);
  openWindow("Window Extractor Protein");
  openPre();
  var v1009 = theDocument.forms;
  var v920 = v1009[0];
  var v797 = v920.elements;
  var v598 = v797[0];
  var v291 = v598.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v291);
  var i$$11 = 0;
  var v599 = arrayOfFasta$$1.length;
  var v297 = i$$11 < v599;
  for(;v297;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v292 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v292);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v293 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v293);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v294 = outputWindow.document;
    var v295 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v294.write(v295);
    var v1107 = theDocument.forms;
    var v1063 = v1107[0];
    var v1010 = v1063.elements;
    var v921 = v1010[7];
    var v798 = v921.options;
    var v1108 = theDocument.forms;
    var v1064 = v1108[0];
    var v1011 = v1064.elements;
    var v922 = v1011[7];
    var v799 = v922.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v600 = v798[v799]
    }
    var v296 = v600.value;
    writeSequenceRanges(newProtein, ranges, v296);
    i$$11 = i$$11 + 1;
    var v601 = arrayOfFasta$$1.length;
    v297 = i$$11 < v601
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v602 = testScript();
  var v298 = v602 == false;
  if(v298) {
    return false
  }
  var v1109 = theDocument$$1.forms;
  var v1065 = v1109[0];
  var v1012 = v1065.elements;
  var v923 = v1012[0];
  var v800 = checkFormElement(v923);
  var v603 = v800 == false;
  var v802 = !v603;
  if(v802) {
    var v1149 = theDocument$$1.forms;
    var v1133 = v1149[0];
    var v1110 = v1133.elements;
    var v1066 = v1110[0];
    var v1013 = v1066.value;
    var v924 = checkSequenceLength(v1013, maxInput$$4);
    var v801 = v924 == false;
    var v926 = !v801;
    if(v926) {
      var v1134 = theDocument$$1.forms;
      var v1111 = v1134[0];
      var v1067 = v1111.elements;
      var v1014 = v1067[1];
      var v925 = checkFormElement(v1014);
      v801 = v925 == false
    }
    v603 = v801
  }
  var v299 = v603;
  if(v299) {
    return false
  }
  var v1015 = theDocument$$1.forms;
  var v927 = v1015[0];
  var v803 = v927.elements;
  var v604 = v803[1];
  var v300 = v604.value;
  var arrayOfRanges = v300.split(/,/);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v605 = arrayOfRanges.length;
  var v306 = i$$12 < v605;
  for(;v306;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v301 = arrayOfRanges[i$$12]
    }
    arrayOfStartAndEnd = v301.split(/\.\./);
    var v606 = arrayOfStartAndEnd.length;
    var v305 = v606 == 1;
    if(v305) {
      matchFound$$1 = true;
      var v607 = arrayOfStartAndEnd[0];
      var v608 = arrayOfStartAndEnd[0];
      var v302 = new Range(v607, v608);
      ranges$$1.push(v302)
    }else {
      var v609 = arrayOfStartAndEnd.length;
      var v304 = v609 == 2;
      if(v304) {
        matchFound$$1 = true;
        var v610 = arrayOfStartAndEnd[0];
        var v611 = arrayOfStartAndEnd[1];
        var v303 = new Range(v610, v611);
        ranges$$1.push(v303)
      }
    }
    i$$12 = i$$12 + 1;
    var v612 = arrayOfRanges.length;
    v306 = i$$12 < v612
  }
  var v307 = matchFound$$1 == false;
  if(v307) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v1016 = theDocument$$1.forms;
  var v928 = v1016[0];
  var v804 = v928.elements;
  var v613 = v804[0];
  var v308 = v613.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v308);
  i$$12 = 0;
  var v614 = arrayOfFasta$$2.length;
  var v314 = i$$12 < v614;
  for(;v314;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v309 = arrayOfFasta$$2[i$$12]
    }
    newProtein = getSequenceFromFasta(v309);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v310 = arrayOfFasta$$2[i$$12]
    }
    title = getTitleFromFasta(v310);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v311 = outputWindow.document;
    var v312 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v311.write(v312);
    var v1112 = theDocument$$1.forms;
    var v1068 = v1112[0];
    var v1017 = v1068.elements;
    var v929 = v1017[5];
    var v805 = v929.options;
    var v1113 = theDocument$$1.forms;
    var v1069 = v1113[0];
    var v1018 = v1069.elements;
    var v930 = v1018[5];
    var v806 = v930.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v615 = v805[v806]
    }
    var v313 = v615.value;
    writeSequenceRanges(newProtein, ranges$$1, v313);
    i$$12 = i$$12 + 1;
    var v616 = arrayOfFasta$$2.length;
    v314 = i$$12 < v616
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$2, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v617 = sequence$$18.length;
  var v315 = v617 / 2;
  var center_base = Math.round(v315);
  var i$$13 = 0;
  var v618 = ranges$$2.length;
  var v329 = i$$13 < v618;
  for(;v329;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v316 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v931 = ranges$$2[i$$13]
    }
    var v807 = v931.start;
    var v619 = v807.toString();
    var v1203 = v619.replace(/start|begin/gi, 1);
    v316.start = v1203;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v317 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v932 = ranges$$2[i$$13]
    }
    var v808 = v932.start;
    var v620 = v808.toString();
    var v621 = sequence$$18.length;
    var v1204 = v620.replace(/stop|end/gi, v621);
    v317.start = v1204;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v318 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v933 = ranges$$2[i$$13]
    }
    var v809 = v933.start;
    var v622 = v809.toString();
    var v623 = sequence$$18.length;
    var v1205 = v622.replace(/length/gi, v623);
    v318.start = v1205;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v319 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v934 = ranges$$2[i$$13]
    }
    var v810 = v934.start;
    var v624 = v810.toString();
    var v1206 = v624.replace(/middle|center|centre/gi, center_base);
    v319.start = v1206;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v320 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v935 = ranges$$2[i$$13]
    }
    var v811 = v935.stop;
    var v625 = v811.toString();
    var v1207 = v625.replace(/start|begin/gi, 1);
    v320.stop = v1207;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v321 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v936 = ranges$$2[i$$13]
    }
    var v812 = v936.stop;
    var v626 = v812.toString();
    var v627 = sequence$$18.length;
    var v1208 = v626.replace(/stop|end/gi, v627);
    v321.stop = v1208;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v322 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v937 = ranges$$2[i$$13]
    }
    var v813 = v937.stop;
    var v628 = v813.toString();
    var v629 = sequence$$18.length;
    var v1209 = v628.replace(/length/gi, v629);
    v322.stop = v1209;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v323 = ranges$$2[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v938 = ranges$$2[i$$13]
    }
    var v814 = v938.stop;
    var v630 = v814.toString();
    var v1210 = v630.replace(/middle|center|centre/gi, center_base);
    v323.stop = v1210;
    try {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v324 = ranges$$2[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1019 = ranges$$2[i$$13]
      }
      var v939 = v1019.start;
      var v815 = v939.toString();
      var v631 = eval(v815);
      var v1211 = parseInt(v631);
      v324.start = v1211
    }catch(e$$5) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v816 = ranges$$2[i$$13]
      }
      var v632 = v816.start;
      var v325 = "Could not evaluate the following expression: " + v632;
      alert(v325);
      return false
    }
    try {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v326 = ranges$$2[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1020 = ranges$$2[i$$13]
      }
      var v940 = v1020.stop;
      var v817 = v940.toString();
      var v633 = eval(v817);
      var v1212 = parseInt(v633);
      v326.stop = v1212
    }catch(e$$6) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v818 = ranges$$2[i$$13]
      }
      var v634 = v818.stop;
      var v327 = "Could not evaluate the following expression: " + v634;
      alert(v327);
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v328 = ranges$$2[i$$13]
    }
    rangeGroup.addRange(v328);
    i$$13 = i$$13 + 1;
    var v635 = ranges$$2.length;
    v329 = i$$13 < v635
  }
  rangeGroup.writeRanges(sequence$$18);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v636 = this.start;
  var v637 = this.stop;
  var v344 = v636 == v637;
  if(v344) {
    var v638 = this.start;
    var v331 = v638 < 1;
    if(v331) {
      problem = true;
      var v819 = this.start;
      var v639 = "position value of " + v819;
      var v330 = v639 + " is less than 1";
      warnings.push(v330)
    }
    var v640 = this.start;
    var v641 = sequence$$19.length;
    var v333 = v640 > v641;
    if(v333) {
      problem = true;
      var v820 = this.start;
      var v642 = "position value of " + v820;
      var v332 = v642 + " is greater than the sequence length";
      warnings.push(v332)
    }
  }else {
    var v643 = this.start;
    var v335 = v643 < 1;
    if(v335) {
      problem = true;
      var v821 = this.start;
      var v644 = "position value of " + v821;
      var v334 = v644 + " is less than 1";
      warnings.push(v334)
    }
    var v645 = this.stop;
    var v337 = v645 < 1;
    if(v337) {
      problem = true;
      var v822 = this.stop;
      var v646 = "position value of " + v822;
      var v336 = v646 + " is less than 1";
      warnings.push(v336)
    }
    var v647 = this.start;
    var v648 = sequence$$19.length;
    var v339 = v647 > v648;
    if(v339) {
      problem = true;
      var v823 = this.start;
      var v649 = "position value of " + v823;
      var v338 = v649 + " is greater than the sequence length";
      warnings.push(v338)
    }
    var v650 = this.stop;
    var v651 = sequence$$19.length;
    var v341 = v650 > v651;
    if(v341) {
      problem = true;
      var v824 = this.stop;
      var v652 = "position value of " + v824;
      var v340 = v652 + " is greater than the sequence length";
      warnings.push(v340)
    }
    var v653 = this.start;
    var v654 = this.stop;
    var v343 = v653 > v654;
    if(v343) {
      problem = true;
      var v941 = this.start;
      var v825 = "stop position is less than start position in range " + v941;
      var v655 = v825 + " to ";
      var v656 = this.stop;
      var v342 = v655 + v656;
      warnings.push(v342)
    }
  }
  if(problem) {
    var v657 = warnings.join(",\n");
    var v345 = "An entry was skipped because of the following:\n" + v657;
    alert(v345);
    return false
  }else {
    var v658 = this.start;
    var v659 = this.stop;
    var v349 = v658 == v659;
    if(v349) {
      var v660 = this.start;
      var v346 = v660 - 1;
      return sequence$$19.charAt(v346)
    }else {
      var v661 = this.start;
      var v347 = v661 - 1;
      var v348 = this.stop;
      return sequence$$19.substring(v347, v348)
    }
  }
  return
}
function getTitle() {
  var v662 = this.start;
  var v663 = this.stop;
  var v353 = v662 == v663;
  if(v353) {
    var v350 = this.start;
    return"&gt;residue " + v350
  }else {
    var v826 = this.start;
    var v664 = "&gt;residue " + v826;
    var v351 = v664 + " to ";
    var v352 = this.stop;
    return v351 + v352
  }
  return
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v354 = this.ranges;
  v354.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$16, p1$$9, offset$$21, s$$11) {
    var v665 = p1$$9.length;
    var v355 = offset$$21 + v665;
    return sequence$$20.substring(offset$$21, v355)
  }
  function v8(str$$15, p1$$8, p2$$3, offset$$20, s$$10) {
    var v666 = p1$$8.length;
    var v827 = p1$$8.length;
    var v828 = p2$$3.length;
    var v667 = v827 + v828;
    var v356 = sequence$$20.substring(v666, v667);
    return p1$$8 + v356
  }
  function v7(str$$14, p1$$7, offset$$19, s$$9) {
    var v357 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v358 = p1$$7.length;
    return getRandomSequence(v357, v358)
  }
  function v6(str$$13, p1$$6, p2$$2, offset$$18, s$$8) {
    var v668 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v669 = p2$$2.length;
    var v359 = getRandomSequence(v668, v669);
    return p1$$6 + v359
  }
  function v5(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$11, p1$$4, p2$$1, offset$$16, s$$6) {
    var v360 = p2$$1.toLowerCase();
    return p1$$4 + v360
  }
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$9, p1$$2, p2, offset$$14, s$$4) {
    var v361 = p2.toUpperCase();
    return p1$$2 + v361
  }
  var sequenceArray$$1 = new Array;
  var v670 = this.type;
  var v367 = v670 == "new_sequence";
  if(v367) {
    var i$$14 = 0;
    var v829 = this.ranges;
    var v671 = v829.length;
    var v364 = i$$14 < v671;
    for(;v364;) {
      var v942 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v830 = v942[i$$14]
      }
      var v672 = v830.getSequence(sequence$$20);
      var v363 = v672 != "";
      if(v363) {
        var v831 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v673 = v831[i$$14]
        }
        var v362 = v673.getSequence(sequence$$20);
        sequenceArray$$1.push(v362)
      }
      i$$14 = i$$14 + 1;
      var v832 = this.ranges;
      var v674 = v832.length;
      v364 = i$$14 < v674
    }
    var v365 = outputWindow.document;
    var v833 = sequenceArray$$1.join("");
    var v675 = addReturns(v833);
    var v366 = v675 + "\n\n";
    v365.write(v366);
    return true
  }
  var v676 = this.type;
  var v374 = v676 == "separate";
  if(v374) {
    i$$14 = 0;
    var v834 = this.ranges;
    var v677 = v834.length;
    var v373 = i$$14 < v677;
    for(;v373;) {
      var v943 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v835 = v943[i$$14]
      }
      var v678 = v835.getSequence(sequence$$20);
      var v372 = v678 != "";
      if(v372) {
        var v368 = outputWindow.document;
        var v944 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v836 = v944[i$$14]
        }
        var v679 = v836.getTitle();
        var v369 = v679 + "\n";
        v368.write(v369);
        var v370 = outputWindow.document;
        var v1021 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v945 = v1021[i$$14]
        }
        var v837 = v945.getSequence(sequence$$20);
        var v680 = addReturns(v837);
        var v371 = v680 + "\n\n";
        v370.write(v371)
      }
      i$$14 = i$$14 + 1;
      var v838 = this.ranges;
      var v681 = v838.length;
      v373 = i$$14 < v681
    }
    return true
  }
  var v682 = this.type;
  var v382 = v682 == "uppercased";
  if(v382) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v839 = this.ranges;
    var v683 = v839.length;
    var v379 = i$$14 < v683;
    for(;v379;) {
      var v946 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v840 = v946[i$$14]
      }
      var v684 = v840.getSequence(sequence$$20);
      var v378 = v684 != "";
      if(v378) {
        var v947 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v841 = v947[i$$14]
        }
        var v685 = v841.start;
        var v377 = v685 > 1;
        if(v377) {
          var v1114 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1070 = v1114[i$$14]
          }
          var v1022 = v1070.start;
          var v948 = v1022 - 1;
          var v842 = "(.{" + v948;
          var v686 = v842 + "})\\B(.{";
          var v1071 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1023 = v1071[i$$14]
          }
          var v949 = v1023.stop;
          var v1072 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1024 = v1072[i$$14]
          }
          var v950 = v1024.start;
          var v843 = v949 - v950;
          var v687 = v843 + 1;
          var v375 = v686 + v687;
          re$$3 = v375 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1073 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1025 = v1073[i$$14]
          }
          var v951 = v1025.stop;
          var v1074 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1026 = v1074[i$$14]
          }
          var v952 = v1026.start;
          var v844 = v951 - v952;
          var v688 = v844 + 1;
          var v376 = "(.{" + v688;
          re$$3 = v376 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$14 = i$$14 + 1;
      var v845 = this.ranges;
      var v689 = v845.length;
      v379 = i$$14 < v689
    }
    var v380 = outputWindow.document;
    var v690 = addReturns(sequence$$20);
    var v381 = v690 + "\n\n";
    v380.write(v381);
    return true
  }
  var v691 = this.type;
  var v390 = v691 == "lowercased";
  if(v390) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v846 = this.ranges;
    var v692 = v846.length;
    var v387 = i$$14 < v692;
    for(;v387;) {
      var v953 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v847 = v953[i$$14]
      }
      var v693 = v847.getSequence(sequence$$20);
      var v386 = v693 != "";
      if(v386) {
        var v954 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v848 = v954[i$$14]
        }
        var v694 = v848.start;
        var v385 = v694 > 1;
        if(v385) {
          var v1115 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1075 = v1115[i$$14]
          }
          var v1027 = v1075.start;
          var v955 = v1027 - 1;
          var v849 = "(.{" + v955;
          var v695 = v849 + "})\\B(.{";
          var v1076 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1028 = v1076[i$$14]
          }
          var v956 = v1028.stop;
          var v1077 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1029 = v1077[i$$14]
          }
          var v957 = v1029.start;
          var v850 = v956 - v957;
          var v696 = v850 + 1;
          var v383 = v695 + v696;
          re$$3 = v383 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1078 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1030 = v1078[i$$14]
          }
          var v958 = v1030.stop;
          var v1079 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1031 = v1079[i$$14]
          }
          var v959 = v1031.start;
          var v851 = v958 - v959;
          var v697 = v851 + 1;
          var v384 = "(.{" + v697;
          re$$3 = v384 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$14 = i$$14 + 1;
      var v852 = this.ranges;
      var v698 = v852.length;
      v387 = i$$14 < v698
    }
    var v388 = outputWindow.document;
    var v699 = addReturns(sequence$$20);
    var v389 = v699 + "\n\n";
    v388.write(v389);
    return true
  }
  var v700 = this.type;
  var v398 = v700 == "randomized";
  if(v398) {
    i$$14 = 0;
    var v853 = this.ranges;
    var v701 = v853.length;
    var v395 = i$$14 < v701;
    for(;v395;) {
      var v960 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v854 = v960[i$$14]
      }
      var v702 = v854.getSequence(sequence$$20);
      var v394 = v702 != "";
      if(v394) {
        var v961 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v855 = v961[i$$14]
        }
        var v703 = v855.start;
        var v393 = v703 > 1;
        if(v393) {
          var v1116 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1080 = v1116[i$$14]
          }
          var v1032 = v1080.start;
          var v962 = v1032 - 1;
          var v856 = "(.{" + v962;
          var v704 = v856 + "})\\B(.{";
          var v1081 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1033 = v1081[i$$14]
          }
          var v963 = v1033.stop;
          var v1082 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1034 = v1082[i$$14]
          }
          var v964 = v1034.start;
          var v857 = v963 - v964;
          var v705 = v857 + 1;
          var v391 = v704 + v705;
          re$$3 = v391 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1083 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1035 = v1083[i$$14]
          }
          var v965 = v1035.stop;
          var v1084 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1036 = v1084[i$$14]
          }
          var v966 = v1036.start;
          var v858 = v965 - v966;
          var v706 = v858 + 1;
          var v392 = "(.{" + v706;
          re$$3 = v392 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$14 = i$$14 + 1;
      var v859 = this.ranges;
      var v707 = v859.length;
      v395 = i$$14 < v707
    }
    var v396 = outputWindow.document;
    var v708 = addReturns(sequence$$20);
    var v397 = v708 + "\n\n";
    v396.write(v397);
    return true
  }
  var v709 = this.type;
  var v408 = v709 == "preserved";
  if(v408) {
    var v399 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v400 = sequence$$20.length;
    var randomSequence = getRandomSequence(v399, v400);
    i$$14 = 0;
    var v860 = this.ranges;
    var v710 = v860.length;
    var v405 = i$$14 < v710;
    for(;v405;) {
      var v967 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v861 = v967[i$$14]
      }
      var v711 = v861.getSequence(sequence$$20);
      var v404 = v711 != "";
      if(v404) {
        var v968 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v862 = v968[i$$14]
        }
        var v712 = v862.start;
        var v403 = v712 > 1;
        if(v403) {
          var v1117 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1085 = v1117[i$$14]
          }
          var v1037 = v1085.start;
          var v969 = v1037 - 1;
          var v863 = "(.{" + v969;
          var v713 = v863 + "})\\B(.{";
          var v1086 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1038 = v1086[i$$14]
          }
          var v970 = v1038.stop;
          var v1087 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1039 = v1087[i$$14]
          }
          var v971 = v1039.start;
          var v864 = v970 - v971;
          var v714 = v864 + 1;
          var v401 = v713 + v714;
          re$$3 = v401 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1088 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1040 = v1088[i$$14]
          }
          var v972 = v1040.stop;
          var v1089 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1041 = v1089[i$$14]
          }
          var v973 = v1041.start;
          var v865 = v972 - v973;
          var v715 = v865 + 1;
          var v402 = "(.{" + v715;
          re$$3 = v402 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$14 = i$$14 + 1;
      var v866 = this.ranges;
      var v716 = v866.length;
      v405 = i$$14 < v716
    }
    var v406 = outputWindow.document;
    var v717 = addReturns(randomSequence);
    var v407 = v717 + "\n\n";
    v406.write(v407);
    return true
  }
  return
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1213 = new Array;
  this.ranges = v1213;
  return
}
new Range(0, 0);
var v409 = Range.prototype;
v409.getSequence = getSequence;
var v410 = Range.prototype;
v410.getTitle = getTitle;
new RangeGroup("", "");
var v411 = RangeGroup.prototype;
v411.addRange = addRange;
var v412 = RangeGroup.prototype;
v412.writeRanges = writeRanges;
document.onload = v10;
var v413 = document.getElementById("submitbtn");
v413.onclick = v11;
var v414 = document.getElementById("clearbtn");
v414.onclick = v12;

JAM.stopProfile('load');

