function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p1) {
    x = 1;
  }
  var e = eval;
  var v0 = ["x = 2"];
  e.apply(null, v0);
  alert(x)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
