function runTest() {

  JAM.startProfile('load');
  // eval0.js
  function f() {
    JAM.call(e, null, ["x = 2"]);
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  var e = eval;
  f()

  JAM.stopProfile('load');

  return x === 0;
}
