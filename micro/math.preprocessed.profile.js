function runTest() {

  JAM.startProfile('load');
var v0 = Math.random();
  x = Math.floor(v0);

  JAM.stopProfile('load');

  return x !== 2;
}
