function runTest() {
  function f() {
    introspect(JAM.policy.p2) {
      x = 2;
    }
    return;
  }
  f();
  introspect(JAM.policy.p2) {
    x = 2;
  }

  return "RESULT NOT SPECIFIED";
}
