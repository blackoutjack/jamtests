function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function pol(tx) {
    tx.commit()
  }
  x = undefined;
  introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = 2
  }
  ;
  }

  JAM.stopProfile('load');

  return x === undefined;
}
