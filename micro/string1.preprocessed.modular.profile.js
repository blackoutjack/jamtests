function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var o = {};
  o.src = "http://something";
  var v0 = o.src;
  alert(v0);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
