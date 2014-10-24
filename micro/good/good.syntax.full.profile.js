function runTest() {

  JAM.startProfile('load');
  // good.js
  introspect(JAM.policy.p1) {
    x = 3;
  }

  JAM.stopProfile('load');

  return x === 3;
}
