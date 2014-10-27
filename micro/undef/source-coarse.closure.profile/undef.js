function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = y

  }

  JAM.stopProfile('load');

  return "Expect an exception";
}
