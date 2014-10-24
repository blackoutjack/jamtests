function runTest() {
  introspect(JAM.policy.pFull) {
  x = 1;
  var e = eval.bind(null, "x = 2");
  e()

  }

  return "RESULT NOT SPECIFIED";
}
