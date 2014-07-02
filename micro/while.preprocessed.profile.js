function runTest() {

  JAM.startProfile('load');
i = 3;
  var v0 = i < 5;
  for(;v0;) {
    x = i;
    i = i + 1;
    v0 = i < 5
  }
  ;

  JAM.stopProfile('load');

  return x === 4;
}
