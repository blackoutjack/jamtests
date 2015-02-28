introspect(JAM.policy.pFull) {
function addReturns(sequence) {
  sequence = sequence.replace(/(.{60})/g, function(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  });
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  for (;i$$1 < arrayOfTitles.length;i$$1++) {
    if (arrayOfTitles[i$$1].search(/\S/) == -1 || arrayOfSequences[i$$1].search(/\S/) == -1 || arrayOfSequences[i$$1].length != lengthOfAlign) {
      alert("There is a problem with the alignment format.");
      return false;
    }
  }
  return true;
}
function checkCodonTable(codonTable) {
  if (codonTable.search(/AmAcid/) == -1 || codonTable.search(/Codon/) == -1 || codonTable.search(/Number/) == -1 || codonTable.search(/\/1000/) == -1 || codonTable.search(/Fraction\s*\.\./) == -1) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  if (formElement.value.search(/\S/) == -1) {
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
  for (;z$$2 < arrayOfPatterns.length;) {
    if (arrayOfPatterns[z$$2].search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  for (;j < arrayOfPatterns.length;j++) {
    geneticCodeMatchExp[j] = eval(arrayOfPatterns[j].match(/\/.+\//) + "gi");
    geneticCodeMatchResult[j] = arrayOfPatterns[j].match(/=[a-zA-Z\*]/).toString();
    geneticCodeMatchResult[j] = geneticCodeMatchResult[j].replace(/=/g, "");
  }
  var i$$2 = 0;
  for (;i$$2 <= testSequence.length - 3;i$$2 = i$$2 + 3) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    for (;j < geneticCodeMatchExp.length;j++) {
      if (codon.search(geneticCodeMatchExp[j]) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  for (;z$$3 < arrayOfPatterns$$1.length;) {
    if (arrayOfPatterns$$1[z$$3].search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
  }
  var i$$3 = 0;
  for (;i$$3 < arrayOfPatterns$$1.length;i$$3++) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    for (;j$$1 < arrayOfPatterns$$1.length;j$$1++) {
      if (arrayOfPatterns$$1[j$$1].search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
    }
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  for (;z$$4 < arrayOfPatterns$$2.length;) {
    if (arrayOfPatterns$$2[z$$4].search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  if (getSequenceFromFasta(text$$7).replace(/[^A-Za-z]/g, "").length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false;
  } else {
    return true;
  }
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
    return false;
  } else {
    return true;
  }
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
  return dnaSequence;
}
function closeForm() {
  outputWindow.document.write("</form>");
  return true;
}
function closePre() {
  outputWindow.document.write("</div>");
  outputWindow.document.write("</pre>\n");
}
function closeTextArea() {
  outputWindow.document.write("</textarea>");
  return true;
}
function closeWindow() {
  outputWindow.document.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  outputWindow.document.close();
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
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  for (;i$$4 < alignArray.length;i$$4++) {
    if (alignArray[i$$4].search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "");
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    for (;matchArray = re$$1.exec(sequenceData);) {
      arrayOfFasta.push(matchArray[0]);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (fastaSequenceTitle.search(/[^\s]/) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + sequence$$2.substring(0, 10) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (fastaSequenceTitleOne.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceOne.substring(0, 10) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (fastaSequenceTitleTwo.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceTwo.substring(0, 10) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  for (;j$$2 < arrayOfPatterns$$3.length;j$$2++) {
    geneticCodeMatchExp$$1[j$$2] = eval(arrayOfPatterns$$3[j$$2].match(/\/.+\//) + "gi");
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  for (;j$$3 < arrayOfPatterns$$4.length;j$$3++) {
    geneticCodeMatchResult$$1[j$$3] = arrayOfPatterns$$4[j$$3].match(/=[a-zA-Z\*]/).toString();
    geneticCodeMatchResult$$1[j$$3] = geneticCodeMatchResult$$1[j$$3].replace(/=/g, "");
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (fastaSequenceTitle$$1.search(/[^\s]/) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + sequence$$3.substring(0, 10) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (fastaSequenceTitle$$2.search(/[^\s]/) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + sequence$$4.substring(0, 10) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (fastaSequenceTitleOne$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceOne$$1.substring(0, 10) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (fastaSequenceTitleTwo$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceTwo$$1.substring(0, 10) + '"';
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  for (;j$$4 < lengthOut;j$$4++) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  if (sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    fastaTitle = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "").toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  if (expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1 || expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1 || expressionToCheck.search(/\[\]/) != -1 || expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1 || expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1 || expressionToCheck.search(/\|\|/) != -1 || expressionToCheck.search(/\/\|/) != -1 || expressionToCheck.search(/\|\//) != -1 || expressionToCheck.search(/\[.\]/) != -1 || expressionToCheck.search(/\</) != -1 || expressionToCheck.search(/\>/) != 
  -1) {
    return false;
  }
  return true;
}
function openForm() {
  outputWindow.document.write('<form action="">\n');
  return true;
}
function openPre() {
  outputWindow.document.write("<pre>");
  outputWindow.document.write('<div class="pre">');
}
function openTextArea() {
  outputWindow.document.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow() {
  var title$$5 = "Fuzzy Protein DNA";
  _openWindow(title$$5);
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  outputWindow.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n');
  if (isColor) {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n");
  } else {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n");
  }
  outputWindow.document.write("</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n");
  outputWindow.status = "Please Wait.";
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  outputWindow.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n');
  if (isBackground) {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n");
  } else {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n");
  }
  outputWindow.document.write("</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n");
  outputWindow.status = "Please Wait.";
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "");
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "");
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "");
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "");
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (dnaSequence$$1.search(/./) != -1) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("");
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  for (;j$$5 < lengthOfColumn;j$$5++) {
    tempString = tempString + " ";
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend;
}
function testScript() {
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (testString.search(re$$2) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  if (!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, function(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  });
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (testNum.toFixed(3) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (testNum.toPrecision(5) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (theNumber$$1.search(/\d/) == -1) {
    alert("Please enter a number");
    return false;
  }
}
function verifyEmbl(emblFile) {
  if (emblFile.search(/ID/) == -1 || emblFile.search(/AC/) == -1 || emblFile.search(/DE/) == -1 || emblFile.search(/SQ/) == -1) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (theNumber$$2.search(/\d/) == -1) {
    alert("Please enter a number.");
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false;
  }
}
function verifyDna(dnaSequence$$2) {
  if (dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  if (genBankFile.search(/LOCUS/) == -1 || genBankFile.search(/DEFINITION/) == -1 || genBankFile.search(/ACCESSION/) == -1 || genBankFile.search(/ORIGIN/) == -1) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  if (genBankFile$$1.search(/LOCUS/) == -1 || genBankFile$$1.search(/DEFINITION/) == -1 || genBankFile$$1.search(/ACCESSION/) == -1 || genBankFile$$1.search(/ORIGIN/) == -1) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (genBankFile$$1.search(/FEATURES {13}/) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  if (emblFile$$1.search(/ID/) == -1 || emblFile$$1.search(/AC/) == -1 || emblFile$$1.search(/DE/) == -1 || emblFile$$1.search(/SQ/) == -1) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (emblFile$$1.search(/^FT/m) == -1) {
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
  for (;i$$5 < stopBase;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    for (;j$$6 <= basePerLine / groupSize;j$$6++) {
      for (;k < groupSize;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
    }
    outputWindow.document.write(lineOfText + "\n");
    lineOfText = "";
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  var numberingAdjustment = 0;
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    if (adjustment < 0 && adjusted >= 0) {
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
  for (;i$$6 < stopBase$$2;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    for (;j$$7 <= basePerLine$$2 / groupSize$$2;j$$7++) {
      for (;k$$1 < groupSize$$2;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
    }
    if (numberPosition$$1 == "left") {
      outputWindow.document.write(rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n");
      if (strands$$1 == "two") {
        outputWindow.document.write(rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n");
        outputWindow.document.write("\n");
      }
    } else {
      if (numberPosition$$1 == "right") {
        outputWindow.document.write(lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n");
        if (strands$$1 == "two") {
          outputWindow.document.write(complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n");
          outputWindow.document.write("\n");
        }
      } else {
        if (numberPosition$$1 == "above") {
          outputWindow.document.write(aboveNum + "\n");
          outputWindow.document.write(lineOfText$$1 + "\n");
          if (strands$$1 == "two") {
            outputWindow.document.write(complement(lineOfText$$1) + "\n");
            outputWindow.document.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
  }
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
  for (;i$$7 < stopBase$$3;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    for (;j$$8 <= basePerLine$$3 / groupSize$$3;j$$8++) {
      for (;k$$2 < groupSize$$3;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
    }
    if (numberPosition$$2 == "left") {
      outputWindow.document.write(rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n");
    } else {
      if (numberPosition$$2 == "right") {
        outputWindow.document.write(lineOfText$$2 + i$$7 + "\n");
      } else {
        if (numberPosition$$2 == "above") {
          outputWindow.document.write(aboveNum$$1 + "\n");
          outputWindow.document.write(lineOfText$$2 + "\n");
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
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
  if (sequence$$13.length <= firstIndexToMutate || lastIndexToMutate < 0 || lastIndexToMutate <= firstIndexToMutate) {
    numMut = 0;
  }
  var i$$8 = 0;
  for (;i$$8 < numMut;i$$8++) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    if (randNum < firstIndexToMutate || randNum > lastIndexToMutate) {
      numMut++;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = Math.round(Math.random() * components$$1.length);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = sequence$$13.substring(0, randNum) + components$$1[componentsIndex] + sequence$$13.substring(randNum + 1, sequence$$13.length);
  }
  outputWindow.document.write(addReturns(sequence$$13));
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  for (;j$$9 < lengthOut$$1;j$$9++) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      outputWindow.document.write(sequence$$14 + "\n");
      sequence$$14 = "";
    }
  }
  outputWindow.document.write(sequence$$14 + "\n");
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
  if (dnaConformation == "circular") {
    shiftValue = sequence$$15.substring(0, lookAhead).length;
    sequence$$15 = sequence$$15.substring(sequence$$15.length - lookAhead, sequence$$15.length) + sequence$$15 + sequence$$15.substring(0, lookAhead);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  outputWindow.document.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  outputWindow.document.write('<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n");
  var i$$9 = 0;
  for (;i$$9 < arrayOfItems.length;i$$9++) {
    tempString$$1 = "none";
    backGroundClass = "many";
    matchExp = arrayOfItems[i$$9].match(/\/.+\//) + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    cutDistance = parseFloat(arrayOfItems[i$$9].match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    for (;matchArray$$1 = matchExp.exec(sequence$$15);) {
      matchPosition = matchExp.lastIndex - cutDistance;
      if (matchPosition >= lowerLimit && matchPosition < upperLimit) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
    }
    if (tempString$$1.search(/\d/) != -1) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    if (timesFound == 0) {
      backGroundClass = "none";
    } else {
      if (timesFound == 1) {
        backGroundClass = "one";
      } else {
        if (timesFound == 2) {
          backGroundClass = "two";
        } else {
          if (timesFound == 3) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    outputWindow.document.write('<tr><td class="' + backGroundClass + '">' + arrayOfItems[i$$9].match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n");
    timesFound = 0;
  }
  outputWindow.document.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  outputWindow.document.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  outputWindow.document.write('<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n");
  var i$$10 = 0;
  for (;i$$10 < arrayOfItems$$1.length;i$$10++) {
    var tempNumber = 0;
    var matchExp$$1 = arrayOfItems$$1[i$$10].match(/\/[^\/]+\//) + "gi";
    matchExp$$1 = eval(matchExp$$1);
    if (sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length;
    }
    var percentage = 0;
    if (originalLength + 1 - parseFloat(arrayOfItems$$1[i$$10].match(/\d+/)) > 0) {
      percentage = 100 * tempNumber / (originalLength + 1 - parseFloat(arrayOfItems$$1[i$$10].match(/\d+/)));
    }
    outputWindow.document.write("<tr><td>" + arrayOfItems$$1[i$$10].match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n");
  }
  outputWindow.document.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  for (;sequence$$17.length > 0;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      outputWindow.document.write(tempSeq + "\n");
      tempSeq = "";
    }
  }
  outputWindow.document.write(tempSeq + "\n");
  return true;
}
function fuzzySearchProtein() {
  var theDocument = document;
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if (testScript() == false) {
    return;
  }
  if (checkFormElement(theDocument.forms[0].elements[0]) == false || checkSequenceLength(theDocument.forms[0].elements[0].value, maxTarget) == false || checkFormElement(theDocument.forms[0].elements[1]) == false || checkSequenceLength(theDocument.forms[0].elements[1].value, maxQuery) == false) {
    return;
  }
  var MATRIX = theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value;
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var HITS = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  openWindow();
  openPre();
  targetSequence = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  targetSequence = removeNonProtein(targetSequence);
  targetTitle = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  querySequence = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  outputWindow.document.write(getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence));
  if (targetSequence.search(/./) != -1) {
    targetSequence = targetSequence.match(/./g);
  }
  if (querySequence.search(/./) != -1) {
    querySequence = querySequence.match(/./g);
  }
  if (targetSequence.length == 0) {
    alert("The sequence contains no protein residues.");
    return;
  }
  if (querySequence.length == 0) {
    alert("The query sequence contains no protein residues.");
    return;
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  if (matrix == "pam30") {
    scoringMatrix = new Pam30;
  } else {
    if (matrix == "pam70") {
      scoringMatrix = new Pam70;
    } else {
      if (matrix == "blosum80") {
        scoringMatrix = new Blosum80;
      } else {
        if (matrix == "blosum62") {
          scoringMatrix = new Blosum62;
        } else {
          if (matrix == "blosum45") {
            scoringMatrix = new Blosum45;
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  scoreSet.setScoreSetParam(scoringMatrix, gapPenalty, hits);
  var fuzzySearch = new FuzzySearch;
  fuzzySearch.initializeMatrix(querySequence$$1, targetSequence$$1, scoreSet);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  if (hits.length > 0) {
    var i$$11 = 0;
    for (;i$$11 < hits.length;i$$11++) {
      outputWindow.document.write(">" + queryTitle$$1 + " from " + hits[i$$11].startM + " to " + hits[i$$11].endM + "\n");
      outputWindow.document.write(hits[i$$11].sequenceM + "\n");
      outputWindow.document.write(">" + targetTitle$$1 + " from " + hits[i$$11].startN + " to " + hits[i$$11].endN + "\n");
      outputWindow.document.write(hits[i$$11].sequenceN + "\n");
      outputWindow.document.write("Score: " + hits[i$$11].score + "\n\n");
    }
  } else {
    outputWindow.document.write("No hits were obtained.\n\n");
  }
}
function getScore(r1$$1, r2) {
  return this.scoringMatrix.scoringMatrix_getScore(r1$$1, r2);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
}
function ScoreSet() {
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  if (this.scoreHash[r1$$2 + r2$$1] == null) {
    throw "Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  } else {
    return this.scoreHash[r1$$2 + r2$$1];
  }
}
function scoringMatrix_fillHash(matrix$$1) {
  var cols = matrix$$1[0].split(/\s+/);
  var cells;
  var i$$12 = 1;
  for (;i$$12 < matrix$$1.length;i$$12++) {
    cells = matrix$$1[i$$12].split(/\s+/);
    var j$$10 = 1;
    for (;j$$10 < cols.length + 1;j$$10++) {
      this.scoreHash[cells[0].toLowerCase() + cols[j$$10 - 1].toLowerCase()] = parseInt(cells[j$$10]);
    }
  }
}
function ScoringMatrix() {
  this.scoreHash = {};
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  this.scoringMatrix_fillHash(matrix$$2);
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  this.scoringMatrix_fillHash(matrix$$3);
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  this.scoringMatrix_fillHash(matrix$$4);
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  this.scoringMatrix_fillHash(matrix$$5);
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  this.scoringMatrix_fillHash(matrix$$6);
}
function Node() {
  this.alreadyMatched = false;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  this.nodes = new Array(this.M.length + 1);
  var i$$13 = 0;
  for (;i$$13 < this.nodes.length;i$$13++) {
    this.nodes[i$$13] = new Array(this.N.length + 1);
    var j$$11 = 0;
    for (;j$$11 < this.nodes[i$$13].length;j$$11++) {
      this.nodes[i$$13][j$$11] = new Node;
    }
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  for (;i$$13 < this.nodes.length;i$$13++) {
    this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value;
    this.nodes[i$$13][0].tracebackI = i$$13 - 1;
    this.nodes[i$$13][0].tracebackJ = 0;
  }
  j$$11 = 1;
  for (;j$$11 < this.nodes[0].length;j$$11++) {
    this.nodes[0][j$$11].value = this.nodes[0][j$$11 - 1].value;
    this.nodes[0][j$$11].tracebackI = 0;
    this.nodes[0][j$$11].tracebackJ = j$$11 - 1;
  }
}
function dumpMatrix() {
  outputWindow.document.write("Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length);
  outputWindow.document.write("\n");
  var i$$14 = 0;
  for (;i$$14 < this.nodes.length;i$$14++) {
    var j$$12 = 0;
    for (;j$$12 < this.nodes[i$$14].length;j$$12++) {
      var traceI = this.nodes[i$$14][j$$12].tracebackI;
      var traceJ = this.nodes[i$$14][j$$12].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$14 + "," + j$$12 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$14][j$$12].value;
      outputWindow.document.write(rightNum(output, "", 20, " "));
    }
    outputWindow.document.write("\n");
  }
  outputWindow.document.write("\n");
}
function updateMatrix() {
  var i$$15 = 1;
  for (;i$$15 < this.nodes.length;i$$15++) {
    var j$$13 = 1;
    for (;j$$13 < this.nodes[0].length;j$$13++) {
      var a;
      var b;
      var c;
      if (this.nodes[i$$15][j$$13].alreadyMatched) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        if (i$$15 == this.nodes.length - 1 && j$$13 == this.nodes[0].length - 1) {
          a = this.nodes[i$$15 - 1][j$$13].value;
          b = this.nodes[i$$15][j$$13 - 1].value;
          c = this.nodes[i$$15 - 1][j$$13 - 1].value + this.scoreSet.getScore(this.M[i$$15 - 1], this.N[j$$13 - 1]);
        } else {
          if (i$$15 == this.nodes.length - 1) {
            a = this.nodes[i$$15 - 1][j$$13].value - this.scoreSet.gap;
            b = this.nodes[i$$15][j$$13 - 1].value;
            c = this.nodes[i$$15 - 1][j$$13 - 1].value + this.scoreSet.getScore(this.M[i$$15 - 1], this.N[j$$13 - 1]);
          } else {
            if (j$$13 == this.nodes[0].length - 1) {
              a = this.nodes[i$$15 - 1][j$$13].value;
              b = this.nodes[i$$15][j$$13 - 1].value - this.scoreSet.gap;
              c = this.nodes[i$$15 - 1][j$$13 - 1].value + this.scoreSet.getScore(this.M[i$$15 - 1], this.N[j$$13 - 1]);
            } else {
              a = this.nodes[i$$15 - 1][j$$13].value - this.scoreSet.gap;
              b = this.nodes[i$$15][j$$13 - 1].value - this.scoreSet.gap;
              c = this.nodes[i$$15 - 1][j$$13 - 1].value + this.scoreSet.getScore(this.M[i$$15 - 1], this.N[j$$13 - 1]);
            }
          }
        }
      }
      if (a > b && a > c) {
        this.nodes[i$$15][j$$13].value = a;
        this.nodes[i$$15][j$$13].tracebackI = i$$15 - 1;
        this.nodes[i$$15][j$$13].tracebackJ = j$$13;
      } else {
        if (b > c && b > a) {
          this.nodes[i$$15][j$$13].value = b;
          this.nodes[i$$15][j$$13].tracebackI = i$$15;
          this.nodes[i$$15][j$$13].tracebackJ = j$$13 - 1;
        } else {
          this.nodes[i$$15][j$$13].value = c;
          this.nodes[i$$15][j$$13].tracebackI = i$$15 - 1;
          this.nodes[i$$15][j$$13].tracebackJ = j$$13 - 1;
        }
      }
      if (this.nodes[i$$15][j$$13].value < 0) {
        this.nodes[i$$15][j$$13].value = 0;
        this.nodes[i$$15][j$$13].tracebackI = undefined;
        this.nodes[i$$15][j$$13].tracebackJ = undefined;
      }
    }
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
}
function search() {
  this.hits = new Array;
  var hitCount = 0;
  for (;hitCount < this.scoreSet.hits;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    for (;i$$16 < this.nodes.length;i$$16++) {
      var j$$14 = 1;
      for (;j$$14 < this.nodes[0].length;j$$14++) {
        if (this.nodes[i$$16][j$$14].value > maxNodeValue) {
          maxNodeValue = this.nodes[i$$16][j$$14].value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14;
        }
      }
    }
    if (maxNodeValue == 0) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var currentNode = this.nodes[maxNodeI][maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    for (;currentNode.tracebackI != undefined && currentNode.tracebackJ != undefined;) {
      if (currentI == 0 || currentJ == 0) {
        break;
      }
      if (currentNode.tracebackI == currentI - 1 && currentNode.tracebackJ == currentJ - 1) {
        if (endM == undefined) {
          endM = currentI;
          endN = currentJ;
        }
        alignedM.push(this.M[currentI - 1]);
        alignedN.push(this.N[currentJ - 1]);
      } else {
        if (currentNode.tracebackJ == currentJ - 1) {
          if (endM != undefined) {
            alignedM.push("-");
            alignedN.push(this.N[currentJ - 1]);
          }
        } else {
          if (endM != undefined) {
            alignedM.push(this.M[currentI - 1]);
            alignedN.push("-");
          }
        }
      }
      this.nodes[currentI][currentJ].value = 0;
      this.nodes[currentI][currentJ].alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    this.hits.push(new Hit(alignedM.join(""), alignedN.join(""), score, currentI + 1, endM, currentJ + 1, endN));
    hitCount++;
  }
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
Blosum62.prototype = new ScoringMatrix;
Blosum45.prototype = new ScoringMatrix;
Blosum80.prototype = new ScoringMatrix;
Pam30.prototype = new ScoringMatrix;
new FuzzySearch;
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
document.onload = function() {
  document.main_form.main_submit.focus();
};
document.getElementById("submitbtn").onclick = function() {
  try {
    fuzzySearchProtein();
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
};
document.getElementById("clearbtn").onclick = function() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
}

}
