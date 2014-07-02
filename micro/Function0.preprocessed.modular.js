function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var f = new Function("x = 2");
  f();

  }

  return typeof x === "undefined";
}
