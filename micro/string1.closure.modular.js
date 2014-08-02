function runTest() {
  introspect(JAM.policy.pFull) {
  var o = {};
  o.src = "http://something";
  alert(o.src);

  }

  return "RESULT NOT SPECIFIED";
}
