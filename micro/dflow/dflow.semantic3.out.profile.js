function runTest() {

  JAM.startProfile('load');
  // dflow.js
  y = 3;
  x = y

  JAM.stopProfile('load');

  return x === 3;
}
