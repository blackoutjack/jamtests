function runTest() {
  function f() {
    throw"exception!";
  }
  f();

  return "Exception thrown";
}
