function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = 0;
  var b = 1;
  var d = "fine";
  var e = 4;
  var c = [];
  c[a] = 0;
  c[b] = 1;
  c[d] = 3;
  c[e] = 4;

  }

  JAM.stopProfile('load');

  return c.fine === 3;
}
