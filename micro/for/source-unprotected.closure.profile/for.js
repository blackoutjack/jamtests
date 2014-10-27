function runTest() {

  JAM.startProfile('load');
  var i = 0;
  for (;i < 5;i = i + 1) {
    x = i;
  }

  JAM.stopProfile('load');

  return x === 4;
}
