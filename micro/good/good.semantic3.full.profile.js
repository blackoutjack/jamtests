function runTest() {

  JAM.startProfile('load');
  // good.js
  x = 3

  JAM.stopProfile('load');

  return x === 3;
}
