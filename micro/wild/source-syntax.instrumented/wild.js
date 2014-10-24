function runTest() {
  var a = "ok";
  introspect(JAM.policy.p1) {
    a.innerHTML = 1;
  }

  return "RESULT NOT SPECIFIED";
}
