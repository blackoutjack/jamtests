function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = 0;
  var b = 1;
  var v0 = a;
  if(v0) {
    v0 = b + 1
  }
  x = v0;

  }

  JAM.stopProfile('load');

  return x === 0;
}
