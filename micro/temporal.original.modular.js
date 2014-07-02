function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 3
  x = 2
  x = 6
  x = 5

  }

  return x === 6;
}
