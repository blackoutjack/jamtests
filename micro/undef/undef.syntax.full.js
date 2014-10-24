function runTest() {
  // undef.js
  introspect(JAM.policy.p1) {
    x = y;
  }

  return "Expect an exception";
}
