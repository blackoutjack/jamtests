function runTest() {
  introspect(JAM.policy.p2) {
    x = 2
  }
  x = 3;
  introspect(JAM.policy.p2) {
    x = 2
  }
  x = 4;

  return x === 4;
}
