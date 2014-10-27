function runTest() {
  function pol(tx) {
    tx.commit();
    return;
  }
  x = undefined;
  introspect(pol) {
    x = 2;
  }

  return x === undefined;
}
