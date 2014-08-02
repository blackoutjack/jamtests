function runTest() {

  JAM.startProfile('load');
  function g() {
    return 2
  }
  f = g;
  0;
  1;
  2;
  var v0 = eval;
  x = JAM.call(v0, null, ["f()"]);

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
