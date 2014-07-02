function runTest() {

  JAM.startProfile('load');
y = 3;
  x = y;

  JAM.stopProfile('load');

  return x === 3;
}
