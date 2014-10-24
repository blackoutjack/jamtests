function runTest() {
  // good.js
  introspect(JAM.policy.p1) {
    x = 3;
  }

  return x === 3;
}
