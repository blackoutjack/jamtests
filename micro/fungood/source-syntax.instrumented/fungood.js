function runTest() {
  function f() {
    return 4;
  }
  introspect(JAM.policy.p1) {
    x = 3;
  }
  introspect(JAM.policy.p1) {
    x = f();
  }

  return x === 4;
}
