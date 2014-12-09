function runTest() {
  var v0 = Math.random() * 4;
  var v2 = JAM.call(Math.floor, Math, [v0]);
  introspect(JAM.policy.p1) {
    x = v2
  }

  return typeof x === "undefined" || x !== 2;
}
