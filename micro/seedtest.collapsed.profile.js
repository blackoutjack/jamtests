function runTest() {

  JAM.startProfile('load');
  var a = 0;
  var b = 1;
  var d = "fine";
  var e = 4;
  var c = [];
  c[a] = 0;
  c[b] = 1;
  JAM.set(c, d, 3);
  c[e] = 4;

  JAM.stopProfile('load');

  return c.fine === 3;
}
