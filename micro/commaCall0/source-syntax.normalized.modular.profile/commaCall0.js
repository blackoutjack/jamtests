function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function g() {
    return 2;
  }
  f = g;
  0;
  1;
  2;
  var v0 = eval;
  x = v0("f()")

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
