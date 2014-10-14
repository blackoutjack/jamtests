function v5() {
  var v680 = document.forms;
  var v571 = v680[0];
  var v341 = v571.elements;
  var v6 = v341[0];
  v6.value = " ";
  var v681 = document.forms;
  var v572 = v681[0];
  var v342 = v572.elements;
  var v7 = v342[4];
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
  var v343 = document.main_form;
  var v9 = v343.main_submit;
  introspect(JAM.policy.p13) {
    v9.focus()
  }
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  introspect(JAM.policy.p13) {
    sequence = sequence.replace(/(.{60})/g, v0)
  }
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v344 = arrayOfSequences.length;
  var v11 = v344 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v345 = arrayOfTitles.length;
  var v13 = i$$1 < v345;
  for(;v13;) {
    var v682 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p13) {
      var v573 = v682.search(/\S/)
    }
    var v346 = v573 == -1;
    var v575 = !v346;
    if(v575) {
      var v759 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p13) {
        var v683 = v759.search(/\S/)
      }
      var v574 = v683 == -1;
      var v685 = !v574;
      if(v685) {
        var v760 = arrayOfSequences[i$$1];
        var v684 = v760.length;
        v574 = v684 != lengthOfAlign
      }
      v346 = v574
    }
    var v12 = v346;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v347 = arrayOfTitles.length;
    v13 = i$$1 < v347
  }
  return true
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p13) {
    var v576 = codonTable.search(/AmAcid/)
  }
  var v348 = v576 == -1;
  var v578 = !v348;
  if(v578) {
    introspect(JAM.policy.p13) {
      var v686 = codonTable.search(/Codon/)
    }
    var v577 = v686 == -1;
    var v688 = !v577;
    if(v688) {
      introspect(JAM.policy.p13) {
        var v761 = codonTable.search(/Number/)
      }
      var v687 = v761 == -1;
      var v763 = !v687;
      if(v763) {
        introspect(JAM.policy.p13) {
          var v819 = codonTable.search(/\/1000/)
        }
        var v762 = v819 == -1;
        var v821 = !v762;
        if(v821) {
          introspect(JAM.policy.p13) {
            var v820 = codonTable.search(/Fraction\s*\.\./)
          }
          v762 = v820 == -1
        }
        v687 = v762
      }
      v577 = v687
    }
    v348 = v577
  }
  var v14 = v348;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v579 = formElement.value;
  introspect(JAM.policy.p13) {
    var v349 = v579.search(/\S/)
  }
  var v15 = v349 == -1;
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
  var v350 = arrayOfPatterns.length;
  var v18 = z$$2 < v350;
  for(;v18;) {
    var v580 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p13) {
      var v351 = v580.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v16 = v351 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v581 = arrayOfPatterns[z$$2];
    var v352 = moreExpressionCheck(v581);
    var v17 = v352 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v353 = arrayOfPatterns.length;
    v18 = z$$2 < v353
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v354 = arrayOfPatterns.length;
  var v27 = j < v354;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    var v689 = arrayOfPatterns[j];
    introspect(JAM.policy.p13) {
      var v582 = v689.match(/\/.+\//)
    }
    var v355 = v582 + "gi";
    var v1168 = eval(v355);
    v21[v22] = v1168;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v583 = arrayOfPatterns[j];
    introspect(JAM.policy.p13) {
      var v356 = v583.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p13) {
      var v1169 = v356.toString()
    }
    v23[v24] = v1169;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v357 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p13) {
      var v1170 = v357.replace(/=/g, "")
    }
    v25[v26] = v1170;
    j = j + 1;
    var v358 = arrayOfPatterns.length;
    v27 = j < v358
  }
  var i$$2 = 0;
  var v584 = testSequence.length;
  var v359 = v584 - 3;
  var v34 = i$$2 <= v359;
  for(;v34;) {
    var v28 = i$$2 + 3;
    introspect(JAM.policy.p13) {
      codon = testSequence.substring(i$$2, v28)
    }
    j = 0;
    var v360 = geneticCodeMatchExp.length;
    var v32 = j < v360;
    for(;v32;) {
      var v585 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p23) {
        var v361 = codon.search(v585)
      }
      var v31 = v361 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v362 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v362 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v363 = geneticCodeMatchExp.length;
      v32 = j < v363
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v586 = testSequence.length;
    var v364 = v586 - 3;
    v34 = i$$2 <= v364
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v365 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v365;
  for(;v36;) {
    var v587 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p13) {
      var v366 = v587.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v35 = v366 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v367 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v367
  }
  var i$$3 = 0;
  var v368 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v368;
  for(;v40;) {
    var v588 = arrayOfPatterns$$1[i$$3];
    var v369 = "[" + v588;
    var v37 = v369 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v370 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v370;
    for(;v39;) {
      var v589 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p23) {
        var v371 = v589.search(re)
      }
      var v38 = v371 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v372 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v372
    }
    i$$3 = i$$3 + 1;
    var v373 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v373
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v374 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v374;
  for(;v43;) {
    var v590 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p13) {
      var v375 = v590.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v41 = v375 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v591 = arrayOfPatterns$$2[z$$4];
    var v376 = moreExpressionCheck(v591);
    var v42 = v376 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v377 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v377
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v690 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p13) {
    var v592 = v690.replace(/[^A-Za-z]/g, "")
  }
  var v378 = v592.length;
  var v45 = v378 > maxInput;
  if(v45) {
    var v379 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v379 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v380 = text$$8.length;
  var v47 = v380 > maxInput$$1;
  if(v47) {
    var v381 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v381 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/g/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/c/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "c")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "g")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/G/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/C/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "C")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "G")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/a/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/t/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "t")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "a")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/A/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/T/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "T")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "A")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/u/g, "a")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/U/g, "A")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/r/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/y/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "y")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "r")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/R/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/Y/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "Y")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "R")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/k/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/m/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "m")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "k")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/K/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/M/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "M")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "K")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/b/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/v/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "v")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "b")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/B/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/V/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "V")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "B")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/d/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/h/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "h")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "d")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/D/g, "1")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/H/g, "2")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/1/g, "H")
  }
  introspect(JAM.policy.p13) {
    dnaSequence = dnaSequence.replace(/2/g, "D")
  }
  return dnaSequence
}
function closeForm() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v48.write("</form>")
  }
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v49.write("</div>")
  }
  var v50 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v50.write("</pre>\n")
  }
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v51.write("</textarea>")
  }
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v52.write("</body>\n</html>\n")
  }
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  introspect(JAM.policy.p13) {
    v53.close()
  }
  return true
}
function convertDegenerates(sequence$$1) {
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.toLowerCase()
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]")
  }
  introspect(JAM.policy.p13) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]")
  }
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v382 = alignArray.length;
  var v54 = v382 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v383 = alignArray.length;
  var v56 = i$$4 < v383;
  for(;v56;) {
    var v593 = alignArray[i$$4];
    introspect(JAM.policy.p13) {
      var v384 = v593.search(/[^\s]+\s/)
    }
    var v55 = v384 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v385 = alignArray.length;
    v56 = i$$4 < v385
  }
  return true
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p13) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "")
  }
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p13) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ")
  }
  introspect(JAM.policy.p13) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "")
  }
  introspect(JAM.policy.p13) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n")
  }
  introspect(JAM.policy.p13) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "")
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p13) {
    var v386 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v59 = v386 != -1;
  if(v59) {
    introspect(JAM.policy.p23) {
      var v58 = matchArray = re$$1.exec(sequenceData)
    }
    for(;v58;) {
      var v57 = matchArray[0];
      introspect(JAM.policy.p23) {
        arrayOfFasta.push(v57)
      }
      introspect(JAM.policy.p23) {
        v58 = matchArray = re$$1.exec(sequenceData)
      }
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v387 = sequence$$2.length;
  var v60 = "&gt;results for " + v387;
  var stringToReturn = v60 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v388 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v62 = v388 != -1;
  if(v62) {
    var v389 = stringToReturn + '"';
    var v61 = v389 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v390 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v391 = sequence$$2.substring(0, 10)
  }
  var v63 = v390 + v391;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v392 = sequenceOne.length;
  var v64 = "Search results for " + v392;
  var stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v393 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v66 = v393 != -1;
  if(v66) {
    var v394 = stringToReturn$$1 + '"';
    var v65 = v394 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v395 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v396 = sequenceOne.substring(0, 10)
  }
  var v67 = v395 + v396;
  stringToReturn$$1 = v67 + '"\n';
  var v397 = stringToReturn$$1 + "and ";
  var v398 = sequenceTwo.length;
  var v68 = v397 + v398;
  stringToReturn$$1 = v68 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v399 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v70 = v399 != -1;
  if(v70) {
    var v400 = stringToReturn$$1 + '"';
    var v69 = v400 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v401 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v402 = sequenceTwo.substring(0, 10)
  }
  var v71 = v401 + v402;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v403 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v403;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    var v691 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p13) {
      var v594 = v691.match(/\/.+\//)
    }
    var v404 = v594 + "gi";
    var v1171 = eval(v404);
    v74[v75] = v1171;
    j$$2 = j$$2 + 1;
    var v405 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v405
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v406 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v406;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v595 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p13) {
      var v407 = v595.match(/=[a-zA-Z\*]/)
    }
    introspect(JAM.policy.p13) {
      var v1172 = v407.toString()
    }
    v78[v79] = v1172;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v408 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p13) {
      var v1173 = v408.replace(/=/g, "")
    }
    v80[v81] = v1173;
    j$$3 = j$$3 + 1;
    var v409 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v409
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v410 = sequence$$3.length;
  var v83 = "Results for " + v410;
  var stringToReturn$$2 = v83 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v411 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v85 = v411 != -1;
  if(v85) {
    var v412 = stringToReturn$$2 + '"';
    var v84 = v412 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v413 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v414 = sequence$$3.substring(0, 10)
  }
  var v86 = v413 + v414;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v596 = "Results for " + topology;
  var v415 = v596 + " ";
  var v416 = sequence$$4.length;
  var v88 = v415 + v416;
  var stringToReturn$$3 = v88 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v417 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v90 = v417 != -1;
  if(v90) {
    var v418 = stringToReturn$$3 + '"';
    var v89 = v418 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v419 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v420 = sequence$$4.substring(0, 10)
  }
  var v91 = v419 + v420;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v421 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v421;
  var stringToReturn$$4 = v93 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v422 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v95 = v422 != -1;
  if(v95) {
    var v423 = stringToReturn$$4 + '"';
    var v94 = v423 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v424 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v425 = sequenceOne$$1.substring(0, 10)
  }
  var v96 = v424 + v425;
  stringToReturn$$4 = v96 + '"\n';
  var v426 = stringToReturn$$4 + "and ";
  var v427 = sequenceTwo$$1.length;
  var v97 = v426 + v427;
  stringToReturn$$4 = v97 + " residue sequence ";
  introspect(JAM.policy.p13) {
    var v428 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v99 = v428 != -1;
  if(v99) {
    var v429 = stringToReturn$$4 + '"';
    var v98 = v429 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v430 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v431 = sequenceTwo$$1.substring(0, 10)
  }
  var v100 = v430 + v431;
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
    introspect(JAM.policy.p13) {
      var v432 = Math.random()
    }
    var v433 = components.length;
    var v102 = v432 * v433;
    introspect(JAM.policy.p13) {
      tempNum = Math.floor(v102)
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p23) {
      sequenceArray.push(tempChar)
    }
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  introspect(JAM.policy.p14) {
    return sequenceArray.join("")
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p13) {
    var v434 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v434 != -1;
  if(v104) {
    introspect(JAM.policy.p13) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p13) {
    var v435 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v106 = v435 != -1;
  if(v106) {
    introspect(JAM.policy.p13) {
      var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    introspect(JAM.policy.p13) {
      fastaTitle = v105.toString()
    }
    introspect(JAM.policy.p13) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "")
    }
    introspect(JAM.policy.p13) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ")
    }
    introspect(JAM.policy.p13) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
    }
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p13) {
    var v597 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v436 = v597 != -1;
  var v599 = !v436;
  if(v599) {
    introspect(JAM.policy.p13) {
      var v692 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    var v598 = v692 != -1;
    var v694 = !v598;
    if(v694) {
      introspect(JAM.policy.p13) {
        var v764 = expressionToCheck.search(/\[\]/)
      }
      var v693 = v764 != -1;
      var v766 = !v693;
      if(v766) {
        introspect(JAM.policy.p13) {
          var v822 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
        }
        var v765 = v822 != -1;
        var v824 = !v765;
        if(v824) {
          introspect(JAM.policy.p13) {
            var v863 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
          }
          var v823 = v863 != -1;
          var v865 = !v823;
          if(v865) {
            introspect(JAM.policy.p13) {
              var v902 = expressionToCheck.search(/\|\|/)
            }
            var v864 = v902 != -1;
            var v904 = !v864;
            if(v904) {
              introspect(JAM.policy.p13) {
                var v934 = expressionToCheck.search(/\/\|/)
              }
              var v903 = v934 != -1;
              var v936 = !v903;
              if(v936) {
                introspect(JAM.policy.p13) {
                  var v960 = expressionToCheck.search(/\|\//)
                }
                var v935 = v960 != -1;
                var v962 = !v935;
                if(v962) {
                  introspect(JAM.policy.p13) {
                    var v986 = expressionToCheck.search(/\[.\]/)
                  }
                  var v961 = v986 != -1;
                  var v988 = !v961;
                  if(v988) {
                    introspect(JAM.policy.p13) {
                      var v1010 = expressionToCheck.search(/\</)
                    }
                    var v987 = v1010 != -1;
                    var v1012 = !v987;
                    if(v1012) {
                      introspect(JAM.policy.p13) {
                        var v1011 = expressionToCheck.search(/\>/)
                      }
                      v987 = v1011 != -1
                    }
                    v961 = v987
                  }
                  v935 = v961
                }
                v903 = v935
              }
              v864 = v903
            }
            v823 = v864
          }
          v765 = v823
        }
        v693 = v765
      }
      v598 = v693
    }
    v436 = v598
  }
  var v107 = v436;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v108.write('<form action="">\n')
  }
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v109.write("<pre>")
  }
  var v110 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v110.write('<div class="pre">')
  }
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v111.write('<br /><textarea rows="6" cols="61">\n')
  }
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  introspect(JAM.policy.p13) {
    outputWindow.focus()
  }
  var v112 = outputWindow.document;
  var v695 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v600 = v695 + "<head>\n";
  var v437 = v600 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v437 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p23) {
    v112.write(v113)
  }
  if(isColor) {
    var v114 = outputWindow.document;
    var v1076 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1055 = v1076 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1034 = v1055 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1013 = v1034 + "div.info {font-weight: bold}\n";
    var v989 = v1013 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v963 = v989 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v937 = v963 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v905 = v937 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v866 = v905 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v825 = v866 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v767 = v825 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v767 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v601 = v696 + "td.many {color: #000000}\n";
    var v438 = v601 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v438 + "</style>\n";
    introspect(JAM.policy.p23) {
      v114.write(v115)
    }
  }else {
    var v116 = outputWindow.document;
    var v1097 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1077 = v1097 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1056 = v1077 + "div.title {display: none}\n";
    var v1035 = v1056 + "div.info {font-weight: bold}\n";
    var v1014 = v1035 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v990 = v1014 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v964 = v990 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v938 = v964 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v906 = v938 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v867 = v906 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v826 = v867 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v768 = v826 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v768 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v697 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v439 = v602 + "img {display: none}\n";
    var v117 = v439 + "</style>\n";
    introspect(JAM.policy.p23) {
      v116.write(v117)
    }
  }
  var v118 = outputWindow.document;
  var v698 = "</head>\n" + '<body class="main">\n';
  var v603 = v698 + '<div class="title">';
  var v440 = v603 + title$$6;
  var v119 = v440 + " results</div>\n";
  introspect(JAM.policy.p23) {
    v118.write(v119)
  }
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400")
  }
  introspect(JAM.policy.p13) {
    outputWindow.focus()
  }
  var v120 = outputWindow.document;
  var v699 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v604 = v699 + "<head>\n";
  var v441 = v604 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v441 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p23) {
    v120.write(v121)
  }
  if(isBackground) {
    var v122 = outputWindow.document;
    var v1078 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1057 = v1078 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1036 = v1057 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1015 = v1036 + "div.info {font-weight: bold}\n";
    var v991 = v1015 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v965 = v991 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v939 = v965 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v907 = v939 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v868 = v907 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v827 = v868 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v769 = v827 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v700 = v769 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v605 = v700 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v442 = v605 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v442 + "</style>\n";
    introspect(JAM.policy.p23) {
      v122.write(v123)
    }
  }else {
    var v124 = outputWindow.document;
    var v1116 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1098 = v1116 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1079 = v1098 + "div.title {display: none}\n";
    var v1058 = v1079 + "div.info {font-weight: bold}\n";
    var v1037 = v1058 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1016 = v1037 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v992 = v1016 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v966 = v992 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v940 = v966 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v908 = v940 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v869 = v908 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v828 = v869 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v770 = v828 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v701 = v770 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v606 = v701 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v443 = v606 + "img {display: none}\n";
    var v125 = v443 + "</style>\n";
    introspect(JAM.policy.p23) {
      v124.write(v125)
    }
  }
  var v126 = outputWindow.document;
  var v702 = "</head>\n" + '<body class="main">\n';
  var v607 = v702 + '<div class="title">';
  var v444 = v607 + title$$8;
  var v127 = v444 + " results</div>\n";
  introspect(JAM.policy.p23) {
    v126.write(v127)
  }
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p13) {
    return sequence$$5.replace(/[\d\s]/g, "")
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p13) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p13) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "")
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p13) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p13) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p13) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p13) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p13) {
    return text$$9.replace(/\s/g, "")
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p13) {
    return sequence$$12.replace(/[^A-Z]/gi, "")
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p13) {
    var v445 = dnaSequence$$1.search(/./)
  }
  var v128 = v445 != -1;
  if(v128) {
    introspect(JAM.policy.p13) {
      tempDnaArray = dnaSequence$$1.match(/./g)
    }
    introspect(JAM.policy.p13) {
      tempDnaArray = tempDnaArray.reverse()
    }
    introspect(JAM.policy.p14) {
      dnaSequence$$1 = tempDnaArray.join("")
    }
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  introspect(JAM.policy.p13) {
    theNumber = theNumber.toString()
  }
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p23) {
    testArray.push(testString)
  }
  var v446 = testArray[0];
  var v132 = v446 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p23) {
    var v447 = testString.search(re$$2)
  }
  var v133 = v447 == -1;
  if(v133) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  introspect(JAM.policy.p13) {
    testString = testString.replace(/(\d)/g, v1)
  }
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p13) {
    var v448 = testNum.toFixed(3)
  }
  var v136 = v448 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  introspect(JAM.policy.p13) {
    var v449 = testNum.toPrecision(5)
  }
  var v137 = v449 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p13) {
    var v450 = theNumber$$1.search(/\d/)
  }
  var v138 = v450 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p13) {
    var v608 = emblFile.search(/ID/)
  }
  var v451 = v608 == -1;
  var v610 = !v451;
  if(v610) {
    introspect(JAM.policy.p13) {
      var v703 = emblFile.search(/AC/)
    }
    var v609 = v703 == -1;
    var v705 = !v609;
    if(v705) {
      introspect(JAM.policy.p13) {
        var v771 = emblFile.search(/DE/)
      }
      var v704 = v771 == -1;
      var v773 = !v704;
      if(v773) {
        introspect(JAM.policy.p13) {
          var v772 = emblFile.search(/SQ/)
        }
        v704 = v772 == -1
      }
      v609 = v704
    }
    v451 = v609
  }
  var v139 = v451;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p13) {
    var v452 = theNumber$$2.search(/\d/)
  }
  var v140 = v452 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v453 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v453 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p13) {
    var v454 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v143 = v454 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p13) {
    var v455 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v144 = v455 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p13) {
    var v611 = genBankFile.search(/LOCUS/)
  }
  var v456 = v611 == -1;
  var v613 = !v456;
  if(v613) {
    introspect(JAM.policy.p13) {
      var v706 = genBankFile.search(/DEFINITION/)
    }
    var v612 = v706 == -1;
    var v708 = !v612;
    if(v708) {
      introspect(JAM.policy.p13) {
        var v774 = genBankFile.search(/ACCESSION/)
      }
      var v707 = v774 == -1;
      var v776 = !v707;
      if(v776) {
        introspect(JAM.policy.p13) {
          var v775 = genBankFile.search(/ORIGIN/)
        }
        v707 = v775 == -1
      }
      v612 = v707
    }
    v456 = v612
  }
  var v145 = v456;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p13) {
    var v614 = genBankFile$$1.search(/LOCUS/)
  }
  var v457 = v614 == -1;
  var v616 = !v457;
  if(v616) {
    introspect(JAM.policy.p13) {
      var v709 = genBankFile$$1.search(/DEFINITION/)
    }
    var v615 = v709 == -1;
    var v711 = !v615;
    if(v711) {
      introspect(JAM.policy.p13) {
        var v777 = genBankFile$$1.search(/ACCESSION/)
      }
      var v710 = v777 == -1;
      var v779 = !v710;
      if(v779) {
        introspect(JAM.policy.p13) {
          var v778 = genBankFile$$1.search(/ORIGIN/)
        }
        v710 = v778 == -1
      }
      v615 = v710
    }
    v457 = v615
  }
  var v146 = v457;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  introspect(JAM.policy.p13) {
    var v458 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v147 = v458 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p13) {
    var v617 = emblFile$$1.search(/ID/)
  }
  var v459 = v617 == -1;
  var v619 = !v459;
  if(v619) {
    introspect(JAM.policy.p13) {
      var v712 = emblFile$$1.search(/AC/)
    }
    var v618 = v712 == -1;
    var v714 = !v618;
    if(v714) {
      introspect(JAM.policy.p13) {
        var v780 = emblFile$$1.search(/DE/)
      }
      var v713 = v780 == -1;
      var v782 = !v713;
      if(v782) {
        introspect(JAM.policy.p13) {
          var v781 = emblFile$$1.search(/SQ/)
        }
        v713 = v781 == -1
      }
      v618 = v713
    }
    v459 = v618
  }
  var v148 = v459;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  introspect(JAM.policy.p13) {
    var v460 = emblFile$$1.search(/^FT/m)
  }
  var v149 = v460 == -1;
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
  var v157 = i$$5 < stopBase;
  for(;v157;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v461 = basePerLine / groupSize;
    var v154 = j$$6 <= v461;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        var v151 = lineOfText;
        var v462 = k + i$$5;
        introspect(JAM.policy.p23) {
          var v152 = text$$10.charAt(v462)
        }
        lineOfText = v151 + v152;
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v463 = basePerLine / groupSize;
      v154 = j$$6 <= v463
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    introspect(JAM.policy.p23) {
      v155.write(v156)
    }
    lineOfText = "";
    v157 = i$$5 < stopBase
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
    var v464 = adjustment < 0;
    if(v464) {
      v464 = adjusted >= 0
    }
    var v158 = v464;
    if(v158) {
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
  var v191 = i$$6 < stopBase$$2;
  for(;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v465 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v465;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v466 = i$$6 + k$$1;
        var v159 = v466 >= stopBase$$2;
        if(v159) {
          break
        }
        var v160 = lineOfText$$1;
        var v467 = k$$1 + i$$6;
        introspect(JAM.policy.p23) {
          var v161 = text$$12.charAt(v467)
        }
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if(v165) {
        var v163 = aboveNum;
        var v468 = adjustNumbering(i$$6, numberingAdjustment);
        var v164 = rightNum(v468, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164
      }
      var v166 = i$$6 >= stopBase$$2;
      if(v166) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v469 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v469
    }
    var v190 = numberPosition$$1 == "left";
    if(v190) {
      var v168 = outputWindow.document;
      var v715 = adjustNumbering(lineNum, numberingAdjustment);
      var v620 = rightNum(v715, "", 8, tabIn$$3);
      var v470 = v620 + lineOfText$$1;
      var v169 = v470 + "\n";
      introspect(JAM.policy.p23) {
        v168.write(v169)
      }
      var v173 = strands$$1 == "two";
      if(v173) {
        var v170 = outputWindow.document;
        var v716 = adjustNumbering(lineNum, numberingAdjustment);
        var v621 = rightNum(v716, "", 8, tabIn$$3);
        var v622 = complement(lineOfText$$1);
        var v471 = v621 + v622;
        var v171 = v471 + "\n";
        introspect(JAM.policy.p23) {
          v170.write(v171)
        }
        var v172 = outputWindow.document;
        introspect(JAM.policy.p14) {
          v172.write("\n")
        }
      }
    }else {
      var v189 = numberPosition$$1 == "right";
      if(v189) {
        var v174 = outputWindow.document;
        var v623 = lineOfText$$1;
        var v624 = adjustNumbering(i$$6, numberingAdjustment);
        var v472 = v623 + v624;
        var v175 = v472 + "\n";
        introspect(JAM.policy.p23) {
          v174.write(v175)
        }
        var v179 = strands$$1 == "two";
        if(v179) {
          var v176 = outputWindow.document;
          var v625 = complement(lineOfText$$1);
          var v626 = adjustNumbering(i$$6, numberingAdjustment);
          var v473 = v625 + v626;
          var v177 = v473 + "\n";
          introspect(JAM.policy.p23) {
            v176.write(v177)
          }
          var v178 = outputWindow.document;
          introspect(JAM.policy.p14) {
            v178.write("\n")
          }
        }
      }else {
        var v188 = numberPosition$$1 == "above";
        if(v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          introspect(JAM.policy.p23) {
            v180.write(v181)
          }
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p23) {
            v182.write(v183)
          }
          var v187 = strands$$1 == "two";
          if(v187) {
            var v184 = outputWindow.document;
            var v474 = complement(lineOfText$$1);
            var v185 = v474 + "\n";
            introspect(JAM.policy.p23) {
              v184.write(v185)
            }
            var v186 = outputWindow.document;
            introspect(JAM.policy.p14) {
              v186.write("\n")
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2
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
  var v212 = i$$7 < stopBase$$3;
  for(;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v475 = basePerLine$$3 / groupSize$$3;
    var v200 = j$$8 <= v475;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        var v476 = i$$7 + k$$2;
        var v192 = v476 >= stopBase$$3;
        if(v192) {
          break
        }
        var v193 = lineOfText$$2;
        var v477 = k$$2 + i$$7;
        introspect(JAM.policy.p23) {
          var v194 = text$$13.charAt(v477)
        }
        lineOfText$$2 = v193 + v194;
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v198 = numberPosition$$2 == "above";
      if(v198) {
        var v196 = aboveNum$$1;
        var v197 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v196 + v197
      }
      var v199 = i$$7 >= stopBase$$3;
      if(v199) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v478 = basePerLine$$3 / groupSize$$3;
      v200 = j$$8 <= v478
    }
    var v211 = numberPosition$$2 == "left";
    if(v211) {
      var v201 = outputWindow.document;
      var v627 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v479 = v627 + lineOfText$$2;
      var v202 = v479 + "\n";
      introspect(JAM.policy.p23) {
        v201.write(v202)
      }
    }else {
      var v210 = numberPosition$$2 == "right";
      if(v210) {
        var v203 = outputWindow.document;
        var v480 = lineOfText$$2 + i$$7;
        var v204 = v480 + "\n";
        introspect(JAM.policy.p23) {
          v203.write(v204)
        }
      }else {
        var v209 = numberPosition$$2 == "above";
        if(v209) {
          var v205 = outputWindow.document;
          var v206 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p23) {
            v205.write(v206)
          }
          var v207 = outputWindow.document;
          var v208 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p23) {
            v207.write(v208)
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3
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
  var v628 = sequence$$13.length;
  var v481 = v628 <= firstIndexToMutate;
  var v630 = !v481;
  if(v630) {
    var v629 = lastIndexToMutate < 0;
    var v717 = !v629;
    if(v717) {
      v629 = lastIndexToMutate <= firstIndexToMutate
    }
    v481 = v629
  }
  var v213 = v481;
  if(v213) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    introspect(JAM.policy.p13) {
      var v482 = Math.random()
    }
    var v214 = v482 * maxNum;
    introspect(JAM.policy.p13) {
      randNum = Math.floor(v214)
    }
    var v483 = randNum < firstIndexToMutate;
    var v631 = !v483;
    if(v631) {
      v483 = randNum > lastIndexToMutate
    }
    var v215 = v483;
    if(v215) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue
    }
    introspect(JAM.policy.p13) {
      currentChar = sequence$$13.charAt(randNum)
    }
    needNewChar = true;
    for(;needNewChar;) {
      introspect(JAM.policy.p13) {
        var v484 = Math.random()
      }
      var v485 = components$$1.length;
      var v216 = v484 * v485;
      introspect(JAM.policy.p13) {
        componentsIndex = Math.round(v216)
      }
      var v486 = components$$1.length;
      var v217 = componentsIndex == v486;
      if(v217) {
        componentsIndex = 0
      }
      var v487 = components$$1[componentsIndex];
      var v218 = v487 != currentChar;
      if(v218) {
        needNewChar = false
      }
    }
    introspect(JAM.policy.p13) {
      var v488 = sequence$$13.substring(0, randNum)
    }
    var v489 = components$$1[componentsIndex];
    var v219 = v488 + v489;
    var v490 = randNum + 1;
    var v491 = sequence$$13.length;
    introspect(JAM.policy.p24) {
      var v220 = sequence$$13.substring(v490, v491)
    }
    sequence$$13 = v219 + v220;
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  var v223 = addReturns(sequence$$13);
  introspect(JAM.policy.p23) {
    v222.write(v223)
  }
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    introspect(JAM.policy.p13) {
      var v492 = Math.random()
    }
    var v493 = components$$2.length;
    var v224 = v492 * v493;
    introspect(JAM.policy.p13) {
      tempNum$$1 = Math.floor(v224)
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v494 = sequence$$14.length;
    var v227 = v494 == 60;
    if(v227) {
      var v225 = outputWindow.document;
      var v226 = sequence$$14 + "\n";
      introspect(JAM.policy.p23) {
        v225.write(v226)
      }
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  var v230 = sequence$$14 + "\n";
  introspect(JAM.policy.p23) {
    v229.write(v230)
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
  var v234 = dnaConformation == "circular";
  if(v234) {
    introspect(JAM.policy.p13) {
      var v231 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v231.length;
    var v718 = sequence$$15.length;
    var v632 = v718 - lookAhead;
    var v633 = sequence$$15.length;
    introspect(JAM.policy.p24) {
      var v495 = sequence$$15.substring(v632, v633)
    }
    var v232 = v495 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v233 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v232 + v233;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v235 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v235.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n')
  }
  var v236 = outputWindow.document;
  var v719 = '<tr><td class="title" width="200px">' + "Site:";
  var v634 = v719 + '</td><td class="title">';
  var v496 = v634 + "Positions:";
  var v237 = v496 + "</td></tr>\n";
  introspect(JAM.policy.p23) {
    v236.write(v237)
  }
  var i$$9 = 0;
  var v497 = arrayOfItems.length;
  var v253 = i$$9 < v497;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v498 = arrayOfItems[i$$9];
    introspect(JAM.policy.p13) {
      var v238 = v498.match(/\/.+\//)
    }
    matchExp = v238 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v720 = arrayOfItems[i$$9];
    introspect(JAM.policy.p13) {
      var v635 = v720.match(/\)\D*\d+/)
    }
    introspect(JAM.policy.p13) {
      var v499 = v635.toString()
    }
    introspect(JAM.policy.p13) {
      var v239 = v499.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v239);
    introspect(JAM.policy.p23) {
      var v245 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for(;v245;) {
      var v240 = matchExp.lastIndex;
      matchPosition = v240 - cutDistance;
      var v500 = matchPosition >= lowerLimit;
      if(v500) {
        v500 = matchPosition < upperLimit
      }
      var v243 = v500;
      if(v243) {
        timesFound = timesFound + 1;
        var v241 = tempString$$1 + ", ";
        var v501 = matchPosition - shiftValue;
        var v242 = v501 + 1;
        tempString$$1 = v241 + v242
      }
      var v502 = matchExp.lastIndex;
      var v636 = RegExp.lastMatch;
      var v503 = v636.length;
      var v244 = v502 - v503;
      matchExp.lastIndex = v244 + 1;
      introspect(JAM.policy.p23) {
        v245 = matchArray$$1 = matchExp.exec(sequence$$15)
      }
    }
    introspect(JAM.policy.p13) {
      var v504 = tempString$$1.search(/\d/)
    }
    var v246 = v504 != -1;
    if(v246) {
      introspect(JAM.policy.p13) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "")
      }
    }
    var v250 = timesFound == 0;
    if(v250) {
      backGroundClass = "none"
    }else {
      var v249 = timesFound == 1;
      if(v249) {
        backGroundClass = "one"
      }else {
        var v248 = timesFound == 2;
        if(v248) {
          backGroundClass = "two"
        }else {
          var v247 = timesFound == 3;
          if(v247) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v251 = outputWindow.document;
    var v909 = '<tr><td class="' + backGroundClass;
    var v870 = v909 + '">';
    var v967 = arrayOfItems[i$$9];
    introspect(JAM.policy.p13) {
      var v941 = v967.match(/\([^\(]+\)/)
    }
    introspect(JAM.policy.p13) {
      var v910 = v941.toString()
    }
    introspect(JAM.policy.p13) {
      var v871 = v910.replace(/\(|\)/g, "")
    }
    var v829 = v870 + v871;
    var v783 = v829 + '</td><td class="';
    var v721 = v783 + backGroundClass;
    var v637 = v721 + '">';
    var v505 = v637 + tempString$$1;
    var v252 = v505 + "</td></tr>\n";
    introspect(JAM.policy.p23) {
      v251.write(v252)
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v506 = arrayOfItems.length;
    v253 = i$$9 < v506
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v254.write("</tbody></table>\n")
  }
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v255.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n')
  }
  var v256 = outputWindow.document;
  var v830 = '<tr><td class="title">' + "Pattern:";
  var v784 = v830 + '</td><td class="title">';
  var v722 = v784 + "Times found:";
  var v638 = v722 + '</td><td class="title">';
  var v507 = v638 + "Percentage:";
  var v257 = v507 + "</td></tr>\n";
  introspect(JAM.policy.p23) {
    v256.write(v257)
  }
  var i$$10 = 0;
  var v508 = arrayOfItems$$1.length;
  var v266 = i$$10 < v508;
  for(;v266;) {
    var tempNumber = 0;
    var v509 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p13) {
      var v258 = v509.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v258 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p23) {
      var v510 = sequence$$16.search(matchExp$$1)
    }
    var v260 = v510 != -1;
    if(v260) {
      introspect(JAM.policy.p23) {
        var v259 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v259.length
    }
    var percentage = 0;
    var v639 = originalLength + 1;
    var v785 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p13) {
      var v723 = v785.match(/\d+/)
    }
    var v640 = parseFloat(v723);
    var v511 = v639 - v640;
    var v263 = v511 > 0;
    if(v263) {
      var v261 = 100 * tempNumber;
      var v512 = originalLength + 1;
      var v724 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p13) {
        var v641 = v724.match(/\d+/)
      }
      var v513 = parseFloat(v641);
      var v262 = v512 - v513;
      percentage = v261 / v262
    }
    var v264 = outputWindow.document;
    var v968 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p13) {
      var v942 = v968.match(/\([^\(]+\)\b/)
    }
    introspect(JAM.policy.p13) {
      var v911 = v942.toString()
    }
    introspect(JAM.policy.p13) {
      var v872 = v911.replace(/\(|\)/g, "")
    }
    var v831 = "<tr><td>" + v872;
    var v786 = v831 + "</td><td>";
    var v725 = v786 + tempNumber;
    var v642 = v725 + "</td><td>";
    introspect(JAM.policy.p13) {
      var v643 = percentage.toFixed(2)
    }
    var v514 = v642 + v643;
    var v265 = v514 + "</td></tr>\n";
    introspect(JAM.policy.p23) {
      v264.write(v265)
    }
    i$$10 = i$$10 + 1;
    var v515 = arrayOfItems$$1.length;
    v266 = i$$10 < v515
  }
  var v267 = outputWindow.document;
  introspect(JAM.policy.p14) {
    v267.write("</tbody></table>\n")
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
  var v516 = sequence$$17.length;
  var v274 = v516 > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    introspect(JAM.policy.p13) {
      var v517 = Math.random()
    }
    var v268 = v517 * maxNum$$1;
    introspect(JAM.policy.p13) {
      randNum$$1 = Math.floor(v268)
    }
    introspect(JAM.policy.p13) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1)
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1)
    }
    var v269 = randNum$$1 + 1;
    var v270 = sequence$$17.length;
    introspect(JAM.policy.p13) {
      tempString2 = sequence$$17.substring(v269, v270)
    }
    sequence$$17 = tempString1 + tempString2;
    var v518 = tempSeq.length;
    var v273 = v518 == 60;
    if(v273) {
      var v271 = outputWindow.document;
      var v272 = tempSeq + "\n";
      introspect(JAM.policy.p23) {
        v271.write(v272)
      }
      tempSeq = ""
    }
    var v519 = sequence$$17.length;
    v274 = v519 > 0
  }
  var v275 = outputWindow.document;
  var v276 = tempSeq + "\n";
  introspect(JAM.policy.p23) {
    v275.write(v276)
  }
  return true
}
function getGeneticCodeString(type$$25) {
  introspect(JAM.policy.p13) {
    var v644 = type$$25.toLowerCase()
  }
  var v520 = v644 == "standard";
  var v646 = !v520;
  if(v646) {
    introspect(JAM.policy.p13) {
      var v645 = type$$25.toLowerCase()
    }
    v520 = v645 == "transl_table=1"
  }
  var v278 = v520;
  if(v278) {
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
    var v873 = v912 + "/ca[agr]/=Q,";
    var v832 = v873 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v787 = v832 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v726 = v787 + "/ac[acgturyswkmbdhvn]/=T,";
    var v647 = v726 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v521 = v647 + "/[tu]gg/=W,";
    var v277 = v521 + "/[tu]a[ctuy]/=Y,";
    return v277 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v522 = type$$25.toLowerCase()
  }
  var v280 = v522 == "transl_table=2";
  if(v280) {
    var v1152 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1135 = v1152 + "/ga[tcuy]/=D,";
    var v1118 = v1135 + "/ga[agr]/=E,";
    var v1100 = v1118 + "/[tu][tu][tcuy]/=F,";
    var v1081 = v1100 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1060 = v1081 + "/ca[tcuy]/=H,";
    var v1039 = v1060 + "/a[tu][tcuy]/=I,";
    var v1018 = v1039 + "/aa[agr]/=K,";
    var v994 = v1018 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v970 = v994 + "/a[tu][agr]/=M,";
    var v944 = v970 + "/aa[tucy]/=N,";
    var v913 = v944 + "/cc[acgturyswkmbdhvn]/=P,";
    var v874 = v913 + "/ca[agr]/=Q,";
    var v833 = v874 + "/cg[acgturyswkmbdhvn]/=R,";
    var v788 = v833 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v727 = v788 + "/ac[acgturyswkmbdhvn]/=T,";
    var v648 = v727 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v523 = v648 + "/[tu]g[agr]/=W,";
    var v279 = v523 + "/[tu]a[ctuy]/=Y,";
    return v279 + "/[tu]a[agr]|ag[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v524 = type$$25.toLowerCase()
  }
  var v282 = v524 == "transl_table=3";
  if(v282) {
    var v1153 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1136 = v1153 + "/ga[tcuy]/=D,";
    var v1119 = v1136 + "/ga[agr]/=E,";
    var v1101 = v1119 + "/[tu][tu][tcuy]/=F,";
    var v1082 = v1101 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1061 = v1082 + "/ca[tcuy]/=H,";
    var v1040 = v1061 + "/a[tu][tcuy]/=I,";
    var v1019 = v1040 + "/aa[agr]/=K,";
    var v995 = v1019 + "/[tu][tu][agr]/=L,";
    var v971 = v995 + "/a[tu][agr]/=M,";
    var v945 = v971 + "/aa[tucy]/=N,";
    var v914 = v945 + "/cc[acgturyswkmbdhvn]/=P,";
    var v875 = v914 + "/ca[agr]/=Q,";
    var v834 = v875 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v789 = v834 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v728 = v789 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v649 = v728 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v525 = v649 + "/[tu]g[agr]/=W,";
    var v281 = v525 + "/[tu]a[ctuy]/=Y,";
    return v281 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v526 = type$$25.toLowerCase()
  }
  var v284 = v526 == "transl_table=4";
  if(v284) {
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
    var v650 = v729 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v527 = v650 + "/[tu]g[agr]/=W,";
    var v283 = v527 + "/[tu]a[ctuy]/=Y,";
    return v283 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v528 = type$$25.toLowerCase()
  }
  var v286 = v528 == "transl_table=5";
  if(v286) {
    var v1155 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1138 = v1155 + "/ga[tcuy]/=D,";
    var v1121 = v1138 + "/ga[agr]/=E,";
    var v1103 = v1121 + "/[tu][tu][tcuy]/=F,";
    var v1084 = v1103 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1063 = v1084 + "/ca[tcuy]/=H,";
    var v1042 = v1063 + "/a[tu][tcuy]/=I,";
    var v1021 = v1042 + "/aa[agr]/=K,";
    var v997 = v1021 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v973 = v997 + "/a[tu][agr]/=M,";
    var v947 = v973 + "/aa[tucy]/=N,";
    var v916 = v947 + "/cc[acgturyswkmbdhvn]/=P,";
    var v877 = v916 + "/ca[agr]/=Q,";
    var v836 = v877 + "/cg[acgturyswkmbdhvn]/=R,";
    var v791 = v836 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v730 = v791 + "/ac[acgturyswkmbdhvn]/=T,";
    var v651 = v730 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v529 = v651 + "/[tu]g[agr]/=W,";
    var v285 = v529 + "/[tu]a[ctuy]/=Y,";
    return v285 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v530 = type$$25.toLowerCase()
  }
  var v288 = v530 == "transl_table=6";
  if(v288) {
    var v1156 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1139 = v1156 + "/ga[tcuy]/=D,";
    var v1122 = v1139 + "/ga[agr]/=E,";
    var v1104 = v1122 + "/[tu][tu][tcuy]/=F,";
    var v1085 = v1104 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1064 = v1085 + "/ca[tcuy]/=H,";
    var v1043 = v1064 + "/a[tu][atcuwmhy]/=I,";
    var v1022 = v1043 + "/aa[agr]/=K,";
    var v998 = v1022 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v974 = v998 + "/a[tu]g/=M,";
    var v948 = v974 + "/aa[tucy]/=N,";
    var v917 = v948 + "/cc[acgturyswkmbdhvn]/=P,";
    var v878 = v917 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v837 = v878 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v792 = v837 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v731 = v792 + "/ac[acgturyswkmbdhvn]/=T,";
    var v652 = v731 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v531 = v652 + "/[tu]gg/=W,";
    var v287 = v531 + "/[tu]a[ctuy]/=Y,";
    return v287 + "/[tu]ga/=*"
  }
  introspect(JAM.policy.p13) {
    var v532 = type$$25.toLowerCase()
  }
  var v290 = v532 == "transl_table=9";
  if(v290) {
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
    var v653 = v732 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v533 = v653 + "/[tu]g[agr]/=W,";
    var v289 = v533 + "/[tu]a[ctuy]/=Y,";
    return v289 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v534 = type$$25.toLowerCase()
  }
  var v292 = v534 == "transl_table=10";
  if(v292) {
    var v1158 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
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
    var v880 = v919 + "/ca[agr]/=Q,";
    var v839 = v880 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v794 = v839 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v733 = v794 + "/ac[acgturyswkmbdhvn]/=T,";
    var v654 = v733 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v535 = v654 + "/[tu]gg/=W,";
    var v291 = v535 + "/[tu]a[ctuy]/=Y,";
    return v291 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v536 = type$$25.toLowerCase()
  }
  var v294 = v536 == "transl_table=11";
  if(v294) {
    var v1159 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1142 = v1159 + "/ga[tcuy]/=D,";
    var v1125 = v1142 + "/ga[agr]/=E,";
    var v1107 = v1125 + "/[tu][tu][tcuy]/=F,";
    var v1088 = v1107 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1067 = v1088 + "/ca[tcuy]/=H,";
    var v1046 = v1067 + "/a[tu][atcuwmhy]/=I,";
    var v1025 = v1046 + "/aa[agr]/=K,";
    var v1001 = v1025 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v977 = v1001 + "/a[tu]g/=M,";
    var v951 = v977 + "/aa[tucy]/=N,";
    var v920 = v951 + "/cc[acgturyswkmbdhvn]/=P,";
    var v881 = v920 + "/ca[agr]/=Q,";
    var v840 = v881 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v795 = v840 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v734 = v795 + "/ac[acgturyswkmbdhvn]/=T,";
    var v655 = v734 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v537 = v655 + "/[tu]gg/=W,";
    var v293 = v537 + "/[tu]a[ctuy]/=Y,";
    return v293 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v538 = type$$25.toLowerCase()
  }
  var v296 = v538 == "transl_table=12";
  if(v296) {
    var v1160 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1143 = v1160 + "/ga[tcuy]/=D,";
    var v1126 = v1143 + "/ga[agr]/=E,";
    var v1108 = v1126 + "/[tu][tu][tcuy]/=F,";
    var v1089 = v1108 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1068 = v1089 + "/ca[tcuy]/=H,";
    var v1047 = v1068 + "/a[tu][atcuwmhy]/=I,";
    var v1026 = v1047 + "/aa[agr]/=K,";
    var v1002 = v1026 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v978 = v1002 + "/a[tu]g/=M,";
    var v952 = v978 + "/aa[tucy]/=N,";
    var v921 = v952 + "/cc[acgturyswkmbdhvn]/=P,";
    var v882 = v921 + "/ca[agr]/=Q,";
    var v841 = v882 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v796 = v841 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v735 = v796 + "/ac[acgturyswkmbdhvn]/=T,";
    var v656 = v735 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v539 = v656 + "/[tu]gg/=W,";
    var v295 = v539 + "/[tu]a[ctuy]/=Y,";
    return v295 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v540 = type$$25.toLowerCase()
  }
  var v298 = v540 == "transl_table=13";
  if(v298) {
    var v1161 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1144 = v1161 + "/ga[tcuy]/=D,";
    var v1127 = v1144 + "/ga[agr]/=E,";
    var v1109 = v1127 + "/[tu][tu][tcuy]/=F,";
    var v1090 = v1109 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1069 = v1090 + "/ca[tcuy]/=H,";
    var v1048 = v1069 + "/a[tu][tcuy]/=I,";
    var v1027 = v1048 + "/aa[agr]/=K,";
    var v1003 = v1027 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v979 = v1003 + "/a[tu][agr]/=M,";
    var v953 = v979 + "/aa[tucy]/=N,";
    var v922 = v953 + "/cc[acgturyswkmbdhvn]/=P,";
    var v883 = v922 + "/ca[agr]/=Q,";
    var v842 = v883 + "/cg[acgturyswkmbdhvn]/=R,";
    var v797 = v842 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v736 = v797 + "/ac[acgturyswkmbdhvn]/=T,";
    var v657 = v736 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v541 = v657 + "/[tu]g[agr]/=W,";
    var v297 = v541 + "/[tu]a[ctuy]/=Y,";
    return v297 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v542 = type$$25.toLowerCase()
  }
  var v300 = v542 == "transl_table=14";
  if(v300) {
    var v1162 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1145 = v1162 + "/ga[tcuy]/=D,";
    var v1128 = v1145 + "/ga[agr]/=E,";
    var v1110 = v1128 + "/[tu][tu][tcuy]/=F,";
    var v1091 = v1110 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1070 = v1091 + "/ca[tcuy]/=H,";
    var v1049 = v1070 + "/a[tu][atcuwmhy]/=I,";
    var v1028 = v1049 + "/aag/=K,";
    var v1004 = v1028 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v980 = v1004 + "/a[tu]g/=M,";
    var v954 = v980 + "/aa[atcuwmhy]/=N,";
    var v923 = v954 + "/cc[acgturyswkmbdhvn]/=P,";
    var v884 = v923 + "/ca[agr]/=Q,";
    var v843 = v884 + "/cg[acgturyswkmbdhvn]/=R,";
    var v798 = v843 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v737 = v798 + "/ac[acgturyswkmbdhvn]/=T,";
    var v658 = v737 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v543 = v658 + "/[tu]g[agr]/=W,";
    var v299 = v543 + "/[tu]a[atcuwmhy]/=Y,";
    return v299 + "/[tu]ag/=*"
  }
  introspect(JAM.policy.p13) {
    var v544 = type$$25.toLowerCase()
  }
  var v302 = v544 == "transl_table=15";
  if(v302) {
    var v1163 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1146 = v1163 + "/ga[tcuy]/=D,";
    var v1129 = v1146 + "/ga[agr]/=E,";
    var v1111 = v1129 + "/[tu][tu][tcuy]/=F,";
    var v1092 = v1111 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1071 = v1092 + "/ca[tcuy]/=H,";
    var v1050 = v1071 + "/a[tu][atcuwmhy]/=I,";
    var v1029 = v1050 + "/aa[agr]/=K,";
    var v1005 = v1029 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v981 = v1005 + "/a[tu]g/=M,";
    var v955 = v981 + "/aa[tucy]/=N,";
    var v924 = v955 + "/cc[acgturyswkmbdhvn]/=P,";
    var v885 = v924 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v844 = v885 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v799 = v844 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v738 = v799 + "/ac[acgturyswkmbdhvn]/=T,";
    var v659 = v738 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v545 = v659 + "/[tu]gg/=W,";
    var v301 = v545 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu][agr]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v546 = type$$25.toLowerCase()
  }
  var v304 = v546 == "transl_table=16";
  if(v304) {
    var v1164 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1147 = v1164 + "/ga[tcuy]/=D,";
    var v1130 = v1147 + "/ga[agr]/=E,";
    var v1112 = v1130 + "/[tu][tu][tcuy]/=F,";
    var v1093 = v1112 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1072 = v1093 + "/ca[tcuy]/=H,";
    var v1051 = v1072 + "/a[tu][atcuwmhy]/=I,";
    var v1030 = v1051 + "/aa[agr]/=K,";
    var v1006 = v1030 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v982 = v1006 + "/a[tu]g/=M,";
    var v956 = v982 + "/aa[tucy]/=N,";
    var v925 = v956 + "/cc[acgturyswkmbdhvn]/=P,";
    var v886 = v925 + "/ca[agr]/=Q,";
    var v845 = v886 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v800 = v845 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v739 = v800 + "/ac[acgturyswkmbdhvn]/=T,";
    var v660 = v739 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v547 = v660 + "/[tu]gg/=W,";
    var v303 = v547 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu][agr]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v548 = type$$25.toLowerCase()
  }
  var v306 = v548 == "transl_table=21";
  if(v306) {
    var v1165 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1148 = v1165 + "/ga[tcuy]/=D,";
    var v1131 = v1148 + "/ga[agr]/=E,";
    var v1113 = v1131 + "/[tu][tu][tcuy]/=F,";
    var v1094 = v1113 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1073 = v1094 + "/ca[tcuy]/=H,";
    var v1052 = v1073 + "/a[tu][tcuy]/=I,";
    var v1031 = v1052 + "/aag/=K,";
    var v1007 = v1031 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v983 = v1007 + "/a[tu][agr]/=M,";
    var v957 = v983 + "/aa[atcuwmhy]/=N,";
    var v926 = v957 + "/cc[acgturyswkmbdhvn]/=P,";
    var v887 = v926 + "/ca[agr]/=Q,";
    var v846 = v887 + "/cg[acgturyswkmbdhvn]/=R,";
    var v801 = v846 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v740 = v801 + "/ac[acgturyswkmbdhvn]/=T,";
    var v661 = v740 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v549 = v661 + "/[tu]g[agr]/=W,";
    var v305 = v549 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]/=*"
  }
  introspect(JAM.policy.p13) {
    var v550 = type$$25.toLowerCase()
  }
  var v308 = v550 == "transl_table=22";
  if(v308) {
    var v1166 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1149 = v1166 + "/ga[tcuy]/=D,";
    var v1132 = v1149 + "/ga[agr]/=E,";
    var v1114 = v1132 + "/[tu][tu][tcuy]/=F,";
    var v1095 = v1114 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1074 = v1095 + "/ca[tcuy]/=H,";
    var v1053 = v1074 + "/a[tu][atcuwmhy]/=I,";
    var v1032 = v1053 + "/aa[agr]/=K,";
    var v1008 = v1032 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v984 = v1008 + "/a[tu]g/=M,";
    var v958 = v984 + "/aa[tucy]/=N,";
    var v927 = v958 + "/cc[acgturyswkmbdhvn]/=P,";
    var v888 = v927 + "/ca[agr]/=Q,";
    var v847 = v888 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v802 = v847 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v741 = v802 + "/ac[acgturyswkmbdhvn]/=T,";
    var v662 = v741 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v551 = v662 + "/[tu]gg/=W,";
    var v307 = v551 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu][agcrsmv]a/=*"
  }
  introspect(JAM.policy.p13) {
    var v552 = type$$25.toLowerCase()
  }
  var v310 = v552 == "transl_table=23";
  if(v310) {
    var v1167 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1150 = v1167 + "/ga[tcuy]/=D,";
    var v1133 = v1150 + "/ga[agr]/=E,";
    var v1115 = v1133 + "/[tu][tu][tcuy]/=F,";
    var v1096 = v1115 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1075 = v1096 + "/ca[tcuy]/=H,";
    var v1054 = v1075 + "/a[tu][atcuwmhy]/=I,";
    var v1033 = v1054 + "/aa[agr]/=K,";
    var v1009 = v1033 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v985 = v1009 + "/a[tu]g/=M,";
    var v959 = v985 + "/aa[tucy]/=N,";
    var v928 = v959 + "/cc[acgturyswkmbdhvn]/=P,";
    var v889 = v928 + "/ca[agr]/=Q,";
    var v848 = v889 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v803 = v848 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v742 = v803 + "/ac[acgturyswkmbdhvn]/=T,";
    var v663 = v742 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v553 = v663 + "/[tu]gg/=W,";
    var v309 = v553 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function translateDna(theDocument) {
  translate(theDocument);
  return true
}
function translate(theDocument$$1) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v554 = testScript();
  var v311 = v554 == false;
  if(v311) {
    return false
  }
  var v890 = theDocument$$1.forms;
  var v849 = v890[0];
  var v804 = v849.elements;
  var v743 = v804[6];
  var v664 = v743.options;
  var v891 = theDocument$$1.forms;
  var v850 = v891[0];
  var v805 = v850.elements;
  var v744 = v805[6];
  var v665 = v744.selectedIndex;
  var v555 = v664[v665];
  var v312 = v555.value;
  var geneticCode = getGeneticCodeString(v312);
  var v892 = theDocument$$1.forms;
  var v851 = v892[0];
  var v806 = v851.elements;
  var v745 = v806[0];
  var v666 = checkFormElement(v745);
  var v556 = v666 == false;
  var v668 = !v556;
  if(v668) {
    var v929 = theDocument$$1.forms;
    var v893 = v929[0];
    var v852 = v893.elements;
    var v807 = v852[0];
    var v746 = v807.value;
    var v667 = checkSequenceLength(v746, maxInput$$3);
    v556 = v667 == false
  }
  var v313 = v556;
  if(v313) {
    return false
  }
  introspect(JAM.policy.p13) {
    geneticCode = geneticCode.split(/,/)
  }
  var v557 = checkGeneticCode(geneticCode);
  var v314 = v557 == false;
  if(v314) {
    return false
  }
  var v853 = theDocument$$1.forms;
  var v808 = v853[0];
  var v747 = v808.elements;
  var v669 = v747[4];
  var v558 = v669.options;
  var v854 = theDocument$$1.forms;
  var v809 = v854[0];
  var v748 = v809.elements;
  var v670 = v748[4];
  var v559 = v670.selectedIndex;
  var v315 = v558[v559];
  var rfText = v315.value;
  var v930 = theDocument$$1.forms;
  var v894 = v930[0];
  var v855 = v894.elements;
  var v810 = v855[4];
  var v749 = v810.options;
  var v931 = theDocument$$1.forms;
  var v895 = v931[0];
  var v856 = v895.elements;
  var v811 = v856[4];
  var v750 = v811.selectedIndex;
  var v671 = v749[v750];
  var v560 = v671.value;
  introspect(JAM.policy.p13) {
    var v317 = v560.match(/^\d+$/)
  }
  if(v317) {
    rfText = rfText + 1
  }else {
    var v932 = theDocument$$1.forms;
    var v896 = v932[0];
    var v857 = v896.elements;
    var v812 = v857[4];
    var v751 = v812.options;
    var v933 = theDocument$$1.forms;
    var v897 = v933[0];
    var v858 = v897.elements;
    var v813 = v858[4];
    var v752 = v813.selectedIndex;
    var v672 = v751[v752];
    var v561 = v672.value;
    var v316 = '"' + v561;
    rfText = v316 + '"'
  }
  openWindow("Translate");
  openPre();
  var v814 = theDocument$$1.forms;
  var v753 = v814[0];
  var v673 = v753.elements;
  var v562 = v673[0];
  var v318 = v562.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v318);
  var i$$11 = 0;
  var v563 = arrayOfFasta$$1.length;
  var v326 = i$$11 < v563;
  for(;v326;) {
    var v319 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v319);
    var v320 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v320);
    newDna = removeNonDna(newDna);
    var v321 = outputWindow.document;
    var v754 = "&gt;rf " + rfText;
    var v674 = v754 + " ";
    var v564 = v674 + title$$9;
    var v322 = v564 + "\n";
    introspect(JAM.policy.p23) {
      v321.write(v322)
    }
    var v898 = theDocument$$1.forms;
    var v859 = v898[0];
    var v815 = v859.elements;
    var v755 = v815[4];
    var v675 = v755.options;
    var v899 = theDocument$$1.forms;
    var v860 = v899[0];
    var v816 = v860.elements;
    var v756 = v816[4];
    var v676 = v756.selectedIndex;
    var v565 = v675[v676];
    var v323 = v565.value;
    var v900 = theDocument$$1.forms;
    var v861 = v900[0];
    var v817 = v861.elements;
    var v757 = v817[5];
    var v677 = v757.options;
    var v901 = theDocument$$1.forms;
    var v862 = v901[0];
    var v818 = v862.elements;
    var v758 = v818[5];
    var v678 = v758.selectedIndex;
    var v566 = v677[v678];
    var v324 = v566.value;
    writeTranslation(newDna, geneticCode, v323, v324);
    var v325 = outputWindow.document;
    introspect(JAM.policy.p14) {
      v325.write("\n\n")
    }
    i$$11 = i$$11 + 1;
    var v567 = arrayOfFasta$$1.length;
    v326 = i$$11 < v567
  }
  closePre();
  closeWindow();
  return true
}
function writeTranslation(dnaSequence$$3, geneticCode$$1, startPos, strand) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v327 = " " + p1$$2;
    return v327 + " "
  }
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var v329 = strand == "reverse";
  if(v329) {
    var v328 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v328)
  }
  var v332 = startPos == "uppercase";
  if(v332) {
    introspect(JAM.policy.p13) {
      dnaSequence$$3 = dnaSequence$$3.replace(/[a-z]/g, "")
    }
  }else {
    var v330 = parseInt(startPos);
    var v331 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      dnaSequence$$3 = dnaSequence$$3.substring(v330, v331)
    }
  }
  introspect(JAM.policy.p13) {
    var v679 = dnaSequence$$3.replace(/[^A-Za-z]/g, "")
  }
  var v568 = v679.length;
  var v333 = v568 < 3;
  if(v333) {
    return""
  }
  introspect(JAM.policy.p13) {
    dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2)
  }
  var i$$12 = 0;
  var v569 = geneticCodeMatchExp$$2.length;
  var v336 = i$$12 < v569;
  for(;v336;) {
    var v334 = geneticCodeMatchExp$$2[i$$12];
    var v335 = geneticCodeMatchResult$$2[i$$12];
    introspect(JAM.policy.p24) {
      dnaSequence$$3 = dnaSequence$$3.replace(v334, v335)
    }
    i$$12 = i$$12 + 1;
    var v570 = geneticCodeMatchExp$$2.length;
    v336 = i$$12 < v570
  }
  introspect(JAM.policy.p13) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\S{3}/g, "X")
  }
  introspect(JAM.policy.p13) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\s\S{1,2}$/, "")
  }
  introspect(JAM.policy.p13) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\s/g, "")
  }
  var v337 = outputWindow.document;
  var v338 = addReturns(dnaSequence$$3);
  introspect(JAM.policy.p23) {
    v337.write(v338)
  }
  return true
}
document.onload = v3;
introspect(JAM.policy.p14) {
  var v339 = document.getElementById("submitbtn")
}
v339.onclick = v4;
introspect(JAM.policy.p14) {
  var v340 = document.getElementById("clearbtn")
}
v340.onclick = v5;
