function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  for (var i = 0; i < 5; i = i + 1) { x = i; }

  }

  JAM.stopProfile('load');

  return x === 4;
}
