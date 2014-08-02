function runTest() {
  introspect(JAM.policy.pFull) {
  x = 2;

  }

  return typeof x === "undefined";
}
