function runTest() {
  introspect(JAM.policy.p1) {
    x = 2;
  }

  return typeof x === "undefined";
}
