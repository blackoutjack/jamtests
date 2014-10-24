function runTest() {
  function f() {
    e("x = 2");
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  var e = eval;
  f()

  return "RESULT NOT SPECIFIED";
}
