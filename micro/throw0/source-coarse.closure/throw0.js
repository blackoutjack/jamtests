function runTest() {
  introspect(JAM.policy.pFull) {
  throw "exception!"

  }

  return "Exception thrown";
}
