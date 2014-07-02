function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function pol(tx) {
    tx.commit();
    return
  }
  x = undefined;
  introspect(pol) {
    x = 2
  }
  ;
  }

  return x === undefined;
}
