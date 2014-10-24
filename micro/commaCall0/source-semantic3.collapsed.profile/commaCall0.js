function runTest() {

  JAM.startProfile('load');
  function g() {
    return 2;
  }
  f = g;
  0;
  1;
  2;
  x = JAM.call(eval, null, ["f()"])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
