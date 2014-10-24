function runTest() {
  x = 1;
  var e = eval;
  var v0 = ["x = 2"];
  e.apply(null, v0);
  alert(x)

  return "RESULT NOT SPECIFIED";
}
