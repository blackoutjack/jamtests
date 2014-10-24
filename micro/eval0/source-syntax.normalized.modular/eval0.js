function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    e("x = 2");
    return;
  }
  x = 0;
  var e = eval;
  f()

  }

  return "RESULT NOT SPECIFIED";
}
