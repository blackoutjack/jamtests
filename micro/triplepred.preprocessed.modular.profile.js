function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var v0 = Math.random();
  x = v0 * 3;
  x = 4;
  var v1 = Math.random();
  x = v1 * 3;
  x = 5;
  var v2 = Math.random();
  x = v2 * 3;
  x = 6;

  }

  JAM.stopProfile('load');

  return x === 6;
}
