function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = document;
  var b = a.cookie;

  }

  return b === undefined;
}
