function runTest() {

  JAM.startProfile('load');
  // else.js
  introspect(JAM.policy.p1) {
    x = 4;
  }
  if (x == 4) {
    introspect(JAM.policy.p1) {
      x = 3;
    }
  } else {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  JAM.stopProfile('load');

  return x === 3;
}
