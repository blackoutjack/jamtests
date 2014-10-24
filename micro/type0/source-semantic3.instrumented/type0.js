function runTest() {
  var a = "ok";
  var b = "k";
  introspect(JAM.policy.p1) {
    var c = a.indexOf(b)
  }
  alert(c)

  return "RESULT NOT SPECIFIED";
}
