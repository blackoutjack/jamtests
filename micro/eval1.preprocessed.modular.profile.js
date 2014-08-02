function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    eval("x = 2");
    return
  }
  x = 0;
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
