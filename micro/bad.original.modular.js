function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 2

  }

  return typeof x === "undefined";
}
