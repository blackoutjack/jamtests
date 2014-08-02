function runTest() {

  JAM.startProfile('load');
  x = JAM.call(Math.floor, Math, [Math.random()]);

  JAM.stopProfile('load');

  return x !== 2;
}
