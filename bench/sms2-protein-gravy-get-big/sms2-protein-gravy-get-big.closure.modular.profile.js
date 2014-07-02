
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function addReturns(sequence) {
  sequence = sequence.replace(/(.{60})/g, function(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  });
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if(arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  for(;i$$1 < arrayOfTitles.length;i$$1++) {
    if(arrayOfTitles[i$$1].search(/\S/) == -1 || arrayOfSequences[i$$1].search(/\S/) == -1 || arrayOfSequences[i$$1].length != lengthOfAlign) {
      alert("There is a problem with the alignment format.");
      return false
    }
  }
  return true
}
function checkCodonTable(codonTable) {
  if(codonTable.search(/AmAcid/) == -1 || codonTable.search(/Codon/) == -1 || codonTable.search(/Number/) == -1 || codonTable.search(/\/1000/) == -1 || codonTable.search(/Fraction\s*\.\./) == -1) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  if(formElement.value.search(/\S/) == -1) {
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
  for(;z$$2 < arrayOfPatterns.length;) {
    if(arrayOfPatterns[z$$2].search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  for(;j < arrayOfPatterns.length;j++) {
    geneticCodeMatchExp[j] = eval(arrayOfPatterns[j].match(/\/.+\//) + "gi");
    geneticCodeMatchResult[j] = arrayOfPatterns[j].match(/=[a-zA-Z\*]/).toString();
    geneticCodeMatchResult[j] = geneticCodeMatchResult[j].replace(/=/g, "")
  }
  var i$$2 = 0;
  for(;i$$2 <= testSequence.length - 3;i$$2 = i$$2 + 3) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    for(;j < geneticCodeMatchExp.length;j++) {
      if(codon.search(geneticCodeMatchExp[j]) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  for(;z$$3 < arrayOfPatterns$$1.length;) {
    if(arrayOfPatterns$$1[z$$3].search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1
  }
  var i$$3 = 0;
  for(;i$$3 < arrayOfPatterns$$1.length;i$$3++) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    for(;j$$1 < arrayOfPatterns$$1.length;j$$1++) {
      if(arrayOfPatterns$$1[j$$1].search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
    }
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  for(;z$$4 < arrayOfPatterns$$2.length;) {
    if(arrayOfPatterns$$2[z$$4].search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  if(getSequenceFromFasta(text$$7).replace(/[^A-Za-z]/g, "").length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false
  }else {
    return true
  }
}
function checkTextLength(text$$8, maxInput$$1) {
  if(text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
    return false
  }else {
    return true
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
  return dnaSequence
}
function closeForm() {
  outputWindow.document.write("</form>");
  return true
}
function closePre() {
  outputWindow.document.write("</div>");
  outputWindow.document.write("</pre>\n")
}
function closeTextArea() {
  outputWindow.document.write("</textarea>");
  return true
}
function closeWindow() {
  outputWindow.document.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  outputWindow.document.close();
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
  if(alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  for(;i$$4 < alignArray.length;i$$4++) {
    if(alignArray[i$$4].search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
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
  if(sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    for(;matchArray = re$$1.exec(sequenceData);) {
      arrayOfFasta.push(matchArray[0])
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(fastaSequenceTitle.search(/[^\s]/) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + sequence$$2.substring(0, 10) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(fastaSequenceTitleOne.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceOne.substring(0, 10) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(fastaSequenceTitleTwo.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceTwo.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  for(;j$$2 < arrayOfPatterns$$3.length;j$$2++) {
    geneticCodeMatchExp$$1[j$$2] = eval(arrayOfPatterns$$3[j$$2].match(/\/.+\//) + "gi")
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  for(;j$$3 < arrayOfPatterns$$4.length;j$$3++) {
    geneticCodeMatchResult$$1[j$$3] = arrayOfPatterns$$4[j$$3].match(/=[a-zA-Z\*]/).toString();
    geneticCodeMatchResult$$1[j$$3] = geneticCodeMatchResult$$1[j$$3].replace(/=/g, "")
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(fastaSequenceTitle$$1.search(/[^\s]/) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + sequence$$3.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(fastaSequenceTitle$$2.search(/[^\s]/) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + sequence$$4.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(fastaSequenceTitleOne$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceOne$$1.substring(0, 10) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(fastaSequenceTitleTwo$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceTwo$$1.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  for(;j$$4 < lengthOut;j$$4++) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar)
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  if(sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    fastaTitle = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "").toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  if(expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1 || expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1 || expressionToCheck.search(/\[\]/) != -1 || expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1 || expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1 || expressionToCheck.search(/\|\|/) != -1 || expressionToCheck.search(/\/\|/) != -1 || expressionToCheck.search(/\|\//) != -1 || expressionToCheck.search(/\[.\]/) != -1 || expressionToCheck.search(/\</) != -1 || expressionToCheck.search(/\>/) != 
  -1) {
    return false
  }
  return true
}
function openForm() {
  outputWindow.document.write('<form action="">\n');
  return true
}
function openPre() {
  outputWindow.document.write("<pre>");
  outputWindow.document.write('<div class="pre">')
}
function openTextArea() {
  outputWindow.document.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true)
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  outputWindow.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n');
  if(isColor) {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n")
  }else {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n")
  }
  outputWindow.document.write("</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n");
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true)
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  outputWindow.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n');
  if(isBackground) {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n")
  }else {
    outputWindow.document.write('<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n")
  }
  outputWindow.document.write("</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n");
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
  if(dnaSequence$$1.search(/./) != -1) {
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
  for(;j$$5 < lengthOfColumn;j$$5++) {
    tempString = tempString + " "
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend
}
function testScript() {
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(testString.search(re$$2) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  if(!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, function(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  });
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(testNum.toFixed(3) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(testNum.toPrecision(5) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(theNumber$$1.search(/\d/) == -1) {
    alert("Please enter a number");
    return false
  }
}
function verifyEmbl(emblFile) {
  if(emblFile.search(/ID/) == -1 || emblFile.search(/AC/) == -1 || emblFile.search(/DE/) == -1 || emblFile.search(/SQ/) == -1) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(theNumber$$2.search(/\d/) == -1) {
    alert("Please enter a number.");
    return false
  }
  if(theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false
  }
}
function verifyDna(dnaSequence$$2) {
  if(dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  if(genBankFile.search(/LOCUS/) == -1 || genBankFile.search(/DEFINITION/) == -1 || genBankFile.search(/ACCESSION/) == -1 || genBankFile.search(/ORIGIN/) == -1) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  if(genBankFile$$1.search(/LOCUS/) == -1 || genBankFile$$1.search(/DEFINITION/) == -1 || genBankFile$$1.search(/ACCESSION/) == -1 || genBankFile$$1.search(/ORIGIN/) == -1) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(genBankFile$$1.search(/FEATURES {13}/) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  if(emblFile$$1.search(/ID/) == -1 || emblFile$$1.search(/AC/) == -1 || emblFile$$1.search(/DE/) == -1 || emblFile$$1.search(/SQ/) == -1) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(emblFile$$1.search(/^FT/m) == -1) {
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
  for(;i$$5 < stopBase;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    for(;j$$6 <= basePerLine / groupSize;j$$6++) {
      for(;k < groupSize;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar
    }
    outputWindow.document.write(lineOfText + "\n");
    lineOfText = ""
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
    if(adjustment < 0 && adjusted >= 0) {
      adjusted++
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
  for(;i$$6 < stopBase$$2;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    for(;j$$7 <= basePerLine$$2 / groupSize$$2;j$$7++) {
      for(;k$$1 < groupSize$$2;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if(numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3)
      }
      if(i$$6 >= stopBase$$2) {
        break
      }
      k$$1 = 0
    }
    if(numberPosition$$1 == "left") {
      outputWindow.document.write(rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n");
      if(strands$$1 == "two") {
        outputWindow.document.write(rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n");
        outputWindow.document.write("\n")
      }
    }else {
      if(numberPosition$$1 == "right") {
        outputWindow.document.write(lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n");
        if(strands$$1 == "two") {
          outputWindow.document.write(complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n");
          outputWindow.document.write("\n")
        }
      }else {
        if(numberPosition$$1 == "above") {
          outputWindow.document.write(aboveNum + "\n");
          outputWindow.document.write(lineOfText$$1 + "\n");
          if(strands$$1 == "two") {
            outputWindow.document.write(complement(lineOfText$$1) + "\n");
            outputWindow.document.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = ""
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
  for(;i$$7 < stopBase$$3;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    for(;j$$8 <= basePerLine$$3 / groupSize$$3;j$$8++) {
      for(;k$$2 < groupSize$$3;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if(numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4)
      }
      if(i$$7 >= stopBase$$3) {
        break
      }
      k$$2 = 0
    }
    if(numberPosition$$2 == "left") {
      outputWindow.document.write(rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n")
    }else {
      if(numberPosition$$2 == "right") {
        outputWindow.document.write(lineOfText$$2 + i$$7 + "\n")
      }else {
        if(numberPosition$$2 == "above") {
          outputWindow.document.write(aboveNum$$1 + "\n");
          outputWindow.document.write(lineOfText$$2 + "\n")
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = ""
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
  if(sequence$$13.length <= firstIndexToMutate || lastIndexToMutate < 0 || lastIndexToMutate <= firstIndexToMutate) {
    numMut = 0
  }
  var i$$8 = 0;
  for(;i$$8 < numMut;i$$8++) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    if(randNum < firstIndexToMutate || randNum > lastIndexToMutate) {
      numMut++;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = Math.round(Math.random() * components$$1.length);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      if(components$$1[componentsIndex] != currentChar) {
        needNewChar = false
      }
    }
    sequence$$13 = sequence$$13.substring(0, randNum) + components$$1[componentsIndex] + sequence$$13.substring(randNum + 1, sequence$$13.length)
  }
  outputWindow.document.write(addReturns(sequence$$13));
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  for(;j$$9 < lengthOut$$1;j$$9++) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      outputWindow.document.write(sequence$$14 + "\n");
      sequence$$14 = ""
    }
  }
  outputWindow.document.write(sequence$$14 + "\n");
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
  if(dnaConformation == "circular") {
    shiftValue = sequence$$15.substring(0, lookAhead).length;
    sequence$$15 = sequence$$15.substring(sequence$$15.length - lookAhead, sequence$$15.length) + sequence$$15 + sequence$$15.substring(0, lookAhead);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  outputWindow.document.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  outputWindow.document.write('<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n");
  var i$$9 = 0;
  for(;i$$9 < arrayOfItems.length;i$$9++) {
    tempString$$1 = "none";
    backGroundClass = "many";
    matchExp = arrayOfItems[i$$9].match(/\/.+\//) + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    cutDistance = parseFloat(arrayOfItems[i$$9].match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    for(;matchArray$$1 = matchExp.exec(sequence$$15);) {
      matchPosition = matchExp.lastIndex - cutDistance;
      if(matchPosition >= lowerLimit && matchPosition < upperLimit) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1
    }
    if(tempString$$1.search(/\d/) != -1) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    if(timesFound == 0) {
      backGroundClass = "none"
    }else {
      if(timesFound == 1) {
        backGroundClass = "one"
      }else {
        if(timesFound == 2) {
          backGroundClass = "two"
        }else {
          if(timesFound == 3) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    outputWindow.document.write('<tr><td class="' + backGroundClass + '">' + arrayOfItems[i$$9].match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n");
    timesFound = 0
  }
  outputWindow.document.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  outputWindow.document.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  outputWindow.document.write('<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n");
  var i$$10 = 0;
  for(;i$$10 < arrayOfItems$$1.length;i$$10++) {
    var tempNumber = 0;
    var matchExp$$1 = arrayOfItems$$1[i$$10].match(/\/[^\/]+\//) + "gi";
    matchExp$$1 = eval(matchExp$$1);
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    if(originalLength + 1 - parseFloat(arrayOfItems$$1[i$$10].match(/\d+/)) > 0) {
      percentage = 100 * tempNumber / (originalLength + 1 - parseFloat(arrayOfItems$$1[i$$10].match(/\d+/)))
    }
    outputWindow.document.write("<tr><td>" + arrayOfItems$$1[i$$10].match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n")
  }
  outputWindow.document.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  for(;sequence$$17.length > 0;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      outputWindow.document.write(tempSeq + "\n");
      tempSeq = ""
    }
  }
  outputWindow.document.write(tempSeq + "\n");
  return true
}
function proteinGravy(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  if(testScript() == false) {
    return false
  }
  if(checkFormElement(theDocument.forms[0].elements[0]) == false || checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false) {
    return false
  }
  openWindow("Protein GRAVY");
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  for(;i$$11 < arrayOfFasta$$1.length;i$$11++) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProtein(newProtein);
    outputWindow.document.write(getInfoFromTitleAndSequence(title$$9, newProtein));
    outputWindow.document.write(getProteinGravy(newProtein));
    outputWindow.document.write("<br />\n<br />\n")
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  for(;i$$12 < sequence$$18.length;i$$12++) {
    gravyResult = gravyResult + gravyValues[sequence$$18.charAt(i$$12)]
  }
  if(sequence$$18.length > 0) {
    gravyResult = gravyResult / sequence$$18.length
  }else {
    return"The sequence is too short"
  }
  return gravyResult.toFixed(3)
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -0.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -0.8;
  hash["t"] = -0.7;
  hash["w"] = -0.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash
}
document.onload = function() {
  document.main_form.main_submit.focus()
};
document.getElementById("submitbtn").onclick = function() {
  try {
    proteinGravy(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
};
document.getElementById("clearbtn").onclick = function() {
  document.forms[0].elements[0].value = " "
};

}

JAM.stopProfile('load');
