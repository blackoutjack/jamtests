function runTest() {
  function f() {
    introspect(JAM.policy.p1) {
      throw x = 2;
    }
  }
  f();

  return "RESULT NOT SPECIFIED";
}
