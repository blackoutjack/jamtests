function runTest() {
  // try1.js
  try {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  } finally {
    x = 3;
  }

  return x === 3;
}
