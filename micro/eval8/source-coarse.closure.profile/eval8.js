function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  eval('eval("var xxx = 10;");');
  alert(xxx)

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
