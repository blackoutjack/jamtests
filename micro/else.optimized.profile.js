function runTest() {

  JAM.startProfile('load');
x=4;var v0=4==x;x=v0?3:2;

  JAM.stopProfile('load');

  return x === 3;
}
