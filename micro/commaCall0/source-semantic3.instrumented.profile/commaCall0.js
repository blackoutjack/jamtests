function runTest() {

  JAM.startProfile('load');
  function g() {
    return 2;
  }
  f = g;
  0;
  1;
  2;
  var v0 = eval;
  introspect(JAM.policy.p1) {
    x = v0("f()");
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
