function v4() {
  var v701 = document.forms;
  var v590 = v701[0];
  var v344 = v590.elements;
  var v5 = v344[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignProp(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v345 = document.main_form;
  var v7 = v345.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p15) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v346 = arrayOfSequences.length;
  var v9 = v346 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v347 = arrayOfTitles.length;
  var v11 = i$$1 < v347;
  for (;v11;) {
    var v771 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v702 = v771.search(/\S/)
    }
    var v591 = v702 == -1;
    var v704 = !v591;
    if (v704) {
      var v772 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v703 = v772.search(/\S/)
      }
      v591 = v703 == -1;
    }
    var v348 = v591;
    var v593 = !v348;
    if (v593) {
      var v705 = arrayOfSequences[i$$1];
      var v592 = v705.length;
      v348 = v592 != lengthOfAlign;
    }
    var v10 = v348;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v349 = arrayOfTitles.length;
    v11 = i$$1 < v349;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v812 = codonTable.search(/AmAcid/)
  }
  var v773 = v812 == -1;
  var v814 = !v773;
  if (v814) {
    introspect(JAM.policy.p16) {
      var v813 = codonTable.search(/Codon/)
    }
    v773 = v813 == -1;
  }
  var v706 = v773;
  var v775 = !v706;
  if (v775) {
    introspect(JAM.policy.p16) {
      var v774 = codonTable.search(/Number/)
    }
    v706 = v774 == -1;
  }
  var v594 = v706;
  var v708 = !v594;
  if (v708) {
    introspect(JAM.policy.p16) {
      var v707 = codonTable.search(/\/1000/)
    }
    v594 = v707 == -1;
  }
  var v350 = v594;
  var v596 = !v350;
  if (v596) {
    introspect(JAM.policy.p16) {
      var v595 = codonTable.search(/Fraction\s*\.\./)
    }
    v350 = v595 == -1;
  }
  var v12 = v350;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v597 = formElement.value;
  introspect(JAM.policy.p16) {
    var v351 = v597.search(/\S/)
  }
  var v13 = v351 == -1;
  if (v13) {
    alert("Please enter some text.");
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v352 = arrayOfPatterns.length;
  var v16 = z$$2 < v352;
  for (;v16;) {
    var v598 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v353 = v598.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v353 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v599 = arrayOfPatterns[z$$2];
    var v354 = moreExpressionCheck(v599);
    var v15 = v354 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v355 = arrayOfPatterns.length;
    v16 = z$$2 < v355;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v356 = arrayOfPatterns.length;
  var v22 = j < v356;
  for (;v22;) {
    var v600 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v357 = v600.match(/\/.+\//)
    }
    var v19 = v357 + "gi";
    var v915 = eval(v19);
    geneticCodeMatchExp[j] = v915;
    var v358 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v358.match(/=[a-zA-Z\*]/)
    }
    var v916 = v20.toString();
    geneticCodeMatchResult[j] = v916;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v917 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v917;
    j++;
    var v359 = arrayOfPatterns.length;
    v22 = j < v359;
  }
  var i$$2 = 0;
  var v601 = testSequence.length;
  var v360 = v601 - 3;
  var v29 = i$$2 <= v360;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v361 = geneticCodeMatchExp.length;
    var v27 = j < v361;
    for (;v27;) {
      var v602 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v362 = codon.search(v602)
      }
      var v26 = v362 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v363 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v363 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v364 = geneticCodeMatchExp.length;
      v27 = j < v364;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v603 = testSequence.length;
    var v365 = v603 - 3;
    v29 = i$$2 <= v365;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v366 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v366;
  for (;v31;) {
    var v604 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v367 = v604.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v367 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v368 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v368;
  }
  var i$$3 = 0;
  var v369 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v369;
  for (;v35;) {
    var v605 = arrayOfPatterns$$1[i$$3];
    var v370 = "[" + v605;
    var v32 = v370 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v371 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v371;
    for (;v34;) {
      var v606 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v372 = v606.search(re)
      }
      var v33 = v372 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v373 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v373;
    }
    i$$3++;
    var v374 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v374;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v375 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v375;
  for (;v38;) {
    var v607 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v376 = v607.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v376 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v608 = arrayOfPatterns$$2[z$$4];
    var v377 = moreExpressionCheck(v608);
    var v37 = v377 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v378 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v378;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v709 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v609 = v709.replace(/[^A-Za-z]/g, "")
  }
  var v379 = v609.length;
  var v40 = v379 > maxInput;
  if (v40) {
    var v380 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v380 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v381 = text$$8.length;
  var v42 = v381 > maxInput$$1;
  if (v42) {
    var v382 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v382 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v43 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v383 = alignArray.length;
  var v49 = v383 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v384 = alignArray.length;
  var v51 = i$$4 < v384;
  for (;v51;) {
    var v610 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v385 = v610.search(/[^\s]+\s/)
    }
    var v50 = v385 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v386 = alignArray.length;
    v51 = i$$4 < v386;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p15) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p15) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p16) {
    var v387 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v387 != -1;
  if (v54) {
    introspect(JAM.policy.p17) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p17) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v388 = sequence$$2.length;
  var v55 = "&gt;results for " + v388;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v389 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v389 != -1;
  if (v57) {
    var v390 = stringToReturn + '"';
    var v56 = v390 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v391 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v392 = sequence$$2.substring(0, 10)
  }
  var v58 = v391 + v392;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v393 = sequenceOne.length;
  var v59 = "Search results for " + v393;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v394 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v394 != -1;
  if (v61) {
    var v395 = stringToReturn$$1 + '"';
    var v60 = v395 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v396 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v397 = sequenceOne.substring(0, 10)
  }
  var v62 = v396 + v397;
  stringToReturn$$1 = v62 + '"\n';
  var v398 = stringToReturn$$1 + "and ";
  var v399 = sequenceTwo.length;
  var v63 = v398 + v399;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v400 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v400 != -1;
  if (v65) {
    var v401 = stringToReturn$$1 + '"';
    var v64 = v401 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v402 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v403 = sequenceTwo.substring(0, 10)
  }
  var v66 = v402 + v403;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v404 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v404;
  for (;v70;) {
    var v611 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v405 = v611.match(/\/.+\//)
    }
    var v69 = v405 + "gi";
    var v918 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v918;
    j$$2++;
    var v406 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v406;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v407 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v407;
  for (;v74;) {
    var v408 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v408.match(/=[a-zA-Z\*]/)
    }
    var v919 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v919;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v920 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v920;
    j$$3++;
    var v409 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v409;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v410 = sequence$$3.length;
  var v75 = "Results for " + v410;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v411 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v411 != -1;
  if (v77) {
    var v412 = stringToReturn$$2 + '"';
    var v76 = v412 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v413 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v414 = sequence$$3.substring(0, 10)
  }
  var v78 = v413 + v414;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v612 = "Results for " + topology;
  var v415 = v612 + " ";
  var v416 = sequence$$4.length;
  var v80 = v415 + v416;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v417 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v417 != -1;
  if (v82) {
    var v418 = stringToReturn$$3 + '"';
    var v81 = v418 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v419 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v420 = sequence$$4.substring(0, 10)
  }
  var v83 = v419 + v420;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v421 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v421;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v422 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v422 != -1;
  if (v87) {
    var v423 = stringToReturn$$4 + '"';
    var v86 = v423 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v424 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v425 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v424 + v425;
  stringToReturn$$4 = v88 + '"\n';
  var v426 = stringToReturn$$4 + "and ";
  var v427 = sequenceTwo$$1.length;
  var v89 = v426 + v427;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v428 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v428 != -1;
  if (v91) {
    var v429 = stringToReturn$$4 + '"';
    var v90 = v429 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v430 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v431 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v430 + v431;
  stringToReturn$$4 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$4;
  return v93 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    var v432 = Math.random();
    var v433 = components.length;
    var v94 = v432 * v433;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p10) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v434 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v434 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v435 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v435 != -1;
  if (v98) {
    introspect(JAM.policy.p15) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p16) {
    var v893 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v886 = v893 != -1;
  var v895 = !v886;
  if (v895) {
    introspect(JAM.policy.p16) {
      var v894 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v886 = v894 != -1;
  }
  var v877 = v886;
  var v888 = !v877;
  if (v888) {
    introspect(JAM.policy.p16) {
      var v887 = expressionToCheck.search(/\[\]/)
    }
    v877 = v887 != -1;
  }
  var v868 = v877;
  var v879 = !v868;
  if (v879) {
    introspect(JAM.policy.p16) {
      var v878 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v868 = v878 != -1;
  }
  var v855 = v868;
  var v870 = !v855;
  if (v870) {
    introspect(JAM.policy.p16) {
      var v869 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v855 = v869 != -1;
  }
  var v835 = v855;
  var v857 = !v835;
  if (v857) {
    introspect(JAM.policy.p16) {
      var v856 = expressionToCheck.search(/\|\|/)
    }
    v835 = v856 != -1;
  }
  var v815 = v835;
  var v837 = !v815;
  if (v837) {
    introspect(JAM.policy.p16) {
      var v836 = expressionToCheck.search(/\/\|/)
    }
    v815 = v836 != -1;
  }
  var v776 = v815;
  var v817 = !v776;
  if (v817) {
    introspect(JAM.policy.p16) {
      var v816 = expressionToCheck.search(/\|\//)
    }
    v776 = v816 != -1;
  }
  var v710 = v776;
  var v778 = !v710;
  if (v778) {
    introspect(JAM.policy.p16) {
      var v777 = expressionToCheck.search(/\[.\]/)
    }
    v710 = v777 != -1;
  }
  var v613 = v710;
  var v712 = !v613;
  if (v712) {
    introspect(JAM.policy.p16) {
      var v711 = expressionToCheck.search(/\</)
    }
    v613 = v711 != -1;
  }
  var v436 = v613;
  var v615 = !v436;
  if (v615) {
    introspect(JAM.policy.p16) {
      var v614 = expressionToCheck.search(/\>/)
    }
    v436 = v614 != -1;
  }
  var v99 = v436;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v713 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v616 = v713 + "<head>\n";
  var v437 = v616 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v437 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v908 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v904 = v908 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v900 = v904 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v896 = v900 + "div.info {font-weight: bold}\n";
    var v889 = v896 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v880 = v889 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v871 = v880 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v858 = v871 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v838 = v858 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v818 = v838 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v779 = v818 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v714 = v779 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v617 = v714 + "td.many {color: #000000}\n";
    var v438 = v617 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v438 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v912 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v909 = v912 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v905 = v909 + "div.title {display: none}\n";
    var v901 = v905 + "div.info {font-weight: bold}\n";
    var v897 = v901 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v890 = v897 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v881 = v890 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v872 = v881 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v872 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v839 = v859 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v819 = v839 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v780 = v819 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v715 = v780 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v715 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v439 = v618 + "img {display: none}\n";
    var v109 = v439 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v716 = "</head>\n" + '<body class="main">\n';
  var v619 = v716 + '<div class="title">';
  var v440 = v619 + title$$6;
  var v111 = v440 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v110.write(v111);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v717 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v620 = v717 + "<head>\n";
  var v441 = v620 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v441 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v910 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v906 = v910 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v902 = v906 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v898 = v902 + "div.info {font-weight: bold}\n";
    var v891 = v898 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v882 = v891 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v873 = v882 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v860 = v873 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v840 = v860 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v820 = v840 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v781 = v820 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v718 = v781 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v621 = v718 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v442 = v621 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v442 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v914 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v913 = v914 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v911 = v913 + "div.title {display: none}\n";
    var v907 = v911 + "div.info {font-weight: bold}\n";
    var v903 = v907 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v899 = v903 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v892 = v899 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v883 = v892 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v874 = v883 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v861 = v874 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v841 = v861 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v821 = v841 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v782 = v821 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v719 = v782 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v622 = v719 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v443 = v622 + "img {display: none}\n";
    var v117 = v443 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v720 = "</head>\n" + '<body class="main">\n';
  var v623 = v720 + '<div class="title">';
  var v444 = v623 + title$$8;
  var v119 = v444 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p15) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p15) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p15) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p15) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p15) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p15) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p15) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p15) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p15) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p16) {
    var v445 = dnaSequence$$1.search(/./)
  }
  var v120 = v445 != -1;
  if (v120) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p10) {
      dnaSequence$$1 = tempDnaArray.join("");
    }
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
  }
  var v122 = tempString + theNumber;
  theNumber = v122 + " ";
  var v123 = sequenceToAppend + theNumber;
  sequenceToAppend = v123 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v446 = testArray[0];
  var v124 = v446 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v447 = testString.search(re$$2)
  }
  var v125 = v447 == -1;
  if (v125) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p11) {
    var v448 = testNum.toFixed(3)
  }
  var v128 = v448 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v449 = testNum.toPrecision(5)
  }
  var v129 = v449 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v450 = theNumber$$1.search(/\d/)
  }
  var v130 = v450 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v783 = emblFile.search(/ID/)
  }
  var v721 = v783 == -1;
  var v785 = !v721;
  if (v785) {
    introspect(JAM.policy.p16) {
      var v784 = emblFile.search(/AC/)
    }
    v721 = v784 == -1;
  }
  var v624 = v721;
  var v723 = !v624;
  if (v723) {
    introspect(JAM.policy.p16) {
      var v722 = emblFile.search(/DE/)
    }
    v624 = v722 == -1;
  }
  var v451 = v624;
  var v626 = !v451;
  if (v626) {
    introspect(JAM.policy.p16) {
      var v625 = emblFile.search(/SQ/)
    }
    v451 = v625 == -1;
  }
  var v131 = v451;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v452 = theNumber$$2.search(/\d/)
  }
  var v132 = v452 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v453 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v453 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v454 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v454 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v455 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v455 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v786 = genBankFile.search(/LOCUS/)
  }
  var v724 = v786 == -1;
  var v788 = !v724;
  if (v788) {
    introspect(JAM.policy.p16) {
      var v787 = genBankFile.search(/DEFINITION/)
    }
    v724 = v787 == -1;
  }
  var v627 = v724;
  var v726 = !v627;
  if (v726) {
    introspect(JAM.policy.p16) {
      var v725 = genBankFile.search(/ACCESSION/)
    }
    v627 = v725 == -1;
  }
  var v456 = v627;
  var v629 = !v456;
  if (v629) {
    introspect(JAM.policy.p16) {
      var v628 = genBankFile.search(/ORIGIN/)
    }
    v456 = v628 == -1;
  }
  var v137 = v456;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v789 = genBankFile$$1.search(/LOCUS/)
  }
  var v727 = v789 == -1;
  var v791 = !v727;
  if (v791) {
    introspect(JAM.policy.p16) {
      var v790 = genBankFile$$1.search(/DEFINITION/)
    }
    v727 = v790 == -1;
  }
  var v630 = v727;
  var v729 = !v630;
  if (v729) {
    introspect(JAM.policy.p16) {
      var v728 = genBankFile$$1.search(/ACCESSION/)
    }
    v630 = v728 == -1;
  }
  var v457 = v630;
  var v632 = !v457;
  if (v632) {
    introspect(JAM.policy.p16) {
      var v631 = genBankFile$$1.search(/ORIGIN/)
    }
    v457 = v631 == -1;
  }
  var v138 = v457;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v458 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v458 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v792 = emblFile$$1.search(/ID/)
  }
  var v730 = v792 == -1;
  var v794 = !v730;
  if (v794) {
    introspect(JAM.policy.p16) {
      var v793 = emblFile$$1.search(/AC/)
    }
    v730 = v793 == -1;
  }
  var v633 = v730;
  var v732 = !v633;
  if (v732) {
    introspect(JAM.policy.p16) {
      var v731 = emblFile$$1.search(/DE/)
    }
    v633 = v731 == -1;
  }
  var v459 = v633;
  var v635 = !v459;
  if (v635) {
    introspect(JAM.policy.p16) {
      var v634 = emblFile$$1.search(/SQ/)
    }
    v459 = v634 == -1;
  }
  var v140 = v459;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v460 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v460 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    var v142 = i$$5 + 1;
    lineOfText = rightNum(v142, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v461 = basePerLine / groupSize;
    var v145 = j$$6 <= v461;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v462 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v462)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v463 = basePerLine / groupSize;
      v145 = j$$6 <= v463;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v146.write(v147);
    }
    lineOfText = "";
    v148 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v464 = adjustment < 0;
    if (v464) {
      v464 = adjusted >= 0;
    }
    var v149 = v464;
    if (v149) {
      adjusted++;
    }
    return adjusted;
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v465 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v465;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v466 = i$$6 + k$$1;
        var v150 = v466 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v467 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v467)
        }
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v468 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v468, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v469 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v469;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v733 = adjustNumbering(lineNum, numberingAdjustment);
      var v636 = rightNum(v733, "", 8, tabIn$$3);
      var v470 = v636 + lineOfText$$1;
      var v160 = v470 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v734 = adjustNumbering(lineNum, numberingAdjustment);
        var v637 = rightNum(v734, "", 8, tabIn$$3);
        var v638 = complement(lineOfText$$1);
        var v471 = v637 + v638;
        var v162 = v471 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p10) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v639 = lineOfText$$1;
        var v640 = adjustNumbering(i$$6, numberingAdjustment);
        var v472 = v639 + v640;
        var v166 = v472 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v641 = complement(lineOfText$$1);
          var v642 = adjustNumbering(i$$6, numberingAdjustment);
          var v473 = v641 + v642;
          var v168 = v473 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p10) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v474 = complement(lineOfText$$1);
            var v176 = v474 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p10) {
              v177.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
  }
  return true;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v475 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v475;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v476 = i$$7 + k$$2;
        var v183 = v476 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v477 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v477)
        }
        lineOfText$$2 = lineOfText$$2 + v184;
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v187 = numberPosition$$2 == "above";
      if (v187) {
        var v186 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v186;
      }
      var v188 = i$$7 >= stopBase$$3;
      if (v188) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v478 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v478;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v643 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v479 = v643 + lineOfText$$2;
      var v191 = v479 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v480 = lineOfText$$2 + i$$7;
        var v193 = v480 + "\n";
        introspect(JAM.policy.p17) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v196.write(v197);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
  }
  return true;
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
  var v735 = sequence$$13.length;
  var v644 = v735 <= firstIndexToMutate;
  var v736 = !v644;
  if (v736) {
    v644 = lastIndexToMutate < 0;
  }
  var v481 = v644;
  var v645 = !v481;
  if (v645) {
    v481 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v481;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v482 = Math.random();
    var v203 = v482 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v483 = randNum < firstIndexToMutate;
    var v646 = !v483;
    if (v646) {
      v483 = randNum > lastIndexToMutate;
    }
    var v204 = v483;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v484 = Math.random();
      var v485 = components$$1.length;
      var v205 = v484 * v485;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v486 = components$$1.length;
      var v206 = componentsIndex == v486;
      if (v206) {
        componentsIndex = 0;
      }
      var v487 = components$$1[componentsIndex];
      var v207 = v487 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v488 = sequence$$13.substring(0, randNum)
    }
    var v489 = components$$1[componentsIndex];
    var v208 = v488 + v489;
    var v490 = randNum + 1;
    var v491 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v490, v491)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v211.write(v212);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v492 = Math.random();
    var v493 = components$$2.length;
    var v213 = v492 * v493;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v494 = sequence$$14.length;
    var v216 = v494 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v218.write(v219);
  }
  return true;
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
  var v223 = dnaConformation == "circular";
  if (v223) {
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v220.length;
    var v737 = sequence$$15.length;
    var v647 = v737 - lookAhead;
    var v648 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v495 = sequence$$15.substring(v647, v648)
    }
    var v221 = v495 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v738 = '<tr><td class="title" width="200px">' + "Site:";
  var v649 = v738 + '</td><td class="title">';
  var v496 = v649 + "Positions:";
  var v226 = v496 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v497 = arrayOfItems.length;
  var v242 = i$$9 < v497;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v498 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v498.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v739 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v650 = v739.match(/\)\D*\d+/)
    }
    var v499 = v650.toString();
    introspect(JAM.policy.p15) {
      var v228 = v499.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v500 = matchPosition >= lowerLimit;
      if (v500) {
        v500 = matchPosition < upperLimit;
      }
      var v232 = v500;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v501 = matchPosition - shiftValue;
        var v231 = v501 + 1;
        tempString$$1 = v230 + v231;
      }
      var v502 = matchExp.lastIndex;
      var v651 = RegExp.lastMatch;
      var v503 = v651.length;
      var v233 = v502 - v503;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v504 = tempString$$1.search(/\d/)
    }
    var v235 = v504 != -1;
    if (v235) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v239 = timesFound == 0;
    if (v239) {
      backGroundClass = "none";
    } else {
      var v238 = timesFound == 1;
      if (v238) {
        backGroundClass = "one";
      } else {
        var v237 = timesFound == 2;
        if (v237) {
          backGroundClass = "two";
        } else {
          var v236 = timesFound == 3;
          if (v236) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v240 = outputWindow.document;
    var v862 = '<tr><td class="' + backGroundClass;
    var v842 = v862 + '">';
    var v884 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v875 = v884.match(/\([^\(]+\)/)
    }
    var v863 = v875.toString();
    introspect(JAM.policy.p15) {
      var v843 = v863.replace(/\(|\)/g, "")
    }
    var v822 = v842 + v843;
    var v795 = v822 + '</td><td class="';
    var v740 = v795 + backGroundClass;
    var v652 = v740 + '">';
    var v505 = v652 + tempString$$1;
    var v241 = v505 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v506 = arrayOfItems.length;
    v242 = i$$9 < v506;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v823 = '<tr><td class="title">' + "Pattern:";
  var v796 = v823 + '</td><td class="title">';
  var v741 = v796 + "Times found:";
  var v653 = v741 + '</td><td class="title">';
  var v507 = v653 + "Percentage:";
  var v246 = v507 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v508 = arrayOfItems$$1.length;
  var v255 = i$$10 < v508;
  for (;v255;) {
    var tempNumber = 0;
    var v509 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v509.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v510 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v510 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v654 = originalLength + 1;
    var v797 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v742 = v797.match(/\d+/)
    }
    var v655 = parseFloat(v742);
    var v511 = v654 - v655;
    var v252 = v511 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v512 = originalLength + 1;
      var v743 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v656 = v743.match(/\d+/)
      }
      var v513 = parseFloat(v656);
      var v251 = v512 - v513;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v885 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v876 = v885.match(/\([^\(]+\)\b/)
    }
    var v864 = v876.toString();
    introspect(JAM.policy.p15) {
      var v844 = v864.replace(/\(|\)/g, "")
    }
    var v824 = "<tr><td>" + v844;
    var v798 = v824 + "</td><td>";
    var v744 = v798 + tempNumber;
    var v657 = v744 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v658 = percentage.toFixed(2)
    }
    var v514 = v657 + v658;
    var v254 = v514 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v515 = arrayOfItems$$1.length;
    v255 = i$$10 < v515;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v256.write("</tbody></table>\n");
  }
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v516 = sequence$$17.length;
  var v263 = v516 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v517 = Math.random();
    var v257 = v517 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v518 = tempSeq.length;
    var v262 = v518 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v519 = sequence$$17.length;
    v263 = v519 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function colorAlignProp(theDocument) {
  var maxInput$$3 = 2E4;
  var v520 = testScript();
  var v266 = v520 == false;
  if (v266) {
    return false;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v845 = theDocument.forms;
  var v825 = v845[0];
  var v799 = v825.elements;
  var v745 = v799[0];
  var v659 = checkFormElement(v745);
  var v521 = v659 == false;
  var v661 = !v521;
  if (v661) {
    var v865 = theDocument.forms;
    var v846 = v865[0];
    var v826 = v846.elements;
    var v800 = v826[0];
    var v746 = v800.value;
    var v660 = checkTextLength(v746, maxInput$$3);
    v521 = v660 == false;
  }
  var v267 = v521;
  if (v267) {
    return false;
  }
  var v801 = theDocument.forms;
  var v747 = v801[0];
  var v662 = v747.elements;
  var v522 = v662[0];
  var v268 = v522.value;
  theAlignment = "X" + v268;
  introspect(JAM.policy.p16) {
    alignArray$$1 = theAlignment.split(/[>%#]/);
  }
  var v523 = earlyCheckAlign(alignArray$$1);
  var v269 = v523 == false;
  if (v269) {
    return false;
  }
  var i$$11 = 1;
  var v524 = alignArray$$1.length;
  var v279 = i$$11 < v524;
  for (;v279;) {
    var v270 = i$$11 - 1;
    var v525 = alignArray$$1[i$$11];
    introspect(JAM.policy.p16) {
      var v921 = v525.match(/[^\f\n\r]+[\f\n\r]/)
    }
    titleArray[v270] = v921;
    var v271 = i$$11 - 1;
    var v802 = i$$11 - 1;
    var v748 = titleArray[v802];
    var v663 = v748.toString();
    var v526 = filterFastaTitle(v663);
    introspect(JAM.policy.p15) {
      var v922 = v526.replace(/[\f\n\r]/g, "")
    }
    titleArray[v271] = v922;
    var v272 = i$$11 - 1;
    var v664 = i$$11 - 1;
    var v527 = titleArray[v664];
    introspect(JAM.policy.p13) {
      var v923 = v527.substring(0, 20)
    }
    titleArray[v272] = v923;
    var v276 = i$$11 == 1;
    if (v276) {
      var v528 = i$$11 - 1;
      var v273 = titleArray[v528];
      longestTitle = v273.length;
    } else {
      var v749 = i$$11 - 1;
      var v665 = titleArray[v749];
      var v529 = v665.length;
      var v275 = v529 > longestTitle;
      if (v275) {
        var v530 = i$$11 - 1;
        var v274 = titleArray[v530];
        longestTitle = v274.length;
      }
    }
    var v277 = i$$11 - 1;
    var v531 = alignArray$$1[i$$11];
    introspect(JAM.policy.p15) {
      var v924 = v531.replace(/[^\f\n\r]+[\f\n\r]/, "")
    }
    sequenceArray$$1[v277] = v924;
    var v278 = i$$11 - 1;
    var v666 = i$$11 - 1;
    var v532 = sequenceArray$$1[v666];
    var v925 = filterAlignSeq(v532);
    sequenceArray$$1[v278] = v925;
    i$$11++;
    var v533 = alignArray$$1.length;
    v279 = i$$11 < v533;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v534 = titleArray.length;
  var v283 = i$$11 < v534;
  for (;v283;) {
    var v667 = titleArray[i$$11];
    var v535 = v667.length;
    var v282 = v535 < longestTitle;
    if (v282) {
      var v280 = titleArray[i$$11];
      var v750 = titleArray[i$$11];
      var v668 = v750.length;
      var v536 = longestTitle - v668;
      introspect(JAM.policy.p13) {
        var v281 = spaceString.substring(0, v536)
      }
      titleArray[i$$11] = v280 + v281;
    }
    i$$11++;
    var v537 = titleArray.length;
    v283 = i$$11 < v537;
  }
  var v538 = checkAlign(titleArray, sequenceArray$$1);
  var v284 = v538 == false;
  if (v284) {
    return false;
  }
  introspect(JAM.policy.p15) {
    var v285 = "GAVLI, FYW, CM, ST, KRH, DE, NQ, P".replace(/\s/g, "")
  }
  groupString = v285.toUpperCase();
  introspect(JAM.policy.p16) {
    arrayOfGroups = groupString.split(/,/);
  }
  var v539 = checkGroupInput(arrayOfGroups);
  var v286 = v539 == false;
  if (v286) {
    return false;
  }
  var isBackground$$1;
  var v866 = theDocument.forms;
  var v847 = v866[0];
  var v827 = v847.elements;
  var v803 = v827[6];
  var v751 = v803.options;
  var v867 = theDocument.forms;
  var v848 = v867[0];
  var v828 = v848.elements;
  var v804 = v828[6];
  var v752 = v804.selectedIndex;
  var v669 = v751[v752];
  var v540 = v669.value;
  var v287 = v540 == "background";
  if (v287) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Properties", isBackground$$1);
  openPre();
  var v288 = outputWindow.document;
  var v541 = '<span class="g">' + "G, A, V, L, I";
  var v289 = v541 + "</span>\n";
  introspect(JAM.policy.p17) {
    v288.write(v289);
  }
  var v290 = outputWindow.document;
  var v542 = '<span class="f">' + "F, Y, W";
  var v291 = v542 + "</span>\n";
  introspect(JAM.policy.p17) {
    v290.write(v291);
  }
  var v292 = outputWindow.document;
  var v543 = '<span class="c">' + "C, M";
  var v293 = v543 + "</span>\n";
  introspect(JAM.policy.p17) {
    v292.write(v293);
  }
  var v294 = outputWindow.document;
  var v544 = '<span class="s">' + "S, T";
  var v295 = v544 + "</span>\n";
  introspect(JAM.policy.p17) {
    v294.write(v295);
  }
  var v296 = outputWindow.document;
  var v545 = '<span class="k">' + "K, R, H";
  var v297 = v545 + "</span>\n";
  introspect(JAM.policy.p17) {
    v296.write(v297);
  }
  var v298 = outputWindow.document;
  var v546 = '<span class="d">' + "D, E";
  var v299 = v546 + "</span>\n";
  introspect(JAM.policy.p17) {
    v298.write(v299);
  }
  var v300 = outputWindow.document;
  var v547 = '<span class="q">' + "N, Q";
  var v301 = v547 + "</span>\n";
  introspect(JAM.policy.p17) {
    v300.write(v301);
  }
  var v302 = outputWindow.document;
  var v548 = '<span class="p">' + "P";
  var v303 = v548 + "</span>\n";
  introspect(JAM.policy.p17) {
    v302.write(v303);
  }
  var v304 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v304.write("\n");
  }
  var v849 = theDocument.forms;
  var v829 = v849[0];
  var v805 = v829.elements;
  var v753 = v805[4];
  var v670 = v753.options;
  var v850 = theDocument.forms;
  var v830 = v850[0];
  var v806 = v830.elements;
  var v754 = v806[4];
  var v671 = v754.selectedIndex;
  var v549 = v670[v671];
  var v305 = v549.value;
  var v851 = theDocument.forms;
  var v831 = v851[0];
  var v807 = v831.elements;
  var v755 = v807[5];
  var v672 = v755.options;
  var v852 = theDocument.forms;
  var v832 = v852[0];
  var v808 = v832.elements;
  var v756 = v808[5];
  var v673 = v756.selectedIndex;
  var v550 = v672[v673];
  var v306 = v550.value;
  var v809 = theDocument.forms;
  var v757 = v809[0];
  var v674 = v757.elements;
  var v551 = v674[7];
  var v307 = v551.value;
  colorAlign(titleArray, sequenceArray$$1, v305, v306, arrayOfGroups, v307, longestTitle);
  closePre();
  closeWindow();
  return true;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v308 = arrayOfSequences$$1.length;
  var positions = new Array(v308);
  introspect(JAM.policy.p16) {
    var v552 = definedStarts.search(/\S/)
  }
  var v309 = v552 == -1;
  if (v309) {
    definedStarts = "0,0";
  }
  introspect(JAM.policy.p16) {
    var definedStartsArray = definedStarts.split(/,/)
  }
  var i$$12 = 0;
  var v553 = positions.length;
  var v313 = i$$12 < v553;
  for (;v313;) {
    var v554 = definedStartsArray.length;
    var v312 = i$$12 >= v554;
    if (v312) {
      positions[i$$12] = 0;
    } else {
      var v675 = definedStartsArray[i$$12];
      introspect(JAM.policy.p16) {
        var v555 = v675.search(/\d/)
      }
      var v311 = v555 != -1;
      if (v311) {
        var v556 = definedStartsArray[i$$12];
        introspect(JAM.policy.p15) {
          var v310 = v556.replace(/[^\d\-]/g, "")
        }
        var v926 = parseInt(v310);
        positions[i$$12] = v926;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v557 = positions.length;
    v313 = i$$12 < v557;
  }
  var totalBasesShown = 0;
  var v314 = parseInt(consensus);
  consensus = v314 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v558 = arrayOfColumns.length;
  var v316 = i$$12 < v558;
  for (;v316;) {
    var v315 = arrayOfSequences$$1.length;
    var v927 = new Array(v315);
    arrayOfColumns[i$$12] = v927;
    i$$12++;
    var v559 = arrayOfColumns.length;
    v316 = i$$12 < v559;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v676 = arrayOfSequences$$1[0];
  var v560 = v676.length;
  var v341 = totalBasesShown < v560;
  for (;v341;) {
    var jj = 0;
    var v561 = arrayOfSequences$$1.length;
    var v339 = jj < v561;
    for (;v339;) {
      var v562 = arrayOfTitles$$1[jj];
      var v317 = output + v562;
      output = v317 + " ";
      var v677 = totalBasesShown + basePerLine$$4;
      var v563 = i$$12 < v677;
      if (v563) {
        var v758 = arrayOfSequences$$1[0];
        var v678 = v758.length;
        v563 = i$$12 < v678;
      }
      var v334 = v563;
      for (;v334;) {
        var v320 = jj == 0;
        if (v320) {
          var k$$3 = 0;
          var v564 = arrayOfSequences$$1.length;
          var v319 = k$$3 < v564;
          for (;v319;) {
            var v318 = arrayOfColumns[columnCount];
            var v565 = arrayOfSequences$$1[k$$3];
            introspect(JAM.policy.p17) {
              var v928 = v565.charAt(i$$12)
            }
            v318[k$$3] = v928;
            k$$3++;
            var v566 = arrayOfSequences$$1.length;
            v319 = k$$3 < v566;
          }
        }
        var v759 = arrayOfSequences$$1[jj];
        introspect(JAM.policy.p17) {
          var v679 = v759.charAt(i$$12)
        }
        var v567 = v679 == ".";
        var v681 = !v567;
        if (v681) {
          var v760 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v680 = v760.charAt(i$$12)
          }
          v567 = v680 == "-";
        }
        var v322 = v567;
        if (v322) {
          var v568 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v321 = v568.charAt(i$$12)
          }
          output = output + v321;
          i$$12 = i$$12 + 1;
          columnCount++;
          var v682 = totalBasesShown + basePerLine$$4;
          var v569 = i$$12 < v682;
          if (v569) {
            var v761 = arrayOfSequences$$1[0];
            var v683 = v761.length;
            v569 = i$$12 < v683;
          }
          v334 = v569;
          continue;
        }
        var v323 = arrayOfColumns[columnCount];
        introspect(JAM.policy.p10) {
          columnSeq = v323.join(",");
        }
        var v570 = arrayOfSequences$$1[jj];
        introspect(JAM.policy.p17) {
          var v324 = v570.charAt(i$$12)
        }
        re$$3 = new RegExp(v324, "gi");
        introspect(JAM.policy.p17) {
          var v762 = columnSeq.match(re$$3)
        }
        var v684 = v762.length;
        var v685 = arrayOfSequences$$1.length;
        var v571 = v684 / v685;
        var v326 = v571 >= consensus;
        if (v326) {
          var v763 = output + '<span class="';
          var v853 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v833 = v853.charAt(i$$12)
          }
          var v810 = v833.toString();
          var v764 = v810.toLowerCase();
          var v686 = v763 + v764;
          var v572 = v686 + '">';
          var v687 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v573 = v687.charAt(i$$12)
          }
          var v325 = v572 + v573;
          output = v325 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v688 = totalBasesShown + basePerLine$$4;
          var v574 = i$$12 < v688;
          if (v574) {
            var v765 = arrayOfSequences$$1[0];
            var v689 = v765.length;
            v574 = i$$12 < v689;
          }
          v334 = v574;
          continue;
        }
        result = 1;
        var m = 0;
        var v575 = arrayOfGroups$$1.length;
        var v330 = m < v575;
        for (;v330;) {
          var v690 = arrayOfGroups$$1[m];
          introspect(JAM.policy.p17) {
            var v576 = v690.search(re$$3)
          }
          var v329 = v576 != -1;
          if (v329) {
            var v691 = arrayOfGroups$$1[m];
            var v577 = "[" + v691;
            var v327 = v577 + "]";
            re$$3 = new RegExp(v327, "gi");
            introspect(JAM.policy.p17) {
              var v328 = columnSeq.match(re$$3)
            }
            result = v328.length;
            break;
          }
          m++;
          var v578 = arrayOfGroups$$1.length;
          v330 = m < v578;
        }
        var v692 = arrayOfSequences$$1.length;
        var v579 = result / v692;
        var v332 = v579 >= consensus;
        if (v332) {
          var v766 = output + '<span class="';
          var v854 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v834 = v854.charAt(i$$12)
          }
          var v811 = v834.toString();
          var v767 = v811.toLowerCase();
          var v693 = v766 + v767;
          var v580 = v693 + '">';
          var v694 = arrayOfSequences$$1[jj];
          introspect(JAM.policy.p17) {
            var v581 = v694.charAt(i$$12)
          }
          var v331 = v580 + v581;
          output = v331 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v695 = totalBasesShown + basePerLine$$4;
          var v582 = i$$12 < v695;
          if (v582) {
            var v768 = arrayOfSequences$$1[0];
            var v696 = v768.length;
            v582 = i$$12 < v696;
          }
          v334 = v582;
          continue;
        }
        var v583 = arrayOfSequences$$1[jj];
        introspect(JAM.policy.p17) {
          var v333 = v583.charAt(i$$12)
        }
        output = output + v333;
        i$$12 = i$$12 + 1;
        columnCount++;
        var v697 = totalBasesShown + basePerLine$$4;
        var v584 = i$$12 < v697;
        if (v584) {
          var v769 = arrayOfSequences$$1[0];
          var v698 = v769.length;
          v584 = i$$12 < v698;
        }
        v334 = v584;
      }
      var v335 = positions[jj];
      var v770 = arrayOfSequences$$1[jj];
      introspect(JAM.policy.p27) {
        var v699 = v770.substring(totalBasesShown, i$$12)
      }
      introspect(JAM.policy.p15) {
        var v585 = v699.replace(/\.|\-/g, "")
      }
      var v336 = v585.length;
      positions[jj] = v335 + v336;
      var v586 = output + " ";
      var v587 = positions[jj];
      var v337 = v586 + v587;
      output = v337 + "\n";
      var v338 = outputWindow.document;
      introspect(JAM.policy.p17) {
        v338.write(output);
      }
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v588 = arrayOfSequences$$1.length;
      v339 = jj < v588;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v340 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v340.write("\n");
    }
    var v700 = arrayOfSequences$$1[0];
    var v589 = v700.length;
    v341 = totalBasesShown < v589;
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p10) {
  var v342 = document.getElementById("submitbtn")
}
v342.onclick = v3;
introspect(JAM.policy.p10) {
  var v343 = document.getElementById("clearbtn")
}
v343.onclick = v4
