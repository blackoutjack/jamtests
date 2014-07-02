function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 3

  }

  return x === 3;
}
