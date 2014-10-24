function runTest() {

  JAM.startProfile('load');
  y = 3;
  introspect(JAM.policy.p1) {
    x = y;
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
