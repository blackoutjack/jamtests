function runTest() {

  JAM.startProfile('load');
  var P = false;
  if (P) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
