function runTest() {
  introspect(JAM.policy.pFull) {
  var i = 0;
  for (;i < 5;i = i + 1) {
    x = i;
  }

  }

  return "RESULT NOT SPECIFIED";
}
