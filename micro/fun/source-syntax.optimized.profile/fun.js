
JAM.startProfile('load');
function runTest() {
  function f(){return 2}introspect(JAM.policy.p1)x=3;x=f()

  return x === 3;
}

JAM.stopProfile('load');
