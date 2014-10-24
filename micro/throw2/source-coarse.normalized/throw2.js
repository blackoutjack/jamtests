function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    return "exception!";
  }
  throw f()

  }

  return "RESULT NOT SPECIFIED";
}
