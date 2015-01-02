
JAM.startProfile('load');
function runTest() {
  eval("var xxx = 5;");
  alert(xxx)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
