function runTest() {
  var s = "ok";
  if (!s.indexOf("k")) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  return "RESULT NOT SPECIFIED";
}
