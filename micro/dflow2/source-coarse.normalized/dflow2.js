function runTest() {
  introspect(JAM.policy.pFull) {
  z = 3;
  y = z;
  x = y

  }

  return x === 3;
}
