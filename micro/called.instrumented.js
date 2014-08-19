function runTest() {
  var f = document;
  introspect(JAM.policy.p1) {
    var x = f.getElementsByTagName("ok")
  }
  ;

  return x instanceof HTMLCollection;
}
