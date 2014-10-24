function runTest() {
  introspect(JAM.policy.pFull) {
  var a = document;
  a.cookie = "ok"

  }

  return "RESULT NOT SPECIFIED";
}
