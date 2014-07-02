function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  try {
    x = 1
  }catch(e$$4) {
    x = 2
  }
  ;
  }

  JAM.stopProfile('load');

  return x === 1;
}
