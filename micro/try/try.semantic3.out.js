function runTest() {
  // try.js
  try {
    x = 1;
  } catch (e$$4) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  return x === 1;
}
