function runTest() {
introspect(JAMScript.introspectors.processAll) {
  try {
    x = 1
  }catch(e$$4) {
    x = 2
  }
  ;
  }

  return x === 1;
}
