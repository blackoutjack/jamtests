function runTest() {

  JAM.startProfile('load');
var v0 = Math.random();
  introspect(JAMScript.introspectors.process0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34) {
    x = v0 * 3
  }
  x = 4;
  var v1 = Math.random();
  introspect(JAMScript.introspectors.process0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34) {
    x = v1 * 3
  }
  x = 5;
  var v2 = Math.random();
  introspect(JAMScript.introspectors.process0A9DE48654C3C7B21CDBDB4D97140E0D07DBBC9640D23A24DAEA6B10B8F5D449254A7CCB7EA66B34) {
    x = v2 * 3
  }
  x = 6;

  JAM.stopProfile('load');

  return x === 6;
}
