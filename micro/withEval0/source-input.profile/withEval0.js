var o = { a: 1, b: 2, c: 3 };

  JAM.startProfile('load');
  x = 9;
with (o) {
  eval("x = a");

  JAM.stopProfile('load');

}
print("x: " + x);
