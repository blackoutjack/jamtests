function runTest() {
  introspect(JAM.policy.pFull) {
  try {
    x = 2;
  } finally {
    x = 3;
  }

  }

  return x === 3;
}
