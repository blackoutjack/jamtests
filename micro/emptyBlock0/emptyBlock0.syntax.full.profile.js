function runTest() {

  JAM.startProfile('load');
  // emptyBlock0.js
  function f() {
    if (typeof x === "undefined") {
    } else {
      introspect(JAM.policy.p1) {
        x = 2;
      }
    }
    return;
  }
  f()

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
