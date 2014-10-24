function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    x = 2;
  }
  setTimeout(f, 1E3)

  }

  return "RESULT NOT SPECIFIED";
}
