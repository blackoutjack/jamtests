function runTest() {

  JAM.startProfile('load');
  function g() {
    return 2
  }
  f = g;
  x = (0, 1, 2, eval)("f()");

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
