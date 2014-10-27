function runTest() {
  function f(){introspect(JAM.policy.p1)x=3}f();introspect(JAM.policy.p1)x=2

  return x === 3;
}
