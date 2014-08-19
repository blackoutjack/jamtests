function runTest() {
  var o = {};
  introspect(JAM.policy.p1) {
    o.src = "http://something"
  }
  var v0 = o.src;
  alert(v0);

  return "RESULT NOT SPECIFIED";
}
