function runTest() {

  JAM.startProfile('load');
  function h$$4() {
    introspect(JAM.policy.p1) {
      x = 2
    }
    return
  }
  function f(g) {
    g();
    return
  }
  f(h$$4);

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
