function runTest() {
  function f() {
    introspect(JAM.policy.p1) {
      x = 2;
    }
    return;
  }
  setTimeout(f, 1E3)

  return "RESULT NOT SPECIFIED";
}
