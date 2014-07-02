function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var f = document;
  var x = f.getElementsByTagName("ok");

  }

  return x instanceof HTMLCollection;
}
