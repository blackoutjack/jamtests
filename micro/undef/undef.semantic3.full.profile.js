function runTest() {

  JAM.startProfile('load');
  // undef.js
  introspect(JAM.policy.p1) {
    x = y;
  }

  JAM.stopProfile('load');

  return "Expect an exception";
}
