function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    return 2
  }
  function g() {
    return 1
  }
  var v = 5;
  var a = v + (++v, f()) + g();

  }

  return a === 8;
}
