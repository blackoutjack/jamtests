function runTest() {

  JAM.startProfile('load');
  function f() {
    eval("x = 2");
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
