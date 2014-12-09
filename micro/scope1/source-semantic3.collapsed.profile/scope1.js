function runTest() {

  JAM.startProfile('load');
  function a() {
    var z$$3 = 2;
    return z$$3;
  }
  var z = 3;
  var v0 = a();
  introspect(JAM.policy.p1) {
    x = v0
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
