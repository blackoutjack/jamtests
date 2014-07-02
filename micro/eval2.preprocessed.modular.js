function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    eval("String.prototype.indexOf = String.prototype.toLowerCase;");
    var v = "OK".indexOf("K");
    return v
  }
  x = f();

  }

  return x === "ok";
}
