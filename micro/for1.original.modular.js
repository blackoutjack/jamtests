function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var i = 0;
  for (;;) {
    if (i > 5) break;
    i++;
  }

  }

  return i === 6;
}
