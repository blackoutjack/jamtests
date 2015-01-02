
JAM.startProfile('load');
function runTest() {
  function f() {
    throw "exception!";
  }
  f()

  return "Exception thrown";
}

JAM.stopProfile('load');
