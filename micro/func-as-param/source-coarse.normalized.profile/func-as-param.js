function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function h$$4() {
    x = 2;
    return;
  }
  function f(g) {
    g();
    return;
  }
  f(h$$4)

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
