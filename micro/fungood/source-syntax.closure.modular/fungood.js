function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    return 4;
  }
  x = 3;
  x = f()

  }

  return "RESULT NOT SPECIFIED";
}
