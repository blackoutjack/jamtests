function runTest() {

  JAM.startProfile('load');
  x = Math.floor(Math.random());

  JAM.stopProfile('load');

  return x !== 2;
}
