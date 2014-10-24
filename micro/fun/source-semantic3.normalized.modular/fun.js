function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    return 2;
  }
  x = 3;
  x = f()

  }

  return "RESULT NOT SPECIFIED";
}
