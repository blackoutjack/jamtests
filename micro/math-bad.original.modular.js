function runTest() {
  introspect(JAM.policy.pFull) {
  x = Math.floor(Math.random() * 4);

  }

  return typeof x === "undefined" || x !== 2;
}
