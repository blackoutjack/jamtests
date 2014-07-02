function runTest() {
function f() {
    eval("String.prototype.indexOf = String.prototype.toLowerCase;");
    var v = "OK".indexOf("K");
    return v
  }
  x = f();

  return x === "ok";
}
