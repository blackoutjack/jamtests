function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 3
  x = 2
  x = 6
  x = 5

  }

  JAM.stopProfile('load');

  return x === 6;
}
