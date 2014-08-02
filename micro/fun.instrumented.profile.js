function runTest() {

  JAM.startProfile('load');
  function f() {
    return 2
  }
  x = 3;
  introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = f()
  }
  ;

  JAM.stopProfile('load');

  return x === 3;
}
