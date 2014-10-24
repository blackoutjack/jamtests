function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 3

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
