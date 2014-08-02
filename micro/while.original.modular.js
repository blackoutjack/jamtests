function runTest() {
  introspect(JAM.policy.pFull) {
  i = 3; while (i < 5) { x = i; i++; }

  }

  return x === 4;
}
