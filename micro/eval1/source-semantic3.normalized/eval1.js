function runTest() {
  function f() {
    eval("x = 2");
    return;
  }
  x = 0;
  f()

  return "RESULT NOT SPECIFIED";
}
