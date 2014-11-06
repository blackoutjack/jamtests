var o = { a: 1, b: 2, c: 3};

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  with (o) {
  var d = b;
  o.b = 5;
  var e = b;

  }

  JAM.stopProfile('load');

}
print("d: " + d + " e: " + e);
