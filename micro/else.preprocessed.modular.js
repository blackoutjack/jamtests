function runTest() {
  introspect(JAM.policy.pFull) {
  x = 4;
  var v0 = x == 4;
  if(v0) {
    x = 3
  }else {
    x = 2
  }
  ;

  }

  return x === 3;
}
