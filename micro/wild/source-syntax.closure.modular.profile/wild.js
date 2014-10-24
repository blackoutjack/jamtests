function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = "ok";
  a.innerHTML = 1

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
