function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 2;
  x = 3;
  x = 2;
  x = 4;

  }

  return x === 4;
}
