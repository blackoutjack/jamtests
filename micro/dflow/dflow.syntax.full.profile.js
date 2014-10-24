function runTest() {

  JAM.startProfile('load');
  // dflow.js
  y = 3;
  introspect(JAM.policy.p1) {
    x = y;
  }

  JAM.stopProfile('load');

  return x === 3;
}
