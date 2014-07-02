function runTest() {
introspect(JAMScript.introspectors.processAll) {
  y = 3; x = y;

  }

  return x === 3;
}
