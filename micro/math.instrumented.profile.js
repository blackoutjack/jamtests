function runTest() {

  JAM.startProfile('load');
  var v0 = Math.random();
  introspect(JAM.policy.p1) {
    x = Math.floor(v0)
  }
  ;

  JAM.stopProfile('load');

  return x !== 2;
}
