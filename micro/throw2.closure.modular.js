function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return"exception!"
  }
  throw f();
  }

  return "Exception thrown";
}
