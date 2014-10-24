function runTest() {
  introspect(JAM.policy.pFull) {
  var s = "ok";
  var v1 = s.indexOf("k");
  var v0 = !v1;
  if (v0) {
    x = 2;
  }

  }

  return "RESULT NOT SPECIFIED";
}
