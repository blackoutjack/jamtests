
JAM.startProfile('load');
function runTest() {
  eval('eval("var xxx = 10;");');
  alert(xxx)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
