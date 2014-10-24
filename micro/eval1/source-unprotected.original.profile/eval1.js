function runTest() {

  JAM.startProfile('load');
  x = 0;
  function f() {
    eval("x = 2");
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
