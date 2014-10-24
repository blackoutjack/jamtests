function runTest() {

  JAM.startProfile('load');
  var a = document;
  introspect(JAM.policy.p1) {
    var b = a.cookie
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
