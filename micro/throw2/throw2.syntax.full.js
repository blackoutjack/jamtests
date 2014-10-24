function runTest() {
  // throw2.js
  function f() {
    return "exception!";
  }
  throw f()

  return "Exception thrown";
}
