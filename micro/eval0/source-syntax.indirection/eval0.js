function runTest() {
  function f() {
    JAM.call(e, null, ["x = 2"]);
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  var e = eval;
  f()

  return x === 0;
}
