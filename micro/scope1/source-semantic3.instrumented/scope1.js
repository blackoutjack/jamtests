function runTest() {
  function a() {
    var z$$3 = 2;
    return z$$3;
  }
  var z = 3;
  introspect(JAM.policy.p1) {
    x = a();
  }

  return typeof x === "undefined";
}
