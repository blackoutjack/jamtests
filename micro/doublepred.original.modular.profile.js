function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 2;
  x = 3;
  x = 2;
  x = 4;

  }

  JAM.stopProfile('load');

  return x === 4;
}
