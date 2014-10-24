function runTest() {

  JAM.startProfile('load');
  // temporal.js
  x = 3;
  introspect(JAM.policy.p1) {
    x = 2;
  }
  x = 6;
  introspect(JAM.policy.p2) {
    x = 5;
  }

  JAM.stopProfile('load');

  return x === 6;
}
