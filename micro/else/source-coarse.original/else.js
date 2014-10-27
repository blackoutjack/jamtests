function runTest() {
  introspect(JAM.policy.pFull) {
  x = 4;
  if (x == 4) {
    x = 3;
  } else {
    x = 2;
  }

  }

  return x === 3;
}
