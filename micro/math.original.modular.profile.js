function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = Math.floor(Math.random());

  }

  JAM.stopProfile('load');

  return x !== 2;
}
