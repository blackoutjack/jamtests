function runTest() {
  introspect(JAM.policy.pFull) {
  z = 3;
  y = z;
  x = y

  }

  return "RESULT NOT SPECIFIED";
}
