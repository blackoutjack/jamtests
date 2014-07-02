function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var i = 0;
  for (;;) {
    if (i > 5) break;
    i++;
  }

  }

  JAM.stopProfile('load');

  return i === 6;
}
