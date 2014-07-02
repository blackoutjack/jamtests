function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  y = 3; x = y;

  }

  JAM.stopProfile('load');

  return x === 3;
}
