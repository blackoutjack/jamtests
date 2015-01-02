
JAM.startProfile('load');
function runTest() {
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

  return typeof x === "undefined";
}

JAM.stopProfile('load');
