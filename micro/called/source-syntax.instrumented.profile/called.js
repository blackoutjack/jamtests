function runTest() {

  JAM.startProfile('load');
  var f = document;
  introspect(JAM.policy.p1) {
    var x = f.getElementsByTagName("ok")
  }

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
