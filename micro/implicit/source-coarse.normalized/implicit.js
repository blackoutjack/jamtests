function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    x = 3;
    return;
  }
  f();
  x = 2

  }

  return x === 3;
}
