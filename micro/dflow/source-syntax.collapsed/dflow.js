function runTest() {
  y = 3;
  introspect(JAM.policy.p1) {
    x = y;
  }

  return x === 3;
}
