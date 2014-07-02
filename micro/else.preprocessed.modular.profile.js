function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 4;
  var v0 = x == 4;
  if(v0) {
    x = 3
  }else {
    x = 2
  }
  ;
  }

  JAM.stopProfile('load');

  return x === 3;
}
