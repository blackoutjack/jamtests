function runTest() {
  introspect(JAM.policy.pFull) {
  try {
      x = 1;
  } catch(e) {
      x = 2;
  }

  }

  return x === 1;
}
