function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var P = false;
  if (P) {
    x = 2;
  }

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
