function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    throw x = 2;
  }
  f();

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
