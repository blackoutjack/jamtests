function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    eval("x = 2");
  }
  x = 0;
  f()

  }

  return "RESULT NOT SPECIFIED";
}
