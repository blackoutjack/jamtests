function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return this.indexOf("k")
  }
  var g = f.bind("ok");
  var v = g();

  }

  return v === 1;
}
