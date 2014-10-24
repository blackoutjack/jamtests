function runTest() {
  // fun.js
  function f() {
    return 2;
  }
  introspect(JAM.policy.p1) {
    x = 3;
  }
  x = f()

  return x === 3;
}
