function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = new String;
  eval("String = Boolean");
  var b = new String

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
