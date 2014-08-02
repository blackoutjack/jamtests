function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 0;
  var e = eval;
  function f() {
    e("x = 2");
  }
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
