
JAM.startProfile('load');
function runTest() {
  function g() {
    return 2;
  }
  f = g;
  0;
  1;
  2;
  x = JAM.call(eval, null, ["f()"])

  return "Violation should be blocked";
}

JAM.stopProfile('load');
