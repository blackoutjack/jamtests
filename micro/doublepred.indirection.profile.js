function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p2) {
    x = 2
  }
  x = 3;
  introspect(JAM.policy.p2) {
    x = 2
  }
  x = 4;

  JAM.stopProfile('load');

  return x === 4;
}
