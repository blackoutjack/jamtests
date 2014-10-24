function runTest() {

  JAM.startProfile('load');
  var a = "ok";
  var b = "k";
  introspect(JAM.policy.p1) {
    var c = a.indexOf(b)
  }
  introspect(JAM.policy.p1) {
    alert(c);
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
