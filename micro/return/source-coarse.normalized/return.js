function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    x = 2;
    return;
  }
  f();
  x = 2

  }

  return typeof x === "undefined";
}
