function runTest() {

  JAM.startProfile('load');
  // commaCall0.js
  function g() {
    return 2;
  }
  f = g;
  0;
  1;
  2;
  x = JAM.call(eval, null, ["f()"])

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
