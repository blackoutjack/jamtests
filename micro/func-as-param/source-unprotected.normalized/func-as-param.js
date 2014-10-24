function runTest() {
  function h$$4() {
    x = 2;
    return;
  }
  function f(g) {
    g();
    return;
  }
  f(h$$4)

  return "RESULT NOT SPECIFIED";
}
