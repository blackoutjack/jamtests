function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = Math.random() * 3;
  x = 4;
  x = Math.random() * 3;
  x = 5;
  x = Math.random() * 3;
  x = 6;

  }

  return x === 6;
}
