function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = 0;
  var b = 1;
  x = a && b + 1;

  }

  JAM.stopProfile('load');

  return x === 0;
}
