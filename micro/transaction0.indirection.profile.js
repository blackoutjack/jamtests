function runTest() {

  JAM.startProfile('load');
  function pol(tx) {
    tx.commit();
    return
  }
  x = undefined;
  introspect(pol) {
    introspect(JAM.policy.p1) {
      x = 2
    }
  }
  ;

  JAM.stopProfile('load');

  return x === undefined;
}
