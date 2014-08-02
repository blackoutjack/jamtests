function runTest() {

  JAM.startProfile('load');
  x = 3;

  JAM.stopProfile('load');

  return x === 3;
}
