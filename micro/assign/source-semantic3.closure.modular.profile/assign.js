function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = document;
  a.cookie = "ok"

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
