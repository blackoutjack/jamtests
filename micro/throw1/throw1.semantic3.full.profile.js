function runTest() {

  JAM.startProfile('load');
  // throw1.js
  function f() {
    throw "exception!";
  }
  f()

  JAM.stopProfile('load');

  return "Exception thrown";
}
