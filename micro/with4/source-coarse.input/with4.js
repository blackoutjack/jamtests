var o = { a: 1, b: 2, c: 3};
  introspect(JAM.policy.pFull) {
  with (o) {
  var d = b;
  o.b = 5;
  var e = b;

  }

}
print("d: " + d + " e: " + e);
