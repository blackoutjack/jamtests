function runTest() {
  function f() {
    return "exception!";
  }
  throw f()

  return "RESULT NOT SPECIFIED";
}
