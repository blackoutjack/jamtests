function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p1) {
    x = y;
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
