function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    throw x = 2;
  }
  f();

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
