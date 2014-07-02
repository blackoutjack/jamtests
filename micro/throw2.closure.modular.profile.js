function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return"exception!"
  }
  throw f();
  }

  JAM.stopProfile('load');

  return "Exception thrown";
}
