function runTest() {
  introspect(JAM.policy.pFull) {
  y = 3;
  x = y

  }

  return x === 3;
}
