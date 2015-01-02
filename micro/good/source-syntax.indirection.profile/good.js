
JAM.startProfile('load');
function runTest() {
  introspect(JAM.policy.p1) {
    x = 3;
  }

  return x === 3;
}

JAM.stopProfile('load');
