function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = document;
  a.cookie = "ok";

  }

  return document.cookie !== "ok";
}
