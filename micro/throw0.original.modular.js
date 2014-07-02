function runTest() {
introspect(JAMScript.introspectors.processAll) {
  throw "exception!";

  }

  return "Exception thrown";
}
