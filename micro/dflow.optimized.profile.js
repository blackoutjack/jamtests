function runTest() {

  JAM.startProfile('load');
  x=y=3;

  JAM.stopProfile('load');

  return x === 3;
}
