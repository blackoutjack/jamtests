function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 3

  }

  JAM.stopProfile('load');

  return x === 3;
}
