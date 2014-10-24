function runTest() {
  introspect(JAM.policy.pFull) {
  try {
    x = 1;
  } catch (e$$4) {
    x = 2;
  }

  }

  return "RESULT NOT SPECIFIED";
}
