function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = Math.floor(Math.random());

  }

  JAM.stopProfile('load');

  return x !== 2;
}
