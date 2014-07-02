
JAM.startProfile('load');
function v4() {
  var v927 = document.forms;
  var v723 = v927[0];
  var v408 = v723.elements;
  var v5 = v408[0];
  v5.value = " ";
  var v928 = document.forms;
  var v724 = v928[0];
  var v409 = v724.elements;
  var v6 = v409[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    fuzzySearchDna(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v410 = document.main_form;
  var v8 = v410.main_submit;
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
  var v411 = arrayOfSequences.length;
  var v10 = v411 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v412 = arrayOfTitles.length;
  var v12 = i$$1 < v412;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v929 = arrayOfTitles[i$$1]
    }
    var v725 = JAMScript.call(v929.search, v929, [/\S/]);
    var v413 = v725 == -1;
    var v727 = !v413;
    if(v727) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1035 = arrayOfSequences[i$$1]
      }
      var v930 = JAMScript.call(v1035.search, v1035, [/\S/]);
      var v726 = v930 == -1;
      var v932 = !v726;
      if(v932) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1036 = arrayOfSequences[i$$1]
        }
        var v931 = v1036.length;
        v726 = v931 != lengthOfAlign
      }
      v413 = v726
    }
    var v11 = v413;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v414 = arrayOfTitles.length;
    v12 = i$$1 < v414
  }
  return true
}
function checkCodonTable(codonTable) {
  var v728 = JAMScript.call(codonTable.search, codonTable, [/AmAcid/]);
  var v415 = v728 == -1;
  var v730 = !v415;
  if(v730) {
    var v933 = JAMScript.call(codonTable.search, codonTable, [/Codon/]);
    var v729 = v933 == -1;
    var v935 = !v729;
    if(v935) {
      var v1037 = JAMScript.call(codonTable.search, codonTable, [/Number/]);
      var v934 = v1037 == -1;
      var v1039 = !v934;
      if(v1039) {
        var v1092 = JAMScript.call(codonTable.search, codonTable, [/\/1000/]);
        var v1038 = v1092 == -1;
        var v1094 = !v1038;
        if(v1094) {
          var v1093 = JAMScript.call(codonTable.search, codonTable, [/Fraction\s*\.\./]);
          v1038 = v1093 == -1
        }
        v934 = v1038
      }
      v729 = v934
    }
    v415 = v729
  }
  var v13 = v415;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v731 = formElement.value;
  var v416 = JAMScript.call(v731.search, v731, [/\S/]);
  var v14 = v416 == -1;
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
  var v417 = arrayOfPatterns.length;
  var v17 = z$$2 < v417;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v732 = arrayOfPatterns[z$$2]
    }
    var v418 = JAMScript.call(v732.search, v732, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]);
    var v15 = v418 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v733 = arrayOfPatterns[z$$2]
    }
    var v419 = moreExpressionCheck(v733);
    var v16 = v419 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v420 = arrayOfPatterns.length;
    v17 = z$$2 < v420
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v421 = arrayOfPatterns.length;
  var v26 = j < v421;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v936 = arrayOfPatterns[j]
    }
    var v734 = JAMScript.call(v936.match, v936, [/\/.+\//]);
    var v422 = v734 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1211 = eval("introspect(JAMScript.introspectors.processAll) { " + v422 + " }")
    }else {
      var v1211 = JAMScript.call(eval, null, [v422])
    }
    v20[v21] = v1211;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v735 = arrayOfPatterns[j]
    }
    var v423 = JAMScript.call(v735.match, v735, [/=[a-zA-Z\*]/]);
    var v1212 = v423.toString();
    v22[v23] = v1212;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v424 = geneticCodeMatchResult[j]
    }
    var v1213 = v424.replace(/=/g, "");
    v24[v25] = v1213;
    j = j + 1;
    var v425 = arrayOfPatterns.length;
    v26 = j < v425
  }
  var i$$2 = 0;
  var v736 = testSequence.length;
  var v426 = v736 - 3;
  var v33 = i$$2 <= v426;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v427 = geneticCodeMatchExp.length;
    var v31 = j < v427;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v737 = geneticCodeMatchExp[j]
      }
      var v428 = JAMScript.call(codon.search, codon, [v737]);
      var v30 = v428 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v429 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v429 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v430 = geneticCodeMatchExp.length;
      v31 = j < v430
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v738 = testSequence.length;
    var v431 = v738 - 3;
    v33 = i$$2 <= v431
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v432 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v432;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v739 = arrayOfPatterns$$1[z$$3]
    }
    var v433 = JAMScript.call(v739.search, v739, [/[^acdefghiklmnpqrstvwyz]/i]);
    var v34 = v433 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v434 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v434
  }
  var i$$3 = 0;
  var v435 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v435;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v740 = arrayOfPatterns$$1[i$$3]
    }
    var v436 = "[" + v740;
    var v36 = v436 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v437 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v437;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v741 = arrayOfPatterns$$1[j$$1]
      }
      var v438 = JAMScript.call(v741.search, v741, [re]);
      var v37 = v438 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v439 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v439
    }
    i$$3 = i$$3 + 1;
    var v440 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v440
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v441 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v441;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v742 = arrayOfPatterns$$2[z$$4]
    }
    var v442 = JAMScript.call(v742.search, v742, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]);
    var v40 = v442 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfPatterns$$2[z$$4]
    }
    var v443 = moreExpressionCheck(v743);
    var v41 = v443 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v444 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v444
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v937 = getSequenceFromFasta(text$$7);
  var v744 = v937.replace(/[^A-Za-z]/g, "");
  var v445 = v744.length;
  var v44 = v445 > maxInput;
  if(v44) {
    var v446 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v446 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v447 = text$$8.length;
  var v46 = v447 > maxInput$$1;
  if(v46) {
    var v448 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v448 + " characters.";
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
  var v449 = alignArray.length;
  var v53 = v449 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v450 = alignArray.length;
  var v55 = i$$4 < v450;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v745 = alignArray[i$$4]
    }
    var v451 = JAMScript.call(v745.search, v745, [/[^\s]+\s/]);
    var v54 = v451 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v452 = alignArray.length;
    v55 = i$$4 < v452
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
  var v453 = JAMScript.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v58 = v453 != -1;
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
  var v454 = sequence$$2.length;
  var v59 = "&gt;results for " + v454;
  var stringToReturn = v59 + " residue sequence ";
  var v455 = JAMScript.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/]);
  var v61 = v455 != -1;
  if(v61) {
    var v456 = stringToReturn + '"';
    var v60 = v456 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v457 = stringToReturn + ' starting "';
  var v458 = sequence$$2.substring(0, 10);
  var v62 = v457 + v458;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v459 = sequenceOne.length;
  var v63 = "Search results for " + v459;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v460 = JAMScript.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/]);
  var v65 = v460 != -1;
  if(v65) {
    var v461 = stringToReturn$$1 + '"';
    var v64 = v461 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v462 = stringToReturn$$1 + ' starting "';
  var v463 = sequenceOne.substring(0, 10);
  var v66 = v462 + v463;
  stringToReturn$$1 = v66 + '"\n';
  var v464 = stringToReturn$$1 + "and ";
  var v465 = sequenceTwo.length;
  var v67 = v464 + v465;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v466 = JAMScript.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/]);
  var v69 = v466 != -1;
  if(v69) {
    var v467 = stringToReturn$$1 + '"';
    var v68 = v467 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v468 = stringToReturn$$1 + ' starting "';
  var v469 = sequenceTwo.substring(0, 10);
  var v70 = v468 + v469;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v470 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v470;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v938 = arrayOfPatterns$$3[j$$2]
    }
    var v746 = JAMScript.call(v938.match, v938, [/\/.+\//]);
    var v471 = v746 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1214 = eval("introspect(JAMScript.introspectors.processAll) { " + v471 + " }")
    }else {
      var v1214 = JAMScript.call(eval, null, [v471])
    }
    v73[v74] = v1214;
    j$$2 = j$$2 + 1;
    var v472 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v472
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v473 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v473;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v747 = arrayOfPatterns$$4[j$$3]
    }
    var v474 = JAMScript.call(v747.match, v747, [/=[a-zA-Z\*]/]);
    var v1215 = v474.toString();
    v77[v78] = v1215;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v475 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1216 = v475.replace(/=/g, "");
    v79[v80] = v1216;
    j$$3 = j$$3 + 1;
    var v476 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v476
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v477 = sequence$$3.length;
  var v82 = "Results for " + v477;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v478 = JAMScript.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/]);
  var v84 = v478 != -1;
  if(v84) {
    var v479 = stringToReturn$$2 + '"';
    var v83 = v479 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v480 = stringToReturn$$2 + ' starting "';
  var v481 = sequence$$3.substring(0, 10);
  var v85 = v480 + v481;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v748 = "Results for " + topology;
  var v482 = v748 + " ";
  var v483 = sequence$$4.length;
  var v87 = v482 + v483;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v484 = JAMScript.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/]);
  var v89 = v484 != -1;
  if(v89) {
    var v485 = stringToReturn$$3 + '"';
    var v88 = v485 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v486 = stringToReturn$$3 + ' starting "';
  var v487 = sequence$$4.substring(0, 10);
  var v90 = v486 + v487;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v488 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v488;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v489 = JAMScript.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/]);
  var v94 = v489 != -1;
  if(v94) {
    var v490 = stringToReturn$$4 + '"';
    var v93 = v490 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v491 = stringToReturn$$4 + ' starting "';
  var v492 = sequenceOne$$1.substring(0, 10);
  var v95 = v491 + v492;
  stringToReturn$$4 = v95 + '"\n';
  var v493 = stringToReturn$$4 + "and ";
  var v494 = sequenceTwo$$1.length;
  var v96 = v493 + v494;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v495 = JAMScript.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/]);
  var v98 = v495 != -1;
  if(v98) {
    var v496 = stringToReturn$$4 + '"';
    var v97 = v496 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v497 = stringToReturn$$4 + ' starting "';
  var v498 = sequenceTwo$$1.substring(0, 10);
  var v99 = v497 + v498;
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
    var v499 = Math.random();
    var v500 = components.length;
    var v101 = v499 * v500;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v501 = JAMScript.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v103 = v501 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v502 = JAMScript.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v105 = v502 != -1;
  if(v105) {
    var v104 = JAMScript.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""]);
    fastaTitle = v104.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v749 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]);
  var v503 = v749 != -1;
  var v751 = !v503;
  if(v751) {
    var v939 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]);
    var v750 = v939 != -1;
    var v941 = !v750;
    if(v941) {
      var v1040 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[\]/]);
      var v940 = v1040 != -1;
      var v1042 = !v940;
      if(v1042) {
        var v1095 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]);
        var v1041 = v1095 != -1;
        var v1097 = !v1041;
        if(v1097) {
          var v1123 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]);
          var v1096 = v1123 != -1;
          var v1125 = !v1096;
          if(v1125) {
            var v1146 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\|/]);
            var v1124 = v1146 != -1;
            var v1148 = !v1124;
            if(v1148) {
              var v1160 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/\|/]);
              var v1147 = v1160 != -1;
              var v1162 = !v1147;
              if(v1162) {
                var v1172 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\//]);
                var v1161 = v1172 != -1;
                var v1174 = !v1161;
                if(v1174) {
                  var v1182 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]);
                  var v1173 = v1182 != -1;
                  var v1184 = !v1173;
                  if(v1184) {
                    var v1189 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\</]);
                    var v1183 = v1189 != -1;
                    var v1191 = !v1183;
                    if(v1191) {
                      var v1190 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\>/]);
                      v1183 = v1190 != -1
                    }
                    v1173 = v1183
                  }
                  v1161 = v1173
                }
                v1147 = v1161
              }
              v1124 = v1147
            }
            v1096 = v1124
          }
          v1041 = v1096
        }
        v940 = v1041
      }
      v750 = v940
    }
    v503 = v750
  }
  var v106 = v503;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1222 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1222[2], v1222[1], v1222[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v942 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v752 = v942 + "<head>\n";
  var v504 = v752 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v504 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1204 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1200 = v1204 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1196 = v1200 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1192 = v1196 + "div.info {font-weight: bold}\n";
    var v1185 = v1192 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1175 = v1185 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1163 = v1175 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1149 = v1163 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1126 = v1149 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1098 = v1126 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1043 = v1098 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v943 = v1043 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v753 = v943 + "td.many {color: #000000}\n";
    var v505 = v753 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v505 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1208 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1205 = v1208 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1201 = v1205 + "div.title {display: none}\n";
    var v1197 = v1201 + "div.info {font-weight: bold}\n";
    var v1193 = v1197 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1186 = v1193 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1176 = v1186 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1164 = v1176 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1150 = v1164 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1127 = v1150 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1099 = v1127 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1044 = v1099 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v944 = v1044 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v754 = v944 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v506 = v754 + "img {display: none}\n";
    var v116 = v506 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v945 = "</head>\n" + '<body class="main">\n';
  var v755 = v945 + '<div class="title">';
  var v507 = v755 + title$$6;
  var v118 = v507 + " results</div>\n";
  JAMScript.call(v117.write, v117, [v118]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1223 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1223[2], v1223[1], v1223[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v946 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v756 = v946 + "<head>\n";
  var v508 = v756 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v508 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1206 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1202 = v1206 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1198 = v1202 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1194 = v1198 + "div.info {font-weight: bold}\n";
    var v1187 = v1194 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1177 = v1187 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1165 = v1177 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1151 = v1165 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1128 = v1151 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1100 = v1128 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1045 = v1100 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v947 = v1045 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v757 = v947 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v509 = v757 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v509 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1210 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1209 = v1210 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1207 = v1209 + "div.title {display: none}\n";
    var v1203 = v1207 + "div.info {font-weight: bold}\n";
    var v1199 = v1203 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1195 = v1199 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1188 = v1195 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1178 = v1188 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1166 = v1178 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1152 = v1166 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1129 = v1152 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1101 = v1129 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1046 = v1101 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v948 = v1046 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v758 = v948 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v510 = v758 + "img {display: none}\n";
    var v124 = v510 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v949 = "</head>\n" + '<body class="main">\n';
  var v759 = v949 + '<div class="title">';
  var v511 = v759 + title$$8;
  var v126 = v511 + " results</div>\n";
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
  var v512 = JAMScript.call(dnaSequence$$1.search, dnaSequence$$1, [/./]);
  var v127 = v512 != -1;
  if(v127) {
    tempDnaArray = JAMScript.call(dnaSequence$$1.match, dnaSequence$$1, [/./g]);
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
  var v513 = testArray[0];
  var v131 = v513 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v514 = JAMScript.call(testString.search, testString, [re$$2]);
  var v132 = v514 == -1;
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
  var v515 = testNum.toFixed(3);
  var v135 = v515 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v516 = testNum.toPrecision(5);
  var v136 = v516 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v517 = JAMScript.call(theNumber$$1.search, theNumber$$1, [/\d/]);
  var v137 = v517 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v760 = JAMScript.call(emblFile.search, emblFile, [/ID/]);
  var v518 = v760 == -1;
  var v762 = !v518;
  if(v762) {
    var v950 = JAMScript.call(emblFile.search, emblFile, [/AC/]);
    var v761 = v950 == -1;
    var v952 = !v761;
    if(v952) {
      var v1047 = JAMScript.call(emblFile.search, emblFile, [/DE/]);
      var v951 = v1047 == -1;
      var v1049 = !v951;
      if(v1049) {
        var v1048 = JAMScript.call(emblFile.search, emblFile, [/SQ/]);
        v951 = v1048 == -1
      }
      v761 = v951
    }
    v518 = v761
  }
  var v138 = v518;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v519 = JAMScript.call(theNumber$$2.search, theNumber$$2, [/\d/]);
  var v139 = v519 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v520 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v520 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v521 = JAMScript.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i]);
  var v142 = v521 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v522 = JAMScript.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i]);
  var v143 = v522 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v763 = JAMScript.call(genBankFile.search, genBankFile, [/LOCUS/]);
  var v523 = v763 == -1;
  var v765 = !v523;
  if(v765) {
    var v953 = JAMScript.call(genBankFile.search, genBankFile, [/DEFINITION/]);
    var v764 = v953 == -1;
    var v955 = !v764;
    if(v955) {
      var v1050 = JAMScript.call(genBankFile.search, genBankFile, [/ACCESSION/]);
      var v954 = v1050 == -1;
      var v1052 = !v954;
      if(v1052) {
        var v1051 = JAMScript.call(genBankFile.search, genBankFile, [/ORIGIN/]);
        v954 = v1051 == -1
      }
      v764 = v954
    }
    v523 = v764
  }
  var v144 = v523;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v766 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]);
  var v524 = v766 == -1;
  var v768 = !v524;
  if(v768) {
    var v956 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]);
    var v767 = v956 == -1;
    var v958 = !v767;
    if(v958) {
      var v1053 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]);
      var v957 = v1053 == -1;
      var v1055 = !v957;
      if(v1055) {
        var v1054 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]);
        v957 = v1054 == -1
      }
      v767 = v957
    }
    v524 = v767
  }
  var v145 = v524;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v525 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/]);
  var v146 = v525 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v769 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/ID/]);
  var v526 = v769 == -1;
  var v771 = !v526;
  if(v771) {
    var v959 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/AC/]);
    var v770 = v959 == -1;
    var v961 = !v770;
    if(v961) {
      var v1056 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/DE/]);
      var v960 = v1056 == -1;
      var v1058 = !v960;
      if(v1058) {
        var v1057 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/SQ/]);
        v960 = v1057 == -1
      }
      v770 = v960
    }
    v526 = v770
  }
  var v147 = v526;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v527 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/^FT/m]);
  var v148 = v527 == -1;
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
    var v528 = basePerLine / groupSize;
    var v152 = j$$6 <= v528;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v529 = k + i$$5;
        var v150 = text$$10.charAt(v529);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v530 = basePerLine / groupSize;
      v152 = j$$6 <= v530
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
    var v531 = adjustment < 0;
    if(v531) {
      v531 = adjusted >= 0
    }
    var v156 = v531;
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
    var v532 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v532;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v533 = i$$6 + k$$1;
        var v157 = v533 >= stopBase$$2;
        if(v157) {
          break
        }
        var v534 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v534);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v535 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v535, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v536 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v536
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v962 = adjustNumbering(lineNum, numberingAdjustment);
      var v772 = rightNum(v962, "", 8, tabIn$$3);
      var v537 = v772 + lineOfText$$1;
      var v165 = v537 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v963 = adjustNumbering(lineNum, numberingAdjustment);
        var v773 = rightNum(v963, "", 8, tabIn$$3);
        var v774 = complement(lineOfText$$1);
        var v538 = v773 + v774;
        var v167 = v538 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v775 = adjustNumbering(i$$6, numberingAdjustment);
        var v539 = lineOfText$$1 + v775;
        var v171 = v539 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v776 = complement(lineOfText$$1);
          var v777 = adjustNumbering(i$$6, numberingAdjustment);
          var v540 = v776 + v777;
          var v173 = v540 + "\n";
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
            var v541 = complement(lineOfText$$1);
            var v181 = v541 + "\n";
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
    var v542 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v542;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v543 = i$$7 + k$$2;
        var v188 = v543 >= stopBase$$3;
        if(v188) {
          break
        }
        var v544 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v544);
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
      var v545 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v545
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v778 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v546 = v778 + lineOfText$$2;
      var v196 = v546 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v547 = lineOfText$$2 + i$$7;
        var v198 = v547 + "\n";
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
  var v779 = sequence$$13.length;
  var v548 = v779 <= firstIndexToMutate;
  var v781 = !v548;
  if(v781) {
    var v780 = lastIndexToMutate < 0;
    var v964 = !v780;
    if(v964) {
      v780 = lastIndexToMutate <= firstIndexToMutate
    }
    v548 = v780
  }
  var v207 = v548;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v549 = Math.random();
    var v208 = v549 * maxNum;
    randNum = Math.floor(v208);
    var v550 = randNum < firstIndexToMutate;
    var v782 = !v550;
    if(v782) {
      v550 = randNum > lastIndexToMutate
    }
    var v209 = v550;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v551 = Math.random();
      var v552 = components$$1.length;
      var v210 = v551 * v552;
      componentsIndex = Math.round(v210);
      var v553 = components$$1.length;
      var v211 = componentsIndex == v553;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v554 = components$$1[componentsIndex]
      }
      var v212 = v554 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v555 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v556 = components$$1[componentsIndex]
    }
    var v213 = v555 + v556;
    var v557 = randNum + 1;
    var v558 = sequence$$13.length;
    var v214 = sequence$$13.substring(v557, v558);
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
    var v559 = Math.random();
    var v560 = components$$2.length;
    var v218 = v559 * v560;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v561 = sequence$$14.length;
    var v221 = v561 == 60;
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
    var v965 = sequence$$15.length;
    var v783 = v965 - lookAhead;
    var v784 = sequence$$15.length;
    var v562 = sequence$$15.substring(v783, v784);
    var v226 = v562 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v966 = '<tr><td class="title" width="200px">' + "Site:";
  var v785 = v966 + '</td><td class="title">';
  var v563 = v785 + "Positions:";
  var v231 = v563 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v564 = arrayOfItems.length;
  var v247 = i$$9 < v564;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v565 = arrayOfItems[i$$9]
    }
    var v232 = JAMScript.call(v565.match, v565, [/\/.+\//]);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v967 = arrayOfItems[i$$9]
    }
    var v786 = JAMScript.call(v967.match, v967, [/\)\D*\d+/]);
    var v566 = v786.toString();
    var v233 = v566.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v567 = matchPosition >= lowerLimit;
      if(v567) {
        v567 = matchPosition < upperLimit
      }
      var v237 = v567;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v568 = matchPosition - shiftValue;
        var v236 = v568 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v787 = matchExp.lastIndex;
      var v968 = RegExp.lastMatch;
      var v788 = v968.length;
      var v569 = v787 - v788;
      v238.lastIndex = v569 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v570 = JAMScript.call(tempString$$1.search, tempString$$1, [/\d/]);
    var v240 = v570 != -1;
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
    var v1153 = '<tr><td class="' + backGroundClass;
    var v1130 = v1153 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1179 = arrayOfItems[i$$9]
    }
    var v1167 = JAMScript.call(v1179.match, v1179, [/\([^\(]+\)/]);
    var v1154 = v1167.toString();
    var v1131 = v1154.replace(/\(|\)/g, "");
    var v1102 = v1130 + v1131;
    var v1059 = v1102 + '</td><td class="';
    var v969 = v1059 + backGroundClass;
    var v789 = v969 + '">';
    var v571 = v789 + tempString$$1;
    var v246 = v571 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v572 = arrayOfItems.length;
    v247 = i$$9 < v572
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
  var v1103 = '<tr><td class="title">' + "Pattern:";
  var v1060 = v1103 + '</td><td class="title">';
  var v970 = v1060 + "Times found:";
  var v790 = v970 + '</td><td class="title">';
  var v573 = v790 + "Percentage:";
  var v251 = v573 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v574 = arrayOfItems$$1.length;
  var v260 = i$$10 < v574;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v575 = arrayOfItems$$1[i$$10]
    }
    var v252 = JAMScript.call(v575.match, v575, [/\/[^\/]+\//]);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v576 = JAMScript.call(sequence$$16.search, sequence$$16, [matchExp$$1]);
    var v254 = v576 != -1;
    if(v254) {
      var v253 = JAMScript.call(sequence$$16.match, sequence$$16, [matchExp$$1]);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v791 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1061 = arrayOfItems$$1[i$$10]
    }
    var v971 = JAMScript.call(v1061.match, v1061, [/\d+/]);
    var v792 = parseFloat(v971);
    var v577 = v791 - v792;
    var v257 = v577 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v578 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v972 = arrayOfItems$$1[i$$10]
      }
      var v793 = JAMScript.call(v972.match, v972, [/\d+/]);
      var v579 = parseFloat(v793);
      var v256 = v578 - v579;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1180 = arrayOfItems$$1[i$$10]
    }
    var v1168 = JAMScript.call(v1180.match, v1180, [/\([^\(]+\)\b/]);
    var v1155 = v1168.toString();
    var v1132 = v1155.replace(/\(|\)/g, "");
    var v1104 = "<tr><td>" + v1132;
    var v1062 = v1104 + "</td><td>";
    var v973 = v1062 + tempNumber;
    var v794 = v973 + "</td><td>";
    var v795 = percentage.toFixed(2);
    var v580 = v794 + v795;
    var v259 = v580 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v581 = arrayOfItems$$1.length;
    v260 = i$$10 < v581
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
  var v582 = sequence$$17.length;
  var v268 = v582 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v583 = Math.random();
    var v262 = v583 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v584 = tempSeq.length;
    var v267 = v584 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v585 = sequence$$17.length;
    v268 = v585 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function fuzzySearchDna(theDocument) {
  JAM.startProfile('compute');

  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v586 = testScript();
  var v271 = v586 == false;
  if(v271) {
    return false
  }
  var v1133 = theDocument.forms;
  var v1105 = v1133[0];
  var v1063 = v1105.elements;
  var v974 = v1063[0];
  var v796 = checkFormElement(v974);
  var v587 = v796 == false;
  var v798 = !v587;
  if(v798) {
    var v1169 = theDocument.forms;
    var v1156 = v1169[0];
    var v1134 = v1156.elements;
    var v1106 = v1134[0];
    var v1064 = v1106.value;
    var v975 = checkSequenceLength(v1064, maxTarget);
    var v797 = v975 == false;
    var v977 = !v797;
    if(v977) {
      var v1170 = theDocument.forms;
      var v1157 = v1170[0];
      var v1135 = v1157.elements;
      var v1107 = v1135[1];
      var v1065 = checkFormElement(v1107);
      var v976 = v1065 == false;
      var v1067 = !v976;
      if(v1067) {
        var v1181 = theDocument.forms;
        var v1171 = v1181[0];
        var v1158 = v1171.elements;
        var v1136 = v1158[1];
        var v1108 = v1136.value;
        var v1066 = checkSequenceLength(v1108, maxQuery);
        v976 = v1066 == false
      }
      v797 = v976
    }
    v587 = v797
  }
  var v272 = v587;
  if(v272) {
    return false
  }
  var v1137 = theDocument.forms;
  var v1109 = v1137[0];
  var v1068 = v1109.elements;
  var v978 = v1068[5];
  var v799 = v978.options;
  var v1138 = theDocument.forms;
  var v1110 = v1138[0];
  var v1069 = v1110.elements;
  var v979 = v1069[5];
  var v800 = v979.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v588 = v799[v800]
  }
  var v273 = v588.value;
  var MATCH_SCORE = parseInt(v273);
  var v1139 = theDocument.forms;
  var v1111 = v1139[0];
  var v1070 = v1111.elements;
  var v980 = v1070[6];
  var v801 = v980.options;
  var v1140 = theDocument.forms;
  var v1112 = v1140[0];
  var v1071 = v1112.elements;
  var v981 = v1071[6];
  var v802 = v981.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v589 = v801[v802]
  }
  var v274 = v589.value;
  var MISMATCH_SCORE = parseInt(v274);
  var v1141 = theDocument.forms;
  var v1113 = v1141[0];
  var v1072 = v1113.elements;
  var v982 = v1072[7];
  var v803 = v982.options;
  var v1142 = theDocument.forms;
  var v1114 = v1142[0];
  var v1073 = v1114.elements;
  var v983 = v1073[7];
  var v804 = v983.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v590 = v803[v804]
  }
  var v275 = v590.value;
  var GAP_PENALTY = parseInt(v275);
  var v1143 = theDocument.forms;
  var v1115 = v1143[0];
  var v1074 = v1115.elements;
  var v984 = v1074[8];
  var v805 = v984.options;
  var v1144 = theDocument.forms;
  var v1116 = v1144[0];
  var v1075 = v1116.elements;
  var v985 = v1075[8];
  var v806 = v985.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v591 = v805[v806]
  }
  var v276 = v591.value;
  var HITS = parseInt(v276);
  openWindow("Fuzzy Search DNA");
  openPre();
  var v1076 = theDocument.forms;
  var v986 = v1076[0];
  var v807 = v986.elements;
  var v592 = v807[0];
  var v277 = v592.value;
  targetSequence = getSequenceFromFasta(v277);
  targetSequence = removeNonDna(targetSequence);
  var v1077 = theDocument.forms;
  var v987 = v1077[0];
  var v808 = v987.elements;
  var v593 = v808[0];
  var v278 = v593.value;
  targetTitle = getTitleFromFasta(v278);
  var v1078 = theDocument.forms;
  var v988 = v1078[0];
  var v809 = v988.elements;
  var v594 = v809[1];
  var v279 = v594.value;
  querySequence = getSequenceFromFasta(v279);
  querySequence = removeNonDna(querySequence);
  queryTitle = "query";
  var v280 = outputWindow.document;
  var v281 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAMScript.call(v280.write, v280, [v281]);
  var v595 = JAMScript.call(targetSequence.search, targetSequence, [/./]);
  var v282 = v595 != -1;
  if(v282) {
    targetSequence = JAMScript.call(targetSequence.match, targetSequence, [/./g])
  }
  var v596 = JAMScript.call(querySequence.search, querySequence, [/./]);
  var v283 = v596 != -1;
  if(v283) {
    querySequence = JAMScript.call(querySequence.match, querySequence, [/./g])
  }
  var v597 = targetSequence.length;
  var v284 = v597 == 0;
  if(v284) {
    alert("The sequence contains no DNA bases.");
    return false
  }
  var v598 = querySequence.length;
  var v285 = v598 == 0;
  if(v285) {
    alert("The query sequence contains no DNA bases.");
    return false
  }
  _fuzzySearchDna(queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = new Identity;
  JAMScript.call(matrix.setMatch, matrix, [matchScore]);
  JAMScript.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, hits]);
  var fuzzySearch = new FuzzySearch;
  JAMScript.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet]);
  JAMScript.call(fuzzySearch.search, fuzzySearch, []);
  hits = JAMScript.call(fuzzySearch.getHits, fuzzySearch, []);
  var v599 = hits.length;
  var v298 = v599 > 0;
  if(v298) {
    var i$$11 = 0;
    var v600 = hits.length;
    var v296 = i$$11 < v600;
    for(;v296;) {
      var v286 = outputWindow.document;
      var v1117 = ">" + queryTitle$$1;
      var v1079 = v1117 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1118 = hits[i$$11]
      }
      var v1080 = v1118.startM;
      var v989 = v1079 + v1080;
      var v810 = v989 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v990 = hits[i$$11]
      }
      var v811 = v990.endM;
      var v601 = v810 + v811;
      var v287 = v601 + "\n";
      JAMScript.call(v286.write, v286, [v287]);
      var v288 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v812 = hits[i$$11]
      }
      var v602 = v812.sequenceM;
      var v289 = v602 + "\n";
      JAMScript.call(v288.write, v288, [v289]);
      var v290 = outputWindow.document;
      var v1119 = ">" + targetTitle$$1;
      var v1081 = v1119 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1120 = hits[i$$11]
      }
      var v1082 = v1120.startN;
      var v991 = v1081 + v1082;
      var v813 = v991 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v992 = hits[i$$11]
      }
      var v814 = v992.endN;
      var v603 = v813 + v814;
      var v291 = v603 + "\n";
      JAMScript.call(v290.write, v290, [v291]);
      var v292 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v815 = hits[i$$11]
      }
      var v604 = v815.sequenceN;
      var v293 = v604 + "\n";
      JAMScript.call(v292.write, v292, [v293]);
      var v294 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v993 = hits[i$$11]
      }
      var v816 = v993.score;
      var v605 = "Score: " + v816;
      var v295 = v605 + "\n\n";
      JAMScript.call(v294.write, v294, [v295]);
      i$$11 = i$$11 + 1;
      var v606 = hits.length;
      v296 = i$$11 < v606
    }
  }else {
    var v297 = outputWindow.document;
    JAMScript.call(v297.write, v297, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v299 = this.scoringMatrix;
  return JAMScript.call(v299.scoringMatrix_getScore, v299, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return
}
function ScoreSet() {
  return
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v300 = r1$$2 == r2$$1;
  if(v300) {
    return this.match
  }else {
    return this.mismatch
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return
}
function Identity() {
  return
}
function Node() {
  this.alreadyMatched = false;
  return
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v817 = this.M;
  var v607 = v817.length;
  var v301 = v607 + 1;
  var v1217 = new Array(v301);
  this.nodes = v1217;
  var i$$12 = 0;
  var v818 = this.nodes;
  var v608 = v818.length;
  var v305 = i$$12 < v608;
  for(;v305;) {
    var v302 = this.nodes;
    var v994 = this.N;
    var v819 = v994.length;
    var v609 = v819 + 1;
    var v1218 = new Array(v609);
    v302[i$$12] = v1218;
    var j$$10 = 0;
    var v995 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v820 = v995[i$$12]
    }
    var v610 = v820.length;
    var v304 = j$$10 < v610;
    for(;v304;) {
      var v611 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v303 = v611[i$$12]
      }
      var v1219 = new Node;
      v303[j$$10] = v1219;
      j$$10 = j$$10 + 1;
      var v996 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v821 = v996[i$$12]
      }
      var v612 = v821.length;
      v304 = j$$10 < v612
    }
    i$$12 = i$$12 + 1;
    var v822 = this.nodes;
    var v613 = v822.length;
    v305 = i$$12 < v613
  }
  var v823 = this.nodes;
  var v614 = v823[0];
  var v306 = v614[0];
  v306.value = 0;
  i$$12 = 1;
  var v824 = this.nodes;
  var v615 = v824.length;
  var v310 = i$$12 < v615;
  for(;v310;) {
    var v825 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v616 = v825[i$$12]
    }
    var v307 = v616[0];
    var v997 = this.nodes;
    var v998 = i$$12 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v826 = v997[v998]
    }
    var v617 = v826[0];
    v307.value = v617.value;
    var v827 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = v827[i$$12]
    }
    var v308 = v618[0];
    v308.tracebackI = i$$12 - 1;
    var v828 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = v828[i$$12]
    }
    var v309 = v619[0];
    v309.tracebackJ = 0;
    i$$12 = i$$12 + 1;
    var v829 = this.nodes;
    var v620 = v829.length;
    v310 = i$$12 < v620
  }
  j$$10 = 1;
  var v999 = this.nodes;
  var v830 = v999[0];
  var v621 = v830.length;
  var v314 = j$$10 < v621;
  for(;v314;) {
    var v831 = this.nodes;
    var v622 = v831[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v311 = v622[j$$10]
    }
    var v1000 = this.nodes;
    var v832 = v1000[0];
    var v833 = j$$10 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = v832[v833]
    }
    v311.value = v623.value;
    var v834 = this.nodes;
    var v624 = v834[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v312 = v624[j$$10]
    }
    v312.tracebackI = 0;
    var v835 = this.nodes;
    var v625 = v835[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v313 = v625[j$$10]
    }
    v313.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    var v1001 = this.nodes;
    var v836 = v1001[0];
    var v626 = v836.length;
    v314 = j$$10 < v626
  }
  return
}
function dumpMatrix() {
  var v315 = outputWindow.document;
  var v1083 = this.nodes;
  var v1002 = v1083.length;
  var v837 = "Dynamic programming matrix i=" + v1002;
  var v627 = v837 + " and j=";
  var v1003 = this.nodes;
  var v838 = v1003[0];
  var v628 = v838.length;
  var v316 = v627 + v628;
  JAMScript.call(v315.write, v315, [v316]);
  var v317 = outputWindow.document;
  JAMScript.call(v317.write, v317, ["\n"]);
  var i$$13 = 0;
  var v839 = this.nodes;
  var v629 = v839.length;
  var v328 = i$$13 < v629;
  for(;v328;) {
    var j$$11 = 0;
    var v1004 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v840 = v1004[i$$13]
    }
    var v630 = v840.length;
    var v326 = j$$11 < v630;
    for(;v326;) {
      var v841 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v631 = v841[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v318 = v631[j$$11]
      }
      var traceI = v318.tracebackI;
      var v842 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v632 = v842[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v319 = v632[j$$11]
      }
      var traceJ = v319.tracebackJ;
      var v320 = traceI == undefined;
      if(v320) {
        traceI = "u"
      }
      var v321 = traceJ == undefined;
      if(v321) {
        traceJ = "u"
      }
      var v1159 = "(" + i$$13;
      var v1145 = v1159 + ",";
      var v1121 = v1145 + j$$11;
      var v1084 = v1121 + ")[";
      var v1005 = v1084 + traceI;
      var v843 = v1005 + ",";
      var v633 = v843 + traceJ;
      var v322 = v633 + "]=";
      var v1006 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v844 = v1006[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v634 = v844[j$$11]
      }
      var v323 = v634.value;
      var output = v322 + v323;
      var v324 = outputWindow.document;
      var v325 = rightNum(output, "", 20, " ");
      JAMScript.call(v324.write, v324, [v325]);
      j$$11 = j$$11 + 1;
      var v1007 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v845 = v1007[i$$13]
      }
      var v635 = v845.length;
      v326 = j$$11 < v635
    }
    var v327 = outputWindow.document;
    JAMScript.call(v327.write, v327, ["\n"]);
    i$$13 = i$$13 + 1;
    var v846 = this.nodes;
    var v636 = v846.length;
    v328 = i$$13 < v636
  }
  var v329 = outputWindow.document;
  JAMScript.call(v329.write, v329, ["\n"]);
  return
}
function updateMatrix() {
  var i$$14 = 1;
  var v847 = this.nodes;
  var v637 = v847.length;
  var v370 = i$$14 < v637;
  for(;v370;) {
    var j$$12 = 1;
    var v1008 = this.nodes;
    var v848 = v1008[0];
    var v638 = v848.length;
    var v369 = j$$12 < v638;
    for(;v369;) {
      var a;
      var b;
      var c;
      var v1009 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v849 = v1009[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v639 = v849[j$$12]
      }
      var v353 = v639.alreadyMatched;
      if(v353) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v1085 = this.nodes;
        var v1010 = v1085.length;
        var v850 = v1010 - 1;
        var v640 = i$$14 == v850;
        if(v640) {
          var v1122 = this.nodes;
          var v1086 = v1122[0];
          var v1011 = v1086.length;
          var v851 = v1011 - 1;
          v640 = j$$12 == v851
        }
        var v352 = v640;
        if(v352) {
          var v852 = this.nodes;
          var v853 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v641 = v852[v853]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v330 = v641[j$$12]
          }
          a = v330.value;
          var v854 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v642 = v854[i$$14]
          }
          var v643 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v331 = v642[v643]
          }
          b = v331.value;
          var v1012 = this.nodes;
          var v1013 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v855 = v1012[v1013]
          }
          var v856 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v644 = v855[v856]
          }
          var v332 = v644.value;
          var v645 = this.scoreSet;
          var v857 = this.M;
          var v858 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v646 = v857[v858]
          }
          var v859 = this.N;
          var v860 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v647 = v859[v860]
          }
          var v333 = JAMScript.call(v645.getScore, v645, [v646, v647]);
          c = v332 + v333
        }else {
          var v1014 = this.nodes;
          var v861 = v1014.length;
          var v648 = v861 - 1;
          var v351 = i$$14 == v648;
          if(v351) {
            var v1015 = this.nodes;
            var v1016 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v862 = v1015[v1016]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v649 = v862[j$$12]
            }
            var v334 = v649.value;
            var v650 = this.scoreSet;
            var v335 = v650.gap;
            a = v334 - v335;
            var v863 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v651 = v863[i$$14]
            }
            var v652 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v336 = v651[v652]
            }
            b = v336.value;
            var v1017 = this.nodes;
            var v1018 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v864 = v1017[v1018]
            }
            var v865 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v653 = v864[v865]
            }
            var v337 = v653.value;
            var v654 = this.scoreSet;
            var v866 = this.M;
            var v867 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v655 = v866[v867]
            }
            var v868 = this.N;
            var v869 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v656 = v868[v869]
            }
            var v338 = JAMScript.call(v654.getScore, v654, [v655, v656]);
            c = v337 + v338
          }else {
            var v1087 = this.nodes;
            var v1019 = v1087[0];
            var v870 = v1019.length;
            var v657 = v870 - 1;
            var v350 = j$$12 == v657;
            if(v350) {
              var v871 = this.nodes;
              var v872 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v658 = v871[v872]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v339 = v658[j$$12]
              }
              a = v339.value;
              var v1020 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v873 = v1020[i$$14]
              }
              var v874 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v659 = v873[v874]
              }
              var v340 = v659.value;
              var v660 = this.scoreSet;
              var v341 = v660.gap;
              b = v340 - v341;
              var v1021 = this.nodes;
              var v1022 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v875 = v1021[v1022]
              }
              var v876 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v661 = v875[v876]
              }
              var v342 = v661.value;
              var v662 = this.scoreSet;
              var v877 = this.M;
              var v878 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v663 = v877[v878]
              }
              var v879 = this.N;
              var v880 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v664 = v879[v880]
              }
              var v343 = JAMScript.call(v662.getScore, v662, [v663, v664]);
              c = v342 + v343
            }else {
              var v1023 = this.nodes;
              var v1024 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v881 = v1023[v1024]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v665 = v881[j$$12]
              }
              var v344 = v665.value;
              var v666 = this.scoreSet;
              var v345 = v666.gap;
              a = v344 - v345;
              var v1025 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v882 = v1025[i$$14]
              }
              var v883 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v667 = v882[v883]
              }
              var v346 = v667.value;
              var v668 = this.scoreSet;
              var v347 = v668.gap;
              b = v346 - v347;
              var v1026 = this.nodes;
              var v1027 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v884 = v1026[v1027]
              }
              var v885 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v669 = v884[v885]
              }
              var v348 = v669.value;
              var v670 = this.scoreSet;
              var v886 = this.M;
              var v887 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v671 = v886[v887]
              }
              var v888 = this.N;
              var v889 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v672 = v888[v889]
              }
              var v349 = JAMScript.call(v670.getScore, v670, [v671, v672]);
              c = v348 + v349
            }
          }
        }
      }
      var v673 = a > b;
      if(v673) {
        v673 = a > c
      }
      var v364 = v673;
      if(v364) {
        var v890 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v674 = v890[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v354 = v674[j$$12]
        }
        v354.value = a;
        var v891 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v675 = v891[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v355 = v675[j$$12]
        }
        v355.tracebackI = i$$14 - 1;
        var v892 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v676 = v892[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v356 = v676[j$$12]
        }
        v356.tracebackJ = j$$12
      }else {
        var v677 = b > c;
        if(v677) {
          v677 = b > a
        }
        var v363 = v677;
        if(v363) {
          var v893 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v678 = v893[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v357 = v678[j$$12]
          }
          v357.value = b;
          var v894 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v679 = v894[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v358 = v679[j$$12]
          }
          v358.tracebackI = i$$14;
          var v895 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v680 = v895[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v359 = v680[j$$12]
          }
          v359.tracebackJ = j$$12 - 1
        }else {
          var v896 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v681 = v896[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v360 = v681[j$$12]
          }
          v360.value = c;
          var v897 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v682 = v897[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v361 = v682[j$$12]
          }
          v361.tracebackI = i$$14 - 1;
          var v898 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v683 = v898[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v362 = v683[j$$12]
          }
          v362.tracebackJ = j$$12 - 1
        }
      }
      var v1088 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1028 = v1088[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v899 = v1028[j$$12]
      }
      var v684 = v899.value;
      var v368 = v684 < 0;
      if(v368) {
        var v900 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v685 = v900[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v365 = v685[j$$12]
        }
        v365.value = 0;
        var v901 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v686 = v901[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v366 = v686[j$$12]
        }
        v366.tracebackI = undefined;
        var v902 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v687 = v902[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v367 = v687[j$$12]
        }
        v367.tracebackJ = undefined
      }
      j$$12 = j$$12 + 1;
      var v1029 = this.nodes;
      var v903 = v1029[0];
      var v688 = v903.length;
      v369 = j$$12 < v688
    }
    i$$14 = i$$14 + 1;
    var v904 = this.nodes;
    var v689 = v904.length;
    v370 = i$$14 < v689
  }
  var v905 = this.nodes;
  var v1089 = this.nodes;
  var v1030 = v1089.length;
  var v906 = v1030 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v690 = v905[v906]
  }
  var v1090 = this.nodes;
  var v1031 = v1090[0];
  var v907 = v1031.length;
  var v691 = v907 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v371 = v690[v691]
  }
  this.score = v371.value;
  return
}
function search() {
  var v1220 = new Array;
  this.hits = v1220;
  var hitCount = 0;
  var v908 = this.scoreSet;
  var v692 = v908.hits;
  var v395 = hitCount < v692;
  for(;v395;) {
    JAMScript.call(this.updateMatrix, this, []);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v909 = this.nodes;
    var v693 = v909.length;
    var v375 = i$$15 < v693;
    for(;v375;) {
      var j$$13 = 1;
      var v1032 = this.nodes;
      var v910 = v1032[0];
      var v694 = v910.length;
      var v374 = j$$13 < v694;
      for(;v374;) {
        var v1091 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1033 = v1091[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v911 = v1033[j$$13]
        }
        var v695 = v911.value;
        var v373 = v695 > maxNodeValue;
        if(v373) {
          var v912 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v696 = v912[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v372 = v696[j$$13]
          }
          maxNodeValue = v372.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13
        }
        j$$13 = j$$13 + 1;
        var v1034 = this.nodes;
        var v913 = v1034[0];
        var v697 = v913.length;
        v374 = j$$13 < v697
      }
      i$$15 = i$$15 + 1;
      var v914 = this.nodes;
      var v698 = v914.length;
      v375 = i$$15 < v698
    }
    var v376 = maxNodeValue == 0;
    if(v376) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v699 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v377 = v699[maxNodeI]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var currentNode = v377[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v915 = currentNode.tracebackI;
    var v700 = v915 != undefined;
    if(v700) {
      var v916 = currentNode.tracebackJ;
      v700 = v916 != undefined
    }
    var v392 = v700;
    for(;v392;) {
      var v701 = currentI == 0;
      var v917 = !v701;
      if(v917) {
        v701 = currentJ == 0
      }
      var v378 = v701;
      if(v378) {
        break
      }
      var v918 = currentNode.tracebackI;
      var v919 = currentI - 1;
      var v702 = v918 == v919;
      if(v702) {
        var v920 = currentNode.tracebackJ;
        var v921 = currentJ - 1;
        v702 = v920 == v921
      }
      var v387 = v702;
      if(v387) {
        var v379 = endM == undefined;
        if(v379) {
          endM = currentI;
          endN = currentJ
        }
        var v703 = this.M;
        var v704 = currentI - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v380 = v703[v704]
        }
        alignedM.push(v380);
        var v705 = this.N;
        var v706 = currentJ - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v381 = v705[v706]
        }
        alignedN.push(v381)
      }else {
        var v707 = currentNode.tracebackJ;
        var v708 = currentJ - 1;
        var v386 = v707 == v708;
        if(v386) {
          var v383 = endM != undefined;
          if(v383) {
            alignedM.push("-");
            var v709 = this.N;
            var v710 = currentJ - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v382 = v709[v710]
            }
            alignedN.push(v382)
          }
        }else {
          var v385 = endM != undefined;
          if(v385) {
            var v711 = this.M;
            var v712 = currentI - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v384 = v711[v712]
            }
            alignedM.push(v384);
            alignedN.push("-")
          }
        }
      }
      var v922 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v713 = v922[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v388 = v713[currentJ]
      }
      v388.value = 0;
      var v923 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v714 = v923[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v389 = v714[currentJ]
      }
      v389.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v715 = this.nodes;
      var v716 = currentNode.tracebackI;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v390 = v715[v716]
      }
      var v391 = currentNode.tracebackJ;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        currentNode = v390[v391]
      }
      var v924 = currentNode.tracebackI;
      var v717 = v924 != undefined;
      if(v717) {
        var v925 = currentNode.tracebackJ;
        v717 = v925 != undefined
      }
      v392 = v717
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v393 = this.hits;
    var v718 = alignedM.join("");
    var v719 = alignedN.join("");
    var v720 = currentI + 1;
    var v721 = currentJ + 1;
    var v394 = new Hit(v718, v719, score, v720, endM, v721, endN);
    v393.push(v394);
    hitCount = hitCount + 1;
    var v926 = this.scoreSet;
    var v722 = v926.hits;
    v395 = hitCount < v722
  }
  return
}
function getHits() {
  return this.hits
}
function FuzzySearch() {
  return
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return
}
new ScoreSet;
var v396 = ScoreSet.prototype;
v396.getScore = getScore;
var v397 = ScoreSet.prototype;
v397.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v398 = ScoringMatrix.prototype;
v398.scoringMatrix_getScore = scoringMatrix_getScore;
var v1221 = new ScoringMatrix;
Identity.prototype = v1221;
var v399 = Identity.prototype;
v399.setMismatch = setMismatch;
var v400 = Identity.prototype;
v400.setMatch = setMatch;
new FuzzySearch;
var v401 = FuzzySearch.prototype;
v401.initializeMatrix = initializeMatrix;
var v402 = FuzzySearch.prototype;
v402.updateMatrix = updateMatrix;
var v403 = FuzzySearch.prototype;
v403.search = search;
var v404 = FuzzySearch.prototype;
v404.getHits = getHits;
var v405 = FuzzySearch.prototype;
v405.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v406 = document.getElementById("submitbtn");
JAMScript.set(v406, "onclick", v3);
var v407 = document.getElementById("clearbtn");
JAMScript.set(v407, "onclick", v4);

JAM.stopProfile('load');
