function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    e("x = 2");
    return
  }
  x = 0;
  var e = eval;
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
