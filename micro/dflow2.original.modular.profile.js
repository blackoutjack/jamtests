function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  z = 3; y = z; x = y;

  }

  JAM.stopProfile('load');

  return x === 3;
}
