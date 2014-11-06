var o = { a: 1, b: 2, c: 3 };
  introspect(JAM.policy.pFull) {
  x = 9;
with (o) {
  eval("x = a");

  }

}
print("x: " + x);
