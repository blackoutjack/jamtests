function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  z = 3; y = z; x = y;

  }

  JAM.stopProfile('load');

  return x === 3;
}
