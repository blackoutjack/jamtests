function runTest() {
  introspect(JAM.policy.pFull) {
  throw "exception!"

  }

  return "RESULT NOT SPECIFIED";
}
