function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 2;
  x = 3;
  x = 2;
  x = 4;

  }

  JAM.stopProfile('load');

  return x === 4;
}
