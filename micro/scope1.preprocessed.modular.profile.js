function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function a() {
    var z$$3 = 2;
    return z$$3
  }
  var z = 3;
  x = a();

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
