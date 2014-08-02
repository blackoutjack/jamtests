function runTest() {

  JAM.startProfile('load');
  var v0 = Math.random();
  introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = Math.floor(v0)
  }
  ;

  JAM.stopProfile('load');

  return x !== 2;
}
