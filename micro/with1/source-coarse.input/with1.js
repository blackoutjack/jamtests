x = 9;
  introspect(JAM.policy.pFull) {
  var o = { a: 1, b: 2, c: 3 };
with (o) {
  x = b;
  var d = x;
  var e = c;

  }

}
print("x: " + x + " d: " + d + " e: " + e);
