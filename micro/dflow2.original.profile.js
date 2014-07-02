function runTest() {

  JAM.startProfile('load');
z = 3; y = z; x = y;

  JAM.stopProfile('load');

  return x === 3;
}
