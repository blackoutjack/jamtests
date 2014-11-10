function runTest() {

  JAM.startProfile('load');
  function f(){if("undefined"!==typeof x)introspect(JAM.policy.p1)x=2}f()

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
