function runTest() {

  JAM.startProfile('load');
  x = 9;
  var o = {a:1, b:2, c:3};
  with(o) {
    x = b;
    var d = x;
    var e = c;
  }
  var v4 = "x: " + x;
  var v3 = v4 + " d: ";
  var v2 = v3 + d;
  var v1 = v2 + " e: ";
  var v0 = v1 + e;
  print(v0)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
