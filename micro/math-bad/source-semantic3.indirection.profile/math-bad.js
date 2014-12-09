function runTest() {

  JAM.startProfile('load');
  var v1 = Math.random();
  var v0 = v1 * 4;
  var v2 = JAM.call(Math.floor, Math, [v0]);
  introspect(JAM.policy.p1) {
    x = v2
  }

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
