function runTest() {

  JAM.startProfile('load');
  x = 3;
  introspect(JAM.policy.p2CFB7BC756B67B61B77FE6A02E61FD2CA839CC5F) {
    x = 2
  }
  x = 6;
  introspect(JAM.policy.p4E47677554DF5FF3E2D25414A4D4E67F96F8A65A) {
    x = 5
  }
  ;

  JAM.stopProfile('load');

  return x === 6;
}
