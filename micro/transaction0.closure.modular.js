function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function pol(tx) {
    tx.commit()
  }
  x = undefined;
  introspect(pol) {
    x = 2
  }
  ;
  }

  return x === undefined;
}
