function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    return 2;
  }
  x = 3;
  x = f()

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
