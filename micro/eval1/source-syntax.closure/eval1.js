function runTest() {
  function f() {
    eval("x = 2");
  }
  x = 0;
  f()

  return "RESULT NOT SPECIFIED";
}
