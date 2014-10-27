function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = document;
  var b = a.cookie

  }

  JAM.stopProfile('load');

  return b === undefined;
}
