function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function g() {
    return 2;
  }
  f = g; // To avoid scoping issues with test framework.
  x = (0, 1, 2, eval)('f()');

  }

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
