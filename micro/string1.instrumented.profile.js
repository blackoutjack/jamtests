function runTest() {

  JAM.startProfile('load');
  var o = {};
  introspect(JAM.policy.p1) {
    o.src = "http://something"
  }
  var v0 = o.src;
  alert(v0);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
