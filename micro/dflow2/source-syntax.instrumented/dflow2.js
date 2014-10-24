function runTest() {
  z = 3;
  y = z;
  introspect(JAM.policy.p1) {
    x = y;
  }

  return "RESULT NOT SPECIFIED";
}
