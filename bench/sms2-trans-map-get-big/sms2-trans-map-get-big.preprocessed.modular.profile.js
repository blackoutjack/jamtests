
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v13() {
  var v763 = document.forms;
  var v647 = v763[0];
  var v395 = v647.elements;
  var v14 = v395[0];
  v14.value = " ";
  return
}
function v12() {
  try {
    transMap(document)
  }catch(e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15)
  }
  return
}
function v11() {
  var v396 = document.main_form;
  var v16 = v396.main_submit;
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
  var v397 = this.positionLabel;
  var v18 = rightNum(v397, "", 8, "");
  v17.write(v18);
  var v398 = this.characters;
  var v19 = v398.slice(start$$10, stop$$6);
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
  var v399 = this.positionLabel;
  var v25 = rightNum(v399, "", 8, "");
  v24.write(v25);
  var v26 = outputWindow.document;
  var v764 = this.characters;
  var v648 = v764.slice(start$$9, stop$$5);
  var v400 = v648.join("");
  var v27 = v400 + "\n";
  v26.write(v27);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return
}
function v6(start$$8, stop$$4) {
  var v649 = this.characters;
  var v401 = v649.slice(start$$8, stop$$4);
  var v30 = v401.join("");
  var textToWrite = v30 + "\n";
  var v402 = textToWrite.search(/\w/);
  var v36 = v402 != -1;
  if(v36) {
    var v31 = outputWindow.document;
    var v403 = this.positionLabel;
    var v32 = rightNum(v403, "", 8, "");
    v31.write(v32);
    var v33 = this.positionLabel;
    var v404 = textToWrite.match(/[A-Z]/g);
    var v34 = v404.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    v35.write(textToWrite)
  }
  return
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v405 = this.positionLabel;
  var v38 = rightNum(v405, "", 8, "");
  v37.write(v38);
  var v39 = outputWindow.document;
  var v765 = this.characters;
  var v650 = v765.slice(start$$7, stop$$3);
  var v406 = v650.join("");
  var v40 = v406 + "\n";
  v39.write(v40);
  var v41 = this.positionLabel;
  var v407 = stop$$3 - start$$7;
  var v42 = v407 / 3;
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
  var v408 = arrayOfSequences.length;
  var v44 = v408 < 2;
  if(v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v409 = arrayOfTitles.length;
  var v46 = i$$1 < v409;
  for(;v46;) {
    var v766 = arrayOfTitles[i$$1];
    var v651 = v766.search(/\S/);
    var v410 = v651 == -1;
    var v653 = !v410;
    if(v653) {
      var v841 = arrayOfSequences[i$$1];
      var v767 = v841.search(/\S/);
      var v652 = v767 == -1;
      var v769 = !v652;
      if(v769) {
        var v842 = arrayOfSequences[i$$1];
        var v768 = v842.length;
        v652 = v768 != lengthOfAlign
      }
      v410 = v652
    }
    var v45 = v410;
    if(v45) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v411 = arrayOfTitles.length;
    v46 = i$$1 < v411
  }
  return true
}
function checkCodonTable(codonTable) {
  var v654 = codonTable.search(/AmAcid/);
  var v412 = v654 == -1;
  var v656 = !v412;
  if(v656) {
    var v770 = codonTable.search(/Codon/);
    var v655 = v770 == -1;
    var v772 = !v655;
    if(v772) {
      var v843 = codonTable.search(/Number/);
      var v771 = v843 == -1;
      var v845 = !v771;
      if(v845) {
        var v897 = codonTable.search(/\/1000/);
        var v844 = v897 == -1;
        var v899 = !v844;
        if(v899) {
          var v898 = codonTable.search(/Fraction\s*\.\./);
          v844 = v898 == -1
        }
        v771 = v844
      }
      v655 = v771
    }
    v412 = v655
  }
  var v47 = v412;
  if(v47) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v657 = formElement.value;
  var v413 = v657.search(/\S/);
  var v48 = v413 == -1;
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
  var v414 = arrayOfPatterns.length;
  var v51 = z$$2 < v414;
  for(;v51;) {
    var v658 = arrayOfPatterns[z$$2];
    var v415 = v658.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v49 = v415 == -1;
    if(v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v659 = arrayOfPatterns[z$$2];
    var v416 = moreExpressionCheck(v659);
    var v50 = v416 == false;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v417 = arrayOfPatterns.length;
    v51 = z$$2 < v417
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v418 = arrayOfPatterns.length;
  var v60 = j < v418;
  for(;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    var v773 = arrayOfPatterns[j];
    var v660 = v773.match(/\/.+\//);
    var v419 = v660 + "gi";
    var v1339 = eval(v419);
    v54[v55] = v1339;
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    var v661 = arrayOfPatterns[j];
    var v420 = v661.match(/=[a-zA-Z\*]/);
    var v1340 = v420.toString();
    v56[v57] = v1340;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    var v421 = geneticCodeMatchResult[j];
    var v1341 = v421.replace(/=/g, "");
    v58[v59] = v1341;
    j = j + 1;
    var v422 = arrayOfPatterns.length;
    v60 = j < v422
  }
  var i$$2 = 0;
  var v662 = testSequence.length;
  var v423 = v662 - 3;
  var v67 = i$$2 <= v423;
  for(;v67;) {
    var v61 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v61);
    j = 0;
    var v424 = geneticCodeMatchExp.length;
    var v65 = j < v424;
    for(;v65;) {
      var v663 = geneticCodeMatchExp[j];
      var v425 = codon.search(v663);
      var v64 = v425 != -1;
      if(v64) {
        var v63 = oneMatch == true;
        if(v63) {
          var v426 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v62 = v426 + ".";
          alert(v62);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v427 = geneticCodeMatchExp.length;
      v65 = j < v427
    }
    var v66 = oneMatch == false;
    if(v66) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v664 = testSequence.length;
    var v428 = v664 - 3;
    v67 = i$$2 <= v428
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v429 = arrayOfPatterns$$1.length;
  var v69 = z$$3 < v429;
  for(;v69;) {
    var v665 = arrayOfPatterns$$1[z$$3];
    var v430 = v665.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v68 = v430 != -1;
    if(v68) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v431 = arrayOfPatterns$$1.length;
    v69 = z$$3 < v431
  }
  var i$$3 = 0;
  var v432 = arrayOfPatterns$$1.length;
  var v73 = i$$3 < v432;
  for(;v73;) {
    var v666 = arrayOfPatterns$$1[i$$3];
    var v433 = "[" + v666;
    var v70 = v433 + "]";
    var re = new RegExp(v70, "gi");
    var j$$1 = i$$3 + 1;
    var v434 = arrayOfPatterns$$1.length;
    var v72 = j$$1 < v434;
    for(;v72;) {
      var v667 = arrayOfPatterns$$1[j$$1];
      var v435 = v667.search(re);
      var v71 = v435 != -1;
      if(v71) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v436 = arrayOfPatterns$$1.length;
      v72 = j$$1 < v436
    }
    i$$3 = i$$3 + 1;
    var v437 = arrayOfPatterns$$1.length;
    v73 = i$$3 < v437
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v438 = arrayOfPatterns$$2.length;
  var v76 = z$$4 < v438;
  for(;v76;) {
    var v668 = arrayOfPatterns$$2[z$$4];
    var v439 = v668.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v74 = v439 == -1;
    if(v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v669 = arrayOfPatterns$$2[z$$4];
    var v440 = moreExpressionCheck(v669);
    var v75 = v440 == false;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v441 = arrayOfPatterns$$2.length;
    v76 = z$$4 < v441
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v774 = getSequenceFromFasta(text$$7);
  var v670 = v774.replace(/[^A-Za-z]/g, "");
  var v442 = v670.length;
  var v78 = v442 > maxInput;
  if(v78) {
    var v443 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v77 = v443 + " characters.";
    alert(v77);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v444 = text$$8.length;
  var v80 = v444 > maxInput$$1;
  if(v80) {
    var v445 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v79 = v445 + " characters.";
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
  var v446 = alignArray.length;
  var v87 = v446 < 3;
  if(v87) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v447 = alignArray.length;
  var v89 = i$$4 < v447;
  for(;v89;) {
    var v671 = alignArray[i$$4];
    var v448 = v671.search(/[^\s]+\s/);
    var v88 = v448 == -1;
    if(v88) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v449 = alignArray.length;
    v89 = i$$4 < v449
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
  var v450 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v92 = v450 != -1;
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
  var v451 = sequence$$2.length;
  var v93 = "&gt;results for " + v451;
  var stringToReturn = v93 + " residue sequence ";
  var v452 = fastaSequenceTitle.search(/[^\s]/);
  var v95 = v452 != -1;
  if(v95) {
    var v453 = stringToReturn + '"';
    var v94 = v453 + fastaSequenceTitle;
    stringToReturn = v94 + '"'
  }
  var v454 = stringToReturn + ' starting "';
  var v455 = sequence$$2.substring(0, 10);
  var v96 = v454 + v455;
  stringToReturn = v96 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v456 = sequenceOne.length;
  var v97 = "Search results for " + v456;
  var stringToReturn$$1 = v97 + " residue sequence ";
  var v457 = fastaSequenceTitleOne.search(/[^\s]/);
  var v99 = v457 != -1;
  if(v99) {
    var v458 = stringToReturn$$1 + '"';
    var v98 = v458 + fastaSequenceTitleOne;
    stringToReturn$$1 = v98 + '"'
  }
  var v459 = stringToReturn$$1 + ' starting "';
  var v460 = sequenceOne.substring(0, 10);
  var v100 = v459 + v460;
  stringToReturn$$1 = v100 + '"\n';
  var v461 = stringToReturn$$1 + "and ";
  var v462 = sequenceTwo.length;
  var v101 = v461 + v462;
  stringToReturn$$1 = v101 + " residue sequence ";
  var v463 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v103 = v463 != -1;
  if(v103) {
    var v464 = stringToReturn$$1 + '"';
    var v102 = v464 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v102 + '"'
  }
  var v465 = stringToReturn$$1 + ' starting "';
  var v466 = sequenceTwo.substring(0, 10);
  var v104 = v465 + v466;
  stringToReturn$$1 = v104 + '"';
  var v105 = '<div class="info">' + stringToReturn$$1;
  return v105 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v106 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v106);
  var j$$2 = 0;
  var v467 = arrayOfPatterns$$3.length;
  var v109 = j$$2 < v467;
  for(;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    var v775 = arrayOfPatterns$$3[j$$2];
    var v672 = v775.match(/\/.+\//);
    var v468 = v672 + "gi";
    var v1342 = eval(v468);
    v107[v108] = v1342;
    j$$2 = j$$2 + 1;
    var v469 = arrayOfPatterns$$3.length;
    v109 = j$$2 < v469
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v110 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v110);
  var j$$3 = 0;
  var v470 = arrayOfPatterns$$4.length;
  var v115 = j$$3 < v470;
  for(;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    var v673 = arrayOfPatterns$$4[j$$3];
    var v471 = v673.match(/=[a-zA-Z\*]/);
    var v1343 = v471.toString();
    v111[v112] = v1343;
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    var v472 = geneticCodeMatchResult$$1[j$$3];
    var v1344 = v472.replace(/=/g, "");
    v113[v114] = v1344;
    j$$3 = j$$3 + 1;
    var v473 = arrayOfPatterns$$4.length;
    v115 = j$$3 < v473
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v474 = sequence$$3.length;
  var v116 = "Results for " + v474;
  var stringToReturn$$2 = v116 + " residue sequence ";
  var v475 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v118 = v475 != -1;
  if(v118) {
    var v476 = stringToReturn$$2 + '"';
    var v117 = v476 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v117 + '"'
  }
  var v477 = stringToReturn$$2 + ' starting "';
  var v478 = sequence$$3.substring(0, 10);
  var v119 = v477 + v478;
  stringToReturn$$2 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$2;
  return v120 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v674 = "Results for " + topology;
  var v479 = v674 + " ";
  var v480 = sequence$$4.length;
  var v121 = v479 + v480;
  var stringToReturn$$3 = v121 + " residue sequence ";
  var v481 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v123 = v481 != -1;
  if(v123) {
    var v482 = stringToReturn$$3 + '"';
    var v122 = v482 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v122 + '"'
  }
  var v483 = stringToReturn$$3 + ' starting "';
  var v484 = sequence$$4.substring(0, 10);
  var v124 = v483 + v484;
  stringToReturn$$3 = v124 + '"';
  var v125 = '<div class="info">' + stringToReturn$$3;
  return v125 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v485 = sequenceOne$$1.length;
  var v126 = "Alignment results for " + v485;
  var stringToReturn$$4 = v126 + " residue sequence ";
  var v486 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v128 = v486 != -1;
  if(v128) {
    var v487 = stringToReturn$$4 + '"';
    var v127 = v487 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v127 + '"'
  }
  var v488 = stringToReturn$$4 + ' starting "';
  var v489 = sequenceOne$$1.substring(0, 10);
  var v129 = v488 + v489;
  stringToReturn$$4 = v129 + '"\n';
  var v490 = stringToReturn$$4 + "and ";
  var v491 = sequenceTwo$$1.length;
  var v130 = v490 + v491;
  stringToReturn$$4 = v130 + " residue sequence ";
  var v492 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v132 = v492 != -1;
  if(v132) {
    var v493 = stringToReturn$$4 + '"';
    var v131 = v493 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v131 + '"'
  }
  var v494 = stringToReturn$$4 + ' starting "';
  var v495 = sequenceTwo$$1.substring(0, 10);
  var v133 = v494 + v495;
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
    var v496 = Math.random();
    var v497 = components.length;
    var v135 = v496 * v497;
    tempNum = Math.floor(v135);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v498 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v137 = v498 != -1;
  if(v137) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v499 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v499 != -1;
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
  var v675 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v500 = v675 != -1;
  var v677 = !v500;
  if(v677) {
    var v776 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v676 = v776 != -1;
    var v778 = !v676;
    if(v778) {
      var v846 = expressionToCheck.search(/\[\]/);
      var v777 = v846 != -1;
      var v848 = !v777;
      if(v848) {
        var v900 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v847 = v900 != -1;
        var v902 = !v847;
        if(v902) {
          var v937 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v901 = v937 != -1;
          var v939 = !v901;
          if(v939) {
            var v973 = expressionToCheck.search(/\|\|/);
            var v938 = v973 != -1;
            var v975 = !v938;
            if(v975) {
              var v1002 = expressionToCheck.search(/\/\|/);
              var v974 = v1002 != -1;
              var v1004 = !v974;
              if(v1004) {
                var v1029 = expressionToCheck.search(/\|\//);
                var v1003 = v1029 != -1;
                var v1031 = !v1003;
                if(v1031) {
                  var v1056 = expressionToCheck.search(/\[.\]/);
                  var v1030 = v1056 != -1;
                  var v1058 = !v1030;
                  if(v1058) {
                    var v1081 = expressionToCheck.search(/\</);
                    var v1057 = v1081 != -1;
                    var v1083 = !v1057;
                    if(v1083) {
                      var v1082 = expressionToCheck.search(/\>/);
                      v1057 = v1082 != -1
                    }
                    v1030 = v1057
                  }
                  v1003 = v1030
                }
                v974 = v1003
              }
              v938 = v974
            }
            v901 = v938
          }
          v847 = v901
        }
        v777 = v847
      }
      v676 = v777
    }
    v500 = v676
  }
  var v140 = v500;
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
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v145 = outputWindow.document;
  var v779 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v678 = v779 + "<head>\n";
  var v501 = v678 + "<title>Sequence Manipulation Suite</title>\n";
  var v146 = v501 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v145.write(v146);
  if(isColor) {
    var v147 = outputWindow.document;
    var v1150 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1128 = v1150 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1106 = v1128 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1084 = v1106 + "div.info {font-weight: bold}\n";
    var v1059 = v1084 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1032 = v1059 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1005 = v1032 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v976 = v1005 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v940 = v976 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v903 = v940 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v849 = v903 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v780 = v849 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v679 = v780 + "td.many {color: #000000}\n";
    var v502 = v679 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v148 = v502 + "</style>\n";
    v147.write(v148)
  }else {
    var v149 = outputWindow.document;
    var v1172 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1151 = v1172 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1129 = v1151 + "div.title {display: none}\n";
    var v1107 = v1129 + "div.info {font-weight: bold}\n";
    var v1085 = v1107 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1060 = v1085 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1033 = v1060 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1006 = v1033 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v977 = v1006 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v941 = v977 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v904 = v941 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v850 = v904 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v781 = v850 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v781 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v503 = v680 + "img {display: none}\n";
    var v150 = v503 + "</style>\n";
    v149.write(v150)
  }
  var v151 = outputWindow.document;
  var v782 = "</head>\n" + '<body class="main">\n';
  var v681 = v782 + '<div class="title">';
  var v504 = v681 + title$$6;
  var v152 = v504 + " results</div>\n";
  v151.write(v152);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v153 = outputWindow.document;
  var v783 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v682 = v783 + "<head>\n";
  var v505 = v682 + "<title>Sequence Manipulation Suite</title>\n";
  var v154 = v505 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v153.write(v154);
  if(isBackground) {
    var v155 = outputWindow.document;
    var v1152 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1130 = v1152 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1108 = v1130 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1086 = v1108 + "div.info {font-weight: bold}\n";
    var v1061 = v1086 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1034 = v1061 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1007 = v1034 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v978 = v1007 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v942 = v978 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v905 = v942 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v851 = v905 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v784 = v851 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v683 = v784 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v506 = v683 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v156 = v506 + "</style>\n";
    v155.write(v156)
  }else {
    var v157 = outputWindow.document;
    var v1192 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1173 = v1192 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1153 = v1173 + "div.title {display: none}\n";
    var v1131 = v1153 + "div.info {font-weight: bold}\n";
    var v1109 = v1131 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1087 = v1109 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1062 = v1087 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1035 = v1062 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1008 = v1035 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v979 = v1008 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v943 = v979 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v906 = v943 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v852 = v906 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v785 = v852 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v684 = v785 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v507 = v684 + "img {display: none}\n";
    var v158 = v507 + "</style>\n";
    v157.write(v158)
  }
  var v159 = outputWindow.document;
  var v786 = "</head>\n" + '<body class="main">\n';
  var v685 = v786 + '<div class="title">';
  var v508 = v685 + title$$8;
  var v160 = v508 + " results</div>\n";
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
  var v509 = dnaSequence$$1.search(/./);
  var v161 = v509 != -1;
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
  var v510 = testArray[0];
  var v165 = v510 != testString;
  if(v165) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v511 = testString.search(re$$2);
  var v166 = v511 == -1;
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
  var v512 = testNum.toFixed(3);
  var v169 = v512 != 2489.824;
  if(v169) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v513 = testNum.toPrecision(5);
  var v170 = v513 != 2489.8;
  if(v170) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v514 = theNumber$$1.search(/\d/);
  var v171 = v514 == -1;
  if(v171) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v686 = emblFile.search(/ID/);
  var v515 = v686 == -1;
  var v688 = !v515;
  if(v688) {
    var v787 = emblFile.search(/AC/);
    var v687 = v787 == -1;
    var v789 = !v687;
    if(v789) {
      var v853 = emblFile.search(/DE/);
      var v788 = v853 == -1;
      var v855 = !v788;
      if(v855) {
        var v854 = emblFile.search(/SQ/);
        v788 = v854 == -1
      }
      v687 = v788
    }
    v515 = v687
  }
  var v172 = v515;
  if(v172) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v516 = theNumber$$2.search(/\d/);
  var v173 = v516 == -1;
  if(v173) {
    alert("Please enter a number.");
    return false
  }
  var v175 = theNumber$$2 > maxInput$$2;
  if(v175) {
    var v517 = "Please enter a number less than or equal to " + maxInput$$2;
    var v174 = v517 + ".";
    alert(v174);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v518 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v176 = v518 != -1;
  if(v176) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v519 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v177 = v519 != -1;
  if(v177) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v689 = genBankFile.search(/LOCUS/);
  var v520 = v689 == -1;
  var v691 = !v520;
  if(v691) {
    var v790 = genBankFile.search(/DEFINITION/);
    var v690 = v790 == -1;
    var v792 = !v690;
    if(v792) {
      var v856 = genBankFile.search(/ACCESSION/);
      var v791 = v856 == -1;
      var v858 = !v791;
      if(v858) {
        var v857 = genBankFile.search(/ORIGIN/);
        v791 = v857 == -1
      }
      v690 = v791
    }
    v520 = v690
  }
  var v178 = v520;
  if(v178) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v692 = genBankFile$$1.search(/LOCUS/);
  var v521 = v692 == -1;
  var v694 = !v521;
  if(v694) {
    var v793 = genBankFile$$1.search(/DEFINITION/);
    var v693 = v793 == -1;
    var v795 = !v693;
    if(v795) {
      var v859 = genBankFile$$1.search(/ACCESSION/);
      var v794 = v859 == -1;
      var v861 = !v794;
      if(v861) {
        var v860 = genBankFile$$1.search(/ORIGIN/);
        v794 = v860 == -1
      }
      v693 = v794
    }
    v521 = v693
  }
  var v179 = v521;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v522 = genBankFile$$1.search(/FEATURES {13}/);
  var v180 = v522 == -1;
  if(v180) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v695 = emblFile$$1.search(/ID/);
  var v523 = v695 == -1;
  var v697 = !v523;
  if(v697) {
    var v796 = emblFile$$1.search(/AC/);
    var v696 = v796 == -1;
    var v798 = !v696;
    if(v798) {
      var v862 = emblFile$$1.search(/DE/);
      var v797 = v862 == -1;
      var v864 = !v797;
      if(v864) {
        var v863 = emblFile$$1.search(/SQ/);
        v797 = v863 == -1
      }
      v696 = v797
    }
    v523 = v696
  }
  var v181 = v523;
  if(v181) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v524 = emblFile$$1.search(/^FT/m);
  var v182 = v524 == -1;
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
    var v525 = basePerLine / groupSize;
    var v186 = j$$6 <= v525;
    for(;v186;) {
      var v185 = k < groupSize;
      for(;v185;) {
        var v526 = k + i$$5;
        var v184 = text$$10.charAt(v526);
        lineOfText = lineOfText + v184;
        k = k + 1;
        v185 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v527 = basePerLine / groupSize;
      v186 = j$$6 <= v527
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
    var v528 = adjustment < 0;
    if(v528) {
      v528 = adjusted >= 0
    }
    var v190 = v528;
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
    var v529 = basePerLine$$2 / groupSize$$2;
    var v197 = j$$7 <= v529;
    for(;v197;) {
      var v193 = k$$1 < groupSize$$2;
      for(;v193;) {
        var v530 = i$$6 + k$$1;
        var v191 = v530 >= stopBase$$2;
        if(v191) {
          break
        }
        var v531 = k$$1 + i$$6;
        var v192 = text$$12.charAt(v531);
        lineOfText$$1 = lineOfText$$1 + v192;
        k$$1 = k$$1 + 1;
        v193 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v195 = numberPosition$$1 == "above";
      if(v195) {
        var v532 = adjustNumbering(i$$6, numberingAdjustment);
        var v194 = rightNum(v532, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v194
      }
      var v196 = i$$6 >= stopBase$$2;
      if(v196) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v533 = basePerLine$$2 / groupSize$$2;
      v197 = j$$7 <= v533
    }
    var v220 = numberPosition$$1 == "left";
    if(v220) {
      var v198 = outputWindow.document;
      var v799 = adjustNumbering(lineNum, numberingAdjustment);
      var v698 = rightNum(v799, "", 8, tabIn$$3);
      var v534 = v698 + lineOfText$$1;
      var v199 = v534 + "\n";
      v198.write(v199);
      var v203 = strands$$1 == "two";
      if(v203) {
        var v200 = outputWindow.document;
        var v800 = adjustNumbering(lineNum, numberingAdjustment);
        var v699 = rightNum(v800, "", 8, tabIn$$3);
        var v700 = complement(lineOfText$$1);
        var v535 = v699 + v700;
        var v201 = v535 + "\n";
        v200.write(v201);
        var v202 = outputWindow.document;
        v202.write("\n")
      }
    }else {
      var v219 = numberPosition$$1 == "right";
      if(v219) {
        var v204 = outputWindow.document;
        var v701 = adjustNumbering(i$$6, numberingAdjustment);
        var v536 = lineOfText$$1 + v701;
        var v205 = v536 + "\n";
        v204.write(v205);
        var v209 = strands$$1 == "two";
        if(v209) {
          var v206 = outputWindow.document;
          var v702 = complement(lineOfText$$1);
          var v703 = adjustNumbering(i$$6, numberingAdjustment);
          var v537 = v702 + v703;
          var v207 = v537 + "\n";
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
            var v538 = complement(lineOfText$$1);
            var v215 = v538 + "\n";
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
    var v539 = basePerLine$$3 / groupSize$$3;
    var v228 = j$$8 <= v539;
    for(;v228;) {
      var v224 = k$$2 < groupSize$$3;
      for(;v224;) {
        var v540 = i$$7 + k$$2;
        var v222 = v540 >= stopBase$$3;
        if(v222) {
          break
        }
        var v541 = k$$2 + i$$7;
        var v223 = text$$13.charAt(v541);
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
      var v542 = basePerLine$$3 / groupSize$$3;
      v228 = j$$8 <= v542
    }
    var v239 = numberPosition$$2 == "left";
    if(v239) {
      var v229 = outputWindow.document;
      var v704 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v543 = v704 + lineOfText$$2;
      var v230 = v543 + "\n";
      v229.write(v230)
    }else {
      var v238 = numberPosition$$2 == "right";
      if(v238) {
        var v231 = outputWindow.document;
        var v544 = lineOfText$$2 + i$$7;
        var v232 = v544 + "\n";
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
  var v705 = sequence$$13.length;
  var v545 = v705 <= firstIndexToMutate;
  var v707 = !v545;
  if(v707) {
    var v706 = lastIndexToMutate < 0;
    var v801 = !v706;
    if(v801) {
      v706 = lastIndexToMutate <= firstIndexToMutate
    }
    v545 = v706
  }
  var v241 = v545;
  if(v241) {
    numMut = 0
  }
  var i$$8 = 0;
  var v249 = i$$8 < numMut;
  for(;v249;) {
    maxNum = sequence$$13.length;
    var v546 = Math.random();
    var v242 = v546 * maxNum;
    randNum = Math.floor(v242);
    var v547 = randNum < firstIndexToMutate;
    var v708 = !v547;
    if(v708) {
      v547 = randNum > lastIndexToMutate
    }
    var v243 = v547;
    if(v243) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v249 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v548 = Math.random();
      var v549 = components$$1.length;
      var v244 = v548 * v549;
      componentsIndex = Math.round(v244);
      var v550 = components$$1.length;
      var v245 = componentsIndex == v550;
      if(v245) {
        componentsIndex = 0
      }
      var v551 = components$$1[componentsIndex];
      var v246 = v551 != currentChar;
      if(v246) {
        needNewChar = false
      }
    }
    var v552 = sequence$$13.substring(0, randNum);
    var v553 = components$$1[componentsIndex];
    var v247 = v552 + v553;
    var v554 = randNum + 1;
    var v555 = sequence$$13.length;
    var v248 = sequence$$13.substring(v554, v555);
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
    var v556 = Math.random();
    var v557 = components$$2.length;
    var v252 = v556 * v557;
    tempNum$$1 = Math.floor(v252);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v558 = sequence$$14.length;
    var v255 = v558 == 60;
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
    var v802 = sequence$$15.length;
    var v709 = v802 - lookAhead;
    var v710 = sequence$$15.length;
    var v559 = sequence$$15.substring(v709, v710);
    var v260 = v559 + sequence$$15;
    var v261 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v260 + v261;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v263 = outputWindow.document;
  v263.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v264 = outputWindow.document;
  var v803 = '<tr><td class="title" width="200px">' + "Site:";
  var v711 = v803 + '</td><td class="title">';
  var v560 = v711 + "Positions:";
  var v265 = v560 + "</td></tr>\n";
  v264.write(v265);
  var i$$9 = 0;
  var v561 = arrayOfItems.length;
  var v281 = i$$9 < v561;
  for(;v281;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v562 = arrayOfItems[i$$9];
    var v266 = v562.match(/\/.+\//);
    matchExp = v266 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v804 = arrayOfItems[i$$9];
    var v712 = v804.match(/\)\D*\d+/);
    var v563 = v712.toString();
    var v267 = v563.replace(/\)\D*/, "");
    cutDistance = parseFloat(v267);
    var v273 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v273;) {
      var v268 = matchExp.lastIndex;
      matchPosition = v268 - cutDistance;
      var v564 = matchPosition >= lowerLimit;
      if(v564) {
        v564 = matchPosition < upperLimit
      }
      var v271 = v564;
      if(v271) {
        timesFound = timesFound + 1;
        var v269 = tempString$$1 + ", ";
        var v565 = matchPosition - shiftValue;
        var v270 = v565 + 1;
        tempString$$1 = v269 + v270
      }
      var v272 = matchExp;
      var v713 = matchExp.lastIndex;
      var v805 = RegExp.lastMatch;
      var v714 = v805.length;
      var v566 = v713 - v714;
      v272.lastIndex = v566 + 1;
      v273 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v567 = tempString$$1.search(/\d/);
    var v274 = v567 != -1;
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
    var v980 = '<tr><td class="' + backGroundClass;
    var v944 = v980 + '">';
    var v1036 = arrayOfItems[i$$9];
    var v1009 = v1036.match(/\([^\(]+\)/);
    var v981 = v1009.toString();
    var v945 = v981.replace(/\(|\)/g, "");
    var v907 = v944 + v945;
    var v865 = v907 + '</td><td class="';
    var v806 = v865 + backGroundClass;
    var v715 = v806 + '">';
    var v568 = v715 + tempString$$1;
    var v280 = v568 + "</td></tr>\n";
    v279.write(v280);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v569 = arrayOfItems.length;
    v281 = i$$9 < v569
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
  var v908 = '<tr><td class="title">' + "Pattern:";
  var v866 = v908 + '</td><td class="title">';
  var v807 = v866 + "Times found:";
  var v716 = v807 + '</td><td class="title">';
  var v570 = v716 + "Percentage:";
  var v285 = v570 + "</td></tr>\n";
  v284.write(v285);
  var i$$10 = 0;
  var v571 = arrayOfItems$$1.length;
  var v294 = i$$10 < v571;
  for(;v294;) {
    var tempNumber = 0;
    var v572 = arrayOfItems$$1[i$$10];
    var v286 = v572.match(/\/[^\/]+\//);
    var matchExp$$1 = v286 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v573 = sequence$$16.search(matchExp$$1);
    var v288 = v573 != -1;
    if(v288) {
      var v287 = sequence$$16.match(matchExp$$1);
      tempNumber = v287.length
    }
    var percentage = 0;
    var v717 = originalLength + 1;
    var v867 = arrayOfItems$$1[i$$10];
    var v808 = v867.match(/\d+/);
    var v718 = parseFloat(v808);
    var v574 = v717 - v718;
    var v291 = v574 > 0;
    if(v291) {
      var v289 = 100 * tempNumber;
      var v575 = originalLength + 1;
      var v809 = arrayOfItems$$1[i$$10];
      var v719 = v809.match(/\d+/);
      var v576 = parseFloat(v719);
      var v290 = v575 - v576;
      percentage = v289 / v290
    }
    var v292 = outputWindow.document;
    var v1037 = arrayOfItems$$1[i$$10];
    var v1010 = v1037.match(/\([^\(]+\)\b/);
    var v982 = v1010.toString();
    var v946 = v982.replace(/\(|\)/g, "");
    var v909 = "<tr><td>" + v946;
    var v868 = v909 + "</td><td>";
    var v810 = v868 + tempNumber;
    var v720 = v810 + "</td><td>";
    var v721 = percentage.toFixed(2);
    var v577 = v720 + v721;
    var v293 = v577 + "</td></tr>\n";
    v292.write(v293);
    i$$10 = i$$10 + 1;
    var v578 = arrayOfItems$$1.length;
    v294 = i$$10 < v578
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
  var v579 = sequence$$17.length;
  var v302 = v579 > 0;
  for(;v302;) {
    maxNum$$1 = sequence$$17.length;
    var v580 = Math.random();
    var v296 = v580 * maxNum$$1;
    randNum$$1 = Math.floor(v296);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v297 = randNum$$1 + 1;
    var v298 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v297, v298);
    sequence$$17 = tempString1 + tempString2;
    var v581 = tempSeq.length;
    var v301 = v581 == 60;
    if(v301) {
      var v299 = outputWindow.document;
      var v300 = tempSeq + "\n";
      v299.write(v300);
      tempSeq = ""
    }
    var v582 = sequence$$17.length;
    v302 = v582 > 0
  }
  var v303 = outputWindow.document;
  var v304 = tempSeq + "\n";
  v303.write(v304);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v583 = type$$25.toLowerCase();
  var v306 = v583 == "standard";
  if(v306) {
    var v1338 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1337 = v1338 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1336 = v1337 + "/cgcg/ (AccII cg|cg)2,";
    var v1335 = v1336 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1334 = v1335 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1333 = v1334 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1332 = v1333 + "/gtac/ (AfaI gt|ac)2,";
    var v1331 = v1332 + "/agcgct/ (AfeI agc|gct)3,";
    var v1330 = v1331 + "/cttaag/ (AflII c|ttaag)5,";
    var v1329 = v1330 + "/accggt/ (AgeI a|ccggt)5,";
    var v1328 = v1329 + "/actagt/ (AhlI a|ctagt)5,";
    var v1327 = v1328 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1326 = v1327 + "/agct/ (AluI ag|ct)2,";
    var v1325 = v1326 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1324 = v1325 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1323 = v1324 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1322 = v1323 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1321 = v1322 + "/attaat/ (AseI at|taat)4,";
    var v1320 = v1321 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1319 = v1320 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1318 = v1319 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1317 = v1318 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1316 = v1317 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1315 = v1316 + "/tggcca/ (BalI tgg|cca)3,";
    var v1314 = v1315 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1313 = v1314 + "/atcgat/ (BanIII at|cgat)4,";
    var v1312 = v1313 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1311 = v1312 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1310 = v1311 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1309 = v1310 + "/actagt/ (BcuI a|ctagt)5,";
    var v1308 = v1309 + "/tgatca/ (BclI t|gatca)5,";
    var v1307 = v1308 + "/ctag/ (BfaI c|tag)3,";
    var v1306 = v1307 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1305 = v1306 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1304 = v1305 + "/agatct/ (BglII a|gatct)5,";
    var v1303 = v1304 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1302 = v1303 + "/atcgat/ (BseCI at|cgat)4,";
    var v1301 = v1302 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1300 = v1301 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1299 = v1300 + "/accggt/ (BshTI a|ccggt)5,";
    var v1298 = v1299 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1297 = v1298 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1296 = v1297 + "/atcgat/ (BspDI at|cgat)4,";
    var v1295 = v1296 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1294 = v1295 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1293 = v1294 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1292 = v1293 + "/cgcg/ (BstUI cg|cg)2,";
    var v1291 = v1292 + "/atcgat/ (ClaI at|cgat)4,";
    var v1290 = v1291 + "/gatc/ (DpnII |gatc)4,";
    var v1289 = v1290 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1288 = v1289 + "/cggccg/ (EagI c|ggccg)5,";
    var v1287 = v1288 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1286 = v1287 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1285 = v1286 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1284 = v1285 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1283 = v1284 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1282 = v1283 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1281 = v1282 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1280 = v1281 + "/aagctt/ (HindIII a|agctt)5,";
    var v1279 = v1280 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1278 = v1279 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1277 = v1278 + "/ccgg/ (HpaII c|cgg)3,";
    var v1276 = v1277 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1275 = v1276 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1274 = v1275 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1273 = v1274 + "/caattg/ (MfeI c|aattg)5,";
    var v1272 = v1273 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1271 = v1272 + "/tggcca/ (MscI tgg|cca)3,";
    var v1270 = v1271 + "/ttaa/ (MseI t|taa)3,";
    var v1269 = v1270 + "/ccgg/ (MspI c|cgg)3,";
    var v1268 = v1269 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1267 = v1268 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1266 = v1267 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1265 = v1266 + "/catatg/ (NdeI ca|tatg)4,";
    var v1264 = v1265 + "/gatc/ (NdeII |gatc)4,";
    var v1263 = v1264 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1262 = v1263 + "/gctagc/ (NheI g|ctagc)5,";
    var v1261 = v1262 + "/catg/ (NlaIII catg|)0,";
    var v1260 = v1261 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1259 = v1260 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1258 = v1259 + "/atgcat/ (NsiI atgca|t)1,";
    var v1257 = v1258 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1256 = v1257 + "/acatgt/ (PciI a|catgt)5,";
    var v1255 = v1256 + "/ggcc/ (PhoI gg|cc)2,";
    var v1254 = v1255 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1253 = v1254 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1252 = v1253 + "/ttataa/ (PsiI tta|taa)3,";
    var v1251 = v1252 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1250 = v1251 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1249 = v1250 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1248 = v1249 + "/gtac/ (RsaI gt|ac)2,";
    var v1247 = v1248 + "/gagctc/ (SacI gagct|c)1,";
    var v1229 = v1247 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1211 = v1229 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1193 = v1211 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1174 = v1193 + "/agtact/ (ScaI agt|act)3,";
    var v1154 = v1174 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1132 = v1154 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1110 = v1132 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1088 = v1110 + "/actagt/ (SpeI a|ctagt)5,";
    var v1063 = v1088 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1038 = v1063 + "/aatatt/ (SspI aat|att)3,";
    var v1011 = v1038 + "/gagctc/ (SstI gagct|c)1,";
    var v983 = v1011 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v947 = v983 + "/aggcct/ (StuI agg|cct)3,";
    var v910 = v947 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v869 = v910 + "/tcga/ (TaqI t|cga)3,";
    var v811 = v869 + "/ctcgag/ (TliI c|tcgag)5,";
    var v722 = v811 + "/attaat/ (VspI at|taat)4,";
    var v584 = v722 + "/tctaga/ (XbaI t|ctaga)5,";
    var v305 = v584 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v305 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v723 = type$$26.toLowerCase();
  var v585 = v723 == "standard";
  var v725 = !v585;
  if(v725) {
    var v724 = type$$26.toLowerCase();
    v585 = v724 == "transl_table=1"
  }
  var v308 = v585;
  if(v308) {
    var v1230 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1212 = v1230 + "/ga[tcuy]/=D,";
    var v1194 = v1212 + "/ga[agr]/=E,";
    var v1175 = v1194 + "/[tu][tu][tcuy]/=F,";
    var v1155 = v1175 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1133 = v1155 + "/ca[tcuy]/=H,";
    var v1111 = v1133 + "/a[tu][atcuwmhy]/=I,";
    var v1089 = v1111 + "/aa[agr]/=K,";
    var v1064 = v1089 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1039 = v1064 + "/a[tu]g/=M,";
    var v1012 = v1039 + "/aa[tucy]/=N,";
    var v984 = v1012 + "/cc[acgturyswkmbdhvn]/=P,";
    var v948 = v984 + "/ca[agr]/=Q,";
    var v911 = v948 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v870 = v911 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v812 = v870 + "/ac[acgturyswkmbdhvn]/=T,";
    var v726 = v812 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v586 = v726 + "/[tu]gg/=W,";
    var v307 = v586 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v587 = type$$26.toLowerCase();
  var v310 = v587 == "transl_table=2";
  if(v310) {
    var v1231 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1213 = v1231 + "/ga[tcuy]/=D,";
    var v1195 = v1213 + "/ga[agr]/=E,";
    var v1176 = v1195 + "/[tu][tu][tcuy]/=F,";
    var v1156 = v1176 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1134 = v1156 + "/ca[tcuy]/=H,";
    var v1112 = v1134 + "/a[tu][tcuy]/=I,";
    var v1090 = v1112 + "/aa[agr]/=K,";
    var v1065 = v1090 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1040 = v1065 + "/a[tu][agr]/=M,";
    var v1013 = v1040 + "/aa[tucy]/=N,";
    var v985 = v1013 + "/cc[acgturyswkmbdhvn]/=P,";
    var v949 = v985 + "/ca[agr]/=Q,";
    var v912 = v949 + "/cg[acgturyswkmbdhvn]/=R,";
    var v871 = v912 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v813 = v871 + "/ac[acgturyswkmbdhvn]/=T,";
    var v727 = v813 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v588 = v727 + "/[tu]g[agr]/=W,";
    var v309 = v588 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v589 = type$$26.toLowerCase();
  var v312 = v589 == "transl_table=3";
  if(v312) {
    var v1232 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1214 = v1232 + "/ga[tcuy]/=D,";
    var v1196 = v1214 + "/ga[agr]/=E,";
    var v1177 = v1196 + "/[tu][tu][tcuy]/=F,";
    var v1157 = v1177 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1135 = v1157 + "/ca[tcuy]/=H,";
    var v1113 = v1135 + "/a[tu][tcuy]/=I,";
    var v1091 = v1113 + "/aa[agr]/=K,";
    var v1066 = v1091 + "/[tu][tu][agr]/=L,";
    var v1041 = v1066 + "/a[tu][agr]/=M,";
    var v1014 = v1041 + "/aa[tucy]/=N,";
    var v986 = v1014 + "/cc[acgturyswkmbdhvn]/=P,";
    var v950 = v986 + "/ca[agr]/=Q,";
    var v913 = v950 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v872 = v913 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v814 = v872 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v728 = v814 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v590 = v728 + "/[tu]g[agr]/=W,";
    var v311 = v590 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*"
  }
  var v591 = type$$26.toLowerCase();
  var v314 = v591 == "transl_table=4";
  if(v314) {
    var v1233 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1215 = v1233 + "/ga[tcuy]/=D,";
    var v1197 = v1215 + "/ga[agr]/=E,";
    var v1178 = v1197 + "/[tu][tu][tcuy]/=F,";
    var v1158 = v1178 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1136 = v1158 + "/ca[tcuy]/=H,";
    var v1114 = v1136 + "/a[tu][atcuwmhy]/=I,";
    var v1092 = v1114 + "/aa[agr]/=K,";
    var v1067 = v1092 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1042 = v1067 + "/a[tu]g/=M,";
    var v1015 = v1042 + "/aa[tucy]/=N,";
    var v987 = v1015 + "/cc[acgturyswkmbdhvn]/=P,";
    var v951 = v987 + "/ca[agr]/=Q,";
    var v914 = v951 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v873 = v914 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v815 = v873 + "/ac[acgturyswkmbdhvn]/=T,";
    var v729 = v815 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v592 = v729 + "/[tu]g[agr]/=W,";
    var v313 = v592 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*"
  }
  var v593 = type$$26.toLowerCase();
  var v316 = v593 == "transl_table=5";
  if(v316) {
    var v1234 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1216 = v1234 + "/ga[tcuy]/=D,";
    var v1198 = v1216 + "/ga[agr]/=E,";
    var v1179 = v1198 + "/[tu][tu][tcuy]/=F,";
    var v1159 = v1179 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1137 = v1159 + "/ca[tcuy]/=H,";
    var v1115 = v1137 + "/a[tu][tcuy]/=I,";
    var v1093 = v1115 + "/aa[agr]/=K,";
    var v1068 = v1093 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1043 = v1068 + "/a[tu][agr]/=M,";
    var v1016 = v1043 + "/aa[tucy]/=N,";
    var v988 = v1016 + "/cc[acgturyswkmbdhvn]/=P,";
    var v952 = v988 + "/ca[agr]/=Q,";
    var v915 = v952 + "/cg[acgturyswkmbdhvn]/=R,";
    var v874 = v915 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v816 = v874 + "/ac[acgturyswkmbdhvn]/=T,";
    var v730 = v816 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v594 = v730 + "/[tu]g[agr]/=W,";
    var v315 = v594 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*"
  }
  var v595 = type$$26.toLowerCase();
  var v318 = v595 == "transl_table=6";
  if(v318) {
    var v1235 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1217 = v1235 + "/ga[tcuy]/=D,";
    var v1199 = v1217 + "/ga[agr]/=E,";
    var v1180 = v1199 + "/[tu][tu][tcuy]/=F,";
    var v1160 = v1180 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1138 = v1160 + "/ca[tcuy]/=H,";
    var v1116 = v1138 + "/a[tu][atcuwmhy]/=I,";
    var v1094 = v1116 + "/aa[agr]/=K,";
    var v1069 = v1094 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1044 = v1069 + "/a[tu]g/=M,";
    var v1017 = v1044 + "/aa[tucy]/=N,";
    var v989 = v1017 + "/cc[acgturyswkmbdhvn]/=P,";
    var v953 = v989 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v916 = v953 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v875 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v817 = v875 + "/ac[acgturyswkmbdhvn]/=T,";
    var v731 = v817 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v596 = v731 + "/[tu]gg/=W,";
    var v317 = v596 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]ga/=*"
  }
  var v597 = type$$26.toLowerCase();
  var v320 = v597 == "transl_table=9";
  if(v320) {
    var v1236 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1218 = v1236 + "/ga[tcuy]/=D,";
    var v1200 = v1218 + "/ga[agr]/=E,";
    var v1181 = v1200 + "/[tu][tu][tcuy]/=F,";
    var v1161 = v1181 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1139 = v1161 + "/ca[tcuy]/=H,";
    var v1117 = v1139 + "/a[tu][atcuwmhy]/=I,";
    var v1095 = v1117 + "/aag/=K,";
    var v1070 = v1095 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1045 = v1070 + "/a[tu]g/=M,";
    var v1018 = v1045 + "/aa[atcuwmhy]/=N,";
    var v990 = v1018 + "/cc[acgturyswkmbdhvn]/=P,";
    var v954 = v990 + "/ca[agr]/=Q,";
    var v917 = v954 + "/cg[acgturyswkmbdhvn]/=R,";
    var v876 = v917 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v818 = v876 + "/ac[acgturyswkmbdhvn]/=T,";
    var v732 = v818 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v598 = v732 + "/[tu]g[agr]/=W,";
    var v319 = v598 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]/=*"
  }
  var v599 = type$$26.toLowerCase();
  var v322 = v599 == "transl_table=10";
  if(v322) {
    var v1237 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1219 = v1237 + "/ga[tcuy]/=D,";
    var v1201 = v1219 + "/ga[agr]/=E,";
    var v1182 = v1201 + "/[tu][tu][tcuy]/=F,";
    var v1162 = v1182 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1140 = v1162 + "/ca[tcuy]/=H,";
    var v1118 = v1140 + "/a[tu][atcuwmhy]/=I,";
    var v1096 = v1118 + "/aa[agr]/=K,";
    var v1071 = v1096 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1046 = v1071 + "/a[tu]g/=M,";
    var v1019 = v1046 + "/aa[tucy]/=N,";
    var v991 = v1019 + "/cc[acgturyswkmbdhvn]/=P,";
    var v955 = v991 + "/ca[agr]/=Q,";
    var v918 = v955 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v877 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v819 = v877 + "/ac[acgturyswkmbdhvn]/=T,";
    var v733 = v819 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v600 = v733 + "/[tu]gg/=W,";
    var v321 = v600 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*"
  }
  var v601 = type$$26.toLowerCase();
  var v324 = v601 == "transl_table=11";
  if(v324) {
    var v1238 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1220 = v1238 + "/ga[tcuy]/=D,";
    var v1202 = v1220 + "/ga[agr]/=E,";
    var v1183 = v1202 + "/[tu][tu][tcuy]/=F,";
    var v1163 = v1183 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1141 = v1163 + "/ca[tcuy]/=H,";
    var v1119 = v1141 + "/a[tu][atcuwmhy]/=I,";
    var v1097 = v1119 + "/aa[agr]/=K,";
    var v1072 = v1097 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1047 = v1072 + "/a[tu]g/=M,";
    var v1020 = v1047 + "/aa[tucy]/=N,";
    var v992 = v1020 + "/cc[acgturyswkmbdhvn]/=P,";
    var v956 = v992 + "/ca[agr]/=Q,";
    var v919 = v956 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v878 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v820 = v878 + "/ac[acgturyswkmbdhvn]/=T,";
    var v734 = v820 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v602 = v734 + "/[tu]gg/=W,";
    var v323 = v602 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v603 = type$$26.toLowerCase();
  var v326 = v603 == "transl_table=12";
  if(v326) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1239 + "/ga[tcuy]/=D,";
    var v1203 = v1221 + "/ga[agr]/=E,";
    var v1184 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1164 + "/ca[tcuy]/=H,";
    var v1120 = v1142 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1120 + "/aa[agr]/=K,";
    var v1073 = v1098 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1048 = v1073 + "/a[tu]g/=M,";
    var v1021 = v1048 + "/aa[tucy]/=N,";
    var v993 = v1021 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v993 + "/ca[agr]/=Q,";
    var v920 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v879 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v821 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v604 = v735 + "/[tu]gg/=W,";
    var v325 = v604 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v605 = type$$26.toLowerCase();
  var v328 = v605 == "transl_table=13";
  if(v328) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1222 = v1240 + "/ga[tcuy]/=D,";
    var v1204 = v1222 + "/ga[agr]/=E,";
    var v1185 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1185 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1143 = v1165 + "/ca[tcuy]/=H,";
    var v1121 = v1143 + "/a[tu][tcuy]/=I,";
    var v1099 = v1121 + "/aa[agr]/=K,";
    var v1074 = v1099 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1049 = v1074 + "/a[tu][agr]/=M,";
    var v1022 = v1049 + "/aa[tucy]/=N,";
    var v994 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v994 + "/ca[agr]/=Q,";
    var v921 = v958 + "/cg[acgturyswkmbdhvn]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v822 = v880 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v606 = v736 + "/[tu]g[agr]/=W,";
    var v327 = v606 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu]a[agr]/=*"
  }
  var v607 = type$$26.toLowerCase();
  var v330 = v607 == "transl_table=14";
  if(v330) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1223 = v1241 + "/ga[tcuy]/=D,";
    var v1205 = v1223 + "/ga[agr]/=E,";
    var v1186 = v1205 + "/[tu][tu][tcuy]/=F,";
    var v1166 = v1186 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1144 = v1166 + "/ca[tcuy]/=H,";
    var v1122 = v1144 + "/a[tu][atcuwmhy]/=I,";
    var v1100 = v1122 + "/aag/=K,";
    var v1075 = v1100 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1050 = v1075 + "/a[tu]g/=M,";
    var v1023 = v1050 + "/aa[atcuwmhy]/=N,";
    var v995 = v1023 + "/cc[acgturyswkmbdhvn]/=P,";
    var v959 = v995 + "/ca[agr]/=Q,";
    var v922 = v959 + "/cg[acgturyswkmbdhvn]/=R,";
    var v881 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v823 = v881 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v823 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v608 = v737 + "/[tu]g[agr]/=W,";
    var v329 = v608 + "/[tu]a[atcuwmhy]/=Y,";
    return v329 + "/[tu]ag/=*"
  }
  var v609 = type$$26.toLowerCase();
  var v332 = v609 == "transl_table=15";
  if(v332) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1242 + "/ga[tcuy]/=D,";
    var v1206 = v1224 + "/ga[agr]/=E,";
    var v1187 = v1206 + "/[tu][tu][tcuy]/=F,";
    var v1167 = v1187 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1145 = v1167 + "/ca[tcuy]/=H,";
    var v1123 = v1145 + "/a[tu][atcuwmhy]/=I,";
    var v1101 = v1123 + "/aa[agr]/=K,";
    var v1076 = v1101 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1051 = v1076 + "/a[tu]g/=M,";
    var v1024 = v1051 + "/aa[tucy]/=N,";
    var v996 = v1024 + "/cc[acgturyswkmbdhvn]/=P,";
    var v960 = v996 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v923 = v960 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v882 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v824 = v882 + "/ac[acgturyswkmbdhvn]/=T,";
    var v738 = v824 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v610 = v738 + "/[tu]gg/=W,";
    var v331 = v610 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agr]a/=*"
  }
  var v611 = type$$26.toLowerCase();
  var v334 = v611 == "transl_table=16";
  if(v334) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1243 + "/ga[tcuy]/=D,";
    var v1207 = v1225 + "/ga[agr]/=E,";
    var v1188 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1168 = v1188 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1146 = v1168 + "/ca[tcuy]/=H,";
    var v1124 = v1146 + "/a[tu][atcuwmhy]/=I,";
    var v1102 = v1124 + "/aa[agr]/=K,";
    var v1077 = v1102 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1052 = v1077 + "/a[tu]g/=M,";
    var v1025 = v1052 + "/aa[tucy]/=N,";
    var v997 = v1025 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v997 + "/ca[agr]/=Q,";
    var v924 = v961 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v883 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v825 = v883 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v825 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v612 = v739 + "/[tu]gg/=W,";
    var v333 = v612 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agr]a/=*"
  }
  var v613 = type$$26.toLowerCase();
  var v336 = v613 == "transl_table=21";
  if(v336) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1244 + "/ga[tcuy]/=D,";
    var v1208 = v1226 + "/ga[agr]/=E,";
    var v1189 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1169 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1147 = v1169 + "/ca[tcuy]/=H,";
    var v1125 = v1147 + "/a[tu][tcuy]/=I,";
    var v1103 = v1125 + "/aag/=K,";
    var v1078 = v1103 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1053 = v1078 + "/a[tu][agr]/=M,";
    var v1026 = v1053 + "/aa[atcuwmhy]/=N,";
    var v998 = v1026 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v998 + "/ca[agr]/=Q,";
    var v925 = v962 + "/cg[acgturyswkmbdhvn]/=R,";
    var v884 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v826 = v884 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v826 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v614 = v740 + "/[tu]g[agr]/=W,";
    var v335 = v614 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]/=*"
  }
  var v615 = type$$26.toLowerCase();
  var v338 = v615 == "transl_table=22";
  if(v338) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1245 + "/ga[tcuy]/=D,";
    var v1209 = v1227 + "/ga[agr]/=E,";
    var v1190 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1190 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1148 = v1170 + "/ca[tcuy]/=H,";
    var v1126 = v1148 + "/a[tu][atcuwmhy]/=I,";
    var v1104 = v1126 + "/aa[agr]/=K,";
    var v1079 = v1104 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1054 = v1079 + "/a[tu]g/=M,";
    var v1027 = v1054 + "/aa[tucy]/=N,";
    var v999 = v1027 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v999 + "/ca[agr]/=Q,";
    var v926 = v963 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v885 = v926 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v827 = v885 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v827 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v616 = v741 + "/[tu]gg/=W,";
    var v337 = v616 + "/[tu]a[ctuy]/=Y,";
    return v337 + "/[tu][agcrsmv]a/=*"
  }
  var v617 = type$$26.toLowerCase();
  var v340 = v617 == "transl_table=23";
  if(v340) {
    var v1246 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1228 = v1246 + "/ga[tcuy]/=D,";
    var v1210 = v1228 + "/ga[agr]/=E,";
    var v1191 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1171 + "/ca[tcuy]/=H,";
    var v1127 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1105 = v1127 + "/aa[agr]/=K,";
    var v1080 = v1105 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1055 = v1080 + "/a[tu]g/=M,";
    var v1028 = v1055 + "/aa[tucy]/=N,";
    var v1000 = v1028 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v1000 + "/ca[agr]/=Q,";
    var v927 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v886 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v828 = v886 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v828 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v618 = v742 + "/[tu]gg/=W,";
    var v339 = v618 + "/[tu]a[ctuy]/=Y,";
    return v339 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function transMap(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v619 = testScript();
  var v341 = v619 == false;
  if(v341) {
    return false
  }
  var v965 = theDocument.forms;
  var v928 = v965[0];
  var v887 = v928.elements;
  var v829 = v887[6];
  var v743 = v829.options;
  var v966 = theDocument.forms;
  var v929 = v966[0];
  var v888 = v929.elements;
  var v830 = v888[6];
  var v744 = v830.selectedIndex;
  var v620 = v743[v744];
  var v342 = v620.value;
  var geneticCode = getGeneticCodeString(v342);
  var v967 = theDocument.forms;
  var v930 = v967[0];
  var v889 = v930.elements;
  var v831 = v889[0];
  var v745 = checkFormElement(v831);
  var v621 = v745 == false;
  var v747 = !v621;
  if(v747) {
    var v1001 = theDocument.forms;
    var v968 = v1001[0];
    var v931 = v968.elements;
    var v890 = v931[0];
    var v832 = v890.value;
    var v746 = checkSequenceLength(v832, maxInput$$3);
    v621 = v746 == false
  }
  var v343 = v621;
  if(v343) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v622 = checkGeneticCode(geneticCode);
  var v344 = v622 == false;
  if(v344) {
    return false
  }
  openWindow("Translation Map");
  openPre();
  var v891 = theDocument.forms;
  var v833 = v891[0];
  var v748 = v833.elements;
  var v623 = v748[0];
  var v345 = v623.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v345);
  var i$$11 = 0;
  var v624 = arrayOfFasta$$1.length;
  var v353 = i$$11 < v624;
  for(;v353;) {
    var v346 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v346);
    var v347 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v347);
    newDna = removeNonDna(newDna);
    var v348 = outputWindow.document;
    var v349 = getInfoFromTitleAndSequence(title$$9, newDna);
    v348.write(v349);
    var v969 = theDocument.forms;
    var v932 = v969[0];
    var v892 = v932.elements;
    var v834 = v892[4];
    var v749 = v834.options;
    var v970 = theDocument.forms;
    var v933 = v970[0];
    var v893 = v933.elements;
    var v835 = v893[4];
    var v750 = v835.selectedIndex;
    var v625 = v749[v750];
    var v350 = v625.value;
    var v971 = theDocument.forms;
    var v934 = v971[0];
    var v894 = v934.elements;
    var v836 = v894[5];
    var v751 = v836.options;
    var v972 = theDocument.forms;
    var v935 = v972[0];
    var v895 = v935.elements;
    var v837 = v895[5];
    var v752 = v837.selectedIndex;
    var v626 = v751[v752];
    var v351 = v626.value;
    layoutTranslation(newDna, geneticCode, v350, v351);
    var v352 = outputWindow.document;
    v352.write("\n\n");
    i$$11 = i$$11 + 1;
    var v627 = arrayOfFasta$$1.length;
    v353 = i$$11 < v627
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function layoutTranslation(dnaSequence$$3, geneticCode$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var textLayout = new TextLayout;
  var v628 = readingFrame == "3";
  var v753 = !v628;
  if(v753) {
    v628 = readingFrame == "all_three"
  }
  var v355 = v628;
  if(v355) {
    var translation = new TranslationComponent;
    var v838 = dnaSequence$$3.length;
    var v754 = dnaSequence$$3.substring(2, v838);
    var v629 = translate(v754, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v354 = "  " + v629;
    translation.setCharacters(v354);
    textLayout.addComponent(translation)
  }
  var v630 = readingFrame == "2";
  var v755 = !v630;
  if(v755) {
    v630 = readingFrame == "all_three"
  }
  var v357 = v630;
  if(v357) {
    translation = new TranslationComponent;
    var v839 = dnaSequence$$3.length;
    var v756 = dnaSequence$$3.substring(1, v839);
    var v631 = translate(v756, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v356 = " " + v631;
    translation.setCharacters(v356);
    textLayout.addComponent(translation)
  }
  var v632 = readingFrame == "1";
  var v757 = !v632;
  if(v757) {
    v632 = readingFrame == "all_three"
  }
  var v359 = v632;
  if(v359) {
    translation = new TranslationComponent;
    var v358 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v358);
    textLayout.addComponent(translation)
  }
  var v361 = readingFrame == "uppercase";
  if(v361) {
    translation = new UppercaseTranslationComponent;
    var v360 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v360);
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
  var v362 = complement(dnaSequence$$3);
  dna.setCharacters(v362);
  textLayout.addComponent(dna);
  var i$$12 = 0;
  var v633 = dnaSequence$$3.length;
  var v364 = i$$12 < v633;
  for(;v364;) {
    var v363 = i$$12 + basesPerLine;
    textLayout.writeLayout(i$$12, v363);
    i$$12 = i$$12 + basesPerLine;
    var v634 = dnaSequence$$3.length;
    v364 = i$$12 < v634
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v365 = " " + p1$$2;
    return v365 + " "
  }
  var v758 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v635 = v758.length;
  var v366 = v635 < 3;
  if(v366) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v636 = geneticCodeMatchExp$$3.length;
  var v369 = i$$13 < v636;
  for(;v369;) {
    var v367 = geneticCodeMatchExp$$3[i$$13];
    var v368 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = dnaSequence$$4.replace(v367, v368);
    i$$13 = i$$13 + 1;
    var v637 = geneticCodeMatchExp$$3.length;
    v369 = i$$13 < v637
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$10, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v936 = " " + p1$$3;
    var v896 = v936 + p3;
    var v840 = v896 + p5;
    var v759 = v840 + " ";
    var v638 = v759 + p2;
    var v370 = v638 + p4;
    return v370 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v760 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v639 = v760.length;
  var v371 = v639 < 3;
  if(v371) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v640 = geneticCodeMatchExp$$4.length;
  var v374 = i$$14 < v640;
  for(;v374;) {
    var v372 = geneticCodeMatchExp$$4[i$$14];
    var v373 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = dnaSequence$$5.replace(v372, v373);
    i$$14 = i$$14 + 1;
    var v641 = geneticCodeMatchExp$$4.length;
    v374 = i$$14 < v641
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function writeLayout(start$$4, stop) {
  var i$$15 = 0;
  var v761 = this.components;
  var v642 = v761.length;
  var v376 = i$$15 < v642;
  for(;v376;) {
    var v643 = this.components;
    var v375 = v643[i$$15];
    v375.writeLayoutComponent(start$$4, stop);
    i$$15 = i$$15 + 1;
    var v762 = this.components;
    var v644 = v762.length;
    v376 = i$$15 < v644
  }
  return
}
function addComponent(component) {
  var v377 = this.components;
  v377.push(component);
  return
}
function TextLayout() {
  var v1345 = new Array;
  this.components = v1345;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v645 = text$$14.search(/./);
  var v378 = v645 != -1;
  if(v378) {
    var v1346 = text$$14.match(/./g);
    this.characters = v1346
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v379 = this.characters;
  var rangeToCheck = v379.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v646 = rangeToCheck.search(/\w/);
  var v380 = v646 == -1;
  if(v380) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1347 = new Array;
  this.characters = v1347;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1348 = new Array;
  this.characters = v1348;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1349 = new Array;
  this.characters = v1349;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1350 = new Array;
  this.characters = v1350;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1351 = new Array;
  this.characters = v1351;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$13, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v381 = count$$6 == 0;
    if(v381) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v382 = this.characters;
  var sequence$$18 = v382.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$18 = sequence$$18.replace(/(.{1,10})/g, v4);
  var v1352 = sequence$$18.match(/./g);
  this.characters = v1352;
  return
}
new TextLayout;
var v383 = TextLayout.prototype;
v383.writeLayout = writeLayout;
var v384 = TextLayout.prototype;
v384.addComponent = addComponent;
new LayoutComponent;
var v385 = LayoutComponent.prototype;
v385.writeLayoutComponent = writeLayoutComponent;
var v386 = LayoutComponent.prototype;
v386.setCharacters = setCharacters;
var v387 = LayoutComponent.prototype;
v387.isRoom = isRoom;
var v1353 = new LayoutComponent;
TranslationComponent.prototype = v1353;
var v388 = TranslationComponent.prototype;
v388.writeLayoutComponent = v5;
var v1354 = new LayoutComponent;
UppercaseTranslationComponent.prototype = v1354;
var v389 = UppercaseTranslationComponent.prototype;
v389.writeLayoutComponent = v6;
var v1355 = new LayoutComponent;
DnaComponent.prototype = v1355;
var v390 = DnaComponent.prototype;
v390.writeLayoutComponent = v7;
var v1356 = new LayoutComponent;
RulerComponent.prototype = v1356;
var v391 = RulerComponent.prototype;
v391.writeLayoutComponent = v10;
new RulerComponent;
var v392 = RulerComponent.prototype;
v392.buildRuler = buildRuler;
document.onload = v11;
var v393 = document.getElementById("submitbtn");
v393.onclick = v12;
var v394 = document.getElementById("clearbtn");
v394.onclick = v13;

}

JAM.stopProfile('load');

