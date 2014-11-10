function runTest() {
  function f(){x=3}f();introspect(JAM.policy.p1)x=2

  return x === 3;
}
