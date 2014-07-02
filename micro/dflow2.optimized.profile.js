function runTest() {

  JAM.startProfile('load');
x=y=z=3;

  JAM.stopProfile('load');

  return x === 3;
}
