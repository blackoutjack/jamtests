function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = Math.floor(Math.random());

  }

  return x !== 2;
}
