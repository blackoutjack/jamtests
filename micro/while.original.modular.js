function runTest() {
introspect(JAMScript.introspectors.processAll) {
  i = 3; while (i < 5) { x = i; i++; }

  }

  return x === 4;
}
