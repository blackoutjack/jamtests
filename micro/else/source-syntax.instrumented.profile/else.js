
JAM.startProfile('load');
function runTest() {
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

  return x === 3;
}

JAM.stopProfile('load');
