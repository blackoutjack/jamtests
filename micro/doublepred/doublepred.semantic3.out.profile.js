function runTest() {

  JAM.startProfile('load');
  // doublepred.js
  x = 2;
  x = 3;
  x = 2;
  x = 4

  JAM.stopProfile('load');

  return x === 4;
}
