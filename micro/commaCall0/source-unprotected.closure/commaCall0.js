function runTest() {
  function g() {
    return 2;
  }
  f = g;
  x = (0, 1, 2, eval)("f()")

  return "Violation should be blocked";
}
