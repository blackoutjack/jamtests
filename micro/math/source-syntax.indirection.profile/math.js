
JAM.startProfile('load');
function runTest() {
  var v0 = Math.random();
  x = JAM.call(Math.floor, Math, [v0])

  return x !== 2;
}

JAM.stopProfile('load');
