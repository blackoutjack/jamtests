x = 9;

  JAM.startProfile('load');
  var o = { a: 1, b: 2, c: 3 };
with (o) {
  x = b;
  var d = x;
  var e = c;

  JAM.stopProfile('load');

}
print("x: " + x + " d: " + d + " e: " + e);
