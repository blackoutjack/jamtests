function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function a() {
    var z$$3 = 2;
    return z$$3
  }
  var z = 3;
  x = a();

  }

  return typeof x === "undefined";
}
