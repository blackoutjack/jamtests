function runTest() {

  JAM.startProfile('load');
  function f() {
    x = 2;
  }
  setTimeout(f, 1E3)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
