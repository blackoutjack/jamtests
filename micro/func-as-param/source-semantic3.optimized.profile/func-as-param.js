function runTest() {

  JAM.startProfile('load');
  function h$$4(){introspect(JAM.policy.p1)x=2}function f(){var g=h$$4;g()}f()

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
