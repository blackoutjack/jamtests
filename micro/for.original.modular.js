function runTest() {
introspect(JAMScript.introspectors.processAll) {
  for (var i = 0; i < 5; i = i + 1) { x = i; }

  }

  return x === 4;
}
