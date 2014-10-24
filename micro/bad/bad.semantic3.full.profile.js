function runTest() {

  JAM.startProfile('load');
  // bad.js
  introspect(JAM.policy.p1) {
    x = 2;
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
