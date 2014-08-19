function runTest() {
  var v0 = Math.random();
  introspect(JAM.policy.p1) {
    x = Math.floor(v0)
  }
  ;

  return x !== 2;
}
