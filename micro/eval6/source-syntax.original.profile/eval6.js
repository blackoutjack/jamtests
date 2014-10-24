function runTest() {

  JAM.startProfile('load');
  eval("var xxx = 5;");
  alert(xxx)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
