function runTest() {

  JAM.startProfile('load');
  function f() {
    throw"exception!";
  }
  f();

  JAM.stopProfile('load');

  return "Exception thrown";
}
