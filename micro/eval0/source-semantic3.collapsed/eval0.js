function runTest() {
  function f() {
    JAM.call(e, null, ["x = 2"]);
    return;
  }
  x = 0;
  var e = eval;
  f()

  return "RESULT NOT SPECIFIED";
}
