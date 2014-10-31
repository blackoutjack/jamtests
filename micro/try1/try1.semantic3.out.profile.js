function runTest() {

  JAM.startProfile('load');
  // try1.js
  try {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  } finally {
    x = 3;
  }

  JAM.stopProfile('load');

  return x === 3;
}
