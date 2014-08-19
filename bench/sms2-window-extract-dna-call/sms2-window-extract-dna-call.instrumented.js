function v12() {
  var v924 = document.forms;
  var v765 = v924[0];
  var v445 = v765.elements;
  var v13 = v445[0];
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
  var v446 = document.main_form;
  var v15 = v446.main_submit;
  introspect(JAM.policy.p9) {
    v15.focus()
  }
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  introspect(JAM.policy.p9) {
    sequence = sequence.replace(/(.{60})/g, v0)
  }
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v447 = arrayOfSequences.length;
  var v17 = v447 < 2;
  if(v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v448 = arrayOfTitles.length;
  var v19 = i$$1 < v448;
  for(;v19;) {
    var v925 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p9) {
      var v766 = v925.search(/\S/)
    }
    var v449 = v766 == -1;
    var v768 = !v449;
    if(v768) {
      var v1040 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p9) {
        var v926 = v1040.search(/\S/)
      }
      var v767 = v926 == -1;
      var v928 = !v767;
      if(v928) {
        var v1041 = arrayOfSequences[i$$1];
        var v927 = v1041.length;
        v767 = v927 != lengthOfAlign
      }
      v449 = v767
    }
    var v18 = v449;
    if(v18) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v450 = arrayOfTitles.length;
    v19 = i$$1 < v450
  }
  return true
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p9) {
    var v769 = codonTable.search(/AmAcid/)
  }
  var v451 = v769 == -1;
  var v771 = !v451;
  if(v771) {
    introspect(JAM.policy.p9) {
      var v929 = codonTable.search(/Codon/)
    }
    var v770 = v929 == -1;
    var v931 = !v770;
    if(v931) {
      introspect(JAM.policy.p9) {
        var v1042 = codonTable.search(/Number/)
      }
      var v930 = v1042 == -1;
      var v1044 = !v930;
      if(v1044) {
        introspect(JAM.policy.p9) {
          var v1114 = codonTable.search(/\/1000/)
        }
        var v1043 = v1114 == -1;
        var v1116 = !v1043;
        if(v1116) {
          introspect(JAM.policy.p9) {
            var v1115 = codonTable.search(/Fraction\s*\.\./)
          }
          v1043 = v1115 == -1
        }
        v930 = v1043
      }
      v770 = v930
    }
    v451 = v770
  }
  var v20 = v451;
  if(v20) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v772 = formElement.value;
  introspect(JAM.policy.p9) {
    var v452 = v772.search(/\S/)
  }
  var v21 = v452 == -1;
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
  var v453 = arrayOfPatterns.length;
  var v24 = z$$2 < v453;
  for(;v24;) {
    var v773 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p9) {
      var v454 = v773.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v22 = v454 == -1;
    if(v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v774 = arrayOfPatterns[z$$2];
    var v455 = moreExpressionCheck(v774);
    var v23 = v455 == false;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v456 = arrayOfPatterns.length;
    v24 = z$$2 < v456
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v457 = arrayOfPatterns.length;
  var v33 = j < v457;
  for(;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    var v932 = arrayOfPatterns[j];
    introspect(JAM.policy.p9) {
      var v775 = v932.match(/\/.+\//)
    }
    var v458 = v775 + "gi";
    var v1279 = eval(v458);
    v27[v28] = v1279;
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    var v776 = arrayOfPatterns[j];
    introspect(JAM.policy.p9) {
      var v459 = v776.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p9) {
      var v1280 = v459.toString()
    }
    v29[v30] = v1280;
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    var v460 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p9) {
      var v1281 = v460.replace(/=/g, "")
    }
    v31[v32] = v1281;
    j = j + 1;
    var v461 = arrayOfPatterns.length;
    v33 = j < v461
  }
  var i$$2 = 0;
  var v777 = testSequence.length;
  var v462 = v777 - 3;
  var v40 = i$$2 <= v462;
  for(;v40;) {
    var v34 = i$$2 + 3;
    introspect(JAM.policy.p9) {
      codon = testSequence.substring(i$$2, v34)
    }
    j = 0;
    var v463 = geneticCodeMatchExp.length;
    var v38 = j < v463;
    for(;v38;) {
      var v778 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p9) {
        var v464 = codon.search(v778)
      }
      var v37 = v464 != -1;
      if(v37) {
        var v36 = oneMatch == true;
        if(v36) {
          var v465 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v35 = v465 + ".";
          alert(v35);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v466 = geneticCodeMatchExp.length;
      v38 = j < v466
    }
    var v39 = oneMatch == false;
    if(v39) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v779 = testSequence.length;
    var v467 = v779 - 3;
    v40 = i$$2 <= v467
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v468 = arrayOfPatterns$$1.length;
  var v42 = z$$3 < v468;
  for(;v42;) {
    var v780 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p9) {
      var v469 = v780.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v41 = v469 != -1;
    if(v41) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v470 = arrayOfPatterns$$1.length;
    v42 = z$$3 < v470
  }
  var i$$3 = 0;
  var v471 = arrayOfPatterns$$1.length;
  var v46 = i$$3 < v471;
  for(;v46;) {
    var v781 = arrayOfPatterns$$1[i$$3];
    var v472 = "[" + v781;
    var v43 = v472 + "]";
    var re = new RegExp(v43, "gi");
    var j$$1 = i$$3 + 1;
    var v473 = arrayOfPatterns$$1.length;
    var v45 = j$$1 < v473;
    for(;v45;) {
      var v782 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p9) {
        var v474 = v782.search(re)
      }
      var v44 = v474 != -1;
      if(v44) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v475 = arrayOfPatterns$$1.length;
      v45 = j$$1 < v475
    }
    i$$3 = i$$3 + 1;
    var v476 = arrayOfPatterns$$1.length;
    v46 = i$$3 < v476
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v477 = arrayOfPatterns$$2.length;
  var v49 = z$$4 < v477;
  for(;v49;) {
    var v783 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p9) {
      var v478 = v783.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v47 = v478 == -1;
    if(v47) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v784 = arrayOfPatterns$$2[z$$4];
    var v479 = moreExpressionCheck(v784);
    var v48 = v479 == false;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v480 = arrayOfPatterns$$2.length;
    v49 = z$$4 < v480
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v933 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p9) {
    var v785 = v933.replace(/[^A-Za-z]/g, "")
  }
  var v481 = v785.length;
  var v51 = v481 > maxInput;
  if(v51) {
    var v482 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v50 = v482 + " characters.";
    alert(v50);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v483 = text$$8.length;
  var v53 = v483 > maxInput$$1;
  if(v53) {
    var v484 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v52 = v484 + " characters.";
    alert(v52);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/g/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/c/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "c")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "g")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/G/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/C/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "C")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "G")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/a/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/t/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "t")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "a")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/A/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/T/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "T")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "A")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/u/g, "a")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/U/g, "A")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/r/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/y/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "y")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "r")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/R/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/Y/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "Y")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "R")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/k/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/m/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "m")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "k")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/K/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/M/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "M")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "K")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/b/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/v/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "v")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "b")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/B/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/V/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "V")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "B")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/d/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/h/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "h")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "d")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/D/g, "1")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/H/g, "2")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/1/g, "H")
  }
  introspect(JAM.policy.p9) {
    dnaSequence = dnaSequence.replace(/2/g, "D")
  }
  return dnaSequence
}
function closeForm() {
  var v54 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v54.write("</form>")
  }
  return true
}
function closePre() {
  var v55 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v55.write("</div>")
  }
  var v56 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v56.write("</pre>\n")
  }
  return
}
function closeTextArea() {
  var v57 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v57.write("</textarea>")
  }
  return true
}
function closeWindow() {
  var v58 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v58.write("</body>\n</html>\n")
  }
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v59.close()
  }
  return true
}
function convertDegenerates(sequence$$1) {
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.toLowerCase()
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]")
  }
  introspect(JAM.policy.p9) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]")
  }
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v485 = alignArray.length;
  var v60 = v485 < 3;
  if(v60) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v486 = alignArray.length;
  var v62 = i$$4 < v486;
  for(;v62;) {
    var v786 = alignArray[i$$4];
    introspect(JAM.policy.p9) {
      var v487 = v786.search(/[^\s]+\s/)
    }
    var v61 = v487 == -1;
    if(v61) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v488 = alignArray.length;
    v62 = i$$4 < v488
  }
  return true
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p9) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "")
  }
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p9) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ")
  }
  introspect(JAM.policy.p9) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "")
  }
  introspect(JAM.policy.p9) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n")
  }
  introspect(JAM.policy.p9) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "")
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p9) {
    var v489 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v65 = v489 != -1;
  if(v65) {
    introspect(JAM.policy.p9) {
      var v64 = matchArray = re$$1.exec(sequenceData)
    }
    for(;v64;) {
      var v63 = matchArray[0];
      introspect(JAM.policy.p9) {
        arrayOfFasta.push(v63)
      }
      introspect(JAM.policy.p9) {
        v64 = matchArray = re$$1.exec(sequenceData)
      }
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v490 = sequence$$2.length;
  var v66 = "&gt;results for " + v490;
  var stringToReturn = v66 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v491 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v68 = v491 != -1;
  if(v68) {
    var v492 = stringToReturn + '"';
    var v67 = v492 + fastaSequenceTitle;
    stringToReturn = v67 + '"'
  }
  var v493 = stringToReturn + ' starting "';
  introspect(JAM.policy.p9) {
    var v494 = sequence$$2.substring(0, 10)
  }
  var v69 = v493 + v494;
  stringToReturn = v69 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v495 = sequenceOne.length;
  var v70 = "Search results for " + v495;
  var stringToReturn$$1 = v70 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v496 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v72 = v496 != -1;
  if(v72) {
    var v497 = stringToReturn$$1 + '"';
    var v71 = v497 + fastaSequenceTitleOne;
    stringToReturn$$1 = v71 + '"'
  }
  var v498 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p9) {
    var v499 = sequenceOne.substring(0, 10)
  }
  var v73 = v498 + v499;
  stringToReturn$$1 = v73 + '"\n';
  var v500 = stringToReturn$$1 + "and ";
  var v501 = sequenceTwo.length;
  var v74 = v500 + v501;
  stringToReturn$$1 = v74 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v502 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v76 = v502 != -1;
  if(v76) {
    var v503 = stringToReturn$$1 + '"';
    var v75 = v503 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v75 + '"'
  }
  var v504 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p9) {
    var v505 = sequenceTwo.substring(0, 10)
  }
  var v77 = v504 + v505;
  stringToReturn$$1 = v77 + '"';
  var v78 = '<div class="info">' + stringToReturn$$1;
  return v78 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v79 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v79);
  var j$$2 = 0;
  var v506 = arrayOfPatterns$$3.length;
  var v82 = j$$2 < v506;
  for(;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    var v934 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p9) {
      var v787 = v934.match(/\/.+\//)
    }
    var v507 = v787 + "gi";
    var v1282 = eval(v507);
    v80[v81] = v1282;
    j$$2 = j$$2 + 1;
    var v508 = arrayOfPatterns$$3.length;
    v82 = j$$2 < v508
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v83 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v83);
  var j$$3 = 0;
  var v509 = arrayOfPatterns$$4.length;
  var v88 = j$$3 < v509;
  for(;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    var v788 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p9) {
      var v510 = v788.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p9) {
      var v1283 = v510.toString()
    }
    v84[v85] = v1283;
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    var v511 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p9) {
      var v1284 = v511.replace(/=/g, "")
    }
    v86[v87] = v1284;
    j$$3 = j$$3 + 1;
    var v512 = arrayOfPatterns$$4.length;
    v88 = j$$3 < v512
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v513 = sequence$$3.length;
  var v89 = "Results for " + v513;
  var stringToReturn$$2 = v89 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v514 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v91 = v514 != -1;
  if(v91) {
    var v515 = stringToReturn$$2 + '"';
    var v90 = v515 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v90 + '"'
  }
  var v516 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p9) {
    var v517 = sequence$$3.substring(0, 10)
  }
  var v92 = v516 + v517;
  stringToReturn$$2 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$2;
  return v93 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v789 = "Results for " + topology;
  var v518 = v789 + " ";
  var v519 = sequence$$4.length;
  var v94 = v518 + v519;
  var stringToReturn$$3 = v94 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v520 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v96 = v520 != -1;
  if(v96) {
    var v521 = stringToReturn$$3 + '"';
    var v95 = v521 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v95 + '"'
  }
  var v522 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p9) {
    var v523 = sequence$$4.substring(0, 10)
  }
  var v97 = v522 + v523;
  stringToReturn$$3 = v97 + '"';
  var v98 = '<div class="info">' + stringToReturn$$3;
  return v98 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v524 = sequenceOne$$1.length;
  var v99 = "Alignment results for " + v524;
  var stringToReturn$$4 = v99 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v525 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v101 = v525 != -1;
  if(v101) {
    var v526 = stringToReturn$$4 + '"';
    var v100 = v526 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v527 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p9) {
    var v528 = sequenceOne$$1.substring(0, 10)
  }
  var v102 = v527 + v528;
  stringToReturn$$4 = v102 + '"\n';
  var v529 = stringToReturn$$4 + "and ";
  var v530 = sequenceTwo$$1.length;
  var v103 = v529 + v530;
  stringToReturn$$4 = v103 + " residue sequence ";
  introspect(JAM.policy.p9) {
    var v531 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v105 = v531 != -1;
  if(v105) {
    var v532 = stringToReturn$$4 + '"';
    var v104 = v532 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v104 + '"'
  }
  var v533 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p9) {
    var v534 = sequenceTwo$$1.substring(0, 10)
  }
  var v106 = v533 + v534;
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
    introspect(JAM.policy.p9) {
      var v535 = Math.random()
    }
    var v536 = components.length;
    var v108 = v535 * v536;
    introspect(JAM.policy.p9) {
      tempNum = Math.floor(v108)
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p9) {
      sequenceArray.push(tempChar)
    }
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut
  }
  introspect(JAM.policy.p10) {
    return sequenceArray.join("")
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p9) {
    var v537 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v110 = v537 != -1;
  if(v110) {
    introspect(JAM.policy.p9) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p9) {
    var v538 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v112 = v538 != -1;
  if(v112) {
    introspect(JAM.policy.p9) {
      var v111 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    introspect(JAM.policy.p9) {
      fastaTitle = v111.toString()
    }
    introspect(JAM.policy.p9) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "")
    }
    introspect(JAM.policy.p9) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ")
    }
    introspect(JAM.policy.p9) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
    }
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p9) {
    var v790 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v539 = v790 != -1;
  var v792 = !v539;
  if(v792) {
    introspect(JAM.policy.p9) {
      var v935 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    var v791 = v935 != -1;
    var v937 = !v791;
    if(v937) {
      introspect(JAM.policy.p9) {
        var v1045 = expressionToCheck.search(/\[\]/)
      }
      var v936 = v1045 != -1;
      var v1047 = !v936;
      if(v1047) {
        introspect(JAM.policy.p9) {
          var v1117 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
        }
        var v1046 = v1117 != -1;
        var v1119 = !v1046;
        if(v1119) {
          introspect(JAM.policy.p9) {
            var v1167 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
          }
          var v1118 = v1167 != -1;
          var v1169 = !v1118;
          if(v1169) {
            introspect(JAM.policy.p9) {
              var v1200 = expressionToCheck.search(/\|\|/)
            }
            var v1168 = v1200 != -1;
            var v1202 = !v1168;
            if(v1202) {
              introspect(JAM.policy.p9) {
                var v1217 = expressionToCheck.search(/\/\|/)
              }
              var v1201 = v1217 != -1;
              var v1219 = !v1201;
              if(v1219) {
                introspect(JAM.policy.p9) {
                  var v1232 = expressionToCheck.search(/\|\//)
                }
                var v1218 = v1232 != -1;
                var v1234 = !v1218;
                if(v1234) {
                  introspect(JAM.policy.p9) {
                    var v1244 = expressionToCheck.search(/\[.\]/)
                  }
                  var v1233 = v1244 != -1;
                  var v1246 = !v1233;
                  if(v1246) {
                    introspect(JAM.policy.p9) {
                      var v1253 = expressionToCheck.search(/\</)
                    }
                    var v1245 = v1253 != -1;
                    var v1255 = !v1245;
                    if(v1255) {
                      introspect(JAM.policy.p9) {
                        var v1254 = expressionToCheck.search(/\>/)
                      }
                      v1245 = v1254 != -1
                    }
                    v1233 = v1245
                  }
                  v1218 = v1233
                }
                v1201 = v1218
              }
              v1168 = v1201
            }
            v1118 = v1168
          }
          v1046 = v1118
        }
        v936 = v1046
      }
      v791 = v936
    }
    v539 = v791
  }
  var v113 = v539;
  if(v113) {
    return false
  }
  return true
}
function openForm() {
  var v114 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v114.write('<form action="">\n')
  }
  return true
}
function openPre() {
  var v115 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v115.write("<pre>")
  }
  var v116 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v116.write('<div class="pre">')
  }
  return
}
function openTextArea() {
  var v117 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v117.write('<br /><textarea rows="6" cols="61">\n')
  }
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAM.policy.p10) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  introspect(JAM.policy.p9) {
    outputWindow.focus()
  }
  var v118 = outputWindow.document;
  var v938 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v793 = v938 + "<head>\n";
  var v540 = v793 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v540 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p9) {
    v118.write(v119)
  }
  if(isColor) {
    var v120 = outputWindow.document;
    var v1272 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1268 = v1272 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1262 = v1268 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1256 = v1262 + "div.info {font-weight: bold}\n";
    var v1247 = v1256 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1235 = v1247 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1220 = v1235 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1203 = v1220 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1170 = v1203 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1120 = v1170 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1048 = v1120 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v939 = v1048 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v794 = v939 + "td.many {color: #000000}\n";
    var v541 = v794 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v121 = v541 + "</style>\n";
    introspect(JAM.policy.p9) {
      v120.write(v121)
    }
  }else {
    var v122 = outputWindow.document;
    var v1276 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1273 = v1276 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1269 = v1273 + "div.title {display: none}\n";
    var v1263 = v1269 + "div.info {font-weight: bold}\n";
    var v1257 = v1263 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1248 = v1257 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1236 = v1248 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1221 = v1236 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1204 = v1221 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1171 = v1204 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1121 = v1171 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1049 = v1121 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v940 = v1049 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v795 = v940 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v542 = v795 + "img {display: none}\n";
    var v123 = v542 + "</style>\n";
    introspect(JAM.policy.p9) {
      v122.write(v123)
    }
  }
  var v124 = outputWindow.document;
  var v941 = "</head>\n" + '<body class="main">\n';
  var v796 = v941 + '<div class="title">';
  var v543 = v796 + title$$7;
  var v125 = v543 + " results</div>\n";
  introspect(JAM.policy.p9) {
    v124.write(v125)
  }
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAM.policy.p10) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  introspect(JAM.policy.p9) {
    outputWindow.focus()
  }
  var v126 = outputWindow.document;
  var v942 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v797 = v942 + "<head>\n";
  var v544 = v797 + "<title>Sequence Manipulation Suite</title>\n";
  var v127 = v544 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p9) {
    v126.write(v127)
  }
  if(isBackground) {
    var v128 = outputWindow.document;
    var v1274 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1270 = v1274 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1264 = v1270 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1258 = v1264 + "div.info {font-weight: bold}\n";
    var v1249 = v1258 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1237 = v1249 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1222 = v1237 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1205 = v1222 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1172 = v1205 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1122 = v1172 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1050 = v1122 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v943 = v1050 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v798 = v943 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v545 = v798 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v129 = v545 + "</style>\n";
    introspect(JAM.policy.p9) {
      v128.write(v129)
    }
  }else {
    var v130 = outputWindow.document;
    var v1278 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1277 = v1278 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1275 = v1277 + "div.title {display: none}\n";
    var v1271 = v1275 + "div.info {font-weight: bold}\n";
    var v1265 = v1271 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1259 = v1265 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1250 = v1259 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1238 = v1250 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1223 = v1238 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1206 = v1223 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1173 = v1206 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1123 = v1173 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1051 = v1123 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v944 = v1051 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v799 = v944 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v546 = v799 + "img {display: none}\n";
    var v131 = v546 + "</style>\n";
    introspect(JAM.policy.p9) {
      v130.write(v131)
    }
  }
  var v132 = outputWindow.document;
  var v945 = "</head>\n" + '<body class="main">\n';
  var v800 = v945 + '<div class="title">';
  var v547 = v800 + title$$9;
  var v133 = v547 + " results</div>\n";
  introspect(JAM.policy.p9) {
    v132.write(v133)
  }
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p9) {
    return sequence$$5.replace(/[\d\s]/g, "")
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p9) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p9) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "")
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p9) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p9) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p9) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p9) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p9) {
    return text$$9.replace(/\s/g, "")
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p9) {
    return sequence$$12.replace(/[^A-Z]/gi, "")
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p9) {
    var v548 = dnaSequence$$1.search(/./)
  }
  var v134 = v548 != -1;
  if(v134) {
    introspect(JAM.policy.p9) {
      tempDnaArray = dnaSequence$$1.match(/./g)
    }
    introspect(JAM.policy.p9) {
      tempDnaArray = tempDnaArray.reverse()
    }
    introspect(JAM.policy.p10) {
      dnaSequence$$1 = tempDnaArray.join("")
    }
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  introspect(JAM.policy.p9) {
    theNumber = theNumber.toString()
  }
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p9) {
    testArray.push(testString)
  }
  var v549 = testArray[0];
  var v138 = v549 != testString;
  if(v138) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p9) {
    var v550 = testString.search(re$$2)
  }
  var v139 = v550 == -1;
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
  introspect(JAM.policy.p9) {
    testString = testString.replace(/(\d)/g, v1)
  }
  var v141 = testString != "1X2X3X";
  if(v141) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v551 = testNum.toFixed(3)
  }
  var v142 = v551 != 2489.824;
  if(v142) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  introspect(JAM.policy.p9) {
    var v552 = testNum.toPrecision(5)
  }
  var v143 = v552 != 2489.8;
  if(v143) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p9) {
    var v553 = theNumber$$1.search(/\d/)
  }
  var v144 = v553 == -1;
  if(v144) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p9) {
    var v801 = emblFile.search(/ID/)
  }
  var v554 = v801 == -1;
  var v803 = !v554;
  if(v803) {
    introspect(JAM.policy.p9) {
      var v946 = emblFile.search(/AC/)
    }
    var v802 = v946 == -1;
    var v948 = !v802;
    if(v948) {
      introspect(JAM.policy.p9) {
        var v1052 = emblFile.search(/DE/)
      }
      var v947 = v1052 == -1;
      var v1054 = !v947;
      if(v1054) {
        introspect(JAM.policy.p9) {
          var v1053 = emblFile.search(/SQ/)
        }
        v947 = v1053 == -1
      }
      v802 = v947
    }
    v554 = v802
  }
  var v145 = v554;
  if(v145) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p9) {
    var v555 = theNumber$$2.search(/\d/)
  }
  var v146 = v555 == -1;
  if(v146) {
    alert("Please enter a number.");
    return false
  }
  var v148 = theNumber$$2 > maxInput$$2;
  if(v148) {
    var v556 = "Please enter a number less than or equal to " + maxInput$$2;
    var v147 = v556 + ".";
    alert(v147);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p9) {
    var v557 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v149 = v557 != -1;
  if(v149) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p9) {
    var v558 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v150 = v558 != -1;
  if(v150) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p9) {
    var v804 = genBankFile.search(/LOCUS/)
  }
  var v559 = v804 == -1;
  var v806 = !v559;
  if(v806) {
    introspect(JAM.policy.p9) {
      var v949 = genBankFile.search(/DEFINITION/)
    }
    var v805 = v949 == -1;
    var v951 = !v805;
    if(v951) {
      introspect(JAM.policy.p9) {
        var v1055 = genBankFile.search(/ACCESSION/)
      }
      var v950 = v1055 == -1;
      var v1057 = !v950;
      if(v1057) {
        introspect(JAM.policy.p9) {
          var v1056 = genBankFile.search(/ORIGIN/)
        }
        v950 = v1056 == -1
      }
      v805 = v950
    }
    v559 = v805
  }
  var v151 = v559;
  if(v151) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p9) {
    var v807 = genBankFile$$1.search(/LOCUS/)
  }
  var v560 = v807 == -1;
  var v809 = !v560;
  if(v809) {
    introspect(JAM.policy.p9) {
      var v952 = genBankFile$$1.search(/DEFINITION/)
    }
    var v808 = v952 == -1;
    var v954 = !v808;
    if(v954) {
      introspect(JAM.policy.p9) {
        var v1058 = genBankFile$$1.search(/ACCESSION/)
      }
      var v953 = v1058 == -1;
      var v1060 = !v953;
      if(v1060) {
        introspect(JAM.policy.p9) {
          var v1059 = genBankFile$$1.search(/ORIGIN/)
        }
        v953 = v1059 == -1
      }
      v808 = v953
    }
    v560 = v808
  }
  var v152 = v560;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  introspect(JAM.policy.p9) {
    var v561 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v153 = v561 == -1;
  if(v153) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p9) {
    var v810 = emblFile$$1.search(/ID/)
  }
  var v562 = v810 == -1;
  var v812 = !v562;
  if(v812) {
    introspect(JAM.policy.p9) {
      var v955 = emblFile$$1.search(/AC/)
    }
    var v811 = v955 == -1;
    var v957 = !v811;
    if(v957) {
      introspect(JAM.policy.p9) {
        var v1061 = emblFile$$1.search(/DE/)
      }
      var v956 = v1061 == -1;
      var v1063 = !v956;
      if(v1063) {
        introspect(JAM.policy.p9) {
          var v1062 = emblFile$$1.search(/SQ/)
        }
        v956 = v1062 == -1
      }
      v811 = v956
    }
    v562 = v811
  }
  var v154 = v562;
  if(v154) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  introspect(JAM.policy.p9) {
    var v563 = emblFile$$1.search(/^FT/m)
  }
  var v155 = v563 == -1;
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
  var v163 = i$$5 < stopBase;
  for(;v163;) {
    var v156 = i$$5 + 1;
    lineOfText = rightNum(v156, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v564 = basePerLine / groupSize;
    var v160 = j$$6 <= v564;
    for(;v160;) {
      var v159 = k < groupSize;
      for(;v159;) {
        var v157 = lineOfText;
        var v565 = k + i$$5;
        introspect(JAM.policy.p9) {
          var v158 = text$$10.charAt(v565)
        }
        lineOfText = v157 + v158;
        k = k + 1;
        v159 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v566 = basePerLine / groupSize;
      v160 = j$$6 <= v566
    }
    var v161 = outputWindow.document;
    var v162 = lineOfText + "\n";
    introspect(JAM.policy.p9) {
      v161.write(v162)
    }
    lineOfText = "";
    v163 = i$$5 < stopBase
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
    var v567 = adjustment < 0;
    if(v567) {
      v567 = adjusted >= 0
    }
    var v164 = v567;
    if(v164) {
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
  var v197 = i$$6 < stopBase$$2;
  for(;v197;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v568 = basePerLine$$2 / groupSize$$2;
    var v173 = j$$7 <= v568;
    for(;v173;) {
      var v168 = k$$1 < groupSize$$2;
      for(;v168;) {
        var v569 = i$$6 + k$$1;
        var v165 = v569 >= stopBase$$2;
        if(v165) {
          break
        }
        var v166 = lineOfText$$1;
        var v570 = k$$1 + i$$6;
        introspect(JAM.policy.p9) {
          var v167 = text$$12.charAt(v570)
        }
        lineOfText$$1 = v166 + v167;
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v171 = numberPosition$$1 == "above";
      if(v171) {
        var v169 = aboveNum;
        var v571 = adjustNumbering(i$$6, numberingAdjustment);
        var v170 = rightNum(v571, "", groupSize$$2, tabIn$$3);
        aboveNum = v169 + v170
      }
      var v172 = i$$6 >= stopBase$$2;
      if(v172) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v572 = basePerLine$$2 / groupSize$$2;
      v173 = j$$7 <= v572
    }
    var v196 = numberPosition$$1 == "left";
    if(v196) {
      var v174 = outputWindow.document;
      var v958 = adjustNumbering(lineNum, numberingAdjustment);
      var v813 = rightNum(v958, "", 8, tabIn$$3);
      var v573 = v813 + lineOfText$$1;
      var v175 = v573 + "\n";
      introspect(JAM.policy.p9) {
        v174.write(v175)
      }
      var v179 = strands$$1 == "two";
      if(v179) {
        var v176 = outputWindow.document;
        var v959 = adjustNumbering(lineNum, numberingAdjustment);
        var v814 = rightNum(v959, "", 8, tabIn$$3);
        var v815 = complement(lineOfText$$1);
        var v574 = v814 + v815;
        var v177 = v574 + "\n";
        introspect(JAM.policy.p9) {
          v176.write(v177)
        }
        var v178 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v178.write("\n")
        }
      }
    }else {
      var v195 = numberPosition$$1 == "right";
      if(v195) {
        var v180 = outputWindow.document;
        var v816 = lineOfText$$1;
        var v817 = adjustNumbering(i$$6, numberingAdjustment);
        var v575 = v816 + v817;
        var v181 = v575 + "\n";
        introspect(JAM.policy.p9) {
          v180.write(v181)
        }
        var v185 = strands$$1 == "two";
        if(v185) {
          var v182 = outputWindow.document;
          var v818 = complement(lineOfText$$1);
          var v819 = adjustNumbering(i$$6, numberingAdjustment);
          var v576 = v818 + v819;
          var v183 = v576 + "\n";
          introspect(JAM.policy.p9) {
            v182.write(v183)
          }
          var v184 = outputWindow.document;
          introspect(JAM.policy.p9) {
            v184.write("\n")
          }
        }
      }else {
        var v194 = numberPosition$$1 == "above";
        if(v194) {
          var v186 = outputWindow.document;
          var v187 = aboveNum + "\n";
          introspect(JAM.policy.p9) {
            v186.write(v187)
          }
          var v188 = outputWindow.document;
          var v189 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p9) {
            v188.write(v189)
          }
          var v193 = strands$$1 == "two";
          if(v193) {
            var v190 = outputWindow.document;
            var v577 = complement(lineOfText$$1);
            var v191 = v577 + "\n";
            introspect(JAM.policy.p9) {
              v190.write(v191)
            }
            var v192 = outputWindow.document;
            introspect(JAM.policy.p9) {
              v192.write("\n")
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v197 = i$$6 < stopBase$$2
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
  var v218 = i$$7 < stopBase$$3;
  for(;v218;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v578 = basePerLine$$3 / groupSize$$3;
    var v206 = j$$8 <= v578;
    for(;v206;) {
      var v201 = k$$2 < groupSize$$3;
      for(;v201;) {
        var v579 = i$$7 + k$$2;
        var v198 = v579 >= stopBase$$3;
        if(v198) {
          break
        }
        var v199 = lineOfText$$2;
        var v580 = k$$2 + i$$7;
        introspect(JAM.policy.p9) {
          var v200 = text$$13.charAt(v580)
        }
        lineOfText$$2 = v199 + v200;
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v204 = numberPosition$$2 == "above";
      if(v204) {
        var v202 = aboveNum$$1;
        var v203 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v202 + v203
      }
      var v205 = i$$7 >= stopBase$$3;
      if(v205) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v581 = basePerLine$$3 / groupSize$$3;
      v206 = j$$8 <= v581
    }
    var v217 = numberPosition$$2 == "left";
    if(v217) {
      var v207 = outputWindow.document;
      var v820 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v582 = v820 + lineOfText$$2;
      var v208 = v582 + "\n";
      introspect(JAM.policy.p9) {
        v207.write(v208)
      }
    }else {
      var v216 = numberPosition$$2 == "right";
      if(v216) {
        var v209 = outputWindow.document;
        var v583 = lineOfText$$2 + i$$7;
        var v210 = v583 + "\n";
        introspect(JAM.policy.p9) {
          v209.write(v210)
        }
      }else {
        var v215 = numberPosition$$2 == "above";
        if(v215) {
          var v211 = outputWindow.document;
          var v212 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p9) {
            v211.write(v212)
          }
          var v213 = outputWindow.document;
          var v214 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p9) {
            v213.write(v214)
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v218 = i$$7 < stopBase$$3
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
  var v821 = sequence$$13.length;
  var v584 = v821 <= firstIndexToMutate;
  var v823 = !v584;
  if(v823) {
    var v822 = lastIndexToMutate < 0;
    var v960 = !v822;
    if(v960) {
      v822 = lastIndexToMutate <= firstIndexToMutate
    }
    v584 = v822
  }
  var v219 = v584;
  if(v219) {
    numMut = 0
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for(;v227;) {
    maxNum = sequence$$13.length;
    introspect(JAM.policy.p9) {
      var v585 = Math.random()
    }
    var v220 = v585 * maxNum;
    introspect(JAM.policy.p9) {
      randNum = Math.floor(v220)
    }
    var v586 = randNum < firstIndexToMutate;
    var v824 = !v586;
    if(v824) {
      v586 = randNum > lastIndexToMutate
    }
    var v221 = v586;
    if(v221) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
      continue
    }
    introspect(JAM.policy.p9) {
      currentChar = sequence$$13.charAt(randNum)
    }
    needNewChar = true;
    for(;needNewChar;) {
      introspect(JAM.policy.p9) {
        var v587 = Math.random()
      }
      var v588 = components$$1.length;
      var v222 = v587 * v588;
      introspect(JAM.policy.p9) {
        componentsIndex = Math.round(v222)
      }
      var v589 = components$$1.length;
      var v223 = componentsIndex == v589;
      if(v223) {
        componentsIndex = 0
      }
      var v590 = components$$1[componentsIndex];
      var v224 = v590 != currentChar;
      if(v224) {
        needNewChar = false
      }
    }
    introspect(JAM.policy.p9) {
      var v591 = sequence$$13.substring(0, randNum)
    }
    var v592 = components$$1[componentsIndex];
    var v225 = v591 + v592;
    var v593 = randNum + 1;
    var v594 = sequence$$13.length;
    introspect(JAM.policy.p9) {
      var v226 = sequence$$13.substring(v593, v594)
    }
    sequence$$13 = v225 + v226;
    i$$8 = i$$8 + 1;
    v227 = i$$8 < numMut
  }
  var v228 = outputWindow.document;
  var v229 = addReturns(sequence$$13);
  introspect(JAM.policy.p9) {
    v228.write(v229)
  }
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for(;v234;) {
    introspect(JAM.policy.p9) {
      var v595 = Math.random()
    }
    var v596 = components$$2.length;
    var v230 = v595 * v596;
    introspect(JAM.policy.p9) {
      tempNum$$1 = Math.floor(v230)
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v597 = sequence$$14.length;
    var v233 = v597 == 60;
    if(v233) {
      var v231 = outputWindow.document;
      var v232 = sequence$$14 + "\n";
      introspect(JAM.policy.p9) {
        v231.write(v232)
      }
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1
  }
  var v235 = outputWindow.document;
  var v236 = sequence$$14 + "\n";
  introspect(JAM.policy.p9) {
    v235.write(v236)
  }
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
  var v240 = dnaConformation == "circular";
  if(v240) {
    introspect(JAM.policy.p9) {
      var v237 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v237.length;
    var v961 = sequence$$15.length;
    var v825 = v961 - lookAhead;
    var v826 = sequence$$15.length;
    introspect(JAM.policy.p9) {
      var v598 = sequence$$15.substring(v825, v826)
    }
    var v238 = v598 + sequence$$15;
    introspect(JAM.policy.p9) {
      var v239 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v238 + v239;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v241.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n')
  }
  var v242 = outputWindow.document;
  var v962 = '<tr><td class="title" width="200px">' + "Site:";
  var v827 = v962 + '</td><td class="title">';
  var v599 = v827 + "Positions:";
  var v243 = v599 + "</td></tr>\n";
  introspect(JAM.policy.p9) {
    v242.write(v243)
  }
  var i$$9 = 0;
  var v600 = arrayOfItems.length;
  var v259 = i$$9 < v600;
  for(;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v601 = arrayOfItems[i$$9];
    introspect(JAM.policy.p9) {
      var v244 = v601.match(/\/.+\//)
    }
    matchExp = v244 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v963 = arrayOfItems[i$$9];
    introspect(JAM.policy.p9) {
      var v828 = v963.match(/\)\D*\d+/)
    }
    introspect(JAM.policy.p9) {
      var v602 = v828.toString()
    }
    introspect(JAM.policy.p9) {
      var v245 = v602.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v245);
    introspect(JAM.policy.p9) {
      var v251 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for(;v251;) {
      var v246 = matchExp.lastIndex;
      matchPosition = v246 - cutDistance;
      var v603 = matchPosition >= lowerLimit;
      if(v603) {
        v603 = matchPosition < upperLimit
      }
      var v249 = v603;
      if(v249) {
        timesFound = timesFound + 1;
        var v247 = tempString$$1 + ", ";
        var v604 = matchPosition - shiftValue;
        var v248 = v604 + 1;
        tempString$$1 = v247 + v248
      }
      var v605 = matchExp.lastIndex;
      var v829 = RegExp.lastMatch;
      var v606 = v829.length;
      var v250 = v605 - v606;
      matchExp.lastIndex = v250 + 1;
      introspect(JAM.policy.p9) {
        v251 = matchArray$$1 = matchExp.exec(sequence$$15)
      }
    }
    introspect(JAM.policy.p9) {
      var v607 = tempString$$1.search(/\d/)
    }
    var v252 = v607 != -1;
    if(v252) {
      introspect(JAM.policy.p9) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "")
      }
    }
    var v256 = timesFound == 0;
    if(v256) {
      backGroundClass = "none"
    }else {
      var v255 = timesFound == 1;
      if(v255) {
        backGroundClass = "one"
      }else {
        var v254 = timesFound == 2;
        if(v254) {
          backGroundClass = "two"
        }else {
          var v253 = timesFound == 3;
          if(v253) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v257 = outputWindow.document;
    var v1207 = '<tr><td class="' + backGroundClass;
    var v1174 = v1207 + '">';
    var v1239 = arrayOfItems[i$$9];
    introspect(JAM.policy.p9) {
      var v1224 = v1239.match(/\([^\(]+\)/)
    }
    introspect(JAM.policy.p9) {
      var v1208 = v1224.toString()
    }
    introspect(JAM.policy.p9) {
      var v1175 = v1208.replace(/\(|\)/g, "")
    }
    var v1124 = v1174 + v1175;
    var v1064 = v1124 + '</td><td class="';
    var v964 = v1064 + backGroundClass;
    var v830 = v964 + '">';
    var v608 = v830 + tempString$$1;
    var v258 = v608 + "</td></tr>\n";
    introspect(JAM.policy.p9) {
      v257.write(v258)
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v609 = arrayOfItems.length;
    v259 = i$$9 < v609
  }
  var v260 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v260.write("</tbody></table>\n")
  }
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v261.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n')
  }
  var v262 = outputWindow.document;
  var v1125 = '<tr><td class="title">' + "Pattern:";
  var v1065 = v1125 + '</td><td class="title">';
  var v965 = v1065 + "Times found:";
  var v831 = v965 + '</td><td class="title">';
  var v610 = v831 + "Percentage:";
  var v263 = v610 + "</td></tr>\n";
  introspect(JAM.policy.p9) {
    v262.write(v263)
  }
  var i$$10 = 0;
  var v611 = arrayOfItems$$1.length;
  var v272 = i$$10 < v611;
  for(;v272;) {
    var tempNumber = 0;
    var v612 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p9) {
      var v264 = v612.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v264 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p9) {
      var v613 = sequence$$16.search(matchExp$$1)
    }
    var v266 = v613 != -1;
    if(v266) {
      introspect(JAM.policy.p9) {
        var v265 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v265.length
    }
    var percentage = 0;
    var v832 = originalLength + 1;
    var v1066 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p9) {
      var v966 = v1066.match(/\d+/)
    }
    var v833 = parseFloat(v966);
    var v614 = v832 - v833;
    var v269 = v614 > 0;
    if(v269) {
      var v267 = 100 * tempNumber;
      var v615 = originalLength + 1;
      var v967 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p9) {
        var v834 = v967.match(/\d+/)
      }
      var v616 = parseFloat(v834);
      var v268 = v615 - v616;
      percentage = v267 / v268
    }
    var v270 = outputWindow.document;
    var v1240 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p9) {
      var v1225 = v1240.match(/\([^\(]+\)\b/)
    }
    introspect(JAM.policy.p9) {
      var v1209 = v1225.toString()
    }
    introspect(JAM.policy.p9) {
      var v1176 = v1209.replace(/\(|\)/g, "")
    }
    var v1126 = "<tr><td>" + v1176;
    var v1067 = v1126 + "</td><td>";
    var v968 = v1067 + tempNumber;
    var v835 = v968 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v836 = percentage.toFixed(2)
    }
    var v617 = v835 + v836;
    var v271 = v617 + "</td></tr>\n";
    introspect(JAM.policy.p9) {
      v270.write(v271)
    }
    i$$10 = i$$10 + 1;
    var v618 = arrayOfItems$$1.length;
    v272 = i$$10 < v618
  }
  var v273 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v273.write("</tbody></table>\n")
  }
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v619 = sequence$$17.length;
  var v280 = v619 > 0;
  for(;v280;) {
    maxNum$$1 = sequence$$17.length;
    introspect(JAM.policy.p9) {
      var v620 = Math.random()
    }
    var v274 = v620 * maxNum$$1;
    introspect(JAM.policy.p9) {
      randNum$$1 = Math.floor(v274)
    }
    introspect(JAM.policy.p9) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1)
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p9) {
      tempString1 = sequence$$17.substring(0, randNum$$1)
    }
    var v275 = randNum$$1 + 1;
    var v276 = sequence$$17.length;
    introspect(JAM.policy.p9) {
      tempString2 = sequence$$17.substring(v275, v276)
    }
    sequence$$17 = tempString1 + tempString2;
    var v621 = tempSeq.length;
    var v279 = v621 == 60;
    if(v279) {
      var v277 = outputWindow.document;
      var v278 = tempSeq + "\n";
      introspect(JAM.policy.p9) {
        v277.write(v278)
      }
      tempSeq = ""
    }
    var v622 = sequence$$17.length;
    v280 = v622 > 0
  }
  var v281 = outputWindow.document;
  var v282 = tempSeq + "\n";
  introspect(JAM.policy.p9) {
    v281.write(v282)
  }
  return true
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v623 = testScript();
  var v283 = v623 == false;
  if(v283) {
    return false
  }
  var v1177 = theDocument.forms;
  var v1127 = v1177[0];
  var v1068 = v1127.elements;
  var v969 = v1068[0];
  var v837 = checkFormElement(v969);
  var v624 = v837 == false;
  var v839 = !v624;
  if(v839) {
    var v1226 = theDocument.forms;
    var v1210 = v1226[0];
    var v1178 = v1210.elements;
    var v1128 = v1178[0];
    var v1069 = v1128.value;
    var v970 = checkSequenceLength(v1069, maxInput$$3);
    var v838 = v970 == false;
    var v972 = !v838;
    if(v972) {
      var v1227 = theDocument.forms;
      var v1211 = v1227[0];
      var v1179 = v1211.elements;
      var v1129 = v1179[1];
      var v1070 = checkFormElement(v1129);
      var v971 = v1070 == false;
      var v1072 = !v971;
      if(v1072) {
        var v1241 = theDocument.forms;
        var v1228 = v1241[0];
        var v1212 = v1228.elements;
        var v1180 = v1212[3];
        var v1130 = checkFormElement(v1180);
        var v1071 = v1130 == false;
        var v1132 = !v1071;
        if(v1132) {
          var v1266 = theDocument.forms;
          var v1260 = v1266[0];
          var v1251 = v1260.elements;
          var v1242 = v1251[1];
          var v1229 = v1242.value;
          introspect(JAM.policy.p9) {
            var v1213 = v1229.replace(/[^\d]/g, "")
          }
          var v1181 = verifyMaxDigits(v1213, maxInput$$3);
          var v1131 = v1181 == false;
          var v1183 = !v1131;
          if(v1183) {
            var v1267 = theDocument.forms;
            var v1261 = v1267[0];
            var v1252 = v1261.elements;
            var v1243 = v1252[3];
            var v1230 = v1243.value;
            introspect(JAM.policy.p9) {
              var v1214 = v1230.replace(/[^\d]/g, "")
            }
            var v1182 = verifyMaxDigits(v1214, maxInput$$3);
            v1131 = v1182 == false
          }
          v1071 = v1131
        }
        v971 = v1071
      }
      v838 = v971
    }
    v624 = v838
  }
  var v284 = v624;
  if(v284) {
    return false
  }
  var v1133 = theDocument.forms;
  var v1073 = v1133[0];
  var v973 = v1073.elements;
  var v840 = v973[1];
  var v625 = v840.value;
  introspect(JAM.policy.p9) {
    var v285 = v625.replace(/[^\d]/g, "")
  }
  var windowSize = parseInt(v285);
  var v1134 = theDocument.forms;
  var v1074 = v1134[0];
  var v974 = v1074.elements;
  var v841 = v974[3];
  var v626 = v841.value;
  introspect(JAM.policy.p9) {
    var v286 = v626.replace(/[^\d]/g, "")
  }
  var position = parseInt(v286);
  var v975 = theDocument.forms;
  var v842 = v975[0];
  var v627 = v842.elements;
  var v287 = v627[2];
  var orientation = v287.value;
  var start$$4;
  var end$$1;
  var v294 = orientation == "ending";
  if(v294) {
    end$$1 = position;
    var v288 = end$$1 - windowSize;
    start$$4 = v288 + 1
  }else {
    var v293 = orientation == "starting";
    if(v293) {
      start$$4 = position;
      var v289 = start$$4 + windowSize;
      end$$1 = v289 - 1
    }else {
      var v292 = orientation == "centered";
      if(v292) {
        var v628 = position;
        var v843 = windowSize / 2;
        introspect(JAM.policy.p9) {
          var v629 = Math.round(v843)
        }
        var v290 = v628 - v629;
        start$$4 = v290 + 1;
        var v291 = start$$4 + windowSize;
        end$$1 = v291 - 1
      }
    }
  }
  var v295 = new Range(start$$4, end$$1);
  introspect(JAM.policy.p9) {
    ranges.push(v295)
  }
  openWindow("Window Extractor DNA");
  openPre();
  var v1075 = theDocument.forms;
  var v976 = v1075[0];
  var v844 = v976.elements;
  var v630 = v844[0];
  var v296 = v630.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v296);
  var i$$11 = 0;
  var v631 = arrayOfFasta$$1.length;
  var v303 = i$$11 < v631;
  for(;v303;) {
    var v297 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v297);
    var v298 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v298);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v299 = outputWindow.document;
    var v300 = getFastaTitleFromTitleAndSequence(title, newDna);
    introspect(JAM.policy.p9) {
      v299.write(v300)
    }
    var v1184 = theDocument.forms;
    var v1135 = v1184[0];
    var v1076 = v1135.elements;
    var v977 = v1076[7];
    var v845 = v977.options;
    var v1185 = theDocument.forms;
    var v1136 = v1185[0];
    var v1077 = v1136.elements;
    var v978 = v1077[7];
    var v846 = v978.selectedIndex;
    var v632 = v845[v846];
    var v301 = v632.value;
    var v1186 = theDocument.forms;
    var v1137 = v1186[0];
    var v1078 = v1137.elements;
    var v979 = v1078[8];
    var v847 = v979.options;
    var v1187 = theDocument.forms;
    var v1138 = v1187[0];
    var v1079 = v1138.elements;
    var v980 = v1079[8];
    var v848 = v980.selectedIndex;
    var v633 = v847[v848];
    var v302 = v633.value;
    writeSequenceRanges(newDna, ranges, v301, v302);
    i$$11 = i$$11 + 1;
    var v634 = arrayOfFasta$$1.length;
    v303 = i$$11 < v634
  }
  closePre();
  closeWindow();
  return true
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v635 = testScript();
  var v304 = v635 == false;
  if(v304) {
    return false
  }
  var v1188 = theDocument$$1.forms;
  var v1139 = v1188[0];
  var v1080 = v1139.elements;
  var v981 = v1080[0];
  var v849 = checkFormElement(v981);
  var v636 = v849 == false;
  var v851 = !v636;
  if(v851) {
    var v1231 = theDocument$$1.forms;
    var v1215 = v1231[0];
    var v1189 = v1215.elements;
    var v1140 = v1189[0];
    var v1081 = v1140.value;
    var v982 = checkSequenceLength(v1081, maxInput$$4);
    var v850 = v982 == false;
    var v984 = !v850;
    if(v984) {
      var v1216 = theDocument$$1.forms;
      var v1190 = v1216[0];
      var v1141 = v1190.elements;
      var v1082 = v1141[1];
      var v983 = checkFormElement(v1082);
      v850 = v983 == false
    }
    v636 = v850
  }
  var v305 = v636;
  if(v305) {
    return false
  }
  var v1083 = theDocument$$1.forms;
  var v985 = v1083[0];
  var v852 = v985.elements;
  var v637 = v852[1];
  var v306 = v637.value;
  introspect(JAM.policy.p9) {
    var arrayOfRanges = v306.split(/,/)
  }
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v638 = arrayOfRanges.length;
  var v313 = i$$12 < v638;
  for(;v313;) {
    var v307 = arrayOfRanges[i$$12];
    introspect(JAM.policy.p9) {
      arrayOfStartAndEnd = v307.split(/\.\./)
    }
    var v639 = arrayOfStartAndEnd.length;
    var v312 = v639 == 1;
    if(v312) {
      matchFound$$1 = true;
      var v640 = arrayOfStartAndEnd[0];
      var v641 = arrayOfStartAndEnd[0];
      var v308 = new Range(v640, v641);
      introspect(JAM.policy.p9) {
        ranges$$1.push(v308)
      }
    }else {
      var v642 = arrayOfStartAndEnd.length;
      var v311 = v642 == 2;
      if(v311) {
        matchFound$$1 = true;
        var v643 = arrayOfStartAndEnd[0];
        var v644 = arrayOfStartAndEnd[1];
        var v309 = new Range(v643, v644);
        introspect(JAM.policy.p9) {
          ranges$$1.push(v309)
        }
      }else {
        var v645 = arrayOfRanges[i$$12];
        var v310 = "The following range entry was ignored: " + v645;
        alert(v310)
      }
    }
    i$$12 = i$$12 + 1;
    var v646 = arrayOfRanges.length;
    v313 = i$$12 < v646
  }
  var v314 = matchFound$$1 == false;
  if(v314) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1084 = theDocument$$1.forms;
  var v986 = v1084[0];
  var v853 = v986.elements;
  var v647 = v853[0];
  var v315 = v647.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v315);
  i$$12 = 0;
  var v648 = arrayOfFasta$$2.length;
  var v322 = i$$12 < v648;
  for(;v322;) {
    var v316 = arrayOfFasta$$2[i$$12];
    newDna$$1 = getSequenceFromFasta(v316);
    var v317 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v317);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v318 = outputWindow.document;
    var v319 = getFastaTitleFromTitleAndSequence(title, newDna$$1);
    introspect(JAM.policy.p9) {
      v318.write(v319)
    }
    var v1191 = theDocument$$1.forms;
    var v1142 = v1191[0];
    var v1085 = v1142.elements;
    var v987 = v1085[5];
    var v854 = v987.options;
    var v1192 = theDocument$$1.forms;
    var v1143 = v1192[0];
    var v1086 = v1143.elements;
    var v988 = v1086[5];
    var v855 = v988.selectedIndex;
    var v649 = v854[v855];
    var v320 = v649.value;
    var v1193 = theDocument$$1.forms;
    var v1144 = v1193[0];
    var v1087 = v1144.elements;
    var v989 = v1087[6];
    var v856 = v989.options;
    var v1194 = theDocument$$1.forms;
    var v1145 = v1194[0];
    var v1088 = v1145.elements;
    var v990 = v1088[6];
    var v857 = v990.selectedIndex;
    var v650 = v856[v857];
    var v321 = v650.value;
    writeSequenceRanges(newDna$$1, ranges$$1, v320, v321);
    i$$12 = i$$12 + 1;
    var v651 = arrayOfFasta$$2.length;
    v322 = i$$12 < v651
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v652 = sequence$$18.length;
  var v323 = v652 / 2;
  introspect(JAM.policy.p9) {
    var center_base = Math.round(v323)
  }
  var i$$13 = 0;
  var v653 = ranges$$2.length;
  var v337 = i$$13 < v653;
  for(;v337;) {
    var v324 = ranges$$2[i$$13];
    var v991 = ranges$$2[i$$13];
    var v858 = v991.start;
    introspect(JAM.policy.p9) {
      var v654 = v858.toString()
    }
    introspect(JAM.policy.p9) {
      var v1285 = v654.replace(/start|begin/gi, 1)
    }
    v324.start = v1285;
    var v325 = ranges$$2[i$$13];
    var v992 = ranges$$2[i$$13];
    var v859 = v992.start;
    introspect(JAM.policy.p9) {
      var v655 = v859.toString()
    }
    var v656 = sequence$$18.length;
    introspect(JAM.policy.p9) {
      var v1286 = v655.replace(/stop|end/gi, v656)
    }
    v325.start = v1286;
    var v326 = ranges$$2[i$$13];
    var v993 = ranges$$2[i$$13];
    var v860 = v993.start;
    introspect(JAM.policy.p9) {
      var v657 = v860.toString()
    }
    var v658 = sequence$$18.length;
    introspect(JAM.policy.p9) {
      var v1287 = v657.replace(/length/gi, v658)
    }
    v326.start = v1287;
    var v327 = ranges$$2[i$$13];
    var v994 = ranges$$2[i$$13];
    var v861 = v994.start;
    introspect(JAM.policy.p9) {
      var v659 = v861.toString()
    }
    introspect(JAM.policy.p9) {
      var v1288 = v659.replace(/middle|center|centre/gi, center_base)
    }
    v327.start = v1288;
    var v328 = ranges$$2[i$$13];
    var v995 = ranges$$2[i$$13];
    var v862 = v995.stop;
    introspect(JAM.policy.p9) {
      var v660 = v862.toString()
    }
    introspect(JAM.policy.p9) {
      var v1289 = v660.replace(/start|begin/gi, 1)
    }
    v328.stop = v1289;
    var v329 = ranges$$2[i$$13];
    var v996 = ranges$$2[i$$13];
    var v863 = v996.stop;
    introspect(JAM.policy.p9) {
      var v661 = v863.toString()
    }
    var v662 = sequence$$18.length;
    introspect(JAM.policy.p9) {
      var v1290 = v661.replace(/stop|end/gi, v662)
    }
    v329.stop = v1290;
    var v330 = ranges$$2[i$$13];
    var v997 = ranges$$2[i$$13];
    var v864 = v997.stop;
    introspect(JAM.policy.p9) {
      var v663 = v864.toString()
    }
    var v664 = sequence$$18.length;
    introspect(JAM.policy.p9) {
      var v1291 = v663.replace(/length/gi, v664)
    }
    v330.stop = v1291;
    var v331 = ranges$$2[i$$13];
    var v998 = ranges$$2[i$$13];
    var v865 = v998.stop;
    introspect(JAM.policy.p9) {
      var v665 = v865.toString()
    }
    introspect(JAM.policy.p9) {
      var v1292 = v665.replace(/middle|center|centre/gi, center_base)
    }
    v331.stop = v1292;
    try {
      var v332 = ranges$$2[i$$13];
      var v1089 = ranges$$2[i$$13];
      var v999 = v1089.start;
      introspect(JAM.policy.p9) {
        var v866 = v999.toString()
      }
      var v666 = eval(v866);
      var v1293 = parseInt(v666);
      v332.start = v1293
    }catch(e$$5) {
      var v867 = ranges$$2[i$$13];
      var v667 = v867.start;
      var v333 = "Could not evaluate the following expression: " + v667;
      alert(v333);
      return false
    }
    try {
      var v334 = ranges$$2[i$$13];
      var v1090 = ranges$$2[i$$13];
      var v1000 = v1090.stop;
      introspect(JAM.policy.p9) {
        var v868 = v1000.toString()
      }
      var v668 = eval(v868);
      var v1294 = parseInt(v668);
      v334.stop = v1294
    }catch(e$$6) {
      var v869 = ranges$$2[i$$13];
      var v669 = v869.stop;
      var v335 = "Could not evaluate the following expression: " + v669;
      alert(v335);
      return false
    }
    var v336 = ranges$$2[i$$13];
    introspect(JAM.policy.p9) {
      rangeGroup.addRange(v336)
    }
    i$$13 = i$$13 + 1;
    var v670 = ranges$$2.length;
    v337 = i$$13 < v670
  }
  introspect(JAM.policy.p9) {
    rangeGroup.writeRanges(sequence$$18)
  }
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v671 = this.start;
  var v672 = this.stop;
  var v352 = v671 == v672;
  if(v352) {
    var v673 = this.start;
    var v339 = v673 < 1;
    if(v339) {
      problem = true;
      var v870 = this.start;
      var v674 = "position value of " + v870;
      var v338 = v674 + " is less than 1";
      introspect(JAM.policy.p9) {
        warnings.push(v338)
      }
    }
    var v675 = this.start;
    var v676 = sequence$$19.length;
    var v341 = v675 > v676;
    if(v341) {
      problem = true;
      var v871 = this.start;
      var v677 = "position value of " + v871;
      var v340 = v677 + " is greater than the sequence length";
      introspect(JAM.policy.p9) {
        warnings.push(v340)
      }
    }
  }else {
    var v678 = this.start;
    var v343 = v678 < 1;
    if(v343) {
      problem = true;
      var v872 = this.start;
      var v679 = "position value of " + v872;
      var v342 = v679 + " is less than 1";
      introspect(JAM.policy.p9) {
        warnings.push(v342)
      }
    }
    var v680 = this.stop;
    var v345 = v680 < 1;
    if(v345) {
      problem = true;
      var v873 = this.stop;
      var v681 = "position value of " + v873;
      var v344 = v681 + " is less than 1";
      introspect(JAM.policy.p9) {
        warnings.push(v344)
      }
    }
    var v682 = this.start;
    var v683 = sequence$$19.length;
    var v347 = v682 > v683;
    if(v347) {
      problem = true;
      var v874 = this.start;
      var v684 = "position value of " + v874;
      var v346 = v684 + " is greater than the sequence length";
      introspect(JAM.policy.p9) {
        warnings.push(v346)
      }
    }
    var v685 = this.stop;
    var v686 = sequence$$19.length;
    var v349 = v685 > v686;
    if(v349) {
      problem = true;
      var v875 = this.stop;
      var v687 = "position value of " + v875;
      var v348 = v687 + " is greater than the sequence length";
      introspect(JAM.policy.p9) {
        warnings.push(v348)
      }
    }
    var v688 = this.start;
    var v689 = this.stop;
    var v351 = v688 > v689;
    if(v351) {
      problem = true;
      var v1001 = this.start;
      var v876 = "stop position is less than start position in range " + v1001;
      var v690 = v876 + " to ";
      var v691 = this.stop;
      var v350 = v690 + v691;
      introspect(JAM.policy.p9) {
        warnings.push(v350)
      }
    }
  }
  if(problem) {
    introspect(JAM.policy.p9) {
      var v692 = warnings.join(",\n")
    }
    var v353 = "An entry was skipped because of the following:\n" + v692;
    alert(v353);
    return false
  }else {
    var v693 = this.start;
    var v694 = this.stop;
    var v357 = v693 == v694;
    if(v357) {
      var v695 = this.start;
      var v354 = v695 - 1;
      introspect(JAM.policy.p9) {
        return sequence$$19.charAt(v354)
      }
    }else {
      var v696 = this.start;
      var v355 = v696 - 1;
      var v356 = this.stop;
      introspect(JAM.policy.p9) {
        return sequence$$19.substring(v355, v356)
      }
    }
  }
  return
}
function getTitle() {
  var v697 = this.start;
  var v698 = this.stop;
  var v361 = v697 == v698;
  if(v361) {
    var v358 = this.start;
    return"&gt;base " + v358
  }else {
    var v877 = this.start;
    var v699 = "&gt;base " + v877;
    var v359 = v699 + " to ";
    var v360 = this.stop;
    return v359 + v360
  }
  return
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v362 = this.ranges;
  introspect(JAM.policy.p9) {
    v362.push(range$$5)
  }
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$21, s$$11) {
    var v700 = p1$$9.length;
    var v363 = offset$$21 + v700;
    introspect(JAM.policy.p9) {
      return sequence$$20.substring(offset$$21, v363)
    }
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$20, s$$10) {
    var v364 = p1$$8;
    var v701 = p1$$8.length;
    var v878 = p1$$8.length;
    var v879 = p2$$3.length;
    var v702 = v878 + v879;
    introspect(JAM.policy.p9) {
      var v365 = sequence$$20.substring(v701, v702)
    }
    return v364 + v365
  }
  function v7(str$$13, p1$$7, offset$$19, s$$9) {
    var v366 = ["g", "a", "c", "t"];
    var v367 = p1$$7.length;
    return getRandomSequence(v366, v367)
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$18, s$$8) {
    var v368 = p1$$6;
    var v703 = ["g", "a", "c", "t"];
    var v704 = p2$$2.length;
    var v369 = getRandomSequence(v703, v704);
    return v368 + v369
  }
  function v5(str$$11, p1$$5, offset$$17, s$$7) {
    introspect(JAM.policy.p9) {
      return p1$$5.toLowerCase()
    }
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$16, s$$6) {
    var v370 = p1$$4;
    introspect(JAM.policy.p9) {
      var v371 = p2$$1.toLowerCase()
    }
    return v370 + v371
  }
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    introspect(JAM.policy.p9) {
      return p1$$3.toUpperCase()
    }
  }
  function v2(str$$8, p1$$2, p2, offset$$14, s$$4) {
    var v372 = p1$$2;
    introspect(JAM.policy.p9) {
      var v373 = p2.toUpperCase()
    }
    return v372 + v373
  }
  var sequenceArray$$1 = new Array;
  var v705 = this.type;
  var v382 = v705 == "new_sequence";
  if(v382) {
    var i$$14 = 0;
    var v880 = this.ranges;
    var v706 = v880.length;
    var v376 = i$$14 < v706;
    for(;v376;) {
      var v1002 = this.ranges;
      var v881 = v1002[i$$14];
      introspect(JAM.policy.p9) {
        var v707 = v881.getSequence(sequence$$20)
      }
      var v375 = v707 != "";
      if(v375) {
        var v882 = this.ranges;
        var v708 = v882[i$$14];
        introspect(JAM.policy.p9) {
          var v374 = v708.getSequence(sequence$$20)
        }
        introspect(JAM.policy.p9) {
          sequenceArray$$1.push(v374)
        }
      }
      i$$14 = i$$14 + 1;
      var v883 = this.ranges;
      var v709 = v883.length;
      v376 = i$$14 < v709
    }
    var v710 = this.strand;
    var v381 = v710 == "reverse";
    if(v381) {
      var v377 = outputWindow.document;
      introspect(JAM.policy.p10) {
        var v1091 = sequenceArray$$1.join("")
      }
      var v1003 = complement(v1091);
      var v884 = reverse(v1003);
      var v711 = addReturns(v884);
      var v378 = v711 + "\n\n";
      introspect(JAM.policy.p9) {
        v377.write(v378)
      }
    }else {
      var v379 = outputWindow.document;
      introspect(JAM.policy.p10) {
        var v885 = sequenceArray$$1.join("")
      }
      var v712 = addReturns(v885);
      var v380 = v712 + "\n\n";
      introspect(JAM.policy.p9) {
        v379.write(v380)
      }
    }
    return true
  }
  var v713 = this.type;
  var v392 = v713 == "separate";
  if(v392) {
    i$$14 = 0;
    var v886 = this.ranges;
    var v714 = v886.length;
    var v391 = i$$14 < v714;
    for(;v391;) {
      var v1004 = this.ranges;
      var v887 = v1004[i$$14];
      introspect(JAM.policy.p9) {
        var v715 = v887.getSequence(sequence$$20)
      }
      var v390 = v715 != "";
      if(v390) {
        var v383 = outputWindow.document;
        var v1005 = this.ranges;
        var v888 = v1005[i$$14];
        introspect(JAM.policy.p9) {
          var v716 = v888.getTitle()
        }
        var v384 = v716 + "\n";
        introspect(JAM.policy.p9) {
          v383.write(v384)
        }
        var v717 = this.strand;
        var v389 = v717 == "reverse";
        if(v389) {
          var v385 = outputWindow.document;
          var v1195 = this.ranges;
          var v1146 = v1195[i$$14];
          introspect(JAM.policy.p9) {
            var v1092 = v1146.getSequence(sequence$$20)
          }
          var v1006 = addReturns(v1092);
          var v889 = complement(v1006);
          var v718 = reverse(v889);
          var v386 = v718 + "\n\n";
          introspect(JAM.policy.p9) {
            v385.write(v386)
          }
        }else {
          var v387 = outputWindow.document;
          var v1093 = this.ranges;
          var v1007 = v1093[i$$14];
          introspect(JAM.policy.p9) {
            var v890 = v1007.getSequence(sequence$$20)
          }
          var v719 = addReturns(v890);
          var v388 = v719 + "\n\n";
          introspect(JAM.policy.p9) {
            v387.write(v388)
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v891 = this.ranges;
      var v720 = v891.length;
      v391 = i$$14 < v720
    }
    return true
  }
  var v721 = this.type;
  var v403 = v721 == "uppercased";
  if(v403) {
    var re$$3;
    introspect(JAM.policy.p9) {
      sequence$$20 = sequence$$20.toLowerCase()
    }
    i$$14 = 0;
    var v892 = this.ranges;
    var v722 = v892.length;
    var v397 = i$$14 < v722;
    for(;v397;) {
      var v1008 = this.ranges;
      var v893 = v1008[i$$14];
      introspect(JAM.policy.p9) {
        var v723 = v893.getSequence(sequence$$20)
      }
      var v396 = v723 != "";
      if(v396) {
        var v1009 = this.ranges;
        var v894 = v1009[i$$14];
        var v724 = v894.start;
        var v395 = v724 > 1;
        if(v395) {
          var v1196 = this.ranges;
          var v1147 = v1196[i$$14];
          var v1094 = v1147.start;
          var v1010 = v1094 - 1;
          var v895 = "(.{" + v1010;
          var v725 = v895 + "})\\B(.{";
          var v1148 = this.ranges;
          var v1095 = v1148[i$$14];
          var v1011 = v1095.stop;
          var v1149 = this.ranges;
          var v1096 = v1149[i$$14];
          var v1012 = v1096.start;
          var v896 = v1011 - v1012;
          var v726 = v896 + 1;
          var v393 = v725 + v726;
          re$$3 = v393 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v2)
          }
        }else {
          var v1150 = this.ranges;
          var v1097 = v1150[i$$14];
          var v1013 = v1097.stop;
          var v1151 = this.ranges;
          var v1098 = v1151[i$$14];
          var v1014 = v1098.start;
          var v897 = v1013 - v1014;
          var v727 = v897 + 1;
          var v394 = "(.{" + v727;
          re$$3 = v394 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v3)
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v898 = this.ranges;
      var v728 = v898.length;
      v397 = i$$14 < v728
    }
    var v729 = this.strand;
    var v402 = v729 == "reverse";
    if(v402) {
      var v398 = outputWindow.document;
      var v1015 = addReturns(sequence$$20);
      var v899 = complement(v1015);
      var v730 = reverse(v899);
      var v399 = v730 + "\n\n";
      introspect(JAM.policy.p9) {
        v398.write(v399)
      }
    }else {
      var v400 = outputWindow.document;
      var v731 = addReturns(sequence$$20);
      var v401 = v731 + "\n\n";
      introspect(JAM.policy.p9) {
        v400.write(v401)
      }
    }
    return true
  }
  var v732 = this.type;
  var v414 = v732 == "lowercased";
  if(v414) {
    introspect(JAM.policy.p9) {
      sequence$$20 = sequence$$20.toUpperCase()
    }
    i$$14 = 0;
    var v900 = this.ranges;
    var v733 = v900.length;
    var v408 = i$$14 < v733;
    for(;v408;) {
      var v1016 = this.ranges;
      var v901 = v1016[i$$14];
      introspect(JAM.policy.p9) {
        var v734 = v901.getSequence(sequence$$20)
      }
      var v407 = v734 != "";
      if(v407) {
        var v1017 = this.ranges;
        var v902 = v1017[i$$14];
        var v735 = v902.start;
        var v406 = v735 > 1;
        if(v406) {
          var v1197 = this.ranges;
          var v1152 = v1197[i$$14];
          var v1099 = v1152.start;
          var v1018 = v1099 - 1;
          var v903 = "(.{" + v1018;
          var v736 = v903 + "})\\B(.{";
          var v1153 = this.ranges;
          var v1100 = v1153[i$$14];
          var v1019 = v1100.stop;
          var v1154 = this.ranges;
          var v1101 = v1154[i$$14];
          var v1020 = v1101.start;
          var v904 = v1019 - v1020;
          var v737 = v904 + 1;
          var v404 = v736 + v737;
          re$$3 = v404 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v4)
          }
        }else {
          var v1155 = this.ranges;
          var v1102 = v1155[i$$14];
          var v1021 = v1102.stop;
          var v1156 = this.ranges;
          var v1103 = v1156[i$$14];
          var v1022 = v1103.start;
          var v905 = v1021 - v1022;
          var v738 = v905 + 1;
          var v405 = "(.{" + v738;
          re$$3 = v405 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v5)
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v906 = this.ranges;
      var v739 = v906.length;
      v408 = i$$14 < v739
    }
    var v740 = this.strand;
    var v413 = v740 == "reverse";
    if(v413) {
      var v409 = outputWindow.document;
      var v1023 = addReturns(sequence$$20);
      var v907 = complement(v1023);
      var v741 = reverse(v907);
      var v410 = v741 + "\n\n";
      introspect(JAM.policy.p9) {
        v409.write(v410)
      }
    }else {
      var v411 = outputWindow.document;
      var v742 = addReturns(sequence$$20);
      var v412 = v742 + "\n\n";
      introspect(JAM.policy.p9) {
        v411.write(v412)
      }
    }
    return true
  }
  var v743 = this.type;
  var v425 = v743 == "randomized";
  if(v425) {
    i$$14 = 0;
    var v908 = this.ranges;
    var v744 = v908.length;
    var v419 = i$$14 < v744;
    for(;v419;) {
      var v1024 = this.ranges;
      var v909 = v1024[i$$14];
      introspect(JAM.policy.p9) {
        var v745 = v909.getSequence(sequence$$20)
      }
      var v418 = v745 != "";
      if(v418) {
        var v1025 = this.ranges;
        var v910 = v1025[i$$14];
        var v746 = v910.start;
        var v417 = v746 > 1;
        if(v417) {
          var v1198 = this.ranges;
          var v1157 = v1198[i$$14];
          var v1104 = v1157.start;
          var v1026 = v1104 - 1;
          var v911 = "(.{" + v1026;
          var v747 = v911 + "})\\B(.{";
          var v1158 = this.ranges;
          var v1105 = v1158[i$$14];
          var v1027 = v1105.stop;
          var v1159 = this.ranges;
          var v1106 = v1159[i$$14];
          var v1028 = v1106.start;
          var v912 = v1027 - v1028;
          var v748 = v912 + 1;
          var v415 = v747 + v748;
          re$$3 = v415 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v6)
          }
        }else {
          var v1160 = this.ranges;
          var v1107 = v1160[i$$14];
          var v1029 = v1107.stop;
          var v1161 = this.ranges;
          var v1108 = v1161[i$$14];
          var v1030 = v1108.start;
          var v913 = v1029 - v1030;
          var v749 = v913 + 1;
          var v416 = "(.{" + v749;
          re$$3 = v416 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            sequence$$20 = sequence$$20.replace(re$$3, v7)
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v914 = this.ranges;
      var v750 = v914.length;
      v419 = i$$14 < v750
    }
    var v751 = this.strand;
    var v424 = v751 == "reverse";
    if(v424) {
      var v420 = outputWindow.document;
      var v1031 = addReturns(sequence$$20);
      var v915 = complement(v1031);
      var v752 = reverse(v915);
      var v421 = v752 + "\n\n";
      introspect(JAM.policy.p9) {
        v420.write(v421)
      }
    }else {
      var v422 = outputWindow.document;
      var v753 = addReturns(sequence$$20);
      var v423 = v753 + "\n\n";
      introspect(JAM.policy.p9) {
        v422.write(v423)
      }
    }
    return true
  }
  var v754 = this.type;
  var v438 = v754 == "preserved";
  if(v438) {
    var v426 = ["g", "a", "c", "t"];
    var v427 = sequence$$20.length;
    var randomSequence = getRandomSequence(v426, v427);
    i$$14 = 0;
    var v916 = this.ranges;
    var v755 = v916.length;
    var v432 = i$$14 < v755;
    for(;v432;) {
      var v1032 = this.ranges;
      var v917 = v1032[i$$14];
      introspect(JAM.policy.p9) {
        var v756 = v917.getSequence(sequence$$20)
      }
      var v431 = v756 != "";
      if(v431) {
        var v1033 = this.ranges;
        var v918 = v1033[i$$14];
        var v757 = v918.start;
        var v430 = v757 > 1;
        if(v430) {
          var v1199 = this.ranges;
          var v1162 = v1199[i$$14];
          var v1109 = v1162.start;
          var v1034 = v1109 - 1;
          var v919 = "(.{" + v1034;
          var v758 = v919 + "})\\B(.{";
          var v1163 = this.ranges;
          var v1110 = v1163[i$$14];
          var v1035 = v1110.stop;
          var v1164 = this.ranges;
          var v1111 = v1164[i$$14];
          var v1036 = v1111.start;
          var v920 = v1035 - v1036;
          var v759 = v920 + 1;
          var v428 = v758 + v759;
          re$$3 = v428 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            randomSequence = randomSequence.replace(re$$3, v8)
          }
        }else {
          var v1165 = this.ranges;
          var v1112 = v1165[i$$14];
          var v1037 = v1112.stop;
          var v1166 = this.ranges;
          var v1113 = v1166[i$$14];
          var v1038 = v1113.start;
          var v921 = v1037 - v1038;
          var v760 = v921 + 1;
          var v429 = "(.{" + v760;
          re$$3 = v429 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p9) {
            randomSequence = randomSequence.replace(re$$3, v9)
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v922 = this.ranges;
      var v761 = v922.length;
      v432 = i$$14 < v761
    }
    var v762 = this.strand;
    var v437 = v762 == "reverse";
    if(v437) {
      var v433 = outputWindow.document;
      var v1039 = addReturns(randomSequence);
      var v923 = complement(v1039);
      var v763 = reverse(v923);
      var v434 = v763 + "\n\n";
      introspect(JAM.policy.p9) {
        v433.write(v434)
      }
    }else {
      var v435 = outputWindow.document;
      var v764 = addReturns(randomSequence);
      var v436 = v764 + "\n\n";
      introspect(JAM.policy.p9) {
        v435.write(v436)
      }
    }
    return true
  }
  return
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1295 = new Array;
  this.ranges = v1295;
  return
}
new Range(0, 0);
var v439 = Range.prototype;
v439.getSequence = getSequence;
var v440 = Range.prototype;
v440.getTitle = getTitle;
new RangeGroup("", "");
var v441 = RangeGroup.prototype;
v441.addRange = addRange;
var v442 = RangeGroup.prototype;
v442.writeRanges = writeRanges;
document.onload = v10;
introspect(JAM.policy.p9) {
  var v443 = document.getElementById("submitbtn")
}
v443.onclick = v11;
introspect(JAM.policy.p9) {
  var v444 = document.getElementById("clearbtn")
}
v444.onclick = v12;
