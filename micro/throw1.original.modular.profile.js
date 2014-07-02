function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    throw "exception!";
  }
  f();

  }

  JAM.stopProfile('load');

  return "Exception thrown";
}
