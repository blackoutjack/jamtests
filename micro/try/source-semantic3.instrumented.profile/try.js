function runTest() {

  JAM.startProfile('load');
  try {
    x = 1;
  } catch (e$$4) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
