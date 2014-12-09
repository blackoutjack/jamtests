function runTest() {

  JAM.startProfile('load');
  function f(){return 2}x=3;var v0=f();introspect(JAM.policy.p1)x=v0

  JAM.stopProfile('load');

  return x === 3;
}
