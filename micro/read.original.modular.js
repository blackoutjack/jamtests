function runTest() {
  introspect(JAM.policy.pFull) {
  var a = document;
  var b = a.cookie;

  }

  return b === undefined;
}
