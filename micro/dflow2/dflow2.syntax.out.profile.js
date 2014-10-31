function runTest() {

  JAM.startProfile('load');
  // dflow2.js
  z = 3;
  y = z;
  introspect(JAM.policy.p1) {
    x = y;
  }

  JAM.stopProfile('load');

  return x === 3;
}
