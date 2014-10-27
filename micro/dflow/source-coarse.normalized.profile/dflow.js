function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  y = 3;
  x = y

  }

  JAM.stopProfile('load');

  return x === 3;
}
