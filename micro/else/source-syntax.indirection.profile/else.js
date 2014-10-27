function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p1) {
    x = 4;
  }
  var v0 = x == 4;
  if (v0) {
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
