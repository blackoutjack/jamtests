function runTest() {

  JAM.startProfile('load');
  function f() {
    e("x = 2");
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  var e = eval;
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
