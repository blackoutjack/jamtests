function runTest() {
function pol(tx) {
    tx.commit();
  }
  x = undefined;
  introspect(pol) {
    x = 2;
  }

  return x === undefined;
}
