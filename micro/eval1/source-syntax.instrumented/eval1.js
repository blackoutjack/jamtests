function runTest() {
  function f() {
    eval("x = 2");
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  f()

  return x === 0;
}
