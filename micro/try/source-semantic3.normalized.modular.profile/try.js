function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  try {
    x = 1;
  } catch (e$$4) {
    x = 2;
  }

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
