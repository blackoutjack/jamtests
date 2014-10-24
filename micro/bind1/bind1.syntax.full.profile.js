function runTest() {

  JAM.startProfile('load');
  // bind1.js
  introspect(JAM.policy.p1) {
    x = 1;
  }
  var e = JAM.call(eval.bind, eval, [null, "x = 2"]);
  e()

  JAM.stopProfile('load');

  return x === 1;
}
