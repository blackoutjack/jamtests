
JAM.startProfile('load');
function runTest() {
  introspect(JAM.policy.p1) {
    x = 1;
  }
  var e = eval.bind(null, "x = 2");
  e()

  return x === 1;
}

JAM.stopProfile('load');
