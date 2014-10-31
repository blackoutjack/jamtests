function runTest() {

  JAM.startProfile('load');
  // dflow2.js
  z = 3;
  y = z;
  x = y

  JAM.stopProfile('load');

  return x === 3;
}
