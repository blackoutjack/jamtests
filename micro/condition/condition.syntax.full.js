function runTest() {
  // condition.js
  var P = false;
  if (P) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  return typeof x === "undefined";
}
