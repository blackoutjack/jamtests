
JAM.startProfile('load');
function runTest() {
  z = 3;
  y = z;
  introspect(JAM.policy.p1) {
    x = y;
  }

  return x === 3;
}

JAM.stopProfile('load');
