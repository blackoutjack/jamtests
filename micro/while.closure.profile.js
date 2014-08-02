function runTest() {

  JAM.startProfile('load');
  i = 3;
  for(;i < 5;) {
    x = i;
    i++
  }
  ;

  JAM.stopProfile('load');

  return x === 4;
}
