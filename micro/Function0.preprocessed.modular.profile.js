function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var f = new Function("x = 2");
  f();

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
