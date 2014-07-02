function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var y = "tab|\u0019|tab";
  var x = y;

  }

  return x === "tab|\u0019|tab";
}
