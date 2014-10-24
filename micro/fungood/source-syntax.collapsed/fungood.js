function runTest() {
  function f() {
    return 4;
  }
  introspect(JAM.policy.p1) {
    x = 3;
  }
  x = f()

  return "RESULT NOT SPECIFIED";
}
