function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    x = 2;
  }
  f();
  x = 2;

  }

  return typeof x === "undefined";
}
