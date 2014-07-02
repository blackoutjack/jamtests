function runTest() {

  JAM.startProfile('load');
eval("eval(\"var xxx = 10;\");");
  alert(xxx);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
