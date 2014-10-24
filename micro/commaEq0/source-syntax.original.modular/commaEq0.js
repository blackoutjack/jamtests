function runTest() {
  introspect(JAM.policy.pFull) {
  var a;
  var b = [5, 6, 7, 8];
  var c = [9, 10];
  var d = 2;
  var e = 1;
  a = (b = c[e], b[d + 1])

  }

  return "RESULT NOT SPECIFIED";
}
