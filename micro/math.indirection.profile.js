function runTest() {

  JAM.startProfile('load');
  var v0 = Math.random();
  x = JAM.call(Math.floor, Math, [v0]);

  JAM.stopProfile('load');

  return x !== 2;
}
