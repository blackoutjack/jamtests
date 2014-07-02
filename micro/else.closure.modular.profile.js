function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 4;
  if(x == 4) {
    x = 3
  }else {
    x = 2
  }
  ;
  }

  JAM.stopProfile('load');

  return x === 3;
}
