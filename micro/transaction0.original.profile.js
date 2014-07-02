function runTest() {

  JAM.startProfile('load');
function pol(tx) {
    tx.commit();
  }
  x = undefined;
  introspect(pol) {
    x = 2;
  }

  JAM.stopProfile('load');

  return x === undefined;
}
