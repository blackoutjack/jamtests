function runTest() {
  introspect(JAM.policy.pFull) {
  var f = new Function("x = 2");
  f();

  }

  return typeof x === "undefined";
}
