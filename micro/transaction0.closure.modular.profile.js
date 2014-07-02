function runTest() {

  JAM.startProfile('load');
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

  JAM.stopProfile('load');

  return x === undefined;
}
