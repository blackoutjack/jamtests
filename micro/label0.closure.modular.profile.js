function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 0;
  var i = 0;
  lbl:for(;i < 4;i++) {
    x++;
    if(i == 1) {
      break lbl
    }
  }
  ;
  }

  JAM.stopProfile('load');

  return x === 1;
}
