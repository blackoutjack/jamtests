function runTest() {
  var i = 0;
  var v0 = i < 5;
  for (;v0;) {
    x = i;
    i = i + 1;
    v0 = i < 5;
  }

  return "RESULT NOT SPECIFIED";
}
