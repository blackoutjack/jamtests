function runTest() {
  var a = document;
  introspect(JAM.policy.p1) {
    var b = a.cookie
  }

  return b === undefined;
}
