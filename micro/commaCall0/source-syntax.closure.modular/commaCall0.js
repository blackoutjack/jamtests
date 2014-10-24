function runTest() {
  introspect(JAM.policy.pFull) {
  function g() {
    return 2;
  }
  f = g;
  x = (0, 1, 2, eval)("f()")

  }

  return "RESULT NOT SPECIFIED";
}
