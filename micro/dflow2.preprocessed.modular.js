function runTest() {
introspect(JAMScript.introspectors.processAll) {
  z = 3;
  y = z;
  x = y;

  }

  return x === 3;
}
