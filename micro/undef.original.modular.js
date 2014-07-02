function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = y;

  }

  return "Expect an exception";
}
