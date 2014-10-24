function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  throw "exception!"

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
