function runTest() {
  introspect(JAM.policy.pFull) {
  x = 3;

  }

  return x === 3;
}
