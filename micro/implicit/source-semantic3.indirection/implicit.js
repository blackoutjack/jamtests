function runTest() {
  function f() {
    x = 3;
    return;
  }
  f();
  introspect(JAM.policy.p1) {
    x = 2;
  }

  return "RESULT NOT SPECIFIED";
}
