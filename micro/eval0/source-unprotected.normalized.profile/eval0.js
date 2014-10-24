function runTest() {

  JAM.startProfile('load');
  function f() {
    e("x = 2");
    return;
  }
  x = 0;
  var e = eval;
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
