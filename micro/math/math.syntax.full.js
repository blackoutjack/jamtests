function runTest() {
  // math.js
  x = JAM.call(Math.floor, Math, [Math.random()])

  return x !== 2;
}
