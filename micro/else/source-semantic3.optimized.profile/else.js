function runTest() {

  JAM.startProfile('load');
  x=4;x=4==x?3:2

  JAM.stopProfile('load');

  return x === 3;
}
