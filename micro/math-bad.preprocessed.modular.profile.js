function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var v1 = Math.random();
  var v0 = v1 * 4;
  x = Math.floor(v0);

  }

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
