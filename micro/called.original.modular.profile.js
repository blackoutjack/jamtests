function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var f = document;
  var x = f.getElementsByTagName("ok");

  }

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
