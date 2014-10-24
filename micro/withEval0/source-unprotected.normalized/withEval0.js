function runTest() {
  var o = {a:1, b:2, c:3};
  x = 9;
  with(o) {
    eval("x = a");
  }
  var v0 = "x: " + x;
  print(v0)

  return "RESULT NOT SPECIFIED";
}
