function runTest() {

  JAM.startProfile('load');
  function f() {
    throw x = 2;
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
