function v13() {
  var v874 = document.forms;
  var v731 = v874[0];
  var v444 = v731.elements;
  var v14 = v444[0];
  v14.value = " ";
  return
}
function v12() {
  try {
    restMap(document)
  }catch(e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15)
  }
  return
}
function v11() {
  var v445 = document.main_form;
  var v16 = v445.main_submit;
  v16.focus();
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.replace(/./g, " ")
  }
  function v8(str$$11, p1$$4, offset$$16, s$$6) {
    return p1$$4.replace(/./g, " ")
  }
  var v17 = outputWindow.document;
  var v446 = this.positionLabel;
  var v18 = rightNum(v446, "", 8, "");
  v17.write(v18);
  var v447 = this.characters;
  var v19 = v447.slice(start$$10, stop$$6);
  var text$$15 = v19.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  v20.write(v21);
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v448 = this.positionLabel;
  var v25 = rightNum(v448, "", 8, "");
  v24.write(v25);
  var v26 = outputWindow.document;
  var v875 = this.characters;
  var v732 = v875.slice(start$$9, stop$$5);
  var v449 = v732.join("");
  var v27 = v449 + "\n";
  v26.write(v27);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return
}
function v6(start$$8, stop$$4) {
  var v733 = this.characters;
  var v450 = v733.slice(start$$8, stop$$4);
  var v30 = v450.join("");
  var textToWrite = v30 + "\n";
  var v451 = textToWrite.search(/\w/);
  var v36 = v451 != -1;
  if(v36) {
    var v31 = outputWindow.document;
    var v452 = this.positionLabel;
    var v32 = rightNum(v452, "", 8, "");
    v31.write(v32);
    var v33 = this.positionLabel;
    var v453 = textToWrite.match(/[A-Z]/g);
    var v34 = v453.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    v35.write(textToWrite)
  }
  return
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v454 = this.positionLabel;
  var v38 = rightNum(v454, "", 8, "");
  v37.write(v38);
  var v39 = outputWindow.document;
  var v876 = this.characters;
  var v734 = v876.slice(start$$7, stop$$3);
  var v455 = v734.join("");
  var v40 = v455 + "\n";
  v39.write(v40);
  var v41 = this.positionLabel;
  var v456 = stop$$3 - start$$7;
  var v42 = v456 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v457 = arrayOfSequences.length;
  var v44 = v457 < 2;
  if(v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v458 = arrayOfTitles.length;
  var v46 = i$$1 < v458;
  for(;v46;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v877 = arrayOfTitles[i$$1]
    }
    var v735 = v877.search(/\S/);
    var v459 = v735 == -1;
    var v737 = !v459;
    if(v737) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v974 = arrayOfSequences[i$$1]
      }
      var v878 = v974.search(/\S/);
      var v736 = v878 == -1;
      var v880 = !v736;
      if(v880) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v975 = arrayOfSequences[i$$1]
        }
        var v879 = v975.length;
        v736 = v879 != lengthOfAlign
      }
      v459 = v736
    }
    var v45 = v459;
    if(v45) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v460 = arrayOfTitles.length;
    v46 = i$$1 < v460
  }
  return true
}
function checkCodonTable(codonTable) {
  var v738 = codonTable.search(/AmAcid/);
  var v461 = v738 == -1;
  var v740 = !v461;
  if(v740) {
    var v881 = codonTable.search(/Codon/);
    var v739 = v881 == -1;
    var v883 = !v739;
    if(v883) {
      var v976 = codonTable.search(/Number/);
      var v882 = v976 == -1;
      var v978 = !v882;
      if(v978) {
        var v1044 = codonTable.search(/\/1000/);
        var v977 = v1044 == -1;
        var v1046 = !v977;
        if(v1046) {
          var v1045 = codonTable.search(/Fraction\s*\.\./);
          v977 = v1045 == -1
        }
        v882 = v977
      }
      v739 = v882
    }
    v461 = v739
  }
  var v47 = v461;
  if(v47) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v741 = formElement.value;
  var v462 = v741.search(/\S/);
  var v48 = v462 == -1;
  if(v48) {
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
  var v463 = arrayOfPatterns.length;
  var v51 = z$$2 < v463;
  for(;v51;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v742 = arrayOfPatterns[z$$2]
    }
    var v464 = v742.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v49 = v464 == -1;
    if(v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfPatterns[z$$2]
    }
    var v465 = moreExpressionCheck(v743);
    var v50 = v465 == false;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v466 = arrayOfPatterns.length;
    v51 = z$$2 < v466
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v467 = arrayOfPatterns.length;
  var v60 = j < v467;
  for(;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v884 = arrayOfPatterns[j]
    }
    var v744 = v884.match(/\/.+\//);
    var v468 = v744 + "gi";
    var v1517 = eval(v468);
    v54[v55] = v1517;
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v745 = arrayOfPatterns[j]
    }
    var v469 = v745.match(/=[a-zA-Z\*]/);
    var v1518 = v469.toString();
    v56[v57] = v1518;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v470 = geneticCodeMatchResult[j]
    }
    var v1519 = v470.replace(/=/g, "");
    v58[v59] = v1519;
    j = j + 1;
    var v471 = arrayOfPatterns.length;
    v60 = j < v471
  }
  var i$$2 = 0;
  var v746 = testSequence.length;
  var v472 = v746 - 3;
  var v67 = i$$2 <= v472;
  for(;v67;) {
    var v61 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v61);
    j = 0;
    var v473 = geneticCodeMatchExp.length;
    var v65 = j < v473;
    for(;v65;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v747 = geneticCodeMatchExp[j]
      }
      var v474 = codon.search(v747);
      var v64 = v474 != -1;
      if(v64) {
        var v63 = oneMatch == true;
        if(v63) {
          var v475 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v62 = v475 + ".";
          alert(v62);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v476 = geneticCodeMatchExp.length;
      v65 = j < v476
    }
    var v66 = oneMatch == false;
    if(v66) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v748 = testSequence.length;
    var v477 = v748 - 3;
    v67 = i$$2 <= v477
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v478 = arrayOfPatterns$$1.length;
  var v69 = z$$3 < v478;
  for(;v69;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v749 = arrayOfPatterns$$1[z$$3]
    }
    var v479 = v749.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v68 = v479 != -1;
    if(v68) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v480 = arrayOfPatterns$$1.length;
    v69 = z$$3 < v480
  }
  var i$$3 = 0;
  var v481 = arrayOfPatterns$$1.length;
  var v73 = i$$3 < v481;
  for(;v73;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v750 = arrayOfPatterns$$1[i$$3]
    }
    var v482 = "[" + v750;
    var v70 = v482 + "]";
    var re = new RegExp(v70, "gi");
    var j$$1 = i$$3 + 1;
    var v483 = arrayOfPatterns$$1.length;
    var v72 = j$$1 < v483;
    for(;v72;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v751 = arrayOfPatterns$$1[j$$1]
      }
      var v484 = v751.search(re);
      var v71 = v484 != -1;
      if(v71) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v485 = arrayOfPatterns$$1.length;
      v72 = j$$1 < v485
    }
    i$$3 = i$$3 + 1;
    var v486 = arrayOfPatterns$$1.length;
    v73 = i$$3 < v486
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v487 = arrayOfPatterns$$2.length;
  var v76 = z$$4 < v487;
  for(;v76;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v752 = arrayOfPatterns$$2[z$$4]
    }
    var v488 = v752.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v74 = v488 == -1;
    if(v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v753 = arrayOfPatterns$$2[z$$4]
    }
    var v489 = moreExpressionCheck(v753);
    var v75 = v489 == false;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v490 = arrayOfPatterns$$2.length;
    v76 = z$$4 < v490
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v885 = getSequenceFromFasta(text$$7);
  var v754 = v885.replace(/[^A-Za-z]/g, "");
  var v491 = v754.length;
  var v78 = v491 > maxInput;
  if(v78) {
    var v492 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v77 = v492 + " characters.";
    alert(v77);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v493 = text$$8.length;
  var v80 = v493 > maxInput$$1;
  if(v80) {
    var v494 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v79 = v494 + " characters.";
    alert(v79);
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
  var v81 = outputWindow.document;
  v81.write("</form>");
  return true
}
function closePre() {
  var v82 = outputWindow.document;
  v82.write("</div>");
  var v83 = outputWindow.document;
  v83.write("</pre>\n");
  return
}
function closeTextArea() {
  var v84 = outputWindow.document;
  v84.write("</textarea>");
  return true
}
function closeWindow() {
  var v85 = outputWindow.document;
  v85.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v86 = outputWindow.document;
  v86.close();
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
  var v495 = alignArray.length;
  var v87 = v495 < 3;
  if(v87) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v496 = alignArray.length;
  var v89 = i$$4 < v496;
  for(;v89;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v755 = alignArray[i$$4]
    }
    var v497 = v755.search(/[^\s]+\s/);
    var v88 = v497 == -1;
    if(v88) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v498 = alignArray.length;
    v89 = i$$4 < v498
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
  var v499 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v92 = v499 != -1;
  if(v92) {
    var v91 = matchArray = re$$1.exec(sequenceData);
    for(;v91;) {
      var v90 = matchArray[0];
      arrayOfFasta.push(v90);
      v91 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v500 = sequence$$2.length;
  var v93 = "&gt;results for " + v500;
  var stringToReturn = v93 + " residue sequence ";
  var v501 = fastaSequenceTitle.search(/[^\s]/);
  var v95 = v501 != -1;
  if(v95) {
    var v502 = stringToReturn + '"';
    var v94 = v502 + fastaSequenceTitle;
    stringToReturn = v94 + '"'
  }
  var v503 = stringToReturn + ' starting "';
  var v504 = sequence$$2.substring(0, 10);
  var v96 = v503 + v504;
  stringToReturn = v96 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v505 = sequenceOne.length;
  var v97 = "Search results for " + v505;
  var stringToReturn$$1 = v97 + " residue sequence ";
  var v506 = fastaSequenceTitleOne.search(/[^\s]/);
  var v99 = v506 != -1;
  if(v99) {
    var v507 = stringToReturn$$1 + '"';
    var v98 = v507 + fastaSequenceTitleOne;
    stringToReturn$$1 = v98 + '"'
  }
  var v508 = stringToReturn$$1 + ' starting "';
  var v509 = sequenceOne.substring(0, 10);
  var v100 = v508 + v509;
  stringToReturn$$1 = v100 + '"\n';
  var v510 = stringToReturn$$1 + "and ";
  var v511 = sequenceTwo.length;
  var v101 = v510 + v511;
  stringToReturn$$1 = v101 + " residue sequence ";
  var v512 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v103 = v512 != -1;
  if(v103) {
    var v513 = stringToReturn$$1 + '"';
    var v102 = v513 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v102 + '"'
  }
  var v514 = stringToReturn$$1 + ' starting "';
  var v515 = sequenceTwo.substring(0, 10);
  var v104 = v514 + v515;
  stringToReturn$$1 = v104 + '"';
  var v105 = '<div class="info">' + stringToReturn$$1;
  return v105 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v106 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v106);
  var j$$2 = 0;
  var v516 = arrayOfPatterns$$3.length;
  var v109 = j$$2 < v516;
  for(;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v886 = arrayOfPatterns$$3[j$$2]
    }
    var v756 = v886.match(/\/.+\//);
    var v517 = v756 + "gi";
    var v1520 = eval(v517);
    v107[v108] = v1520;
    j$$2 = j$$2 + 1;
    var v518 = arrayOfPatterns$$3.length;
    v109 = j$$2 < v518
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v110 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v110);
  var j$$3 = 0;
  var v519 = arrayOfPatterns$$4.length;
  var v115 = j$$3 < v519;
  for(;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v757 = arrayOfPatterns$$4[j$$3]
    }
    var v520 = v757.match(/=[a-zA-Z\*]/);
    var v1521 = v520.toString();
    v111[v112] = v1521;
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v521 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1522 = v521.replace(/=/g, "");
    v113[v114] = v1522;
    j$$3 = j$$3 + 1;
    var v522 = arrayOfPatterns$$4.length;
    v115 = j$$3 < v522
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v523 = sequence$$3.length;
  var v116 = "Results for " + v523;
  var stringToReturn$$2 = v116 + " residue sequence ";
  var v524 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v118 = v524 != -1;
  if(v118) {
    var v525 = stringToReturn$$2 + '"';
    var v117 = v525 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v117 + '"'
  }
  var v526 = stringToReturn$$2 + ' starting "';
  var v527 = sequence$$3.substring(0, 10);
  var v119 = v526 + v527;
  stringToReturn$$2 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$2;
  return v120 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v758 = "Results for " + topology;
  var v528 = v758 + " ";
  var v529 = sequence$$4.length;
  var v121 = v528 + v529;
  var stringToReturn$$3 = v121 + " residue sequence ";
  var v530 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v123 = v530 != -1;
  if(v123) {
    var v531 = stringToReturn$$3 + '"';
    var v122 = v531 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v122 + '"'
  }
  var v532 = stringToReturn$$3 + ' starting "';
  var v533 = sequence$$4.substring(0, 10);
  var v124 = v532 + v533;
  stringToReturn$$3 = v124 + '"';
  var v125 = '<div class="info">' + stringToReturn$$3;
  return v125 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v534 = sequenceOne$$1.length;
  var v126 = "Alignment results for " + v534;
  var stringToReturn$$4 = v126 + " residue sequence ";
  var v535 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v128 = v535 != -1;
  if(v128) {
    var v536 = stringToReturn$$4 + '"';
    var v127 = v536 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v127 + '"'
  }
  var v537 = stringToReturn$$4 + ' starting "';
  var v538 = sequenceOne$$1.substring(0, 10);
  var v129 = v537 + v538;
  stringToReturn$$4 = v129 + '"\n';
  var v539 = stringToReturn$$4 + "and ";
  var v540 = sequenceTwo$$1.length;
  var v130 = v539 + v540;
  stringToReturn$$4 = v130 + " residue sequence ";
  var v541 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v132 = v541 != -1;
  if(v132) {
    var v542 = stringToReturn$$4 + '"';
    var v131 = v542 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v131 + '"'
  }
  var v543 = stringToReturn$$4 + ' starting "';
  var v544 = sequenceTwo$$1.substring(0, 10);
  var v133 = v543 + v544;
  stringToReturn$$4 = v133 + '"';
  var v134 = '<div class="info">' + stringToReturn$$4;
  return v134 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v136 = j$$4 < lengthOut;
  for(;v136;) {
    var v545 = Math.random();
    var v546 = components.length;
    var v135 = v545 * v546;
    tempNum = Math.floor(v135);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v547 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v137 = v547 != -1;
  if(v137) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v548 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v548 != -1;
  if(v139) {
    var v138 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v138.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v759 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v549 = v759 != -1;
  var v761 = !v549;
  if(v761) {
    var v887 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v760 = v887 != -1;
    var v889 = !v760;
    if(v889) {
      var v979 = expressionToCheck.search(/\[\]/);
      var v888 = v979 != -1;
      var v981 = !v888;
      if(v981) {
        var v1047 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v980 = v1047 != -1;
        var v1049 = !v980;
        if(v1049) {
          var v1096 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1048 = v1096 != -1;
          var v1098 = !v1048;
          if(v1098) {
            var v1144 = expressionToCheck.search(/\|\|/);
            var v1097 = v1144 != -1;
            var v1146 = !v1097;
            if(v1146) {
              var v1180 = expressionToCheck.search(/\/\|/);
              var v1145 = v1180 != -1;
              var v1182 = !v1145;
              if(v1182) {
                var v1207 = expressionToCheck.search(/\|\//);
                var v1181 = v1207 != -1;
                var v1209 = !v1181;
                if(v1209) {
                  var v1234 = expressionToCheck.search(/\[.\]/);
                  var v1208 = v1234 != -1;
                  var v1236 = !v1208;
                  if(v1236) {
                    var v1259 = expressionToCheck.search(/\</);
                    var v1235 = v1259 != -1;
                    var v1261 = !v1235;
                    if(v1261) {
                      var v1260 = expressionToCheck.search(/\>/);
                      v1235 = v1260 != -1
                    }
                    v1208 = v1235
                  }
                  v1181 = v1208
                }
                v1145 = v1181
              }
              v1097 = v1145
            }
            v1048 = v1097
          }
          v980 = v1048
        }
        v888 = v980
      }
      v760 = v888
    }
    v549 = v760
  }
  var v140 = v549;
  if(v140) {
    return false
  }
  return true
}
function openForm() {
  var v141 = outputWindow.document;
  v141.write('<form action="">\n');
  return true
}
function openPre() {
  var v142 = outputWindow.document;
  v142.write("<pre>");
  var v143 = outputWindow.document;
  v143.write('<div class="pre">');
  return
}
function openTextArea() {
  var v144 = outputWindow.document;
  v144.write('<br /><textarea rows="6" cols="61">\n');
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
  var v145 = outputWindow.document;
  var v890 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v762 = v890 + "<head>\n";
  var v550 = v762 + "<title>Sequence Manipulation Suite</title>\n";
  var v146 = v550 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v145.write(v146);
  if(isColor) {
    var v147 = outputWindow.document;
    var v1328 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1306 = v1328 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1284 = v1306 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1262 = v1284 + "div.info {font-weight: bold}\n";
    var v1237 = v1262 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1210 = v1237 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1183 = v1210 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1147 = v1183 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1099 = v1147 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1050 = v1099 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v982 = v1050 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v891 = v982 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v763 = v891 + "td.many {color: #000000}\n";
    var v551 = v763 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v148 = v551 + "</style>\n";
    v147.write(v148)
  }else {
    var v149 = outputWindow.document;
    var v1350 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1329 = v1350 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1307 = v1329 + "div.title {display: none}\n";
    var v1285 = v1307 + "div.info {font-weight: bold}\n";
    var v1263 = v1285 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1238 = v1263 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1211 = v1238 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1184 = v1211 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1148 = v1184 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1100 = v1148 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1051 = v1100 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v983 = v1051 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v892 = v983 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v764 = v892 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v552 = v764 + "img {display: none}\n";
    var v150 = v552 + "</style>\n";
    v149.write(v150)
  }
  var v151 = outputWindow.document;
  var v893 = "</head>\n" + '<body class="main">\n';
  var v765 = v893 + '<div class="title">';
  var v553 = v765 + title$$6;
  var v152 = v553 + " results</div>\n";
  v151.write(v152);
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
  var v153 = outputWindow.document;
  var v894 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v766 = v894 + "<head>\n";
  var v554 = v766 + "<title>Sequence Manipulation Suite</title>\n";
  var v154 = v554 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v153.write(v154);
  if(isBackground) {
    var v155 = outputWindow.document;
    var v1330 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1308 = v1330 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1286 = v1308 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1264 = v1286 + "div.info {font-weight: bold}\n";
    var v1239 = v1264 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1212 = v1239 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1185 = v1212 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1149 = v1185 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1101 = v1149 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1052 = v1101 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v984 = v1052 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v895 = v984 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v767 = v895 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v555 = v767 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v156 = v555 + "</style>\n";
    v155.write(v156)
  }else {
    var v157 = outputWindow.document;
    var v1370 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1351 = v1370 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1331 = v1351 + "div.title {display: none}\n";
    var v1309 = v1331 + "div.info {font-weight: bold}\n";
    var v1287 = v1309 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1265 = v1287 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1240 = v1265 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1213 = v1240 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1186 = v1213 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1150 = v1186 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1102 = v1150 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1053 = v1102 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v985 = v1053 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v896 = v985 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v768 = v896 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v556 = v768 + "img {display: none}\n";
    var v158 = v556 + "</style>\n";
    v157.write(v158)
  }
  var v159 = outputWindow.document;
  var v897 = "</head>\n" + '<body class="main">\n';
  var v769 = v897 + '<div class="title">';
  var v557 = v769 + title$$8;
  var v160 = v557 + " results</div>\n";
  v159.write(v160);
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
  var v558 = dnaSequence$$1.search(/./);
  var v161 = v558 != -1;
  if(v161) {
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
  var v162 = j$$5 < lengthOfColumn;
  for(;v162;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v162 = j$$5 < lengthOfColumn
  }
  var v163 = tempString + theNumber;
  theNumber = v163 + " ";
  var v164 = sequenceToAppend + theNumber;
  sequenceToAppend = v164 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v559 = testArray[0];
  var v165 = v559 != testString;
  if(v165) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v560 = testString.search(re$$2);
  var v166 = v560 == -1;
  if(v166) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v167 = !caughtException;
  if(v167) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v168 = testString != "1X2X3X";
  if(v168) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v561 = testNum.toFixed(3);
  var v169 = v561 != 2489.824;
  if(v169) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v562 = testNum.toPrecision(5);
  var v170 = v562 != 2489.8;
  if(v170) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v563 = theNumber$$1.search(/\d/);
  var v171 = v563 == -1;
  if(v171) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v770 = emblFile.search(/ID/);
  var v564 = v770 == -1;
  var v772 = !v564;
  if(v772) {
    var v898 = emblFile.search(/AC/);
    var v771 = v898 == -1;
    var v900 = !v771;
    if(v900) {
      var v986 = emblFile.search(/DE/);
      var v899 = v986 == -1;
      var v988 = !v899;
      if(v988) {
        var v987 = emblFile.search(/SQ/);
        v899 = v987 == -1
      }
      v771 = v899
    }
    v564 = v771
  }
  var v172 = v564;
  if(v172) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v565 = theNumber$$2.search(/\d/);
  var v173 = v565 == -1;
  if(v173) {
    alert("Please enter a number.");
    return false
  }
  var v175 = theNumber$$2 > maxInput$$2;
  if(v175) {
    var v566 = "Please enter a number less than or equal to " + maxInput$$2;
    var v174 = v566 + ".";
    alert(v174);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v567 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v176 = v567 != -1;
  if(v176) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v568 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v177 = v568 != -1;
  if(v177) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v773 = genBankFile.search(/LOCUS/);
  var v569 = v773 == -1;
  var v775 = !v569;
  if(v775) {
    var v901 = genBankFile.search(/DEFINITION/);
    var v774 = v901 == -1;
    var v903 = !v774;
    if(v903) {
      var v989 = genBankFile.search(/ACCESSION/);
      var v902 = v989 == -1;
      var v991 = !v902;
      if(v991) {
        var v990 = genBankFile.search(/ORIGIN/);
        v902 = v990 == -1
      }
      v774 = v902
    }
    v569 = v774
  }
  var v178 = v569;
  if(v178) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v776 = genBankFile$$1.search(/LOCUS/);
  var v570 = v776 == -1;
  var v778 = !v570;
  if(v778) {
    var v904 = genBankFile$$1.search(/DEFINITION/);
    var v777 = v904 == -1;
    var v906 = !v777;
    if(v906) {
      var v992 = genBankFile$$1.search(/ACCESSION/);
      var v905 = v992 == -1;
      var v994 = !v905;
      if(v994) {
        var v993 = genBankFile$$1.search(/ORIGIN/);
        v905 = v993 == -1
      }
      v777 = v905
    }
    v570 = v777
  }
  var v179 = v570;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v571 = genBankFile$$1.search(/FEATURES {13}/);
  var v180 = v571 == -1;
  if(v180) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v779 = emblFile$$1.search(/ID/);
  var v572 = v779 == -1;
  var v781 = !v572;
  if(v781) {
    var v907 = emblFile$$1.search(/AC/);
    var v780 = v907 == -1;
    var v909 = !v780;
    if(v909) {
      var v995 = emblFile$$1.search(/DE/);
      var v908 = v995 == -1;
      var v997 = !v908;
      if(v997) {
        var v996 = emblFile$$1.search(/SQ/);
        v908 = v996 == -1
      }
      v780 = v908
    }
    v572 = v780
  }
  var v181 = v572;
  if(v181) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v573 = emblFile$$1.search(/^FT/m);
  var v182 = v573 == -1;
  if(v182) {
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
  var v189 = i$$5 < stopBase;
  for(;v189;) {
    var v183 = i$$5 + 1;
    lineOfText = rightNum(v183, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v574 = basePerLine / groupSize;
    var v186 = j$$6 <= v574;
    for(;v186;) {
      var v185 = k < groupSize;
      for(;v185;) {
        var v575 = k + i$$5;
        var v184 = text$$10.charAt(v575);
        lineOfText = lineOfText + v184;
        k = k + 1;
        v185 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v576 = basePerLine / groupSize;
      v186 = j$$6 <= v576
    }
    var v187 = outputWindow.document;
    var v188 = lineOfText + "\n";
    v187.write(v188);
    lineOfText = "";
    v189 = i$$5 < stopBase
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
    var v577 = adjustment < 0;
    if(v577) {
      v577 = adjusted >= 0
    }
    var v190 = v577;
    if(v190) {
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
  var v221 = i$$6 < stopBase$$2;
  for(;v221;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v578 = basePerLine$$2 / groupSize$$2;
    var v197 = j$$7 <= v578;
    for(;v197;) {
      var v193 = k$$1 < groupSize$$2;
      for(;v193;) {
        var v579 = i$$6 + k$$1;
        var v191 = v579 >= stopBase$$2;
        if(v191) {
          break
        }
        var v580 = k$$1 + i$$6;
        var v192 = text$$12.charAt(v580);
        lineOfText$$1 = lineOfText$$1 + v192;
        k$$1 = k$$1 + 1;
        v193 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v195 = numberPosition$$1 == "above";
      if(v195) {
        var v581 = adjustNumbering(i$$6, numberingAdjustment);
        var v194 = rightNum(v581, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v194
      }
      var v196 = i$$6 >= stopBase$$2;
      if(v196) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v582 = basePerLine$$2 / groupSize$$2;
      v197 = j$$7 <= v582
    }
    var v220 = numberPosition$$1 == "left";
    if(v220) {
      var v198 = outputWindow.document;
      var v910 = adjustNumbering(lineNum, numberingAdjustment);
      var v782 = rightNum(v910, "", 8, tabIn$$3);
      var v583 = v782 + lineOfText$$1;
      var v199 = v583 + "\n";
      v198.write(v199);
      var v203 = strands$$1 == "two";
      if(v203) {
        var v200 = outputWindow.document;
        var v911 = adjustNumbering(lineNum, numberingAdjustment);
        var v783 = rightNum(v911, "", 8, tabIn$$3);
        var v784 = complement(lineOfText$$1);
        var v584 = v783 + v784;
        var v201 = v584 + "\n";
        v200.write(v201);
        var v202 = outputWindow.document;
        v202.write("\n")
      }
    }else {
      var v219 = numberPosition$$1 == "right";
      if(v219) {
        var v204 = outputWindow.document;
        var v785 = adjustNumbering(i$$6, numberingAdjustment);
        var v585 = lineOfText$$1 + v785;
        var v205 = v585 + "\n";
        v204.write(v205);
        var v209 = strands$$1 == "two";
        if(v209) {
          var v206 = outputWindow.document;
          var v786 = complement(lineOfText$$1);
          var v787 = adjustNumbering(i$$6, numberingAdjustment);
          var v586 = v786 + v787;
          var v207 = v586 + "\n";
          v206.write(v207);
          var v208 = outputWindow.document;
          v208.write("\n")
        }
      }else {
        var v218 = numberPosition$$1 == "above";
        if(v218) {
          var v210 = outputWindow.document;
          var v211 = aboveNum + "\n";
          v210.write(v211);
          var v212 = outputWindow.document;
          var v213 = lineOfText$$1 + "\n";
          v212.write(v213);
          var v217 = strands$$1 == "two";
          if(v217) {
            var v214 = outputWindow.document;
            var v587 = complement(lineOfText$$1);
            var v215 = v587 + "\n";
            v214.write(v215);
            var v216 = outputWindow.document;
            v216.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v221 = i$$6 < stopBase$$2
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
  var v240 = i$$7 < stopBase$$3;
  for(;v240;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v588 = basePerLine$$3 / groupSize$$3;
    var v228 = j$$8 <= v588;
    for(;v228;) {
      var v224 = k$$2 < groupSize$$3;
      for(;v224;) {
        var v589 = i$$7 + k$$2;
        var v222 = v589 >= stopBase$$3;
        if(v222) {
          break
        }
        var v590 = k$$2 + i$$7;
        var v223 = text$$13.charAt(v590);
        lineOfText$$2 = lineOfText$$2 + v223;
        k$$2 = k$$2 + 1;
        v224 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v226 = numberPosition$$2 == "above";
      if(v226) {
        var v225 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v225
      }
      var v227 = i$$7 >= stopBase$$3;
      if(v227) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v591 = basePerLine$$3 / groupSize$$3;
      v228 = j$$8 <= v591
    }
    var v239 = numberPosition$$2 == "left";
    if(v239) {
      var v229 = outputWindow.document;
      var v788 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v592 = v788 + lineOfText$$2;
      var v230 = v592 + "\n";
      v229.write(v230)
    }else {
      var v238 = numberPosition$$2 == "right";
      if(v238) {
        var v231 = outputWindow.document;
        var v593 = lineOfText$$2 + i$$7;
        var v232 = v593 + "\n";
        v231.write(v232)
      }else {
        var v237 = numberPosition$$2 == "above";
        if(v237) {
          var v233 = outputWindow.document;
          var v234 = aboveNum$$1 + "\n";
          v233.write(v234);
          var v235 = outputWindow.document;
          var v236 = lineOfText$$2 + "\n";
          v235.write(v236)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v240 = i$$7 < stopBase$$3
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
  var v789 = sequence$$13.length;
  var v594 = v789 <= firstIndexToMutate;
  var v791 = !v594;
  if(v791) {
    var v790 = lastIndexToMutate < 0;
    var v912 = !v790;
    if(v912) {
      v790 = lastIndexToMutate <= firstIndexToMutate
    }
    v594 = v790
  }
  var v241 = v594;
  if(v241) {
    numMut = 0
  }
  var i$$8 = 0;
  var v249 = i$$8 < numMut;
  for(;v249;) {
    maxNum = sequence$$13.length;
    var v595 = Math.random();
    var v242 = v595 * maxNum;
    randNum = Math.floor(v242);
    var v596 = randNum < firstIndexToMutate;
    var v792 = !v596;
    if(v792) {
      v596 = randNum > lastIndexToMutate
    }
    var v243 = v596;
    if(v243) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v249 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v597 = Math.random();
      var v598 = components$$1.length;
      var v244 = v597 * v598;
      componentsIndex = Math.round(v244);
      var v599 = components$$1.length;
      var v245 = componentsIndex == v599;
      if(v245) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v600 = components$$1[componentsIndex]
      }
      var v246 = v600 != currentChar;
      if(v246) {
        needNewChar = false
      }
    }
    var v601 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v602 = components$$1[componentsIndex]
    }
    var v247 = v601 + v602;
    var v603 = randNum + 1;
    var v604 = sequence$$13.length;
    var v248 = sequence$$13.substring(v603, v604);
    sequence$$13 = v247 + v248;
    i$$8 = i$$8 + 1;
    v249 = i$$8 < numMut
  }
  var v250 = outputWindow.document;
  var v251 = addReturns(sequence$$13);
  v250.write(v251);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v256 = j$$9 < lengthOut$$1;
  for(;v256;) {
    var v605 = Math.random();
    var v606 = components$$2.length;
    var v252 = v605 * v606;
    tempNum$$1 = Math.floor(v252);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v607 = sequence$$14.length;
    var v255 = v607 == 60;
    if(v255) {
      var v253 = outputWindow.document;
      var v254 = sequence$$14 + "\n";
      v253.write(v254);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v256 = j$$9 < lengthOut$$1
  }
  var v257 = outputWindow.document;
  var v258 = sequence$$14 + "\n";
  v257.write(v258);
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
  var v262 = dnaConformation == "circular";
  if(v262) {
    var v259 = sequence$$15.substring(0, lookAhead);
    shiftValue = v259.length;
    var v913 = sequence$$15.length;
    var v793 = v913 - lookAhead;
    var v794 = sequence$$15.length;
    var v608 = sequence$$15.substring(v793, v794);
    var v260 = v608 + sequence$$15;
    var v261 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v260 + v261;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v263 = outputWindow.document;
  v263.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v264 = outputWindow.document;
  var v914 = '<tr><td class="title" width="200px">' + "Site:";
  var v795 = v914 + '</td><td class="title">';
  var v609 = v795 + "Positions:";
  var v265 = v609 + "</td></tr>\n";
  v264.write(v265);
  var i$$9 = 0;
  var v610 = arrayOfItems.length;
  var v281 = i$$9 < v610;
  for(;v281;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = arrayOfItems[i$$9]
    }
    var v266 = v611.match(/\/.+\//);
    matchExp = v266 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v915 = arrayOfItems[i$$9]
    }
    var v796 = v915.match(/\)\D*\d+/);
    var v612 = v796.toString();
    var v267 = v612.replace(/\)\D*/, "");
    cutDistance = parseFloat(v267);
    var v273 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v273;) {
      var v268 = matchExp.lastIndex;
      matchPosition = v268 - cutDistance;
      var v613 = matchPosition >= lowerLimit;
      if(v613) {
        v613 = matchPosition < upperLimit
      }
      var v271 = v613;
      if(v271) {
        timesFound = timesFound + 1;
        var v269 = tempString$$1 + ", ";
        var v614 = matchPosition - shiftValue;
        var v270 = v614 + 1;
        tempString$$1 = v269 + v270
      }
      var v272 = matchExp;
      var v797 = matchExp.lastIndex;
      var v916 = RegExp.lastMatch;
      var v798 = v916.length;
      var v615 = v797 - v798;
      v272.lastIndex = v615 + 1;
      v273 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v616 = tempString$$1.search(/\d/);
    var v274 = v616 != -1;
    if(v274) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v278 = timesFound == 0;
    if(v278) {
      backGroundClass = "none"
    }else {
      var v277 = timesFound == 1;
      if(v277) {
        backGroundClass = "one"
      }else {
        var v276 = timesFound == 2;
        if(v276) {
          backGroundClass = "two"
        }else {
          var v275 = timesFound == 3;
          if(v275) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v279 = outputWindow.document;
    var v1151 = '<tr><td class="' + backGroundClass;
    var v1103 = v1151 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1214 = arrayOfItems[i$$9]
    }
    var v1187 = v1214.match(/\([^\(]+\)/);
    var v1152 = v1187.toString();
    var v1104 = v1152.replace(/\(|\)/g, "");
    var v1054 = v1103 + v1104;
    var v998 = v1054 + '</td><td class="';
    var v917 = v998 + backGroundClass;
    var v799 = v917 + '">';
    var v617 = v799 + tempString$$1;
    var v280 = v617 + "</td></tr>\n";
    v279.write(v280);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v618 = arrayOfItems.length;
    v281 = i$$9 < v618
  }
  var v282 = outputWindow.document;
  v282.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v283 = outputWindow.document;
  v283.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v284 = outputWindow.document;
  var v1055 = '<tr><td class="title">' + "Pattern:";
  var v999 = v1055 + '</td><td class="title">';
  var v918 = v999 + "Times found:";
  var v800 = v918 + '</td><td class="title">';
  var v619 = v800 + "Percentage:";
  var v285 = v619 + "</td></tr>\n";
  v284.write(v285);
  var i$$10 = 0;
  var v620 = arrayOfItems$$1.length;
  var v294 = i$$10 < v620;
  for(;v294;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v621 = arrayOfItems$$1[i$$10]
    }
    var v286 = v621.match(/\/[^\/]+\//);
    var matchExp$$1 = v286 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v622 = sequence$$16.search(matchExp$$1);
    var v288 = v622 != -1;
    if(v288) {
      var v287 = sequence$$16.match(matchExp$$1);
      tempNumber = v287.length
    }
    var percentage = 0;
    var v801 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1000 = arrayOfItems$$1[i$$10]
    }
    var v919 = v1000.match(/\d+/);
    var v802 = parseFloat(v919);
    var v623 = v801 - v802;
    var v291 = v623 > 0;
    if(v291) {
      var v289 = 100 * tempNumber;
      var v624 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v920 = arrayOfItems$$1[i$$10]
      }
      var v803 = v920.match(/\d+/);
      var v625 = parseFloat(v803);
      var v290 = v624 - v625;
      percentage = v289 / v290
    }
    var v292 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1215 = arrayOfItems$$1[i$$10]
    }
    var v1188 = v1215.match(/\([^\(]+\)\b/);
    var v1153 = v1188.toString();
    var v1105 = v1153.replace(/\(|\)/g, "");
    var v1056 = "<tr><td>" + v1105;
    var v1001 = v1056 + "</td><td>";
    var v921 = v1001 + tempNumber;
    var v804 = v921 + "</td><td>";
    var v805 = percentage.toFixed(2);
    var v626 = v804 + v805;
    var v293 = v626 + "</td></tr>\n";
    v292.write(v293);
    i$$10 = i$$10 + 1;
    var v627 = arrayOfItems$$1.length;
    v294 = i$$10 < v627
  }
  var v295 = outputWindow.document;
  v295.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v628 = sequence$$17.length;
  var v302 = v628 > 0;
  for(;v302;) {
    maxNum$$1 = sequence$$17.length;
    var v629 = Math.random();
    var v296 = v629 * maxNum$$1;
    randNum$$1 = Math.floor(v296);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v297 = randNum$$1 + 1;
    var v298 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v297, v298);
    sequence$$17 = tempString1 + tempString2;
    var v630 = tempSeq.length;
    var v301 = v630 == 60;
    if(v301) {
      var v299 = outputWindow.document;
      var v300 = tempSeq + "\n";
      v299.write(v300);
      tempSeq = ""
    }
    var v631 = sequence$$17.length;
    v302 = v631 > 0
  }
  var v303 = outputWindow.document;
  var v304 = tempSeq + "\n";
  v303.write(v304);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v632 = type$$25.toLowerCase();
  var v306 = v632 == "standard";
  if(v306) {
    var v1516 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1515 = v1516 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1514 = v1515 + "/cgcg/ (AccII cg|cg)2,";
    var v1513 = v1514 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1512 = v1513 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1511 = v1512 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1510 = v1511 + "/gtac/ (AfaI gt|ac)2,";
    var v1509 = v1510 + "/agcgct/ (AfeI agc|gct)3,";
    var v1508 = v1509 + "/cttaag/ (AflII c|ttaag)5,";
    var v1507 = v1508 + "/accggt/ (AgeI a|ccggt)5,";
    var v1506 = v1507 + "/actagt/ (AhlI a|ctagt)5,";
    var v1505 = v1506 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1504 = v1505 + "/agct/ (AluI ag|ct)2,";
    var v1503 = v1504 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1502 = v1503 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1501 = v1502 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1500 = v1501 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1499 = v1500 + "/attaat/ (AseI at|taat)4,";
    var v1498 = v1499 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1497 = v1498 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1496 = v1497 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1495 = v1496 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1494 = v1495 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1493 = v1494 + "/tggcca/ (BalI tgg|cca)3,";
    var v1492 = v1493 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1491 = v1492 + "/atcgat/ (BanIII at|cgat)4,";
    var v1490 = v1491 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1489 = v1490 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1488 = v1489 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1487 = v1488 + "/actagt/ (BcuI a|ctagt)5,";
    var v1486 = v1487 + "/tgatca/ (BclI t|gatca)5,";
    var v1485 = v1486 + "/ctag/ (BfaI c|tag)3,";
    var v1484 = v1485 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1483 = v1484 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1482 = v1483 + "/agatct/ (BglII a|gatct)5,";
    var v1481 = v1482 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1480 = v1481 + "/atcgat/ (BseCI at|cgat)4,";
    var v1479 = v1480 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1478 = v1479 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1477 = v1478 + "/accggt/ (BshTI a|ccggt)5,";
    var v1476 = v1477 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1475 = v1476 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1474 = v1475 + "/atcgat/ (BspDI at|cgat)4,";
    var v1473 = v1474 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1472 = v1473 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1471 = v1472 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1470 = v1471 + "/cgcg/ (BstUI cg|cg)2,";
    var v1469 = v1470 + "/atcgat/ (ClaI at|cgat)4,";
    var v1468 = v1469 + "/gatc/ (DpnII |gatc)4,";
    var v1467 = v1468 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1466 = v1467 + "/cggccg/ (EagI c|ggccg)5,";
    var v1465 = v1466 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1464 = v1465 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1463 = v1464 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1462 = v1463 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1461 = v1462 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1460 = v1461 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1459 = v1460 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1458 = v1459 + "/aagctt/ (HindIII a|agctt)5,";
    var v1457 = v1458 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1456 = v1457 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1455 = v1456 + "/ccgg/ (HpaII c|cgg)3,";
    var v1454 = v1455 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1453 = v1454 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1452 = v1453 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1451 = v1452 + "/caattg/ (MfeI c|aattg)5,";
    var v1450 = v1451 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1449 = v1450 + "/tggcca/ (MscI tgg|cca)3,";
    var v1448 = v1449 + "/ttaa/ (MseI t|taa)3,";
    var v1447 = v1448 + "/ccgg/ (MspI c|cgg)3,";
    var v1446 = v1447 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1445 = v1446 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1444 = v1445 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1443 = v1444 + "/catatg/ (NdeI ca|tatg)4,";
    var v1442 = v1443 + "/gatc/ (NdeII |gatc)4,";
    var v1441 = v1442 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1440 = v1441 + "/gctagc/ (NheI g|ctagc)5,";
    var v1439 = v1440 + "/catg/ (NlaIII catg|)0,";
    var v1438 = v1439 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1437 = v1438 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1436 = v1437 + "/atgcat/ (NsiI atgca|t)1,";
    var v1435 = v1436 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1434 = v1435 + "/acatgt/ (PciI a|catgt)5,";
    var v1433 = v1434 + "/ggcc/ (PhoI gg|cc)2,";
    var v1432 = v1433 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1431 = v1432 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1430 = v1431 + "/ttataa/ (PsiI tta|taa)3,";
    var v1429 = v1430 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1428 = v1429 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1427 = v1428 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1426 = v1427 + "/gtac/ (RsaI gt|ac)2,";
    var v1425 = v1426 + "/gagctc/ (SacI gagct|c)1,";
    var v1407 = v1425 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1389 = v1407 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1371 = v1389 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1352 = v1371 + "/agtact/ (ScaI agt|act)3,";
    var v1332 = v1352 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1310 = v1332 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1288 = v1310 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1266 = v1288 + "/actagt/ (SpeI a|ctagt)5,";
    var v1241 = v1266 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1216 = v1241 + "/aatatt/ (SspI aat|att)3,";
    var v1189 = v1216 + "/gagctc/ (SstI gagct|c)1,";
    var v1154 = v1189 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1106 = v1154 + "/aggcct/ (StuI agg|cct)3,";
    var v1057 = v1106 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1002 = v1057 + "/tcga/ (TaqI t|cga)3,";
    var v922 = v1002 + "/ctcgag/ (TliI c|tcgag)5,";
    var v806 = v922 + "/attaat/ (VspI at|taat)4,";
    var v633 = v806 + "/tctaga/ (XbaI t|ctaga)5,";
    var v305 = v633 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v305 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v807 = type$$26.toLowerCase();
  var v634 = v807 == "standard";
  var v809 = !v634;
  if(v809) {
    var v808 = type$$26.toLowerCase();
    v634 = v808 == "transl_table=1"
  }
  var v308 = v634;
  if(v308) {
    var v1408 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1390 = v1408 + "/ga[tcuy]/=D,";
    var v1372 = v1390 + "/ga[agr]/=E,";
    var v1353 = v1372 + "/[tu][tu][tcuy]/=F,";
    var v1333 = v1353 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1311 = v1333 + "/ca[tcuy]/=H,";
    var v1289 = v1311 + "/a[tu][atcuwmhy]/=I,";
    var v1267 = v1289 + "/aa[agr]/=K,";
    var v1242 = v1267 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1217 = v1242 + "/a[tu]g/=M,";
    var v1190 = v1217 + "/aa[tucy]/=N,";
    var v1155 = v1190 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1107 = v1155 + "/ca[agr]/=Q,";
    var v1058 = v1107 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1003 = v1058 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v923 = v1003 + "/ac[acgturyswkmbdhvn]/=T,";
    var v810 = v923 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v635 = v810 + "/[tu]gg/=W,";
    var v307 = v635 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v636 = type$$26.toLowerCase();
  var v310 = v636 == "transl_table=2";
  if(v310) {
    var v1409 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1391 = v1409 + "/ga[tcuy]/=D,";
    var v1373 = v1391 + "/ga[agr]/=E,";
    var v1354 = v1373 + "/[tu][tu][tcuy]/=F,";
    var v1334 = v1354 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1312 = v1334 + "/ca[tcuy]/=H,";
    var v1290 = v1312 + "/a[tu][tcuy]/=I,";
    var v1268 = v1290 + "/aa[agr]/=K,";
    var v1243 = v1268 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1218 = v1243 + "/a[tu][agr]/=M,";
    var v1191 = v1218 + "/aa[tucy]/=N,";
    var v1156 = v1191 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1108 = v1156 + "/ca[agr]/=Q,";
    var v1059 = v1108 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1004 = v1059 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v924 = v1004 + "/ac[acgturyswkmbdhvn]/=T,";
    var v811 = v924 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v637 = v811 + "/[tu]g[agr]/=W,";
    var v309 = v637 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v638 = type$$26.toLowerCase();
  var v312 = v638 == "transl_table=3";
  if(v312) {
    var v1410 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1392 = v1410 + "/ga[tcuy]/=D,";
    var v1374 = v1392 + "/ga[agr]/=E,";
    var v1355 = v1374 + "/[tu][tu][tcuy]/=F,";
    var v1335 = v1355 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1313 = v1335 + "/ca[tcuy]/=H,";
    var v1291 = v1313 + "/a[tu][tcuy]/=I,";
    var v1269 = v1291 + "/aa[agr]/=K,";
    var v1244 = v1269 + "/[tu][tu][agr]/=L,";
    var v1219 = v1244 + "/a[tu][agr]/=M,";
    var v1192 = v1219 + "/aa[tucy]/=N,";
    var v1157 = v1192 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1109 = v1157 + "/ca[agr]/=Q,";
    var v1060 = v1109 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1005 = v1060 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v925 = v1005 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v812 = v925 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v639 = v812 + "/[tu]g[agr]/=W,";
    var v311 = v639 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*"
  }
  var v640 = type$$26.toLowerCase();
  var v314 = v640 == "transl_table=4";
  if(v314) {
    var v1411 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1393 = v1411 + "/ga[tcuy]/=D,";
    var v1375 = v1393 + "/ga[agr]/=E,";
    var v1356 = v1375 + "/[tu][tu][tcuy]/=F,";
    var v1336 = v1356 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1314 = v1336 + "/ca[tcuy]/=H,";
    var v1292 = v1314 + "/a[tu][atcuwmhy]/=I,";
    var v1270 = v1292 + "/aa[agr]/=K,";
    var v1245 = v1270 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1220 = v1245 + "/a[tu]g/=M,";
    var v1193 = v1220 + "/aa[tucy]/=N,";
    var v1158 = v1193 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1110 = v1158 + "/ca[agr]/=Q,";
    var v1061 = v1110 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1006 = v1061 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v926 = v1006 + "/ac[acgturyswkmbdhvn]/=T,";
    var v813 = v926 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v641 = v813 + "/[tu]g[agr]/=W,";
    var v313 = v641 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*"
  }
  var v642 = type$$26.toLowerCase();
  var v316 = v642 == "transl_table=5";
  if(v316) {
    var v1412 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1394 = v1412 + "/ga[tcuy]/=D,";
    var v1376 = v1394 + "/ga[agr]/=E,";
    var v1357 = v1376 + "/[tu][tu][tcuy]/=F,";
    var v1337 = v1357 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1315 = v1337 + "/ca[tcuy]/=H,";
    var v1293 = v1315 + "/a[tu][tcuy]/=I,";
    var v1271 = v1293 + "/aa[agr]/=K,";
    var v1246 = v1271 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1221 = v1246 + "/a[tu][agr]/=M,";
    var v1194 = v1221 + "/aa[tucy]/=N,";
    var v1159 = v1194 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1111 = v1159 + "/ca[agr]/=Q,";
    var v1062 = v1111 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1007 = v1062 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v927 = v1007 + "/ac[acgturyswkmbdhvn]/=T,";
    var v814 = v927 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v643 = v814 + "/[tu]g[agr]/=W,";
    var v315 = v643 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*"
  }
  var v644 = type$$26.toLowerCase();
  var v318 = v644 == "transl_table=6";
  if(v318) {
    var v1413 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1395 = v1413 + "/ga[tcuy]/=D,";
    var v1377 = v1395 + "/ga[agr]/=E,";
    var v1358 = v1377 + "/[tu][tu][tcuy]/=F,";
    var v1338 = v1358 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1316 = v1338 + "/ca[tcuy]/=H,";
    var v1294 = v1316 + "/a[tu][atcuwmhy]/=I,";
    var v1272 = v1294 + "/aa[agr]/=K,";
    var v1247 = v1272 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1222 = v1247 + "/a[tu]g/=M,";
    var v1195 = v1222 + "/aa[tucy]/=N,";
    var v1160 = v1195 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1112 = v1160 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1063 = v1112 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1008 = v1063 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v928 = v1008 + "/ac[acgturyswkmbdhvn]/=T,";
    var v815 = v928 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v645 = v815 + "/[tu]gg/=W,";
    var v317 = v645 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]ga/=*"
  }
  var v646 = type$$26.toLowerCase();
  var v320 = v646 == "transl_table=9";
  if(v320) {
    var v1414 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1396 = v1414 + "/ga[tcuy]/=D,";
    var v1378 = v1396 + "/ga[agr]/=E,";
    var v1359 = v1378 + "/[tu][tu][tcuy]/=F,";
    var v1339 = v1359 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1317 = v1339 + "/ca[tcuy]/=H,";
    var v1295 = v1317 + "/a[tu][atcuwmhy]/=I,";
    var v1273 = v1295 + "/aag/=K,";
    var v1248 = v1273 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1223 = v1248 + "/a[tu]g/=M,";
    var v1196 = v1223 + "/aa[atcuwmhy]/=N,";
    var v1161 = v1196 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1113 = v1161 + "/ca[agr]/=Q,";
    var v1064 = v1113 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1009 = v1064 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v929 = v1009 + "/ac[acgturyswkmbdhvn]/=T,";
    var v816 = v929 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v647 = v816 + "/[tu]g[agr]/=W,";
    var v319 = v647 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]/=*"
  }
  var v648 = type$$26.toLowerCase();
  var v322 = v648 == "transl_table=10";
  if(v322) {
    var v1415 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1397 = v1415 + "/ga[tcuy]/=D,";
    var v1379 = v1397 + "/ga[agr]/=E,";
    var v1360 = v1379 + "/[tu][tu][tcuy]/=F,";
    var v1340 = v1360 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1318 = v1340 + "/ca[tcuy]/=H,";
    var v1296 = v1318 + "/a[tu][atcuwmhy]/=I,";
    var v1274 = v1296 + "/aa[agr]/=K,";
    var v1249 = v1274 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1224 = v1249 + "/a[tu]g/=M,";
    var v1197 = v1224 + "/aa[tucy]/=N,";
    var v1162 = v1197 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1114 = v1162 + "/ca[agr]/=Q,";
    var v1065 = v1114 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1010 = v1065 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v930 = v1010 + "/ac[acgturyswkmbdhvn]/=T,";
    var v817 = v930 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v649 = v817 + "/[tu]gg/=W,";
    var v321 = v649 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*"
  }
  var v650 = type$$26.toLowerCase();
  var v324 = v650 == "transl_table=11";
  if(v324) {
    var v1416 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1398 = v1416 + "/ga[tcuy]/=D,";
    var v1380 = v1398 + "/ga[agr]/=E,";
    var v1361 = v1380 + "/[tu][tu][tcuy]/=F,";
    var v1341 = v1361 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1319 = v1341 + "/ca[tcuy]/=H,";
    var v1297 = v1319 + "/a[tu][atcuwmhy]/=I,";
    var v1275 = v1297 + "/aa[agr]/=K,";
    var v1250 = v1275 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1225 = v1250 + "/a[tu]g/=M,";
    var v1198 = v1225 + "/aa[tucy]/=N,";
    var v1163 = v1198 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1115 = v1163 + "/ca[agr]/=Q,";
    var v1066 = v1115 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1011 = v1066 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v931 = v1011 + "/ac[acgturyswkmbdhvn]/=T,";
    var v818 = v931 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v651 = v818 + "/[tu]gg/=W,";
    var v323 = v651 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v652 = type$$26.toLowerCase();
  var v326 = v652 == "transl_table=12";
  if(v326) {
    var v1417 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1399 = v1417 + "/ga[tcuy]/=D,";
    var v1381 = v1399 + "/ga[agr]/=E,";
    var v1362 = v1381 + "/[tu][tu][tcuy]/=F,";
    var v1342 = v1362 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1320 = v1342 + "/ca[tcuy]/=H,";
    var v1298 = v1320 + "/a[tu][atcuwmhy]/=I,";
    var v1276 = v1298 + "/aa[agr]/=K,";
    var v1251 = v1276 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1226 = v1251 + "/a[tu]g/=M,";
    var v1199 = v1226 + "/aa[tucy]/=N,";
    var v1164 = v1199 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1116 = v1164 + "/ca[agr]/=Q,";
    var v1067 = v1116 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1012 = v1067 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v932 = v1012 + "/ac[acgturyswkmbdhvn]/=T,";
    var v819 = v932 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v653 = v819 + "/[tu]gg/=W,";
    var v325 = v653 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v654 = type$$26.toLowerCase();
  var v328 = v654 == "transl_table=13";
  if(v328) {
    var v1418 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1400 = v1418 + "/ga[tcuy]/=D,";
    var v1382 = v1400 + "/ga[agr]/=E,";
    var v1363 = v1382 + "/[tu][tu][tcuy]/=F,";
    var v1343 = v1363 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1321 = v1343 + "/ca[tcuy]/=H,";
    var v1299 = v1321 + "/a[tu][tcuy]/=I,";
    var v1277 = v1299 + "/aa[agr]/=K,";
    var v1252 = v1277 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1227 = v1252 + "/a[tu][agr]/=M,";
    var v1200 = v1227 + "/aa[tucy]/=N,";
    var v1165 = v1200 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1117 = v1165 + "/ca[agr]/=Q,";
    var v1068 = v1117 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1013 = v1068 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v933 = v1013 + "/ac[acgturyswkmbdhvn]/=T,";
    var v820 = v933 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v655 = v820 + "/[tu]g[agr]/=W,";
    var v327 = v655 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu]a[agr]/=*"
  }
  var v656 = type$$26.toLowerCase();
  var v330 = v656 == "transl_table=14";
  if(v330) {
    var v1419 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1401 = v1419 + "/ga[tcuy]/=D,";
    var v1383 = v1401 + "/ga[agr]/=E,";
    var v1364 = v1383 + "/[tu][tu][tcuy]/=F,";
    var v1344 = v1364 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1322 = v1344 + "/ca[tcuy]/=H,";
    var v1300 = v1322 + "/a[tu][atcuwmhy]/=I,";
    var v1278 = v1300 + "/aag/=K,";
    var v1253 = v1278 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1228 = v1253 + "/a[tu]g/=M,";
    var v1201 = v1228 + "/aa[atcuwmhy]/=N,";
    var v1166 = v1201 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1118 = v1166 + "/ca[agr]/=Q,";
    var v1069 = v1118 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1014 = v1069 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v934 = v1014 + "/ac[acgturyswkmbdhvn]/=T,";
    var v821 = v934 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v657 = v821 + "/[tu]g[agr]/=W,";
    var v329 = v657 + "/[tu]a[atcuwmhy]/=Y,";
    return v329 + "/[tu]ag/=*"
  }
  var v658 = type$$26.toLowerCase();
  var v332 = v658 == "transl_table=15";
  if(v332) {
    var v1420 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1402 = v1420 + "/ga[tcuy]/=D,";
    var v1384 = v1402 + "/ga[agr]/=E,";
    var v1365 = v1384 + "/[tu][tu][tcuy]/=F,";
    var v1345 = v1365 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1323 = v1345 + "/ca[tcuy]/=H,";
    var v1301 = v1323 + "/a[tu][atcuwmhy]/=I,";
    var v1279 = v1301 + "/aa[agr]/=K,";
    var v1254 = v1279 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1229 = v1254 + "/a[tu]g/=M,";
    var v1202 = v1229 + "/aa[tucy]/=N,";
    var v1167 = v1202 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1119 = v1167 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1070 = v1119 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1015 = v1070 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v935 = v1015 + "/ac[acgturyswkmbdhvn]/=T,";
    var v822 = v935 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v659 = v822 + "/[tu]gg/=W,";
    var v331 = v659 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agr]a/=*"
  }
  var v660 = type$$26.toLowerCase();
  var v334 = v660 == "transl_table=16";
  if(v334) {
    var v1421 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1403 = v1421 + "/ga[tcuy]/=D,";
    var v1385 = v1403 + "/ga[agr]/=E,";
    var v1366 = v1385 + "/[tu][tu][tcuy]/=F,";
    var v1346 = v1366 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1324 = v1346 + "/ca[tcuy]/=H,";
    var v1302 = v1324 + "/a[tu][atcuwmhy]/=I,";
    var v1280 = v1302 + "/aa[agr]/=K,";
    var v1255 = v1280 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1230 = v1255 + "/a[tu]g/=M,";
    var v1203 = v1230 + "/aa[tucy]/=N,";
    var v1168 = v1203 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1120 = v1168 + "/ca[agr]/=Q,";
    var v1071 = v1120 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1016 = v1071 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v936 = v1016 + "/ac[acgturyswkmbdhvn]/=T,";
    var v823 = v936 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v661 = v823 + "/[tu]gg/=W,";
    var v333 = v661 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agr]a/=*"
  }
  var v662 = type$$26.toLowerCase();
  var v336 = v662 == "transl_table=21";
  if(v336) {
    var v1422 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1404 = v1422 + "/ga[tcuy]/=D,";
    var v1386 = v1404 + "/ga[agr]/=E,";
    var v1367 = v1386 + "/[tu][tu][tcuy]/=F,";
    var v1347 = v1367 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1325 = v1347 + "/ca[tcuy]/=H,";
    var v1303 = v1325 + "/a[tu][tcuy]/=I,";
    var v1281 = v1303 + "/aag/=K,";
    var v1256 = v1281 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1231 = v1256 + "/a[tu][agr]/=M,";
    var v1204 = v1231 + "/aa[atcuwmhy]/=N,";
    var v1169 = v1204 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1121 = v1169 + "/ca[agr]/=Q,";
    var v1072 = v1121 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1017 = v1072 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v937 = v1017 + "/ac[acgturyswkmbdhvn]/=T,";
    var v824 = v937 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v663 = v824 + "/[tu]g[agr]/=W,";
    var v335 = v663 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]/=*"
  }
  var v664 = type$$26.toLowerCase();
  var v338 = v664 == "transl_table=22";
  if(v338) {
    var v1423 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1405 = v1423 + "/ga[tcuy]/=D,";
    var v1387 = v1405 + "/ga[agr]/=E,";
    var v1368 = v1387 + "/[tu][tu][tcuy]/=F,";
    var v1348 = v1368 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1326 = v1348 + "/ca[tcuy]/=H,";
    var v1304 = v1326 + "/a[tu][atcuwmhy]/=I,";
    var v1282 = v1304 + "/aa[agr]/=K,";
    var v1257 = v1282 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1232 = v1257 + "/a[tu]g/=M,";
    var v1205 = v1232 + "/aa[tucy]/=N,";
    var v1170 = v1205 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1122 = v1170 + "/ca[agr]/=Q,";
    var v1073 = v1122 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1018 = v1073 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v938 = v1018 + "/ac[acgturyswkmbdhvn]/=T,";
    var v825 = v938 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v665 = v825 + "/[tu]gg/=W,";
    var v337 = v665 + "/[tu]a[ctuy]/=Y,";
    return v337 + "/[tu][agcrsmv]a/=*"
  }
  var v666 = type$$26.toLowerCase();
  var v340 = v666 == "transl_table=23";
  if(v340) {
    var v1424 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1406 = v1424 + "/ga[tcuy]/=D,";
    var v1388 = v1406 + "/ga[agr]/=E,";
    var v1369 = v1388 + "/[tu][tu][tcuy]/=F,";
    var v1349 = v1369 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1327 = v1349 + "/ca[tcuy]/=H,";
    var v1305 = v1327 + "/a[tu][atcuwmhy]/=I,";
    var v1283 = v1305 + "/aa[agr]/=K,";
    var v1258 = v1283 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1233 = v1258 + "/a[tu]g/=M,";
    var v1206 = v1233 + "/aa[tucy]/=N,";
    var v1171 = v1206 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1123 = v1171 + "/ca[agr]/=Q,";
    var v1074 = v1123 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1019 = v1074 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v939 = v1019 + "/ac[acgturyswkmbdhvn]/=T,";
    var v826 = v939 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v667 = v826 + "/[tu]gg/=W,";
    var v339 = v667 + "/[tu]a[ctuy]/=Y,";
    return v339 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function restMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v668 = testScript();
  var v341 = v668 == false;
  if(v341) {
    return false
  }
  var restrictionSiteCollection;
  var v1124 = theDocument.forms;
  var v1075 = v1124[0];
  var v1020 = v1075.elements;
  var v940 = v1020[6];
  var v827 = v940.options;
  var v1125 = theDocument.forms;
  var v1076 = v1125[0];
  var v1021 = v1076.elements;
  var v941 = v1021[6];
  var v828 = v941.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v669 = v827[v828]
  }
  var v342 = v669.value;
  var geneticCode = getGeneticCodeString(v342);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1126 = theDocument.forms;
  var v1077 = v1126[0];
  var v1022 = v1077.elements;
  var v942 = v1022[0];
  var v829 = checkFormElement(v942);
  var v670 = v829 == false;
  var v831 = !v670;
  if(v831) {
    var v1172 = theDocument.forms;
    var v1127 = v1172[0];
    var v1078 = v1127.elements;
    var v1023 = v1078[0];
    var v943 = v1023.value;
    var v830 = checkSequenceLength(v943, maxInput$$3);
    v670 = v830 == false
  }
  var v343 = v670;
  if(v343) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v671 = checkGeneticCode(geneticCode);
  var v344 = v671 == false;
  if(v344) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v672 = checkRestPatterns(restrictionSites);
  var v345 = v672 == false;
  if(v345) {
    return false
  }
  var isColor$$1;
  var v1173 = theDocument.forms;
  var v1128 = v1173[0];
  var v1079 = v1128.elements;
  var v1024 = v1079[8];
  var v944 = v1024.options;
  var v1174 = theDocument.forms;
  var v1129 = v1174[0];
  var v1080 = v1129.elements;
  var v1025 = v1080[8];
  var v945 = v1025.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v832 = v944[v945]
  }
  var v673 = v832.value;
  var v346 = v673 == "color";
  if(v346) {
    isColor$$1 = true
  }else {
    isColor$$1 = false
  }
  _openWindow("Restriction Map", isColor$$1);
  var v347 = outputWindow.document;
  var v674 = '<span class="one">' + "cuts once";
  var v348 = v674 + "</span><br />\n";
  v347.write(v348);
  var v349 = outputWindow.document;
  var v675 = '<span class="two">' + "cuts twice";
  var v350 = v675 + "</span><br />\n";
  v349.write(v350);
  var v351 = outputWindow.document;
  v351.write("\n");
  var v1026 = theDocument.forms;
  var v946 = v1026[0];
  var v833 = v946.elements;
  var v676 = v833[0];
  var v352 = v676.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v352);
  var i$$11 = 0;
  var v677 = arrayOfFasta$$1.length;
  var v363 = i$$11 < v677;
  for(;v363;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v353 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v353);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v354 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v354);
    newDna = removeNonDna(newDna);
    openPre();
    var v355 = outputWindow.document;
    var v1175 = theDocument.forms;
    var v1130 = v1175[0];
    var v1081 = v1130.elements;
    var v1027 = v1081[7];
    var v947 = v1027.options;
    var v1176 = theDocument.forms;
    var v1131 = v1176[0];
    var v1082 = v1131.elements;
    var v1028 = v1082[7];
    var v948 = v1028.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v834 = v947[v948]
    }
    var v678 = v834.value;
    var v356 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v678);
    v355.write(v356);
    var v1132 = theDocument.forms;
    var v1083 = v1132[0];
    var v1029 = v1083.elements;
    var v949 = v1029[7];
    var v835 = v949.options;
    var v1133 = theDocument.forms;
    var v1084 = v1133[0];
    var v1030 = v1084.elements;
    var v950 = v1030[7];
    var v836 = v950.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v679 = v835[v836]
    }
    var v357 = v679.value;
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v357);
    restrictionSiteCollection.sortRestrictionSites();
    var v1134 = theDocument.forms;
    var v1085 = v1134[0];
    var v1031 = v1085.elements;
    var v951 = v1031[4];
    var v837 = v951.options;
    var v1135 = theDocument.forms;
    var v1086 = v1135[0];
    var v1032 = v1086.elements;
    var v952 = v1032[4];
    var v838 = v952.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v680 = v837[v838]
    }
    var v358 = v680.value;
    var v1136 = theDocument.forms;
    var v1087 = v1136[0];
    var v1033 = v1087.elements;
    var v953 = v1033[5];
    var v839 = v953.options;
    var v1137 = theDocument.forms;
    var v1088 = v1137[0];
    var v1034 = v1088.elements;
    var v954 = v1034[5];
    var v840 = v954.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = v839[v840]
    }
    var v359 = v681.value;
    layoutRestTrans(newDna, geneticCode, restrictionSiteCollection, v358, v359);
    var v360 = outputWindow.document;
    v360.write("\n");
    closePre();
    var v1138 = theDocument.forms;
    var v1089 = v1138[0];
    var v1035 = v1089.elements;
    var v955 = v1035[7];
    var v841 = v955.options;
    var v1139 = theDocument.forms;
    var v1090 = v1139[0];
    var v1036 = v1090.elements;
    var v956 = v1036[7];
    var v842 = v956.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v682 = v841[v842]
    }
    var v361 = v682.value;
    writeRestrictionSites(newDna, restrictionSites, v361);
    var v362 = outputWindow.document;
    v362.write("<br />\n<br />\n");
    i$$11 = i$$11 + 1;
    var v683 = arrayOfFasta$$1.length;
    v363 = i$$11 < v683
  }
  closeWindow();
  return true
}
function layoutRestTrans(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v684 = readingFrame == "3";
  var v843 = !v684;
  if(v843) {
    v684 = readingFrame == "all_three"
  }
  var v365 = v684;
  if(v365) {
    var translation = new TranslationComponent;
    var v957 = dnaSequence$$3.length;
    var v844 = dnaSequence$$3.substring(2, v957);
    var v685 = translate(v844, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v364 = "  " + v685;
    translation.setCharacters(v364);
    textLayout.addComponent(translation)
  }
  var v686 = readingFrame == "2";
  var v845 = !v686;
  if(v845) {
    v686 = readingFrame == "all_three"
  }
  var v367 = v686;
  if(v367) {
    translation = new TranslationComponent;
    var v958 = dnaSequence$$3.length;
    var v846 = dnaSequence$$3.substring(1, v958);
    var v687 = translate(v846, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v366 = " " + v687;
    translation.setCharacters(v366);
    textLayout.addComponent(translation)
  }
  var v688 = readingFrame == "1";
  var v847 = !v688;
  if(v847) {
    v688 = readingFrame == "all_three"
  }
  var v369 = v688;
  if(v369) {
    translation = new TranslationComponent;
    var v368 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v368);
    textLayout.addComponent(translation)
  }
  var v371 = readingFrame == "uppercase";
  if(v371) {
    translation = new UppercaseTranslationComponent;
    var v370 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v370);
    textLayout.addComponent(translation)
  }
  var dna = new DnaComponent;
  dna.setCharacters(dnaSequence$$3);
  textLayout.addComponent(dna);
  var ruler = new RulerComponent;
  ruler.setCharacters(dnaSequence$$3);
  ruler.buildRuler();
  textLayout.addComponent(ruler);
  dna = new DnaComponent;
  var v372 = complement(dnaSequence$$3);
  dna.setCharacters(v372);
  textLayout.addComponent(dna);
  var sitesInRange = new Array;
  var i$$12 = 0;
  var v689 = dnaSequence$$3.length;
  var v387 = i$$12 < v689;
  for(;v387;) {
    var v373 = i$$12 + basesPerLine;
    sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$12, v373);
    sitesInRange.reverse();
    var j$$10 = 0;
    var v690 = sitesInRange.length;
    var v385 = j$$10 < v690;
    for(;v385;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v848 = sitesInRange[j$$10]
      }
      var v691 = v848.numberOfCuts;
      var v384 = v691 == 1;
      if(v384) {
        var v374 = outputWindow.document;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1177 = sitesInRange[j$$10]
        }
        var v1140 = v1177.position;
        var v1091 = v1140 - i$$12;
        var v1037 = v1091 + 9;
        var v959 = spaceString.substring(0, v1037);
        var v849 = v959 + '<span class="one">';
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v960 = sitesInRange[j$$10]
        }
        var v850 = v960.label;
        var v692 = v849 + v850;
        var v375 = v692 + "</span>\n";
        v374.write(v375)
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v851 = sitesInRange[j$$10]
        }
        var v693 = v851.numberOfCuts;
        var v383 = v693 == 2;
        if(v383) {
          var v376 = outputWindow.document;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1178 = sitesInRange[j$$10]
          }
          var v1141 = v1178.position;
          var v1092 = v1141 - i$$12;
          var v1038 = v1092 + 9;
          var v961 = spaceString.substring(0, v1038);
          var v852 = v961 + '<span class="two">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v962 = sitesInRange[j$$10]
          }
          var v853 = v962.label;
          var v694 = v852 + v853;
          var v377 = v694 + "</span>\n";
          v376.write(v377)
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v854 = sitesInRange[j$$10]
          }
          var v695 = v854.numberOfCuts;
          var v382 = v695 == 3;
          if(v382) {
            var v378 = outputWindow.document;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1179 = sitesInRange[j$$10]
            }
            var v1142 = v1179.position;
            var v1093 = v1142 - i$$12;
            var v1039 = v1093 + 9;
            var v963 = spaceString.substring(0, v1039);
            var v855 = v963 + '<span class="three">';
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v964 = sitesInRange[j$$10]
            }
            var v856 = v964.label;
            var v696 = v855 + v856;
            var v379 = v696 + "</span>\n";
            v378.write(v379)
          }else {
            var v380 = outputWindow.document;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1143 = sitesInRange[j$$10]
            }
            var v1094 = v1143.position;
            var v1040 = v1094 - i$$12;
            var v965 = v1040 + 9;
            var v857 = spaceString.substring(0, v965);
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v966 = sitesInRange[j$$10]
            }
            var v858 = v966.label;
            var v697 = v857 + v858;
            var v381 = v697 + "\n";
            v380.write(v381)
          }
        }
      }
      j$$10 = j$$10 + 1;
      var v698 = sitesInRange.length;
      v385 = j$$10 < v698
    }
    var v386 = i$$12 + basesPerLine;
    textLayout.writeLayout(i$$12, v386);
    i$$12 = i$$12 + basesPerLine;
    var v699 = dnaSequence$$3.length;
    v387 = i$$12 < v699
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v388 = " " + p1$$2;
    return v388 + " "
  }
  var v859 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v700 = v859.length;
  var v389 = v700 < 3;
  if(v389) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v701 = geneticCodeMatchExp$$3.length;
  var v392 = i$$13 < v701;
  for(;v392;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v390 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v391 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v390, v391);
    i$$13 = i$$13 + 1;
    var v702 = geneticCodeMatchExp$$3.length;
    v392 = i$$13 < v702
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$10, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1095 = " " + p1$$3;
    var v1041 = v1095 + p3;
    var v967 = v1041 + p5;
    var v860 = v967 + " ";
    var v703 = v860 + p2;
    var v393 = v703 + p4;
    return v393 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v861 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v704 = v861.length;
  var v394 = v704 < 3;
  if(v394) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v705 = geneticCodeMatchExp$$4.length;
  var v397 = i$$14 < v705;
  for(;v397;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v395 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v396 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v395, v396);
    i$$14 = i$$14 + 1;
    var v706 = geneticCodeMatchExp$$4.length;
    v397 = i$$14 < v706
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v401 = dnaConformation$$1 == "circular";
  if(v401) {
    var v398 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v398.length;
    var v968 = sequence$$18.length;
    var v862 = v968 - lookAhead$$1;
    var v863 = sequence$$18.length;
    var v707 = sequence$$18.substring(v862, v863);
    var v399 = v707 + sequence$$18;
    var v400 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v399 + v400;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$15 = 0;
  var v708 = arrayOfItems$$2.length;
  var v412 = i$$15 < v708;
  for(;v412;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v709 = arrayOfItems$$2[i$$15]
    }
    var v402 = v709.match(/\/.+\//);
    matchExp$$2 = v402 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v969 = arrayOfItems$$2[i$$15]
    }
    var v864 = v969.match(/\)\D*\d+/);
    var v710 = v864.toString();
    var v403 = v710.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v403);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v865 = arrayOfItems$$2[i$$15]
    }
    var v711 = v865.match(/\([^\(]+\)/);
    var v404 = v711.toString();
    label$$2 = v404.replace(/\(|\)/g, "");
    var v408 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for(;v408;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v712 = matchPosition$$1 >= lowerLimit$$1;
      if(v712) {
        v712 = matchPosition$$1 < upperLimit$$1
      }
      var v406 = v712;
      if(v406) {
        var v866 = label$$2 + " ";
        var v970 = matchPosition$$1 - shiftValue$$1;
        var v867 = v970 + 1;
        var v713 = v866 + v867;
        var v714 = matchPosition$$1 - shiftValue$$1;
        var v405 = new RestrictionSite(v713, v714);
        tempArray.push(v405);
        timesFound$$1 = timesFound$$1 + 1
      }
      var v407 = matchExp$$2;
      var v868 = matchExp$$2.lastIndex;
      var v971 = RegExp.lastMatch;
      var v869 = v971.length;
      var v715 = v868 - v869;
      v407.lastIndex = v715 + 1;
      v408 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    var j$$11 = 0;
    var v716 = tempArray.length;
    var v411 = j$$11 < v716;
    for(;v411;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v409 = tempArray[j$$11]
      }
      v409.numberOfCuts = timesFound$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v410 = tempArray[j$$11]
      }
      restrictionSiteCollection$$2.addRestrictionSite(v410);
      j$$11 = j$$11 + 1;
      var v717 = tempArray.length;
      v411 = j$$11 < v717
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$15 = i$$15 + 1;
    var v718 = arrayOfItems$$2.length;
    v412 = i$$15 < v718
  }
  return restrictionSiteCollection$$2
}
function writeLayout(start$$4, stop) {
  var i$$16 = 0;
  var v870 = this.components;
  var v719 = v870.length;
  var v414 = i$$16 < v719;
  for(;v414;) {
    var v720 = this.components;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v413 = v720[i$$16]
    }
    v413.writeLayoutComponent(start$$4, stop);
    i$$16 = i$$16 + 1;
    var v871 = this.components;
    var v721 = v871.length;
    v414 = i$$16 < v721
  }
  return
}
function addComponent(component) {
  var v415 = this.components;
  v415.push(component);
  return
}
function TextLayout() {
  var v1523 = new Array;
  this.components = v1523;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v722 = text$$14.search(/./);
  var v416 = v722 != -1;
  if(v416) {
    var v1524 = text$$14.match(/./g);
    this.characters = v1524
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v417 = this.characters;
  var rangeToCheck = v417.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v723 = rangeToCheck.search(/\w/);
  var v418 = v723 == -1;
  if(v418) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1525 = new Array;
  this.characters = v1525;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1526 = new Array;
  this.characters = v1526;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1527 = new Array;
  this.characters = v1527;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1528 = new Array;
  this.characters = v1528;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1529 = new Array;
  this.characters = v1529;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$13, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v419 = count$$6 == 0;
    if(v419) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v420 = this.characters;
  var sequence$$19 = v420.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$19 = sequence$$19.replace(/(.{1,10})/g, v4);
  var v1530 = sequence$$19.match(/./g);
  this.characters = v1530;
  return
}
function RestrictionSite(label$$3, position) {
  this.label = label$$3;
  this.position = position;
  return
}
function addRestrictionSite(restrictionSite) {
  var v421 = this.restrictionSites;
  v421.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v422 = this.restrictionSites;
  v422.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v724 = this.restrictionSites;
  var v423 = v724.length;
  var i$$17 = v423 - 1;
  var v426 = i$$17 >= 0;
  for(;v426;) {
    var v1042 = this.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v972 = v1042[i$$17]
    }
    var v872 = v972.position;
    var v725 = v872 >= start$$11;
    if(v725) {
      var v1043 = this.restrictionSites;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v973 = v1043[i$$17]
      }
      var v873 = v973.position;
      v725 = v873 < stop$$7
    }
    var v425 = v725;
    if(v425) {
      var v726 = this.restrictionSites;
      var v424 = v726.pop();
      arrayToReturn.push(v424)
    }else {
      break
    }
    i$$17 = i$$17 - 1;
    v426 = i$$17 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1531 = new Array;
  this.restrictionSites = v1531;
  return
}
function restrictionSiteSorter(a, b) {
  var v727 = a.position;
  var v728 = b.position;
  var v427 = v727 < v728;
  if(v427) {
    return 1
  }
  var v729 = a.position;
  var v730 = b.position;
  var v428 = v729 > v730;
  if(v428) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v429 = TextLayout.prototype;
v429.writeLayout = writeLayout;
var v430 = TextLayout.prototype;
v430.addComponent = addComponent;
new LayoutComponent;
var v431 = LayoutComponent.prototype;
v431.writeLayoutComponent = writeLayoutComponent;
var v432 = LayoutComponent.prototype;
v432.setCharacters = setCharacters;
var v433 = LayoutComponent.prototype;
v433.isRoom = isRoom;
var v1532 = new LayoutComponent;
TranslationComponent.prototype = v1532;
var v434 = TranslationComponent.prototype;
v434.writeLayoutComponent = v5;
var v1533 = new LayoutComponent;
UppercaseTranslationComponent.prototype = v1533;
var v435 = UppercaseTranslationComponent.prototype;
v435.writeLayoutComponent = v6;
var v1534 = new LayoutComponent;
DnaComponent.prototype = v1534;
var v436 = DnaComponent.prototype;
v436.writeLayoutComponent = v7;
var v1535 = new LayoutComponent;
RulerComponent.prototype = v1535;
var v437 = RulerComponent.prototype;
v437.writeLayoutComponent = v10;
new RulerComponent;
var v438 = RulerComponent.prototype;
v438.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v439 = RestrictionSiteCollection.prototype;
v439.addRestrictionSite = addRestrictionSite;
var v440 = RestrictionSiteCollection.prototype;
v440.sortRestrictionSites = sortRestrictionSites;
var v441 = RestrictionSiteCollection.prototype;
v441.getSitesInRange = getSitesInRange;
document.onload = v11;
var v442 = document.getElementById("submitbtn");
v442.onclick = v12;
var v443 = document.getElementById("clearbtn");
v443.onclick = v13;

