function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f(g) {
    g()
  }
  f(function h$$4() {
    x = 2
  });

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
