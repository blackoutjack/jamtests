function runTest() {
  introspect(JAM.policy.pFull) {
  x = y;

  }

  return "Expect an exception";
}
