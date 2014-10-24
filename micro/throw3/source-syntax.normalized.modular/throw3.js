function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    throw x = 2;
  }
  f()

  }

  return "RESULT NOT SPECIFIED";
}
