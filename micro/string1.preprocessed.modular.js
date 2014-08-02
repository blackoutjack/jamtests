function runTest() {
  introspect(JAM.policy.pFull) {
  var o = {};
  o.src = "http://something";
  var v0 = o.src;
  alert(v0);

  }

  return "RESULT NOT SPECIFIED";
}
