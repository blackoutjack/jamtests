function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    eval("x = 2");
    return;
  }
  x = 0;
  f()

  }

  return x === 0;
}
