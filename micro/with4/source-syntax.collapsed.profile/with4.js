
JAM.startProfile('load');
function runTest() {
  var o = {a:1, b:2, c:3};
  with(o) {
    var d = b;
    o.b = 5;
    var e = b;
  }
  print("d: " + d + " e: " + e)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
