function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    throw"exception!";
  }
  f();

  }

  return "Exception thrown";
}
