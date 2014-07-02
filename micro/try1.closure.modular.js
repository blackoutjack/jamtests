function runTest() {
introspect(JAMScript.introspectors.processAll) {
  try {
    x = 2
  }finally {
    x = 3
  }
  ;
  }

  return x === 3;
}
