function runTest() {

  JAM.startProfile('load');
  var o = {};
  introspect(JAM.policy.p1) {
    o.src = "http://something"
  }
  alert(o.src);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
