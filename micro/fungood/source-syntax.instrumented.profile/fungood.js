function runTest() {

  JAM.startProfile('load');
  function f() {
    return 4;
  }
  introspect(JAM.policy.p1) {
    x = 3;
  }
  introspect(JAM.policy.p1) {
    x = f();
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
