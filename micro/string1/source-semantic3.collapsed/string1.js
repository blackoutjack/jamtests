function runTest() {
  var o = {};
  introspect(JAM.policy.p1) {
    o.src = "http://something";
  }
  alert(o.src)

  return "RESULT NOT SPECIFIED";
}
