function runTest() {
  function f() {
    return 2;
  }
  x = 3;
  introspect(JAM.policy.p1) {
    x = f();
  }

  return "RESULT NOT SPECIFIED";
}
