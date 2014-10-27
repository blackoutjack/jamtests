function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    x = 3;
    return;
  }
  f();
  x = 2

  }

  JAM.stopProfile('load');

  return x === 3;
}
