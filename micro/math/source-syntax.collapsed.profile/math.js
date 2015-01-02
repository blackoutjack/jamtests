
JAM.startProfile('load');
function runTest() {
  x = JAM.call(Math.floor, Math, [Math.random()])

  return x !== 2;
}

JAM.stopProfile('load');
