function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = Math.floor(Math.random() * 4)

  }

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
