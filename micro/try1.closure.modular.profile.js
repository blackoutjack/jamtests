function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  try {
    x = 2
  }finally {
    x = 3
  }
  ;
  }

  JAM.stopProfile('load');

  return x === 3;
}
