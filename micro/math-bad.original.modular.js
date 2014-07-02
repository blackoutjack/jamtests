function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = Math.floor(Math.random() * 4);

  }

  return typeof x === "undefined" || x !== 2;
}
