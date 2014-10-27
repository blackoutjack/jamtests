function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p1) {
    x = 1;
  }
  var e = eval.bind(null, "x = 2");
  e()

  JAM.stopProfile('load');

  return x === 1;
}
