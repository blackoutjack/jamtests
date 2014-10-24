function runTest() {
  // math-bad.js
  x = JAM.call(Math.floor, Math, [Math.random() * 4])

  return typeof x === "undefined" || x !== 2;
}
