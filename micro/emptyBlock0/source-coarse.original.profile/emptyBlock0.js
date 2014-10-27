function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    if (typeof x === "undefined") {
    } else {
      x = 2;
    }
  }
  f()

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
