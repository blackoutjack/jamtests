function runTest() {

  JAM.startProfile('load');
  function f(){introspect(JAM.policy.p2)x=2}f();introspect(JAM.policy.p2)x=2;

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
