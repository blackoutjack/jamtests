function runTest() {
introspect(JAMScript.introspectors.processAll) {
  try {
      x = 1;
  } catch(e) {
      x = 2;
  }

  }

  return x === 1;
}
