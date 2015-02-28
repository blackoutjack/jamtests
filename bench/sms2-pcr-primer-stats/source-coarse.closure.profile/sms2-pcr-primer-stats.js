
JAM.startProfile('load');
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
  var title$$5 = "PCR Primer Stats";
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
function pcrPrimerStats() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  if (testScript() == false) {
    return;
  }
  if (checkFormElement(theDocument.forms[0].elements[0]) == false || checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false) {
    return;
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow();
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  outputWindow.document.write("Global settings:\n");
  if (isPhosphorylated) {
    outputWindow.document.write("-The primers have a 5'-phosphate group.\n");
  } else {
    outputWindow.document.write("-The primers do not have a 5'-phosphate group.\n");
  }
  outputWindow.document.write("-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n");
  outputWindow.document.write("-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n");
  outputWindow.document.write("-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n");
  outputWindow.document.write("\n");
  outputWindow.document.write("------------------------------------------------------------\n");
  var i$$11 = 0;
  for (;i$$11 < arrayOfFasta$$1.length;i$$11++) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = _removeNonPrimer(newDna);
    if (newDna.length == 0) {
      continue;
    }
    if (newDna.length > maxPrimerLength) {
      continue;
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = _nearestNeighborTm(newDna);
    var selfCompHash = _getSelfComplementarityReport(newDna);
    var hairpinHash = _getHairpinReport(newDna);
    outputWindow.document.write("------------------------------------------------------------\n");
    outputWindow.document.write("General properties:\n");
    outputWindow.document.write("-------------------\n");
    outputWindow.document.write(rightNum("Primer name:", "", 32, "") + title$$9 + "\n");
    outputWindow.document.write(rightNum("Primer sequence:", "", 32, "") + newDna + "\n");
    outputWindow.document.write(rightNum("Sequence length:", "", 32, "") + newDna.length + "\n");
    outputWindow.document.write(rightNum("Base counts:", "", 32, "") + _baseCounts(newDna) + "\n");
    outputWindow.document.write(rightNum("GC content (%):", "", 32, "") + percentGC + "\n");
    outputWindow.document.write(rightNum("Molecular weight (Daltons):", "", 32, "") + _molecularWeight(newDna, isPhosphorylated) + "\n");
    outputWindow.document.write(rightNum("nmol/A260:", "", 32, "") + _nmolPerA260(newDna) + "\n");
    outputWindow.document.write(rightNum("micrograms/A260:", "", 32, "") + _microgramsPerA260(newDna, isPhosphorylated) + "\n");
    outputWindow.document.write(rightNum("Basic Tm (degrees C):", "", 32, "") + _basicTm(newDna) + "\n");
    outputWindow.document.write(rightNum("Salt adjusted Tm (degrees C):", "", 32, "") + _molarSaltAdjustedTm(newDna) + "\n");
    outputWindow.document.write(rightNum("Nearest neighbor Tm (degrees C):", "", 32, "") + nearestNeighborTm + "\n");
    outputWindow.document.write("\n");
    outputWindow.document.write("PCR suitability tests (Pass / Warning):\n");
    outputWindow.document.write("------------------------------------\n");
    outputWindow.document.write(rightNum("Single base runs:", "", 32, "") + _getBaseRunsReport(newDna) + "\n");
    outputWindow.document.write(rightNum("Dinucleotide base runs:", "", 32, "") + _getDiNucleotideRunsReport(newDna) + "\n");
    outputWindow.document.write(rightNum("Length:", "", 32, "") + _getSuitableLengthReport(newDna, 14, 30) + "\n");
    outputWindow.document.write(rightNum("Percent GC:", "", 32, "") + _getSuitableGCReport(newDna, percentGC) + "\n");
    outputWindow.document.write(rightNum("Tm (Nearest neighbor):", "", 32, "") + _getSuitableTmReport(newDna, nearestNeighborTm) + "\n");
    outputWindow.document.write(rightNum("GC clamp:", "", 32, "") + _getSuitableThreePrimeGC(newDna) + "\n");
    outputWindow.document.write(rightNum("Self-annealing:", "", 32, "") + selfCompHash["report"] + "\n");
    if (selfCompHash["report"] != "Pass") {
      outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash["upper"] + "\n");
      outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash["divider"] + "\n");
      outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash["lower"] + "\n");
    }
    outputWindow.document.write(rightNum("Hairpin formation:", "", 32, "") + hairpinHash["report"] + "\n");
    if (hairpinHash["report"] != "Pass") {
      outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash["upper"] + "\n");
      outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash["divider"] + "\n");
      outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash["lower"] + "\n");
    }
    outputWindow.document.write("------------------------------------------------------------\n");
    outputWindow.document.write("\n");
  }
  closePre();
  closeWindow();
}
function _removeNonPrimer(sequence$$18) {
  sequence$$18.replace(/u/g, "t");
  sequence$$18.replace(/U/g, "T");
  return sequence$$18.replace(/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, "");
}
function _containsOnlyNonDegenerates(sequence$$19) {
  if (sequence$$19.search(/[^gatc]/i) == -1) {
    return true;
  }
  return false;
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var numOther = sequence$$20.length - (numG + numA + numT + numC);
  return "G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";";
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  if (_containsOnlyNonDegenerates(sequence$$21)) {
    return _microgramsPerA260NonDegen(sequence$$21, isPhosphorylated$$1);
  } else {
    return _microgramsPerA260Degen(sequence$$21, isPhosphorylated$$1);
  }
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = _mw(sequence$$22, isPhosphorylated$$2);
  var result = mw / _getExtinctionCoefficient(sequence$$22);
  return result.toFixed(2);
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "g");
  lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");
  upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
  upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "a");
  return _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated$$3) + " to " + _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated$$3);
}
function _nmolPerA260(sequence$$24) {
  if (_containsOnlyNonDegenerates(sequence$$24)) {
    return _nmolPerA260NonDegen(sequence$$24);
  } else {
    return _nmolPerA260Degen(sequence$$24);
  }
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  result$$1 = 1 / result$$1 * 1E3;
  return result$$1.toFixed(2);
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  for (;i$$12 < sequence$$26.length - 1;i$$12++) {
    dimerSum = dimerSum + dimerValues[sequence$$26.charAt(i$$12) + sequence$$26.charAt(i$$12 + 1)];
  }
  i$$12 = 1;
  for (;i$$12 < sequence$$26.length - 1;i$$12++) {
    singleSum = singleSum + singleValues[sequence$$26.charAt(i$$12)];
  }
  return 2 * dimerSum - singleSum;
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/r/gi, "g");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/y/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/s/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/w/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/k/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/m/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/b/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/d/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/h/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/v/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/n/gi, "c");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/r/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/y/gi, "t");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/s/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/w/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/k/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/m/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/b/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/d/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/h/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/v/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/n/gi, "a");
  return _nmolPerA260NonDegen(upperBoundsSequence$$1) + " to " + _nmolPerA260NonDegen(lowerBoundsSequence$$1);
}
function _percentGC(sequence$$28) {
  if (_containsOnlyNonDegenerates(sequence$$28)) {
    return _percentGCNonDegen(sequence$$28);
  } else {
    return _percentGCDegen(sequence$$28);
  }
}
function _percentGCNonDegen(sequence$$29) {
  var numHits = _getBaseCount(sequence$$29, "g") + _getBaseCount(sequence$$29, "c");
  return (numHits / sequence$$29.length * 100).toFixed(2);
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/s/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/s/gi, "g");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/w/gi, "a");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/w/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/r/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/y/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/k/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/m/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/b/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/d/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/h/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/v/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/n/gi, "a");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/r/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/y/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/k/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/m/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/b/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/d/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/h/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/v/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/n/gi, "g");
  return _percentGCNonDegen(lowerBoundsSequence$$2) + " to " + _percentGCNonDegen(upperBoundsSequence$$2);
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  if (_containsOnlyNonDegenerates(sequence$$31)) {
    return _molecularWeightNonDegen(sequence$$31, isPhosphorylated$$4);
  } else {
    return _molecularWeightDegen(sequence$$31, isPhosphorylated$$4);
  }
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  return _mw(sequence$$32, isPhosphorylated$$5).toFixed(2);
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = _getBaseCount(sequence$$33, "g");
  var a = _getBaseCount(sequence$$33, "a");
  var t = _getBaseCount(sequence$$33, "t");
  var c = _getBaseCount(sequence$$33, "c");
  var phosAdjust = 0;
  if (isPhosphorylated$$6) {
    phosAdjust = 79;
  }
  return g * 329.21 + a * 313.21 + t * 304.2 + c * 289.18 - 61.96 + phosAdjust;
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/r/gi, "a");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/y/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/s/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/w/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/k/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/m/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/b/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/d/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/h/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/v/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/n/gi, "c");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/r/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/y/gi, "t");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/s/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/w/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/k/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/m/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/b/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/d/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/h/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/v/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/n/gi, "g");
  return _molecularWeightNonDegen(lowerBoundsSequence$$3, isPhosphorylated$$7) + " to " + _molecularWeightNonDegen(upperBoundsSequence$$3, isPhosphorylated$$7);
}
function _basicTm(sequence$$35) {
  if (_containsOnlyNonDegenerates(sequence$$35)) {
    return _basicTmNonDegen(sequence$$35);
  } else {
    return _basicTmDegen(sequence$$35);
  }
}
function _basicTmNonDegen(sequence$$36) {
  if (sequence$$36.length < 14) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    return (4 * (numG$$1 + numC$$1) + 2 * (numA$$1 + numT$$1)).toFixed(0);
  } else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    return (64.9 + 41 * (numG$$1 + numC$$1 - 16.4) / sequence$$36.length).toFixed(0);
  }
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/s/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/s/gi, "g");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/w/gi, "a");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/w/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/r/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/y/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/k/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/m/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/b/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/d/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/h/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/v/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/n/gi, "a");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/r/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/y/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/k/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/m/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/b/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/d/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/h/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/v/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/n/gi, "g");
  return _basicTmNonDegen(lowerBoundsSequence$$4) + " to " + _basicTmNonDegen(upperBoundsSequence$$4);
}
function _molarSaltAdjustedTm(sequence$$38) {
  var molarSalt$$1 = molarSalt;
  if (_containsOnlyNonDegenerates(sequence$$38)) {
    return _molarSaltAdjustedTmNonDegen(sequence$$38, molarSalt$$1);
  } else {
    return _molarSaltAdjustedTmDegen(sequence$$38, molarSalt$$1);
  }
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var gcHits = _getBaseCount(sequence$$39, "g") + _getBaseCount(sequence$$39, "c");
  var pGC = gcHits / sequence$$39.length * 100;
  return (81.5 + 7.21 * Math.log(molarSalt$$2) + .41 * pGC - 675 / sequence$$39.length).toFixed(0);
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/s/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/s/gi, "g");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/w/gi, "a");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/w/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/r/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/y/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/k/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/m/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/b/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/d/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/h/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/v/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/n/gi, "a");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/r/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/y/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/k/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/m/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/b/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/d/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/h/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/v/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/n/gi, "g");
  return _molarSaltAdjustedTmNonDegen(lowerBoundsSequence$$5, molarSalt$$3) + " to " + _molarSaltAdjustedTmNonDegen(upperBoundsSequence$$5, molarSalt$$3);
}
function _nearestNeighborTm(sequence$$41) {
  var molarSalt$$4 = molarSalt;
  var molarPrimerTotal$$1 = molarPrimerTotal;
  var molarMagnesium$$1 = molarMagnesium;
  if (_containsOnlyNonDegenerates(sequence$$41)) {
    return _nearestNeighborTmNonDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1);
  } else {
    return _nearestNeighborTmDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1);
  }
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = sequence$$42.toLowerCase();
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var correctedSalt = molarSalt$$5 + molarMagnesium$$2 * 140;
  ds = ds + .368 * (sequence$$42.length - 1) * Math.log(correctedSalt);
  var termDsCorr = _getTerminalCorrectionsDsHash();
  ds = ds + termDsCorr[sequence$$42.charAt(0)];
  ds = ds + termDsCorr[sequence$$42.charAt(sequence$$42.length - 1)];
  var termDhCorr = _getTerminalCorrectionsDhHash();
  dh = dh + termDhCorr[sequence$$42.charAt(0)];
  dh = dh + termDhCorr[sequence$$42.charAt(sequence$$42.length - 1)];
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  for (;i$$13 < sequence$$42.length - 1;i$$13++) {
    ds = ds + dsValues[sequence$$42.charAt(i$$13) + sequence$$42.charAt(i$$13 + 1)];
    dh = dh + dhValues[sequence$$42.charAt(i$$13) + sequence$$42.charAt(i$$13 + 1)];
  }
  return (1E3 * dh / (ds + R * Math.log(molarPrimerTotal$$2 / 2)) - 273.15).toFixed(2);
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/s/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/s/gi, "g");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/w/gi, "a");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/w/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/r/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/y/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/k/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/m/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/b/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/d/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/h/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/v/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/n/gi, "a");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/r/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/y/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/k/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/m/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/b/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/d/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/h/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/v/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/n/gi, "g");
  return _nearestNeighborTmNonDegen(lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) + " to " + _nearestNeighborTmNonDegen(upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3);
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  if (sequence$$44.search(basePattern) != -1) {
    return sequence$$44.match(basePattern).length;
  } else {
    return 0;
  }
}
function _getTerminalCorrectionsDsHash() {
  var hash = {};
  hash["g"] = -2.8;
  hash["a"] = 4.1;
  hash["t"] = 4.1;
  hash["c"] = -2.8;
  return hash;
}
function _getTerminalCorrectionsDhHash() {
  var hash$$1 = {};
  hash$$1["g"] = .1;
  hash$$1["a"] = 2.3;
  hash$$1["t"] = 2.3;
  hash$$1["c"] = .1;
  return hash$$1;
}
function _getDsHash() {
  var hash$$2 = {};
  hash$$2["gg"] = -19.9;
  hash$$2["ga"] = -22.2;
  hash$$2["gt"] = -22.4;
  hash$$2["gc"] = -27.2;
  hash$$2["ag"] = -21;
  hash$$2["aa"] = -22.2;
  hash$$2["at"] = -20.4;
  hash$$2["ac"] = -22.4;
  hash$$2["tg"] = -22.7;
  hash$$2["ta"] = -21.3;
  hash$$2["tt"] = -22.2;
  hash$$2["tc"] = -22.2;
  hash$$2["cg"] = -27.2;
  hash$$2["ca"] = -22.7;
  hash$$2["ct"] = -21;
  hash$$2["cc"] = -19.9;
  return hash$$2;
}
function _getDhHash() {
  var hash$$3 = {};
  hash$$3["gg"] = -8;
  hash$$3["ga"] = -8.2;
  hash$$3["gt"] = -8.4;
  hash$$3["gc"] = -10.6;
  hash$$3["ag"] = -7.8;
  hash$$3["aa"] = -7.9;
  hash$$3["at"] = -7.2;
  hash$$3["ac"] = -8.4;
  hash$$3["tg"] = -8.5;
  hash$$3["ta"] = -7.2;
  hash$$3["tt"] = -7.9;
  hash$$3["tc"] = -8.2;
  hash$$3["cg"] = -10.6;
  hash$$3["ca"] = -8.5;
  hash$$3["ct"] = -7.8;
  hash$$3["cc"] = -8;
  return hash$$3;
}
function _getDimerExtinctionCoefficients() {
  var hash$$4 = {};
  hash$$4["gg"] = 10.8;
  hash$$4["ga"] = 12.6;
  hash$$4["gt"] = 10;
  hash$$4["gc"] = 8.8;
  hash$$4["ag"] = 12.5;
  hash$$4["aa"] = 13.7;
  hash$$4["at"] = 11.4;
  hash$$4["ac"] = 10.6;
  hash$$4["tg"] = 9.5;
  hash$$4["ta"] = 11.7;
  hash$$4["tt"] = 8.4;
  hash$$4["tc"] = 8.1;
  hash$$4["cg"] = 9;
  hash$$4["ca"] = 10.6;
  hash$$4["ct"] = 7.6;
  hash$$4["cc"] = 7.3;
  return hash$$4;
}
function _getSingleExtinctionCoefficients() {
  var hash$$5 = {};
  hash$$5["g"] = 11.5;
  hash$$5["a"] = 15.4;
  hash$$5["t"] = 8.7;
  hash$$5["c"] = 7.4;
  return hash$$5;
}
function _getBaseRunsReport(sequence$$45) {
  var minRunLength = 5;
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  for (;i$$14 < nucleotides.length;i$$14++) {
    if (_hasRunOfBases(sequence$$45, nucleotides[i$$14], minRunLength)) {
      hasRun = true;
      report = report + "Contains run of " + nucleotides[i$$14] + "'s; ";
    }
  }
  if (hasRun) {
    return "Warning: " + report;
  } else {
    return "Pass";
  }
}
function _getDiNucleotideRunsReport(sequence$$46) {
  var minRunLength$$1 = 5;
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  for (;i$$15 < diNucleotides.length;i$$15++) {
    if (_hasRunOfBases(sequence$$46, diNucleotides[i$$15], minRunLength$$1)) {
      hasRun$$1 = true;
      report$$1 = report$$1 + "Contains run of " + diNucleotides[i$$15] + "'s; ";
    }
  }
  if (hasRun$$1) {
    return "Warning: " + report$$1;
  } else {
    return "Pass";
  }
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var basePattern$$1 = new RegExp("(?:" + base$$2 + "){" + minRunLength$$2 + ",}", "gi");
  if (sequence$$47.search(basePattern$$1) != -1) {
    return sequence$$47.match(basePattern$$1).length;
  } else {
    return 0;
  }
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  if (sequence$$48.length < minSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains fewer than " + minSuitableLength + " bases; ";
  }
  if (sequence$$48.length > maxSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains more than " + maxSuitableLength + " bases; ";
  }
  if (hasProblem) {
    return "Warning: " + report$$2;
  } else {
    return "Pass";
  }
}
function _getSuitableGCReport(sequence$$49, percentGCRange) {
  var minSuitableGC = 40;
  var maxSuitableGC = 60;
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = new RegExp("([d.]+)D+([d.]+)", "gi");
  if (percentGCRange.search(rangePattern) != -1) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2);
  } else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange);
  }
  if (lowerCalculated < minSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is less than " + minSuitableGC + "; ";
  }
  if (upperCalculated > maxSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is greater than " + maxSuitableGC + "; ";
  }
  if (hasProblem$$1) {
    return "Warning: " + report$$3;
  } else {
    return "Pass";
  }
}
function _getSuitableLengthReport(sequence$$50, minSuitableLength$$1, maxSuitableLength$$1) {
  var report$$4 = "";
  var hasProblem$$2 = false;
  if (sequence$$50.length < minSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains fewer than " + minSuitableLength$$1 + " bases; ";
  }
  if (sequence$$50.length > maxSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains more than " + maxSuitableLength$$1 + " bases; ";
  }
  if (hasProblem$$2) {
    return "Warning: " + report$$4;
  } else {
    return "Pass";
  }
}
function _getSuitableTmReport(sequence$$51, range$$5) {
  var minSuitable = 50;
  var maxSuitable = 58;
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = new RegExp("([d.]+)D+([d.]+)", "gi");
  if (range$$5.search(rangePattern$$1) != -1) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2);
  } else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5);
  }
  if (lowerCalculated$$1 < minSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is less than " + minSuitable + "; ";
  }
  if (upperCalculated$$1 > maxSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is greater than " + maxSuitable + "; ";
  }
  if (hasProblem$$3) {
    return "Warning: " + report$$5;
  } else {
    return "Pass";
  }
}
function _getSuitableThreePrimeGC(sequence$$52) {
  var minSuitable$$1 = 1;
  var maxSuitable$$1 = 3;
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  if (sequence$$52.length >= desiredThreePrimeEndSize) {
    threePrimeEnd = sequence$$52.substr(sequence$$52.length - desiredThreePrimeEndSize, 5);
  } else {
    threePrimeEnd = sequence$$52;
  }
  gcCounts = _getBaseCount(threePrimeEnd, "g") + _getBaseCount(threePrimeEnd, "c");
  if (gcCounts < minSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are less than " + minSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
  }
  if (gcCounts > maxSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are more than " + maxSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
  }
  if (hasProblem$$4) {
    return "Warning: " + report$$6;
  } else {
    return "Pass";
  }
}
function _getSelfComplementarityReport(sequence$$53) {
  var maxContig = 3;
  var maxPercentIdent = 50;
  var matchScore = 1;
  var mismatchScore = -1;
  var gapPenalty = 99;
  var beginGapPenalty = 0;
  var endGapPenalty = 0;
  var returnHash = {};
  returnHash["report"] = "";
  returnHash["upper"] = "";
  returnHash["lower"] = "";
  returnHash["divider"] = "";
  var report$$7 = "";
  var hasProblem$$5 = false;
  var sequenceLength = sequence$$53.length;
  var matrix = new Complementarity;
  matrix.setMatch(matchScore);
  matrix.setMismatch(mismatchScore);
  var scoreSet = new ScoreSet;
  scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
  var rev = reverse(sequence$$53);
  sequence$$53 = sequence$$53.match(/./g);
  rev = rev.match(/./g);
  alignment = new AlignPairQuad;
  alignment.initializeMatrix(sequence$$53, rev, scoreSet);
  alignment.fillMatrix();
  alignment.align();
  var seqAligned = alignment.getAlignedM().replace(/\-/g, " ");
  var revAligned = alignment.getAlignedN().replace(/\-/g, " ");
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  for (;i$$16 < seqAligned.length;i$$16++) {
    if (scoreSet.getScore(seqAligned.charAt(i$$16), revAligned.charAt(i$$16)) == matchScore) {
      divider.push("|");
      contiguous++;
      totalMatches++;
    } else {
      divider.push(" ");
      contiguous = 0;
    }
    if (contiguous > maxContiguous) {
      maxContiguous = contiguous;
    }
  }
  if (maxContiguous > maxContig) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "There are more than " + maxContig + " self-annealing bases in a row; ";
  }
  if (totalMatches / sequenceLength * 100 > maxPercentIdent) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "More than " + maxPercentIdent + " percent of the bases are self-annealing; ";
  }
  if (hasProblem$$5) {
    report$$7 = "Warning: " + report$$7;
  } else {
    report$$7 = "Pass";
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  returnHash["divider"] = divider.join("");
  return returnHash;
}
function _getHairpinReport(sequence$$54) {
  var maxContig$$1 = 3;
  var maxPercentIdent$$1 = 50;
  var upper = sequence$$54;
  upper = upper.match(/./g);
  var loop = "";
  var lower = new Array;
  var returnHash$$1 = {};
  returnHash$$1["report"] = "";
  returnHash$$1["upper"] = "";
  returnHash$$1["lower"] = "";
  returnHash$$1["divider"] = "";
  var topScore = 0;
  var score$$1;
  var u;
  var l;
  var topScoreUpper = sequence$$54;
  var topScoreLower = "";
  var topScoreLoop = "";
  var matchScore$$1 = 1;
  var mismatchScore$$1 = -1;
  var gapPenalty$$1 = 99;
  var beginGapPenalty$$1 = 0;
  var endGapPenalty$$1 = 0;
  var report$$8 = "";
  var hasProblem$$6 = false;
  var sequenceLength$$1 = sequence$$54.length;
  var matrix$$1 = new Complementarity;
  matrix$$1.setMatch(matchScore$$1);
  matrix$$1.setMismatch(mismatchScore$$1);
  var scoreSet$$1 = new ScoreSet;
  scoreSet$$1.setScoreSetParam(matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1);
  for (;upper.length > 0;) {
    score$$1 = 0;
    if (loop == "") {
      loop = upper.pop();
    } else {
      lower.push(loop);
      loop = "";
    }
    u = upper.length - 1;
    l = lower.length - 1;
    for (;u >= 0 && l >= 0;) {
      score$$1 = score$$1 + scoreSet$$1.getScore(upper[u], lower[l]);
      u--;
      l--;
    }
    if (score$$1 > topScore) {
      topScore = score$$1;
      topScoreUpper = upper.join("");
      topScoreLower = lower.join("");
      topScoreLoop = loop;
    }
  }
  var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
  if (upperLowerDiff > 0) {
    var i$$17 = 0;
    for (;i$$17 < upperLowerDiff;i$$17++) {
      topScoreLower = " " + topScoreLower;
    }
  } else {
    if (upperLowerDiff < 0) {
      i$$17 = upperLowerDiff;
      for (;i$$17 < 0;i$$17++) {
        topScoreUpper = " " + topScoreUpper;
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = new Array;
  i$$17 = 0;
  for (;i$$17 < topScoreUpper.length;i$$17++) {
    if (scoreSet$$1.getScore(topScoreUpper.charAt(i$$17), topScoreLower.charAt(i$$17)) == matchScore$$1) {
      divider$$1.push("|");
      contiguous$$1++;
      totalMatches$$1++;
    } else {
      divider$$1.push(" ");
      contiguous$$1 = 0;
    }
    if (contiguous$$1 > maxContiguous$$1) {
      maxContiguous$$1 = contiguous$$1;
    }
  }
  if (maxContiguous$$1 > maxContig$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "There are more than " + maxContig$$1 + " hairpin bases in a row; ";
  }
  if (totalMatches$$1 / sequenceLength$$1 * 100 > maxPercentIdent$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "More than " + maxPercentIdent$$1 + " percent of the bases are in a hairpin; ";
  }
  if (hasProblem$$6) {
    report$$8 = "Warning: " + report$$8;
  } else {
    report$$8 = "Pass";
  }
  if (topScoreLoop == "") {
    topScoreLoop = ")";
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  returnHash$$1["divider"] = divider$$1.join("") + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1;
}
function getScore(r1$$1, r2) {
  return this.scoringMatrix.scoringMatrix_getScore(r1$$1, r2);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$2, beginGapPenalty$$2, endGapPenalty$$2) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$2;
  this.beginGap = beginGapPenalty$$2;
  this.endGap = endGapPenalty$$2;
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  if (r1$$2 == "g" && r2$$1 == "c" || r2$$1 == "g" && r1$$2 == "c") {
    return this.match;
  } else {
    if (r1$$2 == "a" && r2$$1 == "t" || r2$$1 == "a" && r1$$2 == "t") {
      return this.match;
    } else {
      return this.mismatch;
    }
  }
}
function ScoringMatrix() {
}
function setMismatch(mismatchScore$$2) {
  this.mismatch = mismatchScore$$2;
}
function setMatch(matchScore$$2) {
  this.match = matchScore$$2;
}
function Complementarity() {
}
function Node() {
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  this.nodes = new Array(this.M.length + 1);
  var i$$18 = 0;
  for (;i$$18 < this.nodes.length;i$$18++) {
    this.nodes[i$$18] = new Array(this.N.length + 1);
    var j$$10 = 0;
    for (;j$$10 < this.nodes[i$$18].length;j$$10++) {
      this.nodes[i$$18][j$$10] = new Node;
    }
  }
  this.nodes[0][0].value = 0;
  i$$18 = 1;
  for (;i$$18 < this.nodes.length;i$$18++) {
    if (this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.beginGap;
    } else {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.gap;
    }
    this.nodes[i$$18][0].tracebackI = i$$18 - 1;
    this.nodes[i$$18][0].tracebackJ = 0;
  }
  j$$10 = 1;
  for (;j$$10 < this.nodes[0].length;j$$10++) {
    if (this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.beginGap;
    } else {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.gap;
    }
    this.nodes[0][j$$10].tracebackI = 0;
    this.nodes[0][j$$10].tracebackJ = j$$10 - 1;
  }
}
function dumpMatrix() {
  outputWindow.document.write("Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length);
  outputWindow.document.write("\n");
  var i$$19 = 0;
  for (;i$$19 < this.nodes.length;i$$19++) {
    var j$$11 = 0;
    for (;j$$11 < this.nodes[i$$19].length;j$$11++) {
      var traceI = this.nodes[i$$19][j$$11].tracebackI;
      var traceJ = this.nodes[i$$19][j$$11].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$19 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$19][j$$11].value;
      outputWindow.document.write(rightNum(output, "", 20, " "));
    }
    outputWindow.document.write("\n");
  }
  outputWindow.document.write("\n");
}
function fillMatrix() {
  var i$$20 = 1;
  for (;i$$20 < this.nodes.length;i$$20++) {
    var j$$12 = 1;
    for (;j$$12 < this.nodes[0].length;j$$12++) {
      var a$$1;
      var b;
      var c$$1;
      if (i$$20 == this.nodes.length - 1 && j$$12 == this.nodes[0].length - 1) {
        if (this.scoreSet.useEndGapRight) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap;
        } else {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap;
        } else {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
        }
      } else {
        if (i$$20 == this.nodes.length - 1) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap;
          } else {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          }
        } else {
          if (j$$12 == this.nodes[0].length - 1) {
            if (this.scoreSet.useEndGapRight) {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap;
            } else {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
            }
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          } else {
            a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          }
        }
      }
      c$$1 = this.nodes[i$$20 - 1][j$$12 - 1].value + this.scoreSet.getScore(this.M[i$$20 - 1], this.N[j$$12 - 1]);
      if (a$$1 >= b && a$$1 >= c$$1) {
        this.nodes[i$$20][j$$12].value = a$$1;
        this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
        this.nodes[i$$20][j$$12].tracebackJ = j$$12;
      } else {
        if (b >= c$$1 && b >= a$$1) {
          this.nodes[i$$20][j$$12].value = b;
          this.nodes[i$$20][j$$12].tracebackI = i$$20;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1;
        } else {
          this.nodes[i$$20][j$$12].value = c$$1;
          this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1;
        }
      }
    }
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
}
function alignQuad() {
  this.alignedM = new Array;
  this.alignedN = new Array;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  for (;currentNode.tracebackI != undefined && currentNode.tracebackJ != undefined;) {
    if (currentNode.tracebackI == currentI - 1 && currentNode.tracebackJ == currentJ - 1) {
      this.alignedM.push(this.M.pop());
      this.alignedN.push(this.N.pop());
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        this.alignedM.push("-");
        this.alignedN.push(this.N.pop());
      } else {
        this.alignedM.push(this.M.pop());
        this.alignedN.push("-");
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
  }
  this.alignedM = this.alignedM.reverse();
  this.alignedN = this.alignedN.reverse();
}
function getAlignedM() {
  return this.alignedM.join("");
}
function getAlignedN() {
  return this.alignedN.join("");
}
function AlignPairQuad() {
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
Complementarity.prototype = new ScoringMatrix;
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
document.onload = function() {
  document.main_form.main_submit.focus();
};
document.getElementById("submitbtn").onclick = function() {
  try {
    pcrPrimerStats();
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
};
document.getElementById("clearbtn").onclick = function() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
}

}

JAM.stopProfile('load');
