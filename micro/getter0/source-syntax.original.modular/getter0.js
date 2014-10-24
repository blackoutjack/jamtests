function runTest() {
  introspect(JAM.policy.pFull) {
  var a = {get ok() {
    return "ok";
  }};
  alert(a.ok)

  }

  return "RESULT NOT SPECIFIED";
}
