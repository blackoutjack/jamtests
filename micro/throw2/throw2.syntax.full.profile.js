function runTest() {

  JAM.startProfile('load');
  // throw2.js
  function f() {
    return "exception!";
  }
  throw f()

  JAM.stopProfile('load');

  return "Exception thrown";
}
