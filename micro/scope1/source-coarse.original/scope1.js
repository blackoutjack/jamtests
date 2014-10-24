function runTest() {
  introspect(JAM.policy.pFull) {
  var z = 3;
  function a() {
    var z$$3 = 2;
    return z$$3;
  }
  x = a()

  }

  return "RESULT NOT SPECIFIED";
}
