function runTest() {

  JAM.startProfile('load');
  var a;
  var b = [5, 6, 7, 8];
  var c = [9, 10];
  var d = 2;
  var e = 1;
  b = c[e];
  a = b[d + 1]

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
