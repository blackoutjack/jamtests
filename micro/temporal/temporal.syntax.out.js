function runTest() {
  // temporal.js
  introspect(JAM.policy.p2) {
    x = 3;
  }
  introspect(JAM.policy.p2) {
    x = 2;
  }
  introspect(JAM.policy.p2) {
    x = 6;
  }
  introspect(JAM.policy.p2) {
    x = 5;
  }

  return x === 6;
}
