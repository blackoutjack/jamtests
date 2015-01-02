
JAM.startProfile('load');
function runTest() {
  function f(){introspect(JAM.policy.p2)x=2}f();introspect(JAM.policy.p2)x=2

  return typeof x === "undefined";
}

JAM.stopProfile('load');
