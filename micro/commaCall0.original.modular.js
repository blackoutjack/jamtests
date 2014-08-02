function runTest() {
  introspect(JAM.policy.pFull) {
  function g() {
    return 2;
  }
  f = g; // To avoid scoping issues with test framework.
  x = (0, 1, 2, eval)('f()');

  }

  return "Violation should be blocked";
}
