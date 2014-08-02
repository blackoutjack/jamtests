function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 2

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
