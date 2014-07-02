function runTest() {

  JAM.startProfile('load');
var i = 0;
  for(;;) {
    var v0 = i > 5;
    if(v0) {
      break
    }
    i = i + 1
  }
  ;

  JAM.stopProfile('load');

  return i === 6;
}
