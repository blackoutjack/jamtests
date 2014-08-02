function runTest() {
  introspect(JAM.policy.pFull) {
  x = Math.floor(Math.random());

  }

  return x !== 2;
}
