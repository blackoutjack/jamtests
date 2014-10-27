function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    throw "exception!";
  }
  f()

  }

  return "Exception thrown";
}
