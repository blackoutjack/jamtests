function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var f = document;
  var x = f.getElementById("ok");

  }

  return typeof x === "undefined";
}
